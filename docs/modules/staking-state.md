# Staking states and transitions

```rust
struct StakedState {
    address: StakedStateAddress,
    nonce: u64,
    bonded: Coin,
    unbonded: Coin,
    unbonded_from: Timespec,
    node_details: Option<NodeDetails>,
}

enum NodeDetails {
    Council(Validator),
    Community(CommunityNode),
}

struct CommunityNode {
    /// name / moniker (just for reference / human use)
    pub name: NodeName,
    /// optional security@... email address
    pub security_contact: NodeSecurityContact,
    /// leaf index in the mls tree
    pub leaf_index: LeafSize,
}

struct Validator {
    node_info: CommunityNode,
    jailed_until: Option<Timespec>,
    inactive_time: Option<Timespec>,
    used_validator_keys: Vec<(TendermintValidatorPubKey, Timespec)>,
}

impl NodeState {
    fn validator() -> Option<&Validator> {
        match self {
            Council(v) => Some(v),
            _ => None,
        }
    }
    fn community() -> Option<&CommunityNode> {
        match self {
            Community(n) => Some(n),
            _ => None,
        }
    }
    fn node_info(&self) -> &CommunityNode {
        match self {
          Community(n) => n,
          Council(v) => &v.node_info,
        }
    }
}
```

## States

### Clean staking

`node.is_none()`

### Community/Council node

`node.is_some()`

One need to join the mls group to run a community or council node.

#### Community node

Community node is a full node but not a validator. it's able to validate transactions but not participate in block generation.

`node?.community().is_some()`

#### Council node

`node?.validator().is_some()`

> We'll use `validator` to refer to `node?.validator()?` from now on.

There are several variants of it:

##### Active

`validator.inactive_time.is_none()`

> **_NOTE:_** Active validator doesn't necessarily mean the final validator take effect in tendermint, please refer to
> [Choose final validators](#choose-final-validators)

##### Inactive

`validator.inactive_time.is_some()`

##### Jailed

`validator.jailed_until.is_some()`

> **_NOTE:_** Jailed implies inactive, but not vice versa

## State transitions

```plantuml
[*] --> CleanStaking

state InactiveValidator {
  Unjailed --> Jailed : Byzantine fault
  Jailed --> Unjailed : Unjail transaction
}

CleanStaking --> ActiveValidator : NodeJoinTX(Validator)
Unjailed --> ActiveValidator : NodeJoinTX(Validator)

CleanStaking --> CommunityNode : NodeJoinTX(Community)

ActiveValidator --> Unjailed : Unbonding, Slashing
ActiveValidator --> Jailed : Byzantine fault

Unjailed --> CleanStaking : Cleanup
CommunityNode --> CleanStaking : Punishment(TODO)
```

### From "clean staking" or "inactive(unjailed) validator" to active validator

#### Node join(validator)

The only way to transit to active validator is by executing validator version of `NodeJoinTx`, the preconditions are:

- `bonded >= min_required_staking`
- The validator pubkey/address is not already used by others, it's ok to re-use the old keys used by itself if it's a re-join from an inactive validator.
- Not jailed if transiting from inactive validator
- `MLSInit` is valid, refer to [transactions](#transactions.md#node-join) for detailed validation rules

### From "clean staking" to "community node"

#### Node join(community)

The community node variant of `NodeJoinTx` transit a clean staking state to community node. the preconditions are:

- `bonded >= min_required_community_staking`
- `MLSInit` is valid, refer to [transactions](#transactions.md#node-join) for detailed validation rules

### From "active validator" to "inactive validator"

There are several cases for this:

#### Bonded coins become lower than required

When `bonded < min_required_staking`, this transition happens.

The reasons for dropping of bonded coins maybe:

- Execute `UnbondTx` at `deliver_tx` event
- Slashed for non-live or byzantine faults at `begin_block` event

> **_NOTE:_** The transition happens immediately in `deliver_tx` or `begin_block` events, won't reverse automatically
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

### From "community node" to "clean staking"

#### Bonded coins become lower than required

Whenever `bonded < min_required_community_staking`, this transition happens. 

The other details are similar to the transition from "active validator" to "inactive validator".

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

When a validator is jailed, it's reward participation tracking records are removed immediately.

#### Process byzantine faults

Jailed validators won't be slashed again for byzantine faults detected in jailing period.

### Nonce

The nonce is the number of transactions that have the witness of the staking address, which includes:

- `WithdrawTx`
- `UnbondTx`
- `UnjailTx`
- `NodeJoinTx`

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
