# The "DRACO II" upgrade guide (v2.\* to v3.3.2) :

For a full overview of the latest upgrades, please refer to ["Notes on network upgrades"](https://crypto.org/docs/getting-started/mainnet.html#step-0-notes-on-network-upgrades).

{% hint style="warning" %}
**Warning**:

The chain-maind `v3.3.2` - DRACO II upgrade is proposed to be scheduled at the block height of `3,526,800` ( _Estimated time \~Tuesday, 7 December 2021 02:00:00 GMT_, but this depends on the actual time taken when the blocks are being processed).

**DO NOT UPGRADE to the binary `v3.3.2` before that suggested upgrade schedule and came across the error message as described in** [**Step 0**](upgrade\_guide\_draco\_2.md#step-0-don-t-panic)**.**&#x20;
{% endhint %}



## Step 0 - Don't panic

At the point of the proposed upgrade, the user will see the error message on the `chain-maind` similar to the below:

`ERR UPGRADE "v3.0.0" NEEDED at time: xxxxxxxxxxxxx: {"binaries":{"darwin/amd64":"https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main_3.3.2_Darwin_x86_64.tar.gz?checksum=sha256:082539ce9e9f2e382a70003a8504c9aa95f16fee55d104d3d94090b01e36ee63","darwin/arm64":"https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main_3.3.2_Darwin_arm64.tar.gz?checksum=sha256:3ebdeeb65400332e6c892a52cc6241ed6f4a43949114cf19a9648f56a212f471","linux/amd64":"https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main_3.3.2_Linux_x86_64.tar.gz?checksum=sha256:043793233827cb948714d8d9f0196a4d574195c90d7e8ac85c06220fdec39df2","linux/arm64":"https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main_3.3.2_Linux_arm64.tar.gz?checksum=sha256:728940e53a9706d286480f55d6f033f8345b82e3788710490aac8cd79b44bdcd","windows/amd64":"https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main_3.3.2_Windows_x86_64.zip?checksum=sha256:1865dad6ff10b0830f2ef2230bce6f9b4aadbf09bc4b371175552d101201b030"}}`

**Don't panic** - The Chain will be paused to allow the majority of validators to upgrade. Validators and full node hosts will have to upgrade your Cronos PoS Chain nodes to the latest release binary.

### Backups

Before the upgrade, validators are encouraged to take a complete data snapshot. Snapshotting depends heavily on infrastructure, but generally, we can do this by backing up the `.chain-maind` directory.

It is critically important for validator operators to back-up the `.chain-maind/data/priv_validator_state.json` file after stopping the `chain-maind` process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing if the upgrade fails and the previous chain needs to be restarted.

## Step 1 - Get the `v3.3.2` binary

To simplify the following step, we will be using **Linux** for illustration. Binary for [Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main\_3.3.2\_Darwin\_x86\_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main\_3.3.2\_Windows\_x86\_64.zip) are also available.

*   Terminate the `chain-maind`; afterward, download the `3.3.2` released binaries from GitHub:

    ```bash
    $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.2/chain-main_3.3.2_Linux_x86_64.tar.gz
    $ tar -zxvf chain-main_3.3.2_Linux_x86_64.tar.gz
    ```

    \


    {% hint style="info" %}
    **Remarks**: If you have stated `chain-maind` with _systemd_ service, kindly stop it by

    ```bash
    $ sudo systemctl stop chain-maind
    ```

    And replace the binary in the location where the `ExecStart` states in Systemd Unit file.
    {% endhint %}

### Step 1.1 - Verify the version

You can verify the installation by checking the version of `chain-maind`, the latest version is `3.3.2`.

```bash
# check the version of chain-maind
$ ./chain-maind version
3.3.2
```

## Step 2. - Run everything

We are ready to start the node join the network again with the new binary:

* Start `chain-maind`, e.g.:

```bash
  $ ./chain-maind start
```

{% hint style="info" %}
**Remarks:**\
Once the `chain-maind` is started we would see the message

```
applying upgrade "v3.0.0" at height: 3526800"
```

and there will be an iteration over the previous blockchain data. This process will take a while (could be up to hours) which is depending on the size of the database and the hardware specs.&#x20;
{% endhint %}

Afterwards, sit back and wait for the syncing process. You can query the node syncing status by

```bash
$ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
```

If the above command returns `false`, it means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.

At this step, you've successfully performed the new binary upgrade!
