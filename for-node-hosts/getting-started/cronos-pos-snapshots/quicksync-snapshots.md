---
description: Newest snapshots for the Cronos Proof Of Steak (POS) Blockchain
---

# QuickSync SnapShots

## Introduction

Syncing Cronos POS Chain from genesis can be a time-consuming process. To make this more efficient for users, the Cronos team has partnered with [Chainlayer](https://chainlayer.io/) to provide the "[QuickSync](https://quicksync.io/cronos-pos)" service, which offers pre-synchronized blockchain snapshots with different pruning configurations.

QuickSync snapshots are available with three different pruning settings to match your specific use case:

* **Pruned** - Optimized for validators and sentry nodes with minimal storage requirements
* **Default** - Balanced option suitable for most use cases including API nodes
* **Archive** - Complete blockchain history for full API functionality

All snapshots use `LevelDB` and can be downloaded from: [https://quicksync.io/cronos-pos](https://quicksync.io/cronos-pos)

### Snapshot Types

#### Crypto-org-chain-mainnet-1-pruned

The **pruned** snapshot is the fastest way to get a node running and is ideal for validator or sentry nodes. This option has transaction indexing disabled to reduce disk space and download size, which means API queries cannot work backward in time. If you need API functionality, you can enable transaction indexing after startup, but you won't be able to query historical data from before your node started.

#### Crypto-org-chain-mainnet-1-default

The **default** snapshot provides a good balance for most use cases, including validators, sentry nodes, and API nodes. It has transaction indexing enabled, allowing you to query historical blocks. However, it doesn't include the complete history from chain genesis or previous chain upgrades.

#### Crypto-org-chain-mainnet-1-archive

The **archive** snapshot contains complete blockchain data from chain start with full indexing, making it perfect for API nodes requiring access to entire chain history. Note that archive nodes grow quickly in size and may be slower to operate compared to other options.

{% hint style="info" %}
Before starting the QuickSync process, install the LZ4 [compression tool](https://www.npmjs.com/package/lz4?activeTab=readme):\
`brew install lz4`
{% endhint %}

### Step 1: Chain-maind Setup

#### Download and Install Chain-maind

1. Download the latest **`chain-maind`** binary from the [Cronos POS Chain GitHub repository](https://github.com/crypto-org-chain/chain-main/releases) based on your operating system.
2. Extract the downloaded file:

```bash
tar -zxvf chain-main_4.2.9_Darwin_arm64.tar.gz
```

3. Verify installatio&#x6E;**:**

```bash
# check the version of chain-maind
cd bin
./chain-maind version
6.0.1
```

#### Initialize and Configure

1. Initialize Chain-maind (refer to the [initialization steps from the main documentation](../mainnet/#step-2-1.-initialize-chain-maind))
2. Configure the node in \`config.toml\`

```bash
nano ~/.chain-maind/config/config.toml
```

Update the seed nodes with the latest available seeds (check the official documentation for [current seed list](https://github.com/crypto-org-chain/mainnet#seed-nodes)).

3. Start Chain-maind briefly to create the necessary directory structure:

```bash
./chain-maind start
```

Once you see the node syncing for a couple of blocks, terminate the process (Ctrl+C).

### Step 2: Download QuickSync Snapshot

1. Visit the QuickSync page: [https://quicksync.io/cronos-pos](https://quicksync.io/cronos-pos)
2. Select your preferred snapshot type based on your use case requirements
3. Download the snapshot file (example filename: `crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4`)

### Step 3: QuickSync Setup

Optional: Download Address Book

For faster peer connections, you can download an address book:

1. Download the address book from the QuickSync page
2. Place the `addrbook.json` file in your `~/.chain-maind/config/` folder
3. Restart your node to apply the new address book

#### Extract the Snapshot

1. Move the downloaded snapshot to your Chain-maind directory:

```bash
mv crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4 ~/.chain-maind/
```

2. Navigate to the Chain-maind directory:

```bash
cd ~/.chain-maind
```

3. Extract the snapshot:

```bash
lz4 -d crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4 | tar -xv
```

Expected output during extraction:

```
x data/
x data/state.db/
x data/state.db/161915.ldb
x data/state.db/035015.ldb
...
x data/evidence.db/MANIFEST-000143
x data/evidence.db/000142.log
x data/priv_validator_state.json
```

{% hint style="info" %}
**Note:** The extraction process will overwrite your existing data folder. For the pruned version (approximately 47GB), extraction takes a few minutes.
{% endhint %}

### Step 4: Start Syncing with QuickSync

1. Navigate back to your Chain-maind binary directory
2. Start the node:

```bash
./chain-maind start
```

Your node will start syncing from the snapshot height. Expected output:

```
12:28PM INF starting ABCI with Tendermint
12:28PM INF Starting multiAppConn service impl=multiAppConn module=proxy
12:28PM INF Starting localClient service connection=query impl=localClient module=abci-client
...
12:28PM INF ABCI Handshake App Info height=5055406 module=consensus
12:28PM INF ABCI Replay Blocks appHeight=5055406 module=consensus stateHeight=5055406 storeHeight=5055406
```

### Conclusion

Your Cronos POS Chain node is now running with QuickSync! The node will continue syncing from the snapshot height to the current network height, significantly reducing the time required compared to syncing from genesis.
