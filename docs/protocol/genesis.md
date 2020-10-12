# Genesis

The `genesis.json` file defines the initial state of the Crypto.com chain. On top of the standard [tendermint genesis](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#genesis) format, we customize our own genesis file and facilitate the special features of the Crypto.com chain. Sample genesis file can be found [here](https://github.com/crypto-com/chain/blob/master/docker/config/devnet/tendermint/genesis.json)

## Fields in genesis

Specifically, the genesis file includes the following fields:

- `"genesis_time"`:
  The time of beginning of the blockchain
- `"chain_id"`:
  A unique identifier for the blockchain. The _"network id"_ is the last two hex characters of this field. See [this](./chain-id-and-network-id.md) for further details.
- `"app_hash"`:
  The expected application hash upon genesis (returning from the chain-abci).
- `"app_state"`:
  The application state.

  - `"council_nodes"`:
    The initial validator set.
    - `"keypackage"`:
      The public information that other nodes can use for key agreement, see [this](https://github.com/mlswg/mls-protocol/blob/master/draft-ietf-mls-protocol.md#key-packages) for further details.
  - `"distribution`:
    The initial distribution and bonding state of the tokens.
  - `"network_params"`:
    The network parameters
    - `"initial_fee_policy"`:
      The transaction fee policy.
    - `"jailing_config"`:
      The configuration of punishment (jailing)
      - `"block_signing_window"`:
        The size of the sliding window for calculating validators's liveness.
      - `"missed_block_threshold"`:
        The threshold of total missed blocks.
    - `"max_validators"`:
      The maximum number of validator.
    - `"required_council_node_stake"`:
      The minimum staking amount required to be a validator.
    - `"rewards_config"`:
      Configuration of validator's reward.
      - `"monetary_expansion_cap"`:
        The total amount of tokens reserved for validator's reward, in basic unit.
      - `"monetary_expansion_r0"`:
        The upper bound for the reward rate per annum.
      - `"monetary_expansion_tau"`:
        The initial value of tau in the reward function.
      - `"monetary_expansion_decay"`:
        The decay rate of tau.
      - `"reward_period_seconds"`:
        The period of reward being distributed, in seconds.
    - `"slashing_config"`:
      Configuration of validator's punishment.
      - `"byzantine_slash_percent"`:
        The maximum percentage of stake reduction for byzantine validators.
      - `"liveness_slash_percent"`:
        The maximum percentage of stake reduction for validators with low availability.

- `"consensus_params"`:
  The consensus critical parameters that determine the validity of blocks.

  - `"block"`:
    The block formation structure.

    - `"max_bytes"`:
      The maximum block size, in bytes.
    - `"max_gas"`:
      The default value is "-1", i.e., no rules about gas are enforced.
    - `"time_iota_ms"`:
      The minimum time increment between consecutive blocks, in milliseconds.

  - `"evidence"`:
    The configuration of evidence of malfeasance by validators.

    - `"max_age_num_blocks"`:
      _This field is to be deprecated._
    - `"max_age_duration"`:
      The maximum age of evidence, in nanoseconds. Any evidence older than this will be rejected. It is also the "unbonding period", the time duration of unbonding.

  - `"validator"`
    - `"pub_key_types"`: The supported validator public key types.

- `"validators"`:
  The initial state of the validator set.
  - `"address"`: The address of the validator (hash of the validator's public key). Note that the validator is identified by its address.
  - `"name"`: The name of the validator, which should correspond to the name in _"council_nodes"_.
  - `"power"`: The voting power of the validator, which should match with the bonded amount of its related staking address in _"distribution"_ in full units.
  - `"pub_key"`
    - `"type"`: The validator public key types, which should be one of the supported types in _"pub_key_types"_.
    - `"value"`: The base64 encoding of validator's public key, which should correspond to the _"value"_ of the validator in _"council_nodes"_.

(TODO: Update genesis fields)
