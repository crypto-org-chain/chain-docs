# Crypto.org Mainnet: Running a Full Node


This is a detailed documentation for setting up a **Full Node** on Crypto.org mainnet.

## Step 0 : Notes on  "Canis Major" Network upgrade 

Before we start, please note that there was a "*Canis Major*" network upgrade at the block height `922,363`, which requires the node operator to update their Crypto.org Chain Mainnet binary `chain-maind` from `v1.*.*` to `v2.0.1`. 

For the host who would like to build a **Full Node** with complete blockchain data from scratch, one would need to:
1. Start the node with the older binary version `v1.2.1`; 
1. Sync-up with the blockchain until it reaches the target upgrade block height `922,363`;
1. Update the binary to `v2.0.1` and start the node again.

All of these steps will be covered in this guide.   


## Pre-requisites
### Supported OS

We officially support macOS, Windows and Linux only. Other platforms may work, but there is no guarantee. We will extend our support to other platforms after we have stabilized our current architecture.

### Prepare your machine

- For Crypto.org Chain mainnet, you will need a machine with the following minimum requirements:

  - 4-core, x86_64 architecture processor;
  - 16 GB RAM;
  - 1 TB of storage space.

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
LimitNOFILE=4096

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


### Step 3-2. Upgrade the `chain-maind` binary to `v2.0.1`

At the upgrade height of `922,363`, users will see the following error message on the `chain-maind`: 

```bash
`ERR UPGRADE "v2.0.0" NEEDED at time: 2021-06-01T23:59:00Z:...`
```


#### Step 3-2-1 - Get the `v2.0.1` binary

To simplify the following step, we will be using **Linux** for illustration. Binary for
[Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Windows_x86_64.zip) are also available. 

- Terminate the `chain-maind`; afterwards, download the `v2.0.1` released binaries from github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_2.0.1_Linux_x86_64.tar.gz
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
  2.0.1
  ```

#### Step 3-2-3 - Restart `chain-maind` with version `v2.0.1`

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
    curl -s https://mainnet.crypto.org:26657/commit | jq "{height: .result.signed_header.header.height}"
    ```


and you can check your node's progress (in terms of block height) by:

    ```bash
    $ ./chain-maind status 2>&1 | jq '.SyncInfo.latest_block_height'
    ```

## Getting ready - "DRACO II" second network upgrade 

At last step, you've successfully performed the **"Canis Major"** binary upgrade! Allow sometime for the node to catch up, meanwhile, you can get ready for  **"DRACO II,"** the second network upgrade  ( from `v2.*` to `v3.3.2` at block height `3,526,800` ) by following this [guide](./upgrade_guide_draco_2.md).
