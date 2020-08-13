# ClientRPC API Documentation

This document lists all the RPC methods available on top of the `client-rpc` component.

## Getting Started

:::tip
All the methods explained in this document assume the following settings.
:::

```bash
Method: POST
URL: http://localhost:26659/ 
Headers: Content-Type: application/json
```
* To call a JSONRPC method, send a HTTP `POST` request to the root RPC endpoint. Example below:
```bash
curl --header "Content-Type: application/json" --request POST --data '{"method": "<<method_name>>", "params": ["5"], "id": 1}' localhost:26659
```
* In the examples used here 
    - `RPC_HOST_NAME` = `localhost`
    - `RPC_SERVER_PORT` = `26659`

Remember to change your `RPC_HOST_NAME` and `RPC_SERVER_PORT` (if different used).

* If any call fails the response `body` contains an `error` Object: [ErrorResponse](./api-objects.md#errorresponse)
* For all API-Objects used here, refer to [this page](./api-objects.md).
 
You can try our API examples here
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/33332df9753fd7f793d4#?env%5BClientRPC%5D=W3sia2V5IjoiY2xpZW50X3JwY19ob3N0IiwidmFsdWUiOiI1MS4xMzIuMjMzLjUwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjbGllbnRfcnBjX3BvcnQiLCJ2YWx1ZSI6IjI2NjU5IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ3YWxsZXRfcGFzc3BocmFzZSIsInZhbHVlIjoiMTIzIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ3YWxsZXRfZW5ja2V5IiwidmFsdWUiOiI2NDE2OTVhNjk0NDkzY2FkZWM0Y2U0NDliOTkzOTE2OWY5Yjg3N2U5NTQyMjcwZDRjY2JlOWZiMTZiOTFhYjdlIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJzdGFraW5nX2FkZHJlc3MiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoidHJhbnNmZXJfYWRkcmVzcyIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJwdWJsaWNfa2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InZpZXdfa2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6IndhbGxldF9uYW1lIiwidmFsdWUiOiJoaXRlc2giLCJlbmFibGVkIjp0cnVlfV0=)

or download the collection file [here](https://github.com/cdc-Hitesh/chain-docs/tree/master/docs/api/client-rpc-methods.postman_collection.json)


## INFORMATION
:::tip 
All `info` methods.
:::

### `status`

Returns the current status of the network.

#### Parameters

`None`

#### Returns

`result` : *Object* - [StatusResponse](./api-objects.md#statusresponse).

***Request Body:***

```json
{
    "method": "status",
	"jsonrpc": "2.0",
	"params": [],
	"id": "status"
}
```

***Response Body:***

```json       
{
    "jsonrpc": "2.0",
    "result": {
        "node_info": {
            "channels": "4020212223303800",
            "id": "853FBCA4B357420DD617448B14E73E1B59E9AB81",
            "listen_addr": "tcp://0.0.0.0:26656",
            "moniker": "node0",
            "network": "test-chain-y3m1e6-AB",
            "other": {
                "rpc_address": "tcp://0.0.0.0:26657",
                "tx_index": "on"
            },
            "protocol_version": {
                "app": "1",
                "block": "10",
                "p2p": "7"
            },
            "version": "0.33.4"
        },
        "sync_info": {
            "catching_up": false,
            "latest_app_hash": "2D742A6764C4E9109F520B27CED5DEB98D7656222E8317C30D19DE3E21265AC9",
            "latest_block_hash": "3AE3E08FB7E2A09E747073BF9AFC27DA8AFA466446B27BA85F7927AC0C39CBA8",
            "latest_block_height": "556696",
            "latest_block_time": "2020-07-27T11:04:19.779027255Z"
        },
        "validator_info": {
            "address": "0D8912E96DAAE332E7393EC1DC4BA2D249A44445",
            "proposer_priority": null,
            "pub_key": {
                "type": "tendermint/PubKeyEd25519",
                "value": "FF5JxhRrCUNLj6UZmYdjv/AWgSWUeiomeOMeJG71owE="
            },
            "voting_power": "5000000000"
        }
    },
    "id": "status"
}
    
```

### `genesis`
Returns chain's genesis information. Read more [here](./api-objects.md#genesis). 

#### Parameters
`None`

#### Returns

`result` : *Object* - [Genesis](./api-objects.md#genesis).

***Request Body:***

```json       
{
	"method": "genesis",
	"jsonrpc": "2.0",
	"params": [],
	"id": "genesis"
}
```

***Response Body:***

```json       
{
    "jsonrpc": "2.0",
    "result": {
        "app_hash": [
            57,
            66,
            51,
            50,
            50,
            70
        ],
        "app_state": {
            "council_nodes": {
                "0x45c1851c2f0dc6138935857b9e23b173185fea15": [
                    "node0",
                    "node0@example.com",
                    {
                        "type": "tendermint/PubKeyEd25519",
                        "value": "FF5JxhRrCUNLj6UZmYdjv/AWgSWUeiomeOMeJG71owE="
                    },
                    {
                        "init_payload": "AAACAEEEzsqLyBbMQaSMbSFTrnuBH+RYlcRt24qQFH4DIfZkgY+WhAM0f86lgKtIURL.......IcAEgwRgIhAIzkMxxOZ7MtpBCYi4Dr9Px3m4o9PMaVAdkEpUJY2iGWAiEAnDh+Lh5KNEisPE01sAbUqTk2RwuIfc06pU+sMtcxK8Y="
                    }
                ]
            },
            "distribution": {
                "0x0000000000000000000000000000000000000000": [
                    "UnbondedFromGenesis",
                    "8000000000000000000"
                ],
                "0x2dfde2178daa679508828242119dcf2114038ea8": [
                    "UnbondedFromGenesis",
                    "500000000000000000"
                ],
                "0x45c1851c2f0dc6138935857b9e23b173185fea15": [
                    "Bonded",
                    "500000000000000000"
                ]
            },
            "network_params": {
                "initial_fee_policy": {
                    "coefficient": 0,
                    "constant": 0
                },
                "jailing_config": {
                    "block_signing_window": 100,
                    "missed_block_threshold": 50
                },
                "max_validators": 50,
                "required_council_node_stake": "1",
                "rewards_config": {
                    "monetary_expansion_cap": "1000000000000000000",
                    "monetary_expansion_decay": 999860,
                    "monetary_expansion_r0": 450,
                    "monetary_expansion_tau": 14500000000000000,
                    "reward_period_seconds": 86400
                },
                "slashing_config": {
                    "byzantine_slash_percent": "0.200",
                    "liveness_slash_percent": "0.100"
                }
            }
        },
        "chain_id": "test-chain-y3m1e6-AB",
        "consensus_params": {
            "block": {
                "max_bytes": "22020096",
                "max_gas": "-1"
            },
            "evidence": {
                "max_age_duration": "5000000000",
                "max_age_num_blocks": "100000"
            },
            "validator": {
                "pub_key_types": [
                    "ed25519"
                ]
            }
        },
        "genesis_time": "2020-08-05T06:01:00Z",
        "validators": [
            {
                "address": "0D8912E96DAAE332E7393EC1DC4BA2D249A44445",
                "proposer_priority": null,
                "pub_key": {
                    "type": "tendermint/PubKeyEd25519",
                    "value": "FF5JxhRrCUNLj6UZmYdjv/AWgSWUeiomeOMeJG71owE="
                },
                "voting_power": "5000000000"
            }
        ]
    },
    "id": "genesis"
}
```

## WALLET MANAGEMENT

:::tip 
All `wallet` endpoints.
:::

### `wallet_balance`

Retrieves the different types of balances.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Object* - Wallet Balance Object.
* `result.total` : *Uint64* - The total amount balance.
* `result.available` : *Uint64* - The available amount balance that can be currently used.
* `result.pending` : *Uint64* - The pending amount balance.

***Request Body:***

```json       
{
	"method": "wallet_balance",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
	"id": "wallet_balance"
}
```

***Response Body:***

```json       
{
    "jsonrpc": "2.0",
    "result": {
        "available": "500000000000000000",
        "pending": "0",
        "total": "500000000000000000"
    },
    "id": "wallet_balance"
}
```

### `wallet_create`

Creates a new wallet.

#### Parameters

* *Object* - [CreateWalletRequest](./api-objects.md#createwalletrequest).
* *String* - Type of wallet to be created. Possible values are:
    - `Basic` : Single private key based wallet.
    - `HD` : Hierarchial Deterministic Wallet.
    - `HW` : Hardware Wallet ( eg. Ledger, Trezor).
* *Uint32* -  (Optional)  Mnemonic word count. Default `12`. 

#### Returns

`result` : *Array* - Wallet creation result.
* `result[0]` : *String* - Wallet authentication token.
* `result[1]` : *String* - (Optional) Generated mnemonic phrase.

***Request Body:***

```json       
{
    "jsonrpc": "2.0",
    "method": "wallet_create",
    "params": [
        {
            "name": "<<Wallet Name>>",
            "passphrase": "<<Your Passphrase>>"
        },
        "HD",
        12 
    ],
    "id": "wallet_create"
}
```

***Response Body:***

```json       
{
    "jsonrpc": "2.0",
    "result": [
        "49b2188de90d2d635d8615a20d4ceca225a47918871e8465387a55374b99334f",
        "ordinary mandate edit father snack mesh history identify print borrow skate unhappy cattle tiny first"
    ],
    "id": "wallet_create"
}
```


### `wallet_createStakingAddress`

Creates a new Staking address. 

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *String* - Generated staking address.

***Request Body:***

```json       
{
	"method": "wallet_createStakingAddress",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
	"id": "wallet_createStakingAddress"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "0x78390b88c29a15dcb6fa0ba786063bfe4d3e74c0",
    "id": "wallet_createStakingAddress "
}
```


### `wallet_createStakingAddressBatch`

Creates multiple staking addresses in a single call.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *UInt32* - Number of staking address to create.

#### Returns
`result` : *UInt32* - Number of staking addresses created.

***Request Body:***

```json       
{
	"method": "wallet_createStakingAddressBatch",
	"jsonrpc": "2.0",
	"params": [
        {
    		"name": "{{wallet_name}}",
    		"enckey": "{{wallet_enckey}}"
    	},
         5
    ],
	"id": "wallet_createStakingAddressBatch"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": 5,
    "id": "wallet_createStakingAddressBatch"
}
```


### `wallet_createWatchStakingAddress`

Imports a watch only staking address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Secp256k1 public key of the staking address in either compressed or uncompressed form.

#### Returns
`result` : *String* - Imported Watch staking address.

***Request Body:***

```json       
{
	"method": "wallet_createWatchStakingAddress",
	"jsonrpc": "2.0",
	"params": [{
		"name": "{{wallet_name}}",
		"enckey": "{{wallet_enckey}}"
	},
    "036ec1e9ed491f11db5a348a3c51890c2beb5c7c0e6619353e614c683a15a5683a"
    ],
	"id": "wallet_createWatchStakingAddress"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "0x7037ea3f59c3755dda652b52220e7d28dc4743bd",
    "id": "wallet_createWatchStakingAddress"
}
```


### `wallet_createTransferAddress`
Creates a new Transfer address. Read more about transfer type address [here](../protocol/serialization.md#Transfer-key-pair-and-Address).

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *String* - Generated Transfer address.
:::warning Note:
Different chain has different address prefixes for its corresponding network types, these prefixes are:

| Mainnet | Testnet | Devnet |
| ------- | ------- | ------- |
| `cro`   | `tcro`  | `dcro`  |
:::
 
***Request Body:***

```json       
{
	"method": "wallet_createTransferAddress",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
	"id": "wallet_createTransferAddress"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "dcro1m45k4k366n6rfydpkfr62834t4tx0n63n8alwn99rm35u5he9qsq60hucv",
    "id": "wallet_createTransferAddress"
}
```

### `wallet_createTransferAddressBatch`
Creates multiple `Transfer` type addresses in a single call.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *Uint32* - Number of addresses to create.

#### Returns
`result` : *UInt32* - Number of `Transfer` addresses created successfully.

***Request Body:***

```json       
{
	"method": "wallet_createTransferAddressBatch",
	"jsonrpc": "2.0",
	"params": [
        {
    		"name": "{{wallet_name}}",
    		"enckey": "{{wallet_enckey}}"
    	},
        5
    ],
	"id": "wallet_createTransferAddressBatch"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": 5,
    "id": "wallet_createTransferAddressBatch"
}
```


### `wallet_createWatchTransferAddress`
Imports a watch only transfer address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Secp256k1 public key of the transfer address in either compressed or uncompressed form.

#### Returns
`result` : *String* - Imported Watch Transfer address.
 
***Request Body:***

```json       
{
	"method": "wallet_createWatchTransferAddress",
	"jsonrpc": "2.0",
	"params": [{
		"name": "{{wallet_name}}",
		"enckey": "{{wallet_enckey}}"
	},
    "036ec1e9ed491f11db5a348a3c51890c2beb5c7c0e6619353e614c683a15a5683a"
    ],
	"id": "wallet_createWatchTransferAddress"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "dcro1raxgsnlemeahk3zusmm3emqyy4pzt29tvdey2u5rue9pppm7p38q4lvx6z",
    "id": "wallet_createWatchTransferAddress"
}
```

### wallet_getEncKey

Retrieves Wallet authentication token. The token can be used to unlock all authorized wallet methods.

::: warning 
Encryption Token Storage
Keep the token in a safe place because it can unlock any authorized wallet methods. Exposing your token may result in lost of funds.
:::

#### Parameters
* *Object* - [CreateWalletRequest](./api-objects.md#createwalletrequest).

#### Returns
`result` : *String* - Wallet authentication token.

 
***Request Body:***

```json       
{
    "method": "wallet_getEncKey",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "passphrase": "{{wallet_passphrase}}"
        }
    ],
    "id": "wallet_getEncKey"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "14d768e8d1dd17c21c5c45793f7328598fe91d590feef219deddf22b0749fbeb",
    "id": "wallet_getEncKey"
}
```

### `wallet_getViewKey`
Retrieve wallet's View key pair details. Read more about a view key [here](../protocol/serialization.md#view-key-pair).

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *Boolean* - if `true` returns the `private-key` else `public-key` of the view-key pair. 

#### Returns
`result` : *String* - `private` or `public` key.

***Request Body:***

```json       
{
    "method": "wallet_getViewKey",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        },
        false
    ],
    "id": "wallet_getViewKey"
}
```


***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "3aefe25d235b86e2ec25d0a0ee73267e0a0f10f62a4d96df42fc9e7b2f6cbef3",
    "id": "wallet_getViewKey"
}
```

### `wallet_list`

Retrieves the names of all available wallets.

#### Parameters
`None`

#### Returns
`result` : *Array* - List of all the wallet names created (*case-sensitive*).

***Request Body:***

```json       
{
    "method": "wallet_list",
    "jsonrpc": "2.0",
    "params": [],
    "id": "wallet_list"
}
```


***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "hd",
        "hitesh",
        "test_account"
    ],
    "id": "wallet_list"
}
```



### `wallet_listPublicKeys`

Retrieves all available public keys.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Array[String]* - List of all available public keys.


***Request Body:***

```json       
{
	"method": "wallet_listPublicKeys",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		}
	],
	"id": "wallet_listPublicKeys"
}
```


***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "02a732fb6c34812ea5a46547344d63a360e22d0c4815c837af82a09de7b7fd9797",
        "02b57da2eea7b1415ebbf55e92f4eb4a3d57de38709383b57187e1b2cf2bb5cd93",
        "038b8aaaf8a0ae63b68f76b1b9b8aa4707026348194c9585e73340e1fb8f2cd675",
        "02a4a9f0e2bd2b0faf44b54ceb33efc6767b10aa9ba34730407978c0f878843083",
        "0320cfdfbca075e693bee5e21c03807f53b614ef1102ac4fd3ed90e64fbc53e13f",
        "036e942a496871e18436d16789d76d3ee2f21de56eb2ac729ee14dee59c4072d53",
        "036ec1e9ed491f11db5a348a3c51890c2beb5c7c0e6619353e614c683a15a5683a",
        "024603e44898dced85b99508a5a3da104bf5cf125115e87cfc6a7a45bc36bd14ab",
        "025d3c3663cd279c45afb03b1afb6d2c8720fdfa8dfcfb37231cca40125a062d6b",
        "03c42ab485019a1365397f93948bfd6bac40cfe238267ff661e1097e1d2ca4f82a"
    ],
    "id": "wallet_listPublicKeys"
}
```

### `wallet_listStakingAddresses`

Retrieve all available Staking addresses.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *UInt64* - (Optional) Offset value.
* *Uint64* - (Optional) Maximum number of records to fetch.
* *Boolean* - (Optional) If `true` returns the list in *latest-first* fashion. Default: `false`.

#### Returns
`result` : *Array[String]* - List of all available Staking addresses.

***Request Body:***

```json       
{
	"method": "wallet_listStakingAddresses",
	"jsonrpc": "2.0",
	"params": [
       {
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		0,
		100,
		false
    ],
	"id": "wallet_listStakingAddresses"
}
```


***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "0x673bc7f0efbfd9eec54d187f541ff820c26bde56",
        "0x78390b88c29a15dcb6fa0ba786063bfe4d3e74c0",
        "0x6dc72c2d5e581d50ebf50409be162105fee00223",
        "0xfcfa3ac1b2ba90abdb074410724bc9ce9b8735d5",
        "0x59ceeb1d56230dc1574d17feefa464a0a33b44ff",
        "0xaa707e7430b7992246fe7bfc9e031400e48a9cb6",
        "0x6ae047b93a3bea5026a014dcf9413bcc9e0bac45"
    ],
    "id": "wallet_listStakingAddresses"
}
```


### `wallet_listTransferAddresses`
Retrieve all the Transfer addresses available on the wallet.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *UInt64* - (Optional) Offset value (to indicate the `cursor`).
* *Uint64* - (Optional) Maximum number of records to fetch.
* *Boolean* -  (Optional) If `true` returns the list in latest-first fashion. Default: `false`.

#### Returns
`result` : *Array[String]* - List of all available Transfer addresses.

***Request Body:***

```json       
{
	"method": "wallet_listTransferAddresses",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		0,
		100,
		false
	],
	"id": "wallet_listTransferAddresses"
}
```


***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "dcro1kxl8xy6k8twhes6j972mrzurfvgms0e549z852cgqyl796jss89sadlmgd",
        "dcro1dxpj3qn7ljapew2w33mfdxcnhkqtsy22qtwdlh6tmh98wzhjdsrsxg4c24",
        "dcro19lwlvysk73lyq98ak7cgzwe7s2h7tpr5ng4jqp3h8msrnht6ntds6e2nqc",
        "dcro18k8cyn0ynfuapk0hzh37xr2ppu4rd6ssyf7xk67hzkzwtt3hnrcqz3flc6",
        "dcro1lu6zwl7krsjmn8ygxs880hdmjepg7mv7gvgzut9jg7w8072s9ffqdwehd5",
        "dcro188tu7a6m9egl0uw5r9k8e2gzrvt26qrtdgywjavsxk45gd28wlusdf2l4p",
        "dcro1raxgsnlemeahk3zusmm3emqyy4pzt29tvdey2u5rue9pppm7p38q4lvx6z",
        "dcro1feppgfulyftkfupdh96v2jfl5dgkpzjp3r8asugcjjmetrjw24msj6wep8",
        "dcro1apx48vm5qeh92tjuw22fde0yndvdzumc4sjugg3ajfmd3tc7259sk38uhk",
        "dcro10sd7k7y4rvflcczkze8yptp8vgsachz0j2mdhw5uck0fmfr9zcrsm873hu"
    ],
    "id": "wallet_listTransferAddresses"
}
```

### `wallet_listUTxO`

Retrieves all available UTXOs.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Array[ [UnspentTransactions](./api-objects.md#unspenttransactions) ]* - List of all available UTXOs on the wallet.

***Request Body:***

```json       
{
	"method": "wallet_listUTxO",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
	"id": "wallet_listUTxO"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": [
        [
            {
                "id": "64783b06e7a466ae10d8370fb39b2bdd9ce7dd7b565c5353e734e8d38784e5dd",
                "index": 0
            },
            {
                "address": "dcro19lwlvysk73lyq98ak7cgzwe7s2h7tpr5ng4jqp3h8msrnht6ntds6e2nqc",
                "valid_from": null,
                "value": "23232323"
            }
        ],
        [
            {
                "id": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
                "index": 0
            },
            {
                "address": "dcro1dxpj3qn7ljapew2w33mfdxcnhkqtsy22qtwdlh6tmh98wzhjdsrsxg4c24",
                "valid_from": null,
                "value": "996633"
            }
        ],
        [
            {
                "id": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
                "index": 1
            },
            {
                "address": "dcro1apx48vm5qeh92tjuw22fde0yndvdzumc4sjugg3ajfmd3tc7259sk38uhk",
                "valid_from": null,
                "value": "499999999975771044"
            }
        ]
    ],
    "id": "wallet_listUTxO"
}
```

### `wallet_broadcastSignedTransferTx`

Broadcast a signed Transfer transaction to the blockchain.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Signed raw transaction.

#### Returns
`result` : *String* - Transaction ID.

***Request Body:***

```json       
{
	"method": "wallet_broadcastSignedTransferTx",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
        "<<YOUR SIGNED HEX>>"
	],
	"id": "wallet_broadcastSignedTransferTx"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
    "id": "wallet_broadcastSignedTransferTx"
}
```

### `wallet_restore`
Restores a `HD` or `HW` type wallet.

#### Parameters
* *Object* - [CreateWalletRequest](./api-objects.md#createwalletrequest).
* *String* - A valid Mnemonic phrase. (eg. `alpha beta charlie .. . . . .  . zeta`)

#### Returns
`result` : *String* - Wallet authentication token.

***Request Body:***

```json       
{
    "method": "wallet_restore",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "passphrase": "{{wallet_passphrase}}"
        },
        "ordinary mandate edit father snack mesh history identify print borrow skate unhappy cattle tiny first"
    ],
    "id": "wallet_restore"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Wallet Authentication Token>>",
    "id": "wallet_restore"
}
```

### `wallet_restoreBasic`

Restores a `Basic` type wallet. More info [here](https://chain.crypto.com/docs/wallets/client-cli.html#wallet-operations). 

#### Parameters
* *Object* - [CreateWalletRequest](./api-objects.md#createwalletrequest).
* *String* - Valid secp256k1 Private key.

#### Returns
`result` : *String* - Wallet authentication token.


***Request Body:***

```json       
{
    "method": "wallet_restoreBasic",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "passphrase": "{{wallet_passphrase}}"
        },
        "b4518a5a1594816446f9a50390fe2d5a896b91590b794bcd7ff4bee75d2ab601"
    ],
    "id": "wallet_restoreBasic"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Wallet Authentication Token>>",
    "id": "wallet_restoreBasic"
}
```

### `wallet_delete`
Deletes an existing wallet. 

#### Parameters
* *Object* - [CreateWalletRequest](./api-objects.md#createwalletrequest).

#### Returns
`result` : *Object* - `null`.


***Request Body:***

```json       
{
    "method": "wallet_delete",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "passphrase": "{{wallet_passphrase}}"
        }
    ],
    "id": "wallet_delete"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "wallet_delete"
}
```

### `wallet_sendToAddress`
Creates and sends a `Transfer` type transaction.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Destination Transfer address.
* *Uint64* - Sending amount.
* *Array[String]* - List of View Keys or `[]`.

#### Returns
`result` : *String* - Transaction ID. 


***Request Body:***

```json       
{
	"method": "wallet_sendToAddress",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"dcro1ayhu0665wprxf86letqlv8x4ssppeu6awf7m60qlwds9268vltwsk6ehwa",
		"125",
		[]
	],
	"id": "wallet_sendToAddress"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "wallet_sendToAddress"
}
```

### `wallet_buildRawTransferTx`
Creates a *unsigned* raw transaction.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Destination Transfer address.
* *Uint64* - Amount to send.
* *Array[String]* - List of View Keys or `[]`.

#### Returns
`result` : *String* - Encrypted Unsigned raw transaction. 

***Request Body:***

```json       
{
	"method": "wallet_buildRawTransferTx",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"dcro1ayhu0665wprxf86letqlv8x4ssppeu6awf7m60qlwds9268vltwsk6ehwa",
		"5000000",
		[]
	],
	"id": "wallet_buildRawTransferTx"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "DGR4OwbnpGauENg3D7ObK92c5917VlxTU+c06NOHhOXdAAAAL932Ehb0fkAU/bewgTs+gq/lhHSaKyAGNz7gOd16mttDf2IBAAAAAACjs3zy5CDNEPfDJQFaf1bSRL4dSQyIT7Xc/6t7aBTUIQAAAGmDKIJ+/LocuU6MdpabE72AuBFKAtzf30vdyncK8mwHGTUPAAAAAAAAo7N88uQgzRD3wyUBWn9W0kS+HUkMiE+13P+re2gU1CEBAADoTVOzdAZuVS5ccpSW5eSbWNFzeKwlxCI9knbYrx5VC6RLQNJZW/AGAACrsAQAAAAAAAAA6S/H61RwRmSfX8rB9hzVhAIc811yfb08H3NgVWjs+t0AfBvreJUbE/xgVhZOQKwnYiHcXE+Sttu6nMWenaRlFgc=",
    "id": "wallet_buildRawTransferTx"
}
```


### `wallet_transactions`

Retrieves all transactions on the wallet.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *UInt32* - Offset value.
* *Uint32* - Max number of records to fetch.
* *Boolean* - If `true` returns the list in *latest-first* fashion.

#### Returns
`result` : *Array[ [TransactionChange](./api-objects.md#transactionchange) ]* - List of all transactions. 

***Request Body:***

```json       
{
	"method": "wallet_transactions",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		0,
		100,
		false
	],
	"id": "wallet_transactions"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "block_height": 89,
            "block_time": "2020-08-11T07:54:55.707526308Z",
            "fee": "0",
            "inputs": [],
            "kind": "Incoming",
            "outputs": [
                {
                    "address": "dcro1kxl8xy6k8twhes6j972mrzurfvgms0e549z852cgqyl796jss89sadlmgd",
                    "valid_from": 1596607260,
                    "value": "500000000000000000"
                }
            ],
            "transaction_id": "fab2009511b0634b244e0689a97c60b3bb108aaf85785841c37d8c7a51b837ad",
            "transaction_type": "Withdraw",
            "value": "500000000000000000"
        },
        {
            "block_height": 242,
            "block_time": "2020-08-11T07:57:43.939236623Z",
            "fee": "0",
            "inputs": [
                {
                    "id": "fab2009511b0634b244e0689a97c60b3bb108aaf85785841c37d8c7a51b837ad",
                    "index": 0,
                    "output": {
                        "address": "dcro1kxl8xy6k8twhes6j972mrzurfvgms0e549z852cgqyl796jss89sadlmgd",
                        "valid_from": 1596607260,
                        "value": "500000000000000000"
                    }
                }
            ],
            "kind": "Outgoing",
            "outputs": [
                {
                    "address": "dcro19lwlvysk73lyq98ak7cgzwe7s2h7tpr5ng4jqp3h8msrnht6ntds6e2nqc",
                    "valid_from": null,
                    "value": "23232323"
                },
                {
                    "address": "dcro1raxgsnlemeahk3zusmm3emqyy4pzt29tvdey2u5rue9pppm7p38q4lvx6z",
                    "valid_from": null,
                    "value": "499999999976767677"
                }
            ],
            "transaction_id": "64783b06e7a466ae10d8370fb39b2bdd9ce7dd7b565c5353e734e8d38784e5dd",
            "transaction_type": "Transfer",
            "value": "0"
        },
        {
            "block_height": 313,
            "block_time": "2020-08-11T07:59:01.911108863Z",
            "fee": "0",
            "inputs": [
                {
                    "id": "64783b06e7a466ae10d8370fb39b2bdd9ce7dd7b565c5353e734e8d38784e5dd",
                    "index": 1,
                    "output": {
                        "address": "dcro1raxgsnlemeahk3zusmm3emqyy4pzt29tvdey2u5rue9pppm7p38q4lvx6z",
                        "valid_from": null,
                        "value": "499999999976767677"
                    }
                }
            ],
            "kind": "Outgoing",
            "outputs": [
                {
                    "address": "dcro1dxpj3qn7ljapew2w33mfdxcnhkqtsy22qtwdlh6tmh98wzhjdsrsxg4c24",
                    "valid_from": null,
                    "value": "996633"
                },
                {
                    "address": "dcro1apx48vm5qeh92tjuw22fde0yndvdzumc4sjugg3ajfmd3tc7259sk38uhk",
                    "valid_from": null,
                    "value": "499999999975771044"
                }
            ],
            "transaction_id": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
            "transaction_type": "Transfer",
            "value": "0"
        }
    ],
    "id": "wallet_transactions"
}
```

### `wallet_exportTransaction`
Exports a chain transaction.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Transaction ID.

#### Returns
`result` : *String* - Encrypted Raw Transaction.


***Request Body:***

```json       
{
	"method": "wallet_exportTransaction",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"fab2009511b0634b244e0689a97c60b3bb108aaf85785841c37d8c7a51b837ad"
	],
	"id": "wallet_exportTransaction"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "eyJ0eCI6eyJ0eXBlIjoiV2l0aGRyYXdVbmJvbmRlZFN0YWtlVHJhbnNhY3Rpb24iLCJub25jZSI6MCwib3V0cHV0cyI6W3siYWRkcmVzcyI6ImRjcm8xa3hsOHh5Nms4dHdoZXM2ajk3Mm1yenVyZnZnbXMwZTU0OXo4NTJjZ3F5bDc5Nmpzczg5c2FkbG1nZCIsInZhbHVlIjoiNTAwMDAwMDAwMDAwMDAwMDAwIiwidmFsaWRfZnJvbSI6MTU5NjYwNzI2MH1dLCJhdHRyaWJ1dGVzIjp7ImNoYWluX2hleF9pZCI6IkFCIiwiYWxsb3dlZF92aWV3IjpbeyJ2aWV3X2tleSI6IjAyYjRkYWJmYzg2MmI5Y2I5Zjg2YjhkNDk1MjAwMjNhYTBjY2NiMmFkODk0NDY1NzdkZDBmZWU3YmM5NDZhNzlhMSIsImFjY2VzcyI6IkFsbERhdGEifV0sImFwcF92ZXJzaW9uIjoxfX0sImJsb2NrX2hlaWdodCI6ODl9",
    "id": "wallet_exportTransaction"
}
```

### `wallet_export`
Returns a wallet export object.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Object* - [WalletInfo](./api-objects.md#walletinfo).

***Request Body:***

```json       
{
	"method": "wallet_export",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		}
	],
	"id": "wallet_export"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": {
        "hdkey": "AQcAAAACAAAAAQAAAAEBdPhLdcuo8wJPKO3hyKBOQyOKLU2BRUDQoVIOZlI81431Pd6OWNVIAgFx5x5TmioTBAFZLI+xvFztVGSjjWSA/g==",
        "key_chainpath": "AA==",
        "key_pairs": "CAUBBKNLyL1kIgljmzt7gDZ7fEsfZtFYHnvXZ0iJNCzrvUXdHQXDH6HyPjjX0aUq",
        "multisig_address_pair": "CAEBNjU0NDQ5Yjdnz1GZ+/dMpR7jTlL5KCCjS8nZ/7U9WtSYXxB201K8zQrKvalXvCo+SaEkmc1LBgEAAAAAAAAAAAAAAAAAAAA=",
        "name": "test_account",
        "passphrase": null,
        "private_key": "gHvvwqvI7mV0VbkiLNhXZ6efE",
        "wallet": "BQEETqp27JejrjeIjRUPkeH9VuTlfT4S2gX6lBN9F50TdaWraOtT0NJGhskelHjVdVmfPUZn790ylHuNOUvkoIAE="
    },
    "id": "wallet_export"
}
```


### `wallet_importTransaction`
Imports a Chain transaction exported from [wallet_exportTransaction](#wallet_exportTransaction).

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Encrypted raw transaction.

#### Returns
`result` : *Uint64* - Amount of the transaction.


***Request Body:***

```json       
{
	"method": "wallet_importTransaction",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"eyJ0eCI6eyJ0eXBlIjoiV2l0aGRyYXdVbmJvbmRlZFN0YWtlVHJhbnNhY3Rpb24iLCJub25jZSI6MCwib3V0cHV0cyI6W3siYWRkcmVzcyI6ImRjcm8xa3hsOHh5Nms4dHdoZXM2ajk3Mm1yenVyZnZnbXMwZTU0OXo4NTJjZ3F5bDc5Nmpzczg5c2FkbG1nZCIsInZhbHVlIjoiNTAwMDAwMDAwMDAwMDAwMDAwIiwidmFsaWRfZnJvbSI6MTU5NjYwNzI2MH1dLCJhdHRyaWJ1dGVzIjp7ImNoYWluX2hleF9pZCI6IkFCIiwiYWxsb3dlZF92aWV3IjpbeyJ2aWV3X2tleSI6IjAyYjRkYWJmYzg2MmI5Y2I5Zjg2YhkNDk1MjAwMjNhYTBjY2NiMmFkODk0NDY1NzdkZDBmZWU3YmM5NDZhNzlhMSIsImFjY2VzcyI6IkFsbERhdGEifV0sImFwcF92ZXJzaW9uIjoxfX0sImJsb2NrX2hlaWdodCI6ODl9"
	],
	"id": "wallet_importTransaction"
}
```
@ToDo
***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": 5568,
    "id": "wallet_importTransaction"
}
```

### `wallet_import`

Imports a [WalletInfo](./api-objects.md#walletinfo).

#### Parameters
* *Object* - [CreateWalletRequest](./api-objects.md#createwalletrequest).
* *Object* - [WalletInfo](./api-objects.md#walletinfo).

#### Returns
`result` : *String* - Wallet authentication token.


***Request Body:***

```json       
{
    "method": "wallet_import",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "passphrase": "{{wallet_passphrase}}"
        },
        {
            "hdkey": "AQYAAAAKAAAAAQAAAAEBhDXrGMCHEus1urikNB9r5fRqYCEw0MK39e6ICpEpubvGtGZtlWadUwgY9esNnNFSODjSfxL+dg4UhIv1stXilg==",
            "key_chainpath": "AA==",
            "key_pairs": "KAUBBMQqtIUBmhNlOX+TlIv9a6xAz+I4Jn/2YeEJfh0spPgqdeAiJer68R3xhTD7CwRyIKIpU0RHPf7cFzEaXxLyOH2AjnCSpm8y2Ot3hddeozmyzgZX7aY4vwZkjkxCNNVH9SsFAQRuwentSR8R21o0ijxRiQwr61x8DmYZNT5hTGg6FaVoOlYO7sLEB70bN073SQiJs54T+v22LAFtbml+ZB039c/TgKGIZFkCFgSbBz27iTI0znI2QoE7KWkOiGZXZ0JnVOguBQEEIM/fvKB15pO+5eIcA4B/U7YU7xECrE/T7ZDmT7xT4T/vJuQ9RbtiXj5IFqTCmn+UiOdTW18XrDsJSUl5VdMNAYC1YYkucfIsV+oVrkawTv4Zb+E6dClaPwx5BaKqF19ZHAUBBG6UKkloceGENtFniddtPuLyHeVusqxynuFN7lnEBy1TS0HjXkC/IiGvpo/jQywdpIYVeUWY/Kb/EByamNRr7OOAv8omDWTvVGVRUSJ6rzsaRJE5hp0XOxiwyLR7NuN3jVIFAQRdPDZjzSecRa+wOxr7bSyHIP36jfz7NyMcykASWgYta2MPx9L5PKrb/T4HVa6ub3V4yigU6rpLiEzgCTfdQNUqgA0niuyZs2jVxbkpZQ5jxa/Q6SC+GvyEP+daSEtQCr0CBQEEi4qq+KCuY7aPdrG5uKpHBwJjSBlMlYXnM0Dh+48s1nW6vMC+jeuvDv0OiX0alBMnilr3QHWbBI5jWn61Dalpc4Cxi6oj4nr5ECQ6JeN16+h7UmJiuC0T2HOhcRVIla9eTQUBBKSp8OK9Kw+vRLVM6zPvxnZ7EKqbo0cwQHl4wPh4hDCD8eLbmXv4MVeDK1GmI1D2ljUGcXRBk+r4yGGrqyhY4ciAIcJwgPjX40Gj1v4jRuW/lHxPffkrqHgQ9WkwT1dGOdAFAQS1faLup7FBXrv1XpL060o9V944cJODtXGH4bLPK7XNkzeZtX/7d3BfDgrRoNhyGGBFx1usxrN08n7vJO5vaqM4gEAZ4sqyFwLbR/pXdmwbeXHofdzOuR6Ow2IdGVP3QwN9BQEEpzL7bDSBLqWkZUc0TWOjYOItDEgVyDevgqCd57f9l5dll0H74YpABE3ycOZS4lZIRuFTPNh+QOcf7PyopoCyZoAUwVsG/QrETbZc8buSIkZ6BHvNPzDmNap8m068MaCfFgUBBEYD5EiY3O2FuZUIpaPaEEv1zxJRFeh8/Gp6Rbw2vRSrulyB/F1ClcmZ2O+8INCvrj6swt9HOzqdyVZ8AbJnAJyADFGWOf+ERkEr50DZNprXdo/wLj75A9wtCo/BaQJWFbw=",
            "multisig_address_pair": "KAEBMWY0Yzg4NGZmOWRlN2I3YjQ0NWM4NmY3MWNlYzA0MjU0MjI1YThhYjYzNzI0NTcyODNlNjRhMTA4NzdlMGM0ZQEAAAAAAAAAAQAAAAAAAAAFAQRuwentSR8R21o0ijxRiQwr61x8DmYZNT5hTGg6FaVoOlYO7sLEB70bN073SQiJs54T+v22LAFtbml+ZB039c/TAR9MiE/53nt7RFyG9xzsBCVCJairY3JFcoPmShCHfgxObsHp7UkfEdtaNIo8UYkMK+tcfA5mGTU+YUxoOhWlaDoBAAAAAAAAAAAAAAAAAAAAAQEyZmRkZjYxMjE2ZjQ3ZTQwMTRmZGI3YjA4MTNiM2U4MmFmZTU4NDc0OWEyYjIwMDYzNzNlZTAzOWRkN2E5YWRiAQAAAAAAAAABAAAAAAAAAAUBBIuKqvigrmO2j3axubiqRwcCY0gZTJWF5zNA4fuPLNZ1urzAvo3rrw79Dol9GpQTJ4pa90B1mwSOY1p+tQ2paXMBL932Ehb0fkAU/bewgTs+gq/lhHSaKyAGNz7gOd16mtuLiqr4oK5jto92sbm4qkcHAmNIGUyVheczQOH7jyzWdQEAAAAAAAAAAAAAAAAAAAABATM5ZDdjZjc3NWIyZTUxZjdmMWQ0MTk2YzdjYTkwMjFiMTZhZDAwNmI2YTA4ZTk3NTkwMzVhYjQ0MzU0Nzc3ZjkBAAAAAAAAAAEAAAAAAAAABQEEbpQqSWhx4YQ20WeJ120+4vId5W6yrHKe4U3uWcQHLVNLQeNeQL8iIa+mj+NDLB2khhV5RZj8pv8QHJqY1Gvs4wE51893Wy5R9/HUGWx8qQIbFq0Aa2oI6XWQNatENUd3+W6UKkloceGENtFniddtPuLyHeVusqxynuFN7lnEBy1TAQAAAAAAAAAAAAAAAAAAAAEBM2Q4ZjgyNGRlNDlhNzlkMGQ5ZjcxNWUzZTMwZDQxMGYyYTM2ZWExMDIyN2M2YjZiZDcxNTg0ZTVhZTM3OThmMAEAAAAAAAAAAQAAAAAAAAAFAQSkqfDivSsPr0S1TOsz78Z2exCqm6NHMEB5eMD4eIQwg/Hi25l7+DFXgytRpiNQ9pY1BnF0QZPq+Mhhq6soWOHIAT2Pgk3kmnnQ2fcV4+MNQQ8qNuoQInxra9cVhOWuN5jwpKnw4r0rD69EtUzrM+/GdnsQqpujRzBAeXjA+HiEMIMBAAAAAAAAAAAAAAAAAAAAAQE0ZTQyMTQyNzlmMjI1NzY0ZjAyZGI5NzRjNTQ5M2ZhMzUxNjA4YTQxODhjZmQ4NzExODk0Yjc5NThlNGU1NTc3AQAAAAAAAAABAAAAAAAAAAUBBEYD5EiY3O2FuZUIpaPaEEv1zxJRFeh8/Gp6Rbw2vRSrulyB/F1ClcmZ2O+8INCvrj6swt9HOzqdyVZ8AbJnAJwBTkIUJ58iV2TwLbl0xUk/o1FgikGIz9hxGJS3lY5OVXdGA+RImNzthbmVCKWj2hBL9c8SURXofPxqekW8Nr0UqwEAAAAAAAAAAAAAAAAAAAABATY5ODMyODgyN2VmY2JhMWNiOTRlOGM3Njk2OWIxM2JkODBiODExNGEwMmRjZGZkZjRiZGRjYTc3MGFmMjZjMDcBAAAAAAAAAAEAAAAAAAAABQEEtX2i7qexQV679V6S9OtKPVfeOHCTg7Vxh+Gyzyu1zZM3mbV/+3dwXw4K0aDYchhgRcdbrMazdPJ+7yTub2qjOAFpgyiCfvy6HLlOjHaWmxO9gLgRSgLc399L3cp3CvJsB7V9ou6nsUFeu/VekvTrSj1X3jhwk4O1cYfhss8rtc2TAQAAAAAAAAAAAAAAAAAAAAEBN2MxYmViNzg5NTFiMTNmYzYwNTYxNjRlNDBhYzI3NjIyMWRjNWM0ZjkyYjZkYmJhOWNjNTllOWRhNDY1MTYwNwEAAAAAAAAAAQAAAAAAAAAFAQTEKrSFAZoTZTl/k5SL/WusQM/iOCZ/9mHhCX4dLKT4KnXgIiXq+vEd8YUw+wsEciCiKVNERz3+3BcxGl8S8jh9AXwb63iVGxP8YFYWTkCsJ2Ih3FxPkrbbupzFnp2kZRYHxCq0hQGaE2U5f5OUi/1rrEDP4jgmf/Zh4Ql+HSyk+CoBAAAAAAAAAAAAAAAAAAAAAQFiMWJlNzMxMzU2M2FkZDdjYzM1MjJmOTViMThiODM0YjExYjgzZjM0YTk0NDdhMmIwODAxM2ZlMmVhNTA4MWNiAQAAAAAAAAABAAAAAAAAAAUBBKcy+2w0gS6lpGVHNE1jo2DiLQxIFcg3r4Kgnee3/ZeXZZdB++GKQARN8nDmUuJWSEbhUzzYfkDnH+z8qKaAsmYBsb5zE1Y63XzDUi+VsYuDSxG4PzSpRHorCAE/4upQgcunMvtsNIEupaRlRzRNY6Ng4i0MSBXIN6+CoJ3nt/2XlwEAAAAAAAAAAAAAAAAAAAABAWU4NGQ1M2IzNzQwNjZlNTUyZTVjNzI5NDk2ZTVlNDliNThkMTczNzhhYzI1YzQyMjNkOTI3NmQ4YWYxZTU1MGIBAAAAAAAAAAEAAAAAAAAABQEEXTw2Y80nnEWvsDsa+20shyD9+o38+zcjHMpAEloGLWtjD8fS+Tyq2/0+B1Wurm91eMooFOq6S4hM4Ak33UDVKgHoTVOzdAZuVS5ccpSW5eSbWNFzeKwlxCI9knbYrx5VC108NmPNJ5xFr7A7GvttLIcg/fqN/Ps3IxzKQBJaBi1rAQAAAAAAAAAAAAAAAAAAAAEBZmYzNDI3N2ZkNjFjMjViOTljODgzNDBlNzdkZGJiOTY0MjhmNmQ5ZTQzMTAyZTJjYjI0NzljNzdmOTUwMmE1MgEAAAAAAAAAAQAAAAAAAAAFAQQgz9+8oHXmk77l4hwDgH9TthTvEQKsT9PtkOZPvFPhP+8m5D1Fu2JePkgWpMKaf5SI51NbXxesOwlJSXlV0w0BAf80J3/WHCW5nIg0Dnfdu5ZCj22eQxAuLLJHnHf5UCpSIM/fvKB15pO+5eIcA4B/U7YU7xECrE/T7ZDmT7xT4T8BAAAAAAAAAAAAAAAAAAAA",
            "name": "default",
            "passphrase": null,
            "private_key": "gDrv4l0jW4bi7CXQoO5zJn4KDxD2Kk2W30L8nnsvbL7z",
            "staking_keys": "GAUBBCGUa/l1Aw8XnaOQW5WkQ8HAvqLg7xql4RHcfkBxaVd2lVp9PSCvflZCl5Y4sWOaneIO9plHhVxL/+JI89ZaH0EFAQR/UWZnMubod9yrBzc1/AwEuTBtxkuUrN1poItgYC6cTrkpOsUPPVXOdEoIGOtHf+5Go0AXQeOAhG11mJtFFzBnBQEEr10qEOVgmu/GP+78RPzfL0alMOgF4QP1QSc/FEDJZ0QLo8BEFvXdmGUBAx6s73/KZEDpwbYGFv6tG9J+4dk4yAUBBN2FG02MxElwFgCwjz0BX5zwsq/pr09AamSihwns+23VJLHKH7S926yjA6OomnXhI7Ga1Nk9v/uRkfsGPknHEc4FAQTIiXtY3MRFGC/bhscAtyOKZ7o/ktd+S/iIJ2e46VE40TI70PxH2DQRjnbhZqqEpy2TXav8/7gy7u/mtyEYJPZ+BQEEWZ7s0oROxqLeT6pIk44Li4Rzu7A64khZ3+BpHuIdPxFe5Zon9FywcJi0odZFis/SAEEnRCU07T+01S+3LbDrbQ==",
            "wallet": "BQEEtNq/yGK5y5+GuNSVIAI6oMzLKtiURld90P7nvJRqeaGDcnYiitx14NQav3WpfCmyGAz9UFrWJgkP2E6324R+EgE="
        }
    ],
    "id": "wallet_import"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "195b43f64155c101f2efd16a5d89b2b211a5a083618363ab8b11bb264f208a71",
    "id": "wallet_import"
}
```

## STAKING
:::tip
All staking related endpoints. Read more about staking key pair and addresses [here](../protocol/serialization.md#staking-key-pair-and-address).
:::

###  `staking_state`
Returns the current staking state of a address.

#### Parameters
* *String* - Wallet name.
* *String* - Staking Address.

#### Returns
`result` : *Object* - [StakedState](./api-objects.md#stakedstate).

***Request Body:***

```json       
{
	"method": "staking_state",
	"jsonrpc": "2.0",
	"params": [
        "{{wallet_name}}",
		"{{staking_address}}"
	],
	"id": "staking_state"
}
```
***Response Body:***
* ex: unbonded
```json
{
    "jsonrpc": "2.0",
    "result": {
        "address": "0x2dfde2178daa679508828242119dcf2114038ea8",
        "bonded": "0",
        "last_slash": null,
        "node_meta": null,
        "nonce": 0,
        "unbonded": "500000000000000000",
        "unbonded_from": 1596607260
    },
    "id": "staking_state"
}
```

* ex: bonded
```json
{
    "jsonrpc": "2.0",
    "result": {
        "address": "0x45c1851c2f0dc6138935857b9e23b173185fea15",
        "bonded": "499999999999500000",
        "last_slash": null,
        "node_meta": {
            "CouncilNode": {
                "council_node": {
                    "confidential_init": {
                        "init_payload": "AAACAEEEzsqLyBbMQaSMbSFTrnuBH+RYlcRt24qQFH4DIfZkgY+WhAM0f86lgKtIURL.......Z7MtpBCYi4Dr9Px3m4o9PMaVAdkEpUJY2iGWAiEAnDh+Lh5KNEisPE01sAbUqTk2RwuIfc06pU+sMtcxK8Y="
                    },
                    "consensus_pubkey": {
                        "type": "tendermint/PubKeyEd25519",
                        "value": "FF5JxhRrCUNLj6UZmYdjv/AWgSWUeiomeOMeJG71owE="
                    },
                    "name": "node0",
                    "security_contact": "node0@example.com"
                },
                "inactive_block": null,
                "inactive_time": null,
                "jailed_until": null
            }
        },
        "nonce": 1,
        "unbonded": "500000",
        "unbonded_from": 1597132559
    },
    "id": "staking_state"
}
```


###  `staking_unbondStake`
Releases bonded token on a staking address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Staking Address.
* *UInt64* - Amount to unbond.

#### Returns
`result` : *String* - Transaction ID.

***Request Body:***

```json       
{
	"method": "staking_unbondStake",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"{{staking_address}}",
		"500000000000000000"
	],
	"id": "staking_unbondStake"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "ddd8d774ddc79e70b1fa08eb91874a6e58fadbf90920a5669d367caf7ecfa3a0",
    "id": "staking_unbondStake"
}
```


###  `staking_depositAmountStake`

Deposits tokens to a recipient staking address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Recipient staking address.
* *UInt64* - Amount to deposit.

#### Returns
`result` : *String* - Transaction ID.

***Request Body:***

```json       
{
	"method": "staking_depositAmountStake",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"{{recipient_staking_address}}",
		"500000000000000000"
	],
	"id": "staking_depositAmountStake"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "ddd8d774ddc79e70b1fa08eb91874a6e58fadbf90920a5669d367caf7ecfa3a0",
    "id": "staking_depositAmountStake"
}
```

###  `staking_withdrawAllUnbondedStake`

Withdraws all unbonded tokens from a staking address to a destination transfer address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Source *Staking* type Address.
* *String* - Destination *transfer* type Address.
* *Array [String]* - List of view keys or `[]`.

#### Returns
`result` : *String* - Transaction ID.


***Request Body:***

```json       
{
	"method": "staking_withdrawAllUnbondedStake",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"0x2dfde2178daa679508828242119dcf2114038ea8",
		"dcro1kxl8xy6k8twhes6j972mrzurfvgms0e549z852cgqyl796jss89sadlmgd",
		[]
	],
	"id": "staking_withdrawAllUnbondedStake"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "ddd8d774ddc79e70b1fa08eb91874a6e58fadbf90920a5669d367caf7ecfa3a0",
    "id": "staking_withdrawAllUnbondedStake"
}
```

###  `staking_depositStake`
Uses specified UTXO to deposit tokens on a destination staking address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Destination staking type address.
* *Array[ [TxoPointer](./api-objects.md#txopointer) ]* - UTXO Input.

#### Returns
`result` : *String* - Transaction ID.

***Request Body:***

```json       
{
	"method": "staking_depositStake",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"0x2dfde2178daa679508828242119dcf2114038ea8",
		[
			{
				"id": "64783b06e7a466ae10d8370fb39b2bdd9ce7dd7b565c5353e734e8d38784e5dd",
				"index": 0
			}
		]
	],
	"id": "staking_depositStake"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "f1c2b4007911b698d0edac10249e5f5364d93f485b713cb188b9f0b62fe4f68a",
    "id": "staking_depositStake"
}
```

###  `staking_unjail`
Initiates the unjailing process for a `jailed` staking address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Address to be unjailed.

#### Returns
`result` : *String* - Transaction ID.

***Request Body:***

```json       
{
	"method": "staking_unjail",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"{{unjail_address}}"
	],
	"id": "staking_unjail"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "staking_unjail"
}
```

###  `staking_validatorNodeJoin`

Sends a `node-join` request to participate as a validator node in the network.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Validator Node Name (Display).
* *String* - Validator Public key. Read more [here](../getting-started/thaler-testnet.md#step-4-b-4-create-a-validator-key-pair).
* *String* - Staking address.
* *String* - KeyPackage data.

#### Returns
`result` : *String* - Transaction ID.

***Request Body:***

```json       
{
	"method": "staking_validatorNodeJoin",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
        "{{validator_node_name}}",
        "{{validator_pubkey}}",
        "{{staking_address}}",
        "{{keypackage}}"
	],
	"id": "staking_validatorNodeJoin"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "staking_validatorNodeJoin"
}
```

## SYNC
:::tip
Wallet synchronization methods.
:::

###  `sync`
Starts the `sync` process.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *Object* - [SyncRequest](./api-objects.md#syncrequest).

#### Returns
`result` : *Object* - [RunSyncResult](./api-objects.md#runsyncresult)

***Request Body:***

```json       
{
    "method": "sync",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        },
        {
            "blocking": false,
            "reset": false,
            "do_loop": false
        }
    ],
	"id": "sync"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": {
        "message": "started sync wallet",
        "name": "default",
        "progress": {
            "current": 0,
            "end": 0,
            "message": "",
            "name": "",
            "percent": 0.0,
            "start": 0
        }
    },
    "id": "sync"
}
```

###  `sync_progress`

Returns current progress of Wallet `sync` process.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Object* - [RunSyncProgressResult](./api-objects.md#runsyncprogressresult)

***Request Body:***

```json       
{
    "method": "sync_progress",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
	"id": "sync_progress"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
	"result": {
        "current": 205880,
        "end": 660789,
        "message": "sync default progress 15.003485 percent  205880 125580~660789",
        "name": "default",
        "percent": 15.003484725952148,
        "start": 125580
    },
	"id": "sync_progress"
}
```

###  `sync_stop`

Stops a running `sync` process.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Object* - `null`

***Request Body:***

```json       
{
    "method": "sync_stop",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
	"id": "sync_stop"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
	"result": null,
	"id": "sync_stop"
}
```

## MULTISIG
:::tip
All multisignature related  methods.

These methods are marked *EXPERIMENTAL*, please enable them before using.
:::

### `multiSig_newAddressPublicKey`
Creates a new public key.

#### Parameters
* *Object* -  [WalletRequest](./api-objects.md#walletrequest).
 
#### Returns
`result` : *String* - compressed secp256k1 Public key.

***Request Body:***

```json  
{
    "method": "multiSig_newAddressPublicKey",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
    "id": "multiSig_newAddressPublicKey"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "<<public_key>>",
    "id": "multiSig_addNonce"
}
```


### `multiSig_addNonce`
Adds other party's nonce to the multisig wallet session.

#### Parameters
* *String* - multisig session id.
* *String* - Wallet authentication token.
* *String* - Other party's Nonce value.
* *String* - Other party's Public key.
 
#### Returns
`result` : *Object* - `null`

***Request Body:***

```json  
{
    "method": "multiSig_addNonce",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}",
        "{{nonce_value}}",
        "02b2a02cb8eacc6a0602a976b6a2dcd6924b68120b42c9843cdd6191606d0a1350"
    ],
    "id": "multiSig_addNonce"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "multiSig_addNonce"
}
```

### `multiSig_addNonceCommitment`

Adds other party's nonce commitment value to current session.

#### Parameters
* *String* - Session ID.
* *String* - Wallet authentication token.
* *String* - Other party's nonce commitment value.
* *String* - Other party's public key.
 
#### Returns
`result` : *Object* - `null`

***Request Body:***

```json       
{
    "method": "multiSig_addNonceCommitment",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}",
        "d36e039866c62683511d09a488cd9912d4667650c57ed9a07ba07e631bc1046e",
        "038b8aaaf8a0ae63b68f76b1b9b8aa4707026348194c9585e73340e1fb8f2cd675"
    ],
    "id": "multiSig_addNonceCommitment"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "multiSig_addNonceCommitment"
}
```

### `multiSig_createAddress`
It can be used to create a `m-of-n` multisig wallet. Where `m` is the minimum number of signatures required, `n` is the total number of parties. And `n` has to be always greater than or equal to  `m` (i.e **`n>=m`**).

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *Array[String]* - All participating public keys. 
* *String* - Self public key.
* *UInt32* - Positive integer representing the number of minimum signatures required (can't be higher than total number of participants). 

#### Returns
`result` : *String* - Generated Multisig Address.

***Request Body:***

```json      
{
    "method": "multiSig_createAddress",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        },
        [
        	"03c42ab485019a1365397f93948bfd6bac40cfe238267ff661e1097e1d2ca4f82a",
            "036ec1e9ed491f11db5a348a3c51890c2beb5c7c0e6619353e614c683a15a5683a",
            "0320cfdfbca075e693bee5e21c03807f53b614ef1102ac4fd3ed90e64fbc53e13f"
        ],
        "03c42ab485019a1365397f93948bfd6bac40cfe238267ff661e1097e1d2ca4f82a",
        2 
    ],
    "id": "multiSig_createAddress"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "dcro1ufekq0vvtt4mrgfux3jwh0fqfmun5gmfzt4nj33847vnatct4cnslzde3c",
    "id": "multiSig_createAddress"
}
```

### `multiSig_listAddressPublicKeys`
Lists all the public keys.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Array[String]* - List of all available public keys.

***Request Body:***

```json       
{
    "method": "multiSig_listAddressPublicKeys",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    ],
    "id": "multiSig_listAddressPublicKeys"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": [   
        "pub_key_1",
        "pub_key_2",
        "pub_key_3"    
    ],
    "id": "multiSig_listAddressPublicKeys"
}
```


### `multiSig_newSession`

Creates a new Session ID for a multiSig transaction.
:::warning 
Note:
This Session ID has to be used for other `multisig_**` method calls wherever necessary.
:::

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).
* *String* - Transaction ID created using [transaction_createRaw](#transaction_createRaw).
* *Array[String]* - Participating public keys.
* *String* - Self public key.

#### Returns
`result` : *String* - Generated Multisig Session ID.

***Request Body:***

```json       
{
    "method": "multiSig_newSession",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        },
        "907253450147293b98764987f73163d4ab8e33df1000665c81cefe2529bccb8f",
        [
        	"02a732fb6c34812ea5a46547344d63a360e22d0c4815c837af82a09de7b7fd9797",
            "02b57da2eea7b1415ebbf55e92f4eb4a3d57de38709383b57187e1b2cf2bb5cd93",
            "038b8aaaf8a0ae63b68f76b1b9b8aa4707026348194c9585e73340e1fb8f2cd675"
        ],
        "02a732fb6c34812ea5a46547344d63a360e22d0c4815c837af82a09de7b7fd9797"
    ],
    "id": "multiSig_newSession"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "9d2818717dcfd46a9b02ddfaa1aa7953f09bf17f179cbc33e566b22b7b78f44a",
    "id": "multiSig_newSession"
}
```

### `multiSig_nonce`
Retrieves current nonce value.

#### Parameters
* *String* - Session ID.
* *String* - Wallet authentication token.
 
#### Returns
`result` : *String* - Serialised nonce value.

***Request Body:***

```json       
{
    "method": "multiSig_nonce",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}"
    ],
    "id": "multiSig_nonce"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "4c50a36e804424f4df4e62958a08ec641846edc3374b499fc2bde81b20a4124b",
    "id": "multiSig_nonce"
}
```

### `multiSig_nonceCommitment`
Retrieves nonce commitment value.

#### Parameters
* *String* - Session ID.
* *String* - Wallet authentication token.

#### Returns
`result` : *String* - Serialised nonce commitment value.

***Request Body:***

```json       
{
    "method": "multiSig_nonceCommitment",
    "jsonrpc": "2.0",
    "params": [
    	"9d2818717dcfd46a9b02ddfaa1aa7953f09bf17f179cbc33e566b22b7b78f44a",
        "{{wallet_enckey}}"
    ],
    "id": "multiSig_nonceCommitment"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "d36e039866c62683511d09a488cd9912d4667650c57ed9a07ba07e631bc1046e",
    "id": "multiSig_nonceCommitment"
}
```

### `multiSig_partialSign`

Retrieves the partial signature value.

#### Parameters
* *String* - Session ID.
* *String* - Wallet authentication token.
 
#### Returns
`result` : *String* - Partial sign serialised value.

***Request Body:***

```json       
{
    "method": "multiSig_partialSign",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}"
    ],
    "id": "multiSig_partialSign"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "bb9ef8f4475d687fdfdca6d0a533487150df485caa68e379be10c54c7191f053",
    "id": "multiSig_partialSign"
}
```


### `multiSig_addPartialSignature`

Adds other party's partial signature.

#### Parameters
* *String* - Session ID.
* *String* - Wallet authentication token.
* *String* - Other party's Partial signature value. 
* *String* - Other party's public key.
 
#### Returns
`result` : *Object* - `null`.

***Request Body:***

```json       
{
    "method": "multiSig_addPartialSignature",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}",
        "bb9ef8f4475d687fdfdca6d0a533487150df485caa68e379be10c54c7191f053",
        "038b8aaaf8a0ae63b68f76b1b9b8aa4707026348194c9585e73340e1fb8f2cd675"
    ],
    "id": "multiSig_addPartialSignature"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "multiSig_addPartialSignature"
}
```

### `multiSig_signature`
Retrieves the signature value.

#### Parameters
* *String* - Session ID.
* *String* - Wallet authentication token.
 
#### Returns
`result` : *String* - Serialised multisig signature.

***Request Body:***

```json       
{
    "method": "multiSig_signature",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}"
    ],
    "id": "multiSig_signature"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "bfc34de977886baef8163ba1cba3cdbe32a9d2911eab7a4f64b7bae122fd91e732dceadcd618397f9f95f471ef99d9567d401f48a0a969f5ba8d92cbb4494e77",
    "id": "multiSig_signature"
}
```


### `multiSig_broadcastWithSignature`
Signs and broadcasts a multisig transaction.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md##WalletRequest).
* *String* - Session ID.
* *Object* - [Tx](./api-objects.md#tx). 
 
#### Returns
`result` : *String* - Transaction ID.

***Request Body:***

```json       
{
    "method": "multiSig_broadcastWithSignature",
    "jsonrpc": "2.0",
    "params": [
    	{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
        "{{session_id}}",
        "{{serialised_Tx_Object}}"
    ],
    "id": "multiSig_broadcastWithSignature"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "multiSig_broadcastWithSignature"
}
```

## TRANSACTION CREATOR
:::tip
Transaction methods.
:::
### `transaction_createRaw`

Creates a unsigned [RawTransaction](./api-objects.md#rawtransaction) with the inputs provided.

#### Parameters
* *Array[ [TxoPointer](./api-objects.md#txopointer) ]* - UTXO  inputs.
* *Array[ [TxOut](./api-objects.md#txout) ]* - Expected Outputs.
* *Array[String]* - List of view keys.
 
#### Returns
`result` : *Object* - [RawTransaction](./api-objects.md#rawtransaction)

***Request Body:***

```json  
{
    "method": "transaction_createRaw",
    "jsonrpc": "2.0",
    "params": [
        [
            {
                "id": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
                "index": 1
            },
            {
                "id": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
                "index": 0
            }
        ],
        [
            {
                "address": "dcro1apx48vm5qeh92tjuw22fde0yndvdzumc4sjugg3ajfmd3tc7259sk38uhk",
                "valid_from": null,
                "value": "499999999975771044"
            },
            {
                "address": "dcro1dxpj3qn7ljapew2w33mfdxcnhkqtsy22qtwdlh6tmh98wzhjdsrsxg4c24",
                "valid_from": null,
                "value": "996633"
            }
        ],
        []
    ],
    "id": "transaction_createRaw"
}
```

***Response Body:***
```json
{
    "jsonrpc": "2.0",
    "result": {
        "tx": {
            "attributes": {
                "allowed_view": [],
                "app_version": 1,
                "chain_hex_id": "AB"
            },
            "inputs": [
                {
                    "id": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
                    "index": 1
                },
                {
                    "id": "a3b37cf2e420cd10f7c325015a7f56d244be1d490c884fb5dcffab7b6814d421",
                    "index": 0
                }
            ],
            "outputs": [
                {
                    "address": "dcro1apx48vm5qeh92tjuw22fde0yndvdzumc4sjugg3ajfmd3tc7259sk38uhk",
                    "valid_from": null,
                    "value": "499999999975771044"
                },
                {
                    "address": "dcro1dxpj3qn7ljapew2w33mfdxcnhkqtsy22qtwdlh6tmh98wzhjdsrsxg4c24",
                    "valid_from": null,
                    "value": "996633"
                }
            ]
        },
        "tx_id": "f7b22d92839bc3082acb3442d924bcc107c8fe240bfbf4a885c43fdc7f389918"
    },
    "id": "transaction_createRaw"
}
```
