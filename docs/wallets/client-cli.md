# ClientCLI

ClientCLI is a command line interface for the wallet client. It supports wallet management, funds transfer and basic staking operations.

## Build

### Build Prerequisites

- Crypto.com Chain: [https://github.com/crypto-com/chain](https://github.com/crypto-com/chain)

### Build instructions

ClientCLI is bundled with the Crypto.com chain code. After you have [compile the binaries](https://crypto-com.github.io/getting-started/#compile-chain), it is available under `./bin/client-cli`.

## Wallet Storage

By default, your wallets are stored in the folder `./storage` located at the same path of where `./client-cli` is executed.

Make sure you have backed up your wallet storage after creating the wallet or else  your funds will not be accessible forever.

### Configure Wallet Storage Location

To customize the wallet storage location when running ClientCLI, you can update environment variable `CRYPTO_CLIENT_STORAGE` with the path:

```bash
 CRYPTO_CLIENT_STORAGE=/my-wallet-storage ./bin/client-cli ...
```

## Chain ID

Crypto.com Chain has different Chain ID to distinguish between *devnet*, *testnet* and *mainnet*. When running the Crypto.com Chain in your local environment, you will also need to decide your own Chain ID.

Different chain has different address prefixes for its corresponding network types, these prefixes are:

| Mainnet | Testnet | Regtest   |
| ------- | ------- | --------- |
| `cro`   | `tcro`  | `dcro`    |

Accordingly, you should set up your ClientCLI and use the correct configuration for the node you are connecting to.

### Configure Chain ID

To customize the Chain ID while running ClientCLI, you can update the environment variable `CRYPTO_CHAIN_ID` with the full chain ID. For example, we can change it to the testnet with Chain ID `testnet-thaler-crypto-com-chain-42` by:

```bash
 CRYPTO_CHAIN_ID=testnet-thaler-crypto-com-chain-42 ./bin/client-cli ...
```

## Configure Tendermint URL

Similarly, we can also change the Tendermint URL when running ClientCLI, update environment variable `CRYPTO_CLIENT_TENDERMINT` with the Tendermint URL.

## 1. Wallet Management

First of all, you will need a wallet to store and spend your CRO.

### Create Wallet

You can create a new wallet with the name *"Default"*  by running

```bash
$ ./bin/client-cli wallet new --name Default
Enter passphrase:
Confirm passphrase:
Wallet created with name: Default
```

It is important that you keep the passphrase secure. There is **no way** to recover it, and you would not be able to access the funds in the wallet if you forget the passphrase.

### List Wallets

Multiple wallets can be created when needed. We can list wallets saved under the storage path by running

```bash
$ ./bin/client-cli wallet list
Wallet name: Default
```

## 2. Funds Transfer

### Receive Funds

To receive funds, you will need to present your **address** and **view key** to the sender; these can be obtained by:

#### Create Transfer Address

If you have not create a transfer address before, or you would like to create a new address to receive funds,

```bash
$ ./bin/client-cli address new --name Default --type Transfer
Enter passphrase:
New address: dcro1da35hvgcz6p977tud3xhuskup5jkkl8shn84rwffgjcsnffpz64qd73e0k
```

#### Obtain the View Key

In Crypto.com Chain, transactions are encrypted, and it can only be viewed by the owner of the view key. This functionality provides us with an extra layer of privacy and accountability.

It is important that in order for the receiver to spend the funds, they would need to be able to view the transaction details and obtain the corresponding UTXO data.
Therefore, the receiver's view key is one of the essential components when launching a transaction. The view key can be obtained by running:

```bash
$ ./bin/client-cli view-key  --name Default
Enter passphrase:
View Key: 0253be0b7af1cddc7a80207ef1a0b647f5649670415a8417424f23210569c28173
```

### Send Funds

On the other hand, similarly, to send funds to another address, we will have to obtain the receiver's address and their view key in the first place. After that, one can insert the view key into the transaction.

```bash
$ ./bin/client-cli transaction new --name Default --type Transfer
Enter passphrase:
Enter output address: dcro1da35hvgcz6p977tud3xhuskup5jkkl8shn84rwffgjcsnffpz64qd73e0k
Enter amount (in CRO): 1000
Enter timelock (seconds from UNIX epoch) (leave blank if output is not time locked):
More outputs? [yN] N
Enter view keys (comma separated) (leave blank if you don't want any additional view keys in transaction): 0253be0b7af1cddc7a80207ef1a0b647f5649670415a8417424f23210569c28173
```

## 3. Staking Operations

TODO
