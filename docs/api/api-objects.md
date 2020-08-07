# ClientRPC API Objects

This is a list of all the API Objects referenced on the main document as a return or request type.

## WalletRequest

Request parameter for authenticated calls.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Quantity*, String   | Wallet name (Case-sensitive)              |
| **enckey**             | *Data*, String | Authentication token received after creating a new wallet.    |

## SyncRequest

Response body received when RPC call fails.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **blocking**           | *Boolean*   |  Enable `true` or `false` to indicate request blocking mode. Default: `true`    |
| **reset**             | *Boolean* | Default: `false` reset the sync process.    |
| **do_loop**             | *Boolean* | Default: `false` Looping enabled for auto    |

## ErrorResponse

Response body received when RPC call fails.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **code**           | *Quantity*, Integer   | Negative integer value depicting the nature of error (Varies as per error)    |
| **message**             | *Data*, String | Failure reason returned from RPC server    |

## RunSyncResult
Returns on successful call for ().

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String   | Wallet Name  |
| **message**             | *Data*, String | Human readable status information    |
| **progress**             | *Object*, [RunSyncProgressResult](#RunSyncProgressResult) | Failure reason returned from RPC server    |

## RunSyncProgressResult


| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **current**           | *Integer*, UnsignedInt64   | !!! block number when the `sync` process started   |
| **end**             |  *Integer*, UnsignedInt64 | !!! block number when the `sync` process started   |
| **message**             | *Data*, String | readable process description  |
| **name**             | *Data*, String | Wallet name    |
| **percent**             | *Float*, Float32 | current percentage of wallet synced    |
| **start**             |  *Integer*, UnsignedInt64 | block number when the `sync` process started    |

## StatusResponse
Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **sync_info**             |  *Object*, [NodeInfo](#NodeInfo) | Refer to the Object details.   |
| **node_info**           | *Object*, [SyncInfo](#SyncInfo)   | Refer to the Object details.   |
| **validator_info**             | *Object*, [ValidatorInfo](#ValidatorInfo)  | Refer to the Object details. |

## SyncInfo
Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **latest_block_hash**           | *Data*, String   | Latest block hash (#Hash)   |
| **latest_app_hash**             |  *Data*, String | Latest app hash (#Hash)  |
| **latest_block_height**             | *Number*, UnsignedInt64 | Latest block height |
| **latest_block_time**             |  *TimeStamp*, String | Latest block time [Tendermint timestamps](https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#time)  |
| **catching_up**             | *Boolean* | Are we catching up witht the network?  |

## NodeInfo
Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **id**           | *Integer*, UnsignedInt8   | Node ID  |
| **listen_addr**             |  *Data*, String | Listen Address  |
| **network**             | *Data*, String | Tendermint network / chain ID |
| **version**             |  *Integer*, UnsignedInt64 | Tendermint Version   |
| **channels**             | *Data*, String | Channel collections  |
| **moniker**             | *Data*, String | Validator display names  |
| **other**            | *Data*, String | Other status information |
| **other.tx_index**            | *Data*, String | TransactionIndexStatus can be `"on"` or  `"off"` |
| **other.rpc_address**            | *Data*, String |default is `"tcp://127.0.0.1:26657"`, RPC address |
| **protocol_version**             | *Object*, [ProtocolVersionInfo](#ProtocolVersionInfo) | Protocol version information |

## ValidatorInfo
Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **address**           | *Data*, String   | Validator account address  |
| **pub_key**             |  *Object* | Validator public key  |
| **pub_key.type**             |  *Data*, String | Curve type : `Ed25519`   |
| **pub_key.value**             |  *Data*, String | Public keys allowed in Tendermint protocols  |
| **voting_power**             | *Data*, String | Validator voting power  |
| **proposer_priority**             |  *Data*, String | Validator proposer priority Can be an integer value or `null`   |



## ProtocolVersionInfo

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **p2p**           | *Integer*, Int64   | default: 7 , P2P protocol Version |
| **block**             |  *Integer*, UnsignedInt64| Block Version |
| **app**             |  *Integer*, UnsignedInt64 | App Version   |

## Genesis
Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **genesis_time**           | *Timestamp*, String   | Time of Genesis. [Tendermint timestamps](https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#time) |
| **chain_id**             |  *Data*, String | Tendermint chain ID  |
| **consensus_params**             | *Object*, [Params](#Params) | Consensus parameters |
| **validators**             |  *Array*, [ValidatorInfo](#ValidatorInfo) | Array of Validators   |
| **app_hash**             | *Array*, Bytes 8 | App hash  |
| **app_state**             | *Data*, String | The application state  |


## Params
Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **block**           | *Object*, [BlockSizeParams](#BlockSizeParams)   | Block size parameters  |
| **evidence**             |  *Object*, [EvidenceCollectionParams](#EvidenceCollectionParams) | Evidence collection parameters  |
| **validator**             | *Data*, String | Consensus parameters |


## BlockSizeParams

Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **max_bytes**           | *Number*, UnsignedInt8   | Maximum number of bytes in a block  |
| **max_gas**             |  *Number*, Int64 | Maximum amount of gas which can be spent on a block |


## EvidenceCollectionParams

Returned on status query.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **max_age_num_blocks**           | *Number*, UnsignedInt64  | Maximum allowed age for evidence to be collected  |
| **max_age_duration**             |  *Nubmer*, UnsignedInt64 | Max age duration |

## Tx
A Transaction containing tx inputs and tx outputs.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **inputs**           | *Array*, [TxoPointer](#TxoPointer)   | previous transaction outputs to be spent  |
| **outputs**             |  *Array*, [TxOut](#TxOut) | new transaction outputs |
| **attributes**             | *Data*, String | versioning and network info + access info (who can see the TX content) |

## TxoPointer

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **id**           | *Data*, String   | the previous transaction identifier (Transaction ID)  |
| **index**             |  *QUANTITY*, UInt16 | the output index in the previous transaction. |

## TxOut
Tx Output composed of an address and a coin value

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **address**           | *Data*, String   | address to lock the output for. |
| **value**             |  *QUANTITY*, UInt64 | the amount to lock in base units. |
| **valid_from**             |  *QUANTITY*, Uint64 | the optional timelock (Timestamp EPOCH in seconds). |

## CreateWalletRequest
information needed when create/delete a wallet

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String   | The name of the wallet (case-sensitive). |
| **passphrase**             |  *Data*, String | The passphrase for the wallet. |

## UnspentTransactions
Array of available UTXOs on a wallet.

| Array Index                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **0**           | *Object*, [TxoPointer](#TxoPointer)   | previous transaction outputs to be spent. |
| **1**             |  *Object*, [TxOut](#Txout) | new transaction outputs. |

## TransactionChange

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **transaction_id**           | *Data*, String   | Transaction ID  |
| **inputs**             |  *Array*, [TransactionInput](#TransactionInput)  | Transaction Input details.  |
| **outputs**             |  *Array*, [TxOut](#TxOut) | Transaction Outputs.   |
| **fee_paid**             |  *Quantity*, Uint64 | Fee that was paid  |
| **balance_change**             | *Enum*, [BalanceChange](#BalanceChange) | Balance change caused by transaction. When no change value is `NoChange`  |
| **transaction_type**             |  *ENUM*, String | `Transfer`, `Withdraw`, `Unbond`,`Deposit`,`Unjail`,`Nodejoin`  |
| **block_height**             | *Quantity*, Uint64 | Height of the block which has this transaction  |
| **block_time**             |  *Timestamp*, String | Time of the block which has this transaction |

## TransactionInput

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **pointer**           | *Object*, [TxoPointer](#TxoPointer)   | Transaction ID  |
| **output**             |  *Array(Optional)*, [TxOut](#TxOut)  | Details of unspent transaction (if available)  |

## BalanceChange
`Enum` for indicating the balance change related information

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **Incoming**           | *Object*  | Incoming value. Represents balance addition. |
| **Incoming.value**           | *Quantity*, UInt64   | amount changed |
| **Outgoing**             |  *Object*  | Outgoing value and fee. Represents balance reduction.  |
| **Outgoing.value**             |  *Quantity*, UInt64  | Amount changed.  |
| **NoChange**             |  *String*  | Indicates no change. Possible Value `NoChange`  |

## WalletInfo
Wallet information to export and import.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String  | Name of the wallet. |
| **wallet**           | *Data*, String  | Wallet meta data. |
| **private_key**             |  *Data*, String  | Private key of the view key pair.  |
| **passphrase**             |  *Data*, String  | (Optional) Passphrase used when importing wallet.  |
| **key_pairs**             |  *Data*, String  | public_key -> encoded private_key pairs, private key is None for hardware wallet|
| **key_chainpath**             |  *Data*, String  | public_key -> hd path pairs for hardware wallet|
| **hdkey**             |  *Data*, String  | hdkey for hd wallet and hw wallet|
| **multisig_address_pair**             |  *Data*, String  | hex encoded root_hash -> parity_scale_codec encoded multisig_address pairs|
| **staking_keys**             |  *Array*, Array[String]  | staking keys|

## RawTransaction

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **tx**           | *Object*, [Tx](#Tx)  | created Tx Object. |
| **tx_id**           | *Data*, String   | serialised transaction ID. |


## StakedState
Wallet information to export and import.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **nonce**           | *Quantity*, Uint64  | "from" operations counter. |
| **bonded**           | *Quantity*, Uint64  | bonded amount used to determine voting power. |
| **unbonded**             |  *Quantity*, Uint64  | Amount unbonded for future withdrawal.  |
| **unbonded_from**             |  *TimeStamp*, String  | time when unbonded amount can be withdrawn.|
| **address**             |  *Data*, String  | The address used to check transaction withness against.|
| **node_meta**             |  *Object*, [NodeState](#NodeState)  | (optional) node metadata|
| **last_slash**             |  *Object*  | (optional) record the last slash only for query|
| **last_slash.kind**             |  *Data*, String  | Why reason? Possible Values: `NonLive` or `ByzantineFault`|
| **last_slash.time**             |  *Timestamp*, String  | Timestamp ISO Format|
| **last_slash.amount**             |  *Quantity*, Uint64  | How much amount |

## NodeState

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **nonce**           | *Quantity*, Uint64  | "from" operations counter. |
| **bonded**           | *Quantity*, Uint64  | bonded amount used to determine voting power. |
| **unbonded**             |  *Quantity*, Uint64  | Amount unbonded for future withdrawal.  |
| **unbonded_from**             |  *TimeStamp*, String  | time when unbonded amount can be withdrawn.|
| **address**             |  *Data*, String  | The address used to check transaction withness against.|
| **node_meta**             |  *Object*, [NodeState](#NodeState)  | (optional) node metadata|
| **last_slash**             |  *Object*  | (optional) record the last slash only for query|
| **last_slash.kind**             |  *Data*, String  | Why reason? Possible Values: `NonLive` or `ByzantineFault`|
| **last_slash.time**             |  *Timestamp*, String  | Timestamp ISO Format|
| **last_slash.amount**             |  *Quantity*, Uint64  | How much amount |
