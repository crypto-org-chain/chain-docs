# ClientRPC API Objects

This is a list of all the API Objects referenced [here](./client-rpc.md) as a return or request type.

## WalletRequest

Request parameter for authenticated calls.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String   | Wallet name (Case-sensitive).              |
| **enckey**             | *Data*, String | Authentication token.    |

## SyncRequest

Response body received when RPC call fails.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **blocking**           | *Boolean*   |  Default: `true` - Toggle blocking mode.   |
| **reset**             | *Boolean* | Default: `false` - Reset the sync process.    |
| **do_loop**             | *Boolean* | Default: `false` - Toggle looping.    |

## ErrorResponse

Response body received when a RPC call fails.

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **code**           | *Quantity*, Int64   | Negative error code.    |
| **message**             | *Data*, String | Failure reason.    |

## RunSyncResult

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String   | Wallet Name.  |
| **message**             | *Data*, String | Human readable status information.    |
| **progress**             | *Object*, [RunSyncProgressResult](#runsyncprogressresult) | Progress result.    |

## RunSyncProgressResult


| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **current**           | *Quantity*, UInt64   | current block number.   |
| **end**             |  *Quantity*, UInt64 |  block number when the `sync` process ended.   |
| **message**             | *Data*, String | readable process description.  |
| **name**             | *Data*, String | Wallet name.    |
| **start**             |  *Quantity*, UInt64 | block number when the `sync` process started.    |
| **percent**             | *Float*, Float32 | Percentage of wallet synced.    |

## StatusResponse

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **sync_info**             |  *Object*, [SyncInfo](#syncinfo) | Sync information.   |
| **node_info**           | *Object*, [NodeInfo](#nodeinfo)   | Node information.   |
| **validator_info**             | *Object*, [ValidatorInfo](#validatorinfo)  | Validator information. |

## SyncInfo

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **latest_block_hash**           | *Data*, String   | Latest block hash.   |
| **latest_app_hash**             |  *Data*, String | Latest app hash.  |
| **latest_block_height**             | *Quantity*, UInt64 | Latest block height. |
| **latest_block_time**             |  *TimeStamp*, String | Latest block time [Tendermint timestamps](https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#time)  |
| **catching_up**             | *Boolean* | Are we catching up with the network?.  |

## NodeInfo

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **id**           | *Quantity*, UInt8   | Node ID.  |
| **listen_addr**             |  *Data*, String | Listen Address.  |
| **network**             | *Data*, String | Tendermint network / chain ID. |
| **version**             |  *Quantity*, UInt64 | Tendermint Version.   |
| **channels**             | *Data*, String | Channel collections.  |
| **moniker**             | *Data*, String | Validator display names.  |
| **other**            | *Data*, String | Other status information. |
| **other.tx_index**            | *Data*, String | TransactionIndexStatus can be `"on"` or  `"off"`. |
| **other.rpc_address**            | *Data*, String |default is `"tcp://127.0.0.1:26657"`, RPC address. |
| **protocol_version**             | *Object*, [ProtocolVersionInfo](#protocolversioninfo) | Protocol version information. |

## ValidatorInfo

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **address**       | *Data*, String   | Validator account address.  |
| **pub_key**         |  *Object* | Validator public key.  |
| **pub_key.type**       |  *Data*, String | Curve type : `Ed25519` .  |
| **pub_key.value**   |  *Data*, String | Public keys allowed in Tendermint protocols.  |
| **voting_power**       | *Data*, String | Validator voting power.  |
| **proposer_priority**      |  *Data*, String | Validator proposer priority, can be an integer value or `null`.   |



## ProtocolVersionInfo

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **p2p**           | *Quantity*, Int64   | default: `7` , P2P protocol Version. |
| **block**             |  *Quantity*, UInt64| Block Version. |
| **app**             |  *Quantity*, UInt64 | App Version.   |

## Genesis

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **genesis_time**           | *Timestamp*, String   | Time of Genesis, see [Tendermint timestamps](https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#time). |
| **chain_id**             |  *Data*, String | Tendermint chain ID.  |
| **consensus_params**             | *Object*, [Params](#params) | Consensus parameters. |
| **validators**             |  *Array*, [ValidatorInfo](#validatorinfo) | Array of Validators.   |
| **app_hash**             | *Array*, Bytes 8 | App hash.  |
| **app_state**             | *Data*, String | The application state.  |


## Params

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **block**           | *Object*, [BlockSizeParams](#blocksizeparams)   | Block size parameters.  |
| **evidence**             |  *Object*, [EvidenceCollectionParams](#evidencecollectionparams) | Evidence collection parameters.  |
| **validator**             | *Data*, String | Consensus parameters. |


## BlockSizeParams


| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **max_bytes**           | *Quantity*, UInt8   | Maximum number of bytes in a block  |
| **max_gas**             |  *Quantity*, Int64 | Maximum amount of gas which can be spent on a block |


## EvidenceCollectionParams


| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **max_age_num_blocks**           | *Quantity*, UInt64  | Maximum allowed age for evidence to be collected  |
| **max_age_duration**             |  *Quantity*, UInt64 | Maximum age of evidence ( in nanoseconds)|

## Tx

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **inputs**           | *Array[[TxoPointer](#txopointer)]*   | previous transaction outputs to be spent.  |
| **outputs**             |  *Array[[TxOut](#txout)]* | new transaction outputs. |
| **attributes**             | *Data*, String | versioning and network info + access info (who can see the TX content). |

## TxoPointer

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **id**           | *Data*, String   | previous transaction identifier (Transaction ID).  |
| **index**             |  *Quantity*, UInt16 |  output index in the previous transaction. |

## TxOut

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **address**           | *Data*, String   | address to lock the output for. |
| **value**             |  *Quantity*, UInt64 | the amount to lock in base units. |
| **valid_from**             |  *Quantity*, Uint64 | the optional timelock (Epoch in seconds). |

## CreateWalletRequest

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String   | The name of the wallet (case-sensitive). |
| **passphrase**             |  *Data*, String | The passphrase for the wallet. |

## UnspentTransactions

| Array Index                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **0**           | *Object*, [TxoPointer](#txopointer)   | previous transaction outputs to be spent. |
| **1**             |  *Object*, [TxOut](#txout) | new transaction outputs. |

## TransactionChange

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **transaction_id**           | *Data*, String   | Transaction ID.  |
| **inputs**             |  *Array[[TransactionInput](#TransactionInput)]*  | Transaction Input details.  |
| **outputs**             |  *Array[[TxOut](#TxOut)]* | Transaction Outputs.   |
| **fee_paid**             |  *Quantity*, Uint64 | Fee that was paid  |
| **balance_change**             | *Enum*, [BalanceChange](#balancechange) | Balance change caused by transaction. When no change value is `NoChange`.  |
| **transaction_type**             |  *Enum*, String | `Transfer`, `Withdraw`, `Unbond`,`Deposit`,`Unjail`,`Nodejoin`  |
| **block_height**             | *Quantity*, Uint64 | Height of the block which has this transaction.  |
| **block_time**             |  *Timestamp*, String | Time of the block which has this transaction. |

## TransactionInput

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **pointer**           | *Object*, [TxoPointer](#txopointer)   | Transaction ID.  |
| **output**             |  *Array[[TxOut](#txout)]*  | Details of unspent transaction (Optional).  |

## BalanceChange

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **Incoming**           | *Object*  | Incoming value. Represents balance addition. |
| **Incoming.value**           | *Quantity*, UInt64   | Changed amount. |
| **Outgoing**             |  *Object*  | Outgoing value and fee. Represents balance reduction.  |
| **Outgoing.value**             |  *Quantity*, UInt64  | Amount changed.  |
| **NoChange**             |  *Data*, String  | Indicates no change. Possible Value `NoChange`  |

## WalletInfo

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String  | Name of the wallet. |
| **wallet**           | *Data*, String  | Wallet meta data. |
| **private_key**             |  *Data*, String  | Private key of the view key pair.  |
| **passphrase**             |  *Data*, String  | (Optional) Passphrase used when importing wallet.  |
| **key_pairs**             |  *Data*, String  | public_key -> encoded private_key pairs, private key is None for hardware wallet.|
| **key_chainpath**             |  *Data*, String  | public_key -> hd path pairs for hardware wallet|
| **hdkey**             |  *Data*, String  | hdkey for hd wallet and hw wallet.|
| **multisig_address_pair**             |  *Data*, String  | hex encoded root_hash -> parity_scale_codec encoded multisig_address pairs.|
| **staking_keys**             |  *Array[String]*  | staking keys.|

## RawTransaction

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **tx**           | *Object*, [Tx](#tx)  | created Tx Object. |
| **tx_id**           | *Data*, String   | serialised transaction ID. |


## StakedState

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **address**             |  *Data*, String  | The address used to check transaction withness against.|
| **bonded**           | *Quantity*, Uint64  | Bonded amount used to determine voting power. |
| **node_meta**             |  *Object*, [NodeState](#nodestate)  | (optional) node metadata|
| **last_slash**             |  *Object*  | (optional) record the last slash only for query or `null`|
| **last_slash.kind**             |  *Data*, String  | Last slashing type. Possible Values: `NonLive` or `ByzantineFault`|
| **last_slash.time**             |  *Timestamp*, String  | Last slashing time, in ISO format.|
| **last_slash.amount**             |  *Quantity*, Uint64  | Last slashing amount |
| **nonce**           | *Quantity*, Uint64  | "from" operations counter. |
| **unbonded**             |  *Quantity*, Uint64  | Amount unbonded for future withdrawal.  |
| **unbonded_from**             |  *TimeStamp*, Uint64  | Epoch(seconds) -time when unbonded amount can be withdrawn.|

## NodeState
| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **CouncilNode**           | *Object*, [CouncilNode](#validator)  | Information related to council nodes (validator metadata + keypackage from TDBE). |
| **CommunityNode**           | *Object*, [CommunityNode](#nodecommoninfo)  | Information related to community nodes (keypackage from TDBE). |

## Validator

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **council_node**           | *Object*  | Council node metadata. |
| **council_node.node_info**           | *Object*, [NodeCommonInfo](#nodecommoninfo)  | Name, security contact and TDBE/MLS keypackage. |
| **council_node.consensus_pubkey**           | *Object*, [TendermintValidatorPubKey](#tendermintvalidatorpubkey)  | Tendermint consensus validator-associated public key. |
| **jailed_until**           | *Quantity*, Uint64  | (Optional) Block number to remain jailed or `null`. |
| **inactive_time**             |  *Quantity*, Uint64  | (Optional)Block time it became inactive (from block time) or `null`.|
| **inactive_block**             |  *Quantity*, Uint64  | (Optional) Block number since inactivity or `null`.  |

## NodeCommonInfo

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **name**           | *Data*, String  | Reference name / moniker. |
| **security_contact**           | *Data*, String  | Optional email address. |
| **confidential_init**           | *Object*  | Serialized keypackage for MLS. |
| **confidential_init.init_payload**           | *Data*, String  | MLS credential with attestation payload. |

## TendermintValidatorPubKey

| Key                  | Type                  | Value                                                              |
|----------------------|--------------------------------|--------------------------------------------------------------------|
| **type**           | *Data*, String  | [read here](https://docs.tendermint.com/master/spec/blockchain/encoding.html). |
| **value**           | *Data*, String  | base64 encoded value. |
