# Staking states and transitions

```rust
struct StakedState {
    address: StakedStateAddress,
    nonce: u64,
    bonded: Coin,
    unbonded: Coin,
    unbonded_from: Timespec,
    validator: Option<Validator>,
}

struct Validator {
    council_node: CouncilNode,
    jailed_until: Option<Timespec>,
    inactive_time: Option<Timespec>,
    used_validator_keys: Vec<(TendermintValidatorPubKey, Timespec)>,
}
```

## States

### Clean staking

`validator.is_none()`

### Validator

`validator.is_some()`

There are several variants of it:

#### Active

`validator.inactive_time.is_none()`

> **_NOTE:_** Active validator doesn't nessesarily mean the final validator take effect in tendermint, please refer to
> [Choose final validators](#choose-final-validators)

#### Inactive

`validator.inactive_time.is_some()`

#### Jailed

`validator.jailed_until.is_some()`

> **_NOTE:_** Jailed implies inactive, but not vice versa

## State transitions

### From "clean staking" or "inactive(unjailed) validator" to active validator

#### Node join

The only way to transit to active validator is by executing `NodeJoinTx`, the preconditions are:

- `bonded >= min_required_staking`
- The validator pubkey/address is not already used by others, it's ok to re-use the old keys used by itself if it's a re-join from an inactive validator.
- Not jailed if transitting from inactive validator

### From "active validator" to "inactive validator"

There are several cases for this:

#### Bonded coins become lower than required

When `bonded < min_required_staking`, this transition happens.

The reasons for dropping of bonded coins maybe:

- Execute `UnbondTx` at `deliver_tx` event
- Slashed for non-live or byzantine faults at `begin_block` event

> **_NOTE:_** The transition happens immediatelly in `deliver_tx` or `begin_block` events, won't reverse automatically
> when bonded coins become enough again even in the same block, so the activeness is always well-defined during the
> whole process.

#### Jailed for byzantine faults

Jailed always implies inactive.

This happens in `begin_block` event.

### From "jailed validator" to "inactive(unjailed) validator"

#### Unjail

The only way to leave jailed validator state is by executing `UnjailTx`, the preconditions are:

- Already jailed
- `block_time >= jailed_until`

### From "inactive validator" to "clean staking"

#### Clean up

The clean up procedure will remove the validator record if:

- Not jailed
- `block_time >= inactive_time + cleanup_period`

> _**NOTE:**_ `cleanup_period`
>
> Currently `cleanup_period = unbonding_period`, but logically, `cleanup_period` only needs such constraints:
>
> - `> max_evidence_age`, so we can handle delayed byzantine evidences (inactive validator can still be slashed for
>   later detected byzantine faults)
> - `> 2 blocks`, so we don't panic when seeing signing vote of inactivated validators

## Appendix

### Choose final validators

The final validator set that take effect in tendermint is chosen at `end_block` event by:

- Sort all the active validators by `voting_power desc, staking_address`
- Take the first `max_validators` ones

The abci protocol of `end_block` event expect validator set updates in response, so we need to diff the new set against
the current set to get the updates.

For example, assuming `max_validators = 3`, if you are the fourth active validator, so you are not chosen yet, but in
the future if any validator in the top 3 quit, you will be chosen automatically at the next `end_block` event:

```yaml
max_validators = 3

genesis:
  validators (map of validator address to voting power):
  - addr1 -> 10
  - addr2 -> 9

block1:
  deliver_tx
  - join_node(addr3, 8)
  - join_node(addr4, 7)
  active validators:
  - addr1 -> 10
  - addr2 -> 9
  - addr3 -> 8
  - addr4 -> 7
  end_block validator updates:
  - addr3 -> 8

block2:
  deliver_tx:
  - unbond_all(addr1)
  active validators:
  - addr2 -> 9
  - addr3 -> 8
  - addr4 -> 7
  end_block validator updates:
  - addr1 -> 0
  - addr4 -> 7
```

### Implications of jailing

#### Transactions

Only `UnjailTx` is allowed to be executed on a jailed staking if the `jailed_until` time is passed.

Disallowed transactions are:

- `DepositTx`
- `WithdrawTx`
- `UnbondTx`
- `NodeJoinTx`

#### Reward distribution

It won't distribute rewards to jailed validators, inactive(unjailed) validators will get the rewards as normal.

When a validator is jailed, it's reward participation tracking records are removed immediatelly.

#### Process byzantine faults

Jailed validators won't be slashed again for byzantine faults detected in jailing period.

### Nonce

The `nonce` is increased by one once and exactly once for each operations mutate the `StakedState`:

- All the transaction types that mutate staking state:

  - `DepositTx`
  - `WithdrawTx`
  - `UnbondTx`
  - `UnjailTx`
  - `NodeJoinTx`

- Reward distribution

- Slashing for non-live or byzantine faults

  > _**NOTE:**_ Slashings for different faults are considered independent operations, each slashing will increase nonce independently.

  > _**NOTE:**_ The inactivation and jailing operations happen at the same time as slashing, so the nonce won't increase
  > for them again.

- [Clean up](#clean-up) will set the `validator` to `None`, also increases the `nonce`.

### Liveness tracking

- All active validators's liveness trackers are maintained no matter if it's chosen into the [final validator set](#choose-final-validators).

  If it doesn't appear in the votes reported by tendermint, it's recorded as a `true` which means live by default.

- Inactive validator's liveness trackers are also maintained, and recorded as a `true` for each block, this serves two purposes:

  - After a validator inactivated, the signing vote might still arrive for the next two blocks, we don't want to issue a
    false warning in this case.
  - Validator might quit and re-join very fast (by `UnbondTx`/`DepositTx`/`NodeJoinTx`), in this case it's liveness
    tracking record is preserved.

It means the liveness tracker is only removed when validator record get [cleaned up](#clean-up).

### Inactive validator re-join with different validator key

When an inactive validator re-join, it can provide different validator key, but it still needs to be hold responsible for
byzantine fault committed before for as long as `max_evidence_age`. So we need to keep the old validator keys for
sometime.

Whenever validator change consensus key, the old key and current block time are pushed into `used_validator_keys`, before that, the used keys older than `max_evidence_age` are removed.

There is a maximum bound (`max_used_validator_keys`) on the size of `used_validator_keys` to prevent attack. After the maximum bound reached, re-join with new validator key is not allowed.

### Non exists and empty staking 

Empty staking is defined as:

```rust
StakedState {
    address,
    nonce: 0,
    bonded: 0,
    unbonded: 0,
    unbonded_from: 0,
    validator: None,
}
```

For all the logic processing, the result of success execution should be the same for both non exists staking and empty staking.

The error message for failed execution maybe different, for example `WithdrawTx` might report `StakingNotExists` on non
exists staking, but `CoinError` on empty staking.

So the implementor should be free to choose either semantics.
