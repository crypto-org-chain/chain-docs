# Crypto.org Mainnet: Running a Full Node


This is a detailed documentation for setting up a **Full Node** on Crypto.org mainnet. Note that while anyone can set up a full node, only the top 100 validators are considered "active" and eligible to receive rewards. See [FAQs](https://github.com/crypto-org-chain/chain-main/discussions/442) for more info.

## Step 0 : Notes on network upgrades

For the host who would like to build a **Run a Full Node with complete blockchain data** from scratch,
note that there were serveral breaking network upgrades, requiring upgrading at designated block heights below:

| Block height          | Binary Version        | Instruction |
| --------------------- | --------------------- | -------------------------------------------- |
| `1 - 922,363`         | `chain-main_1.2.1`    | Start the node with the older binary version |
| `922,363 - 3,526,800` | `chain-main_2.0.1`    | When it reaches the target block height `922,363` (Canis Major), update the binary and restart |
| `3,526,800 - 10,073,800` | `chain-main_3.3.9`    | When it reaches the target block height `3,526,800` (Draco II ), update the binary and restart* |
| `>10,073,800` | `chain-main_4.2.2`    | When it reaches the target block height `10,073,800` (V4 upgrade ), update the binary and restart |

- *Note that as of `v3.3.5` and higher, you need to modify your `.chain-maind/config/app.toml` and set the following params:
  - `index_events = []`
  - `iavl-cache-size = 781250`
  - `iavl-disable-fastnode = false`
  (set to `true` to skip IAVL migration, but keep as `false` when starting from a migrated snapshot. 
  When you are on `INF starting ABCI with Tendermint` for a while, migration is going on and you should NOT terminate this. 
  It might take a couple hours, so plan well ahead for this migration, as it may incur downtime.)

- Users can refer to the upgrade guides of 
  - ["Canis Major"](https://crypto.org/docs/getting-started/upgrade_guide.html) (`v1.*` to `v2.0.1`);
  - ["DRACO II"](https://crypto.org/docs/getting-started/upgrade_guide_draco_2.html) (`v2.*` to `v3.3.9`);
  - ["V4 upgrade"](https://crypto.org/docs/getting-started/upgrade_guide_v4.html) (`v3.3.9` to `v4.2.2`);
for the detailed upgrade steps.


## Pre-requisites
### Supported OS

We officially support macOS, Windows and Linux only. Other platforms may work, but there is no guarantee. We will extend our support to other platforms after we have stabilized our current architecture.

### Prepare your machine

For Crypto.org Chain mainnet, you will need a machine with the following minimum requirements to run different types of nodes:

Archive Node (setting pruning = nothing) 
- RAM: 64GB (Rocksdb)
- Disk: 3.4TB
- CPU: 4 cores

Default Full Node (setting pruning = default) 
- RAM: 64GB (Rocksdb) or 16GB (goleveldb)
- Disk: 1.2TB (From quick sync)
- CPU: 4 cores

Pruned Node (setting pruning = everything) 
- RAM: 64GB (Rocksdb) or 16GB (goleveldb)
- Disk: 40GB (From quick sync)
- CPU: 4 cores

*Please note that the size of snapshots from Quicksync will keep growing.*

## Step 1. Get the Crypto.org Chain Mainnet binary



::: tip Remarks:
The following is the minimal setup to join Crypto.org Chain Mainnet. Furthermore, you may want to run full nodes as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html)),  restrict your validator connections to only connect to your full nodes, use secure storage and [key management](https://crypto.org/docs/getting-started/advanced-tmkms-integration.html) service for your validator keys etc.
:::
To simplify the following step, we will be using **Linux** for illustration. Binary for
[Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v1.2.1/chain-main_1.2.1_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v1.2.1/chain-main_1.2.1_Windows_x86_64.zip) are also available.
There are two options to install `chain-maind`:
- [Directly from Github](#option-1-install-chain-maind-released-binaries-from-github); or
- [Homebrew](#option-2-install-chain-maind-by-homebrew)


As mention before, in order to run a full node with complete blockchain data, we would need to begin with the older binary version `1.2.1`: 
### Option 1 - Install `chain-maind` released binaries from Github


- To install Crypto.org Chain binaries from Github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v1.2.1/chain-main_1.2.1_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_1.2.1_Linux_x86_64.tar.gz
  ```

- You can verify the installation by checking the version of the chain-maind, the current version is `1.2.1`.
  ```bash
  # check the version of chain-maind
  $ ./chain-maind version
  1.2.1
  ```
**OR**

### Option 2 - Install `chain-maind` by homebrew

::: tip Reminder:
- If you plan to play around with different networks (mainnet and testnet), we suggest you to follow `Option 1` to download the binary directly.

- The binary downloaded from homebrew is **only for interacting with the mainnet**. You cannot use it to interact with testnet.
:::

To install binaries in Homebrew for macOS X or Linux

[Homebrew](https://brew.sh/) is a free and open-source package management system for macOS X. Install the official Chain-maind formula from the terminal.

-  First, install the `crypto-org-chain` tap, a repository of our Homebrew `chain-maind` package:

  ```bash
    # tap the repo
    $ brew tap crypto-org-chain/chain-maind
  ```

- Now, install the `chain-maind` version `1.2.1` with crypto-org-chain/chain-maind

  ```bash
    # install the chain-maind CLI tool
    $ brew install chain-maind@1.2.1
  ```
- You can verify the installation by checking the version of the `chain-maind`
  ```bash
  # check the version of chain-maind
  $ chain-maind version
  1.2.1
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
LimitNOFILE=50000

[Install]
WantedBy=multi-user.target
```

:::

It should begin fetching blocks from the other peers. Please wait until it is synced to the upgrade height `922,363` before moving onto the next step.

::: tip Remarks: 
  - You can query the node syncing status by
    ```bash
    $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
    ```
If the above command returns `false`, it means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.

:::


### Step 3-2. Upgrade the `chain-maind` binary to `v2.1.2`

At the upgrade height of `922,363`, users will see the following error message on the `chain-maind`: 

```bash
`ERR UPGRADE "v2.0.0" NEEDED at time: 2021-06-01T23:59:00Z:...`
```


#### Step 3-2-1 - Get the `v2.1.2` binary

To simplify the following step, we will be using **Linux** for illustration. Binary for
[Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v2.1.2/chain-main_2.1.2_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v2.1.2/chain-main_2.1.2_Windows_x86_64.zip) are also available. 

- Terminate the `chain-maind`; afterwards, download the `v2.1.2` released binaries from github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v2.1.2/chain-main_2.1.2_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_2.1.2_Linux_x86_64.tar.gz
  ```


    ::: tip Remarks: 
    If you have stated `chain-maind` with *systemd* service, kindly stop it by 

    ```bash 
    $ sudo systemctl stop chain-maind
    ```
    And replace the binary in the location where the `ExecStart` states in Systemd Unit file.
    
    :::



- For [homebrew](https://github.com/crypto-org-chain/homebrew-chain-maind#chain-maind-homebrew-tap) users, simply run 

    ```bash 
    $ brew upgrade chain-maind
    ```
#### Step 3-2-2 -  Verify the version

You can verify the installation by checking the version of `chain-maind`, the latest version is `2.0.1`.

  ```bash 
  # check the version of chain-maind
  $ ./chain-maind version
  2.1.2
  ```

#### Step 3-2-3 - Restart `chain-maind` with version `v2.1.2`

We are ready to start the node join the network again with the new binary:

- Start `chain-maind`, e.g.:

```bash
  $ ./chain-maind start
```

You've successfully performed the new binary upgrade! Sit back and wait for the syncing process. 

- You can query the node syncing status by
  ```bash
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
  ```
If the above command returns `false`, it means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.

  - You can check the current block height by querying the public full node by:

    ```bash
    curl -s https://rpc.mainnet.crypto.org:443/commit | jq "{height: .result.signed_header.header.height}"
    ```


and you can check your node's progress (in terms of block height) by:

    ```bash
    $ ./chain-maind status 2>&1 | jq '.SyncInfo.latest_block_height'
    ```

## "DRACO II" and "V4" Network upgrades 

You've successfully performed the **"Canis Major"** binary upgrade! Allow sometime for the node to catch up, meanwhile, you can get ready for  **"DRACO II,"** the second network upgrade  ( from `v2.*` to `v3.3.2` at block height `3,526,800` ) by following this [guide](./upgrade_guide_draco_2.md), and **"V4 Upgrade"** (from `v3.3.*` to `v4.2.2` at block height `10,073,800`) by following this [guide](./upgrade_guide_v4.md) at a later stage.
You can find the key details for all the upgrades under ["Notes on network upgrades"](https://crypto.org/docs/getting-started/mainnet.html#step-0-notes-on-network-upgrades)


## *(Optional)* QuickSync
Syncing Crypto.org Chain could be a time-consuming process, Crypto.org Chain team has partnered with Chainlayer to provide the “QuickSync” service to make the process more efficient for our users. 

Users can visit [Chainlayer QuickSync Crypto.org page](https://quicksync.io/networks/crypto.html) and download the snapshots for Crypto.org Chain with different pruning settings (*currently only levelDB downloads are available*). You may refer to the following guide to implement QuickSync. 

### Step 1. QuickSync Download 

To start with QuickSync, you need to run `brew install lz4`  to install lz4 in a new terminal. Then download the file with preferred pruning settings directly from https://quicksync.io/networks/crypto.html. 

#### There are three versions: 

**Crypto-org-chain-mainnet-1-pruned**
- Pruned snapshot is the quickest way to get a node running. If you only want to give a shot, use it for a validator or sentry node, the pruned snapshot will be a good choice. Pruned snapshots have transaction index disabled to save disk/download size, which also will make API queries not work backward in time. If you still want to use a pruned snapshot to start an API node, then you can enable transaction index on your end to start indexing blocks from when your startup your node. But you will not be able to query anything earlier than that.

**Crypto-org-chain-mainnet-1-default**
- Default is a good middle choice between everything. It will work in most use cases, validator, sentry node, API nodes. It has tx index enabled, so you can query block back in time.
The only thing that default nodes do not have is the full history from the start of the chain or chain upgrade.

**Crypto-org-chain-mainnet-1-archive**
- For the users who would like to query the old block, you may pick the archive one for complete blockchain data. The archive node will have all the blocks from the chain start or chain upgrade with full indexing. So this is a good option for API nodes if you need to have access to the whole chain history. Archives grow fast in size and might be more sluggish to run, so if you need something simpler default or a pruned kickstarted API node might solve most of the needs out there.

### Step 2. QuickSync Setup 
In the following steps, we will take the version `crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4` as an example. 

(Optional) you can [download an addressbook](https://quicksync.io/addrbook.ccomchain.json) to get connected to peers faster. After downloading it, place the new `addrbook.json` under `.chain-maind/config` folder and restart your node to take effect.

Now add the `crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4` inside `.chain-maind`.

Then perform the following steps:
- Change the path under `.chain-maind` with `cd .chain-maind`
- Decompress with `lz4` first then decompress with `tar` by `lz4 -d /Users/<username>/.chain-maind/crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4 | tar -xv`.

:::details Example: Decompress the QuickSync pack with `lz4`

```bash
x data/
x data/state.db/
x data/state.db/161915.ldb
x data/state.db/035015.ldb
...
x data/evidence.db/MANIFEST-000143
x data/evidence.db/000142.log
x data/priv_validator_state.json
```

:::

The original data folder under `.chain-maind` is overwritten with the step above. It takes around a few mins to decompress the pruned version of 47GB(at the date of writing).

### Step 3. Sync with QuickSync
Now direct back to the original directory and re-sync the chain again with `./chain-maind start`. It starts the node and syncs the blockchain data from the height of `5055406`. 

:::details Example: Restart `chain-maind start` with QuickSync

```bash
  $ ./chain-maind start                                                                   
  12:28PM INF starting ABCI with Tendermint
  12:28PM INF Starting multiAppConn service impl=multiAppConn module=proxy
  12:28PM INF Starting localClient service connection=query impl=localClient module=abci-client
  12:28PM INF Starting localClient service connection=snapshot impl=localClient module=abci-client
  ...
  12:28PM INF ABCI Handshake App Info hash="Pٖ}\x03G[5\x1aQi*#y-s:" height=5055406 module=consensus protocol-version=0 software-version=
  12:28PM INF ABCI Replay Blocks appHeight=5055406 module=consensus stateHeight=5055406 storeHeight=5055406
```

:::

---
