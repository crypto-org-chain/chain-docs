# The "V4" upgrade guide (`v3.*` to `v4.2.2`) : 

For a full overview of the latest upgrades, please refer to ["Notes on network upgrades"](https://crypto.org/docs/getting-started/mainnet.html#step-0-notes-on-network-upgrades)

:::warning
- The chain-maind `v4.2.2` - "V4" upgrade is proposed to be scheduled at the block height of `10,073,800` ( *Estimated time ~WED, 22 Feb 2023 02:00:00 GMT*, but this depends on the actual time taken when the blocks is being processed);
- Actual timing depends on the progress of block production, the estimated time of this block can be found [here](https://www.mintscan.io/crypto-org/blocks/10073800).

**DO NOT UPGRADE to the binary `v4.2.2` before that suggested upgrade schedule and come across with the error message as described in [Step 0](#step-0-don-t-panic).**
:::


## Step 0 - Don't panic 
At the point of proposed upgrade, user will see the error message on the `chain-maind` similar to the below: 

`ERR UPGRADE "v4.2.0" NEEDED at time: xxxxxxxxxxxxx: {"binaries":{"darwin/amd64":.......`

**Don't panic** - The Chain will be paused to allow the majority of validators to upgrade. Validators and full node hosts will have to upgrade your Crypto.org Chain nodes to the latest release binary.


### Backups
Before the upgrade, validators are encouraged to take a complete data snapshot. Snapshotting depends heavily on infrastructure, but generally, we can do this by backing up the `.chain-maind` directory.

It is critically important for validator operators to back-up the `.chain-maind/data/priv_validator_state.json` file after stopping the `chain-maind` process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing if the upgrade fails and the previous chain needs to be restarted.



## Step 1 - Get the `v4.2.2` binary

To simplify the following step, we will be using **Linux** for illustration. Binary for
[Mac(arm64)](https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_arm64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Windows_x86_64.zip) are also available. 

- Terminate the `chain-maind`; afterwards, download the `4.2.2` released binaries from github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_4.2.2_Linux_x86_64.tar.gz
  ```


    ::: tip Remarks: 
    If you have stated `chain-maind` with *systemd* service, kindly stop it by 

    ```bash 
    $ sudo systemctl stop chain-maind
    ```
    And replace the binary in the location where the `ExecStart` states in Systemd Unit file.
    
    :::


### Step 1.1 -  Verify the version

You can verify the installation by checking the version of `chain-maind`, the latest version is `4.2.2`.

  ```bash 
  # check the version of chain-maind
  $ ./chain-maind version
  4.2.2
  ```

### Step 1.2 -  Insert new configuration

Several new fields under `~/.chain-maind/config/app.toml` have been introduced, kindly add the following fields to the `app.toml`:
- Under `Base Configuration`, please the aligned the`app-db-backend` with the `db-backend` field under `~/.chain-maind/config/config.toml`, for example, if it is `goleveldb` (default), then we can add:
```bash
# AppDBBackend defines the database backend type to use for the application and snapshots DBs.
# An empty string indicates that a fallback will be used.
# First fallback is the deprecated compile-time types.DBBackend value.
# Second fallback (if the types.DBBackend also isn't set), is the db-backend value set in Tendermint's config.toml.
app-db-backend = "goleveldb"
```
 


- Under `Rosetta Configuration`:
```bash
# EnableDefaultSuggestedFee defines if the server should suggest fee by default.
# If 'construction/medata' is called without gas limit and gas price,
# suggested fee based on gas-to-suggest and denom-to-suggest will be given.
enable-fee-suggestion = false

# GasToSuggest defines gas limit when calculating the fee
gas-to-suggest = 200000

# DenomToSuggest defines the defult denom for fee suggestion.
# Price must be in minimum-gas-prices.
denom-to-suggest = "basecro"
```
- Under `gRPC Configuration`:
```bash
# MaxRecvMsgSize defines the max message size in bytes the server can receive.
# The default value is 10MB.
max-recv-msg-size = "10485760"

# MaxSendMsgSize defines the max message size in bytes the server can send.
# The default value is math.MaxInt32.
max-send-msg-size = "2147483647"
```

::: tip Remarks:
If you are upgrading from `v3.3.5` or earlier, kindly also add  the following fields to the `app.toml` under `Base Configuration`:

```
index_events = []
iavl-cache-size = 781250
iavl-disable-fastnode = true
```

For validators or production critical services, we recommend setting the `iavl-disable-fastnode` as `true` to skip the optional "IAVL migration" and avoid downtime: 
- Setting it as `true` would skip the the optional "IAVL migration";
- Setting it as `false` would run the "IAVL migration" that would take a couple hours with the log `INF starting ABCI with Tendermint` for a while and incur downtime.
:::


## Step 2. - Run everything

We are ready to start the node join the network again with the new binary:

- Start `chain-maind`, e.g.:

```bash
  $ ./chain-maind start
```


Afterwards, sit back and wait for the syncing process. You can query the node syncing status by
  ```bash
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
  ```
If the above command returns `false`, it means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.


At this step, you've successfully performed the new binary upgrade!