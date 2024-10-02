# Quicksync

Syncing Cronos POS Chain could be a time-consuming process, our team has partnered with Chainlayer to provide the “QuickSync” service to make the process more efficient for our users.

Users can visit [Chainlayer QuickSync page](https://quicksync.io/networks/crypto.html) and download the snapshots for Cronos POS Chain with different pruning settings (_currently only levelDB downloads are available_). You may refer to the following guide to implement QuickSync.

## Step 1. QuickSync Download

To start with QuickSync, you need to run `brew install lz4` to install lz4 in a new terminal. Then download the file with preferred pruning settings directly from https://quicksync.io/networks/crypto.html.

#### There are three versions:

**Crypto-org-chain-mainnet-1-pruned**

* Pruned snapshot is the quickest way to get a node running. If you only want to give it a shot, use it for a validator or sentry node, the pruned snapshot will be a good choice. Pruned snapshots have transaction index disabled to save disk/download size, which also will make API queries not work backward in time. If you still want to use a pruned snapshot to start an API node, then you can enable transaction index on your end to start indexing blocks from when you startup your node. But you will not be able to query anything earlier than that.

**Crypto-org-chain-mainnet-1-default**

* Default is a good middle choice between everything. It will work in most use cases, validator, sentry node, API nodes. It has tx index enabled, so you can query block back in time. The only thing that default nodes do not have is the full history from the start of the chain or chain upgrade.

**Crypto-org-chain-mainnet-1-archive**

* For the users who would like to query the old block, you may pick the archive one for complete blockchain data. The archive node will have all the blocks from the chain start or chain upgrade with full indexing. So this is a good option for API nodes if you need to have access to the whole chain history. Archives grow fast in size and might be more sluggish to run, so if you need something simpler default or a pruned kickstarted API node might solve most of the needs out there.

## Step 2. QuickSync Setup

In the following steps, we will take the version `crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4` as an example.

(Optional) you can [download an addressbook](https://quicksync.io/addrbook.ccomchain.json) to get connected to peers faster. After downloading it, place the new `addrbook.json` under `.chain-maind/config` folder and restart your node to take effect.

Now add the `crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4` inside `.chain-maind`.

Then perform the following steps:

* Change the path under `.chain-maind` with `cd .chain-maind`
* Decompress with `lz4` first then decompress with `tar` by `lz4 -d /Users/<username>/.chain-maind/crypto-org-chain-mainnet-1-pruned.20220323.2110.tar.lz4 | tar -xv`.

{% hint style="info" %}
**Example:**  \
Decompress the QuickSync pack with `lz4`

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
{% endhint %}

The original data folder under `.chain-maind` is overwritten with the step above. It takes around a few mins to decompress the pruned version of 47GB(at the date of writing).

## Step 3. Sync with QuickSync

Now direct back to the original directory and re-sync the chain again with `./chain-maind start`. It starts the node and syncs the blockchain data from the height of `5055406`.

{% hint style="info" %}
**Example:**  \
Restart `chain-maind start` with QuickSync

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
{% endhint %}
