# Thaler Testnet: Running Nodes (Linux only)

The Crypto.com Chain Testnet has been named as **“Thaler”**.

This is an early tutorial for the developers and brave and patient super-early adopters.

## Common Setup

### Step 0. Install Intel SGX SDK 2.8 and other pre-requisites

- Make sure your CPU supports SGX and it is enabled in BIOS. [This GitHub repository](https://github.com/ayeks/SGX-hardware) has more information about supported hardware and cloud vendors.
  You can download the [Linux SGX SDK installers from the Intel Open Source website](https://01.org/intel-softwareguard-extensions/downloads/intel-sgx-linux-2.8-release).

- Note that some motherboards may have only "software controlled" option where [an extra step is needed for enabling it](https://github.com/intel/linux-sgx/issues/354#issuecomment-447961815).

- You may also need to install libzmq (e.g. libzmq3-dev package in Ubuntu 18.04).

::: tip NOTE
There is an Ubuntu-based Docker image `cryptocom/chain:latest` on Dockerhub that 
has Intel PSW and other dependencies pre-installed 
(you still need to have the SGX driver installed on the host and 
expose it to the container by running docker with the `--device /dev/isgx` flag).
:::


### Step 1. Get Tendermint and Chain v0.3 released binaries

Download the latest version of [Tendermint 0.32.\*](https://docs.tendermint.com/master/introduction/install.html#from-binary).
Chain v0.3 can be [downloaded from GitHub](https://github.com/crypto-com/chain/releases/download/v0.3.0/crypto-com-chain-release-0.3.0.tar.gz).

::: warning CAUTION
Crypto.com Chain v0.3 is not backwards compatible with v0.2 released earlier. So, if you were running a node with the old
version of Crypto.com Chain, you'll have to delete all the associated data.

Also note [released binary changes](https://github.com/crypto-com/chain/releases/tag/v0.3.0).
:::

### Step 2. Configure Tendermint

After placing all binaries on the path. You can initialize Tendermint with `tendermint init`.
In `.tendermint/config/`, change the content of `genesis.json` to:

```
{
    "app_hash": "54F4F05167492B83F0135AA55D27308C43AEA36E3FE91F4AD21028728207D70F",
    "app_state": {
        "council_nodes": {
            "0x6dbd5b8fe0dad494465aa7574defba711c184102": [
                "westeurope",
                "security@crypto.com",
                {
                    "type": "tendermint/PubKeyEd25519",
                    "value": "11/ZonHB4wuTTRKnsy6EMfzj1gTo7ywcqIqZhbI1znQ="
                }
            ],
            "0x6fc1e3124a7ed07f3710378b68f7046c7300179d": [
                "eastus",
                "security@crypto.com",
                {
                    "type": "tendermint/PubKeyEd25519",
                    "value": "uHRMASqk9LSVuCNv0XwKpg1EGRs1GpCDHZ0cnXCFfbA="
                }
            ],
            "0xb8c6886da09e12db8aebfc8108c67ce2ba086ac6": [
                "eastus2",
                "security@crypto.com",
                {
                    "type": "tendermint/PubKeyEd25519",
                    "value": "A5hAzOez47vox/Lq+qulVoURKS6k6s6r9c/YmCilbNA="
                }
            ]
        },
        "distribution": {
            "0x3288bdff8ef3c7dbdc9faef3f18a134044804a19": [
                "UnbondedFromGenesis",
                "6000000000000000"
            ],
            "0x4ae85b35597fcb61c6c47b1fe0bdd7eed8421cdd": [
                "UnbondedFromGenesis",
                "6000000000000000"
            ],
            "0x4b75f275dde0a8c8e70fb84243adc97a3afb78f2": [
                "UnbondedFromGenesis",
                "7946000000000000000"
            ],
            "0x4fd8162521f2e628adced7c1baa39384a08b4a3d": [
                "UnbondedFromGenesis",
                "6000000000000000"
            ],
            "0x6c2be7846219eab3086a66f873558b73d8f4a0d4": [
                "UnbondedFromGenesis",
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
            "0x916f9e34e140c43f3853f2949c3ea95da5eb6098": [
                "UnbondedFromGenesis",
                "6000000000000000"
            ],
            "0x9baa6de71cbc6274275eece4b1be15f545897f37": [
                "UnbondedFromGenesis",
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
                "jail_duration": 3600,
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
                "liveness_slash_percent": "0.100",
                "slash_wait_period": 1800
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
            "max_age": "100000"
        },
        "validator": {
            "pub_key_types": [
                "ed25519"
            ]
        }
    },
    "genesis_time": "2020-02-17T19:39:53.60362Z",
    "validators": [
        {
            "address": "38F9D0F3B1721EA6F25ACBC6A5B4C7381281CE13",
            "name": "westeurope",
            "power": "60000000",
            "pub_key": {
                "type": "tendermint/PubKeyEd25519",
                "value": "11/ZonHB4wuTTRKnsy6EMfzj1gTo7ywcqIqZhbI1znQ="
            }
        },
        {
            "address": "E6CAA77DFC2069BE8657126F2749F484A3EAEAC0",
            "name": "eastus",
            "power": "60000000",
            "pub_key": {
                "type": "tendermint/PubKeyEd25519",
                "value": "uHRMASqk9LSVuCNv0XwKpg1EGRs1GpCDHZ0cnXCFfbA="
            }
        },
        {
            "address": "F2CBB18A10F3475EAC8C6AFF96840BA4B4DAD857",
            "name": "eastus2",
            "power": "60000000",
            "pub_key": {
                "type": "tendermint/PubKeyEd25519",
                "value": "A5hAzOez47vox/Lq+qulVoURKS6k6s6r9c/YmCilbNA="
            }
        }
    ]
}
```

For network configuration, in `.tendermint/config/config.toml`, you can put the following as `seeds` and `create_empty_blocks_interval`:

```
seeds = "111373a933869a49a69fa59b09932ceec29ee34b@40.76.4.61:26656,421c21179e12f17923a1fe8d631a16079d6c32c4@40.87.120.191:26656,fa3bbe6e895eea77e4321a83a863e794cf2e2929@13.94.133.75:26656"
```
```
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

- Start the tx-query enclave app (in `tx-query-HW-debug/`), e.g.:

    ```
    RUST_LOG=info ./tx-query-app 0.0.0.0:3322 ipc://$HOME/enclave.socket
    ```

- Start chain-abci, e.g.:

  ```
  RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash 54F4F05167492B83F0135AA55D27308C43AEA36E3FE91F4AD21028728207D70F --enclave_server ipc://$HOME/enclave.socket --tx_query <EXTERNAL_IP/HOSTNAME>:3322
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

### Step 3-b-0. (Optional) restoring a wallet
If you participated in the 0.2 testnet and have backed up your seed phrase, you can restore it with, for example:

```bash
$ client-cli wallet restore --name <WALLET_NAME>
```

You can then create a staking address with:
```
$ client-cli address new --name <WALLET_NAME> --type Staking
```

If the created address matches one of the ones listed in the initial genesis.json distribution,
you can skip to Step 3-b-5.

### Step 3-b-1. Create a staking address
This can be done, for example, with the client-cli command-line tool. Set the required environment variables:

- `CRYPTO_CHAIN_ID=testnet-thaler-crypto-com-chain-42`
- `CRYPTO_CLIENT_TENDERMINT <YOUR FULL NODE, e.g. ws://localhost:26657/websocket or ws://13.94.208.212:26657/websocket>`

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
The public key should be base64-encoded, e.g. `R9/ktG1UifLZ6nMHNA/UZUaDiLAPWt+m9I4aujcAz44=`.

### Step 3-b-4. Run everything
- Start chain-abci, e.g.:

  ```
  RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash 54F4F05167492B83F0135AA55D27308C43AEA36E3FE91F4AD21028728207D70F
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
