---
description: Newest snapshots for the Cronos Proof Of Steak (POS) Blockchain
---

# Public Node Sync

## Introduction

[Public Node Snapshots](https://www.publicnode.com/snapshots#cronos) provided by blockchain infrastructure company [Allnodes](https://www.allnodes.com/) offer a streamlined solution for Cronos node operators looking to quickly sync with the Cronos POS network. These snapshots are available as one-time bulk downloads and significantly reduce initial setup time and bandwidth requirements for new nodes.

The snapshots provide are `pruned` data for both Cronos EVM and **Cronos POS** mainnet blockchains, optimized for file size and download speed. This guide walks you through the step-by-step process of performing a quick synchronization using Public Node Snapshots.

> **Note:** If you need complete blockchain history to operate a full archive node, Native Snapshots or [Quicksync archive snapshots](https://quicksync.io/cronos-pos) are the recommended alternatives.

### Step 1: Download Public Node Snapshot

Users can visit [Public Node Snapshots page](https://www.publicnode.com/snapshots#cronos) and Select "Cronos POS Chain" from the available options to download the preferred`.lz4` compressed snapshot file.

The snapshot file will be named similar to: `cronos-pos-pruned-[height-range].tar.lz4`&#x20;

### Step 2: Install Required Tools

To start with Public Node Sync, install the `LZ4` [compression tool](https://www.npmjs.com/package/lz4?activeTab=readme) by running `brew install lz4` in a new terminal.

### Step 3: Chain-maind Setup

#### Download and Install Chain-maind

1. Download the latest `chain-maind` binary from the [Cronos POS Chain GitHub repository](https://github.com/crypto-org-chain/chain-main/releases) based on your operating system.
2. Extract the downloaded file by `tar -zxvf chain-main_6.0.1_Darwin_arm64.tar.gz`\
   &#x20;\
   After you unzip the `chain-maind` to the location you desire. In terminal, change directory to the `bin` folder, where `chain-maind` is located.\

3. Verify Installation:

```bash
# check the version of chain-maind
cd bin
./chain-maind version
6.0.1
```

#### Initialize and Configure

1. I**nitialize** `chain-maind` (refer to the [initialization steps from the main documentation](../mainnet/#step-2.-configure-chain-maind))
2. Configure the node by editing the configuration file:

```bash
nano ~/.chain-maind/config/config.toml
```

Update the seed nodes with the latest available seeds (as the list of the seed is subject to change, check the official documentation for [current seed list](https://github.com/crypto-org-chain/mainnet#seed-nodes)). &#x20;

3. Start Chain-maind briefly to create the necessary directory structure:

```bash
./chain-maind start
```

Once you see the node syncing for a couple of blocks, terminate the process (Ctrl+C).

**OR,** Perform [Step 3.1 Run Everything](https://docs.cronos-pos.org/for-node-hosts/getting-started/mainnet_validator#step-3-1.-run-everything), terminate the terminal once `chainmaind` is able to sync for couple of blocks.

### Step 4: Extract Snapshot Data

After successfully initializing Chain-maind, you'll find the `.chain-maind` folder in your user directory.

1. Move the snapshot `lz4` file to the Chain-maind directory:

```bash
mv cronos-pos-pruned-18968897-18968907.tar.lz4 ~/.chain-maind/
```

2. Navigate to the Chain-maind directory:

```bash
cd ~/.chain-maind
```

3. Extract the snapshot data:

```bash
lz4 -d cronos-pos-pruned-18968897-18968907.tar.lz4 | tar -xv
```

> **Important:** All extracted files should be placed in `~/.chain-maind/data/`

### Step 5: Start Your Synced Node

With the snapshot data extracted, `chain-maind` should now be updated to the latest height from the snapshot file.

Start your node:

```bash
./chain-maind start
```

### Conclusion

You are now running a synced Cronos POS mainnet node using the Public Node Snapshot. Your node will continue to sync from the snapshot height to the current network height, which should be much faster than syncing from genesis.
