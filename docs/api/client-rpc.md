# ClientRPC API Documentation

This document lists all the RPC methods available on top of the `client-rpc` component.

## Methods

:::tip
All the methods explained in this document assume the following settings.
:::

```bash
Method: POST
URL: http://localhost:26659/ 
Headers: Content-Type: application/json
```
* JSONRPC requests can be `POST`'d to the root RPC endpoint via HTTP. Example below:
```bash
curl --header "Content-Type: application/json" --request POST --data '{"method": "<<method_name>>", "params": ["5"], "id": 1}' localhost:26659
```
* In the examples used here 
    - `RPC_HOST_NAME` = `localhost`
    - `RPC_SERVER_PORT` = `26659`

Remember to change your `RPC_HOST_NAME` and `RPC_SERVER_PORT` (if different used).

* If any call fails the response `body` contains an `error` Object: [ErrorResponse](./api-objects.md#errorresponse)
* For all the API-Objects used here, refer [this page](./api-objects.md).
* To download available methods as a **POSTMAN** Collection, [click here](https://github.com/cdc-Hitesh/chain-docs/tree/master/docs/api/client-rpc-methods.postman_collection.json)

## INFORMATION

### `status`

Returns the current details of the network.

#### Parameters

`None`

#### Returns

`result` : *Object* - [StatusResponse](./api-objects.md#statusresponse) - target node details.

***Request Body***

```json
{
    "method": "status",
	"jsonrpc": "2.0",
	"params": [],
	"id": "status"
}
```

***Response***

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
Returns the Genesis information of the network.

#### Parameters
`None`

#### Returns

`result` : *Object* - [Genesis](./api-objects.md#genesis)

***Request Body***

```json       
{
	"method": "genesis",
	"jsonrpc": "2.0",
	"params": [],
	"id": "genesis"
}
```

***Response***

```json       
{
    "jsonrpc": "2.0",
    "result": {
            "app_hash": [
                66,
                66,
                56,
                51,
                51
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
                            "keypackage": "AAACAEEE...........HLLkeClTRJRLWM="
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
            "genesis_time": "2019-11-20T08:56:48.618137Z",
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

:::tip All Endpoints fall under the wallet management 
:::

### wallet_balance

Retrieve the balances attached with a wallet.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.

#### Returns
`result` : *Object* - Wallet Balance Object.
* `result.total` : *Uint64* - The total amount balance.
* `result.available` : *Uint64* - The available amount balance that can be currently used.
* `result.pending` : *Uint64* - The pending amount balance.

***Request Body***

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
        "available": "0",
        "pending": "0",
        "total": "0"
    },
    "id": "wallet_balance"
}
```

### `wallet_create`

Create a wallet.

#### Parameters

* [CreateWalletRequest](./api-objects.md#createwalletrequest) - *Object* - Wallet creation Object.
* *String* - Type of wallet to be created. Possible values are:
    - `Basic` : Basic wallet
    - `HD` : Create a Hierarchial Deterministic Wallet (12 word Mnemonic)
    - `HW` : Hardware Wallet ( eg. Ledger HW wallet series)
* *Uint32* (Optional)  - Mnemonic word count. Default `12`. 

#### Returns

`result` : *Array* - Wallet creation result.
* `result[0]` : *String* - Secret key or the Wallet authentication token.
* `result[1]` : *String(Optional)* - Generated mnemonic phrase (If `wallet_type` was `HD` or `HW`).

***Request Body***

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
        "7c9f15a30ba10767e.....3a87d609f73250c3f1a08104e8c8",
        "escape absent . . . . . .assault rhythm say spare"
    ],
    "id": "wallet_create"
}
```


### `wallet_createStakingAddress`

Create a Staking address.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.

#### Returns
`result` : *String* - Public address for staking account.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "0x78390b88c29a15dcb6fa0ba786063bfe4d3e74c0",
    "id": "wallet_create "
}
```


### `wallet_createStakingAddressBatch`

Create multiple staking address in a single call.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.
* *UInt32* - Number of staking address to create.

#### Returns
`result` : *UInt32* - Number of staking addresses created.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": 5,
    "id": "wallet_createStakingAddressBatch"
}
```


### `wallet_createWatchStakingAddress`

Create a Watch only Staking address.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.
* *String* - Public key used in Crypto.com Chain. [@ToDo - Any technical language to be put here?]

#### Returns
`result` : *String* - `Address` Generated Watch staking address.

***Body:***

```json       
{
	"method": "wallet_createWatchStakingAddress",
	"jsonrpc": "2.0",
	"params": [
        {
    		"name": "{{wallet_name}}",
    		"enckey": "{{wallet_enckey}}"
    	},
        "{{your_public_key}}"
    ],
	"id": "wallet_createWatchStakingAddress"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Generated Watch Staking addrss>>",
    "id": "wallet_createWatchStakingAddress"
}
```


### `wallet_createTransferAddress`
@Todo - Do we need to give hyperlink to what does these terms mean?


Create a Transfer address.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.

#### Returns
`result` : *String* - Transfer address generated as per CRO chain format.
 
***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "dcro1m45k4k366n6rfydpkfr62834t4tx0n63n8alwn99rm35u5he9qsq60hucv",
    "id": "wallet_createTransferAddress"
}
```

### `wallet_createTransferAddressBatch`
Create multiple `Transfer` type addresses in batch.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.
* *Uint32* - Number/count of `Transfer` type addresses to create.

#### Returns
`result` : *UInt32* - Number of `Transfer` addresses created successfully.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": 5,
    "id": "wallet_createTransferAddressBatch"
}
```




### `wallet_createWatchTransferAddress`
Create a Watch only Transfer type address.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.
* *String* - Public key used in Crypto.com Chain.

#### Returns
`result` : *String* - Generated Watch Transfer address.
 
***Body:***

```json       
{
	"method": "wallet_createWatchTransferAddress",
	"jsonrpc": "2.0",
	"params": [
        {
    		"name": "{{wallet_name}}",
    		"enckey": "{{wallet_enckey}}"
    	},
        "{{your_public_key}}"
    ],
	"id": "wallet_createWatchTransferAddress"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Generated Watch Transfer addrss>>",
    "id": "wallet_createWatchTransferAddress"
}
```

### wallet_getEncKey

Retrieve Wallet Encryption / Authentication token. Keep the token safe and it will be needed for all authorized commands.

#### Parameters
* [CreateWalletRequest](./api-objects.md#createwalletrequest) - *Object* - Wallet creation Object.

#### Returns
`result` : *String* - Wallet authentication token or Secret Key.

 
***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Wallet Authentication Key>>",
    "id": "wallet_createTransferAddress"
}
```

### `wallet_getViewKey`
Retrieve wallet's View key pair details.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request details.
* *Boolean* - if `true` returns the `private-key` else `public-key` of the view-key pair. 

#### Returns
`result` : *String* - `private` or `public` key as requested.

***Body:***

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


***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "7befc23ec5a9e.......3b995d156e488b3615d9e9e7c4",
    "id": "wallet_getViewKey"
}
```

### `wallet_list`

Retrieve all the wallets created on the JSON-RPC server.

#### Parameters
`None`

#### Returns
`result` : *Array* - List of all the wallet names created (*case-sensitive*).

***Body:***

```json       
{
    "method": "wallet_list",
    "jsonrpc": "2.0",
    "params": [],
    "id": "wallet_list"
}
```


***Response Body***
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

Retrieve all the Public keys attached to the wallet.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.

#### Returns
`result` : *Array(String)* - List of all `public-key` attached to the requested wallet.


***Body:***

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


***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "03ac4a6b1a14e848f...........699061ba5ef6c093ee30162fefc9317037d4a",
        "03a34bc9d9ffb53d5...........d352bccd0acabda957bc2a3e49a12499cd4b06"
    ],
    "id": "wallet_listPublicKeys"
}
```

### `wallet_listStakingAddresses`

Retrieve all the Staking addresses available.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *UInt32* - Offset value (to indicate the `cursor`).
* *Uint32* - Maximum number of records to fetch.
* *Boolean* - if `true` returns in reverse-chronological order. //@Todo - wording needs to change or ok?

#### Returns
`result` : *Array(String)* - List of all Staking addresses.

***Body:***

```json       
{
	"method": "wallet_listStakingAddresses",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        }
    //2, 100, false
    ],
	"id": "wallet_listStakingAddresses"
}
```


***Response Body***
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
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *UInt32* - Offset value.
* *Uint32* - Limit - Max number of records to fetch.
* *Boolean* - if `true` returns in reverse-chronological order. //@Todo - wording needs to change or ok?

#### Returns
`result` : *Array(String)* - List of all Transfer addresses created on the requested wallet.

***Body:***

```json       
{
	"method": "wallet_listTransferAddresses",
	"jsonrpc": "2.0",
	"params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        },
         2,
         100
    ],
	"id": "wallet_listTransferAddresses"
}
```


***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "dcro1v4zynd7mkx02yn6d.....ta8cfd5p06jsfh69uazqcm4grr",
        "dcro1m45k4k366n6rfydp...834t4tx0n63n8alwn99rm35u5he9qsq60hucv"
    ],
    "id": "wallet_listTransferAddresses"
}
```

### `wallet_listUTxO`

Retrieve all the available UTXOs for a given wallet.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.

#### Returns
`result` : *Array([UnspentTransactions](./api-objects.md#unspenttransactions))* - List of all available UTXOs for the wallet in request.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "id": "17622f7d719e7d7a3a41145b066cef8957c38a57228ac22e62f894ad5d681893",
            "index": 1
        },
        {
            "address": "tcro1keaw2rlwehw9sqnkq9cfjmj3cut2f0tt3sqy5d9l65hedj48t86s758uku",
            "valid_from": null,
            "value": "9999699998146"
        }
    ],
    "id": "wallet_listUTxO"
}
```

### `wallet_broadcastSignedTransferTx`

Broadcast a signed Transfer transaction to the blockchain.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *String* - Signed raw transaction. //@Todo: need to specify something specific here ?

#### Returns
`result` : *String* - Transaction ID (Hex Encoded). // @Todo: tx_id needs to be hyperlinked ?

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<HEX ENCODED TX_ID>>",
    "id": "wallet_broadcastSignedTransferTx"
}
```

### `wallet_restore`
Restores a `HD` or `HW` type wallet. //@Todo: need hyperlink ?

#### Parameters
* [CreateWalletRequest](./api-objects.md#createwalletrequest) - *Object* - Wallet Request Object.
* *String* - valid Mnemonic phrase. (eg. `alpha beta charlie .. . . . .  . zeta`)

#### Returns
`result` : *String* - Wallet Authentication Token or Secret Key. //@Todo : This is `enckey`, so hyperlink? 

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Wallet Authentication Token>>", //@Todo
    "id": "wallet_restore"
}
```

### `wallet_restoreBasic`

Restore a `Basic` type wallet. //@Todo - hyperlink needed to explain wallet types?

#### Parameters
* [CreateWalletRequest](./api-objects.md#createwalletrequest) - *Object* - Wallet Request Object.
* *String* - valid Private Key. //@Todo: need to explain private key with hyperlink?

#### Returns
`result` : *String* - Wallet Authentication Token or Secret Key.


***Body:***

```json       
{
    "method": "wallet_restoreBasic",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "passphrase": "{{wallet_passphrase}}"
        },
        "<< Wallet Private Key >>"
    ],
    "id": "wallet_restoreBasic"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Wallet Authentication Token>>",
    "id": "wallet_restoreBasic"
}
```

### `wallet_delete`
Delete a wallet. 

#### Parameters
* [CreateWalletRequest](./api-objects.md#createwalletrequest) - *Object* - CreateWallet Request Object.

#### Returns
`result` : *null*


***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "wallet_delete"
}
```

### `wallet_sendToAddress`
Send a `Transfer` type transaction from a wallet.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *String* - Destination/To Address.
* *Uint64* - Amount to send in base unit (to be Stringified).
* *Array(String)* - (Optional) List of View Keys.

#### Returns
`result` : *String* - Transaction ID. 


***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "wallet_sendToAddress"
}
```

### `wallet_buildRawTransferTx`
Create a raw transaction to be broadcasted separately at [wallet_broadcastSignedTransferTx](#wallet_broadcastSignedTransferTx) endpoint.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *String* - Destination/To Address.
* *Uint64* - Amount to send in base unit.
* *Array(String)* - List of View Keys.

#### Returns
`result` : *String* - Base64 encoded raw transaction. 

***Body:***

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
		499999999999994999,
		[]
	],
	"id": "wallet_buildRawTransferTx"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Raw transaction HEX string>>",
    "id": "wallet_sendToAddress"
}
```


### `wallet_transactions`

Retrieves all transactions on the wallet.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *UInt32* - Offset value.
* *Uint32* - Limit - Max number of records to fetch.
* *Boolean* - set `true` to return transactions in *latest-first* fashion. //@Todo - change the sentence ?

#### Returns
`result` : *Array[ [TransactionChange](./api-objects.md#transactionchange) ]* - List of all transactions on the requested wallet. 

***Body:***

```json       
{
	"method": "wallet_transactions",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		10,
		100,
		false
	],
	"id": "wallet_transactions"
}
```
@Todo fill the response
***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": [],
    "id": "wallet_transactions"
}
```

### `wallet_exportTransaction`
Returns encoded transaction for a `tx_id` requested.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *String* - Transaction ID.

#### Returns
`result` : *String* - Encoded Raw Transaction.


***Body:***

```json       
{
	"method": "wallet_exportTransaction",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"<<TX_ID here>>"
	],
	"id": "wallet_exportTransaction"
}
```
@Todo
***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<encoded_transaction_raw here>>",
    "id": "wallet_exportTransaction"
}
```

### `wallet_export`
Returns the Wallet details.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.

#### Returns
`result` : *Object* - [WalletInfo](./api-objects.md#walletinfo) - Wallet related details.

***Body:***

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

***Response Body***
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
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* *String* - encoded raw transaction.

#### Returns
`result` : *Quantity*, String - Amount of the transaction.


***Body:***

```json       
{
	"method": "wallet_importTransaction",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
        }
        , "encoded_tx_goes_here"
	],
	"id": "wallet_importTransaction"
}
```
@ToDo
***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": 5568,
    "id": "wallet_importTransaction"
}
```

### `wallet_import`

Imports a [WalletInfo](./api-objects.md#walletinfo) Object on the full node. Use [wallet_export](#wallet_export)

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Request Object.
* [WalletInfo](./api-objects.md#walletinfo) - *Object* - Wallet Info Object

#### Returns
`result` : *Data*, String - Wallet Authentication token or SecKey. //@Todo: change here


***Body:***

```json       
{
	"method": "wallet_import",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
        }
        , {
        "hdkey": "AQcAAAACAAAAAQAAAAEBdPhLdcuo8wJPKO3hyKBOQyOKLU2BRUDQoVIOZlI81431Pd6OWNVIAgFx5x5TmioTBAFZLI+xvFztVGSjjWSA/g==",
        "key_chainpath": "AA==",
        "key_pairs": "CAUBBKNLyL1kIgljmzt7gDZ7fEsfZtFYHnvXZ0iJNCzrvUXdHQXDH6HyPjjX0aUq",
        "multisig_address_pair": "CAEBNjU0NDQ5Yjdnz1GZ+/dMpR7jTlL5KCCjS8nZ/7U9WtSYXxB201K8zQrKvalXvCo+SaEkmc1LBgEAAAAAAAAAAAAAAAAAAAA=",
        "name": "test_account",
        "passphrase": null,
        "private_key": "gHvvwqvI7mV0VbkiLNhXZ6efE",
        "wallet": "BQEETqp27JejrjeIjRUPkeH9VuTlfT4S2gX6lBN9F50TdaWraOtT0NJGhskelHjVdVmfPUZn790ylHuNOUvkoIAE="
    }
	],
	"id": "wallet_import"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<< WALLET AUTHENTICATION TOKEN or SECKEY >>",
    "id": "wallet_import"
}
```

## STAKING

All staking related endpoints.

###  `staking_state`
Returns the current state of the Staked Address.

#### Parameters
* *String* - Name of the wallet.
* *String* - Staked State Address value.

#### Returns
`result` : *Object*, [StakedState](./api-objects.md#stakedstate) - represents the StakedState (account involved in staking).

***Body:***

```json       
{
	"method": "staking_state",
	"jsonrpc": "2.0",
	"params": [
        "{{name}}",
		"{{staking_address}}"
	],
	"id": "staking_state"
}
```
@Todo: Body here
***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": {
        "nonce": 12,
        "bonded" : 20020202,
        "unbonded" : 23423423,
        .
        .
    },
    "id": "staking_state"
}
```


###  `staking_unbondStake`
Endpoint used for staking unbonded tokens.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest) - Wallet authentication object.
* *String* - Staking Address.
* *String* - Amount to stake (Max value: `Uint64`).

#### Returns
`result` : *String* - Transaction ID of the blockchain submitted transaction.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "staking_unbondStake"
}
```


###  `staking_depositAmountStake`

Depositing the staked amount to a recipient staking address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest) - Wallet authentication object.
* *String* - To/recipient Address.
* *UInt64* - Amount to deposit in base unit.

#### Returns
`result` : *String* - Transaction ID of the blockchain submitted transaction.

***Body:***

```json       
{
	"method": "staking_depositAmountStake",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"{{recipient_address}}",
		"500000000000000000"
	],
	"id": "staking_depositAmountStake"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "staking_depositAmountStake"
}
```

###  `staking_withdrawAllUnbondedStake`

Withdraws all unbonded tokens to a destination transfer address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest) - Wallet authentication object.
* *String* - `from` Address.
* *String* - `to` Address.
* *Array* - (Optional) List of view keys.

#### Returns
`result` : *String* - Transaction ID of the blockchain submitted transaction.


***Body:***

```json       
{
	"method": "staking_withdrawAllUnbondedStake",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"{{from_address}}",
		"{{to_address}}",
		[ "{{Optional_view_key_1}}",  "{{Optional_view_key_1}}" ]
	],
	"id": "staking_withdrawAllUnbondedStake"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "staking_withdrawAllUnbondedStake"
}
```

###  `staking_depositStake`
Deposit staked tokens to an address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest) - Wallet authentication object.
* *String* - `to` Address.
* *Array([TxoPointer](./api-objects.md#txopointer))* - List of UTXOs.

#### Returns
`result` : *String* - Transaction ID of the blockchain submitted transaction.

***Body:***

```json       
{
	"method": "staking_depositStake",
	"jsonrpc": "2.0",
	"params": [
		{
			"name": "{{wallet_name}}",
			"enckey": "{{wallet_enckey}}"
		},
		"{{staking_address}}",
		[
			{
				"id": "5c40805013482d6c293a09b0f6aa532cbd338bf127c0954f1960d608262b5115",
				"index": 0
			}
		]
	],
	"id": "staking_depositStake"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "staking_depositStake"
}
```

###  `staking_unjail`
Initiate the unjailing process for a `jailed` staking address.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest) - Wallet authentication object.
* *String* - Address to be unjailed.

#### Returns
`result` : *String* - Transaction ID of the blockchain submitted transaction.

***Body:***

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

***Response Body***
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
* *Object* - [WalletRequest](./api-objects.md#walletrequest) - Wallet authentication object.
* *String* - Validator Node Name (Display).
* *String* - Validator Public key.
* *String* - Staking address.
* *String* - KeyPackage data. //@Todo: Do we neeed to link how to retrieve that in the first place.

#### Returns
`result` : *String* - Transaction ID of the blockchain submitted transaction.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<tx_id>>",
    "id": "staking_validatorNodeJoin"
}
```

## SYNC
:::tip
Wallet synchronization available methods.
:::

###  `sync`
Starts the `sync` process on the wallet.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.
* [SyncRequest](./api-objects.md#syncrequest) - *Object* - SyncRequest parameters.

#### Returns
`result` : *Object* - [RunSyncResult](./api-objects.md#runsyncresult)

***Request Body***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": {
        "message": "started sync wallet",
        "name": "hitesh",
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
[WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.

#### Returns
`result` : *Object* - [RunSyncProgressResult](./api-objects.md#runsyncprogressresult)

***Request Body***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
	"result": {
        "current": 205880,
        "end": 660789,
        "message": "sync {{wallet_name}} progress 15.003485 percent  205880 125580~660789",
        "name": "{{wallet_name}}",
        "percent": 15.003484725952148,
        "start": 125580
    },
	"id": "sync_progress"
}
```

###  `sync_stop`

Stop the `sync` process (if any).

#### Parameters
[WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Information.

#### Returns
`result` : *Object* - `null`

***Request Body***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
	"result": null,
	"id": "sync_stop"
}
```

## MULTISIG
:::tip
All multisignature related RPC Methods.
:::

### `multiSig_addNonce`
Adds a nonce to the multisig wallet session.

#### Parameters
* *String* - multisig session id.
* *String* - Wallet authentication key.
* *String* - Nonce value retrieved from [multiSig_nonce](#multiSig_nonce).
* *String* - Public key of the account.
 
#### Returns
`result` : *Object* - `null`

***Body:***

```json  
{
    "method": "multiSig_addNonce",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey or SecKey}}",
        "{{nonce_value}}",
        "02b2a02cb8eacc6a0602a976b6a2dcd6924b68120b42c9843cdd6191606d0a1350"
    ],
    "id": "multiSig_addNonce"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "multiSig_addNonce"
}
```

### `multiSig_addNonceCommitment`

Commits a nonce for a multisig transaction.

#### Parameters
* *String* - Session ID retrieved after creating a new session.
* *String* - Wallet authentication key.
* *String* - Value retrieved from [multiSig_nonceCommitment](#multiSig_nonceCommitment) 
* *String* - Signer's public key
 
#### Returns
`result` : *Object* - `null`

***Body:***

```json       
{
    "method": "multiSig_addNonceCommitment",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}",
        "{{nonce commitment value}}",
        "{{merchant_public_key}}"
    ],
    "id": "multiSig_addNonceCommitment"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "multiSig_addNonceCommitment"
}
```

### `multiSig_createAddress`
It can be used to create a `m-of-n` multisig wallet. Where `m` is the minimum number of signatures required, `n` is the total number of parties.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.
* *Array(String)* - An array of valid participating public keys
* *String* - Requestor's public key
* *Number* - Positive integer representing the number of minimum signatures required.  

#### Returns
`result` : *String* - Generated Multisig Address.

***Request Body***

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
        	"{{publicKey_1}}",
            "{{publicKey_2}}",
            "{{publicKey_3}}"
        ],
        "{{public_key}}",
        2 // M
    ],
    "id": "multiSig_createAddress"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "02ef2a........b3fd9776b6"
    ],
    "id": 67
}
```

### `multiSig_listAddressPublicKeys`
Lists all the public keys belonging to a wallet.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md#walletrequest).

#### Returns
`result` : *Array(String)* - List of all available `public_key` available on the requested wallet.

***Body:***

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

***Response Body***
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

### `wallet_listPublicKeys`
Alias to the `multiSig_newAddressPublicKey` which lists all the available public keys.

#### Parameters
[WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.

#### Returns
`result` : *Array(String)* - Available public keys.

***Request Body***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "02ef2a........b3fd9776b6"
    ],
    "id": "multiSig_listAddressPublicKeys"
}
```


### `multiSig_newSession`

Create a new session ID for a multiSig transaction.

#### Parameters
* [WalletRequest](./api-objects.md#walletrequest) - *Object* - Wallet Authentication Object.
* *String* - Message to pass
* *Array(String)* - An array of valid participating public keys
* *String* - Signer's public key

#### Returns
`result` : *String* - session id (To be used as `mulisig_session_id`).

***Body:***

```json       
{
    "method": "multiSig_newSession",
    "jsonrpc": "2.0",
    "params": [
        {
            "name": "{{wallet_name}}",
            "enckey": "{{wallet_enckey}}"
        },
        "{{transaction_message}}",
        [
        	"{{merchant_public_key}}",
            "{{public_key}}"
        ],
        "{{public_key}}"
    ],
    "id": "multiSig_newSession"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "{{multisig_session_id}}",
    "id": "multiSig_newSession"
}
```

### `multiSig_nonce`
Requests a new nonce for the multisig transaction.

#### Parameters
* *String* - Session ID retrieved after creating a new session.
* *String* - Wallet authentication key.
 
#### Returns
`result` : *String* - Serialised nonce value.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<serialised_nonce>>",
    "id": "multiSig_nonce"
}
```

### `multiSig_nonceCommitment`
Create a new nonce commitment for a `multisig_session_id`.

#### Parameters
* *String* - multisig Session ID obtained from [multiSig_newSession](#multiSig_newSession).
* *String* - Wallet ENC Key.

#### Returns
`result` : *String* - Serialised nonce commitment value.

***Body:***

```json       
{
    "method": "multiSig_nonceCommitment",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}"
    ],
    "id": "multiSig_nonceCommitment"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<serialised_nonce_commitment",
    "id": "multiSig_nonceCommitment"
}
```

### `multiSig_partialSign`

Initiate a new multisig partial signature for a multisig_session.

#### Parameters
* *String* - Session ID retrieved after creating a new session.
* *String* - Wallet authentication key.
 
#### Returns
`result` : *String* - Partial sign serialised value.

***Body:***

```json       
{
    "method": "multiSig_partialSign",
    "jsonrpc": "2.0",
    "params": [
    	"{{multisig_session_id}}",
        "{{wallet_enc_key}}"
    ],
    "id": "multiSig_partialSign"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<serialised_partial_sign",
    "id": "multiSig_partialSign"
}
```


### `multiSig_addPartialSignature`

Adds a partial signature to a multisig_transaction.

#### Parameters
* *String* - Session ID retrieved after creating a new session.
* *String* - Wallet authentication key.
* *String* - Partial signature value retrieved from [multiSig_partialSign](#multiSig_partialSign) 
* *String* - Signer's public key
 
#### Returns
`result` : *Object* - `null`.

***Body:***

```json       
{
    "method": "multiSig_addPartialSignature",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}",
        "{{partial signature value}}",
        "{{signer public key}}"
    ],
    "id": "multiSig_addPartialSignature"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": null,
    "id": "multiSig_addPartialSignature"
}
```

### `multiSig_signature`
Start applying the multisig signature process.

#### Parameters
* *String* - Session ID retrieved from [multiSig_newSession](#multiSig_newSession).
* *String* - Wallet authentication key.
 
#### Returns
`result` : *String* - multisig_Signature value.

***Body:***

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

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<serialised multisig signature initiation>>",
    "id": "multiSig_signature"
}
```


### `multiSig_broadcastWithSignature`
Signs a provided unsigned transaction and broadcast it to the blockchain.

#### Parameters
* *Object* - [WalletRequest](./api-objects.md##WalletRequest)
* *String* - Session ID retrieved from [multiSig_newSession](#multiSig_newSession).
* *Object* - [Tx](./api-objects.md#tx) - Unsigned TX object. //@todo: is it ok?
 
#### Returns
`result` : *String* - `tx_id` or Transaction ID after submission.

***Body: //@Todo : complete body below***

```json       
{
    "method": "multiSig_broadcastWithSignature",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}"
    ],
    "id": "multiSig_broadcastWithSignature"
}
```

***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": "<<Tx_ID>>",
    "id": "multiSig_broadcastWithSignature"
}
```

## TRANSACTION CREATOR

### `transaction_createRaw`

Creates a unsigned [RawTransaction](./api-objects.md#rawtransaction) with the inputs provided.

#### Parameters
* *Array([TxoPointer](./api-objects.md#txopointer))* - UTXO  inputs.
* *Array([TxOut](./api-objects.md#txout))* - Expected Outputs.
* *Array* - List of View keys to be used.
 
#### Returns
`result` : *Object* - [RawTransaction](./api-objects.md#rawtransaction)

***@Todo :Complete body below Body:***

```json  
{
    "method": "transaction_createRaw",
    "jsonrpc": "2.0",
    "params": [
    	"{{session_id}}",
        "{{wallet_enckey}}",
        "02b2a02cb8eacc6a0602a976b6a2dcd6924b68120b42c9843cdd6191606d0a1350",
        "{{merchant_public_key}}"
    ],
    "id": "transaction_createRaw"
}
```

//@todo: complete response
***Response Body***
```json
{
    "jsonrpc": "2.0",
    "result": [
        "02ef2a........b3fd9776b6"
    ],
    "id": "transaction_createRaw"
}
```
