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

## Genesis fingerprint

Light client allows users to access and interact with the blockchain without having to run a full node. To ensure the light client is served by a full node with the correct blockchain data, we can compute the **genesis fingerprint** locally beforehand and check it against the full node that we are connecting to.

Specifically, this **genesis fingerprint** is computed by the `compute_genesis_fingerprint` function: where we take `"genesis_time"`,`"app_hash"`, `"consensus_params"`; and `"chain_id"` from the genesis file as inputs and hash it by the _blake3_ hash function.

We can use the development tool _dev-utils_ to generate this genesis fingerprint from the `genesis.json` file in the default tendermint directory `~/.tendermint/config`, for example:

```bash
$ ./dev-utils genesis fingerprint
85828B9048F3A38C0446CFD8EFF1A33CE7F299E6605001238B63684E9633EE4E
```

::: warning WARNING
this doc may be outdated and is subject to revision
:::

The initial state of the network is started from the existing ERC20 contract on Ethereum. On the Ethereum mainnet, it is 0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b.

The current genesis procedure is the following:

1. The initial set of validator (council node) identities is established: each council node should have an associated validator public key (from the Tendermint Ed25519 keypair, used for signing blocks) and initial staking address (same as Ethereum), …
2. The initial network parameters (e.g. minimum stake amounts) are chosen
3. At a determined time, the list of ERC20 holders is snapshotted / computed from the Ethereum network.
4. The list should contain three dedicated addresses for:

- Secondary distribution and launch incentive (0x20a0bee429d6907e556205ef9d48ab6fe6a55531 and 0x35f517cab9a37bc31091c2f155d965af84e0bc85 on the Ethereum mainnet)
- Long term incentive (0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07 on the Ethereum mainnet)

The balances of these dedicated addresses are put to the initial “Rewards Pool” (where transaction fees are paid to and network operation rewards are paid from).

1. For every ERC20 holder address in the initial distribution, besides the above three addresses, the following rules are used for computing the initial genesis state:

- If the address is owned / controlled by a smart contract, its balance goes to the initial “Rewards Pool”

::: warning WARNING
DEX, multisig etc. contracts should be avoided during the Step 3
:::

- If the address is an externally owned account and corresponds to the initial staking address of one of council nodes, its balance starts as “bonded” in the corresponding staked state (see [accounting mode](./transaction-accounting-model) for more details).
- Otherwise (i.e. the address is an externally owned account, but not of any validators), the address balance starts as “unbonded” in the corresponding staked state (see [accounting mode](./transaction-accounting-model) for more details).

From this initial genesis state, the initial “application hash” (APP HASH) is computed and set in the corresponding genesis.json file of Tendermint and compiled statically into the enclave binaries (that need to be signed by the developer production keys).

## Tendermint extra information

As described in [consensus](./consensus), Tendermint executes with the application-specific code via ABCI.

The genesis information (network parameters, initial validators etc.) is set in the `app_data` field in genesis.json – this information is then passed to the ABCI application in the InitChainRequest.
