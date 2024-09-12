# Public Node Sync

## Introduction

This guide provides step-by-step instructions to perform a faster sync for Chain-maind using Public Node Sync snapshots. Please note that the type of snapshot provided is pruned. &#x20;

## Step 1: Download Public Node Snapshot

Users can visit [Public Node Page](https://www.publicnode.com/snapshots#cronos) and download the snapshots for Cronos POS Chain. Make sure to select “Cronos POS Chain” and download the `lz4` file.

## Step 2: Extract Public Node Snapshot

To start with Public Node Sync, run `brew install lz4` in a new terminal.&#x20;

## Step 3: Chain-maind Setup

Download the latest version of Chain-maind binary from [Cronos POS Chain Github](https://github.com/crypto-org-chain/chain-main/releases/latest) based on your preferred operating system.

Extract the downloaded file (`chain-main_4.2.9_Darwin_arm64.tar.gz` is used as an example). After you download and unzip the `chain-maind` to the location you desire. In terminal, change directory to the `bin` folder, where `chain-maind` is located.&#x20;

Follow the step from [Step 2-1 Initialize and Step 2-2 Configure Chain-maind](https://docs.cronos-pos.org/for-node-hosts/getting-started/mainnet#step-2-1.-initialize-chain-maind) to initialize and setup `chain-maind`. \
\
The list of the seed is subject to change, you can also find the latest seed to connect [here](https://github.com/crypto-org-chain/mainnet#seed-nodes). Make sure edit the `config.toml` under `/Users/<username>/.chain-maind/config/config.toml`.&#x20;

Perform [Step 3.1 Run Everything](https://docs.cronos-pos.org/for-node-hosts/getting-started/mainnet\_validator#step-3-1.-run-everything), terminate the terminal once `chainmaind` is able to sync for couple of blocks.

## Step 4: Extract Data from the Public Node Sync Snapshot

After you successfully start `chain-maind`, you should find a new folder named `.chain-maind` under `/Users/<username>.` Now add the `cronos-pos-pruned-18968897-18968907.tar.lz4`  inside `.chain-maind`. \
Change the path under `.chain-maind`and decompress with `lz4` and `tar` by:

```bash
lz4 -d /Users/<username>/.chain-maind/ cronos-pos-pruned-18968897-18968907.tar.lz4.tar.lz4 | tar -xv
```

{% hint style="info" %}
Note

All of the above files should be extracted to `/Users/.chain-maind/data`
{% endhint %}

## Step 5: Run `chain-maind`&#x20;

Now your `chain-maind` should be updated to the latest height as the Public Node Sync file, you can run the node now with `./chain-maind start`.&#x20;

That's it! You are now running a synced node on Cronos POS mainnet.&#x20;
