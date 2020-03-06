# Validator Punishments

This part describes functionality that aims to dis-incentivize network-observable actions, such as faulty validations,
of participants with values at stake by penalizing/slashing and jailing them. The penalties may include losing some
amount of their stake (surrendered to the rewards pool), losing their ability to perform the network functionality for a
period of time, collect rewards etc.

## Network Parameters

Below are all the network parameters used to configure the behavior of validator punishments. Details of all these
parameters and their effect on behavior of validator punishments is discussed later in this document.

1. `UNBONDING_PERIOD`: Unbonding period will be used as jailing period (time for which an account is jailed after it
   gets punished) and also as slashing period (time to wait before slashing funds from an account). This should be
   greater than or equal to `MAX_EVIDENCE_AGE` in tendermint.
1. `BLOCK_SIGNING_WINDOW`: Number of blocks for which the liveness is calculated for uptime tracking.
1. `MISSED_BLOCK_THRESHOLD`: Maximum number of blocks with faulty/missed validations allowed for an account in last
   `BLOCK_SIGNING_WINDOW` blocks before it gets jailed.
1. `LIVENESS_SLASH_PERCENT`: Percentage of funds (bonded + unbonded) slashed when a validator is non-live.
1. `BYZANTINE_SLASH_PERCENT`: Percentage of funds (bonded + unbonded) slashed when validator makes a byzantine fault.

:::warning Important:
During slashing, funds are slashed from both, bonded and unbonded, amounts.
:::

## Overview

Punishments for a validator are triggered when they either make a *byzantine fault* or become *non-live*: 

- Liveness Faults (Low availability)

    A validator is said to be **non-live** when they fail to sign at least `MISSED_BLOCK_THRESHOLD` blocks in
    last `BLOCK_SIGNING_WINDOW` blocks successfully. `BLOCK_SIGNING_WINDOW` and `MISSED_BLOCK_THRESHOLD` are network
    parameters and can be configured during genesis (currently, changing these network parameters at runtime is not
    supported). Tendermint passes signing information to ABCI application as `last_commit_info` in `BeginBlock` request.

:::tip Example:
For example, if `BLOCK_SIGNING_WINDOW` is `100` blocks and `MISSED_BLOCK_THRESHOLD` is `50` blocks, a validator will
be marked as **non-live** if they fail to successfully sign at least `50` blocks in last `100` blocks.
:::

- Byzantine Faults (Double signing)

    A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and
    round. Tendermint has mechanisms to publish evidence of validators that signed conflicting votes (it passes this 
    information to ABCI application in `BeginBlock` request), so they can be punished by the application.

:::tip Implementation note:
Tendermint passes `Evidence` of a byzantine validator in `BeginBlock` request. Before jailing any account because of
byzantine fault, that evidence should be verified. Also, it should be checked that evidence provided by tendermint is
not older than `MAX_EVIDENCE_AGE` in tendermint.
:::

### Inactivity Slashing

It is important that the validators maintain excellent availability and network connectivity to perform their tasks. A penalty should be imposed on validators' misbehavior to reinforce this.

When a validator fails to successfully sign `MISSED_BLOCK_THRESHOLD` blocks in last `BLOCK_SIGNING_WINDOW` blocks, it is
immediately punished by deducting funds from their bonded and unbonded amount and removing them from active validator set. The funds to be deducted are calculated based on `LIVENESS_SLASH_PERCENT`. 

:::tip Note:
The validator is not **jailed** in this scenario. They can immediately send a `NodeJoinTx` to join back as a validator if they are qualified (have enough bonded amount and not jailed).
:::

### Jailing

A validator is jailed when they make a byzantine fault, e.g., they sign messages at same height and round.

When a validator gets jailed, they cannot perform any operations relating to their account, for example,
`withdraw_stake`, `deposit_stake`, `unbond_stake`, etc., until they are un-jailed. Also, a validator cannot be un-jailed
before `account.jailed_until` which is set to `block_time + UNBONDING_PERIOD` while jailing. `UNBONDING_PERIOD` is a
network parameter which can be configured during genesis.

:::warning Important:
`block_time` used in calculating `account.jailed_until` should be the time of the block at which the fault is detected
(i.e., `current_block_height`).
:::

:::warning Important:
When a validator is jailed because of a byzantine fault, their validator public key is added to a list of permanently
banned validators and cannot re-join the network as a validator with same public key.
:::

#### Un-jailing

When a jailed validator wishes to resume normal operations (after `account.jailed_until` has passed), they can create
`UnjailTx` which marks them as un-jailed. After successful un-jailing, validators can submit a `UnbondTx` and
`WithdrawTx` to withdraw their funds.

### Byzantine Slashing

Validators are responsible for signing or proposing block at each consensus round. A penalty should be imposed on validators' misbehavior to reinforce this. When there is byzantine fault detected, they are immediately slashed other than jailed. During the jailing time, it won't be slashed again for other byzantine faults. The funds to be deducted are calculated based on `BYZANTINE_SLASH_PERCENT`.

:::warning Important:
A validator should not be slashed more than once for byzantine faults within `UNBONDING_PERIOD`. If a validator commits multiple byzantine faults
within that time period, it should only be slashed once (for simplicity, we'll only slash the validator for the first
evidence that we get from tendermint and ignore other evidences until `UNBONDING_PERIOD`).
:::

:::tip Implementation note:
To enforce that we only slash an account only once within `UNBONDING_PERIOD`, we can just check if an account is
not jailed when we receive evidence of misbehavior from tendermint.
:::

## Implementation

### Data structures in Punishment module

#### `PunishmentConfig`

`PunishmentConfig` holds the values for all the network parameters related to punishment. `PunishmentConfig` can be
initialized from `genesis.json`.

```rust
/// Configuration for computing and executing validator punishments
pub struct PunishmentConfig {
    /// Number of blocks for which the liveness is calculated for uptime tracking.
    block_signing_window: u16,
    /// Maximum number of blocks with faulty/missed validations allowed for an account in last `block_signing_window`
    /// blocks before it gets jailed.
    missed_block_threshold: u16,
    /// Percentage of funds (bonded + unbonded) slashed when a validator is non-live.
    liveness_slash_percent: Milli,
    /// Percentage of funds (bonded + unbonded) slashed when validator makes a byzantine fault.
    byzantine_slash_percent: Milli,
}
```

:::tip Note:
`UNBONDING_PERIOD` is a _global_ network parameter and is not stored in `PunishmentConfig`.
:::

#### `LivenessTracker`

`LivenessTracker` is used to track liveness of all the current active validators. A the beginning of each block,
liveness of each active validator is updated using `update_liveness` function. Besides this, `LivenessTracker` also
exposes function to `add` and `remove` a validator from liveness tracking. Finally, `is_live` function can be used to
check if a given validator is live or not.

```rust
/// Liveness tracker for validators
pub struct LivenessTracker {
    /// Number of blocks to use for calculating validator liveness (jailing parameter in genesis)
    block_signing_window: u16,
    /// Number of blocks a validator can miss signing from last `block_signing_window` blocks
    missed_block_threshold: u16,
    /// Holds data to measure liveness of a validator
    ///
    /// # Note
    ///
    /// - Size of this `BitVec` should be equal to `block_signing_window`.
    /// - Stores `true` at `index = height % block_signing_window`, if validator has signed that block, `false`
    ///   otherwise.
    liveness: BTreeMap<TendermintValidatorAddress, BitVec>,
}

impl LivenessTracker {
    /// Adds a validator to liveness tracking
    ///
    /// # Note
    ///
    /// - Returns `Err` when a validator with `tendermint_validator_address` already exists
    pub fn add_validator(&mut self, tendermint_validator_address: TendermintValidatorAddress) -> Result<()> {
        todo!()
    }

    /// Removes validator from liveness tracking
    ///
    /// # Note
    ///
    /// - Returns `Err` when validator with given address does not exist
    pub fn remove_validator(
        &mut self, 
        tendermint_validator_address: &TendermintValidatorAddress,
    ) -> Result<()> {
        todo!()
    }

    /// Updates liveness of a validator with new block data
    ///
    /// # Note
    ///
    /// - Returns `Err` when validator with given address does not exist
    pub fn update_liveness(
        &mut self, 
        tendermint_validator_address: &TendermintValidatorAddress,
        block_height: BlockHeight,
        signed: bool,
    ) -> Result<()> {
        todo!()
    }

    /// Checks if a validator is live or not
    ///
    /// # Note
    ///
    /// - Returns `Err` when validator with given address does not exist
    pub fn is_live(&self, tendermint_validator_address: &TendermintValidatorAddress) -> Result<bool> {
        todo!()
    }
}
```

### Working of Punishment module (interactions with ABCI)

#### `InitChain`

- `PunishmentConfig` is initialized with values in `genesis.json`.
- `LivenessTracker` is initialized with all the council nodes in `genesis.json`.

#### `BeginBlock`

- Update `LivenessTracker` with all the signers/non-signers of last block (data can be obtained from
  `request.last_commit_info`). Note that the `request.last_commit_info` is not present for `block_height = 1`, so,
  `LivenessTracker` starts getting updated from `block_height = 2`. Also, `last_commit_info` may contain data for
  non-validators (validators which were recently removed from validator set), it is safe to ignore this data with a
  `warn` log.
- Obtain all the evidences of detected byzantine faults from `request.byzantine_validators`. For each evidence:
  - Check if the evidence is valid, i.e., `evidence.height + UNBONDING_PERIOD >= current_block_height`.
  - Get address of faulty validator from `evidence.validator.address` (if present). Ignore the evidence if faulty
    validator's information is not present in the evidence. Raw address bytes can be converted to
    `TendermintValidatorAddress` using `TendermintValidatorAddress::try_from(validator.address.as_slice())`.
  - If the validator is not already jailed (ignore if the validator is already jailed):
    - Jail and slash the validator (set `jailed_until = current_block_time + UNBONDIND_PERIOD` and slash by
      `BYZANTINE_SLASH_PERCENT`). Note that, both, slashing and jailing should happen as one command, i.e., validator
      account's `nonce` will only increase by one.
    - Remove the validator from current validator set, i.e., set their voting power to zero. Validator will get removed
      from `LivenessTracker` in `EndBlock`.
    - Add validator address to a list of permanently banned validators.
    - Generate slashing and jailing events for validator.

:::tip Note:
An additional validation for `NodeJoinTx` will be to verify if the validator address is not present in the list of
permanently banned validators.
:::

#### `EndBlock`

- Update `LivenessTracker`, i.e., add all the validators who joined in current block and remove all the validator who,
  left/got jailed in current block.
- Set `response.validator_updates` for all the validators whose voting power was changed. Tendermint will remove all the
  validators whose voting power is set to zero, so, all the jailed validators should have zero voting power.
