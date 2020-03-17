# Implementation

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
