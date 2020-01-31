# Thaler Testnet: Running Nodes (Linux only)

The Crypto.com Chain Testnet has been named as **“Thaler”**.

This is an early tutorial for the developers and brave and patient super-early adopters.

## Common Setup

### Step 0. Install Intel SGX SDK 2.7 and other pre-requisites

- Make sure your CPU supports SGX and it is enabled in BIOS. [This GitHub repository](https://github.com/ayeks/SGX-hardware) has more information about supported hardware and cloud vendors.
  You can download the [Linux SGX SDK installers from the Intel Open Source website](https://01.org/intel-softwareguard-extensions/downloads/intel-sgx-linux-2.7-release).

- Note that some motherboards may have only "software controlled" option where [an extra step is needed for enabling it](https://github.com/intel/linux-sgx/issues/354#issuecomment-447961815).

- You may also need to install libzmq (e.g. libzmq3-dev package in Ubuntu 18.04).

::: tip NOTE
There is an Ubuntu-based Docker image `cryptocom/chain:latest` on Dockerhub that 
has Intel PSW and other dependencies pre-installed 
(you still need to have the SGX driver installed on the host and 
expose it to the container by running docker with the `--device /dev/isgx` flag).
:::


### Step 1. Get Tendermint and Chain v0.2 released binaries

Download the latest version of [Tendermint 0.32.\*](https://docs.tendermint.com/master/introduction/install.html#from-binary).
Chain v0.2 can be [downloaded from GitHub](https://github.com/crypto-com/chain/releases/download/v0.2.1/crypto-com-chain-release-0.2.1.tar.gz).

::: warning CAUTION
Crypto.com Chain v0.2 is not backwards compatible with v0.0 released earlier. So, if you were running a node with old
version of Crypto.com Chain, you'll have to delete all the associated data.
:::

### Step 2. Configure Tendermint

After placing all binaries on the path. You can initialize Tendermint with `tendermint init`.
In `.tendermint/config/`, change the content of `genesis.json` to:

```
{
    "app_hash": "94BB489D59D26358F4EBF8A024F3000DCBFA1F5D040BD0C88B18C64B45EABBAB",
    "app_state": {
        "council_nodes": {
            "0x6fc1e3124a7ed07f3710378b68f7046c7300179d": [
                "eastus",
                "security@crypto.com",
                {
                    "type": "tendermint/PubKeyEd25519",
                    "value": "PbzRZG6PgXr6UzHh3wcRMQd689bbEz28K4ZaMAqZDtQ="
                }
            ],
            "0xb8c6886da09e12db8aebfc8108c67ce2ba086ac6": [
                "westeurope1",
                "security@crypto.com",
                {
                    "type": "tendermint/PubKeyEd25519",
                    "value": "82/BWttvHOTmZ9sQlVQKkalijwCu/RJIEZDUURTEkc0="
                }
            ]
        },
        "distribution": {
            "0x4b75f275dde0a8c8e70fb84243adc97a3afb78f2": [
                "UnbondedFromGenesis",
                "7850000000000000000"
            ],
            "0x6fc1e3124a7ed07f3710378b68f7046c7300179d": [
                "Bonded",
                "100000000000000000"
            ],
            "0xb8c6886da09e12db8aebfc8108c67ce2ba086ac6": [
                "Bonded",
                "50000000000000000"
            ]
        },
        "network_params": {
            "initial_fee_policy": {
                "coefficient": 1250,
                "constant": 1100
            },
            "jailing_config": {
                "block_signing_window": 360,
                "jail_duration": 86400,
                "missed_block_threshold": 180
            },
            "max_validators": 50,
            "required_council_node_stake": "5000000000000000",
            "rewards_config": {
                "distribution_period": 86400,
                "monetary_expansion_cap": "2000000000000000000",
                "monetary_expansion_decay": 999860,
                "monetary_expansion_r0": 350,
                "monetary_expansion_tau": 14500000000000000
            },
            "slashing_config": {
                "byzantine_slash_percent": "0.200",
                "liveness_slash_percent": "0.100",
                "slash_wait_period": 10800
            },
            "unbonding_period": 3600
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
            "max_age": "100000"
        },
        "validator": {
            "pub_key_types": [
                "ed25519"
            ]
        }
    },
    "genesis_time": "2020-01-16T07:14:14.924984Z",
    "validators": [
        {
            "address": "801B1708949EA320741F226782018E396F96A8CB",
            "name": "eastus",
            "power": "1000000000",
            "pub_key": {
                "type": "tendermint/PubKeyEd25519",
                "value": "PbzRZG6PgXr6UzHh3wcRMQd689bbEz28K4ZaMAqZDtQ="
            }
        },
        {
            "address": "6712A23B73B44D2EF274105E90483B335E4F74E7",
            "name": "westeurope1",
            "power": "500000000",
            "pub_key": {
                "type": "tendermint/PubKeyEd25519",
                "value": "82/BWttvHOTmZ9sQlVQKkalijwCu/RJIEZDUURTEkc0="
            }
        }
    ]
}
```

For network configuration, in `.tendermint/config/config.toml`, you can put the following as `seeds` and `create_empty_blocks_interval`:

```
seeds = "3ae3b20f2c22e161f5c7fdcd5109d12c86babfde@13.80.64.101:26656,f196af4ecf176cd279a3905c5bd0edb4436dfabd@13.82.183.37:26656"
create_empty_blocks_interval = "60s"
```

::: tip NOTE
This page only shows the minimal setup.

Depending on what you wish to test on the testnet, e.g. monitoring, you can refer to the [Tendermint documentation](https://docs.tendermint.com/master/tendermint-core/configuration.html) for more details.
:::

### Step 3. Run everything

- Make sure `aesmd` service is running (you may potentially start it up manually with `LD_LIBRARY_PATH=/opt/intel/libsgx-enclave-common/aesm /opt/intel/libsgx-enclave-common/aesm/aesm_service`).

- The full node (exposed for wallets / clients) and the council node (validator) have slightly different steps described in the following sections.

## Running a full node (to serve data to wallets / clients)
::: warning CAUTION
This page only shows the minimal setup.

You may want to disable unsafe operations in Tendermint configuration,
restrict the incoming connections RPC connections (e.g. over NGINX or equivalent), want to execute the processes using supervisor or equivalent etc.
:::

### Step 3-a-1. Obtain and set the service provider credentials for development
On the [Intel's developer portal](https://api.portal.trustedservices.intel.com/EPID-attestation),
you can obtain credentials for the non-production Intel Attestation Service.
Choose "unlinkable quotes".

Once you obtained the credentials in the portal, set the following environment variables:
- `SPID`: set it to the "Service Provider ID" value from the portal
- `IAS_API_KEY`: set it to the primary or secondary API key from the portal

### Step 3-a-2. Run everything

- Start the tx-validation enclave app (in `tx-validation-HW-debug/`), e.g.:

  ```
  RUST_LOG=info ./tx-validation-app ipc://$HOME/enclave.socket
  ```

- Start the tx-query enclave app (in `tx-query-HW-debug/`), e.g.:

```
RUST_LOG=info ./tx-query-app 0.0.0.0:3322 ipc://$HOME/enclave.socket
```

- Start chain-abci, e.g.:

  ```
  RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash 94BB489D59D26358F4EBF8A024F3000DCBFA1F5D040BD0C88B18C64B45EABBAB --enclave_server ipc://$HOME/enclave.socket --tx_query <EXTERNAL_IP/HOSTNAME>:3322
  ```

- Finally, start Tendermint:

  ```
  tendermint node
  ```

## Running a council node (validator)
::: warning CAUTION
This page only shows the minimal setup.

You may want to run full nodes (see above)
as sentries (see [Tendermint](https://docs.tendermint.com/master/tendermint-core/running-in-production.html) and [local notes on production deployment](notes-on-production-deployment.md)), restrict your validator connections to only connect to your full nodes,
test secure storage of validator keys etc.
:::

### Step 3-b-1. Create a staking address
This can be done, for example, with the client-cli command-line tool. Set the required environment variables:

- `CRYPTO_CHAIN_ID=testnet-thaler-crypto-com-chain-42
- `CRYPTO_CLIENT_TENDERMINT <YOUR FULL NODE, e.g. ws://localhost:26657/websocket or ws://13.80.66.193:26657/websocket>`

And run (see [more details](../wallets/client-cli.md)):
```bash
$ client-cli wallet new --name <WALLET_NAME> --type hd
$ client-cli address new --name <WALLET_NAME> --type Staking
```

You should obtain a hexadecimal-encoded address, e.g. `0xa861a0869c02ab8b74c7cb4f450bcbeb1e472b9a`
### Step 3-b-2. Deposit the minimal required stake
Unless you have obtained the CRO testnet token before, simply send a message on [Gitter](https://gitter.im/crypto-com/community),
stating who you are and your staking address (@devashishdxt or @lezzokafka would typically reply within a day).

### Step 3-b-3. Create a validator key pair
If you plan to test a production setting with the Tendermint Key Management System (KMS) tool,
please see [production deployment notes](notes-on-production-deployment.md) how it can be converted at the current (0.7) version.
In a development mode, the full key pair is located in the `priv_validator_key.json` file (generated with `tendermint init`). 
The public key should be in the base64-encoded `R9/ktG1UifLZ6nMHNA/UZUaDiLAPWt+m9I4aujcAz44=`.

### Step 3-b-4. Run everything
- Start the the-validation enclave app (in `tx-validation-HW-debug/`), e.g.:

  ```
  RUST_LOG=info ./tx-validation-app ipc://$HOME/enclave.socket
  ```

- Start chain-abci, e.g.:

  ```
  RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash 862D743DAAD548EB9A964AE1D176761A45F599D18636BFCA954B0859B218B5C4 --enclave_server ipc://$HOME/enclave.socket
  ```

- Finally, start Tendermint:

  ```
  tendermint node
  ```

### Step 3-b-5. Send a council node join request transaction
As in Step 3-b-1, this can be done, for example, with `client-cli` with the required environment variables.

```bash
$ client-cli transaction new --name Default --type node-join
```

## Thaler testnet block explorer and CRO faucet

- You are welcome to utilize the [Crypto.com Chain Explorer](https://chain.crypto.com/explorer) to search and get more information on blocks and transactions on **Thaler** testnet network.

- To interact with the blockchain, simply use the [CRO faucet](https://chain.crypto.com/explorer/faucet) to obtain test CRO tokens for performing transactions on the **Thaler** testnet.
  - Note that you will need to create a [wallet](https://crypto-com.github.io/wallets/client-cli.html#_1-wallet-management), a [transfer address](https://crypto-com.github.io/wallets/client-cli.html#_2-funds-transfer) and obtain the [viewkey](https://crypto-com.github.io/wallets/client-cli.html#_2-funds-transfer) before using the faucet.
