# Thaler Testnet: Running Nodes (Linux only)

The Crypto.com Chain Testnet has been named as **“Thaler”**.

This is an early tutorial for the developers and brave and patient super-early adopters.

## Pre-requisites

#### Intel® Software Guard Extensions (Intel® SGX)

Because we utilize the technology of `Intel® Software Guard Extensions (Intel® SGX)`
for [payment data confidentiality](../protocol/transaction-privacy.md#motivation), the pre-requisites are a little more strict than the other
chains' setup. A special type of hardware is needed and the reference of [SGX-hardware](https://github.com/ayeks/SGX-hardware)
could help you identify if your current hardware supports `Intel® SGX` or not.

If your development machine does not support SGX, we recommend spinning up a cloud instance listed in [this reference](https://github.com/ayeks/SGX-hardware#cloud-vendors). In this guide, we will walk through the process of setting it up on [Azure Confidential Compute VM](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-azure-compute.acc-virtual-machine-v2?tab=overview).

#### Supported OS

We officially support Linux only. Other platforms may work buy there is no guarantee. We will extend our support to other platforms after we have stablized our current architecture.

## Prepare your machine

To run Crypto.com Chain nodes, you will need a machine with the following minimum requirements:

- Intel SGX supported CPU

::: tip NOTE
You can look for your Intel CPU model on the [Intel Product Specifications website](https://ark.intel.com/content/www/us/en/ark.html#@Processors) and check if it has Intel® Software Guard Extensions (Intel® SGX) support.
:::

- 4GB RAM
- 100GB storage space

::: tip Microsoft Azure
If you are using Microsoft Azure, you will need to create an instance of [Azure Confidential Computing (login required)](https://portal.azure.com/#create/microsoft-azure-compute.acc-virtual-machine-v2acc-virtual-machine-v2) with the above hardware requirement.

You will also need to create an extra disk in the Azure panel and mount it to the created instance. Instructions can be found [here](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/attach-disk-portal).
:::

## Common Setup

### Step 1. Install Intel SGX 2.9 and other pre-requisites

- Make sure your CPU supports SGX, and it is enabled in BIOS. [This GitHub repository](https://github.com/ayeks/SGX-hardware) has more information about supported hardware and cloud vendors.

::: tip NOTE
There is an Ubuntu-based Docker image `cryptocom/chain:latest` on Dockerhub that
has Intel PSW and other dependencies pre-installed
(you still need to have the SGX driver installed on the host and
expose it to the container by running docker with the `--device /dev/isgx` flag).
:::

### Step 1-0. Install Intel SGX 2.9

::: tip Note
If you are running on Azure Confidential Computing machines, you will only need to install the Intel SGX PSW 2.9 and aesmd service.
:::

- You can download the Linux SGX SDK installers from the Intel Open Source [website](https://01.org/intel-softwareguard-extensions/downloads/intel-sgx-linux-2.9.1-release). More details can be found in this [installation guide](https://download.01.org/intel-sgx/sgx-linux/2.9.1/docs/Intel_SGX_Installation_Guide_Linux_2.9.1_Open_Source.pdf).

- Note that some motherboards may have only "software controlled" option where [an extra step is needed for enabling it](https://github.com/intel/linux-sgx/issues/354#issuecomment-447961815).

### Step 1-1. Install aesmd service

After you have installed Intel SGX PSW 2.9 using the [installation guide](https://download.01.org/intel-sgx/sgx-linux/2.9.1/docs/Intel_SGX_Installation_Guide_Linux_2.9.1_Open_Source.pdf) from [step 0-0](#step-0-0-install-intel-sgx-2-9), run the following command to install aesm service:

```bash
$ sudo apt install libsgx-uae-service
```

::: tip Unable to locate package error
If you encountered the error `Unable to locate package` during Intel SGX PSW installation, make sure the command you copy is the same as the PDF content.

In particular, when you install the pre-requisites, hyphens (`-`) may be missing in the copied command, i.e. the correct command is:

```bash
$ sudo apt-get install libssl-dev libcurl4-openssl-dev libprotobuf-dev
```

:::

### Step 1-2. Install ZeroMQ

You may also need to install libzmq (e.g. [libzmq3-dev](https://packages.ubuntu.com/xenial/libzmq3-dev) package in Ubuntu 18.04).

```bash
$ sudo apt install libzmq3-dev
```

### Step 2. Get Tendermint and Chain v0.5.3 released binaries

Download the latest version of [Tendermint 0.33.\*](https://github.com/tendermint/tendermint/releases).
Chain v0.5.\* can be [downloaded from GitHub](https://github.com/crypto-com/chain/releases).

::: warning CAUTION
Crypto.com Chain v0.5 is not backwards compatible with v0.3 nor v0.4 released earlier. So, if you were running a node with the old
version of Crypto.com Chain, you will have to delete all the associated data.

Also, please note the [released binary changes](https://github.com/crypto-com/chain/releases/tag/v0.5.3).
:::

- To install Tendermint v0.33.6 on Linux based machine:

  ```bash
  $ sudo apt update
  $ sudo apt install -y unzip
  $ curl -LOJ https://github.com/tendermint/tendermint/releases/download/v0.33.6/tendermint_v0.33.6_linux_amd64.zip
  $ unzip tendermint_v0.33.6_linux_amd64.zip
  ```

  Note: Replace `https://github.com/tendermint/tendermint/releases/download/v0.33.6/tendermint_v0.33.6_linux_amd64.zip` to your desired version GitHub release link. Make sure you are downloading 0.33.\* but not the other versions.

- To install Chain released binaries (v0.5.3):
  ```bash
  $ curl -LOJ https://github.com/crypto-com/chain/releases/download/v0.5.3/crypto-com-chain-release-0.5.3.tar.gz
  $ tar -zxvf crypto-com-chain-release-0.5.3.tar.gz
  ```

### Step 3. Configure Tendermint

- After placing all binaries on the path. You can initialize Tendermint with:
  ```bash
  $ ./tendermint init
  ```

::: tip NOTE
Depending your Tendermint home setting, the Tendermint configuration will be initialized to that home directory. To simply the following steps, we will use the default Tendermint home directory `~/.tendermint/` for illustration.
:::

- In `~/.tendermint/config/`, download Thaler Testnet `genesis.json` by:

  ```bash
  $ curl https://raw.githubusercontent.com/crypto-com/chain-docs/master/docs/getting-started/assets/genesis_file/v0.5/genesis.json > ~/.tendermint/config/genesis.json
  ```

- verify MD5 checksum of the downloaded `genesis.json`. You should see `OK!` if the MD5 checksum matches.

  ```bash
  $ [ $(md5sum genesis.json | awk '{print $1}') = "1c518490f523153f5a644d47deb1a3c1" ] && echo "OK!" || echo "MISMATCHED"
  OK!
  ```

- For network configuration, in `~/.tendermint/config/config.toml`, you can modify the configurations of `seeds`, `create_empty_blocks_interval` and `index_all_tags` by:

  ```bash
  $ sed -i '/seeds = /c\seeds = "f3806de90c43f5474c6de2b5edefb81b9011f51f@52.186.66.214:26656,29fab3b66ee6d9a46a4ad0cc1b061fbf02024354@13.71.189.105:26656,2ab2acc873250dccc3eb5f6eb5bd003fe5e0caa7@51.145.98.33:26656"' ~/.tendermint/config/config.toml
  ```

  ```bash
  $ sed -i '/create_empty_blocks_interval = /c\create_empty_blocks_interval = "60s"' ~/.tendermint/config/config.toml
  ```

  ```bash
  $ sed -i '/index_all_tags = /c\index_all_tags = true' ~/.tendermint/config/config.toml
  ```

::: tip NOTE
This page only shows the minimal setup.

Depending on what you wish to test on the testnet, e.g. monitoring, you can refer to the [Tendermint documentation](https://docs.tendermint.com/master/tendermint-core/configuration.html) for more details.
:::

### Step 4. Run everything

Before we move forward:

- Make sure `aesmd` service is running by

  ```bash
  ## check whether aesm service is on
  $ ps ax | grep aesm
  ## check whether driver is on
  $ ls /dev/isgx
  ```

  You may potentially start it up manually with `LD_LIBRARY_PATH=/opt/intel/libsgx-enclave-common/aesm /opt/intel/libsgx-enclave-common/aesm/aesm_service`. See also page 11 of the [installation guide](https://download.01.org/intel-sgx/sgx-linux/2.9.1/docs/Intel_SGX_Installation_Guide_Linux_2.9.1_Open_Source.pdf).

- The **[full node](#a-running-a-full-node-to-serve-data-to-wallets-clients)** (exposed for wallets / clients) and the **[council node](#b-running-a-council-node-validator)** (validator) have slightly different steps described in the following sections.

## A. Running a full node (to serve data to wallets / clients)

::: warning CAUTION
This page only shows the minimal setup.

You may want to disable unsafe operations in Tendermint configuration,
restrict the incoming connections RPC connections (e.g. over NGINX or equivalent), want to execute the processes using supervisor or equivalent etc.
:::

### Step 4-A-1. Obtain and set the service provider credentials for development

On the [Intel's developer portal](https://api.portal.trustedservices.intel.com/EPID-attestation), you can sign up for an _Intel® Developer Zone_ account; under _Development Access_, you can obtain credentials for the non-production _DEV Intel® Software Guard Extensions Attestation Service_ and choose _"unlinkable quotes"_.

Once you obtained the credentials in the portal, you can check the "_Subscription details_" in your profile page, then set the following environment variables:

- `SPID`: Set it to the "Service Provider ID (SPID)" value from the portal;
- `IAS_API_KEY`: Set it to the primary or secondary API key from the portal.

### Step 4-A-2. Run everything

- Start the tx-query enclave app (in `tx-query-HW-debug/`), e.g.:

  ```bash
  $ RUST_LOG=info ./tx-query-app 0.0.0.0:3322 ipc://$HOME/enclave.socket
  ```

- Start chain-abci, e.g.:

  ```bash
  $ RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash F62DDB49D7EB8ED0883C735A0FB7DE7F2A3FA322FCD2AA832F452A62B38607D5 --enclave_server ipc://$HOME/enclave.socket --tx_query <EXTERNAL_IP/HOSTNAME>:3322
  ```

- Finally, start Tendermint:

  ```bash
  $ ./tendermint node
  ```

## B. Running a council node (validator)

::: warning CAUTION
This page only shows the minimal setup.

You may want to run full nodes (see above)
as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html) and [local notes on production deployment](notes-on-production-deployment.md)), restrict your validator connections to only connect to your full nodes,
test secure storage of validator keys etc.
:::

### Step 4-B. Pre-requisites

In the following example, we will use the client-cli command-line tool to perform the address creation and join as a council node. To follow the steps, you need to first set the required environment variables:

```bash
export CRYPTO_CHAIN_ID=testnet-thaler-crypto-com-chain-42
export CRYPTO_CLIENT_TENDERMINT=<YOUR_FULL_NODE_WS_ADDRESS>
```

::: tip Note for environment variables setting:
If you would like to connect to a local full node, you can put `<YOUR_FULL_NODE_WS_ADDRESS>=ws://localhost:26657/websocket`, or alternatively, you may use the external full node by setting
`<YOUR_FULL_NODE_WS_ADDRESS>=ws://13.90.34.32:26657/websocket`.
:::

### Step 4-B-1 (Optional) restoring a wallet

If you have participated in the v0.3.1 testnet and have backed up your seed phrase, you can restore it with the [client-cli](../wallets/client-cli.md#wallet-restore-restore-an-hd-wallet), for example:

```bash
$ ./client-cli wallet restore --name <WALLET_NAME>
```

You can then create a staking address with:

```
$ ./client-cli address new --name <WALLET_NAME> --type Staking
```

If the created address matches one of the ones listed in the initial _genesis.json_ distribution, you can skip to [Step 4-B-2](#step-4-b-2-create-a-new-wallet-with-staking-address).

### Step 4-B-2. Create a new wallet with staking address

::: tip Note
If you have restored your wallet and created a staking address in step 3-b-0, you can skip this step.
:::

Run the followings to create a new [HD-wallet](../wallets/client-cli.html#wallet-new-create-a-new-wallet) and [staking address](../wallets/client-cli.html#address-new-create-a-new-address):

```bash
$ ./client-cli wallet new --name <WALLET_NAME> --type hd
$ ./client-cli address new --name <WALLET_NAME> --type Staking
```

You should obtain a hexadecimal-encoded address, e.g. `0xa861a0869c02ab8b74c7cb4f450bcbeb1e472b9a`

### Step 4-B-3. Obtain the minimal required stake

Unless you have obtained the CRO testnet token before, simply send a message on [Gitter](https://gitter.im/crypto-com/community),
stating who you are and your staking address (@devashishdxt or @lezzokafka would typically reply within a day).

Afterwards, you can sync your wallet by:

```bash
$ ./client-cli sync --name <WALLET_NAME>
```

and check the state of your staking address:

```bash
$ ./client-cli state --name <WALLET_NAME> --address <STAKING_ADDRESS>
```

### Step 4-B-4. Create a validator key pair

- In a development mode, the full key pair is located in the `~/.tendertmint/config/priv_validator_key.json` ;

- If the file does not exist, you can initialize the tendermint root directory by running `tendermint init`.
  The public key should be base64-encoded, e.g. `R9/ktG1UifLZ6nMHNA/UZUaDiLAPWt+m9I4aujcAz44=`.

::: tip NOTE
If you plan to test a production setting with the Tendermint Key Management System (KMS) tool,
please see [production deployment notes](notes-on-production-deployment.md) on how it can be converted at the current (0.7) version.
:::

### Step 4-B-5. Run everything

- Start chain-abci, e.g.:

  ```bash
  $ RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash F62DDB49D7EB8ED0883C735A0FB7DE7F2A3FA322FCD2AA832F452A62B38607D5
  ```

- Finally, start Tendermint:

  ```bash
  $ ./tendermint node
  ```

### Step 4-B-6. Send a council node join request transaction

As in Step 3-b-1, this can be done, for example, with `client-cli` with the required environment variables.

```bash
$ ./client-cli transaction new --name <WALLET_NAME> --type node-join
```

You will be required to insert the following:

- the staking address that holds your bonded funds;
- a moniker(name) for your validator node; and
- a base64 encoded tendermint [validator public key](#step-3-b-3-create-a-validator-key-pair).

Once the node-join transaction was successfully broadcasted, you should be able to see your Council node one the [testnet explorer](https://chain.crypto.com/explorer/council-nodes).

## Thaler testnet block explorer and CRO faucet

- You are welcome to utilize the [Crypto.com Chain Explorer](https://chain.crypto.com/explorer) to search and get more information on blocks and transactions on **Thaler** testnet network.

- To interact with the blockchain, simply use the [CRO faucet](https://chain.crypto.com/faucet) to obtain test CRO tokens for performing transactions on the **Thaler** testnet.
  - Note that you will need to create a [wallet](../wallets/client-cli.md#wallet-new-create-a-new-wallet), a [transfer address](../wallets/client-cli.md#address-new-create-a-new-address) and obtain the [viewkey](../wallets/client-cli.md#view-key-obtain-the-view-key) before using the faucet.
