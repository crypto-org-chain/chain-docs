# Crypto.org Mainnet: Running a Validator


This is a detailed documentation for setting up a **Validator** on Crypto.org mainnet.

## Step 0 : Notes on  "Canis Major" Network upgrade 

Before we start, please note that there was a "*Canis Major*" network upgrade at the block height `922,363`, which requires the node operator to update their Crypto.org Chain Mainnet binary `chain-maind` from `v1.*.*` to `v2.0.1`. 

- For the host who would like to build a **Validator with complete blockchain data** from scratch, one would need to:
  1. Start the node with the older binary version `v1.2.1`; 
  1. Sync-up with the blockchain until it reaches the target upgrade block height `922,363`;
  1. Update the binary to `v2.0.1` and start the node again.

- For the host who would like to **join the network and start validating quickly**, one can:
  1. Begin with the binary `v2.0.1` and join the network by *"STATE-SYNC"*


To simplify the following steps, we will be covering the **second case** here in this guide.

For the first case, kindly refer to this [guide](./mainnet.html#crypto-org-mainnet-running-a-full-node) on building a full node. Once you have a complete synced node, you can revisit this page and jump to the [step](#step-3-5-joining-the-network-as-a-validator-send-a-create-validator-transaction) of joining the networking as a validator. 

## Pre-requisites
### Supported OS

We officially support macOS, Windows and Linux only. Other platforms may work, but there is no guarantee. We will extend our support to other platforms after we have stabilized our current architecture.

### Prepare your machine

- For Crypto.org Chain mainnet, you will need a machine with the following minimum requirements:

  - 4-core, x86_64 architecture processor;
  - 16 GB RAM;
  - 1 TB of storage space.

## Step 1. Get the Crypto.org Chain Mainnet binary



::: tip Remarks:
The following is the minimal setup to join Crypto.org Chain Mainnet. Furthermore, you may want to run full nodes as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html)),  restrict your validator connections to only connect to your full nodes, use secure storage and [key management](https://crypto.org/docs/getting-started/advanced-tmkms-integration.html) service for your validator keys etc.
:::


To simplify the following step, we will be using **Linux** for illustration. Binary for
[Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Windows_x86_64.zip) are also available. 

There are two options to install `chain-maind`:
- [Directly from Github](#option-1-install-chain-maind-released-binaries-from-github); or
- [Homebrew](#option-2-install-chain-maind-by-homebrew)

### Option 1 - Install `chain-maind` released binaries from Github


- To install Crypto.org Chain binaries from Github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_2.0.1_Linux_x86_64.tar.gz
  ```

- You can verify the installation by checking the version of the chain-maind, the current version is `2.0.1`.
  ```bash
  # check the version of chain-maind
  $ ./chain-maind version
  2.0.1
  ```
**OR**

### Option 2 - Install `chain-maind` by homebrew

::: tip Reminder:
- If you plan to play around with different networks (mainnet and testnet), we suggest you to follow the `Option 1` to download the binary directly.

- The binary downloaded from homebrew is **only for interacting with mainnet**. You cannot use it to interact with testnet.
:::

To install binaries in Homebrew for macOS X or Linux

[Homebrew](https://brew.sh/) is a free and open-source package management system for macOS X. Install the official Chain-maind formula from the terminal.

-  First, install the `crypto-org-chain` tap, a repository of our Homebrew `chain-maind` package:

  ```bash
    # tap the repo
    $ brew tap crypto-org-chain/chain-maind
  ```

- Now, install the `chain-maind` with crypto-org-chain/chain-maind

  ```bash
    # install the chain-maind CLI tool
    $ brew install chain-maind
  ```
- You can verify the installation by checking the version of the `chain-maind`
  ```bash
  # check the version of chain-maind
  $ chain-maind version
  2.0.1
  ```
## Step 2. Configure `chain-maind`

Before kick-starting your node, we will have to configure the node so that it connects to the Crypto.org mainnet

::: tip NOTE

- Depending on your `chain-maind` home setting, the `chain-maind` configuration will be initialized to that home directory. To simply the following steps, we will use the default chain-maind home directory `~/.chain-maind/` for illustration.
- You can also put the `chain-maind` to your binary path and run it directly by `chain-maind`
:::
### Step 2-1. Initialize `chain-maind`

- First of all, you can initialize chain-maind by:

  ```bash
    $ ./chain-maind init [moniker] --chain-id crypto-org-chain-mainnet-1
  ```

  - This `moniker` will be the displayed id of your node when connected to Crypto.org Chain network.
  When providing the moniker value, make sure you drop the square brackets since they are not needed.




### Step 2-2. Configure chain-maind

- Download and replace the Crypto.org mainnet `genesis.json` by:

  ```bash
  $ curl https://raw.githubusercontent.com/crypto-org-chain/mainnet/main/crypto-org-chain-mainnet-1/genesis.json > ~/.chain-maind/config/genesis.json
  ```

- Verify sha256sum checksum of the downloaded `genesis.json`. You should see `OK!` if the sha256sum checksum matches.

  ```bash
  $ if [[ $(sha256sum ~/.chain-maind/config/genesis.json | awk '{print $1}') = "d299dcfee6ae29ca280006eaa065799552b88b978e423f9ec3d8ab531873d882" ]]; then echo "OK"; else echo "MISMATCHED"; fi;

  OK!
  ```

  ::: tip NOTE

  - For Mac environment, `sha256sum` was not installed by default.  In this case, you may setup `sha256sum` with this command:

    ```bash
    function sha256sum() { shasum -a 256 "$@" ; } && export -f sha256sum
    ```
    :::

- In `~/.chain-maind/config/app.toml`, update minimum gas price to avoid [transaction spamming](https://github.com/cosmos/cosmos-sdk/issues/4527)

  ```bash
  $ sed -i.bak -E 's#^(minimum-gas-prices[[:space:]]+=[[:space:]]+)""$#\1"0.025basecro"#' ~/.chain-maind/config/app.toml
  ```



- For network configuration, in `~/.chain-maind/config/config.toml`, please modify the configurations of `persistent_peers` and `create_empty_blocks_interval` by:

  ```bash
  $ sed -i.bak -E 's#^(seeds[[:space:]]+=[[:space:]]+).*$#\1"8dc1863d1d23cf9ad7cbea215c19bcbe8bf39702@p2p.baaa7e56-cc71-4ae4-b4b3-c6a9d4a9596a.cryptodotorg.bison.run:26656,494d860a2869b90c458b07d4da890539272785c9@p2p.fabc23d9-e0a1-4ced-8cd7-eb3efd6d9ef3.cryptodotorg.bison.run:26656,8a7922f3fb3fb4cfe8cb57281b9d159ca7fd29c6@p2p.aef59b2a-d77e-4922-817a-d1eea614aef4.cryptodotorg.bison.run:26656,dc2540dabadb8302da988c95a3c872191061aed2@p2p.7d1b53c0-b86b-44c8-8c02-e3b0e88a4bf7.cryptodotorg.herd.run:26656,33b15c14f54f71a4a923ac264761eb3209784cf2@p2p.0d20d4b3-6890-4f00-b9f3-596ad3df6533.cryptodotorg.herd.run:26656,d2862ef8f86f9976daa0c6f59455b2b1452dc53b@p2p.a088961f-5dfd-4007-a15c-3a706d4be2c0.cryptodotorg.herd.run:26656,87c3adb7d8f649c51eebe0d3335d8f9e28c362f2@seed-0.crypto.org:26656,e1d7ff02b78044795371beb1cd5fb803f9389256@seed-1.crypto.org:26656,2c55809558a4e491e9995962e10c026eb9014655@seed-2.crypto.org:26656"#' ~/.chain-maind/config/config.toml
  $ sed -i.bak -E 's#^(create_empty_blocks_interval[[:space:]]+=[[:space:]]+).*$#\1"5s"#' ~/.chain-maind/config/config.toml
  ```
:::tip Reminder:
The list of the `seed` is subjected to change, you can also find the latest seed to connect [here](https://github.com/crypto-org-chain/mainnet#seed-nodes)
:::


### Step 2-3. Enable STATE-SYNC


With  [STATE-SYNC](https://docs.tendermint.com/master/tendermint-core/state-sync.html)  your node will download data related to the head or near the head of the chain and verify the data. This leads to drastically shorter times for joining a network for validator. For **validator**, It will be amazingly fast to sync the near head of the chain and join the network.
::: warning CAUTION
Blocks before state-sync `trust height` will **NOT** be queryable. If you want to run a **full node** or a validator with complete blockchain data; It is not suggested to use state-sync. Kindly refer to this [guide](./mainnet.html#crypto-org-mainnet-running-a-full-node) on building a node with complete data.
:::
Follow the below steps to enable state-sync:
- For state-sync configuration, in `~/.chain-maind/config/config.toml`, please modify the configurations under [statesync] `enable`, `rpc_servers`, `trust_height` and `trust_hash` and add `persistent_peers` by:

  ```bash
  $ sed -i.bak -E 's#^(persistent_peers[[:space:]]+=[[:space:]]+).*$#\1"87c3adb7d8f649c51eebe0d3335d8f9e28c362f2@seed-0.crypto.org:26656,e1d7ff02b78044795371beb1cd5fb803f9389256@seed-1.crypto.org:26656,2c55809558a4e491e9995962e10c026eb9014655@seed-2.crypto.org:26656"#' ~/.chain-maind/config/config.toml
  $ sed -i.bak -E 's#^(seeds[[:space:]]+=[[:space:]]+).*$#\1""#' ~/.chain-maind/config/config.toml
  $ LATEST_HEIGHT=$(curl -s https://mainnet.crypto.org:26657/block | jq -r .result.block.header.height); \
  BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \
  TRUST_HASH=$(curl -s "https://mainnet.crypto.org:26657/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

  $ sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
  s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"https://mainnet.crypto.org:26657,https://mainnet.crypto.org:26657\"| ; \
  s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
  s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \
  s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" ~/.chain-maind/config/config.toml
  ```

    ::: tip NOTE

  - For Mac environment, if `jq` is missing, you may install it by: `brew install jq`
    :::

**Note**: We suggest using `persistent_peers` instead of `seeds` to provide stable state-sync experience.

## Step 3. Run everything

### Step 3-1. Run everything

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

It should begin fetching blocks from the other peers. Please wait until it is synced before moving onto the next step.

::: tip Remarks: 
  - You can query the node syncing status by
    ```bash
    $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
    ```
    If the above command returns `false`, it means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.

:::




### Step 3-2. Joining the network as a validator: Send a `create-validator` transaction

Once the node is synced, we are now ready to send a `create-validator` transaction and join the network, for example:

```
$ ./chain-maind tx staking create-validator \
--from=[name_of_your_key] \
--amount=[amount of cro, e.g. 1000cro] \
--pubkey=[crocnclconspub...]  \
--moniker="[The_id_of_your_node]" \
--security-contact="[security contact email/contact method]" \
--chain-id="crypto-org-chain-mainnet-1" \
--commission-rate="[The_commission_rate_of_your_node, e.g. 0.1 (10%)]" \
--commission-max-rate="[The_maximum_commission_rate_of_your_node e.g. 0.2 (20%)]" \
--commission-max-change-rate="[The_maximum_change_of_commission_rate_per_day e.g. 0.01 (1%)]" \
--min-self-delegation="1" \
--gas 8000000 \
--gas-prices 0.1basecro

{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```



  ::: tip You will be required to insert the following:
  - `--from`: The `cro...` address or the key name that holds your funds for initial delegation;
  - `--amount`: The amount of self-delegation provided to the validator as an initial staking;
  - `--pubkey`: The validator public key ( See Step [3-2](#step-3-2-obtain-the-validator-public-key) above ) with **crocnclconspub** as the prefix;
  - `--moniker`: A moniker (name) for your validator node;
  - `--security-contact`: Security contact email/contact method, it is **strongly recommended** to provide an email address for receiving important messages related to validator operation in the future;
  - `--chain-id=`: The chain-id of mainnet - *crypto-org-chain-mainnet-1*
  - `--commission-rate`: The commission rate charge on the delegator;
  - `--commission-max-rate`: The upper bound of the commission rate;
  - `--commission-max-change-rate`: The maximum daily increase of the validator commission. Please note this parameter cannot be changed after create-validator is processed;
  - `--min-self-delegation`: The lower threshold of validator's self-delegation amount, if the self-delegation drops below this number, all staked funds to the validator will be automatically unbonded and the validator will be inactive.
  :::


### Step 3-3. Check your validator status
Once the `create-validator` transaction completes, you can check if your validator has been added to the validator set:

```bash
$ ./chain-maind tendermint show-address
## [crocnclcons... address] ##
$ ./chain-maind query tendermint-validator-set | grep -c [crocnclcons...]
## 1 = Yes; 0 = Not yet added ##
```

To further check if the validator is signing blocks, kindly run this [script](https://github.com/crypto-com/chain-docs/blob/master/docs/getting-started/assets/signature_checking/check-validator-up.sh), for example:

```bash
$ curl -sSL https://raw.githubusercontent.com/crypto-org-chain/chain-docs/master/docs/getting-started/assets/signature_checking/check-validator-up.sh | bash -s -- \
--tendermint-url https://mainnet.crypto.org:26657 \
--pubkey $(cat ~/.chain-maind/config/priv_validator_key.json | jq -r '.pub_key.value')

The validator is in the active validator set under the address  <YOUR_VALIDATOR_ADDRESS>
The validator is signing @ Block#<BLOCK_HEIGHT> 👍
```

Congratulations! You've successfully set up a mainnet node and performed some basic transactions! You may refer to [Wallet Management](https://crypto.org/docs/wallets/cli.html#chain-maind) for more advanced operations and transactions.


##  Basic Transactions and queries

###  `query bank balances` - Check your transferable balance

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

###  `tx bank send` - Transfer operation

Transfer operation involves the transfer of tokens between two addresses.

#### **Send Funds** [`tx bank send <from_key_or_address> <to_address> <amount> <network_id>`]

:::details Example: Send 10cro from an address to another.

```bash
$ ./chain-maind tx bank send Default cro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q 10cro --chain-id="crypto-org-chain-mainnet-1" --gas-prices 0.1basecro
  ## Transaction payload##
  {"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

### `tx staking` - Staking operations

Staking operations involve the interaction between an address and a validator. It allows you to create a validator and lock/unlocking funds for staking purposes.

#### **Delegate you funds to a validator** [`tx staking delegate <validator-addr> <amount>`]

To bond funds for staking, you can delegate funds to a validator by the `delegate` command.
Note that you can look up validators and their operator address by the validator list on the [explorer](https://crypto.org/explorer/validators).

::: details Example: Delegate funds from `Default` to a validator under the operator address `crocncl16k...edcer`

```bash
$ ./chain-maind tx staking delegate crocncl16kqr009ptgken6qsxnzfnyjfsq6q97g3uedcer 100cro --from Default --chain-id "crypto-org-chain-mainnet-1" --gas-prices 0.1basecro
## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::



#### **Unbond your delegated funds** [`tx staking unbond <validator-addr> <amount>`]

On the other hand, we can create an `Unbond` transaction to unbond the delegated funds

::: details Example: Unbond funds from a validator under the address `crocncl16k...edcer`

```bash
$ ./chain-maind tx staking unbond crocncl16kqr009ptgken6qsxnzfnyjfsq6q97g3uedcer 100cro --from Default --chain-id "crypto-org-chain-mainnet-1" --gas-prices 0.1basecro
## Transaction payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgUndelegate"...}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

::: tip

- Once your funds were unbonded, they will be locked until the `unbonding_time` has passed.

:::

### Reward related transactions and queries

After you have delegated or create a validator, reward will be accumulated, you can check/ withdraw it by:
#### `query distribution validator-outstanding-rewards ` - Query un-withdrawn rewards for a validator

We can check distribution outstanding (un-withdrawn) rewards for a validator and all of their delegations by its operator address.

::: details Example: Check all outstanding rewards under the operator address `crocncl1...zrf8`

```bash
$ ./chain-maind q distribution validator-outstanding-rewards crocncl1kkqxv3szgh099xezt7y38t5anqzue4s326zrf8 --gas-prices 0.1basecro
  rewards:
  - amount: "1920761912.927067330419141688"
    denom: basecro
```
:::

#### `tx distribution validator-outstanding-rewards ` - Query un-withdrawn rewards for a validator

We can check distribution outstanding (un-withdrawn) rewards for a validator and all of their delegations by its operator address.

::: details Example: Withdraw all outstanding under a delegation address:

```bash
$ ./chain-maind tx distribution withdraw-all-rewards --from [key_name] --chain-id crypto-org-chain-mainnet-1 --gas-prices 0.1basecro

{"body":{"messages":[{"@type":"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"...}]}
confirm transaction before signing and broadcasting [y/N]: y
```
:::

### Slashing related transaction
### `tx slashing unjail` - Unjail a validator

Validator could be punished and jailed due to network misbehaviour, we can check the jailing status of a validator, for example:

```bash
$ ./chain-maind query staking validators -o json | jq
................................
      "operator_address": "crocncl1hct8ye56gk80qjxvrx299yu9v98aqaxe0y5kvg",
      "consensus_pubkey": {
        "@type": "/cosmos.crypto.ed25519.PubKey",
        "key": "P1/aHuScW5myVs+xH10R8yFT2u0wwaCKXfDKSuVTl60="
      },
      "jailed": true,
................................
```

Where `"jailed": true` implies that the validator has been jailed. After the jailing period has passed, one can broadcast an `unjail` transaction to unjail the validator and resume its normal operations by

```bash
$ ./chain-maind tx slashing unjail --from [key_name] --chain-id crypto-org-chain-mainnet-1 --gas-prices 0.1basecro

  {"body":{"messages":[{"@type":"/cosmos.slashing.v1beta1.MsgUnjail"...}]}
  confirm transaction before signing and broadcasting [y/N]: y
```


