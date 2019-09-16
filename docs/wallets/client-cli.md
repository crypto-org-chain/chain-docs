# ClientCLI

ClientCLI is a command line interface for the wallet client. It supports wallet management, funds transfer and basic staking operations.

## Build

### Build Prerequisites

- Crypto.com Chain: https://github.com/crypto-com/chain

### Build instructions

ClientCLI is bundled with the Crypto.com chain code. After you have [compile the binaries](https://crypto-com.github.io/getting-started/#compile-chain), it is available under `./bin/client-cli`.

## Wallet Storage

By default, your wallet are stored inside folder `./storage` located at the place you execute the `./client-cli`.

Make sure you have backed up your wallet storage after you create your wallet or else you may lose control to your funds forever.

### Configure Wallet Storage Location

To change the wallet storage location when running ClientCLI, update environment variable `CRYPTO_CLIENT_STORAGE` with the path.

```bash
$ CRYPTO_CLIENT_STORAGE=/my-wallet-storage ./bin/client-cli ...
```

## Chain ID

Crypto.com Chain has different Chain ID to distinguish our devnet, testnet and mainnet. When you run Crypto.com Chain in your local environment, you will also decide your own Chain ID.

Different chain has different address prefixes, so you may want to configure your ClientCLI to use the correct configuration as the node your are connected to.

### Configure Chain ID

To change the Chain ID when running ClientCLI, update environment variable `CRYPTO_CHAIN_ID` with the full chain ID.

```bash
$ CRYPTO_CHAIN_ID=testnet-thaler-crypto-com-chain-42 ./bin/client-cli ...
```

## Configure Tendermint URL

To change Tendermint URL when running ClientCLI, update environment variable `CRYPTO_CLIENT_TENDERMINT` with the Tendermint URL.

## 1. Wallet Management

### Create Wallet

```bash
$ ./bin/client-cli wallet new --name Default
Enter passphrase:
Confirm passphrase:
Wallet created with name: Default
```

### List Wallets

```bash
$ ./bin/client-cli wallet list
Wallet name: Default
```

## 2. Funds Transfer

### Receive Funds

To receive funds, you will need to present the sender your address and view key, they can be obtained by:

#### Create Transfer Address

If you haven't create a transfer address before, or you want to create a new address to receive funds:

```bash
$ ./bin/client-cli address new --name Default --type Transfer
Enter passphrase:
New address: dcro1da35hvgcz6p977tud3xhuskup5jkkl8shn84rwffgjcsnffpz64qd73e0k
```

#### Get Transfer Address

```bash
$ ./bin/client-cli address list --name Default --type Transfer
Enter passphrase:
Address: dcro1da35hvgcz6p977tud3xhuskup5jkkl8shn84rwffgjcsnffpz64qd73e0k
```

#### Get View Key

```bash
$ ./bin/client-cli view-key  --name Default
Enter passphrase:
View Key: 0253be0b7af1cddc7a80207ef1a0b647f5649670415a8417424f23210569c28173
```

### Send Funds

To send funds to another address, you will have to first obtain the other party's address and their view key

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
