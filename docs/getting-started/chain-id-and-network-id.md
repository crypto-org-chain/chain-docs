# Chain ID and Network ID

## Chain ID

Crypto.com Chain has different Chain ID to distinguish between *devnet*, *testnet* and *mainnet*. When running the Crypto.com Chain in your local environment, you will also need to decide your own Chain ID.

Different chain has different address prefixes for its corresponding network types, these prefixes are:

| Mainnet | Testnet | Regtest   |
| ------- | ------- | --------- |
| `cro`   | `tcro`  | `dcro`    |

For example, our testnet Chain ID is `testnet-thaler-crypto-com-chain-42`.

## Network ID

Network ID is the last two hex characters of the Chain ID. Using our testnet Chain ID `testnet-thaler-crypto-com-chain-42` as an example, the network ID would be `42`.
