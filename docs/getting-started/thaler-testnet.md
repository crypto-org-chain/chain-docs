# Thaler Testnet: Running a Full Node (Linux only)
This is an early tutorial for the developers and brave and patient super-early adopters.

## Step 0. Install Intel SGX SDK 2.5 and other pre-requisites
Make sure your CPU supports SGX and it is enabled in BIOS. [This GitHub repository](https://github.com/ayeks/SGX-hardware) has more information about supported hardware and cloud vendors.
You can download the [Linux SGX SDK installers from the Intel Open Source website](https://01.org/intel-softwareguard-extensions/downloads/intel-sgx-linux-2.5-release)
You may also need to install libzmq (e.g. `libzmq3-dev` package in Ubuntu 18.04).

## Step 1. Get Tendermint and Chain v0.0 released binaries
Download the latest version of [Tendermint 0.32.*](https://tendermint.com/docs/introduction/install.html#from-binary).
Chain v0.0 can be [downloaded from GitHub](https://github.com/crypto-com/chain/releases/download/v0.0.1/crypto-com-chain-release-0.0.1.tar.gz).

## Step 2. Configure Tendermint
After placing all binaries on the path. You can initialize Tendermint with `tendermint init`.
In `.tendermint/config/`, change the content of `genesis.json` to:
```
{
    "genesis_time": "2019-09-09T02:26:51.366017Z",
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
    "validators": [],
    "app_hash": "8C4B75D5404C00A35BB44DEE679C712058A958D7EE1BA0563F696EFC15D111CA",
    "app_state": {
        "distribution": {
            "0x138fd36faa6d476e09c09f840db5f34e6ae16c9e": [
                "0",
                "ExternallyOwnedAccount"
            ],
            "0x22b8dca309c885955c9b5ba5b57182e08746a71d": [
                "0",
                "ExternallyOwnedAccount"
            ],
            "0x318d5e1fda56a5c7dd480a81310c0814c06ada3c": [
                "5000000000000000",
                "ExternallyOwnedAccount"
            ],
            "0x6f6da31235237626ffc19e24f1fb85542dc12f2f": [
                "5000000000000000",
                "ExternallyOwnedAccount"
            ],
            "0x8c01ee805d6e9bb0f8d6db3d77a005ecc903e789": [
                "4990000000000000000",
                "ExternallyOwnedAccount"
            ],
            "0xa5dcc87b427bed80cf0fadc2610b1c086df37535": [
                "5000000000000000",
                "ExternallyOwnedAccount"
            ],
            "0xe80c82f5d02e688eef1932c067d7c63009969e2d": [
                "0",
                "ExternallyOwnedAccount"
            ],
            "0xed609ff192cd881693d6c8f92cb78edfaaca6bb3": [
                "5000000000000000",
                "ExternallyOwnedAccount"
            ],
            "0xf790a8f223912ccc2454fb816f643d2d77c97133": [
                "4990000000000000000",
                "ExternallyOwnedAccount"
            ]
        },
        "launch_incentive_from": "0x22b8dca309c885955c9b5ba5b57182e08746a71d",
        "launch_incentive_to": "0x138fd36faa6d476e09c09f840db5f34e6ae16c9e",
        "long_term_incentive": "0xe80c82f5d02e688eef1932c067d7c63009969e2d",
        "network_params": {
            "initial_fee_policy": {
                "constant": 1000,
                "coefficient": 0
            },
            "required_council_node_stake": "5000000000000000",
            "unbonding_period": 60
        },
        "council_nodes": [
            {
                "staking_account_address": "0x318d5e1fda56a5c7dd480a81310c0814c06ada3c",
                "consensus_pubkey_type": "Ed25519",
                "consensus_pubkey_b64": "0q5EcCbRKkLS7p2xo9d2pyn4W7dQk6M7+0qaecf4c4I="
            },
            {
                "staking_account_address": "0xed609ff192cd881693d6c8f92cb78edfaaca6bb3",
                "consensus_pubkey_type": "Ed25519",
                "consensus_pubkey_b64": "aVCqEvicGXSyY3Y3ptWm54QVAwEEaB0H6rf4qKRbRq4="
            },
            {
                "staking_account_address": "0x6f6da31235237626ffc19e24f1fb85542dc12f2f",
                "consensus_pubkey_type": "Ed25519",
                "consensus_pubkey_b64": "pRI6D55waEGde3pQOJWHEsIdMMNH/vbTQHd0xHCc8do="
            },
            {
                "staking_account_address": "0xa5dcc87b427bed80cf0fadc2610b1c086df37535",
                "consensus_pubkey_type": "Ed25519",
                "consensus_pubkey_b64": "/S2fzHDfRvoYrVoHJfFQF7c6gpN6j81PiHQqMbCxfDM="
            }
        ]
    }
}
```

In `.tendermint/config/config.toml`, you can put the following as `seeds`:
```
seeds = "9bdd242f750ae13a6db4611fa6991724416b0dd9@40.71.91.144:26656,9e3d812fef9c89520233f177b862248df3af1d25@40.71.91.141:26656,b9a494d61b1e0f447c6010c984811935f7ff0348@13.69.24.163:26656,439542e8237cc5d632969600d9ea6cac1080e73d@40.118.7.174:26656"
```

## Step 3. Run everything
Make sure `aesmd` service is running (you may potentially start it up manually with `LD_LIBRARY_PATH=/opt/intel/libsgx-enclave-common/aesm /opt/intel/libsgx-enclave-common/aesm/aesm_service`).

Start the the-validation enclave app (in `tx-validation-HW-debug/`), e.g.:
```
RUST_LOG=info ./tx-validation-app ipc://$HOME/enclave.socket
```

Start chain-abci, e.g.:
```
RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash 8C4B75D5404C00A35BB44DEE679C712058A958D7EE1BA0563F696EFC15D111CA --enclave_server ipc://$HOME/enclave.socket
```

Start Tendermint:
```
tendermint node
```
