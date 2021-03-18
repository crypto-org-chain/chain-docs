# Crypto.com Mainnet: Running Nodes


This is a detailed documentation for setting up a **validator** or a **full node** on Crypto.org mainnet.

## Pre-requisites


### Supported OS

We officially support macOS, Windows and Linux only. Other platforms may work but there is no guarantee. We will extend our support to other platforms after we have stabilized our current architecture.

### Prepare your machine

- For Crypto.org Chain mainnet, you will need a machine with the following minimum requirements:

  - 4-core, x86_64 architecture processor;
  - 16 GB RAM;
  - 1 TB of storage space.

## Step 1. Get the Crypto.org Chain Mainnet binary



::: tip Remarks:
The following is the minimal setup to join Crypto.org Chain Mainnet. Furthermore, you may want to run full nodes as sentries (see Tendermint), restrict your validator connections to only connect to your full nodes, test secure storage of validator keys etc
:::
To simplify the following step, we will be using **Linux** for illustration. Binary for
[Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v1.1.0/chain-main_1.1.0_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v1.1.0/chain-main_1.1.0_Windows_x86_64.zip) are also available.
### Sept 1-a) Install `chain-maind` released binaries from github


- To install Crypto.org Chain binaries from github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v1.1.0/chain-main_1.1.0_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_1.1.0_Linux_x86_64.tar.gz
  ```

- You can verify the installation by checking the version of the chain-maind
  ```bash 
  # check the version of chain-maind
  $ ./chain-maind version
  1.1.0
**OR**

### Sept 1-b) Install `chain-maind` by homebrew
 To install binaries in Homebrew for macOS X or Linux

  [Homebrew](https://brew.sh/) is a free and open-source package management system for macOS X. Install the official Chain-maind formula from the terminal.

 -  First, install the `crypto-org-chain` tap, a repository of our Homebrew `chain-maind` package"

    ```bash
      # tap the repo
      $ brew tap crypto-org-chain/chain-maind
    ```

- Now, install chain-maind with crypto-com/chain-maind"

  ```bash
    # install the chain-maind CLI tool
    $ brew install chain-maind
  ```
- You can verify the installation by checking the version of the `chain-maind`
  ```bash 
  # check the version of chain-maind
  $ chain-maind version
  1.1.0
  ```
## Step 2. Configure `chain-maind`

Before kick-starting your node, we will have to configure your node so that it connects to the Crypto.org mainnet:

### Step 2-1. Initialize `chain-maind`

- First of all, you can initialize chain-maind by:

  ```bash
    $ ./chain-maind init [moniker] --chain-id crypto-org-chain-mainnet-1
  ```

  This `moniker` will be the displayed id of your node when connected to Crypto.org Chain network.
  When providing the moniker value, make sure you drop the square brackets since they are not needed.
  The example below shows how to initialize a node named `pegasus-node` :

  ```bash
    $ ./chain-maind init pegasus-node --chain-id crypto-org-chain-mainnet-1
  ```

  ::: tip NOTE

  - Depending on your `chain-maind` home setting, the `chain-maind` configuration will be initialized to that home directory. To simply the following steps, we will use the default chain-maind home directory `~/.chain-maind/` for illustration.
  - You can also put the `chain-maind` to your binary path and run it directly by `chain-maind`
    :::

### Step 2-2. Configure chain-maind
##############################[TODO]- seed,genesis - [TODO]##############################
- Download and replace the Crypto.org mainnet `genesis.json` by:

  ```bash
  $ curl https://raw.githubusercontent.com/crypto-com/testnets/main/testnet-croeseid-2/genesis.json > ~/.chain-maind/config/genesis.json
  ```

- Verify sha256sum checksum of the downloaded `genesis.json`. You should see `OK!` if the sha256sum checksum matches.

  ```bash
  $ if [[ $(sha256sum ~/.chain-maind/config/genesis.json | awk '{print $1}') = "af7c9828806da4945b1b41d434711ca233c89aedb5030cf8d9ce2d7cd46a948e" ]]; then echo "OK"; else echo "MISMATCHED"; fi;

  OK!
  ```

- In `~/.chain-maind/config/app.toml`, update minimum gas price to avoid [transaction spamming](https://github.com/cosmos/cosmos-sdk/issues/4527)

  ```bash
  $ sed -i.bak -E 's#^(minimum-gas-prices[[:space:]]+=[[:space:]]+)""$#\1"0.025basecro"#' ~/.chain-maind/config/app.toml
  ```

- For network configuration, in `~/.chain-maind/config/config.toml`, please modify the configurations of `persistent_peers` and `create_empty_blocks_interval` by:

  ```bash
  $ sed -i.bak -E 's#^(persistent_peers[[:space:]]+=[[:space:]]+).*$#\1"b2c6657096aa30c5fafa5bd8ced48ea8dbd2b003@52.76.189.200:26656,ef472367307808b242a0d3f662d802431ed23063@175.41.186.255:26656,d3d2139a61c2a841545e78ff0e0cd03094a5197d@18.136.230.70:26656"#' ~/.chain-maind/config/config.toml
  $ sed -i.bak -E 's#^(create_empty_blocks_interval[[:space:]]+=[[:space:]]+).*$#\1"5s"#' ~/.chain-maind/config/config.toml
  ```

**Note**: We suggest using `persistent_peers` instead of `seeds` to provide stable state-sync experience.
##############################[TODO]- seed,genesis - [TODO]##############################

##############################[TODO]- seed,genesis - [TODO]##############################
### Step 2-3. (**Optional**) Enable STATE-SYNC

This is an option step If you would like to build a node with complete blockchain data, jump to [Step 3](#step-3-run-everything).

With  [STATE-SYNC](https://docs.tendermint.com/master/tendermint-core/state-sync.html)  your node will download data related to the head or near the head of the chain and verify the data. This leads to drastically shorter times for joining a network for validator. For **validator**, It will be amazingly fast to sync the near head of the chain and join the network.
::: warning CAUTION
Blocks before state-sync `trust height` will **NOT** be queryable. If you want to run a **full node** or a validator with complete blockchain data; It is not suggested to use state-sync. 
:::
Follow the below optional steps to enable state-sync:
- For state-sync configuration, in `~/.chain-maind/config/config.toml`, please modify the configurations under [statesync] `enable`, `rpc_servers`, `trust_height` and `trust_hash` by:

  ```bash
  $ LATEST_HEIGHT=$(curl -s https://testnet-croeseid.crypto.org:26657/block | jq -r .result.block.header.height); \
  BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \
  TRUST_HASH=$(curl -s "https://testnet-croeseid.crypto.org:26657/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

  $ sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
  s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"https://testnet-croeseid.crypto.org:26657,https://testnet-croeseid.crypto.org:26657\"| ; \
  s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
  s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \
  s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" ~/.chain-maind/config/config.toml
  ```
##############################[TODO]- update seed,genesis - [TODO]##############################
## Step 3. Run everything

::: warning CAUTION
This page only shows the minimal setup for validator node.

In production, you may want to run full nodes
as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html)), restrict your validator connections to only connect to your full nodes, test secure storage of validator keys with [tmkms](https://github.com/iqlusioninc/tmkms) etc.
:::

### Step 3-1. Create a new key and address

Run the followings to create a new key. For example, you can create a key with the name `Default` by:

```bash
  $ ./chain-maind keys add Default
```

You should obtain an address with `cro` prefix, e.g. `cro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n`. This will be the address for performing transactions.


### Step 3-2. Obtain the validator public key

Validator is identified by the "*validator public key*". You can obtain your validator public key by:

```bash
  $ ./chain-maind tendermint show-validator
```

The public key should begin with the `crocnclconspub1` prefix, e.g. `crocnclconspub1zcjduepq6jgw5hz44jnmlhnx93dawqx6kwzhp96w5pqsxwryp8nrr5vldmsqu3838p`.

### Step 3-3. Run everything

Once the `chain-maind` has been configured, we are ready to start the node and sync the blockchain data:

- Start `chain-maind`, e.g.:

```bash
  $ ./chain-maind start
```
**OR**
- _(Optional for Linux)_ If you would like to have it running at the background, you can start `chain-maind` with `systemd` service, e.g.:

```bash
  $ git clone https://github.com/crypto-org-chain/chain-main.git && cd chain-main
  $ ./networks/create-service.sh
  $ sudo systemctl start chain-maind
  # view log
  $ journalctl -u chain-maind -f
```

:::details Example: /etc/systemd/system/chain-maind.service created by script

```bash
# /etc/systemd/system/chain-maind.service
[Unit]
Description=Chain-maind
ConditionPathExists=/usr/local/bin/chain-maind
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/usr/local/bin
ExecStart=/usr/local/bin/chain-maind start --home /home/ubuntu/.chain-maind
Restart=on-failure
RestartSec=10
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
```

:::

It should begin fetching blocks from the other peers. Please wait until it is fully synced before moving onto the next step.
### Step 3-4. Check the status of your node

- You can query the node syncing status by
  ```bash
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
  ```
  If the above command returns `false`, It means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.

##############################[TODO]- public node - [TODO]##############################
- One can check the current block height by querying the public full node by:

  ```bash
  curl -s https://testnet-croeseid.crypto.org:26657/commit | jq "{height: .result.signed_header.header.height}"
  ```
##############################[TODO]- public node - [TODO]##############################

  and you can check your node's progress (in terms of block height) by

  ```bash 
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.latest_block_height'
  ```

### Step 3-5. Send a `create-validator` transaction

Once the node is synced, we are now ready to send a `create-validator` transaction and join the network, for example:

```
$ ./chain-maind tx staking create-validator \
--from=[name_of_your_key] \
--amount=[amount of cro, i.e. 1000cro] \
--pubkey=[crocnclconspub...]  \
--moniker="[The_id_of_your_node]" \
--security-contact="[security contact email/contact method]" \
--chain-id="crypto-org-chain-mainnet-1" \
--commission-rate="0.10" \
--commission-max-rate="0.20" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1" \
--gas 80000000 \
--gas-prices 0.1basecro

{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```

You will be required to insert the following:

- `--from`: The `trco...` address that holds your funds;
- `--pubkey`: The validator public key( See Step [3-2](#step-3-2-obtain-the-validator-public-key) above ) with **crocnclconspub** as the prefix;
- `--moniker`: A moniker (name) for your validator node;
- `--security-contact`: Security contact email/contact method, it is **strongly recommended** to provide an email address for receiving important messages related to validator operation in the future;
- `--commission-rate`: The commission rate charge on the delegator;
- `--commission-max-rate`: The upper bound of the commission rate;
- `--commission-max-change-rate`: The maximum daily increase of the validator commission. Please note this parameter cannot be changed after create-validator is processed.


Once the `create-validator` transaction completes, you can check if your validator has been added to the validator set:

```bash
$ ./chain-maind tendermint show-address
## [crocnclcons... address] ##
$ ./chain-maind query tendermint-validator-set | grep -c [crocnclcons...]
## 1 = Yes; 0 = Not yet added ##
```

To further check if the validator is signing blocks, kindly run this [script](https://github.com/crypto-com/chain-docs/blob/master/docs/getting-started/assets/signature_checking/check-validator-up.sh), for example:

```bash
$ curl -sSL https://raw.githubusercontent.com/crypto-com/chain-docs/master/docs/getting-started/assets/signature_checking/check-validator-up.sh | bash -s -- \
--tendermint-url https://testnet-croeseid.crypto.org:26657 \
--pubkey $(cat ~/.chain-maind/config/priv_validator_key.json | jq -r '.pub_key.value')

The validator is in the active validator set under the address  <YOUR_VALIDATOR_ADDRESS>
The validator is signing @ Block#<BLOCK_HEIGHT> 👍
```

For those who are using tmkms in background([AWS](./testnet-aws-1click.html)/[Azure](./testnet-azure-1click.html) 1-click deployment are using tmkms), you should use `--bechpubkey` the consensus pubkey with prefix `crocnclconspub1....` directly instead of `--pubkey` tendermint pubkey since the node is not using `~/.chain-maind/config/priv_validator_key.json` for signing.

```bash
$ curl -sSL https://raw.githubusercontent.com/crypto-com/chain-docs/master/docs/getting-started/assets/signature_checking/check-validator-up.sh | bash -s -- \
--tendermint-url https://testnet-croeseid.crypto.org:26657 \
--bechpubkey [crocnclconspub1....]

The validator is in the active validator set under the address  <YOUR_VALIDATOR_ADDRESS>
The validator is signing @ Block#<BLOCK_HEIGHT> 👍
```

Alternatively, you can run it on this [browser based IDE](https://repl.it/@allthatjazzleo/cryptocomcheckNodeJoinStatus#main.go), by specifying your validator public key in the `"YOUR_PUBKEY"` field, where this key can be obtained by running

```bash
$ cat ~/.chain-maind/config/priv_validator_key.json | jq -r '.pub_key.value'
```

## Step 4. Perform Transactions

### Step 4-1. `query bank balances` - Check your transferable balance

You can check your _transferable_ balance with the `balances` command under the bank module.
:::details Example: Check your address balance

```bash
$ ./chain-maind query bank balances cro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n

balances:
- amount: "10005471622381693"
  denom: basecro
pagination:
  next_key: null
  total: "0"

```

:::

### Step 4-2. `tx bank send` - Transfer operation

Transfer operation involves the transfer of tokens between two addresses.

#### **Send Funds** [`tx bank send <from_key_or_address> <to_address> <amount> <network_id>`]

:::details Example: Send 10cro from an address to another.

```bash
$ ./chain-maind tx bank send Default cro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q 10cro --chain-id="crypto-org-chain-mainnet-1"
  ## Transaction payload##
  {"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

### Step 4-3. `tx staking` - Staking operations

Staking operations involve the interaction between an address and a validator. It allows you to create a validator and lock/unlocking funds for staking purposes.

#### **Delegate you funds to a validator** [`tx staking delegate <validator-addr> <amount>`]

To bond funds for staking, you can delegate funds to a validator by the `delegate` command

::: details Example: Delegate funds from `Default` to a validator under the address `crocncl16k...edcer`

```bash
$ chain-maind tx staking delegate crocncl16kqr009ptgken6qsxnzfnyjfsq6q97g3uedcer 100cro --from Default --chain-id "crypto-org-chain-mainnet-1"
## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

#### **Unbond your delegated funds** [`tx staking unbond <validator-addr> <amount>`]

On the other hand, we can create a `Unbond` transaction to unbond the delegated funds

::: details Example: Unbond funds from a validator under the address `crocncl16k...edcer`

```bash
$ ./chain-maind tx staking unbond crocncl16kqr009ptgken6qsxnzfnyjfsq6q97g3uedcer 100cro --from Default --chain-id "crypto-org-chain-mainnet-1"
## Transaction payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgUndelegate"...}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

::: tip

- Once your funds were unbonded, It will be locked until the `unbonding_time` has passed.

:::

Congratulations! You've successfully set up a mainnet node and performed some basic transactions! You may refer to [Wallet Management](https://crypto.org/docs/wallets/cli.html#chain-maind) for more advanced operations and transactions.

