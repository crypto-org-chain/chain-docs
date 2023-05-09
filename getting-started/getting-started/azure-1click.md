# Mainnet/Testnet: Running Nodes using Azure 1-click Deployment

This tutorial will use our Azure 1-click Deployment image to start and create the latest Croeseid Testnet validator or full node.

::: warning CAUTION We do not recommend directly running validator on Mainnet by 1-Click deployment. Please use with caution! Because the 1-click deployment is not running with [TMKMS](https://github.com/iqlusioninc/tmkms) and your tendermint validator key is in plain text `/chain/.chain-maind/config/priv_validator_key.json`. You may consider running validator with [tmkms on AWS nitro-enclave](../../docs/getting-started/advanced-tmkms-integration.html) :::

## Step 1. Azure Account Creation

You will first need to create an [Microsoft Azure](https://azure.microsoft.com/) account with a `Pay-As-You-Go` subscription. This will require providing your credit card information to `Microsoft Azure` and you may be subject to getting charged when you create a virtual machine.

Please read `Microsoft Azure` free trial introduction to see if you are eligible for the free-tier.

## Step 2. Common Setup

### Step 2-1. Search for Crypto.org Chain on Marketplace

Sign in to your Microsoft Azure account and go to [Marketplace](https://portal.azure.com/#blade/Microsoft\_Azure\_Marketplace/MarketplaceOffersBlade/selectedMenuItemId/home). Search for "Crypto.org Chain 1-Click Node".

![](../../docs/getting-started/assets/azure\_marketplace.png)

### Step 2-2. Create a Virtual Machine

Choose the image and click "Create" to start creating the Crypto.org Chain 1-Click Node.

#### 1. Basic

![](../../docs/getting-started/assets/azure\_1click\_basics.png)

| Configuration           | Value                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| _Size_                  | Select a recommended one or _DC2s\_v3_                                                                            |
| _SSH public key source_ | Choose _"existing public key"_                                                                                    |
| _SSH public key_        | Copy and paste your [SSH public key](https://docs.microsoft.com/azure/virtual-machines/linux/mac-create-ssh-keys) |
| _Resource group_        | We suggest creating a new and dedicated one so that you can easily manage resources attached to the instance      |

#### 2. Disk

* Follow default setting

#### 3. Networking

![](../../docs/getting-started/assets/azure\_1click\_networking.png)

* _Virtual network_, _Subnet_, _Public IP_ and _NIC_: "Create new" if you don't have any in that region

#### 4. Management

* Follow default setting
* _Boot diagnostics_: default is "On". Set to "Off" if it is not required.

#### 5. Advanced

* Follow default setting

#### 6. Tags

* Create Tag if needed

#### 7. Review + Create

* Click "create" to create your instance

### Step 2-3. Connect to your instance

Once the deployment is completed, you can connect to your instance via SSH.

```bash
$ ssh ubuntu@PUBLIC_IP
```

Afterwards, go to the `chain` directory, and you will find all the essential binaries for setting up your node:

```bash
$ cd /chain/
$ ll
total 32
drwxr-xr-x  7 crypto crypto 4096 Mar 20 14:51 ./
drwxr-xr-x 20 root   root   4096 Mar 25 09:46 ../
drwxr-xr-x  4 crypto crypto 4096 Mar 20 14:47 .chain-maind/
drwxr-xr-x  2 crypto crypto 4096 Mar 20 14:44 bin/
drwxr-xr-x  2   3434   3434 4096 Mar  5 09:41 node_exporter-1.1.2.linux-amd64/
-rwxr-xr-x  1 crypto crypto  535 Mar 20 14:43 reconfig.sh*
drwxr-xr-x  2 root   root   4096 Mar 20 14:43 release_binary/
drwxr-xr-x  2 crypto crypto 4096 Mar 20 14:47 sockets/
```

## Step 3. Running a full node

### Step 3-1. Use the reconfiguration script

Now we use the reconfiguration script `reconfig.sh` to choose the existing networks to join.

```bash
$ sudo -u crypto /chain/reconfig.sh
Please select either mainnet(M) or testnet(T) to join (M/T): M
You can select the following networks to join
	0. crypto-org-chain-mainnet-1
Please choose the network to join by index (0/1/...): 0
The selected network is crypto-org-chain-mainnet-1
The genesis does not exit or the sha256sum does not match the target one. Download the target genesis from github.
💾 Downloading crypto-org-chain-mainnet-1 genesis
```

You may also enable (**Optional**)[STATE-SYNC](https://docs.tendermint.com/master/tendermint-core/state-sync.html). Your node will download data related to the head or near the head of the chain and verify the data. This leads to drastically shorter times for joining a network for validator. For **validator**, It will be amazingly fast to sync the near head of the chain and join the network.

::: warning CAUTION Blocks before state-sync `trust height` will **NOT** be queryable. If you want to run a **full node** or a validator with complete blockchain data; It is not suggested to use state-sync. :::

```bash
...
Do you want to enable state-sync? (Y/N): Y
State-sync require the latest version of binary to state-sync from the latest block.
The binary does not exist or the version does not match the target version. Download the target version binary from github release.
💾 Downloading crypto-org-chain-mainnet-1 binary
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   644  100   644    0     0   6192      0 --:--:-- --:--:-- --:--:--  6192
100 13.7M  100 13.7M    0     0  43.6M      0 --:--:-- --:--:-- --:--:-- 43.6M
```

Clean up the old blockchain data (if any)

```bash
...
Reset chain-maind and remove data if any
❗️ Enter (Y/N) to confirm to delete any old data: Y
Stopping chain-maind service
3:18PM INF Removed all blockchain history dir=/chain/.chain-maind/data
3:18PM INF Generated private validator file keyFile=/chain/.chain-maind/config/priv_validator_key.json stateFile=/chain/.chain-maind/data/priv_validator_state.json
❗️ /chain/.chain-maind/config/priv_validator_key.json already exists! Do you want to override old key? (Y/N): Y
A new priv_validator_key.json with pubkey: open /chain/.chain-maind/config/priv_validator_key.json: no such file or directory

💡 Please make sure you have a backup of /chain/.chain-maind/config/priv_validator_key.json in case of unexpected accidents!
```

The consensus public key information could be found in `/chain/.chain-maind/config/priv_validator_key.json`

Backup your old `/chain/.chain-maind/config/priv_validator_key.json` if you created once.

```bash
❗️ /chain/.chain-maind/config/priv_validator_key.json already exists! Do you want to override old key? (Y/N): Y
A new priv_validator_key.json with pubkey: open /chain/.chain-maind/config/priv_validator_key.json: no such file or directory

💡 Please make sure you have a backup of /chain/.chain-maind/config/priv_validator_key.json in case of unexpected accidents!
```

The script will also ask you to fill in the `moniker` value which is a human-readable display name for tendermint p2p. _p2p gossip_ will allow you to connect with more nodes (data sources).

```bash
Replace moniker in /chain/.chain-maind/config/config.toml
Moniker is display name for tendermint p2p

moniker: YOUR_MONIKER_NAME
Do you want to add the public IP of this node for p2p gossip? (Y/N): Y
✅ Added public IP to external_address in chain-maind config.toml for p2p gossip
```

_node\_id_ and _node\_key_ are the unique identity of your node. Save them for later use.

```bash
...
Generate and replace node_key in /chain/.chain-maind/config/node_key.json

You may want to save node_id and node_key for later use

node_id: 62cf74XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

node_key: LyQiGlL4HsdHsPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

`chain-maind` is now running at the background as a systemd service.

You can check its log by the command `journalctl`, for example:

```bash
$ journalctl -u chain-maind.service -f
-- Logs begin at Wed 2020-12-30 13:51:25 UTC. --
Mar 25 15:34:02 ip-172-31-69-43 chain-maind[2657]: 3:34PM INF finalizing commit of block hash=3CB6E9CFAEB6681797E02547A096C9654A4558701660DCA78182CA1B43AA05F3 height=8460 module=consensus num_txs=3 root=39878A5AC834C6D89ADBC55097A6495FCE8C9E6FF8DE8DAAC5DD7373407A5C6D
Mar 25 15:34:02 ip-172-31-69-43 chain-maind[2657]: 3:34PM INF minted coins from module account amount=7925328957basecro from=mint module=x/bank
Mar 25 15:34:02 ip-172-31-69-43 chain-maind[2657]: 3:34PM INF executed block height=8460 module=state num_invalid_txs=0 num_valid_txs=3
Mar 25 15:34:02 ip-172-31-69-43 chain-maind[2657]: 3:34PM INF updates to validators module=state updates=A7E76081779FF5EE79A765DE4D716B4903D6902B:4266505417
Mar 25 15:34:02 ip-172-31-69-43 chain-maind[2657]: 3:34PM INF commit synced commit=436F6D6D697449447B5B36352032313020313636203639203130203633203137322032372031363120313438203133322031313320313031203135203131302031353720323134203134372034302034203234362032343220323237203231362032362031363220333120313431203231342032303020313239203234345D3A323130437D
Mar 25 15:34:02 ip-172-31-69-43 chain-maind[2657]: 3:34PM INF committed state app_hash=41D2A6450A3FAC1BA1948471650F6E9DD6932804F6F2E3D81AA21F8DD6C881F4 height=8460 module=state num_txs=3
...
```

The consensus public key can be found by and please take a note of it for next [steps](../../docs/getting-started/aws-1click.html#step-4-join-as-a-validator):

```
$ sudo /chain/bin/chain-maind tendermint show-validator --home /chain/.chain-maind/
## [crocnclcons... address] ##
## [tcrocnclcons... address] ##
```

The latest block height can be found by:

Mainnet

```bash
$ curl -s https://rpc.mainnet.crypto.org:443/block | jq -r .result.block.header.height
8525
```

Testnet (`testnet-croeseid-4`)

```bash
$ curl -s https://testnet-croeseid-4.crypto.org:26657/block | jq -r .result.block.header.height
8525
```

Once the tendermint syncs to the latest block, the setup is done! You may move on to the next step if you want to join the network as a validator.

## Step 4. Join as a validator

We suggest that you should do this process locally with `chain-maind` to avoid exposing your keys on a cloud server. If you haven't installed `chain-maind` yet, please follow [Step 1. Get the Crypto.org Chain binary](../../docs/getting-started/croeseid-testnet.html#step-1-get-the-crypto-org-chain-binary) for testnet or [Step 1. Get the Crypto.org Chain Mainnet binary](../../docs/getting-started/mainnet.html#step-1-get-the-crypto-org-chain-mainnet-binary) for mainnet. :::tip NOTE

* Check whether your chain-maind is mainnet or testnet binary

Mainnet

```bash
$ chain-maind version
3.3.9
```

* Mainnet binary for [Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main\_2.0.1\_Darwin\_x86\_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main\_2.0.1\_Windows\_x86\_64.zip) are also available.

Or Testnet

```bash
$ chain-maind version
3.1.0-croeseid
```

* Testnet binary for **Mac** ([Intel x86](https://github.com/crypto-org-chain/chain-main/releases/download/v3.1.0-croeseid/chain-main\_3.1.0-croeseid\_Darwin\_x86\_64.tar.gz) / [M1](https://github.com/crypto-org-chain/chain-main/releases/download/v3.1.0-croeseid/chain-main\_3.1.0-croeseid\_Darwin\_arm64.tar.gz))and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v3.1.0-croeseid/chain-main\_3.1.0-croeseid\_Windows\_x86\_64.zip) are also available.

:::

:::details Mainnet

### Create a new key and address

Please follow [Step 3-1. Create a new key and address](../../docs/getting-started/mainnet.html#step-3-1-create-a-new-key-and-address)

### Creating a validator node

You should obtain consensus public key from [Step 3-1. Use the reconfiguration script](../../docs/getting-started/aws-1click.html#step-3-1-use-the-reconfiguration-script)

Please follow [Step 3-5. Joining the network as a validator](../../docs/getting-started/mainnet.html#step-3-5-joining-the-network-as-a-validator-send-a-create-validator-transaction) to create validator.

### Check if the validator has been set

Back your server, and follow [Step 3-6. Check your validator status](../../docs/getting-started/mainnet.html#step-3-6-check-your-validator-status)

🎊 Congratulations! You've successfully joined the network as a validator! 🎊

:::

:::details Testnet

### Create a new key and address

Please follow [Step 3-1. Create a new key and address](../../docs/getting-started/croeseid-testnet.html#step-3-1-create-a-new-key-and-address)

### Creating a validator node

You should obtain consensus public key from [Step 3-1. Use the reconfiguration script](../../docs/getting-started/aws-1click.html#step-3-1-use-the-reconfiguration-script)

Please follow [Step 3-5. Joining the network as a validator](../../docs/getting-started/croeseid-testnet.html#step-3-5-send-a-create-validator-transaction) to create validator.

### Check if the validator has been set

Back your server, and follow [Step 3-6. Check your validator status](../../docs/getting-started/croeseid-testnet.html#step-3-6-check-your-validator-status)

🎊 Congratulations! You've successfully joined the network as a validator! 🎊

:::
