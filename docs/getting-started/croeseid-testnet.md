# Croeseid Testnet: Running Nodes

The latest Crypto.com Chain Testnet has been named as **Croeseid**.

This is detailed documentation for setting up a Council node (Validator) or a full node on Crypto.com Croeseid testnet.

## Pre-requisites

### Supported OS

We officially support macOS, Windows and Linux only. Other platforms may work but there is no guarantee. We will extend our support to other platforms after we have stablized our current architecture.

### Prepare your machine

To run Crypto.com Chain nodes, you will need a machine with the following minimum requirements:

- Dual core cpu;
- 4GB RAM;
- 100GB of storage space. 

## Step 1 Get the Crypto.com Chain binary

- To install Crypto.com Chain released binaries:

  ```bash
  $ curl -LOJ https://github.com/crypto-com/chain/releases/download/v0.5.3/crypto-com-chain-release-0.5.3.tar.gz
  $ tar -zxvf crypto-com-chain-release-0.5.3.tar.gz
  ```

  (TODO: Binary link to be updated)

## Step 2. Configure Chain-maind

Before kick starting your node, we will have to configure your node so that it connects to the Croeseid testnet:

### Step 2-1 Initialize chain-maind

- After placing the `chain-maind` binary the path. You can initialize chain-maind with:

  ```bash
    chain-maind init [moniker] [flags]
  ```

  This moniker will be the displayed id of your node when connected to Crypto.com Chain network.
  ::: tip NOTE
  Depending your chain-maind home setting, the chain-maind configuration will be initialized to that home directory. To simply the following steps, we will use the default chain-maind home directory `~/.chain-maind/` for illustration.
  :::

### Step 2-2 Configurate chain-maind

- In `~/.chain-maind/config/`, download the Croseid Testnet `genesis.json` by:

  ```bash
  $ curl https://raw.githubusercontent.com/crypto-com/chain-docs/master/docs/getting-started/assets/genesis_file/v0.5/genesis.json > ~/.chain-maind/config/genesis.json
  ```

  (TODO: Update the gensis flie link when it's ready)

- verify MD5 checksum of the downloaded `genesis.json`. You should see `OK!` if the MD5 checksum matches.

  ```bash
  $ [ $(md5sum genesis.json | awk '{print $1}') = "1c518490f523153f5a644d47deb1a3c1" ] && echo "OK!" || echo "MISMATCHED"
  OK!
  ```

  (TODO: Update the gensis flie md5hash when it's ready)

- For network configuration, in `~/.chain-maind/config/config.toml`, you can modify the configurations of `seeds`, `create_empty_blocks_interval` and `index_all_tags` by:

  ```bash
  $ sed -i '/seeds = /c\seeds = "f3806de90c43f5474c6de2b5edefb81b9011f51f@52.186.66.214:26656,29fab3b66ee6d9a46a4ad0cc1b061fbf02024354@13.71.189.105:26656,2ab2acc873250dccc3eb5f6eb5bd003fe5e0caa7@51.145.98.33:26656"' ~/.chain-maind/config/config.toml
  ```

  ```bash
  $ sed -i '/create_empty_blocks_interval = /c\create_empty_blocks_interval = "5s"' ~/.chain-maind/config/config.toml
  ```

  ```bash
  $ sed -i '/index_all_tags = /c\index_all_tags = true' ~/.chain-maind/config/config.toml
  ```

  (TODO: Update the seeds, empty block time and index when it's ready)

## Step 3. Run everything

::: warning CAUTION
This page only shows the minimal setup.

You may want to run full nodes (see above)
as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html) and [local notes on production deployment](notes-on-production-deployment.md)), restrict your validator connections to only connect to your full nodes,
test secure storage of validator keys etc.
:::

### Step 3-1. Create a new key and address

Run the followings to create a [new key](../wallets/client-cli.html#wallet-new-create-a-new-wallet). For example, you can create a key will the name `Default` by:

```bash
  $ chain-maind keys add Default --hd-path "44'/394'/0'/0/1"
```

You should obtain an address with `cro` prefix, e.g. `cro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n`. This will be the address for normal transactions.

### Step 3-2. Obtain the minimal required stake

Unless you have obtained the CRO testnet token before, simply send a message on [Gitter](https://gitter.im/crypto-com/community),
stating who you are and your address (@devashishdxt or @lezzokafka would typically reply within a day).

### Step 3-3. Obtain the a validator public key

You can obtain you validator public key by:

```bash
  $ chain-maind tendermint show-validator
```

The public key should begin with the `crocnclconspub` prefix, e.g. `crocnclconspub1zcjduepq6jgw5hz44jnmlhnx93dawqx6kwzhp96w5pqsxwryp8nrr5vldmsqu3838p`.

### Step 3-4. Run everything

Once the chain-maind has been configured, we are ready to start the node and sync the block data:

- Start chain-maind, e.g.:

```bash
  $ chain-maind start
```

It should begin fetching blocks from the other peers. Please wait until it is fully synced before moving onto the next step.

For example, one can check the current block height by querying the public full node by:

```bash
curl -s http://13.90.34.32:26657/commit | jq "{height: .result.signed_header.header.height}"
```

(TODO: update full node link for latest block height)

### Step 3-5. Send a create-validator transaction

Once the node is fully synced, we are now ready to send a `create-validator` transaction and join the network, for example:

```bash
$ chain-maind tx staking create-validator \
--from=<name_of_your_key> \
--amount= <staking_amount i.e. 100tcro> \
--keyring-backend test \
--pubkey="crocnclconspub1..."  \
--moniker="<The_id_of_your_node>" \
--chain-id=“testnet-croeseid-1" \
--commission-rate=“0.10” \
--commission-max-rate=“0.20" \
--commission-max-change-rate=“0.01” \
--min-self-delegation=“1"
## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```

You will be required to insert the following:

- the address that holds your bonded funds;
- a moniker(name) for your validator node; and
- [validator public key](#step-3-3-obtain-the-a-validator-public-key) with `crocnclconspub` as the prefix

Once the node-join transaction was successfully broadcasted, you should be able to see your Council node one the [testnet explorer](https://chain.crypto.com/explorer/council-nodes).

To further check if the council node is signing blocks, kindly run this [script](https://github.com/crypto-com/chain-docs/tree/master/docs/getting-started/assets/signature_checking/check-validator-up.sh) with the flag `--pubkey` to specify the public key of your validator. For example:

(TODO: Signature check link updated)

```bash
$ ./check-validator-up.sh --tendermint-url http://13.90.34.32:26657 --pubkey "<YOUR_VALIDATOR_PUBLICKEY>"
The validator is in the council nodes set under the address <YOUR_VALIDATOR_ADDRESS>
The validator is signing @ Block#<BLOCK_HEIGHT> 👍
```

Alternatively, you can run it on this [browser based IDE](https://repl.it/@allthatjazzleo/cryptocomcheckNodeJoinStatus#main.go), by specifying your validator public key in the `"YOUR_PUBKEY"` field.

(TODO: Signature check has to be updated)

## Croeseid testnet block explorer and faucet

- To interact with the blockchain, simply use the [CRO faucet](https://chain.crypto.com/faucet) to obtain test CRO tokens for performing transactions on the **Croseid** testnet.
  - Note that you will need to create an [address](../wallets/client-cli.md#keys-add-wallet-name-create-a-new-key) before using the faucet.
