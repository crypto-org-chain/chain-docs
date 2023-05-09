# Croeseid 5 Testnet: Running Nodes

Croeseid 5 Testnet is Crypto.org Chain Testnet. It is a new chain based on Croeseid Testnet and runs in parallel with Croeseid 4. 
It servers as an alpha testnet for exploring new features, instead of the upgrade version of Croeseid 4 testnet. 

This is detailed documentation for setting up a Validator or a full node on Crypto.org Croeseid 5 testnet `testnet-croeseid-5`.


## Pre-requisites


### Supported OS

We officially support macOS, Windows, and Linux only. Other platforms may work but there is no guarantee. We will extend our support to other platforms after we have stabilized our current architecture.

### Prepare your machine

- To run Crypto.org Chain nodes in the testnet, you will need a machine with the following minimum requirements:
 
Archive Node:
- RAM: 16GB (goleveldb)
- Disk: 281GB
- CPU: 4 cores

Default pruned node
- RAM 16GB (goleveldb)
- Disk: 83GB (Depends on how long the node is running for)
- CPU: 4 cores


## Step 1. Get the Crypto.org Chain testnet binary

::: tip Remarks:
The following is the minimal setup for a **validator node**. 
:::

::: tip Reminder:
The binary for _testnet_ and the binary for _mainnet_ are two **different** binaries. Please make sure you are using the correct binary.
:::

To simplify the following step, we will be using **Linux** (Intel x86) for illustration. Binary for
**Mac** ([Intel x86](https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2-croeseid/chain-main_4.2.2-croeseid_Darwin_x86_64.tar.gz) / [M1](https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2-croeseid/chain-main_4.2.2-croeseid_Darwin_arm64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2-croeseid/chain-main_4.2.2-croeseid_Windows_x86_64.zip) are also available.

- To install Crypto.org Chain released **testnet binaries** from github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2-croeseid/chain-main_4.2.2-croeseid_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_4.2.2-croeseid_Linux_x86_64.tar.gz
  ```
- You can verify the installation by checking the version of the chain-maind, the current version is `4.2.2-croeseid`.

::: tip Reminder:
For macOS users: the binary is not signed, you have to follow the steps [here](https://support.apple.com/en-hk/guide/mac-help/mh40616/mac) to make the binary runnable.
:::

  ```bash
  $./chain-maind version
  4.2.2-croeseid
  ```
## Step 2. Configure `chain-maind`

Before kick-starting your node, we will have to configure your node so that it connects to the Croeseid testnet:

### Step 2-0 (Optional) Clean up the old blockchain data
- If you would like to clean up the old blockchain data for Croeseid Testnet and start over again, it can be done by running:
    ``` bash
    $ ./chain-maind unsafe-reset-all
    ```
  and remove the old genesis file by
    ```
    $ rm ~/.chain-maind/config/genesis.json
    ```

- You cannnot override the previous validator through `chain-maind init`. If you want to have a new validator, you need to manually remove the `priv_validator_key.json`:
    ``` bash
    rm ~/.chain-maind/config/priv_validator_key.json
    ```
  Then, in Step 2-1, `chain-maind init` should help you to generate a new validator key file. 

### Step 2-1 Initialize `chain-maind`

- First of all, you can initialize chain-maind by:

  ```bash
    $ ./chain-maind init [moniker] --chain-id testnet-croeseid-5
  ```

  This `moniker` will be the displayed id of your node when connected to Crypto.org Chain network.
  When providing the moniker value, make sure you drop the square brackets since they are not needed.
  The example below shows how to initialize a node named `pegasus-node` :

  ```bash
    $ ./chain-maind init pegasus-node --chain-id testnet-croeseid-5
  ```

  ::: tip NOTE

  - Depending on your chain-maind home setting, the chain-maind configuration will be initialized to that home directory. To simply the following steps, we will use the default chain-maind home directory `~/.chain-maind/` for illustration.
  - You can also put the `chain-maind` to your binary path and run it by `chain-maind`
    :::

### Step 2-2 Configure chain-maind

- Download and replace the Croeseid Testnet `genesis.json` by:

  ```bash
  $ curl https://raw.githubusercontent.com/crypto-com/testnets/main/testnet-croeseid-5/genesis.json > ~/.chain-maind/config/genesis.json
  ```

- Verify sha256sum checksum of the downloaded `genesis.json`. You should see `OK!` if the sha256sum checksum matches.

  ```bash
  $ if [[ $(sha256sum ~/.chain-maind/config/genesis.json | awk '{print $1}') = "cf20fb923be3bc565e49a57e81a47ca969e8a973be7b3ed44e2734e369118b6c" ]]; then echo "OK"; else echo "MISMATCHED"; fi;

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
  $ sed -i.bak -E 's#^(minimum-gas-prices[[:space:]]+=[[:space:]]+)""$#\1"0.025basetcro"#' ~/.chain-maind/config/app.toml
  ```

- For network configuration, in `~/.chain-maind/config/config.toml`, please modify the configurations of `persistent_peers`,  `create_empty_blocks_interval` and `timeout_commit` by:

  ```bash
  $ sed -i.bak -E 's#^(persistent_peers[[:space:]]+=[[:space:]]+).*$#\1"71d2a4727bf574d5d368c343e37edff00cd556b1@52.76.52.229:26656,8af7c92277f3edce58aa828cf1026cfa74fd6569@18.141.249.17:26656"#' ~/.chain-maind/config/config.toml
  $ sed -i.bak -E 's#^(create_empty_blocks_interval[[:space:]]+=[[:space:]]+).*$#\1"5s"#' ~/.chain-maind/config/config.toml
  $ sed -i.bak -E 's#^(timeout_commit[[:space:]]+=[[:space:]]+).*$#\1"2s"#' ~/.chain-maind/config/config.toml  
  ```

**Note**: We suggest using `persistent_peers` instead of `seeds` to provide stable state-sync experience.
### Step 2-3 Enable STATE-SYNC
  [STATE-SYNC](https://docs.tendermint.com/v0.34/tendermint-core/state-sync.html#state-sync) is supported in our testnet.

With state sync, your node will download data related to the head or near the head of the chain and verify the data. This leads to drastically shorter times for joining a network for validator.

However, you should keep in mind that the block before state-sync `trust height` will not be queryable. So if you want to run a full node, better not use state-sync feature to ensure your node has every data on the blockchain network. 


For **validator**, it will be fast to sync the near head of the chain and join the network.

Follow the below optional steps to enable state-sync.


- For state-sync configuration, in `~/.chain-maind/config/config.toml`, please modify the configurations of [statesync] `enable`, `rpc_servers`, `trust_height` and `trust_hash` by:

  ```bash

  $ LATEST_HEIGHT=$(curl -s https://testnet-croeseid-5.crypto.org:26657/block | jq -r .result.block.header.height); \
  BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \
  TRUST_HASH=$(curl -s "https://testnet-croeseid-5.crypto.org:26657/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

  $ sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
  s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"https://testnet-croeseid-5.crypto.org:26657,https://testnet-croeseid-5.crypto.org:26657\"| ; \
  s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
  s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \
  s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" ~/.chain-maind/config/config.toml
  ```

  ::: tip NOTE

  - For Mac environment, if `jq` is missing, you may install it by: `brew install jq`
    :::

## Step 3. Run everything

::: warning CAUTION
This page only shows the minimal setup for validator node.


Furthermore, you may want to run full nodes as sentries (see [Tendermint](https://docs.tendermint.com/v0.34/tendermint-core/validators.html#sentry-node-configuration)), restrict your validator connections to only connect to your full nodes, test secure storage of validator keys etc.
:::

### Step 3-1. Create a new key and address

Run the following to create a new key. For example, you can create a key with the name `Default` by:

```bash
  $ ./chain-maind keys add Default
```

You should obtain an address with `tcro` prefix, e.g. `tcro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n`. This will be the address for performing transactions.

### Step 3-2. Obtain test token

Croeseid 5 faucet is on the way. If you need testing tokens, you can send a message on [Discord](https://discord.gg/pahqHz26q4) #request-tcro-croeseid channel, stating who you are and your `tcro.....` address for Croeseid 5.  

### Step 3-3. Obtain the validator public key

You can obtain your validator public key by:

```bash
  $ ./chain-maind tendermint show-validator
```

The public key should be in a json format, for example:

```bash
{
  "@type": "/cosmos.crypto.ed25519.PubKey",
  "key": "[The_validator_key]"
}
```

### Step 3-4. Run everything

Once the `chain-maind` has been configured, we are ready to start the node and sync the blockchain data:

- Start chain-maind, e.g.:

```bash
  $ ./chain-maind start
```
::: tip Remarks:
If you see errors saying `too many files opened...`, then you need to set a higher number for maximum open file descriptors in your OS.

If you are on OSX or Linux, then the following could be useful:
  ``` bash
  # Check current max fd
  $ ulimit -n
  # Set a new max fd
  $ ulimit -Sn [NEW_MAX_FILE_DESCRIPTOR]
  # Example
  $ ulimit -Sn 4096 
  ```
:::

- _(Optional for Linux)_ Start chain-maind with systemd service, e.g.:

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
LimitNOFILE=50000

[Install]
WantedBy=multi-user.target
```

:::

It should begin fetching blocks from the other peers. Please wait until it is fully synced before moving onto the next step.

- You can query the node syncing status by
  ```bash
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
  ```
  If the above command returns `false`, It means that your node **is fully synced**; otherwise, it returns `true` and implies your node is still catching up.

- One can check the current block height by querying the public full node by:

  ```bash
  curl -s https://testnet-croeseid-5.crypto.org:26657/commit | jq "{height: .result.signed_header.header.height}"
  ```

  and you can check your node's progress (in terms of block height) by

  ```bash
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.latest_block_height'
  ```

### Step 3-5. Send a `create-validator` transaction

Once the node is fully synced, we are now ready to send a `create-validator` transaction and join the network, for example:

```
$ ./chain-maind tx staking create-validator \
--from=[name_of_your_key] \
--amount=500000tcro \
--pubkey='{"@type":"/cosmos.crypto.ed25519.PubKey","key":"PUBLIC_KEY"}'  \
--security-contact="[security contact email/contact method]" \
--chain-id="testnet-croeseid-5" \
--commission-rate="0.10" \
--commission-max-rate="0.20" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1" \
--gas 80000000 \
--gas-prices 0.1basetcro

{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```

You will be required to insert the following:

- `--from`: The `trco...` address that holds your funds;
- `--pubkey`: The validator public key( See Step [3-3](#step-3-3-obtain-the-validator-public-key) above );
- `--moniker`: A moniker (name) for your validator node;
- `--security-contact`: Security contact email/contact method.

### Step 3-6. Check your validator status

Once the `create-validator` transaction completes, you can check if your validator has been added to the validator set:

```bash
$ ./chain-maind tendermint show-address
## [tcrocnclcons... address] ##
$ ./chain-maind query tendermint-validator-set | grep -c [tcrocnclcons...]
## 1 = Yes; 0 = Not yet added ##
```

To further check if the validator is signing blocks, kindly run this [script](https://github.com/crypto-com/chain-docs/blob/master/docs/getting-started/assets/signature_checking/check-validator-up.sh), for example:

```bash
$ curl -sSL https://raw.githubusercontent.com/crypto-com/chain-docs/master/docs/getting-started/assets/signature_checking/check-validator-up.sh | bash -s -- \
--tendermint-url https://testnet-croeseid-5.crypto.org:26657 \
--pubkey $(cat ~/.chain-maind/config/priv_validator_key.json | jq -r '.pub_key.value')

The validator is in the active validator set under the address  <YOUR_VALIDATOR_ADDRESS>
The validator is signing @ Block#<BLOCK_HEIGHT> 👍
```

```bash
$ curl -sSL https://raw.githubusercontent.com/crypto-com/chain-docs/master/docs/getting-started/assets/signature_checking/check-validator-up.sh | bash -s -- \
--tendermint-url https://testnet-croeseid-5.crypto.org:26657 \
--bechpubkey [tcrocnclconspub1....]

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
$ ./chain-maind query bank balances tcro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n

balances:
- amount: "10005471622381693"
  denom: basetcro
pagination:
  next_key: null
  total: "0"

```

:::

### Step 4-2. `tx bank send` - Transfer operation

Transfer operation involves the transfer of tokens between two addresses.

#### **Send Funds** [`tx bank send <from_key_or_address> <to_address> <amount> <network_id>`]

:::details Example: Send 10tcro from an address to another.

```bash
$ ./chain-maind tx bank send Default tcro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q 10tcro --chain-id "testnet-croeseid-5" --gas-prices 0.1basetcro
  ## Transaction payload##
  {"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

### Step 4-3. `tx staking` - Staking operations

::: tip NOTE

- To get the 'validator-addr' with bech32 prefix, you can run with this command:

  ```bash
  ./chain-maind keys show Default --bech val
  ```
  :::

Staking operations involve the interaction between an address and a validator. It allows you to create a validator and lock/unlocking funds for staking purposes.

#### **Delegate you funds to a validator** [`tx staking delegate <validator-addr> <amount>`]

To bond funds for staking, you can delegate funds to a validator by the `delegate` command

::: details Example: Delegate funds from `Default` to a validator under the address `tcrocncl16k...edcer`

```bash
$ ./chain-maind tx staking delegate tcrocncl16kqr009ptgken6qsxnzfnyjfsq6q97g3uedcer 100tcro --from Default --chain-id "testnet-croeseid-5" --gas-prices 0.1basetcro
## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

#### **Unbond your delegated funds** [`tx staking unbond <validator-addr> <amount>`]

On the other hand, we can create a `Unbond` transaction to unbond the delegated funds

::: details Example: Unbond funds from a validator under the address `tcrocncl16k...edcer`

```bash
$ ./chain-maind tx staking unbond tcrocncl16kqr009ptgken6qsxnzfnyjfsq6q97g3uedcer 100tcro --from Default --chain-id "testnet-croeseid-5" --gas-prices 0.1basetcro
## Transaction payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgUndelegate"...}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

::: tip

- Once your funds were unbonded, It will be locked until the `unbonding_time` has passed.

:::

### Reward related transactions and queries

After you have delegated or create a validator, reward will be accumulated, you can check/ withdraw it by:
#### `query distribution validator-outstanding-rewards` - Query un-withdrawn rewards for a validator

We can check distribution outstanding (un-withdrawn) rewards for a validator and all of their delegations by its operator address.

::: details Example: Check all outstanding rewards under the operator address `tcrocncl1...zrf8`

```bash
$ ./chain-maind q distribution validator-outstanding-rewards tcrocncl1kkqxv3szgh099xezt7y38t5anqzue4s326zrf8
  rewards:
  - amount: "1920761912.927067330419141688"
    denom: basetcro
```
:::

#### `tx distribution validator-outstanding-rewards` - Query un-withdrawn rewards for a validator

We can check distribution outstanding (un-withdrawn) rewards for a validator and all of their delegations by its operator address.

::: details Example: Withdraw all outstanding under a delegation address:

```bash
$ ./chain-maind tx distribution withdraw-all-rewards --from [key_name] --chain-id "testnet-croeseid-5" --gas-prices 0.1basetcro

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
      "operator_address": "tcrocncl1hct8ye56gk80qjxvrx299yu9v98aqaxe0y5kvg",
      "consensus_pubkey": {
        "@type": "/cosmos.crypto.ed25519.PubKey",
        "key": "P1/aHuScW5myVs+xH10R8yFT2u0wwaCKXfDKSuVTl60="
      },
      "jailed": true,
................................
```

Where `"jailed": true` implies that the validator has been jailed. After the jailing period has passed, one can broadcast a `unjail` transaction to unjail the validator and resume its normal operations by

```bash
$ ./chain-maind tx slashing unjail --from [key_name] --chain-id "testnet-croeseid-5" --gas-prices 0.1basetcro

  {"body":{"messages":[{"@type":"/cosmos.slashing.v1beta1.MsgUnjail"...}]}
  confirm transaction before signing and broadcasting [y/N]: y
```

:::

Congratulations! You've successfully set up a Croeseid 5 Testnet node and performed some basic transactions! You may refer to [Wallet Management](https://crypto.org/docs/wallets/cli.html#chain-maind) for more advanced operations and transactions.

## Croeseid 5 testnet explorer and endpoint

- You can lookup data within the `testnet-croeseid-5` network by the [explorer](https://crypto.org/explorer/croeseid5/);
- Tendermint: `https://rpc-c5.crypto.org/`; 
- REST: `https://rest-c5.crypto.org`.
