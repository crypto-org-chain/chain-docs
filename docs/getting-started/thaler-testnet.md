# Thaler Testnet: Running Nodes (Linux only)

The Crypto.com Chain Testnet has been named as **“Thaler”**.

This is an early tutorial for the developers and brave and patient super-early adopters.

## Common Setup

### Step 0. Install Intel SGX SDK 2.9 and other pre-requisites

- Make sure your CPU supports SGX, and it is enabled in BIOS. [This GitHub repository](https://github.com/ayeks/SGX-hardware) has more information about supported hardware and cloud vendors.

- You can download the Linux SGX SDK installers from the Intel Open Source [website](https://01.org/intel-softwareguard-extensions/downloads/intel-sgx-linux-2.9.1-release). More details can be found in this [installation guide](https://download.01.org/intel-sgx/sgx-linux/2.9.1/docs/Intel_SGX_Installation_Guide_Linux_2.9.1_Open_Source.pdf).

- Note that some motherboards may have only "software controlled" option where [an extra step is needed for enabling it](https://github.com/intel/linux-sgx/issues/354#issuecomment-447961815).

- You may also need to install libzmq (e.g. [libzmq3-dev](https://packages.ubuntu.com/xenial/libzmq3-dev) package in Ubuntu 18.04).

::: tip NOTE
There is an Ubuntu-based Docker image `cryptocom/chain:latest` on Dockerhub that
has Intel PSW and other dependencies pre-installed
(you still need to have the SGX driver installed on the host and
expose it to the container by running docker with the `--device /dev/isgx` flag).
:::

### Step 1. Get Tendermint and Chain v0.5.2 released binaries

Download the latest version of [Tendermint 0.33.\*](https://docs.tendermint.com/master/introduction/install.html#from-binary).
Chain v0.5.2 can be [downloaded from GitHub](https://github.com/crypto-com/chain/releases/download/v0.5.2/crypto-com-chain-release-0.5.2.tar.gz).

::: warning CAUTION
Crypto.com Chain v0.5 is not backwards compatible with v0.3 nor v0.4 released earlier. So, if you were running a node with the old
version of Crypto.com Chain, you will have to delete all the associated data.

Also, please note the [released binary changes](https://github.com/crypto-com/chain/releases/tag/v0.5.2).
:::

### Step 2. Configure Tendermint

- After placing all binaries on the path. You can initialize Tendermint with `tendermint init`.
  In `.tendermint/config/`, change the content of `genesis.json` to:

```json
{
  "app_hash": "F62DDB49D7EB8ED0883C735A0FB7DE7F2A3FA322FCD2AA832F452A62B38607D5",
  "app_state": {
    "council_nodes": {
      "0x6dbd5b8fe0dad494465aa7574defba711c184102": [
        "eastus_validator_1",
        "security@crypto.com",
        {
          "type": "tendermint/PubKeyEd25519",
          "value": "/SvfTeO4Du4oR/VYTjm7IgObc14zzddEAyFb4nU8E3Q="
        },
        {
          "cert": "ABCD"
        }
      ],
      "0x6fc1e3124a7ed07f3710378b68f7046c7300179d": [
        "canadacentral_validator_1",
        "security@crypto.com",
        {
          "type": "tendermint/PubKeyEd25519",
          "value": "QMegiWt9+5K1b1ZVd7zOJZxhTnbAtWzvGhViiElAlaw="
        },
        {
          "cert": "ABCD"
        }
      ],
      "0xb8c6886da09e12db8aebfc8108c67ce2ba086ac6": [
        "uksouth_validator_1",
        "security@crypto.com",
        {
          "type": "tendermint/PubKeyEd25519",
          "value": "tDLheZJwsA8oYEwarR6/X+zAmNKMLHTVkh/fvcLqcwA="
        },
        {
          "cert": "ABCD"
        }
      ]
    },
    "distribution": {
      "0x4ae85b35597fcb61c6c47b1fe0bdd7eed8421cdd": [
        "Bonded",
        "6000000000000000"
      ],
      "0x4b75f275dde0a8c8e70fb84243adc97a3afb78f2": [
        "UnbondedFromGenesis",
        "7946000000000000000"
      ],
      "0x4fd8162521f2e628adced7c1baa39384a08b4a3d": [
        "Bonded",
        "6000000000000000"
      ],
      "0x6c2be7846219eab3086a66f873558b73d8f4a0d4": [
        "Bonded",
        "6000000000000000"
      ],
      "0x6dbd5b8fe0dad494465aa7574defba711c184102": [
        "Bonded",
        "6000000000000000"
      ],
      "0x6fc1e3124a7ed07f3710378b68f7046c7300179d": [
        "Bonded",
        "6000000000000000"
      ],
      "0x9baa6de71cbc6274275eece4b1be15f545897f37": [
        "Bonded",
        "6000000000000000"
      ],
      "0xa9528abb92709370600d2cef41f1677374278337": [
        "Bonded",
        "6000000000000000"
      ],
      "0xb328a39002ede64c33bb60f1dc43f5df9eb47043": [
        "Bonded",
        "6000000000000000"
      ],
      "0xb8c6886da09e12db8aebfc8108c67ce2ba086ac6": [
        "Bonded",
        "6000000000000000"
      ]
    },
    "network_params": {
      "initial_fee_policy": {
        "coefficient": 1250,
        "constant": 1100
      },
      "jailing_config": {
        "block_signing_window": 720,
        "missed_block_threshold": 360
      },
      "max_validators": 50,
      "required_council_node_stake": "5000000000000000",
      "rewards_config": {
        "monetary_expansion_cap": "2000000000000000000",
        "monetary_expansion_decay": 999860,
        "monetary_expansion_r0": 350,
        "monetary_expansion_tau": 999999999999999999,
        "reward_period_seconds": 86400
      },
      "slashing_config": {
        "byzantine_slash_percent": "0.200",
        "liveness_slash_percent": "0.100"
      },
      "unbonding_period": 5400
    }
  },
  "chain_id": "testnet-thaler-crypto-com-chain-42",
  "consensus_params": {
    "block": {
      "max_bytes": "22020096",
      "max_gas": "-1",
      "time_iota_ms": "1000"
    },
    "evidence": {
      "max_age_duration": "5400000000000",
      "max_age_num_blocks": "200"
    },
    "validator": {
      "pub_key_types": ["ed25519"]
    }
  },
  "genesis_time": "2020-05-01T12:09:01.568951Z",
  "validators": [
    {
      "address": "FA7B721B5704DF98EF3ECD3796DDEF6AA2A80257",
      "name": "eastus_validator_1",
      "power": "60000000",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "/SvfTeO4Du4oR/VYTjm7IgObc14zzddEAyFb4nU8E3Q="
      }
    },
    {
      "address": "7570B2D23A4C7B638BEFE02EB4FC7927BFDED6B7",
      "name": "canadacentral_validator_1",
      "power": "60000000",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "QMegiWt9+5K1b1ZVd7zOJZxhTnbAtWzvGhViiElAlaw="
      }
    },
    {
      "address": "D527DAECDE0501CF2E785A8DC0D9F4A64760F0BB",
      "name": "uksouth_validator_1",
      "power": "60000000",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "tDLheZJwsA8oYEwarR6/X+zAmNKMLHTVkh/fvcLqcwA="
      }
    }
  ]
}
```

- For network configuration, in `.tendermint/config/config.toml`, you can put the following as `seeds` and `create_empty_blocks_interval`:

  ```
  seeds = "f3806de90c43f5474c6de2b5edefb81b9011f51f@52.186.66.214:26656,29fab3b66ee6d9a46a4ad0cc1b061fbf02024354@13.71.189.105:26656,2ab2acc873250dccc3eb5f6eb5bd003fe5e0caa7@51.145.98.33:26656"
  ```

  ```
  create_empty_blocks_interval = "60s"
  ```

::: tip NOTE
This page only shows the minimal setup.

Depending on what you wish to test on the testnet, e.g. monitoring, you can refer to the [Tendermint documentation](https://docs.tendermint.com/master/tendermint-core/configuration.html) for more details.
:::

### Step 3. Run everything

Before we move forward:

- Make sure `aesmd` service is running by

  ```
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

### Step 3-a-1. Obtain and set the service provider credentials for development

On the [Intel's developer portal](https://api.portal.trustedservices.intel.com/EPID-attestation),
you can obtain credentials for the non-production Intel Attestation Service and choose _"unlinkable quotes"_.

Once you obtained the credentials in the portal, set the following environment variables:

- `SPID`: Set it to the "Service Provider ID" value from the portal;
- `IAS_API_KEY`: Set it to the primary or secondary API key from the portal.

### Step 3-a-2. Run everything

- Start the tx-query enclave app (in `tx-query-HW-debug/`), e.g.:

  ```
  RUST_LOG=info ./tx-query-app 0.0.0.0:3322 ipc://$HOME/enclave.socket
  ```

- Start chain-abci, e.g.:

  ```
  RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash F62DDB49D7EB8ED0883C735A0FB7DE7F2A3FA322FCD2AA832F452A62B38607D5 --enclave_server ipc://$HOME/enclave.socket --tx_query <EXTERNAL_IP/HOSTNAME>:3322
  ```

- Finally, start Tendermint:

  ```
  tendermint node
  ```

## B. Running a council node (validator)

::: warning CAUTION
This page only shows the minimal setup.

You may want to run full nodes (see above)
as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html) and [local notes on production deployment](notes-on-production-deployment.md)), restrict your validator connections to only connect to your full nodes,
test secure storage of validator keys etc.
:::

### Step 3-b-0. (Optional) restoring a wallet

If you have participated in the v0.3.1 testnet and have backed up your seed phrase, you can restore it with the [client-cli](../wallets/client-cli.md#wallet-restore-restore-an-hd-wallet), for example:

```bash
$ client-cli wallet restore --name <WALLET_NAME>
```

You can then create a staking address with:

```
$ client-cli address new --name <WALLET_NAME> --type Staking
```

If the created address matches one of the ones listed in the initial _genesis.json_ distribution, you can skip to [Step 3-b-3](#step-3-b-3-create-a-validator-key-pair).

### Step 3-b-1. Create a staking address

This can be done, for example, with the client-cli command-line tool. Set the required environment variables:

1. `CRYPTO_CHAIN_ID=testnet-thaler-crypto-com-chain-42`;
1. `CRYPTO_CLIENT_TENDERMINT=<YOUR_FULL_NODE>`.
::: tip Note for environment variables setting:
If you would like to connect to a local full node, you can put `<YOUR_FULL_NODE>=ws://localhost:26657/websocket`, or alternatively, you may use the external full node by setting
`<YOUR_FULL_NODE>=ws://13.90.34.32:26657/websocket>`.
:::

And run the followings to create a new [HD-wallet](../wallets/client-cli.html#wallet-new-create-a-new-wallet) and [staking address](../wallets/client-cli.html#address-new-create-a-new-address):

```bash
$ client-cli wallet new --name <WALLET_NAME> --type hd
$ client-cli address new --name <WALLET_NAME> --type Staking
```

You should obtain a hexadecimal-encoded address, e.g. `0xa861a0869c02ab8b74c7cb4f450bcbeb1e472b9a`

### Step 3-b-2. Obtain the minimal required stake

Unless you have obtained the CRO testnet token before, simply send a message on [Gitter](https://gitter.im/crypto-com/community),
stating who you are and your staking address (@devashishdxt or @lezzokafka would typically reply within a day).

### Step 3-b-3. Create a validator key pair

- In a development mode, the full key pair is located in the `.tendetmint/config/priv_validator_key.json` ;

- If the file does not exist, you can initialize the tendermint root directory by running `tendermint init`.
  The public key should be base64-encoded, e.g. `R9/ktG1UifLZ6nMHNA/UZUaDiLAPWt+m9I4aujcAz44=`.

::: tip NOTE
If you plan to test a production setting with the Tendermint Key Management System (KMS) tool,
please see [production deployment notes](notes-on-production-deployment.md) on how it can be converted at the current (0.7) version.
:::

### Step 3-b-4. Run everything

- Start chain-abci, e.g.:

  ```
  RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash F62DDB49D7EB8ED0883C735A0FB7DE7F2A3FA322FCD2AA832F452A62B38607D5
  ```

- Finally, start Tendermint:

  ```
  tendermint node
  ```

### Step 3-b-5. Send a council node join request transaction

As in Step 3-b-1, this can be done, for example, with `client-cli` with the required environment variables.

```bash
$ client-cli transaction new --name <WALLET_NAME> --type node-join
```

You will be required to insert the following:

- the staking address that holds your bonded funds;
- a moniker for your validator node; and
- a base64 encoded tendermint [validator public key](#step-3-b-3-create-a-validator-key-pair).

## Thaler testnet block explorer and CRO faucet

- You are welcome to utilize the [Crypto.com Chain Explorer](https://chain.crypto.com/explorer) to search and get more information on blocks and transactions on **Thaler** testnet network.

- To interact with the blockchain, simply use the [CRO faucet](https://chain.crypto.com/explorer/faucet) to obtain test CRO tokens for performing transactions on the **Thaler** testnet.
  - Note that you will need to create a [wallet](../wallets/client-cli.md#wallet-new-create-a-new-wallet), a [transfer address](../wallets/client-cli.md#address-new-create-a-new-address) and obtain the [viewkey](../wallets/client-cli.md#view-key-obtain-the-view-key) before using the faucet.
