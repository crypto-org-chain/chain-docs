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

## Step 1. Get the Crypto.com Chain binary

To simply the following steps, we will be using Linux for illustration. Binary for
[Mac](https://github.com/crypto-com/chain-main/releases/download/v0.7.0-rc0/chain-main_0.7.0-rc0_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-com/chain-main/releases/download/v0.7.0-rc0/chain-main_0.7.0-rc0_Windows_x86_64.zip) are also available.

- To install Crypto.com Chain released binaries:

  ```bash
  $ curl -LOJ https://github.com/crypto-com/chain-main/releases/download/v0.7.0-rc0/chain-main_0.7.0-rc0_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_0.7.0-rc0_Linux_x86_64.tar.gz
  ```

## Step 2. Configure `chain-maind`

Before kick-starting your node, we will have to configure your node so that it connects to the Croeseid testnet:

### Step 2-1 Initialize `chain-maind`

- First of all, you can initialize chain-maind by:

  ```bash
    ./chain-maind init [moniker] --chain-id testnet-croeseid-1
  ```

  This `moniker` will be the displayed id of your node when connected to Crypto.com Chain network.

  ::: tip NOTE

  - Depending on your chain-maind home setting, the chain-maind configuration will be initialized to that home directory. To simply the following steps, we will use the default chain-maind home directory `~/.chain-maind/` for illustration.
  - You can also put the `chain-maind` to your binary path and run it by `chain-maind`
    :::

### Step 2-2 Configurate chain-maind

- Download the and replace the Croseid Testnet `genesis.json` by:

  ```bash
  $ curl https://raw.githubusercontent.com/crypto-com/chain-docs-nextgen/master/docs/getting-started/assets/genesis_file/testnet-croeseid-1/genesis.json > ~/.chain-maind/config/genesis.json
  ```

- Verify MD5 checksum of the downloaded `genesis.json`. You should see `OK!` if the MD5 checksum matches.

  ```bash
  $ [ $(sha256sum genesis.json | awk '{print $1}') = "55de3738cf6a429d19e234e59e81141af2f0dfa24906d22b949728023c1af382" ] && echo "OK!" || echo "MISMATCHED"
  OK!
  ```

- For network configuration, in `~/.chain-maind/config/config.toml`, please modify the configurations of `seeds` and `create_empty_blocks_interval` by:

  ```bash
  $ sed -i "" "s/persistent_peers = \"\"/persistent_peers = \"66a557b8feef403805eb68e6e3249f3148d1a3f2@54.169.58.229:26656,3246d15d34802ca6ade7f51f5a26785c923fb385@54.179.111.207:26656,69c2fbab6b4f58b6cf1f79f8b1f670c7805e3f43@18.141.107.57:26656\"/" ~/.chain-maind/config/config.toml
  ```

  ```bash
  $ sed -i "" "s/create_empty_blocks_interval = \"0s\"/create_empty_blocks_interval = \"5s\"/" ~/.chain-maind/config/config.toml
  ```

## Step 3. Run everything

::: warning CAUTION
This page only shows the minimal setup.

You may want to run full nodes (see above)
as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html), restrict your validator connections to only connect to your full nodes,
test secure storage of validator keys etc.
:::

### Step 3-1. Create a new key and address

Run the followings to create a new key. For example, you can create a key will the name `Default` by:

```bash
  $ /.chain-maind keys add Default
```

You should obtain an address with `tcro` prefix, e.g. `tcro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n`. This will be the address for performing transactions.

### Step 3-2. Obtain test token

Unless you have obtained the CRO testnet token before, simply send a message on [Gitter](https://gitter.im/crypto-com/community),
stating who you are and your `tcro.....` address (@devashishdxt or @lezzokafka would typically reply within a day).

### Step 3-3. Obtain the a validator public key

You can obtain your validator public key by:

```bash
  $ ./chain-maind tendermint show-validator
```

The public key should begin with the `tcrocnclconspub1` prefix, e.g. `tcrocnclconspub1zcjduepq6jgw5hz44jnmlhnx93dawqx6kwzhp96w5pqsxwryp8nrr5vldmsqu3838p`.

### Step 3-4. Run everything

Once the `chain-maind` has been configured, we are ready to start the node and sync the blockchain data:

- Start chain-maind, e.g.:

```bash
  $ ./chain-maind start
```

It should begin fetching blocks from the other peers. Please wait until it is fully synced before moving onto the next step.

For example, one can check the current block height by querying the public full node by:

```bash
curl -s http://54.179.111.207:26657/commit | jq "{height: .result.signed_header.header.height}"
```

### Step 3-5. Send a `create-validator` transaction

Once the node is fully synced, we are now ready to send a `create-validator` transaction and join the network, for example:

```
$ ./chain-maind tx staking create-validator \
--from=[name_of_your_key] \
--amount=[staking_amount i.e. 100tcro] \
--keyring-backend test \
--pubkey=[tcrocnclconspub1...]  \
--moniker="[The_id_of_your_node]" \
--security-contact= "[security contact email/contact method]"
--chain-id="testnet-croeseid-1" \
--commission-rate="0.10" \
--commission-max-rate="0.20" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1"

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```

You will be required to insert the following:

- the `trco...` address that holds your bonded funds;
- a moniker(name) for your validator node; and
- [validator public key](#step-3-3-obtain-the-a-validator-public-key) with `crocnclconspub` as the prefix

Now you can check if your validator has been added to the validator set:

```bash
$ ./chain-maind tendermint show-validator
## [tcrocnclconspub... consensus public key] ##
$ ./chain-maind query tendermint-validator-set | grep -c [tcrocnclconspub...]
## 1 = Yes; 0 = Not yet added ##
```

To further check if the council node is signing blocks, kindly run this [script](https://github.com/crypto-com/chain-docs-nextgen/blob/master/docs/getting-started/assets/signature_checking/check-validator-up.sh), for example:

```bash
$ ./check-validator-up.sh --tendermint-url http://54.179.111.207:26657 --pubkey $(cat ~/.chain-maind_testnet/config/priv_validator_key.json | jq -r '.pub_key.value')

The validator is in the council nodes set under the address <YOUR_VALIDATOR_ADDRESS>
The validator is signing @ Block#<BLOCK_HEIGHT> 👍
```

Alternatively, you can run it on this [browser based IDE](https://repl.it/@allthatjazzleo/cryptocomcheckNodeJoinStatus#main.go), by specifying your validator public key in the `"YOUR_PUBKEY"` field, where this key can be obtained by running

```bash
$ cat ~/.chain-maind_testnet/config/priv_validator_key.json | jq -r '.pub_key.value'
```

## Croeseid testnet faucet

- To interact with the blockchain, simply use the [CRO faucet](https://chain.crypto.com/faucet) to obtain test CRO tokens for performing transactions on the **Croseid** testnet.
  - Note that you will need to create an [address](#step-3-1-create-a-new-key-and-address) before using the faucet.
