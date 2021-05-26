# The "Canis Major" upgrade guide (`v1.*` to `v2.0.1`) : 

:::warning
The chain-maind `v2.0.1` - Canis Major upgrade is proposed to be scheduled on 1 Jun 2021, 23:59:00 UTC, 2021. 

**DO NOT UPGRADE to the binary `v2.0.1` before that suggested upgrade schedule and come across with the error message as described in [Step 0](#step-0-don-t-panic).**
:::

For those who want to enjoy the automatic upgrade managed by [cosmovisor](https://docs.cosmos.network/master/run-node/cosmovisor.html), please follow this [cosmovisor guide](./cosmovisor.md) for the coming "Canis Major" network upgrade. Otherwise, please continue below manual upgrade steps.

## Step 0 - Don't panic 
At the point of proposed upgrade, user will see the following error message on the `chain-maind`: 

`ERR UPGRADE "v2.0.0" NEEDED at time: 2021-06-01T23:59:00Z: {"binaries":{"darwin/amd64":"https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Darwin_x86_64.tar.gz?checksum=sha256:a4d51bf98350c7ecbb5e6bab192c9cac2f4059754e5507d2a1970a8a5488c74a","darwin/arm64":"https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Darwin_arm64.tar.gz?checksum=sha256:eb6274724eab1957a7b708a5a0887de9f213d053841fb58041f697e13728a454","linux/amd64":"https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Linux_x86_64.tar.gz?checksum=sha256:5e9e9f703cb85c72573086e384e187e752463b2ed0ccd612094a1f29a13f0158","linux/arm64":"https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Linux_arm64.tar.gz?checksum=sha256:345c7eacfc768df355c3b3ecadc9cc39e3c1656c9c0c4d465b938834fa66ff03","windows/amd64":"https://github.com/crypto-org-chain/chain-main/releases/download/v2.0.1/chain-main_2.0.1_Windows_x86_64.zip?checksum=sha256:07b06382397df49774788ec06a5c9d0bf7e28ddb7b1dd91abdb35174bce49a31"}}`

Don't panic - The Chain will be paused to allow the majority of validators to upgrade. Validators and full node hosts will have to upgrade your Crypto.org Chain nodes to the latest release binary.

## Step 1 - Get the `v2.0.1` binary

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
### Step 1.1 -  Verify the version

You can verify the installation by checking the version of `chain-maind`, the latest version is `2.0.1`.

  ```bash 
  # check the version of chain-maind
  $ ./chain-maind version
  2.0.1
  ```

## Step 2. - Run everything

We are ready to start the node join the network again with the new binary:

- Start `chain-maind`, e.g.:

```bash
  $ ./chain-maind start
```

Sit back and wait for the syncing process. You can query the node syncing status by
  ```bash
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
  ```
  If the above command returns `false`, it means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.




# `chain-maind` Binary upgrade guide (`v1.1.0`/`v1.2.0` to `v1.2.1`):

This is a guide for existing validator or full node to upgrade from `v1.1.0`/`v1.2.0` to `v1.2.1`:



## Step 1 - Get the `v1.2.1` binary

To simplify the following step, we will be using **Linux** for illustration. Binary for
[Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v1.2.1/chain-main_1.2.1_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v1.2.1/chain-main_1.2.1_Windows_x86_64.zip) are also available. 

- Terminate the `chain-maind`; afterwards, download the `v1.2.1` released binaries from github:

  ```bash
  $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v1.2.1/chain-main_1.2.1_Linux_x86_64.tar.gz
  $ tar -zxvf chain-main_1.2.1_Linux_x86_64.tar.gz
  ```


    ::: tip Remarks: 
    If you have stated `chain-maind` with *systemd* service, kindly stop it by 

    ```bash 
    $ sudo systemctl stop chain-maind
    ```

    :::



- For [homebrew](https://github.com/crypto-org-chain/homebrew-chain-maind#chain-maind-homebrew-tap) users, simply run 

    ```bash 
    $ brew upgrade chain-maind
    ```

### Step 1.1 -  Verify the version

You can verify the installation by checking the version of `chain-maind`, the current version is `1.2.1`.

  ```bash 
  # check the version of chain-maind
  $ ./chain-maind version
  1.2.1
  ```

## Step 2. - Run everything

We are ready to start the node and sync the blockchain data:

- Start `chain-maind`, e.g.:

```bash
  $ ./chain-maind start
```

Sit back and wait for the syncing process. You can query the node syncing status by
  ```bash
  $ ./chain-maind status 2>&1 | jq '.SyncInfo.catching_up'
  ```
  If the above command returns `false`, It means that your node **is synced**; otherwise, it returns `true` and implies your node is still catching up.
