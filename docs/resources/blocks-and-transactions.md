# Crypto.org Chain Blocks and Transactions

This document describes the block and transaction structure of the Crypto.org Chain and explains different ways to extract and parse the details of them.

## Table of Content

- [Crypto.org Chain Blocks and Transactions](#cryptoorg-chain-blocks-and-transactions)
  - [Table of Content](#table-of-content)
  - [Common APIs](#common-apis)
    - [1. Tendermint Block API](#_1-tendermint-block-api)
    - [2. Tendermint Block Results API](#_2-tendermint-block-results-api)
    - [3. Cosmos Transaction Query API](#_3-cosmos-transaction-query-api)
    - [4. Cosmos Transaction Search API](#_4-cosmos-transaction-search-api)
  - [Common Block Details](#common-block-details)
    - [1. Mint](#_1-mint)
    - [2. Block Rewards](#_2-block-rewards)
    - [3. Proposer Rewards](#_3-proposer-rewards)
    - [4. Commissions](#_4-commissions)
  - [Common Transaction Details](#common-transaction-details)
    - [1. Block Height](#_1-block-height)
    - [2. Transaction Hash](#_2-transaction-hash)
    - [3. Transaction Fee](#_3-transaction-fee)
    - [4. Assets and Amount](#_4-assets-and-amount)
      - [1. Single object](#_1-single-object)
      - [2. Array](#_2-array)
      - [3. String](#_3-string)
  - [Bank](#bank)
    - [1. MsgSend](#_1-msgsend)
    - [2. MsgMultiSend](#_2-msgmultisend)
  - [Distribution](#distribution)
    - [1. MsgSetWithdrawAddress](#_1-msgsetwithdrawaddress)
    - [2. MsgWithdrawDelegatorReward](#_2-msgwithdrawdelegatorreward)
    - [3. MsgWithdrawValidatorCommission](#_3-msgwithdrawvalidatorcommission)
    - [4. MsgFundCommunityPool](#_4-msgfundcommunitypool)
  - [Staking](#staking)
    - [1. MsgCreateValidator](#_1-msgcreatevalidator)
    - [2. MsgEditValidator](#_2-msgeditvalidator)
    - [3. MsgDelegate](#_3-msgdelegate)
    - [4. MsgBeginRedelegate](#_4-msgbeginredelegate)
    - [5. MsgUndelegate](#_5-msgundelegate)
    - [5b. Upon MsgUndelegate completed](#_5b-upon-msgundelegate-completed)
  - [Slashing](#slashing)
    - [1. MsgUnjail](#_1-msgunjail)
    - [2. Being Jailed and Slashed](#_2-being-jailed-and-slashed)
      - [Liveness](#liveness)
      - [Double Sign](#double-sign)
      - [Limitations](#limitations)
  - [Governance](#governance)
    - [1. MsgSubmitProposal](#_1-msgsubmitproposal)
    - [1b. Community Pool Spend Proposal](#_1b-community-pool-spend-proposal)
    - [2. MsgDeposit](#_2-msgdeposit)
    - [2a. Burn Proposal's Deposit if Proposal does not Get Enough Deposit](#_2a-burn-proposals-deposit-if-proposal-does-not-get-enough-deposit)
    - [2b. Return Proposal's Deposit](#_2b-return-proposals-deposit)
    - [2c. Burn Proposal's Deposit](#_2c-burn-proposals-deposit)
    - [3. MsgVote](#_3-msgvote)
    - [4. Proposal Result](#_4-proposal-result)
  - [Appendix: Module Accounts on Mainnet](#appendix-module-accounts-on-mainnet)

## Common APIs

### Tendermint

## Common APIs

### Tendermint

### 1. Tendermint Block API

- URL: https://mainnet.crypto.org:26657/block?height=[height]
- This API returns block details, a list of _transaction bytes_ and _consensus commits_.
::: tip Example: Checking the block at height `10000` of the mainnet:

 [https://mainnet.crypto.org:26657/block?height=10000](https://mainnet.crypto.org:26657/block?height=10000)

 :::

### 2. Tendermint Block Results API

- URL: https://mainnet.crypto.org:26657/block_results?height=[height]
- This API returns the events of the block. These events include the outcomes from transactions, and block changes such as block rewards minted (`"mint"`) and distributed as well as consensus state updates such as validator missing block counts (`"liveness"`)

::: tip Example: Checking the block result of height `10000` of the mainnet:

 [https://mainnet.crypto.org:26657/block_results?height=10000](https://mainnet.crypto.org:26657/block_results?height=10000)

:::

### Cosmos

### 3. Cosmos Transaction Query API

- [URL format:] https://mainnet.crypto.org:1317/comsos/tx/v1beta1/txs/[Transaction_Hash]
- This API returns the parsed transaction details and events of a particular transaction hash
- **Example**: https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/0C5E617B0577B047D78EBF5313B8B70DF69E9535E17B964303BD04947B11B660

### 4. Cosmos Transaction Search API

- URL: https://mainnet.crypto.org:1317/comsos/tx/v1beta1/txs
- This API support event based query and returns parsed transactions. Common events include:

| Event                           | Description                                                                                                                                            | Example                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tx.height                       | Transaction(s) in a particular block                                                                                                                   | [txs?events=tx.height%3D10000](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs?events=tx.height%3D10000)                                                                                              |
| message.module & message.action | Search for messages belonged to a particular module and actions. _Note that this index will degrade when more transaction of its kind grows in number_ | [txs?events=message.module%3D%27bank%27&events=message.action%3D%27send%27](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs?events=message.module%3D%27bank%27&events=message.action%3D%27send%27)    |
| message.sender                  | Search for message with particular signer                                                                                                              | [/txs?events=message.sender=%27cro18undzhe3fmmav2x3csx8m00m5yupkcc7qzz4ec%27](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs?events=message.sender=%27cro18undzhe3fmmav2x3csx8m00m5yupkcc7qzz4ec%27) |

**Note**:

1. The API supports pagination, make sure you have iterate all the pages `pagination.offset=[offset starting from 0]&pagination.limit=[record per page]`
2. The performance will degrade if you are searching for a result set that will grow over time. For example, if we search for events that grow with the block height, such as validator's reward distrubtion.
3. Multiple events in a single search is queried by `AND` condition. i.e If you do `tx.height` and `message.sender`. It will search for transactions that happened on that particular block height **AND** signed by the sender.

[Top](#table-of-content)

## Common Block Details

Most of the block events can be accessed using the [Tendermint Block Results API](#_2-tendermint-block-results-api). One caveat of using this API is that all the events key-value attributes are base64 encoded. Therefore it is **non-human readable**.

A simple Node.js tool has been written to help parse and decode all key-value attributes in the block results API response. It can be downloaded at [https://github.com/calvinaco/cosmos-api-tools](https://github.com/calvinaco/cosmos-api-tools).

::: tip Usage example:


```bash
$ git clone https://github.com/calvinaco/cosmos-api-tools
$ cd cosmos-api-tools
$ node block-results-decoder.js "https://mainnet.crypto.org:26657/block_results?height=10000"
```
:::
Note that when you integrate with the API you should still base64 decode the attributes programmatically.

### 1. Mint

In every block, CRO is minted and offered to the active validators and their delegators as block rewards. The actual minted token is subject to inflation and is adjusted every block. Further details on the miniting parameters and configuration can be found [here](https://crypto.org/docs/chain-details/module_overview.html#mint).

Minted tokens are distributed as block and proposer rewards in the same block. However, since Cosmos SDK do the [lazy rewards calculation and collection](https://docs.cosmos.network/master/modules/distribution/), the minted tokens are first sent to "Distribution" module account and is later transferred to an account when a deleagtor withdraws the rewards or commissions by sending a [MsgWithdrawDelegatorReward](#_2-msgwithdrawdelegatorreward) or [MsgWithdrawValidatorCommission](#_3-msgwithdrawvalidatorcommission).

So [Block Rewards](#_2-block-rewards), [Proposer Rewards](#_3-proposer-rewards) and [Commissions](#_4-commissions) events are for record-keeping only and do not represent any actual token transfer between accounts.

To get the minted token every block:

| Accessor                                                                                                                                                                                                                                                                             | Type                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| `Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`Base64Decode(result.begin_block_events[event_index].type) === "mint" && Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].key) === "amount"` | [Asset String](#asset-string) |

### 2. Block Rewards

In every block, mint tokens and transaction fees are distributed to every active validator in the network. As a result, there will be multiple events, each corresponding to a validator and the rewards it receives.

Block rewards are **not** credited to the delegator account directly. This event serves as a record-keeping purpose only. Each delegator account must explicitly send a [MsgWithdrawDelegatorReward](#_2-msgwithdrawdelegatorreward) message transaction to collect the rewards.

To get the reward **per validator**:

| Detail            | Accessor                                                                                                                                                                                                                                                                                   | Type                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Validator Address | `Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`Base64Decode(result.begin_block_events[event_index].type) === "rewards" && Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].key) === "validator"` | [Asset String](#asset-string) |
| Reward Amount     | `Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`Base64Decode(result.begin_block_events[event_index].type) === "rewards" && Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].key) === "amount"`    | String                        |

### 3. Proposer Rewards

Block proposers can get extra transaction fees bonus for the block they have successfully proposed. More details can be found [here](https://crypto.org/docs/chain-details/module_overview.html#transaction-fees-bonus) for reference.

Similar to block rewards, proposer rewards are **not** credited to the account directly. This event serve as record keeping purpose only. Each validator creator account must explicitly send a [MsgWithdrawDelegatorReward](#_3-msgwithdrawvalidatorcommission) message transaction to collect the rewards.

| Detail            | Accessor                                                                                                                                                                                                                                                                                           | Type                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Validator Address | `Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`Base64Decode(result.begin_block_events[event_index].type) === "proposer_reward" && Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].key) === "validator"` | [Asset String](#asset-string) |
| Reward Amount     | `Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`Base64Decode(result.begin_block_events[event_index].type) === "proposer_reward" && Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].key) === "amount"`    | String                        |

### 4. Commissions

Validator can charge commission to the block rewards received by delegators. Commissions is already included in [Block Rewards](#_2-block-rewards) and [Proposer Rewards](#_3-proposer-rewards)

Similar to block rewards, commission rewards are **not** credited to the account directly. This event serves as a record-keeping purpose only. Each validator creator account must explicitly send a [MsgWithdrawValidatorCommission](#msg-withdraw-validator-commission) message transaction to collect the rewards.

To get the commission received by **each validator**:

| Detail            | Accessor                                                                                                                                                                                                                                                                                   | Type                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Validator Address | `Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`Base64Decode(result.begin_block_events[event_index].type) === "rewards" && Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].key) === "validator"` | [Asset String](#asset-string) |
| Commission Amount | `Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`Base64Decode(result.begin_block_events[event_index].type) === "rewards" && Base64Decode(result.begin_block_events[event_index].attributes[attribute_index].key) === "amount"`    | String                        |

[Top](#table-of-content)

## Common Transaction Details

### 1. Block Height

- [Tendermint Block API](#_1-tendermint-block-api): `result.block.header.height`
- [Tendermint Block Results API](#_2-blocktendermint-block-results-api): `result.height`
- [Cosmos Transaction Query API](#_3-cosmos-transaction-query-api): `tx_response.height`
- [Cosmos Transaction Search API](#_4-cosmos-transaction-search-api): `tx_response[index].height`

### 2. Transaction Hash

- [Tendermint Block API](#_1-tendermint-block-api): `Uppercase(SHA256(Base64Decode(result.block.data.txs[index])))`
- [Tendermint Block Results API](#_2-blocktendermint-block-results-api): Not available, should use [Tendermint Block API](#tendermint-block-api). Match transaction `[index]` in `result.txs_results` with `result.block.data.txs[index]`
- [Cosmos Transaction Query API](#_3-cosmos-transaction-query-api): `tx_response.txhash`
- [Cosmos Transaction Search API](#_4-cosmos-transaction-search-api): `tx_response[index].txhash`

### 3. Transaction Fee

- [Cosmos Transaction Query API](#_3-cosmos-transaction-query-api): `tx.auth_info.fee.amount`
- [Cosmos Transaction Search API](#_4-cosmos-transaction-search-api): `tx[index].auth_info.fee.amount`

Transaction fee is an [Asset Array](#_2-array), meaning that a transaction can pay fee in more than one token types.

### 4. Assets and Amount

There are mainly two types of assets and amount representation:

#### 1. Single object

This is commonly seen in `staking` module but may appear in other module as well. It represents a single token type.

**Example**

```json
{
  "denom": "basecro",
  "amount": "10000"
}
```

where `denom` is the asset type and `amount` is the amount and `basecro` is the basic unit of CRO token (where 10^8 `basecro` = 1 cro)

Note that the `amount` is always in string for precision accuracy. Please make sure your language is capable to handle big integer number.It is highly recommended to use library similar to [bignumber.js](https://mikemcl.github.io/bignumber.js/) in your language to handle the `amount`.

<!-- omit in toc -->



#### 2. Array

This is commonly seen in most message types. It represents a list of tokens.

At the time of writing there will only be a single entry in this array because `basecro` (or `basetcro` in Croeseid Testnet) is the only supported asset on Crypto.org Chain. However, after IBC transfer and other coins issuance methods are enabled, there will be more asset types, the coin source tracing and their denomination can be found in [here](https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-001-coin-source-tracing.md)

**Example**:

```json
[
  {
    "denom": "basecro",
    "amount": "10000"
  },
  {
    "denom": "apple",
    "amount": "1000"
  }
]
```

Each object in the array has the same format as [Single Object](#_1-single-object).

#### 3. String

This is commonly seen in events' attributes of block and transaction.

**Example**:

```json
{
  "key": "amount",
  "value": "1234basecro,5678apple"
}
```

[Top](#table-of-content)

## Bank

### 1. MsgSend

- **Descriptions:**  Simple transfer message

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf Structure

```go
type MsgSend struct {
	FromAddress string                                   `protobuf:"bytes,1,opt,name=from_address,json=fromAddress,proto3" json:"from_address,omitempty" yaml:"from_address"`
	ToAddress   string                                   `protobuf:"bytes,2,opt,name=to_address,json=toAddress,proto3" json:"to_address,omitempty" yaml:"to_address"`
	Amount      github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,3,rep,name=amount,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"amount"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/0C5E617B0577B047D78EBF5313B8B70DF69E9535E17B964303BD04947B11B660](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/0C5E617B0577B047D78EBF5313B8B70DF69E9535E17B964303BD04947B11B660)

<!-- omit in toc -->

#### Details

| Detail           | Accessor                                                                      | Type                        |
| ---------------- | ----------------------------------------------------------------------------- | --------------------------- |
| Transaction Type | `tx.body.messages[message_index]["@type"] === "/cosmos.bank.v1beta1.MsgSend"` | String                      |
| From address     | `tx.body.messages[message_index].from_address`                                | String                      |
| To address       | `tx.body.messages[message_index].to_address`                                  | String                      |
| Amount           | `tx.body.messages[message_index].amount`                                      | [Asset Array](#_2-array) |

### 2. MsgMultiSend

- **Descriptions:** Multiple inputs, multiple outputs transfer message.

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgMultiSend struct {
	Inputs  []Input  `protobuf:"bytes,1,rep,name=inputs,proto3" json:"inputs"`
	Outputs []Output `protobuf:"bytes,2,rep,name=outputs,proto3" json:"outputs"`
}
type Input struct {
	Address string                                   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Coins   github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=coins,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"coins"`
}
type Output struct {
	Address string                                   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Coins   github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=coins,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"coins"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/6CD89C9F32A4F4E918B2BCD722A9429693E3372E3F882BA4A460F2588A2EE0B3](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/6CD89C9F32A4F4E918B2BCD722A9429693E3372E3F882BA4A460F2588A2EE0B3)

<!-- omit in toc -->

#### Details

| Detail           | Accessor                                                                                                                                                 | Type                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Transaction Type | `tx.body.messages[message_index]["@type"] === "/cosmos.bank.v1beta1.MsgMultiSend"`                                                                       | String                      |
| From Addresses   | `tx.body.messages[message_index].inputs[m].address` where `m>=1`. There can be multiple (`m`) from addresses.                                            | String                      |
| From Amounts     | `tx.body.messages[message_index].inputs[m].coins` where `m>=1`. There can be multiple (`m`) from addresses and their corresponding input amount.         | [Asset Array](#_2-array) |
| To Addresses     | `tx.body.messages[message_index].outputs[n].address` where `n>=1`. There can be multiple (`n`) destination addresses.                                    | String                      |
| To Amounts       | `tx.body.messages[message_index].outputs[n].coins` where `n>=1`. There can be multiple (`n`) destination addresses and their corresponding input amount. | [Asset Array](#_2-array) |

## Distribution

### 1. MsgSetWithdrawAddress

- **Descriptions:** Sets the withdraw address for a delegator (or validator self-delegation)

- Funds movement: No (Pay for fee only)

<!-- omit in toc -->

#### Protobuf

```go
type MsgSetWithdrawAddress struct {
	DelegatorAddress string `protobuf:"bytes,1,opt,name=delegator_address,json=delegatorAddress,proto3" json:"delegator_address,omitempty" yaml:"delegator_address"`
	WithdrawAddress  string `protobuf:"bytes,2,opt,name=withdraw_address,json=withdrawAddress,proto3" json:"withdraw_address,omitempty" yaml:"withdraw_address"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/D4FCC8E1403677157D367A88A0832B9E411BDC4E029954FC133DB60296CF3DE3](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/D4FCC8E1403677157D367A88A0832B9E411BDC4E029954FC133DB60296CF3DE3)

<!-- omit in toc -->

#### Details

TODO

### 2. MsgWithdrawDelegatorReward

- **Descriptions:** Withdraw delegation rewards from a single validator

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgWithdrawDelegatorReward struct {
	DelegatorAddress string `protobuf:"bytes,1,opt,name=delegator_address,json=delegatorAddress,proto3" json:"delegator_address,omitempty" yaml:"delegator_address"`
	ValidatorAddress string `protobuf:"bytes,2,opt,name=validator_address,json=validatorAddress,proto3" json:"validator_address,omitempty" yaml:"validator_address"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/3B36AA1AC81ACD58E7A06C21353DB0FC40A70EDBF6BD2CD23D7BEDC7A0F56318](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/3B36AA1AC81ACD58E7A06C21353DB0FC40A70EDBF6BD2CD23D7BEDC7A0F56318)

<!-- omit in toc -->

#### Details

| Detail                  | Accessor                                                                                                                                                                                                                                                                                    | Type                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Transaction Type        | `tx.body.messages[message_index]["@type"] === "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"`                                                                                                                                                                                    | String                        |
| Delegator               | `tx.body.messages[message_index].delegator_address`                                                                                                                                                                                                                                         | String                        |
| Withdraw From Validator | `tx.body.messages[message_index].validator_address`                                                                                                                                                                                                                                         | String                        |
| Withdraw To Address     | `tx_response.logs[message_index].events[event_index].attributes[attribute_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "recipient"`. | String                        |
| Withdraw Reward Amount  | `tx_response.logs[message_index].events[event_index].attributes[attribute_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "amount"`.    | [Asset String](#asset-string) |

### 3. MsgWithdrawValidatorCommission

- **Descriptions:** : Withdraws the full commission of a validator to the validator creator (initial delegator) address.
- Funds movement: Yes

<!-- omit in toc -->

#### Protofbuf

```json
type MsgWithdrawValidatorCommission struct {
	ValidatorAddress string `protobuf:"bytes,1,opt,name=validator_address,json=validatorAddress,proto3" json:"validator_address,omitempty" yaml:"validator_address"`
}
```

<!-- omit in toc -->

#### Example

- Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/3739F76EF67A61D6F0163A5B177EA64ED80B67D9AEF8435C525913E69026D320](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/3739F76EF67A61D6F0163A5B177EA64ED80B67D9AEF8435C525913E69026D320)
- Message Index: `1`

<!-- omit in toc -->

#### Details

This transaction will trigger an internal transfer from the "Distribution" module account to the withdraw to address. Note that the "Distribution" module account is an internal account in Crypto.org Chain to hold the rewards, commissions and community pool funds before they are being distributed.

The "Distribution" module account is different on different chain. In Crypto.org Chain Mainnet, it is [cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w).

| Detail                     | Accessor                                                                                                                                                                                                                                                                                    | Type                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Transaction Type           | `tx.body.messages[message_index]["@type"] === "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission"`                                                                                                                                                                                | String                        |
| Validator                  | `tx.body.messages[message_index].validator_address`                                                                                                                                                                                                                                         | String                        |
| Withdraw From Validator    | `tx.body.messages[message_index].validator_address`                                                                                                                                                                                                                                         | String                        |
| Withdraw To Address        | `tx_response.logs[message_index].events[event_index].attributes[attribute_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "recipient"`. | String                        |
| Withdraw Commission Amount | `tx_response.logs[message_index].events[event_index].attributes[m].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "amount"`.                  | [Asset String](#_3-string) |

### 4. MsgFundCommunityPool

- **Descriptions:** : Fund from an account to the community pool. The community pool can later be sent to another by submitting a MsgSubmitEcProposal

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgFundCommunityPool struct {
	Amount    github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,1,rep,name=amount,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"amount"`
	Depositor string                                   `protobuf:"bytes,2,opt,name=depositor,proto3" json:"depositor,omitempty"`
}
```

<!-- omit in toc -->

#### Example: A transaction funding the community pool
[https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/7C1747E0189DCA88BBA55A1720809C8DF6075799C11ECBE4C4E1F89C91D4F55F](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/7C1747E0189DCA88BBA55A1720809C8DF6075799C11ECBE4C4E1F89C91D4F55F)

<!-- omit in toc -->

#### Details

This transaction will initiate a transfer from an account to the "Distribution" module account. Note that the "Distribution" module account is an internal account in Crypto.org Chain to hold the rewards, commissions and community pool funds before they are being distributed.

Ths "Distribution" module account is different on different chain. In Crypto.org Chain Mainnet, it is [cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w).

| Detail                                              | Accessor                                                                                                                                                                                                                                                                                    | Type                        |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Transaction Type                                    | `tx.body.messages[message_index]["@type"] === "/cosmos.distribution.v1beta1.MsgFundCommunityPool"`                                                                                                                                                                                          | String                      |
| Deposit From Account                                | `tx.body.messages[message_index].depositor`                                                                                                                                                                                                                                                 | String                      |
| Deposit Amount                                      | `tx.body.messages[message_index].amount`                                                                                                                                                                                                                                                    | [Asset Array](#_2-array) |
| Delegate To Address ("Distribution" module account) | `tx_response.logs[message_index].events[event_index].attributes[attribute_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "recipient"`. | String                      |

[Top](#table-of-content)

## Staking

### 1. MsgCreateValidator

- **Descriptions:** : Create a new validator

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgCreateValidator struct {
	Description       Description                            `protobuf:"bytes,1,opt,name=description,proto3" json:"description"`
	Commission        CommissionRates                        `protobuf:"bytes,2,opt,name=commission,proto3" json:"commission"`
	MinSelfDelegation github_com_cosmos_cosmos_sdk_types.Int `protobuf:"bytes,3,opt,name=min_self_delegation,json=minSelfDelegation,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Int" json:"min_self_delegation" yaml:"min_self_delegation"`
	DelegatorAddress  string                                 `protobuf:"bytes,4,opt,name=delegator_address,json=delegatorAddress,proto3" json:"delegator_address,omitempty" yaml:"delegator_address"`
	ValidatorAddress  string                                 `protobuf:"bytes,5,opt,name=validator_address,json=validatorAddress,proto3" json:"validator_address,omitempty" yaml:"validator_address"`
	Pubkey            *types.Any                             `protobuf:"bytes,6,opt,name=pubkey,proto3" json:"pubkey,omitempty"`
	Value             types1.Coin                            `protobuf:"bytes,7,opt,name=value,proto3" json:"value"`
}

type Description struct {
	// moniker defines a human-readable name for the validator.
	Moniker string `protobuf:"bytes,1,opt,name=moniker,proto3" json:"moniker,omitempty"`
	// identity defines an optional identity signature (ex. UPort or Keybase).
	Identity string `protobuf:"bytes,2,opt,name=identity,proto3" json:"identity,omitempty"`
	// website defines an optional website link.
	Website string `protobuf:"bytes,3,opt,name=website,proto3" json:"website,omitempty"`
	// security_contact defines an optional email for security contact.
	SecurityContact string `protobuf:"bytes,4,opt,name=security_contact,json=securityContact,proto3" json:"security_contact,omitempty" yaml:"security_contact"`
	// details define other optional details.
	Details string `protobuf:"bytes,5,opt,name=details,proto3" json:"details,omitempty"`
}

type CommissionRates struct {
	// rate is the commission rate charged to delegators, as a fraction.
	Rate github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,1,opt,name=rate,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"rate"`
	// max_rate defines the maximum commission rate which validator can ever charge, as a fraction.
	MaxRate github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,2,opt,name=max_rate,json=maxRate,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"max_rate" yaml:"max_rate"`
	// max_change_rate defines the maximum daily increase of the validator commission, as a fraction.
	MaxChangeRate github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,3,opt,name=max_change_rate,json=maxChangeRate,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"max_change_rate" yaml:"max_change_rate"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/7B3C19A3674C9EF856C43FFF50B021085AC4DA693AA47F82882FFAC78F21DE05

<!-- omit in toc -->

#### Details

| Detail                                        | Accessor                                                                                    | Type                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------- |
| Transaction Type                              | `tx.body.messages[message_index]["@type"] === "/cosmos.staking.v1beta1.MsgCreateValidator"` | String                        |
| Initial Delegator Address (Validator Creator) | `tx.body.messages[message_index].delegator_address`                                         | String                        |
| Delegated Amount                              | `tx.body.messages[message_index].value                                                      | [Asset Object](#_1-single-object) |

[Top](#table-of-content)

### 2. MsgEditValidator

- **Descriptions:** : Edit and existing validator

- Funds Movement: No (Pay for fee only)

<!-- omit in toc -->

#### Protobuf

```go
type MsgEditValidator struct {
	Description      Description `protobuf:"bytes,1,opt,name=description,proto3" json:"description"`
	ValidatorAddress string      `protobuf:"bytes,2,opt,name=validator_address,json=validatorAddress,proto3" json:"validator_address,omitempty" yaml:"address"`
	// We pass a reference to the new commission rate and min self delegation as
	// it's not mandatory to update. If not updated, the deserialized rate will be
	// zero with no way to distinguish if an update was intended.
	// REF: #2373
	CommissionRate    *github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,3,opt,name=commission_rate,json=commissionRate,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"commission_rate,omitempty" yaml:"commission_rate"`
	MinSelfDelegation *github_com_cosmos_cosmos_sdk_types.Int `protobuf:"bytes,4,opt,name=min_self_delegation,json=minSelfDelegation,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Int" json:"min_self_delegation,omitempty" yaml:"min_self_delegation"`
}

type Description struct {
	// moniker defines a human-readable name for the validator.
	Moniker string `protobuf:"bytes,1,opt,name=moniker,proto3" json:"moniker,omitempty"`
	// identity defines an optional identity signature (ex. UPort or Keybase).
	Identity string `protobuf:"bytes,2,opt,name=identity,proto3" json:"identity,omitempty"`
	// website defines an optional website link.
	Website string `protobuf:"bytes,3,opt,name=website,proto3" json:"website,omitempty"`
	// security_contact defines an optional email for security contact.
	SecurityContact string `protobuf:"bytes,4,opt,name=security_contact,json=securityContact,proto3" json:"security_contact,omitempty" yaml:"security_contact"`
	// details define other optional details.
	Details string `protobuf:"bytes,5,opt,name=details,proto3" json:"details,omitempty"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/F4A1D7757AD20979D540C0CD29DD335D17E121F15AA447990B87E0EE94531BD7

<!-- omit in toc -->

### Details

TODO

[Top](#table-of-content)

### 3. MsgDelegate

- **Descriptions:** : Perform a delegation of coins from a delegator to a validator

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgDelegate struct {
	DelegatorAddress string      `protobuf:"bytes,1,opt,name=delegator_address,json=delegatorAddress,proto3" json:"delegator_address,omitempty" yaml:"delegator_address"`
	ValidatorAddress string      `protobuf:"bytes,2,opt,name=validator_address,json=validatorAddress,proto3" json:"validator_address,omitempty" yaml:"validator_address"`
	Amount           types1.Coin `protobuf:"bytes,3,opt,name=amount,proto3" json:"amount"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/CCB45B0C6EC18A327ADFC8C36478A163D8C2A8BD9EB13687F73ED3D4559318A3](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/CCB45B0C6EC18A327ADFC8C36478A163D8C2A8BD9EB13687F73ED3D4559318A3)

<!-- omit in toc -->

#### Details

| Detail                | Accessor                                                                             | Type                          |
| --------------------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| Transaction Type      | `tx.body.messages[message_index]["@type"] === "/cosmos.staking.v1beta1.MsgDelegate"` | String                        |
| Delegate From Address | `tx.body.messages[message_index].delegator_address`                                  | String                        |
| Delegate To Validator | `tx.body.messages[message_index].validator_address`                                  | String                        |
| Delegate Amount       | `tx.body.messages[message_index].amount`                                             | [Asset Object](#_1-single-object) |

[Top](#table-of-content)

### 4. MsgBeginRedelegate

- **Descriptions:** : Perform a redelegation of coins from a delegator and source validator to a destination validator.

    Note that the redelegation is just a record update of the internal state of a delegator's staked funds. The delegator account won't have any funds movement based on the redelegation except.

    There is a side effect of `MsgBeginRedelegate`, upon successful execution of this message, all the rewards of the delegator from previous (source) validator will be withdrew automatically to the delegator account.

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgBeginRedelegate struct {
	DelegatorAddress    string      `protobuf:"bytes,1,opt,name=delegator_address,json=delegatorAddress,proto3" json:"delegator_address,omitempty" yaml:"delegator_address"`
	ValidatorSrcAddress string      `protobuf:"bytes,2,opt,name=validator_src_address,json=validatorSrcAddress,proto3" json:"validator_src_address,omitempty" yaml:"validator_src_address"`
	ValidatorDstAddress string      `protobuf:"bytes,3,opt,name=validator_dst_address,json=validatorDstAddress,proto3" json:"validator_dst_address,omitempty" yaml:"validator_dst_address"`
	Amount              types1.Coin `protobuf:"bytes,4,opt,name=amount,proto3" json:"amount"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/5D43A55463C8FB30A89306C26C5E3318826AD075D36E9B5E72F7019C00F14549](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/5D43A55463C8FB30A89306C26C5E3318826AD075D36E9B5E72F7019C00F14549)

<!-- omit in toc -->

#### Details

<!-- omit in toc -->

| Detail                                                                          | Accessor                                                                                                                                                                                                                                                        | Type                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Transaction Type                                                                | `tx.body.messages[message_index]["@type"] === "/cosmos.staking.v1beta1.MsgBeginRedelegate"`                                                                                                                                                                     | String                        |
| Redelegate From Address                                                         | `tx.body.messages[message_index].delegator_address`                                                                                                                                                                                                             | String                        |
| Redelegate From Validator                                                       | `tx.body.messages[message_index].validator_src_address`                                                                                                                                                                                                         | String                        |
| Redelegate To Validator                                                         | `tx.body.messages[message_index].validator_dst_address`                                                                                                                                                                                                         | String                        |
| Redelegate Amount                                                               | `tx.body.messages[message_index].amount`                                                                                                                                                                                                                        | [Asset Object](#_1-single-object) |
| Auto Withdraw Rewards To Address #                                              | `tx_response.logs[message_index].events[event_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "recipient"`. | String                        |
| Auto Withdraw Rewards From Address (Always the "distribution" module account) # | `tx_response.logs[message_index].events[event_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "sender"`.    | String                        |
| Auto Withdraw Rewards Amount #                                                  | `tx_response.logs[message_index].events[event_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "amount"`.    | String                        |

::: tip Note
Tthere may be multiple auto rewards withdrawal happen. In such a case the `transfer` event will have the multiple `{"recipient":"","sender":"","amount":""}`. An example is

```
{
  "type": "transfer",
  "attributes": [
    {
      "key": "recipient",
      "value": "cro1hr6wx9mm6ycjr4x2p4ek4c9fl2prkxsx79y5qu"
    },
    {
      "key": "sender",
      "value": "cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w"
    },
    {
      "key": "amount",
      "value": "30763basecro"
    },
    {
      "key": "recipient",
      "value": "cro1hr6wx9mm6ycjr4x2p4ek4c9fl2prkxsx79y5qu"
    },
    {
      "key": "sender",
      "value": "cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w"
    },
    {
      "key": "amount",
      "value": "6881basecro"
    }
  ]
}
```
:::

[Top](#table-of-content)

### 5. MsgUndelegate

- **Descriptions:** : Perform an undelegation from a delegate and a validator.

    Note that the funds is moved between module accounts upon a `MsgUndelegate` message execute. The funds movement to the user account happens only when the unbond completes. For details you can refer to the [next section](#_5b-upon-msgundelegate-completed).

- Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgUndelegate struct {
	DelegatorAddress string      `protobuf:"bytes,1,opt,name=delegator_address,json=delegatorAddress,proto3" json:"delegator_address,omitempty" yaml:"delegator_address"`
	ValidatorAddress string      `protobuf:"bytes,2,opt,name=validator_address,json=validatorAddress,proto3" json:"validator_address,omitempty" yaml:"validator_address"`
	Amount           types1.Coin `protobuf:"bytes,3,opt,name=amount,proto3" json:"amount"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/3B36AA1AC81ACD58E7A06C21353DB0FC40A70EDBF6BD2CD23D7BEDC7A0F56318](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/3B36AA1AC81ACD58E7A06C21353DB0FC40A70EDBF6BD2CD23D7BEDC7A0F56318)

<!-- omit in toc -->

#### Details

| Detail                                                                          | Accessor                                                                                                                                                                                                                                                        | Type                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Transaction Type                                                                | `tx.body.messages[message_index]["@type"] === "/cosmos.distribution.v1beta1.MsgFundCommunityPool"`                                                                                                                                                              | String                        |
| Undelegate From Address                                                         | `tx.body.messages[message_index].delegator_address`                                                                                                                                                                                                             | String                        |
| Undelegate From Validator                                                       | `tx.body.messages[message_index].validator_src_address`                                                                                                                                                                                                         | String                        |
| Undeleate Amount                                                                | `tx.body.messages[message_index].amount`                                                                                                                                                                                                                        | [Asset Object](#_1-single-object) |
| Auto Withdraw Rewards To Address #                                              | `tx_response.logs[message_index].events[event_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "recipient"`. | String                        |
| Auto Withdraw Rewards From Address (Always the "distribution" module account) # | `tx_response.logs[message_index].events[event_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "sender"`.    | String                        |
| Auto Withdraw Rewards Amount #                                                  | `tx_response.logs[message_index].events[event_index].value` <br />where <br />`tx_response.logs[message_index].events[event_index].type === "transfer" && tx_response.logs[message_index].events[event_index].attributes[attribute_index].key === "amount"`.    | String                        |

:::tip Note: 
Similar to MsgBeginRedelegate, there may be multiple auto rewards withdrawal happen. In such a case the `transfer` event will have the multiple `{"recipient":"","sender":"","amount":""}`.
:::

[Top](#table-of-content)

### 5b. Upon MsgUndelegate completed

- **Descriptions:** : The undelegation is completed on the first block after the "Unbond Completion Time", in which there will be a special event in the Tendermint Block Results API.

- Funds movement: Yes
#### Example
Tendermint Block Results API:
[https://mainnet.crypto.org:26657/block_results?height=374823](https://mainnet.crypto.org:26657/block_results?height=374823)

<!-- omit in toc -->

#### Details

| Detail                    | Accessor                                                                                                                                                                                                                                                    | Type                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Undelegate From Validator | `.result.end_block_events[event_index].attributes[attribute_index].value` <br />where <br />`.result.end_block_events[event_index].type === "complete_unbonding" && .result.end_block_events[event_index].attributes[attribute_index].key === "validator"`. | String                        |
| Undelegate To Address     | `.result.end_block_events[event_index].attributes[attribute_index].value` <br />where <br />`.result.end_block_events[event_index].type === "complete_unbonding" && .result.end_block_events[event_index].attributes[attribute_index].key === "delegator"`. | String                        |
| Undeleate Amount          | `.result.end_block_events[event_index].attributes[attribute_index].value` <br />where <br />`.result.end_block_events[event_index].type === "complete_unbonding" && .result.end_block_events[event_index].attributes[attribute_index].key === "amount"`.    | [Asset String](#asset-string) |

[Top](#table-of-content)

## Slashing

### 1. MsgUnjail

- **Descriptions:** : Unjail a validator

- Funds movement: No  (Pay for fee only)

<!-- omit in toc -->

#### Protobuf

```go
type MsgUnjail struct {
	ValidatorAddr string `protobuf:"bytes,1,opt,name=validator_addr,json=validatorAddr,proto3" json:"address" yaml:"address"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/58BF8EBD17FF9500F395E4A9B2AE93EF21306E5706B3EC31CE116654D78B8684](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/58BF8EBD17FF9500F395E4A9B2AE93EF21306E5706B3EC31CE116654D78B8684)

<!-- omit in toc -->

#### Details

TODO

### 2. Being Jailed and Slashed

A validator can get jailed for two reason:

1. Liveness
2. Double sign

#### Liveness

Liveness issue occurs when the validator failed to sign 50%\* of the blocks in a 5000# blocks sliding window.

Upon a validator committing liveness issue, the validator is jailed for 24 hours (85400 seconds#).

\# The liveness metrics and the penalty is subject to the network parameters to be explained in the [details section](#details-params)

#### Double Sign

Double sign occurs when a validator attempt to provide multiple signatures of the same block height.

This is considered as a serious fault and upon committing the validator will got jailed forever and got slashed for 5% of the total staking#.

This slashing is applied to all the delegations (both self delegation and delegation from other accounts).

\# The slashing rate is subject to the network parameters to be explained in the [details section](#details-params)

#### Limitations

There is a limitation in the protocol that the slashing amount cannot be easily extracted right now. Theoretically one could calculate the slashed amount of each delegator by applying the slash rate and delegation proportion but in practice small precision issue may be introduced in the calculation process and introduce discrepancy with the chain, so it is not recommended to do so.

On the other hand, the slashed amount, similar to the block rewards and commission, are **not** deducted from delegator account directly. There are events to signal the jail and slashing occurs but it serve more of the purpose of describing such as event occurs only.

<!-- omit in toc -->

#### Details - Params

Cosmos Slashing Params API: [https://mainnet.crypto.org:1317/cosmos/slashing/v1beta1/params](https://mainnet.crypto.org:1317/cosmos/slashing/v1beta1/params)

| Detail                                    | Category    | Accessor                             | Type              |
| ----------------------------------------- | ----------- | ------------------------------------ | ----------------- |
| Signing window size (in Blocks)           | Liveness    | `.params.signed_blocks_window`       | String            |
| Minimum # of blocks to sign in the window | Liveness    | `.params.min_signed_per_window`      | String            |
| How long to jail                          | Liveness    | `.params.downtime_jail_duration`     | String (Duration) |
| Slashing ratio                            | Liveness    | `.params.slash_fraction_downtime`    | String            |
| Slashing ratio                            | Double Sign | `.params.slash_fraction_double_sign` | String            |

<!-- omit in toc -->

#### Details - Jail and Slash events

Tendermint Block Results API: https://mainnet.crypto.org:26657/block?height=[height]

You can use the [Cosmos API tools](#common-block-details) to decode the event details for readability during integration.

| Detail                    | Category              | Accessor                                                                                                                                                                                                                                                                                             | Type      |
| ------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Jail                      | Liveness, Double Sign | `.results.begin_block_events[event_index].type === "slash" && Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].key) === "jailed"`                                                                                                                                   | Assertion |
| Jailed Reason             | Liveness              | `Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].value === "missing_signature"`<br />where<br />`.results.begin_block_events[event_index].type === "slash" && Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].key) === "reason"` | String    |
| Jailed Reason             | Double Sign           | `Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].value === "double_sign"`<br />where<br />`.results.begin_block_events[event_index].type === "slash" && Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].key) === "reason"`       | String    |
| Jailed Validator Address  | Liveness, Double Sign | `Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`.results.begin_block_events[event_index].type === "slash" && Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].key) === "jailed"`                        | String    |
| Slashed Validator Address | Liveness, Double Sign | `Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].value)`<br />where<br />`.results.begin_block_events[event_index].type === "slash" && Base64Decode(.results.begin_block_events[event_index].attributes[attribute_index].key) === "address"`                       | String    |

Liveness Example: [https://mainnet.crypto.org:26657/block_results?height=210356]

Liveness Event Example

```json
{
  "type": "slash",
  "attributes": [
    {
      "key": "address",
      "value": "crocnclcons1hv2qumdxjeekgtmmnjvzx7ukv7uhlh29w8a4tx",
      "index": true
    },
    {
      "key": "power",
      "value": "4284179",
      "index": true
    },
    {
      "key": "reason",
      "value": "missing_signature",
      "index": true
    },
    {
      "key": "jailed",
      "value": "crocnclcons1hv2qumdxjeekgtmmnjvzx7ukv7uhlh29w8a4tx",
      "index": true
    }
  ]
}
```

Double Sign Example: [https://mainnet.crypto.org:26657/block_results?height=210356](https://mainnet.crypto.org:26657/block_results?height=210356)

Double Sign Event Example

```json
{
	"type": "slash",
	"attributes": [
		{
			"key": "address",
			"value": "crocnclcons1kf8994z2h49u7ldh6e96mlhw6wjqx4lr4929sc",
			"index": true
		},
		{
			"key": "power",
			"value": "6524600",
			"index": true
		},
		{
			"key": "reason",
			"value": "double_sign",
			"index": true
		}
	]
},
{
	"type": "slash",
	"attributes": [
		{
			"key": "jailed",
			"value": "crocnclcons1kf8994z2h49u7ldh6e96mlhw6wjqx4lr4929sc",
			"index": true
		}
	]
}
```

[Top](#table-of-content)

## Governance

### 1. MsgSubmitProposal

Submit proposal

Initial deposit will transfer from the proposer account to the "gov" module account.

Funds movement: Yes

<!-- omit in toc -->

#### Protobuf

```go
type MsgSubmitProposal struct {
	Content        *types.Any                               `protobuf:"bytes,1,opt,name=content,proto3" json:"content,omitempty"`
	InitialDeposit github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=initial_deposit,json=initialDeposit,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"initial_deposit" yaml:"initial_deposit"`
	Proposer       string                                   `protobuf:"bytes,3,opt,name=proposer,proto3" json:"proposer,omitempty"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/9CCC988616344C804E8831B6FC6BECD6FD0F815E4E3FF13BDE6B7F8360BF0050

<!-- omit in toc -->

#### Details

| Detail               | Accessor                                                                               | Type                        |
| -------------------- | -------------------------------------------------------------------------------------- | --------------------------- |
| Transaction Type     | `tx.body.messages[message_index]["@type"] === "/cosmos.gov.v1beta1.MsgSubmitProposal"` | String                      |
| Deposit From Address | `tx.body.messages[message_index].porposer`                                             | String                      |
| Deposit Amount       | `tx.body.messages[message_index].initial_deposit`                                      | [Asset Array](#_2-array) |

### 1b. Community Pool Spend Proposal

One sub-type of proposal is to spend community pool. The community has to pre-funded using [MsgFundCommunityPool](#4-msgfundcommunitypool).

After a proposal of this kind got passed, it will release the funds to the grants receipient account.

<!-- omit in toc -->

#### Community Pool Spend Proposal Transaction

| Detail                   | Accessor                                                                                                         | Type                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Proposal Type            | `tx.body.messages[message_index].content["@type"] === "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal"` | String                      |
| Grants Recipient Address | `tx.body.messages[message_index].conbtent.recipient`                                                             | String                      |
| Spend Amount             | `tx.body.messages[message_index].content.amount`                                                                 | [Asset Array](#_2-array) |

Example of Community Pool Spend Proposal tranaction:

```json
{
  "tx": {
    "body": {
      "messages": [
        {
          "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal",
          "content": {
            "@type": "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            "title": "Test Community Pool Spend",
            "description": "Test spending community pool",
            "recipient": "cro1kkqxv3szgh099xezt7y38t5anqzue4s3fhp2tm",
            "amount": [
              {
                "denom": "basecro",
                "amount": "30000"
              }
            ]
          },
          "initial_deposit": [
            {
              "denom": "basecro",
              "amount": "20000"
            }
          ],
          "proposer": "cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd"
        }
      ],
      "memo": "",
      "timeout_height": "0",
      "extension_options": [],
      "non_critical_extension_options": []
    },
    "auth_info": {
      "signer_infos": [
        {
          "public_key": {
            "@type": "/cosmos.crypto.secp256k1.PubKey",
            "key": "AiLBhn2Jb4CLU5dYpKB3LHDpjIFldrsQWD6LWDHyjpWM"
          },
          "mode_info": {
            "single": {
              "mode": "SIGN_MODE_DIRECT"
            }
          },
          "sequence": "3"
        }
      ],
      "fee": {
        "amount": [
          {
            "denom": "basecro",
            "amount": "5000"
          }
        ],
        "gas_limit": "200000",
        "payer": "",
        "granter": ""
      }
    },
    "signatures": [
      "35gnabiH8b8Sqd4XFM9AY1dvN//xsKuzpGO356u/ZEwCBjtaoUKQIL7yNOao6kqJ4Ezc0RCHzgJT6owkW4iXog=="
    ]
  },
  "tx_response": {
    "height": "19278",
    "txhash": "FF822C74B63571B0FDC886A5061D7B8594A113ACD05A10273C36E46CF63871C6",
    "codespace": "",
    "code": 0,
    "data": "0A150A0F7375626D69745F70726F706F73616C12020801",
    "raw_log": "[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"submit_proposal\"},{\"key\":\"sender\",\"value\":\"cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd\"},{\"key\":\"module\",\"value\":\"governance\"},{\"key\":\"sender\",\"value\":\"cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd\"}]},{\"type\":\"proposal_deposit\",\"attributes\":[{\"key\":\"amount\",\"value\":\"20000basecro\"},{\"key\":\"proposal_id\",\"value\":\"1\"}]},{\"type\":\"submit_proposal\",\"attributes\":[{\"key\":\"proposal_id\",\"value\":\"1\"},{\"key\":\"proposal_type\",\"value\":\"CommunityPoolSpend\"},{\"key\":\"voting_period_start\",\"value\":\"1\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z\"},{\"key\":\"sender\",\"value\":\"cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd\"},{\"key\":\"amount\",\"value\":\"20000basecro\"}]}]}]",
    "logs": [
      {
        "msg_index": 0,
        "log": "",
        "events": [
          {
            "type": "message",
            "attributes": [
              {
                "key": "action",
                "value": "submit_proposal"
              },
              {
                "key": "sender",
                "value": "cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd"
              },
              {
                "key": "module",
                "value": "governance"
              },
              {
                "key": "sender",
                "value": "cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd"
              }
            ]
          },
          {
            "type": "proposal_deposit",
            "attributes": [
              {
                "key": "amount",
                "value": "20000basecro"
              },
              {
                "key": "proposal_id",
                "value": "1"
              }
            ]
          },
          {
            "type": "submit_proposal",
            "attributes": [
              {
                "key": "proposal_id",
                "value": "1"
              },
              {
                "key": "proposal_type",
                "value": "CommunityPoolSpend"
              },
              {
                "key": "voting_period_start",
                "value": "1"
              }
            ]
          },
          {
            "type": "transfer",
            "attributes": [
              {
                "key": "recipient",
                "value": "cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z"
              },
              {
                "key": "sender",
                "value": "cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd"
              },
              {
                "key": "amount",
                "value": "20000basecro"
              }
            ]
          }
        ]
      }
    ],
    "info": "",
    "gas_wanted": "200000",
    "gas_used": "126092",
    "tx": {
      "@type": "/cosmos.tx.v1beta1.Tx",
      "body": {
        "messages": [
          {
            "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal",
            "content": {
              "@type": "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
              "title": "Test Community Pool Spend",
              "description": "Test spending community pool",
              "recipient": "cro1kkqxv3szgh099xezt7y38t5anqzue4s3fhp2tm",
              "amount": [
                {
                  "denom": "basecro",
                  "amount": "30000"
                }
              ]
            },
            "initial_deposit": [
              {
                "denom": "basecro",
                "amount": "20000"
              }
            ],
            "proposer": "cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd"
          }
        ],
        "memo": "",
        "timeout_height": "0",
        "extension_options": [],
        "non_critical_extension_options": []
      },
      "auth_info": {
        "signer_infos": [
          {
            "public_key": {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "AiLBhn2Jb4CLU5dYpKB3LHDpjIFldrsQWD6LWDHyjpWM"
            },
            "mode_info": {
              "single": {
                "mode": "SIGN_MODE_DIRECT"
              }
            },
            "sequence": "3"
          }
        ],
        "fee": {
          "amount": [
            {
              "denom": "basecro",
              "amount": "5000"
            }
          ],
          "gas_limit": "200000",
          "payer": "",
          "granter": ""
        }
      },
      "signatures": [
        "35gnabiH8b8Sqd4XFM9AY1dvN//xsKuzpGO356u/ZEwCBjtaoUKQIL7yNOao6kqJ4Ezc0RCHzgJT6owkW4iXog=="
      ]
    },
    "timestamp": "2021-05-02T15:14:05Z"
  }
}
```

<!-- omit in toc -->

#### Community Pool Spend Proposal Funds Movement

| Detail                                   | Accessor                                                                                                                                                                                                                                                                                                         | Type                          |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Proposal Passed                          | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value) === "proposal_passed"` <br />where <br />`.result.end_block_events[event_index].type === "active_proposal" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key) === "proposal_result"`. | String                        |
| Grant from "distribution" Module Account | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value) === "{distribution module account}"` <br />where <br />`.result.end_block_events[event_index].type === "transfer" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key) === "sender"`.   | String                        |
| Recipient Account                        | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value)` <br />where <br />`.result.end_block_events[event_index].type === "transfer" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key === "recipient")`.                                    | String                        |
| Grants Amount                            | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value)` <br />where <br />`.result.end_block_events[event_index].type === "transfer" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key === "amount")`.                                       | [Asset String](#asset-string) |

Example of Block Results API when Community Pool Spend Proposal Funds is Released:

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {
    "height": "19337",
    "txs_results": null,
    "begin_block_events": [
	  ...
    ],
    "end_block_events": [
      {
        "type": "transfer",
        "attributes": [
          {
            "key": "recipient",
            "value": "cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd",
            "index": true
          },
          {
            "key": "sender",
            "value": "cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z",
            "index": true
          },
          {
            "key": "amount",
            "value": "20000basecro",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "sender",
            "value": "cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z",
            "index": true
          }
        ]
      },
      {
        "type": "transfer",
        "attributes": [
          {
            "key": "recipient",
            "value": "cro1kkqxv3szgh099xezt7y38t5anqzue4s3fhp2tm",
            "index": true
          },
          {
            "key": "sender",
            "value": "cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w",
            "index": true
          },
          {
            "key": "amount",
            "value": "30000basecro",
            "index": true
          }
        ]
      },
      {
        "type": "message",
        "attributes": [
          {
            "key": "sender",
            "value": "cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w",
            "index": true
          }
        ]
      },
      {
        "type": "active_proposal",
        "attributes": [
          {
            "key": "proposal_id",
            "value": "1",
            "index": true
          },
          {
            "key": "proposal_result",
            "value": "proposal_passed",
            "index": true
          }
        ]
      }
    ],
    "validator_updates": null,
    "consensus_param_updates": {
	  ...
    }
  }
}
```

### 2. MsgDeposit

- **Descriptions:** : Submit a deposit to an existing proposal

    Deposit will transfer from the proposer account to the "gov" module account.

<!-- omit in toc -->

#### Protobuf

```go
type MsgDeposit struct {
	ProposalId uint64                                   `protobuf:"varint,1,opt,name=proposal_id,json=proposalId,proto3" json:"proposal_id" yaml:"proposal_id"`
	Depositor  string                                   `protobuf:"bytes,2,opt,name=depositor,proto3" json:"depositor,omitempty"`
	Amount     github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,3,rep,name=amount,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"amount"`
}
```

<!-- omit in toc -->

#### Example

Cosmos Transaction Query API: [https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/9CCC988616344C804E8831B6FC6BECD6FD0F815E4E3FF13BDE6B7F8360BF0050](https://mainnet.crypto.org:1317/cosmos/tx/v1beta1/txs/9CCC988616344C804E8831B6FC6BECD6FD0F815E4E3FF13BDE6B7F8360BF0050)

<!-- omit in toc -->

#### Details

| Detail               | Accessor                                                                        | Type                        |
| -------------------- | ------------------------------------------------------------------------------- | --------------------------- |
| Transaction Type     | `tx.body.messages[message_index]["@type"] === "/cosmos.gov.v1beta1.MsgDeposit"` | String                      |
| Deposit From Address | `tx.body.messages[message_index].depositor`                                     | String                      |
| Deposit Amount       | `tx.body.messages[message_index].amount`                                        | [Asset Array](#_2-array) |

[Top](#table-of-content)

### 2a. Burn Proposal's Deposit if Proposal does not Get Enough Deposit

If a proposal does not meet the depsoit requirement after the deposit period, the deposit will **NOT** be returned to the depositors. Those deposits **will be burnt** from the "gov" module account as well.

The latest deposit requirement ("min_deposit") and deposit period ("max_deposit_period") can be checked on https://mainnet.crypto.org:1317/cosmos/gov/v1beta1/params/deposit. Note that they are network parameters and may change over time after governance proposals.

To monitor a proposal becomes inacitve, it can be detected by monitoring the `end_block_events` in Tendermint Block Results API. However, for the amount of deposit burnt, you have to keep track of the deposits made to the proposal before. Note that this operation does not involve any user account as the deposits are burnt.

<!-- omit in toc -->

Tendermint Block Results API: [https://mainnet.crypto.org:26657/block_results?height=195346](https://mainnet.crypto.org:26657/block_results?height=195346)


<!-- omit in toc -->

#### Details

| Detail                     | Accessor                                                                                                                                                                                                                                                                                                            | Type   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Proposal Id                | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value) === "{gov module account}"` <br />where <br />`.result.end_block_events[event_index].type === "inactive_proposal" && .result.Base64Decode(end_block_events[event_index].attributes[attribute_index].key) === "proposal_id"`. | String |
| Assert Proposal is Dropped | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value === "proposal_dropped")` <br />where <br />`.result.end_block_events[event_index].type === "inactive_proposal" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key === "proposal_result"`). | String |

### 2b. Return Proposal's Deposit

There are a few cases where a proposal deposits will be returned to the depositors. For details, plesae refer to [Proposal Result](#4-proposal-result).

The return deposit can be detected from monitoring the `end_block_events` in Tendermint Block Results API.

<!-- omit in toc -->

#### Example

Tendermint Block Results API:[https://mainnet.crypto.org:26657/block_results?height=496620
](https://mainnet.crypto.org:26657/block_results?height=496620
)
<!-- omit in toc -->

#### Details

| Detail                           | Accessor                                                                                                                                                                                                                                                                                              | Type                          |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Return From "gov" Module Account | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value) === "{gov module account}"` <br />where <br />`.result.end_block_events[event_index].type === "transfer" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key) === "sender"`. | String                        |
| Return To Address                | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value)` <br />where <br />`.result.end_block_events[event_index].type === "transfer" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key) === "recipient"`.                         | String                        |
| Returned Deposit Amount          | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value)` <br />where <br />`.result.end_block_events[event_index].type === "transfer" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key === "amount"`).                            | [Asset String](#asset-string) |

Note that there may be multiple depositors of a proposal, so the event may appears multiple times.

```json
[
  {
    "type": "transfer",
    "attributes": [
      {
        "key": "recipient",
        "value": "cro15d0esada05wx4lpncp5vmwmzgrcnu3cu5xfy9w",
        "index": true
      },
      {
        "key": "sender",
        "value": "cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z",
        "index": true
      },
      {
        "key": "amount",
        "value": "1000000000basecro",
        "index": true
      }
    ]
  },
  {
    "type": "transfer",
    "attributes": [
      {
        "key": "recipient",
        "value": "cro1meq5gd2fwjcav8n0nynwelusm9hrngwglvp426",
        "index": true
      },
      {
        "key": "sender",
        "value": "cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z",
        "index": true
      },
      {
        "key": "amount",
        "value": "2000000000000basecro",
        "index": true
      }
    ]
  }
]
```

[Top](#table-of-content)

### 2c. Burn Proposal's Deposit

There are a few cases where proposal deposits will be burnt. For details, please refer to [Proposal Result](#4-proposal-result) for more details.

If a proposal does not get enough votes that exceed the "quorum" or has the "No with Veto" votes exceed the "veto_threshold", the deposit will **NOT** be returned to the depositors. Those deposits **will be burnt** from the "gov" module account as well.

To monitor a proposal that got rejected and deposits got burned, it can be detected by monitoring the `end_block_events` in Tendermint Block Results API. There will be a "proposal_result" event marking the proposal as rejected, and different from [Return Proposal's Deposit](#2b-return-proposals-depsoit), there will be **NO** transfer event in the `end_block_results`, which means the deposits is **NOT** returned and is burnt.

However, for the amount of deposit burnt, you have to keep track of the deposits made to the proposal before. Note that this operation does not involve any user account as the deposits are burnt.

<!-- omit in toc -->

#### Details and Example

| Detail                      | Accessor                                                                                                                                                                                                                                                                                                           | Type   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Proposal Id                 | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value) === "{gov module account}"` <br />where <br />`.result.end_block_events[event_index].type === "active_proposal" && .result.Base64Decode(end_block_events[event_index].attributes[attribute_index].key) === "proposal_id"`.  | String |
| Assert Proposal is Rejected | `Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].value === "proposal_rejected")` <br />where <br />`.result.end_block_events[event_index].type === "active_proposal" && Base64Decode(.result.end_block_events[event_index].attributes[attribute_index].key === "proposal_result"`). | String |

Tendermint Block Results API JSON Example (Base64 Decoded):

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {
    "height": "285",
    "txs_results": null,
    "begin_block_events": [
      ...
    ],
    "end_block_events": [
      {
        "type": "active_proposal",
        "attributes": [
          {
            "key": "proposal_id",
            "value": "3",
            "index": true
          },
          {
            "key": "proposal_result",
            "value": "proposal_rejected",
            "index": true
          }
        ]
      }
    ],
    "validator_updates": null,
    "consensus_param_updates": {
      ...
    }
  }
}
```

[Top](#table-of-content)

### 3. MsgVote

- **Descriptions:** : Submit a vote to an existing proposal
- Funds movement: No (Pay for fee only)

### 4. Proposal Result

Latest tally params can be retreived from:[https://mainnet.crypto.org:1317/cosmos/gov/v1beta1/params/tallying](https://mainnet.crypto.org:1317/cosmos/gov/v1beta1/params/tallying). The params may change from time to time after governance proposal.

| Scenario                                                                                                                                             | Result  | Burn Deposit |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------ |
| All voter has no staked coins                                                                                                                        | Rejects | No           |
| Not enough `tally_params.quorum` of votes                                                                                                            | Rejects | **Yes**      |
| No one votes (Everyone abstain)                                                                                                                      | Rejects | No           |
| More than `tally_params.veto_threshold` voter veto                                                                                                   | Rejects | **Yes**      |
| More than `tally_params.threshold` non-abstaining votes No                                                                                           | Rejects | No           |
| More than `tally_params.threshold` non-abstaining votes Yes                                                                                          | Passes  | No           |
| More than `tally_params.threshold` non-abstaining votes Yes but the proposal cannot be executed (e.g. Insufficient funds in community pool to spend) | Failed  | No           |

[Top](#table-of-content)

## Appendix: Module Accounts on Mainnet

| Module                 | Address                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| mint                   | [cro1m3h30wlvsf8llruxtpukdvsy0km2kum8s20pm3](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro1m3h30wlvsf8llruxtpukdvsy0km2kum8s20pm3) |
| fee_collector          | [cro17xpfvakm2amg962yls6f84z3kell8c5lgztehv](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro17xpfvakm2amg962yls6f84z3kell8c5lgztehv) |
| distribution           | [cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8lyv94w) |
| bonded_tokens_pool     | [cro1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3dqpk9x](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3dqpk9x) |
| not_bonded_tokens_pool | [cro1tygms3xhhs3yv487phx3dw4a95jn7t7leqa8nj](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro1tygms3xhhs3yv487phx3dw4a95jn7t7leqa8nj) |
| gov                    | [cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z](https://mainnet.crypto.org:1317/cosmos/auth/v1beta1/accounts/cro10d07y265gmmuvt4z0w9aw880jnsr700jzemu2z) |

[Top](#table-of-content)
