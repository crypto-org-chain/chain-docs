# Reward

## Abstract

Rewarding module enable crypto chain to reward protocol participators, the design should meet following requirements:

- The total supply of CRO is fixed.
- The distribution should be "fair", i.e. all honest participators should get rewards, non-participators should not, and the amount of rewards get distributed to a validator should be proportional to it's contribution (sum of the voting power of each vote).
- The newly emitted coins for rewarding is adjusted according to [total staking](#total-staking) and current block time.

The basic procedure is:

- Record participators for each block, sum the voting powers for each participator at the vote time.
- Distribute the accumulated reward pool according to the recorded sum powers at the end of reward period.

For example, in one reward period with N blocks, validator `A` only participate in the first block, and all the other validators participate in all blocks, assuming the validator set is static during this period, then we have:

```
p: voting power of validator A
p': sum of voting power of all other validators

block1: participators: p', p
block2: participators: p'
block3: participators: p'
...
blockN: participators: p'

# The rewards of A is:
reward_a = reward_pool * p / (p + p' * N)
```

The result of reward distribution should be written into events of block results.

### Concepts

#### Reward participator

All the validators who follow the protocol honestly should participate in the reward distribution.

In tendermint's terms, following the protocol honestly means being a signed voter in `last_commit_info` of `BeginBlockRequest`.

It can be described precisely as:

```rust
begin_block_req
  .last_commit_info
  .votes
  .filter(|vote| vote.signed_last_block)
```

#### Reward period

Rewards are distributed to the validators periodically, the length of the period is configured in network parameter `reward_period_seconds` in genesis config.

#### Reward pool

During the reward period, the following sources of funds are accumulated into reward pool:

- [Monetary expansion](#monetary-expansion)
- [Transaction Fees](../protocol/transaction.md#transaction-fees)
- Slashings

The reward pool gets accumulated throughout the whole reward period; it gets distributed once at the end of each reward period.

Due to fixed point calculations, there may be a few remainders from arithmetic operations after distribution. These remainder amounts should be left in the rewards pool for the next period.

If there is zero participant for the period, the rewards pool should be left to the next period, rather than get burned.

#### Total staking

The sum of bonded coins of all active validators at some block.

#### Monetary expansion

New coins are minted into the reward pool at the end of reward period.

The amount is calculated based on the total staking of current state and current block time.

The total minted coins for rewarding shouldn't exceed the amount configured in network parameter `monetary_expansion_cap`.

The calculation is as follows:

```python
R0 = network_parameter["monetary_expansion_r0"]  # upper bound for the reward rate p.a.
P = network_parameter["reward_period_seconds"]
tau = current tau  # refer to section "Decay of parameter tau"
S = total staking  # refer to section "Total staking"
Y = 365 * 24 * 60 * 60  # seconds of a year

CAP = network_parameter["monetary_expansion_cap"]
minted = total minted coins so far  # recorded in state

R = (R0 / 1000) * exp(-S / tau)
N = floor(S * (pow(1 + R, P / Y) - 1))
N = N - N % 10000  # less precision requirement
result = min(N, CAP - minted)  # the amount of newly minted coins
```

#### Decay of parameter tau

The parameter `tau` in the monetary expansion calculation should be initialized to network parameter `monetary_expansion_tau` and gets decayed for each reward distribution.

The rate of decaying is configured in network parameter `monetary_expansion_decay`.

The calculation is like this:

```python
rate = network_parameter["monetary_expansion_decay"]

# init
tau = network_parameter["monetary_expansion_tau"]

# decay
tau = tau * rate / 1000
```

To prevent overflow of integer multiplication, it can be transformed into:

```python
tau = (tau / 1000) * rate + (tau % 1000) * rate
```

#### Fixed point arithmetic

We should use continued fraction method to compute the `exp` and `pow` with fixed point arithmetics.

First we transform the power function into exponential and natural logarithm functions:

```
pow(x, y) = exp(y * log(x))
```

The `exp` and `log` are computed with continued fractions representation, using a form with better convergence:

```
exp2(x, y) = exp(x / y)
log2(x, y) = log(1 + x / y)
```

![MainEq1](https://wikimedia.org/api/rest_v1/media/math/render/svg/7aa8187974263e0f3e7cc293ca82d3dc3d75af90)

![MainEq2](https://wikimedia.org/api/rest_v1/media/math/render/svg/90abfa2132828fc8eea5d3551dfa4df25dbdfa87)

With above substitutes, we can transform the formula like this:

```
R = (R0 / 1000) * exp(-S/tau)
  = R0 * exp2(-S, tau) / 1000
N = S * (pow(1 + R, P / Y) - 1)
  = S * (exp(P * log(1 + R) / Y) - 1)
  = S * (exp2(P * log(1 + R), Y) - 1)
  = S * (exp2(P * log(1 + R0 * exp2(-S, tau) / 1000), Y) - 1)
  = S * (exp2(P * log2(R0 * exp2(-S, tau), 1000), Y) - 1)
```

Break it down into simpler computation steps:

```
# To keep the intermediate numbers smaller
S' = S / 10000000_00000000
tau' = tau / 10000000_00000000

n0 = exp2(-S', tau')
n1 = log2(R0 * n0, 1000)
n2 = exp2(P * n1, Y)
n3 = floor(S * (n2 - 1))
N  = n3 - n3 % 10000
```

> Fixed point number format: `I65F63`.
>
> `exp2` runs 25 iterations.
>
> `log2` runs 10 iterations.

TODO, how to compute the continued fractions form of `exp2` and `log2`.

## Implementation

### Network parameters

```rust
pub struct RewardsParameters {
    /// Reward period in seconds
    pub reward_period_seconds: u64,

    /// Maximum minted coins for rewards
    pub monetary_expansion_cap: Coin,
    /// Monetary expansion formula parameter R0
    pub monetary_expansion_r0: Milli,
    /// Monetary expansion formula parameter tau
    pub monetary_expansion_tau: u64,

    /// Decay rate of the parameter tau
    pub monetary_expansion_decay: u64,
}
```

Validation of `RewardsParameters`:

```rust
impl RewardsParameters {
    pub fn validate(&self) -> Result<(), &'static str> {
        if self.monetary_expansion_r0 > Milli::integral(1) {
            return Err("R0 can't > 1");
        }
        if self.monetary_expansion_tau == 0 {
            return Err("tau can't == 0");
        }
        if self.reward_period_seconds > 365 * 86400 {
            return Err("reward period can't exceed 365 days");
        }
        if self.monetary_expansion_decay > 1_000_000 {
            return Err("decay can't > 1_000_000");
        }
        Ok(())
    }
}
```

### State

```rust
/// Participate in the computation of app_hash, empty block should not modify
pub struct RewardState {
    /// Fees and slashings accumulated through current reward period
    pub period_bonus: Coin,
    /// last block height that updated it
    pub last_block_height: BlockHeight,
    /// last reward distribution time, default to the genesis time
    pub last_distribution_time: Timespec,
    /// Record how many coins have been minted so far, shouldn't exceed the monetary_expansion_cap
    pub minted: Coin,
    /// Current tau value of monetary expansion calculation
    pub current_tau: u64,
}

pub struct ValidatorState {
    ...

    /// Records the participators for reward distribution, the value is the sum of voting powers for each signed vote of the participator
    reward_participators: HashMap<StakingAddress, u64>,
}

pub struct ChainNodeApp {
    pub reward_state_updated: bool
}
```

Use `u64` for the sum of voting powers is enough, because total staking powers is smaller than 10 billion, so if maximum staking powers participates in all the blocks, the number of blocks we can support before `u64` overflows is:

```
>>> 9223372036854775807 / 10000000000
922337203
```

It should be more than enough for one reward period, but still the implementation should avoid panic or wrap-around when overflows happen in extreme case.

### Predefined symbols

In the following sections, we use following predefined symbols:

- `reward_state` for the current `RewardState`
- `validator_state` for the current `ValidatorState`
- `node_state` for the current `ChainNodeApp`
- `network_parameter` for the current `NetworkParameter`

### ABCI Events

#### Begin block

The main actions all happens in begin block event, it's the time we get reports of participators through `last_commit_info`, also the time the node state is consistent.

1. Collect the validator addresses of reward participators from `last_commit_info`.
2. Record them, and accumulate their voting powers.
3. If a reward period has passed, distribute the reward pool according to the participator statistics.

##### `begin_block`

```rust
fn begin_block(req: RequestBeginBlock) {
    let addrs = req.last_commit_info.votes
        .filter(|vote| vote.signed_last_block)
        .map(|vote| get_validator_address(vote));

    for addr in addrs {
        // Panic or not is decided by the implementator
        let staking_addr = find_staking_address(addr).unwrap();
        // Panic or not is decided by the implementator
        let power = get_voting_power(staking_addr).unwrap();
        let amount = u64::from(power);
        if validator_state.reward_participators.contains(staking_addr) {
            // Use saturating_add for better robustness
            validator_state.reward_participators[staking_addr] += amount;
        } else {
            validator_state.reward_participators[staking_addr] = amount;
        }
    }

    // Use saturating_add for better robustness
    if reward_state.last_distribution_time + network_parameter.reward_period_seconds
        > node_state.block_time {
        // Don't distribute rewards if reward period not reached yet
        return None;
    }
    reward_state.last_distribution_time = node_state.block_time;

    // Mark the dirty flag as soon as reward period reached.
    node_state.rewards_pool_updated = true;

    let minted = min(
      // Use saturating_sub to prevent underflow
      network_parameter.monetary_expansion_cap - reward_state.minted,
      // Refer to the following sections for the implementation
      monetary_expansion(
          // Refer to the following sections for the implementation
          total_staking(),
          reward_state.current_tau,
          network_parameter.monetary_expansion_r0,
          network_parameter.reward_period_seconds,
      )
    );
    reward_state.minted += minted;

    // Decay the tau parameter, use the overflow avoid method mentioned above
    reward_state.current_tau = mul_micro(
        reward_state.current_tau,
        network_parameter.monetary_expansion_decay,
    );

    // Total reward pool for this period
    let reward_pool = reward_state.period_bonus + minted;

    // Use saturating_add for better robustness
    let sum_power = validator_state.reward_participators.values().sum();

    // Compute the rewards distribution,
    // compute `reward_pool * power / sum_power` for each participator
    let distribution = vec![];
    if sum_power == 0 {
        // If there is zero participator, the newly minted coins should be left to the next period
        reward_state.period_bonus += minted;
    } else {
        // Remaining coins after distribution
        let remains = reward_pool;

        for (addr, power) in validator_state.reward_participators {
            // Use some type bigger than u64 (e.g. u128) to prevent overflow of multiplication
            let amount = reward_pool * power / sum_power;
            remains -= amount;
            distribution.push((addr, amount));
        }

        // Remains of distribution is left to the next period
        reward_state.period_bonus = remains;
    }

    // Add the rewards to the accounts, implementation is in following sections
    add_rewards(distribution);

    // Clear rewards statistics
    validator_state.reward_participators.clear();

    // The Result (distribution, minted) should be written into block result event list
}
```

##### `monetary_expansion`

TODO

##### `total_staking`

```rust
fn total_staking() {
    let sum = 0;
    for staking_addr in validator_state.validators {
        // Panic or not is decided by implementator
        let account = get_account(staking_addr).unwrap();
        sum += account.bonded;
    }
    sum
}
```

##### `add_rewards`

```rust
// accounts should be stored in merkle trie, the details are ignored here.
fn add_rewards(dist) {
    for staking_addr, amount in dist {
        // Panic or not is decided by implementator
        let account = get_account(staking_addr).unwrap();
        account.bonded += amount;
    }
}
```

#### Commit

Update `last_block_height` if `RewardsPoolState` changed:

```rust
if node_state.reward_state_updated {
    reward_state.last_block_height = current_block_height;
    node_state.reward_state_updated = false;
}
```

### Hooks

#### When validator becomes inactive at `end_block`

When validator get jailed or unbonded enough to become inactive during a reward period, it's reward participation record should be removed, so it won't receive any rewards.

```rust
validator_state.reward_participators.remove(staking_addr)
```

#### Slashing executed

When slashing executed, the `slashed_amount` needs to be added to `period_bonus` of `RewardState`.

```rust
reward_state.period_bonus += slashed_amount;
node_state.rewards_pool_updated = true;
```

#### Fee collected

When transaction fees are collected, the amount needs to be added to `period_bonus` of `RewardState`.

```rust
reward_state.period_bonus += fees;
node_state.rewards_pool_updated = true;
```
