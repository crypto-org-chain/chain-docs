# ClientRPC

ClientRPC is the JSONRPC interface of the wallet client. It can be used to be integrated with different services and also power the Sample Wallet. It provides nearly the same set of operations as ClientCLI.

## Build

### Build Prerequisites

- Crypto.com Chain: [https://github.com/crypto-com/chain](https://github.com/crypto-com/chain)

### Build instructions

ClientCLI is bundled with the Crypto.com chain code. After you have [compile the binaries](https://crypto-com.github.io/getting-started/#compile-chain), it is available under `./bin/client-rpc`.

## How to start?

```bash
$ ./bin/client-rpc
```

For help, there is a help command available:
```bash
$ ./bin/client-rpc --help
```

## Wallet Storage

By default, your wallets are stored in the folder `./storage` located at the same path of where `./client-rpc` is executed.

Make sure you have backed up your wallet storage after creating the wallet or else  your funds may be inaccessible in case of accident forever.

### Configure Wallet Storage Location

To customize the wallet storage location when running ClientRPC, you can provide option `storage-dir` with the path:

```bash
$ ./bin/client-rpc --storage /my-wallet-storage ...
```

## Chain ID

Crypto.com Chain has different [Chain ID](../getting-started/chain-id-and-network-id#chain-id) to distinguish between *devnet*, *testnet* and *mainnet*. Accordingly, you should set up your ClientCLI and use the correct configuration for the node you are connecting to.

### Configure Chain ID

To customize the Chain ID while running ClientRPC, you can update the option `chain-id` with the chain ID. For example, we can change it to the testnet with Chain ID `testnet-thaler-crypto-com-chain-42` by:

```bash
$ ./bin/client-rpc --chain-id=testnet-thaler-crypto-com-chain-42 ...
```

## Configure Tendermint URL

Similarly, we can also change the Tendermint URL when running ClientRPC, update both options `tendermint-url` and `websocket-url` with the Tendermint URL.

## Options

A list of supported options of ClientRPC is listed below

| Option | Description | Default Value |
| --- | --- | --- | --- |
| host | Host ClientRPC server listen to | 0.0.0.0 |
| port | Port ClientRPC server listen to | 9981 |
| chain-id | Full Chain ID | --- |
| storage-dir | Wallet storage directory | .storage |
| tendermint-url | Tendermint URL | http://localhost:26657/ |
| websocket-url | Tendermint WebSocket URL | ws://localhost:26657/websocket |

## RPC Methods 
    
For all the supported JSON RPC API Methods available, refer to [this link](../api/client-rpc).