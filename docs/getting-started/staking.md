# Staking
Crypto.com Chain is based on Tendermint Core's consensus engine, it relies on a set of validators (Council Node) to participate in the proof of stake (PoS) consensus protocol, and they are responsible for committing new blocks in the blockchain. This document contains the specification of the initial staking, slashing, and rewards mechanisms which establish the foundation of the token ecosystem of CRO.

## Account

Account is a data structure that holds state about staking:

```
pub struct Account {
    pub nonce: usize, // transaction counter
    pub bonded: Coin, // bonded staked amount
    pub unbonded: Coin, // unbonded staked amount
    pub unbonded_from: Timespec, // when the unboded staked amount can be withdrawn
    pub address: StakedStateAddress, // ETH-style address of staking account; TODO: extended address?
    pub jailed_until: Option<Timespec>, // time until which current account is jailed
}
```

TODO: should it have a minimum bonded amount?

## Council Node

Council Node is a data structure that holds state about a node responsible for transaction validation and service node whitelist management:

```
pub struct CouncilNode {
    pub name: String, // human-readable name
    pub security_contact: Option<String>, // optional email for security contact
    pub staking_address: RedeemAddress, // account with the required staked amount
    pub consensus_pubkey: crypto.PubKey, // Tendermint consensus validator-associated public key: note that Tendermint supports different signature schemes
    pub council_pubkey: PublicKey, // key for council node-related transaction types
    pub service_whitelist_pubkey: PublicKey, // key for service node whitelist-related transaction types
    pub nonce: usize, // update counter?
}
```
### Joining the network
Anyone who wishes to become a council node can submit a NodeJoinTx; this transaction is considered to be valid as long as:

1. The associated staking account has `bonded` amount >= `COUNCIL_NODE_MIN_STAKE` and is not [punished](#punishments);
1. There is no other validator with the same `staking_address` or the `consensus_pubkey`

####  Voting power and proposer selection
At the beginning of each round, a council node will be chosen deterministically to be the block proposer.

The chance of being a proposer is directly proportional to their *voting power* at that time, which, in general, is equal to the `bonded` amount (rounded to the whole unit) in the associated staking address of the council node.

The top `MAX_VALIDATORS` with the most `bonded` amount would put to the *active* validator set in `END_BLOCK`. If a validator's `bonded` amount is below the top `MAX_VALIDATORS`, It will be considered as *non-active* and would not be able to take part in the consensus. For example, 

- If the number of *active* validators < `MAX_VALIDATORS`:

    |    |  `bonded` amount < `COUNCIL_NODE_MIN_STAKE` |  `bonded` amount => `COUNCIL_NODE_MIN_STAKE` | 
    |----|---|---|
    | Validator's voting power |  Set to 0 |  Set to the `bonded` amount| 

- On the other hand, If the number of *active* validators = `MAX_VALIDATORS`: 

    |    |  `bonded` amount is below the top `MAX_VALIDATORS` |  Otherwise | 
    |----|---|---|
    | Validator's voting power |  Set to 0 |  Set to the `bonded` amount| 



## Rewards

To incentivise validators to run the network, rewards are accumulated and distributed to the validators. There are three sources for the rewards:

1. Monetary expansion with a fixed total supply
1. [Transaction Fees](./transaction.md#transaction-fee)
1. Slashing of byzantine and non-live nodes

The `RewardsPool` data structure stores all the information about remaining funds and distribution states:

```
pub struct RewardsPool {
    pub period_bonus: Coin, // rewards accumulated from fees and slashing
    pub last_block_height: BlockHeight, // when was the pool last updated
    pub last_distribution_time: Timespec, // when was the pool last distributed
    pub minted: Coin,  // record the number of new coins ever minted, can't exceeds max supply
    pub tau: u64,  // a decaying parameter in monetery expansion process
}
```

### Reward distribution

Rewards are distributed periodically (e.g. daily), rewards are accumulated during each period, and block proposers are recorded. At the end of each period, validators will receive a portion of the 'reward pool' as a reward for participating in the consensus process. Specifically, the reward is proportional to the number of blocks that were successfully proposed by the validator; it is calculated as follows:

```
rewards of validator = total rewards * number of blocks proposed by the validator / total number of blocks
```

The remainder of division will become rewards of next period.

The recording of block proposer is done in `BeginBlock` right before rewards distribution.

### Monetary expansion

Monetary expansion is designed to release tokens from the reserve account to the reward pool, while keeping a fixed max total supply. The number of tokens being released at each period is defined as:

```
released tokens = S * R_0 * exp(max(-20, -S/tau))

S: total stakings at current block when reward distribution happens
R_0: upper bound for the reward rate p.a. 
```

Note that this is an exponential decay function, where the index of  controls the “steepness” of the curve. Precisely, this damping factor controls the exponential decay rate of the reward function.

The parameter `tau` will decay each time rewards get distributed,:

```
tau(n) = tau(n-1) * 0.99986
tau(0) = 1_4500_0000_0000_0000
```

The number is calculated with [fixed-point arithmetic](https://docs.rs/fixed/), the exponencial function is computed with [continued fraction method](https://en.wikipedia.org/wiki/Exponential_function#Continued_fractions_for_ex) with 100 iterations.


The rewards validator received goes to the bonded balance of their staking account, and results in validator [voting power change](#end/commit_block_state_update) accordingly.

## Punishments

This part describes functionality that aims to disincentivize network-observable actions, such as faulty validations, of
participants with values at stake by penalizing/slashing and jailing them. The penalties may include losing some amount
of their stake (surrendered to the rewards pool), losing their ability to perform the network functionality for a period
of time, collect rewards etc.

Punishments for a validator are triggered when they either make a *byzantine fault* or become *non-live*: 

- Liveness Faults (Low availability)

    A validator is said to be **non-live** when they fail to sign at least `MISSED_BLOCK_THRESHOLD` blocks in
    last `BLOCK_SIGNING_WINDOW` blocks successfully. `BLOCK_SIGNING_WINDOW` and `MISSED_BLOCK_THRESHOLD` are network parameters and can
    be configured during genesis (currently, changing these network parameters at runtime is not supported). Tendermint
    passes signing information to ABCI application as `last_commit_info` in `BeginBlock` request.

:::tip Example:
    For example, if `BLOCK_SIGNING_WINDOW` is `100` blocks and `MISSED_BLOCK_THRESHOLD` is `50` blocks, a validator will be
    marked as **non-live** if they fail to successfully sign at least `50` blocks in last `100` blocks.
:::
- Byzantine Faults (Double signing)

    A validator is said to make a byzantine fault when they sign conflicting transactions at the same height and round.
    Tendermint has mechanisms to publish evidence of validators that signed conflicting votes (it passes this information to
    ABCI application in `BeginBlock` request), so they can be punished by the application.

### Jailing

A validator is jailed if:

1. They are not **live**, i.e., they failed to sign `missed_block_threshold` blocks in last
   `block_signing_window` blocks successfully. 
1. They make a byzantine fault, e.g., they sign messages at same height and round.

When a validator gets jailed, they cannot perform any operations relating to their account, for example,
`withdraw_stake`, `deposit_stake`, `unbond_stake`, etc., until they are un-jailed. Also, a validator cannot be un-jailed
before `account.jailed_until` which is set to `block_time + jail_duration` while jailing. `jail_duration` is a network
parameter which can be configured during genesis.

### Un-jailing

When a jailed validator wishes to resume normal operations (after `account.jailed_until` has passed), they can create
`UnjailTx` which marks them as un-jailed and adds them back to validator set.

### Slashing

Validators are responsible for signing or proposing block at each consensus round. It is important that they maintain excellent availability and network connectivity to perform these tasks.  A penalty performed by the slashing module should be imposed on validators' misbehaviour or unavailability to reinforce this. Similar to jailing, a validator is slashed if:

1. They are not **live**, i.e., they failed to sign `MISSED_BLOCK_THRESHOLD` blocks in last `BLOCK_SIGNING_WINDOW` blocks successfully.
1. They make a byzantine fault, e.g., they sign messages at same height and round.

Unlike jailing, which happens immediately after punishments are triggered, slashing happens after `slash_wait_period`.
`slash_wait_period` is a network parameter and can be configured during genesis. Validators are not immediately slashed
because faulty behavior may be non-malicious, e.g. due to misconfiguration. `slash_wait_period` is introduced to create
a _tolerant_ punishment setup.

Besides this, if a validator makes multiple faults in `slash_wait_period`, they'll only be slashed once for the worst
fault in that time period.

#### Slashing Rate

Whenever a validator is slashed, a percentage of their `bonded` and `unbonded` amount is transferred to `rewards_pool`.
There are many factors involved in determining the slashing rate for a validator:

1. `MAX_LIVENESS_SLASH_RATIO` and `MAX_BYZANTINE_SLASH_RATIO` are the two network parameters used while calculating the slashing
   rate. Both of these can be configured in the genesis.
1. `validator_voting_percent` is the voting percent of faulty validator in the network.
1. List of all the faulty validators in that period.

The algorithm for calculating `slashing_rate` is as follows:

```
validator_slash_percent = max(slash percent of individual faults)
```

For example, if a validator made a byzantine fault as well as they are non-live, then,

```
validator_slash_percent = max(liveness_slash_percent, byzantine_slash_percent)
```

And if there are `n` faulty validators in this period, then,

```
slashing_rate = 
    validator_slash_percent * 
    (
        sqrt(validator_voting_percent_1) +
        sqrt(validator_voting_percent_2) +
        .. + 
        sqrt(validator_voting_percent_n)
    )^2
```

So, if one validator of 10% voting power faults, it gets a 10% slash (assuming `liveness_slash_percent` and
`byzantine_slash_percent` are both 100%). While, if two validators of 5% voting power each fault together, they both get
a 20% slash.

```
slashing_rate = max(liveness_slash_percent, byzantine_slash_percent) * (sqrt(validator_voting_percent_1) + sqrt(validator_voting_percent_2))^2
              = max(1, 1) * (sqrt(0.05) + sqrt(0.05))^2                // assuming liveness_slash_percent and byzantine_slash_percent are both 100%
              = 0.2
```


#### Validators / Council Nodes

Each `BeginBlock` contains two fields that will determine penalties:

- LastCommitInfo: this contains information which validators signed the last block
- ByzantineValidators: evidence of validators that acted maliciously

Their processing is the following:

```
for each evidence in ByzantineValidators:
    if evidence.Timestamp >= BeginBlock.Timestamp - MAX_EVIDENCE_AGE:
        account = (... get corresponding account ...)
        if account.slashing_period.end is set and it's before BeginBlock.Timestamp:
            account.slashing_period.slashed_ratio = max(account.slashing_period.slashed_ratio, BYZANTINE_SLASH_RATIO)
        else:
            if account.slashing_period.end is set and it's after BeginBlock.Timestamp:
                END/COMMIT_BLOCK_STATE_UPDATE(deduct(slashing_period, account))

            account.slashing_period = Some(SlashingPeriod(start = Some(BeginBlock.Timestamp),
                end = Some(BeginBlock.Timestamp + SLASHING_PERIOD_DURATION, slashed_ratio = BYZANTINE_SLASH_RATIO)))
            account.jailed_until = Some(BeginBlock.Timestamp + JAIL_DURATION)


for each signer in LastCommitInfo:
    council_node = (... lookup by signer / tendermint validator key ...)
    update(council_node, BLOCK_SIGNING_WINDOW)

for each council_node:
    missed_blocks = get_missed_signed_blocks(council_node)
    if missed_blocks / BLOCK_SIGNING_WINDOW >= MISSED_BLOCK_THRESHOLD:
        account = (... lookup corresponding account ...)
        if account.slashing_period.end is set and it's before BeginBlock.Timestamp:
            account.slashing_period.slashed_ratio = max(account.slashing_period.slashed_ratio, LIVENESS_SLASH_RATIO)
        else:
            if account.slashing_period.end is set and it's after BeginBlock.Timestamp:
                END/COMMIT_BLOCK_STATE_UPDATE(deduct(slashing_period, account))

            account.slashing_period = Some(SlashingPeriod(start = Some(BeginBlock.Timestamp),
                end = Some(BeginBlock.Timestamp + SLASHING_PERIOD_DURATION, slashed_ratio = LIVENESS_SLASH_RATIO)))
            account.jailed_until = Some(BeginBlock.Timestamp + JAIL_DURATION)
```

## “Global state” / APP_HASH

Tendermint expects a single compact value, `APP_HASH`, after each BlockCommit that represents the state of the application. In the early Chain prototype, this was constructed as a root of a Merkle tree from IDs of valid transactions.

In this staking scenario, some form of “chimeric ledger” needs to be employed, as staking-related functionality is represented with accounts. In Ethereum, [Merkle Patricia Trees](https://github.com/ethereum/wiki/wiki/Design-Rationale#merkle-patricia-trees) are used:  (The [alternative](https://github.com/tendermint/iavl) in Tendermint:  depends on the order of transactions though)

They could possibly be used to represent an UTXO set: https://medium.com/codechain/codechains-merkleized-utxo-set-c76c9376fd4f

The overall “global state” then consists of the following items:

- UTXO set
- Account
- RewardsPool
- CouncilNode
- ServiceNode
- MerchantWhitelist (not yet spec-out / TODO)

So each component could possibly be represented as MPT and these MPTs would then be combined together to form a single `APP_HASH`.

### END/COMMIT_BLOCK_STATE_UPDATE

Besides committing all the relevant changes and computing the resulting `APP_HASH` in `BlockCommit`; for all changes in *Accounts*, the implementation needs to signal `ValidatorUpdate` in `EndBlock`.

 For example, when the number of *active validators* is less then `MAX_VALIDATORS`:
 
 -  When the changes are relevant to the `bonded` amount of the council node’s staking address and the validator is not jailed: 

    - If the `bonded` amount changes and < `COUNCIL_NODE_MIN_STAKE`, then the validator’s voting power should be set to 0;
    - If the `bonded` amount changes and >= `COUNCIL_NODE_MIN_STAKE`, then the validator’s voting power should be set to that amount (rounded to the whole unit).

- When the changes are relevant to the jailing condition of the council node’s staking address:

    - If the `jailed_until` changes to `Some(...)` (i.e. the node is being *jailed)*, then the validator’s power should be set to 0;
    - If the `jailed_until` changes to `None` (i.e. the node was *un-jailed*) and `bonded` amount >= `COUNCIL_NODE_MIN_STAKE`, then the validator’s power should be set to the `bonded` amount (rounded to the whole unit).


    It can be summarized in the following table:
    |    |   `bonded` <  `COUNCIL_NODE_MIN_STAKE` |  `bonded` >=  `COUNCIL_NODE_MIN_STAKE` but *Jailed* | `bonded` >=  `COUNCIL_NODE_MIN_STAKE` and *NOT jailed* | 
    |----|---|---|---|---|
    |Validator's voting power| Set to 0 | Set to 0| Set to the `bonded` amount| 

On the other hand, If the number of the current *active* validators is equal to  `MAX_VALIDATORS`, the validator's voting power will also be depended on whether its `bonded` amount is at the top `MAX_VALIDATORS`, please refer to the [previous section](#voting-power-and-proposer-selection)

### InitChain

The initial prototype’s configuration will need to contain the following elements:

- [Network parameters](./network-parameters.md)
- ERC20 snapshot state / holder mapping `initial_holders`:
`Vec<(address: RedeemAddress, is_contract: bool, amount: Coin)>` (or `Map<RedeemAddress, (bool, Coin)>`)
- Network long-term incentive address: `nlt_address`
- Secondary distribution and launch incentive addresses: `dist_address1`, `dist_address2`
- Initial validators: `Vec<CouncilNode>`
- Bootstrap nodes / initially bonded: `Vec<RedeemAddress>`

The validation of the configuration is the following:

1. validate parameters format (e.g. CUSTOMER_ACQUIRER_SHARE + MERCHANT_ACQUIRER_SHARE + COUNCIL_NODE_SHARE = 1.0)
2. check that sum of amounts in `initial_holders` == MAX_COIN (network constant)
3. check there are no duplicate addresses (if Vec) in `initial_holders`
4. for each `council_node` in `Vec<CouncilNode>`: check `staking_address` is in `initial_holders` and the amount >= `COUNCIL_NODE_MIN_STAKE`
5. for each `address` in initially bonded `Vec<RedeemAddress>`: check `address` is `initial_holders` and the amount >= `COMMUNITY_NODE_MIN_STAKE`
6. size(Validators in InitChainRequest) == size(`Vec<CouncilNode>`) and for every CouncilNode, its `consensus_pubkey` appears in Validators and power in Validators corresponds to staking address’ amount

If valid, the genesis state is then initialized as follows:

1. initialize RewardsPool’s amount with amounts corresponding to: `nlt_address` + `dist_address1` + `dist_address2`
2. for every council node, create a `CouncilNode` structure
3. for every council node’s staking address and every address in initially bonded: create `Account` where all of the corresponding amount is set as `bonded`
4. for every address in `initial_holders` except for `nlt_address`, `dist_address1`, `dist_address2`, council nodes’ staking addresses, initially bonded addresses: if `is_contract` then add the amount to RewardsPool else create `Account` where the amount is all in `unbonded` and `unbonded_from` is set to genesis block’s time (in InitChain)
