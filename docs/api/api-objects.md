# ClientRPC API Objects

This is a list of all the API Objects referenced [here](./client-rpc.md) as a return or request type.

## WalletRequest

Request parameter for authenticated calls.

| Key        | Type           | Value                         |
| ---------- | -------------- | ----------------------------- |
| **name**   | _Data_, String | Wallet name (Case-sensitive). |
| **enckey** | _Data_, String | Authentication token.         |

## SyncRequest

Response body received when RPC call fails.

| Key          | Type      | Value                                      |
| ------------ | --------- | ------------------------------------------ |
| **blocking** | _Boolean_ | Default: `true` - Toggle blocking mode.    |
| **reset**    | _Boolean_ | Default: `false` - Reset the sync process. |
| **do_loop**  | _Boolean_ | Default: `false` - Toggle looping.         |

## ErrorResponse

Response body received when a RPC call fails.

| Key         | Type              | Value                |
| ----------- | ----------------- | -------------------- |
| **code**    | _Quantity_, Int64 | Negative error code. |
| **message** | _Data_, String    | Failure reason.      |

## RunSyncResult

| Key          | Type                                                      | Value                              |
| ------------ | --------------------------------------------------------- | ---------------------------------- |
| **name**     | _Data_, String                                            | Wallet Name.                       |
| **message**  | _Data_, String                                            | Human readable status information. |
| **progress** | _Object_, [RunSyncProgressResult](#runsyncprogressresult) | Progress result.                   |

## RunSyncProgressResult

| Key         | Type               | Value                                         |
| ----------- | ------------------ | --------------------------------------------- |
| **current** | _Quantity_, UInt64 | current block number.                         |
| **end**     | _Quantity_, UInt64 | block number when the `sync` process ended.   |
| **message** | _Data_, String     | readable process description.                 |
| **name**    | _Data_, String     | Wallet name.                                  |
| **start**   | _Quantity_, UInt64 | block number when the `sync` process started. |
| **percent** | _Float_, Float32   | Percentage of wallet synced.                  |

## StatusResponse

| Key                | Type                                      | Value                  |
| ------------------ | ----------------------------------------- | ---------------------- |
| **sync_info**      | _Object_, [SyncInfo](#syncinfo)           | Sync information.      |
| **node_info**      | _Object_, [NodeInfo](#nodeinfo)           | Node information.      |
| **validator_info** | _Object_, [ValidatorInfo](#validatorinfo) | Validator information. |

## SyncInfo

| Key                     | Type                | Value                                                                                                                       |
| ----------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **latest_block_hash**   | _Data_, String      | Latest block hash.                                                                                                          |
| **latest_app_hash**     | _Data_, String      | Latest app hash.                                                                                                            |
| **latest_block_height** | _Quantity_, UInt64  | Latest block height.                                                                                                        |
| **latest_block_time**   | _TimeStamp_, String | Latest block time [Tendermint timestamps](https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#time) |
| **catching_up**         | _Boolean_           | Are we catching up with the network?.                                                                                       |

## NodeInfo

| Key                   | Type                                                  | Value                                              |
| --------------------- | ----------------------------------------------------- | -------------------------------------------------- |
| **id**                | _Quantity_, UInt8                                     | Node ID.                                           |
| **listen_addr**       | _Data_, String                                        | Listen Address.                                    |
| **network**           | _Data_, String                                        | Tendermint network / chain ID.                     |
| **version**           | _Quantity_, UInt64                                    | Tendermint Version.                                |
| **channels**          | _Data_, String                                        | Channel collections.                               |
| **moniker**           | _Data_, String                                        | Validator display names.                           |
| **other**             | _Data_, String                                        | Other status information.                          |
| **other.tx_index**    | _Data_, String                                        | TransactionIndexStatus can be `"on"` or `"off"`.   |
| **other.rpc_address** | _Data_, String                                        | default is `"tcp://127.0.0.1:26657"`, RPC address. |
| **protocol_version**  | _Object_, [ProtocolVersionInfo](#protocolversioninfo) | Protocol version information.                      |

## ValidatorInfo

| Key                   | Type           | Value                                                           |
| --------------------- | -------------- | --------------------------------------------------------------- |
| **address**           | _Data_, String | Validator account address.                                      |
| **pub_key**           | _Object_       | Validator public key.                                           |
| **pub_key.type**      | _Data_, String | Curve type : `Ed25519` .                                        |
| **pub_key.value**     | _Data_, String | Public keys allowed in Tendermint protocols.                    |
| **voting_power**      | _Data_, String | Validator voting power.                                         |
| **proposer_priority** | _Data_, String | Validator proposer priority, can be an integer value or `null`. |

## ProtocolVersionInfo

| Key       | Type               | Value                                |
| --------- | ------------------ | ------------------------------------ |
| **p2p**   | _Quantity_, Int64  | default: `7` , P2P protocol Version. |
| **block** | _Quantity_, UInt64 | Block Version.                       |
| **app**   | _Quantity_, UInt64 | App Version.                         |

## Genesis

| Key                  | Type                                     | Value                                                                                                                           |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **genesis_time**     | _Timestamp_, String                      | Time of Genesis, see [Tendermint timestamps](https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#time). |
| **chain_id**         | _Data_, String                           | Tendermint chain ID.                                                                                                            |
| **consensus_params** | _Object_, [Params](#params)              | Consensus parameters.                                                                                                           |
| **validators**       | _Array_, [ValidatorInfo](#validatorinfo) | Array of Validators.                                                                                                            |
| **app_hash**         | _Array_, Bytes 8                         | App hash.                                                                                                                       |
| **app_state**        | _Data_, String                           | The application state.                                                                                                          |

## Params

| Key           | Type                                                            | Value                           |
| ------------- | --------------------------------------------------------------- | ------------------------------- |
| **block**     | _Object_, [BlockSizeParams](#blocksizeparams)                   | Block size parameters.          |
| **evidence**  | _Object_, [EvidenceCollectionParams](#evidencecollectionparams) | Evidence collection parameters. |
| **validator** | _Data_, String                                                  | Consensus parameters.           |

## BlockSizeParams

| Key           | Type              | Value                                               |
| ------------- | ----------------- | --------------------------------------------------- |
| **max_bytes** | _Quantity_, UInt8 | Maximum number of bytes in a block                  |
| **max_gas**   | _Quantity_, Int64 | Maximum amount of gas which can be spent on a block |

## EvidenceCollectionParams

| Key                    | Type               | Value                                            |
| ---------------------- | ------------------ | ------------------------------------------------ |
| **max_age_num_blocks** | _Quantity_, UInt64 | Maximum allowed age for evidence to be collected |
| **max_age_duration**   | _Quantity_, UInt64 | Maximum age of evidence ( in nanoseconds)        |

## Tx

| Key            | Type                               | Value                                                                   |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| **inputs**     | _Array[[TxoPointer](#txopointer)]_ | previous transaction outputs to be spent.                               |
| **outputs**    | _Array[[TxOut](#txout)]_           | new transaction outputs.                                                |
| **attributes** | _Data_, String                     | versioning and network info + access info (who can see the TX content). |

## TxoPointer

| Key       | Type               | Value                                             |
| --------- | ------------------ | ------------------------------------------------- |
| **id**    | _Data_, String     | previous transaction identifier (Transaction ID). |
| **index** | _Quantity_, UInt16 | output index in the previous transaction.         |

## TxOut

| Key            | Type               | Value                                     |
| -------------- | ------------------ | ----------------------------------------- |
| **address**    | _Data_, String     | address to lock the output for.           |
| **value**      | _Quantity_, UInt64 | the amount to lock in base units.         |
| **valid_from** | _Quantity_, Uint64 | the optional timelock (Epoch in seconds). |

## CreateWalletRequest

| Key            | Type           | Value                                    |
| -------------- | -------------- | ---------------------------------------- |
| **name**       | _Data_, String | The name of the wallet (case-sensitive). |
| **passphrase** | _Data_, String | The passphrase for the wallet.           |

## UnspentTransactions

| Array Index | Type                                | Value                                     |
| ----------- | ----------------------------------- | ----------------------------------------- |
| **0**       | _Object_, [TxoPointer](#txopointer) | previous transaction outputs to be spent. |
| **1**       | _Object_, [TxOut](#txout)           | new transaction outputs.                  |

## TransactionChange

| Key                  | Type                                           | Value                                                                     |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| **transaction_id**   | _Data_, String                                 | Transaction ID.                                                           |
| **inputs**           | _Array[[TransactionInput](#TransactionInput)]_ | Transaction Input details.                                                |
| **outputs**          | _Array[[TxOut](#TxOut)]_                       | Transaction Outputs.                                                      |
| **fee_paid**         | _Quantity_, Uint64                             | Fee that was paid                                                         |
| **balance_change**   | _Enum_, [BalanceChange](#balancechange)        | Balance change caused by transaction. When no change value is `NoChange`. |
| **transaction_type** | _Enum_, String                                 | `Transfer`, `Withdraw`, `Unbond`,`Deposit`,`Unjail`,`Nodejoin`            |
| **block_height**     | _Quantity_, Uint64                             | Height of the block which has this transaction.                           |
| **block_time**       | _Timestamp_, String                            | Time of the block which has this transaction.                             |

## TransactionInput

| Key         | Type                                | Value                                      |
| ----------- | ----------------------------------- | ------------------------------------------ |
| **pointer** | _Object_, [TxoPointer](#txopointer) | Transaction ID.                            |
| **output**  | _Array[[TxOut](#txout)]_            | Details of unspent transaction (Optional). |

## BalanceChange

| Key                | Type               | Value                                                 |
| ------------------ | ------------------ | ----------------------------------------------------- |
| **Incoming**       | _Object_           | Incoming value. Represents balance addition.          |
| **Incoming.value** | _Quantity_, UInt64 | Changed amount.                                       |
| **Outgoing**       | _Object_           | Outgoing value and fee. Represents balance reduction. |
| **Outgoing.value** | _Quantity_, UInt64 | Amount changed.                                       |
| **NoChange**       | _Data_, String     | Indicates no change. Possible Value `NoChange`        |

## WalletInfo

| Key                       | Type            | Value                                                                             |
| ------------------------- | --------------- | --------------------------------------------------------------------------------- |
| **name**                  | _Data_, String  | Name of the wallet.                                                               |
| **wallet**                | _Data_, String  | Wallet meta data.                                                                 |
| **private_key**           | _Data_, String  | Private key of the view key pair.                                                 |
| **passphrase**            | _Data_, String  | (Optional) Passphrase used when importing wallet.                                 |
| **key_pairs**             | _Data_, String  | public_key -> encoded private_key pairs, private key is None for hardware wallet. |
| **key_chainpath**         | _Data_, String  | public_key -> hd path pairs for hardware wallet                                   |
| **hdkey**                 | _Data_, String  | hdkey for hd wallet and hw wallet.                                                |
| **multisig_address_pair** | _Data_, String  | hex encoded root_hash -> parity_scale_codec encoded multisig_address pairs.       |
| **staking_keys**          | _Array[String]_ | staking keys.                                                                     |

## RawTransaction

| Key       | Type                | Value                      |
| --------- | ------------------- | -------------------------- |
| **tx**    | _Object_, [Tx](#tx) | created Tx Object.         |
| **tx_id** | _Data_, String      | serialised transaction ID. |

## StakedState

| Key                   | Type                              | Value                                                              |
| --------------------- | --------------------------------- | ------------------------------------------------------------------ |
| **address**           | _Data_, String                    | The address used to check transaction withness against.            |
| **bonded**            | _Quantity_, Uint64                | Bonded amount used to determine voting power.                      |
| **node_meta**         | _Object_, [NodeState](#nodestate) | (optional) node metadata                                           |
| **last_slash**        | _Object_                          | (optional) record the last slash only for query or `null`          |
| **last_slash.kind**   | _Data_, String                    | Last slashing type. Possible Values: `NonLive` or `ByzantineFault` |
| **last_slash.time**   | _Timestamp_, String               | Last slashing time, in ISO format.                                 |
| **last_slash.amount** | _Quantity_, Uint64                | Last slashing amount                                               |
| **nonce**             | _Quantity_, Uint64                | "from" operations counter.                                         |
| **unbonded**          | _Quantity_, Uint64                | Amount unbonded for future withdrawal.                             |
| **unbonded_from**     | _TimeStamp_, Uint64               | Epoch(seconds) -time when unbonded amount can be withdrawn.        |

## NodeState

| Key               | Type                                       | Value                                                                             |
| ----------------- | ------------------------------------------ | --------------------------------------------------------------------------------- |
| **CouncilNode**   | _Object_, [CouncilNode](#validator)        | Information related to council nodes (validator metadata + keypackage from TDBE). |
| **CommunityNode** | _Object_, [CommunityNode](#nodecommoninfo) | Information related to community nodes (keypackage from TDBE).                    |

## Validator

| Key                               | Type                                                              | Value                                                                |
| --------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| **council_node**                  | _Object_                                                          | Council node metadata.                                               |
| **council_node.node_info**        | _Object_, [NodeCommonInfo](#nodecommoninfo)                       | Name, security contact and TDBE/MLS keypackage.                      |
| **council_node.consensus_pubkey** | _Object_, [TendermintValidatorPubKey](#tendermintvalidatorpubkey) | Tendermint consensus validator-associated public key.                |
| **jailed_until**                  | _Quantity_, Uint64                                                | (Optional) Block number to remain jailed or `null`.                  |
| **inactive_time**                 | _Quantity_, Uint64                                                | (Optional)Block time it became inactive (from block time) or `null`. |
| **inactive_block**                | _Quantity_, Uint64                                                | (Optional) Block number since inactivity or `null`.                  |

## NodeCommonInfo

| Key                                | Type           | Value                                    |
| ---------------------------------- | -------------- | ---------------------------------------- |
| **name**                           | _Data_, String | Reference name / moniker.                |
| **security_contact**               | _Data_, String | Optional email address.                  |
| **confidential_init**              | _Object_       | Serialized keypackage for MLS.           |
| **confidential_init.init_payload** | _Data_, String | MLS credential with attestation payload. |

## TendermintValidatorPubKey

| Key       | Type           | Value                                                                                            |
| --------- | -------------- | ------------------------------------------------------------------------------------------------ |
| **type**  | _Data_, String | [read here](https://docs.tendermint.com/master/spec/core/encoding.html#public-key-cryptography). |
| **value** | _Data_, String | base64 encoded value.                                                                            |



(TODO: RPC update )