# Genesis

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
