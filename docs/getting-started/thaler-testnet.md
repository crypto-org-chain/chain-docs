# Thaler Testnet: Running a Full Node (Linux only)
This is an early tutorial for the developers and brave and patient super-early adopters.

## Step 0. Install Intel SGX SDK 2.6 and other pre-requisites
Make sure your CPU supports SGX and it is enabled in BIOS. [This GitHub repository](https://github.com/ayeks/SGX-hardware) has more information about supported hardware and cloud vendors.
You can download the [Linux SGX SDK installers from the Intel Open Source website](https://01.org/intel-softwareguard-extensions/downloads/intel-sgx-linux-2.6-release)
You may also need to install libzmq (e.g. `libzmq3-dev` package in Ubuntu 18.04).

## Step 1. Get Tendermint and Chain v0.0 released binaries
Download the latest version of [Tendermint 0.32.*](https://tendermint.com/docs/introduction/install.html#from-binary).
Chain v0.0 can be [downloaded from GitHub](https://github.com/crypto-com/chain/releases/download/v0.0.3/crypto-com-chain-release-0.0.3.tar.gz).

## Step 2. Configure Tendermint
After placing all binaries on the path. You can initialize Tendermint with `tendermint init`.
In `.tendermint/config/`, change the content of `genesis.json` to:
```
{  
   "genesis_time":"2019-09-16T02:26:51.366017Z",
   "chain_id":"testnet-thaler-crypto-com-chain-42",
   "consensus_params":{  
      "block":{  
         "max_bytes":"22020096",
         "max_gas":"-1",
         "time_iota_ms":"1000"
      },
      "evidence":{  
         "max_age":"100000"
      },
      "validator":{  
         "pub_key_types":[  
            "ed25519"
         ]
      }
   },
   "validators":[
   ],
   "app_hash":"4BBC5A3CBD174BF5BE631858A17AFAF047B27B732716459EA8698F57D5B093C0",
   "app_state":{  
      "distribution":{  
         "0x0dd45e740a94a44ca8a6ceec3e65dca7ae5465d7":[  
            "5000000000000000",
            "ExternallyOwnedAccount"
         ],
         "0x138fd36faa6d476e09c09f840db5f34e6ae16c9e":[  
            "0",
            "ExternallyOwnedAccount"
         ],
         "0x22b8dca309c885955c9b5ba5b57182e08746a71d":[  
            "0",
            "ExternallyOwnedAccount"
         ],
         "0x3f4229a55e2dc39014f0717487241f6e691abb2d":[  
            "5000000000000000",
            "ExternallyOwnedAccount"
         ],
         "0x6dcda7d2fff9edeff00d67fc77baf247d8bc6fbd":[  
            "4990000000000000000",
            "ExternallyOwnedAccount"
         ],
         "0xb4cc1eb96fc457193a38422d3a880cc92a3565ef":[  
            "4990000000000000000",
            "ExternallyOwnedAccount"
         ],
         "0xd8e204d6bac6e7e2257520e29027cfbe9a1cbc55":[  
            "5000000000000000",
            "ExternallyOwnedAccount"
         ],
         "0xe80c82f5d02e688eef1932c067d7c63009969e2d":[  
            "0",
            "ExternallyOwnedAccount"
         ],
         "0xfc5ebc7a34b5f4e46d9c443eb1f44a64a2ec71bf":[  
            "5000000000000000",
            "ExternallyOwnedAccount"
         ]
      },
      "launch_incentive_from":"0x22b8dca309c885955c9b5ba5b57182e08746a71d",
      "launch_incentive_to":"0x138fd36faa6d476e09c09f840db5f34e6ae16c9e",
      "long_term_incentive":"0xe80c82f5d02e688eef1932c067d7c63009969e2d",
      "network_params":{  
         "initial_fee_policy":{  
            "constant":1000,
            "coefficient":1001
         },
         "required_council_node_stake":"5000000000000000",
         "unbonding_period":60
      },
      "council_nodes":[  
         {  
            "staking_account_address":"0xfc5ebc7a34b5f4e46d9c443eb1f44a64a2ec71bf",
            "consensus_pubkey_type":"Ed25519",
            "consensus_pubkey_b64":"hPpJH490AJ/f4ab18lJ0G3H/NP9zVSd3erZBk3Z4Ago="
         },
         {  
            "staking_account_address":"0x0dd45e740a94a44ca8a6ceec3e65dca7ae5465d7",
            "consensus_pubkey_type":"Ed25519",
            "consensus_pubkey_b64":"WjjJBtqUl//tmSPT6RW1AcsGHpagmE/8HBPyj/RNTOw="
         },
         {  
            "staking_account_address":"0xd8e204d6bac6e7e2257520e29027cfbe9a1cbc55",
            "consensus_pubkey_type":"Ed25519",
            "consensus_pubkey_b64":"AVJQ7qFCnTiIiB4HjREblKfAHxEr6v2hGeSpMQr1vb0="
         },
         {  
            "staking_account_address":"0x3f4229a55e2dc39014f0717487241f6e691abb2d",
            "consensus_pubkey_type":"Ed25519",
            "consensus_pubkey_b64":"IxLkC/vhfNtkYan47GIMe2MnKgp2Y30HWflOfmqK6dc="
         }
      ]
   }
}
```

In `.tendermint/config/config.toml`, you can put the following as `seeds`:
```
seeds = "50269518a4c8ee22d95e5f79f9d85bb7dafde861@40.71.91.144:26656,cfd434eda488695d6c5ef164117283b7c3306ab3@40.71.91.141:26656,2236d9cb6be9fd1ceb85b4be9bfce811478fcfd3@13.69.24.163:26656,fad802ea87e0ef2cc0d70aa66a1bbf4730bf47b7@40.118.7.174:26656"
```

## Step 3. Run everything
Make sure `aesmd` service is running (you may potentially start it up manually with `LD_LIBRARY_PATH=/opt/intel/libsgx-enclave-common/aesm /opt/intel/libsgx-enclave-common/aesm/aesm_service`).

Start the the-validation enclave app (in `tx-validation-HW-debug/`), e.g.:
```
RUST_LOG=info ./tx-validation-app ipc://$HOME/enclave.socket
```

Start chain-abci, e.g.:
```
RUST_LOG=info ./chain-abci --chain_id testnet-thaler-crypto-com-chain-42 --genesis_app_hash 4BBC5A3CBD174BF5BE631858A17AFAF047B27B732716459EA8698F57D5B093C0 --enclave_server ipc://$HOME/enclave.socket
```

Start Tendermint:
```
tendermint node
```
