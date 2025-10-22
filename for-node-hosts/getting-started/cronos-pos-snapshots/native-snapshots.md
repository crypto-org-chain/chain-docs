---
description: Fast, reliable blockchain snapshots for Cronos networks
---

# Native Snapshots

### Introduction

Setting up a new Cronos node traditionally requires synchronizing with the entire blockchain database from the genesis block—a process that can take days or even weeks depending on your hardware and network conditions. To address this challenge and accelerate node deployment, the Cronos team maintains pre-synchronized blockchain snapshots that dramatically reduce setup time.

### What Are Snapshots?

Blockchain snapshots are compressed archives containing the complete blockchain state at a specific block height. Instead of downloading and verifying every transaction since genesis, you can restore your node from a recent snapshot and only sync the remaining blocks.

Cronos POS snapshots are available for:

* **Cronos POS Mainnet** with LevelDB backend in default configuration
* **Default nodes**: Standard configuration containing recent state data for typical node operations

### Benefits

Using Cronos snapshots provides several key advantages:

* **Faster deployment**: Reduce initial sync time from days to hours
* **Lower bandwidth usage**: Download a single compressed file instead of syncing block-by-block
* **Quick network participation**: Get your node operational and contributing to the network rapidly
* **Reduced resource consumption**: Less CPU and disk I/O during the initial setup phase

### Getting Started

All Cronos POS snapshots can be accessed at: [**https://snapshot.cronos.org/**](https://snapshot.cronos.org/)

### Installation Guide  <a href="#step-1-quicksync-download" id="step-1-quicksync-download"></a>

Before using snapshots, you'll need to install the Cronos binary. Follow these steps to get started:

1. Create a new directory and navigate to it:

```
mkdir cronos-pos-node
cd cronos-pos-node
```

2. Download the latest Cronos Binary release ([Github repo](https://github.com/crypto-org-chain/chain-main/releases/)):

{% code overflow="wrap" %}
```
curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/tag/v6.0.1
```
{% endcode %}

3. Unpack & Install the binary files. This step will create a hidden folder named `.chain-maind` in your root directory.

```
tar -zxvf crypto-org-chain/chain-main/releases/tag/v6.0.1
```

{% hint style="info" %}
**Note:** Pre-requisite: gnu-tar and lz4\
`brew install gnu-tar lz4`
{% endhint %}

4. Verify the installation:

```
# check the version of chain-maind
cd bin
./chain-maind version
6.0.1
```

Once the Cronos binary is installed and verified, you can proceed with downloading and applying the appropriate snapshot for your node configuration.

### Download Cronos POS Snapshot

{% code overflow="wrap" %}
```
wget https://snapshot.cronos.org/cronos-pos/mainnet-snapshot/leveldb/default/crypto-org-chain-mainnet-1_leveldb-default-20250807.tar.lz4
```
{% endcode %}

### Unpack Cronos POS Snapshot

Copy or Move the snapshot into the hidden `.chain-maind` directory in the root. Then unpack the file:

```
mv crypto-org-chain-mainnet-1_leveldb-default-20250807.tar.lz4 ~/.chain.maind
tar -zxvf crypto-org-chain-mainnet-1_leveldb-default-20250807.tar.lz4
```

The original `data`  folder under `.chain-maind` is overwritten. It takes around a few mins to decompress.

### Initialize `chain-maind`

Initialize your Cronos POS node with a unique identifier (moniker):

```
./chain-maind init [moniker] --chain-id crypto-org-chain-mainnet-1
```

The `moniker` serves as your node's display name when it appears on the Cronos POS Chain network. Choose a unique, descriptive name for easy identification. Make sure to replace `[moniker]` with your desired node name without the square brackets.

### Configure `chain-maind`

1. Download and replace the Cronos POS Chain mainnet `genesis.json` :

{% code overflow="wrap" %}
```
curl https://raw.githubusercontent.com/crypto-org-chain/mainnet/main/crypto-org-chain-mainnet-1/genesis.json > ~/.chain-maind/config/genesis.json
```
{% endcode %}

2. Verify sha256sum checksum of the downloaded `genesis.json`. You should see `OK!` if the sha256sum checksum matches.

```
$ if [[ $(sha256sum ~/.chain-maind/config/genesis.json | awk '{print $1}') = "d299dcfee6ae29ca280006eaa065799552b88b978e423f9ec3d8ab531873d882" ]]; then echo "OK"; else echo "MISMATCHED"; fi;
OK!
```

{% hint style="info" %}
**Note**: For Mac environment, `sha256sum` was not installed by default. In this case, you may setup `sha256sum` with this command:

`function sha256sum() { shasum -a 256 "$@" ; } && export -f sha256sum`
{% endhint %}

3. In `~/.chain-maind/config/app.toml`, update minimum gas price to avoid [transaction spamming](https://github.com/cosmos/cosmos-sdk/issues/4527)

{% code overflow="wrap" %}
```
sed -i.bak -E 's#^(minimum-gas-prices[[:space:]]+=[[:space:]]+)""$#\1"0.025basecro"#' ~/.chain-maind/config/app.toml
```
{% endcode %}

{% hint style="info" %}
**Reminder**: The list of the `seed` is subject to change, you can also find the latest seed to connect [here](https://github.com/crypto-org-chain/mainnet#seed-nodes).
{% endhint %}

### Start the Node

Once the `chain-maind` has been configured, the node is ready to start synchronization with the blockchain:

```
./chain-maind start
```
