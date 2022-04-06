# Modules

## Overview
Crypto.org Chain utilizes [Cosmos SDK](https://cosmos.network/sdk) and the [Tendermint](https://tendermint.com/) Core consensus engine underneath. Specifically, the Cosmos SDK is a framework that facilitates the development of secure state-machines on top of Tendermint. In particular, we utilize different SDK modules to facilitate the special features of the Crypto.org Chain. 

In this documentation, we will be focusing on some of the important modules we used, for example:

- [Authz](#authz) - Facilitates authorizations granted to one account to perform actions on behalf of another account;
- [Bank](#bank) - Token transfer functionalities and query support for the total supply of all assets; 
- [Distribution](#distribution) - Fee distribution, and staking rewards to the validators and delegator; 
- [Governance](#gov) - On-chain proposals and voting;
- [Mint](#mint) - Creation of new units of staking token;
- [Nft](#nft) - Non-Fungible Token management;
- [Slashing](#slashing) - Validator punishment mechanisms;
- [Staking](#staking) - Proof-of-Stake layer for public blockchains;
- [Supply](#supply) - Retrieve total and liquid supply.


## `authz`

### Introduction

The `authz` module facilitates granting authorizations to perform actions, such as spending tokens, 
on behalf of one account to other accounts.

### Overview

An _authorization_ is an allowance to execute an action by the _grantee_ on behalf of the authorization _granter_,
e.g. to send tokens to an account from the _granter_, or to delegate tokens to a validator from the _granter_.
There are 3 major built-in authorization types:
- `SendAuthorization`
- `StakeAuthorization`
- `GenericAuthorization`

---

#### SendAuthorization
`SendAuthorization` implements an authorization to the _grantee_ to perform, on behalf of the _granter_, 
a basic `send` action defined in the [bank](./module_bank.md) module.
It takes a `SpendLimit` that is greater than 0 to specify the maximum amount of tokens the _grantee_ can spend with. 
The `SpendLimit` keeps track of how many tokens allowed are left in the authorization and
is updated as the tokens are spent until the `SendAuthorization` gets cleared when the `SpendLimit`reaches 0.
Sending an amount greater than the `SpendLimit` is not allowed.

---

#### StakeAuthorization
`StakeAuthorization` implements an authorization to the _grantee_ to perform, on behalf of the _granter_,
`delegate`, `unbond` (undelegate), or `redelegate` actions defined in the [staking](./module_staking.md) module.
Each of the above actions need to be authorized separately, with which either an `AllowList` or a `DenyList` must be 
specified to restrict which validators to or not to perform a staking action with.
Optionally, `MaxTokens` can also be specified in the authorization that keeps track of a limit to the amount of tokens
to be delegated/undelegated/redelegated. If left unspecified, the amount is unlimited.
Similar to the `SpendLimit` in [`SendAuthorization`](#SendAuthorization), `MaxTokens` gets updated after each 
valid authorized staking action. 
An authorized staking action that uses tokens beyond the `MaxTokens` is not allowed.

---

#### GenericAuthorization
`GenericAuthorization` implements an authorization to the _grantee_ to perform, on behalf of the _granter_, 
a generic action.
In other words, `GenericAuthorization` facilitates an arbitrary action grant, where a `MsgTypeURL` must be specified 
to correspond to an action defined in the [modules](./module_overview.md). 
A `GenericAuthorization` is currently unrestricted beyond the `MsgTypeURL`. For example, when granting someone to 
send tokens, the `SpendLimit` in [`SendAuthorization`](#SendAuthorization) will not be enforced.
Therefore, a [`SendAuthorization`](#SendAuthorization) without a spend limit may in fact be implemented as a `GenericAuthorization` with the 
`MsgTypeURL` been set to `/cosmos.bank.v1beta1.MsgSend`.
The following are some common `MsgTypeURLs`:
- Send: `/cosmos.bank.v1beta1.MsgSend`
- Delegate: `/cosmos.staking.v1beta1.MsgDelegate`
- Unbond/Undelegate: `/cosmos.staking.v1beta1.MsgUndelegate`
- Redelegate: `/cosmos.staking.v1beta1.MsgBeginRedelegate`
- Withdraw delegator reward: `/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward`
- Mint NFT: `/chainmain.nft.v1.MsgMintNFT`
- Burn NFT: `/chainmain.nft.v1.MsgBurnNFT`
- Transfer NFT: `/chainmain.nft.v1.MsgTransferNFT`
- Edit NFT: `/chainmain.nft.v1.MsgEditNFT`

---

::: tip NOTE
**Expiration of Grant**:
The _granter_ can optionally set an `Expiration` time in form of a UNIX Timestamp for any authorization grant.
The `Expiration` time should be later than current UNIX Timestamp and is defaulted to be one year from current time if unspecified.
An authorization may be executed only if the grant has not yet expired. 
Setting an `Expiration` time for an authorization grant is generally encouraged.
:::


### Transactions and Queries

### Transactions
In general, a _granter_ can `grant` an authorization to a _grantee_ 
or `revoke` an existing authorization already granted to the _grantee_.
A _grantee_ can `execute` an authorization already granted by the _granter_.

### `grant`:
An authorization starts from the _granter_ granting the _grantee_.

---

- under `SendAuthorization`
#### `tx authz grant [grantee_address] send --spend-limit [amount] --from [granter_address]`- **Grant to send with a spend limit**

::: details Example: Grant to send with a spend limit and an expiration time
The _granter_ may grant a _grantee_ to send tokens on the _granter_'s behalf, where a spend limit should be 
provided through the `--spend-limit` flag.
For example, _granter_ may authorize _grantee_ to spend up to `10 CRO`, 
and sets an expiration time at the end of the year 2022 (i.e. `1672531199` in Unix timestamp) by running
```bash
$ chain-maind tx authz grant <grantee_address> send --spend-limit 10cro --from <granter_address> --expiration 1672531199 --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/cosmos.authz.v1beta1.MsgGrant",
    "grant": {
        "authorization": {
            "@type": "/cosmos.bank.v1beta1.SendAuthorization",
            "spend_limit": [
                {
                    "amount": "1000000000",
                    "denom": "basecro"
                }
            ]
        },
        "expiration": "2022-12-31T23:59:59Z"
    },
    "grantee": "cro1j...",
    "granter": "cro18..."
}
```
:::

---

- under `StakeAuthorization`
#### `tx authz grant [grantee_address] delegate --spend-limit [amount] --allowed-validators [list_of_allowed_validators_separated_by_,] --from [granter_address]`- **Grant to delegate to validators on a specified list**

::: details Example: Grant to delegate to validators on a specified list with a spend limit
The _granter_ may grant a _grantee_ to delegate tokens on the _granter_'s behalf, where either a list of allowed validators 
(through the `--allowed-validators` flag) or denied validators (through the `--deny-validators` flag) should be provided.
For example, _granter_ may authorize _grantee_ to delegate on the _granter_'s behalf up to `10 CRO` towards 
a specified list of validators by running
```bash
$ chain-maind tx authz grant <grantee_address> delegate --spend-limit 10cro --allowed-validators <list_of_allowed_validators_separated_by_,> --from <granter_address> --expiration <expiration_time> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/cosmos.authz.v1beta1.MsgGrant",
    "grant": {
        "authorization": {
            "@type": "/cosmos.staking.v1beta1.StakeAuthorization",
            "allow_list": {
                "address": [
                    "crocn..."
                ]
            },
            "authorization_type": "AUTHORIZATION_TYPE_REDELEGATE",
            "max_tokens": {
                "amount": "1000000000",
                "denom": "basecro"
            }
        },
        "expiration": "2022-12-31T23:59:59Z"
    },
    "grantee": "cro1j...",
    "granter": "cro18..."
}
```
:::

On the contrary, the _granter_ may choose to exclude a list of validators the _grantee_ can delegate to on the _granter_'s behalf:
#### `tx authz grant [grantee_address] delegate --spend-limit [amount] --deny-validators [list_of_deny_validators_separated_by_,] --from [granter_address]`- **Grant to delegate to validators excluding a specified list**

Granting to redelegate or undelegate (unbond) is very similar by just replacing the `delegate` with `redelegate` or `unbond`:
#### `tx authz grant [grantee_address] redelegate --spend-limit [amount] --allowed-validators [list_of_allowed_validators_separated_by_,] --from [granter_address]`- **Grant to redelegate to validators on a specified list**
#### `tx authz grant [grantee_address] unbond --spend-limit [amount] --allowed-validators [list_of_allowed_validators_separated_by_,] --from [granter_address]`- **Grant to unbond from validators on a specified list**

::: tip NOTE
**Spend Limit for `StakeAuthorization`**:
A spend limit for a grant to delegate/redelegate/unbond is not necessary but generally recommended.
:::

---

- under `GenericAuthorization`

Other than the above grants under `SendAuthorization` or `StakeAuthorization`, one may authorize other grants through `GenericAuthorization`:
#### `tx authz grant [grantee_address] generic --msg-type [msg_type_url] --from [granter_address]`- **Grant for generic authorization with a specified Message Type URL**

::: details Example: Grant to withdraw delegator reward
```bash
$ chain-maind tx authz grant <grantee_address> generic --msg-type /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward --from <granter_address> --expiration <expiration_time> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/cosmos.authz.v1beta1.MsgGrant",
    "grant": {
        "authorization": {
            "@type": "/cosmos.authz.v1beta1.GenericAuthorization",
            "msg": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"
        },
        "expiration": "2022-12-31T23:59:59Z"
    },
    "grantee": "cro1j...",
    "granter": "cro18..."
}
```
:::

Similarly: 
#### `tx authz grant [grantee_address] generic --msg-type /chainmain.nft.v1.MsgMintNFT --from [granter_address]`- **Grant to mint NFT**
#### `tx authz grant [grantee_address] generic --msg-type /chainmain.nft.v1.MsgTransferNFT --from [granter_address]`- **Grant to transfer NFT**
#### `tx authz grant [grantee_address] generic --msg-type /chainmain.nft.v1.MsgEditNFT --from [granter_address]`- **Grant to edit NFT**
so on and so forth.

---

::: tip NOTE
**Message Type URL & Updating an Existing Grant**:
At any time, there is up to one grant allowed for each Message Type URL over a unique _granter_-_grantee_ pair. 
To update an existing grant, the _granter_ will need to re-grant the _grantee_ and the new grant will overwrite the old grant. 
:::

### `exec`:
The `exec` transaction composes of 2 transactions:
- the `authorized transaction`: the transaction to be executed on behalf of the _granter_; and
- the `execution transaction`: the transaction that contains and executes the above `authorized transaction`.

After a valid grant is set up, the _grantee_ needs to first prepare the `authorized transaction`, in JSON format, on behalf of the _granter_.
For instance, when the _grantee_ wants to execute a `SendAuthorization` to send `10 CRO` from the _granter_ to a `recipient`,
one easy way to generate such `authorized transaction` and saves it to a file named `tx.json` is to use the `--generate-only` flag by running:
```bash
$ chain-maind tx bank send <granter_address> <recipient_address> 10cro --from <granter_address> --chain-id <chain-id> --generate-only > tx.json

## Illustrative partial transaction payload in tx.json ##
{
    "@type": "/cosmos.bank.v1beta1.MsgSend",
    "amount": [
        {
            "amount": "1000000000",
            "denom": "basecro"
        }
    ],
    "from_address": "cro18...",
    "to_address": "cro1j..."
}
```
::: tip NOTE
The `authorized transaction` here does not need to be signed and the address after the `--from` flag 
is the `granter_address` instead of the `grantee_address`.
In other words, this `authorized transaction` is created by the _grantee_ but prepared as if he/she were the _granter_.
:::

After the `authorized transaction` is properly prepared, the _grantee_ needs to issue an `execution transaction` to 
execute the `authorized transaction`:
#### `tx authz exec [tx_json] --from [grantee_address]` - **Execute an authorization**

```bash
$ chain-maind tx authz exec tx.json --from <grantee_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/cosmos.authz.v1beta1.MsgExec",
    "grantee": "cro1j...",
    "msgs": [
        {
            "@type": "/cosmos.bank.v1beta1.MsgSend",
            "amount": [
                {
                    "amount": "1000000000",
                    "denom": "basecro"
                }
            ],
            "from_address": "cro18...",
            "to_address": "cro1j..."
        }
    ]
}
```

Likewise, all valid authorized grants can be executed with proper `authorized transaction` and `execution transaction`.

### `revoke`:
The _granter_ may choose to `revoke` an existing authorization already granted to the _grantee_ by running:
#### `tx authz revoke [grantee_address] [msg_type_url] --from [granter_address]` - **Revoke an authorization with a specified Message Type URL**

::: details Example: Revoke an existing SendAuthorization
```bash
$ chain-maind tx authz revoke <grantee_address> /cosmos.bank.v1beta1.MsgSend --from <granter_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/cosmos.authz.v1beta1.MsgRevoke",
    "grantee": "cro1j...",
    "granter": "cro18...",
    "msg_type_url": "/cosmos.bank.v1beta1.MsgSend"
}
```
:::


### Queries

#### `query authz grants [granter_address] [grantee_address]` - Query all existing grants between a _granter_-_grantee_ pair

::: details Example: Query all existing grants between the specified granter and grantee
```bash
$ chain-maind query authz grants <granter_address> <grantee_address> --output json | jq
{
  "grants": [
    {
      "authorization": {
        "@type": "/cosmos.authz.v1beta1.GenericAuthorization",
        "msg": "/chainmain.nft.v1.MsgTransferNFT"
      },
      "expiration": "2022-12-31T23:59:59Z"
    },
    {
      "authorization": {
        "@type": "/cosmos.authz.v1beta1.GenericAuthorization",
        "msg": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"
      },
      "expiration": "2022-12-31T23:59:59Z"
    },
    {
      "authorization": {
        "@type": "/cosmos.staking.v1beta1.StakeAuthorization",
        "max_tokens": {
          "denom": "basecro",
          "amount": "1000000000"
        },
        "allow_list": {
          "address": [
            "crocn..."
          ]
        },
        "authorization_type": "AUTHORIZATION_TYPE_DELEGATE"
      },
      "expiration": "2022-12-31T23:59:59Z"
    }
  ],
  "pagination": {
    "next_key": null,
    "total": "0"
  }
}
```
:::

We may also specify a `MsgTypeURL` for the query:
#### `query authz grants [granter_address] [grantee_address] [msg_type_url]` - Query the grant with a specified Message Type URL between a _granter_-_grantee_ pair

::: details Example: Query the grant to withdraw delegator reward between the specified granter and grantee
```bash
$ chain-maind query authz grants <granter_address> <grantee_address> /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward --output json | jq
{
  "grants": [
    {
      "authorization": {
        "@type": "/cosmos.authz.v1beta1.GenericAuthorization",
        "msg": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"
      },
      "expiration": "2022-12-31T23:59:59Z"
    }
  ],
  "pagination": null
}
```
:::


## `bank` 

### Introduction

The `bank` module maintains the state of two primary objects:

- Account balances by address;
- Total supply of tokens of the chain

`bank` module tracks and provides query support for the total supply of all assets used in the application. It also supports token transfer functionalities. Specifically, the total supply is updated whenever a token is:

- **Minted**, e.g. Token created by the [mint](#mint) module; or
- **Burned**, e.g. Token distorted by the [slashing](#slashing) module.

### Transactions and Queries

### Transactions

#### `tx bank send [from_key_or_address] [to_address] [amount] [network_id]` - **Send Funds**

You can transfer tokens to a designated address by the `tx bank send` command. For example, we can send 10 CRO from `address_a` to `address_b` by

```bash
$ chain-maind tx bank send <address_a> <address_b> 10cro --chain-id <chain-id>

## Transaction payload##
{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```



### Queries

#### `query bank balances [address]` - Check the balance of a specified account

One can check the current balance of a specified account by:

```json
$ chain-maind query bank balances <address> --output json | jq
    {
    "balances": [
        {
        "denom": "basecro",
        "amount": "[token_balance]"
        }
    ],
    "pagination": {
        "next_key": null,
        "total": "0"
    }
    }
```

#### `query bank total` - Check the total supply of the token

You can also check the current total supply of the token by:

```json
$ chain-maind query bank total --output json | jq
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_supply_amount]"
        }
    ]
    }
```


### Appendix

#### `bank` module: Network Parameters and configuration

| Key                  | Type          | Example                              |
| -------------------- | ------------- | ------------------------------------ |
| `SendEnabled`        | []SendEnabled | [{denom: "basecro", enabled: true }] |
| `DefaultSendEnabled` | bool          | true                                 |

## `distribution`

### Introduction

The `distribution` module is responsible for the distribution of rewards to the validators and delegators.

### Overview

#### Network Parameters

Below are all the network parameters for the `distribution` module:

- `community_tax` - The rate of community tax;
- `base_proposer_reward` - Base bonus on transaction fees collected in a valid block;
- `bonus_proposer_reward` - Maximum bonus on transaction fees collected in a valid block;
- `withdraw_addr_enabled` - Whether delegators can set a different address to withdraw their rewards.

#### Rewards

There are two main types of rewards

- Block rewards, governed by the [mint](#mint) module; and
- [Transaction fees bonus](#transaction-fees-bonus).

#### Block reward

Block rewards are distributed proportionally to all validators relative to their voting power. This means that even though each validator gains CRO with each reward, all validators will maintain equal weight over time.

For the validator operator, the distribution information is updated if:

- the amount of delegation to a validator is updated (delegation, unbond, slashing, etc.);
- a validator successfully proposes a block and receives the reward;
- any delegator withdraws from a validator, or
- the validator withdraws it's commission.

For delegators, once they have delegated to a validator, they will be entitled to a portion of the total reward obtained by the validators. The reward is proportional to their delegated amount, and the commission charged by the validator operator (if any).

#### Transaction Fees Bonus

When a validator is selected to propose the next block, they must include at least 66% precommits of the previous block. To incentivise validators to include more than 66% precommits, the module provide a bonus reward (portion of the transaction fee in the block) to the proposer.

This bonus reward is dependent linearly on the precommits from the other validators. Starting from 66% of the precommits, the basic bonus will be `base_proposer_reward` and increase linearly to `bonus_proposer_reward` when the validator includes 100% of the precommits.

This mechanism aims to incentivize non-empty block proposals, better networking between validators as well as to mitigate censorship. For further example, kindly refer to this [link](https://hub.cosmos.network/main/validators/validator-faq.html).

#### Community tax

The `community_tax` is the tax rate of the reward obtained by the validator. Specifically, part of the reward will be taxed and sent to the community pool. The funds in the community pool can be withdrawn by submitting a community pool spend proposal with the [gov module](#gov).

Even if the `community_tax` is set to be zero, the balance of the community pool could be non-zero. For example, the truncated remainder in some accounting edge cases will be sent to the community pool as well. Besides that, users can fund the community pool voluntarily, and there could be funds allocated to the community pool in the [genesis](./genesis_file.md).

### Transactions and Queries

### Transactions

#### `tx distribution withdraw-all-rewards` - Withdraw all delegations rewards for a delegator

Delegator can withdraw their reward(s) from the validator(s) that they have delegated to all at once.

#### `tx distribution withdraw-rewards [validator-addr]` - Withdraw rewards from a given validator address

Delegator can withdraw their reward(s) from a specific validator.

:::tip Remark:
Validator operation can withdraw the commission in addition to the rewards by adding the commission flag `--commission`.
:::

#### `tx distribution set-withdraw-addr [withdraw-addr]` - Change the default withdraw address for rewards associated with an address

Delegator can set a different address to withdraw their rewards.

#### `tx distribution fund-community-pool [amount]` - Funds the community pool with the specified amount

Users can make a contribution to the community pool with a specific amount.

### Queries

#### `query distribution commission [validator]` - Query distribution validator commission

We can check the commission of a specific validator.

#### `query distribution community-pool` - Query the amount of coins in the community pool

We can check the balance of the community pool.

#### `query distribution rewards [delegator-addr] [validator-addr]` - Query all distribution delegator rewards or rewards from a particular validator

we can check the current rewards for a delegation on a specific validator.

#### `query distribution slashes [validator] [start-height] [end-height]` - Query distribution validator slashes

We can check the history of slashing events of a validator.

#### `query distribution validator-outstanding-rewards [validator]` - Query distribution outstanding rewards for a validator and all their delegations

We can check distribution outstanding (un-withdrawn) rewards for a validator and all of their delegations.

#### `query distribution params ` - Query the current distribution parameters

We can query the current distribution parameters by

```json
$ chain-maind query distribution params --output json | jq

  {
    "community_tax": "0.000000000000000000",
    "base_proposer_reward": "0.010000000000000000",
    "bonus_proposer_reward": "0.040000000000000000",
    "withdraw_addr_enabled": true
  }
```

### Appendix

#### `distribution` module: Network Parameters and configuration

The following tables show the overall effects of the distribution related network parameters on different configurations:

|                      | `community_tax`                               | `base_proposer_reward`                               | `bonus_proposer_reward`              |
| -------------------- | --------------------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| Type                 | string (dec)                                  | string (dec)                                         | string (dec)                         |
| Higher               | More reward will goes into the community pool | Higher basic transaction fees bonus for the proposer | Easier for a proposal to be passed   |
| Lower                | Less reward will goes into the community pool | Lower basic transaction fees bonus for the proposer  | Harder for a proposal to be passed   |
| Constraints          | Value has to be less or equal to `1`          | Value has to be less or equal to `1`                 | Value has to be less or equal to `1` |
| Sample configuration | `0` (0%)                                      | `0.01` (1%)                                          | `0.04` (4%)                          |


## `gov`

### Introduction

The `gov` module enables on-chain governance which allows Crypto.org Chain token holders to participate in the decision-making processes. For example, users can:

- Form an idea and seek feedback;
- Create the proposal and adjust according to feedback as needed;
- Submit a proposal along with an initial deposit;
- Deposit tokens and fund an active proposal;
- Vote for an active proposal.

The details about the governance proposal process are available on [The Proposal Process page](https://crypto.org/docs/chain-details/govprocess.html).

### Overview

#### Network parameters

Below are all the network parameters for the `gov` module:

- `deposit_params` - Deposit related parameters:
  - `min_deposit`: Minimum deposit for a proposal to enter voting period; and
  - `max_deposit_period`: Maximum period for CRO holders to deposit on a proposal.
- `voting_params` - Voting related parameters
  - `voting_period`: The length of the voting period.
- `tally_params` - Tally related parameters
  - `quorum`: The minimum percentage of voting power that needs to be casted on a proposal for the result to be valid;
  - `threshold`: Minimum proportion of `Yes` votes (excluding `Abstain` votes) for the proposal to be accepted; and
  - `veto`: Minimum proportion of `Veto` votes to total votes ratio for proposal to be vetoed.

#### The Governance Procedure

**Phase 0 - Submit a proposal along with an initial deposit:**

Users can submit a proposal with an initial deposit. The proposal will then become "active" and enter the _deposit period_.

**Phase 1 - Deposit period**

During the _deposit period_, users can deposit and support an active proposal. Once the deposit of the proposal reaches `min_deposit`, it will enter the _voting period_. Otherwise, if the proposal is not successfully funded within `max_deposit_period`, it will become inactive and the entire deposit will be refunded.

**Phase 2 - Voting period**

During the _voting period_, staked (bonded) tokens will be able to participate in the voting. Users can choose one of the following option: `"yes"`, `"no"`, `"no_with_veto"` and `"abstain"`

After the `voting_period` has passed, there are several scenarios where a proposal will be considered to be "Rejected", for example, if

- No one votes (everyone `"abstain"`);
- Votes did not reach the `quorum`;
- More than `veto` of voters vote for `"no_with_veto"`;
- More than `threshold` of non-abstaining voters vote `"no"`.

Otherwise, the proposal will be accepted and changes will be implemented according to the proposal.

### Transactions and Queries

### Transactions

#### `tx gov submit-proposal` - Submit a proposal along with an initial deposit

- Submit a parameter change proposal - `param-change [proposal-file]`

  Users can submit a proposal to modify network parameters during runtime. Here is a demo proposal if we would like to change the parameter `MaxValidators` (maximum number of validators) in the `staking` module,

  ```json
  {
    "title": "Staking Param Change",
    "description": "Update max validators",
    "changes": [
      {
        "subspace": "staking",
        "key": "MaxValidators",
        "value": 151
      }
    ]
  }
  ```

- Submit a community pool spend proposal - `community-pool-spend [proposal-file]`

  Users can submit a proposal and request funds from the community pool to support their projects or other usages.

- Submit a software upgrade proposal- `software-upgrade [name] (--upgrade-height [height] | --upgrade-time [time]) (--upgrade-info [info])`

  Users can submit an upgrade proposal and suggest a software upgrade at a specific block height.

- Cancel the current software upgrade proposal - `cancel-software-upgrade`

  On the other hand, users can submit a proposal to cancel the planned software upgrade.

#### `tx gov deposit [proposal-id] [deposit]` - Deposit tokens for an active proposal

Users can submit a deposit transaction to fund and support an active proposal.

#### `tx gov vote [proposal-id] [option]` - Vote for an active proposal

Users can vote for an active proposal. Valid value of `"option"` field can be `"yes"`, `"no"`, `"no_with_veto"` and `"abstain"`.

### Queries

#### `query gov proposals [proposal-id]` - Query proposals with optional filters

We can check the proposal with optional filters by:

```json
$ chain-maind query gov proposals -o json | jq

  {
    "proposals": [
      {
        "proposal_id": "1",
        "content": {
          "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",
          "title": "Staking Param Change",
          "description": "Update max validators",
          "changes": [
            {
              "subspace": "staking",
              "key": "MaxValidators",
              "value": "151"
            }
          ]
        },
        "status": "PROPOSAL_STATUS_PASSED",
        "final_tally_result": {
          "yes": "50040000000000",
          "abstain": "0",
          "no": "0",
          "no_with_veto": "0"
        },
        "submit_time": "2020-10-15T10:05:49.996956080Z",
        "deposit_end_time": "2020-10-15T22:05:49.996956080Z",
        "total_deposit": [
          {
            "denom": "basecro",
            "amount": "100000000000"
          }
        ],
        "voting_start_time": "2020-10-15T10:14:56.958963929Z",
        "voting_end_time": "2020-10-15T22:14:56.958963929Z"
      }
    ],
    "pagination": {
      "next_key": null,
      "total": "0"
    }
  }
```

In the above example, there is only one proposal with `"proposal_id": "1"`, with the title: `"Staking Param Change"` that change the `MaxValidators` parameter of the `staking` module to `151`. We can also see that the status of the proposal is `"PROPOSAL_STATUS_PASSED"`, which means that this proposal has been passed.

#### `query gov proposal [proposal-id]` Query details of a single proposal

Similarly, we can check the details of a proposal with a given `"proposal_id"`.

#### `query gov tally [proposal-id]` Get the tally of a proposal vote

We can also check the tally of a proposal with a given `"proposal_id"`.

#### `query gov params` - Query the current gov parameters

We can query the current gov parameters by

```json
$ chain-maind query gov params --output json | jq

  {
    "voting_params": {
      "voting_period": "43200000000000"
    },
    "tally_params": {
      "quorum": "0.334000000000000000",
      "threshold": "0.500000000000000000",
      "veto_threshold": "0.334000000000000000"
    },
    "deposit_params": {
      "min_deposit": [
        {
          "denom": "basecro",
          "amount": "10000000"
        }
      ],
      "max_deposit_period": "43200000000000"
    }
  }
```

### Appendix

#### `gov` module: Network Parameters and configuration

The following tables show the overall effects of the gov related network parameters on different configurations:

|                      | `min_deposit`                               | `max_deposit_period`         | `voting_period`              |
| -------------------- | ------------------------------------------- | ---------------------------- | ---------------------------- |
| Type                 | array (coins)                               | string (time ns)             | string (time ns)             |
| Higher               | Larger window for calculating the downtime  | Longer deposit period        | Longer voting period         |
| Lower                | Smaller window for calculating the downtime | Shorter deposit period       | Shorter voting period        |
| Constraints          | Value has to be a positive integer          | Value has to be positive     | Value has to be positive     |
| Sample configuration | `100000` (100000 CRO)                       | `1209600000000000` (2 weeks) | `1209600000000000` (2 weeks) |

|                      | `quorum`                                  | `threshold`                               | `veto`                                    |
| -------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| Type                 | string (dec)                              | string (dec)                              | string (dec)                              |
| Higher               | Easier for a proposal to be passed        | Easier for a proposal to be passed        | Easier for a proposal to be passed        |
| Lower                | Harder for a proposal to be passed        | Harder for a proposal to be passed        | Harder for a proposal to be passed        |
| Constraints          | Value has to be less than or equal to `1` | Value has to be less than or equal to `1` | Value has to be less than or equal to `1` |
| Sample configuration | `0.15` (15%)                              | `0.5` (50%)                               | `0.33` (33%)                              |


## `mint`

### Introduction

The `mint` module is responsible for creating tokens in a flexible way to reward the validators who participate in the proof of stake consensus process (see also the [distribution module](#distribution)). It is also designed in a way to bring a balance between market liquidity and staked supply.

### Overview

#### Network parameters

Below are all the network parameters for the `mint` module:

- `"blocks_per_year"` - The expected number of blocks being produced per year;
- `"goal_bonded"` - Goal of bonded tokens in percentage;
- `"inflation_max"` - Maximum annual inflation rate;
- `"inflation_min"` - Minimum annual inflation rate;
- `"inflation_rate_change"` - Maximum annual change in inflation rate;
- `"mint_denom"` - Type of the token being minted.

The target annual inflation rate is recalculated for each previsions cycle. The inflation is also subject to a rate change (positive or negative) depending on the distance from the desired ratio (`"goal_bonded"`). The maximum rate change possible is defined to be `"inflation_rate_change"` per year, where the annual inflation is capped between `"inflation_min"` and `"inflation_max"`.

### `mint` module: Queries

### Queries

#### `query mint params` - Query the current minting annual provisions value

We can query the current minting annual provisions value, for example:

```json
  $ chain-maind query mint annual-provisions
  109573801550200370
```

implies that the current minting annual provisions will be `109573801550200370` basecro ( i.e. `1,095,738,015` CRO)

#### `query mint inflation` - Query the current minting inflation value

We can query the current minting inflation value, for example:

```json
  $ chain-maind query mint inflation
  0.013687008526984104
```

implies that the current minting annual provisions will be `0.013687008526984104`( i.e. `1.368%`)

#### `query mint annual-provisions` - Query the current minting parameters

We can query the current query parameters by

```json
$ chain-maind query mint params --output json | jq

  {
    "mint_denom": "basecro",
    "inflation_rate_change": "0.013000000000000000",
    "inflation_max": "0.020000000000000000",
    "inflation_min": "0.007000000000000000",
    "goal_bonded": "0.670000000000000000",
    "blocks_per_year": "6311520"
  }
```

### Appendix

#### `gov` module: Network Parameters and configuration

The following tables show the overall effects of the mint related network parameters on different configurations:

|                      | `blocks_per_year`                  | `goal_bonded`                             | `mint_denom` |
| -------------------- | ---------------------------------- | ----------------------------------------- | ------------ |
| Type                 | array (coins)                      | string (dec)                              | string       |
| Higher               | More expected blocks per year      | Higher target bonding ratio               | N/A          |
| Lower                | Less expected blocks per year      | Lower target bonding ratio                | N/A          |
| Constraints          | Value has to be a positive integer | Value has to be less than or equal to `1` | N/A          |
| Sample configuration | `5256000` (5,256,000 blocks)       | `0.66` (66%)                              | `basecro`    |

|                      | `inflation_max`                            | `inflation_min`                           | `inflation_rate_change`                             |
| -------------------- | ------------------------------------------ | ----------------------------------------- | --------------------------------------------------- |
| Type                 | string (dec)                               | string (dec)                              | string (dec) (dec)                                  |
| Higher               | Higher ceiling for the inflation rate      | Higher floor for the inflation rate       | Higher yearly rate of change for the inflation      |
| Lower                | Lower ceiling for the inflation rate       | Lower floor for the inflation rate        | Lower yearly rate of change for the inflation       |
| Constraints          | Value has to be less than or equal to `1`  | Value has to be less than or equal to `1` | Value has to be less than or equal to `1`           |
| Sample configuration | `0.02` (2%)                                | `0.01` (1%)                               | `0.01` (1%)                                         |


## `nft`

### Introduction

Fungible tokens are mutually interchangeable, and one most common example of fungible tokens is fiat currencies.
Specifically, the $100.50 US dollars in my bank account is equally valuable as the $100.50 US dollars in someone else's bank account.
Another example of fungible tokens would be **Bitcoin**, the most popular cryptocurrency. 
Bitcoins are totally fungible, meaning that one Bitcoin is equal to one Bitcoin, and it's equal to any other Bitcoin as well.
Particularly, Bitcoins are also highly divisible up to one **Satoshi**, or 0.00000001 Bitcoin.

In contrast, non-fungible tokens (NFTs) are special tokens that are unique in the sense that they cannot be split or equally interchanged for other NFTs of the same type.
**CryptoKitties** on **Ethereum** or **Loaded Lions** on **Crypto.org Chain** are both examples of NFTs: 
each **CryptoKitty** or **Loaded Lion** are unique and non-divisible, unlike **Bitcoin**.
Generally speaking, NFTs are unique, non-interchangeable, and non-divisible.

On-chain NFT standards were first developed on **Ethereum** within the **ERC-721** standard and its subsequent **Ethereum Improvement Proposals**. 
The subsequent **ERC-1155** standard aims to address some restrictions of **Ethereum** such as storage costs and semi-fungible assets.
NFTs on application specific blockchains share some but not all features as their **Ethereum** brethren, 
since application specific blockchains are more flexible in how their resources are utilized, such as the ability to use strings as IDs.

The `nft` module here facilitates managing non-fungible tokens that represent individual assets with unique features on **Crypto.org Chain**.

### Overview

There are two key concepts for NFTs on **Crypto.org Chain**, namely, **denom** and **token**:

- #### denom
    A denom represents a collection of NFTs. 
    For example, I could issue a denom named "CryptoPuppies" under which my collection of 100 CryptoPuppies NFTs get minted. 
    Each denom has a `denom ID` and a `denom name`, both are unique on chain. 
    A `denom schema` should generally be set when a denom gets issued, which indicates the format of NFT metadata under this denom.

- #### token
    An NFT, or simply "token", is a specific instance of NFT minted under a denom. Each token has a `token ID`, which is unique under a specific denom.
    Generally, a token also has its `token name` (name of the NFT), 
    `token URI` (off-chain information or storage location of the NFT), 
    and `token metadata` (on-chain data that provides information about the NFT).

::: tip Specifications
`denom ID`: a string of lowercase alphanumeric characters with length between 3 and 64 that begins with a letter, unique over the chain;

`denom name`: a non-empty string, unique over the chain;

`denom schema`: a JSON metadata format for NFTs under this denom;

`token ID`: a string that is unique under the denom;

`token name`: a string;

`token URI`: a string that directs to the off-chain information or storage location of the NFT;

`token metadata`: a JSON object that matches the denom schema and represents the on-chain data that provides information about the NFT.
:::

Just as each user is uniquely identified by its address, each NFT is uniquely identified by the combination of its **denom ID** and its **token ID** (like a UID for the NFT),
showing its uniqueness, non-interchangeability, and non-divisibility.

---

### Transactions and Queries

### Transactions
In general,
1. any user may `issue` a denom as long as neither the **denom ID** nor the **denom name** has been taken;
2. the creator of a denom, also know as the owner of the denom, is the only user who may `mint` an NFT under such denom;
3. a user may `edit` or `burn` an NFT only if he/she is both the creator and the owner of that NFT;
4. a user may `transfer` an NFT as long as he/she is the owner of that NFT.

---

### `issue`:
Every NFT needs to "live" under a denom: an NFT collection. 
Therefore, the first step is to issue a denom before one can mint NFTs:

#### `tx nft issue [denom_id] --name [denom_name] --schema [denom_schema] --from [user_address]`- **Issue a denom**
::: details Example: Issue a new denom with specified name and schema
Apart from the denom ID and the denom name, one, in most cases, should also specify the schema of the denom 
to illustrate the format of NFT metadata under such denom:
```bash
$ chain-maind tx nft issue fftb2050 --name "Fortune Favours the Brave 2050" --schema '{ "Name": "string", "Description": "string" }' --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgIssueDenom",
    "id": "fftb2050",
    "name": "Fortune Favours the Brave 2050",
    "schema": "{ \"Name\": \"string\", \"Description\": \"string\" }",
    "sender": "cro18..."
}
```
:::

::: tip NOTE
Even though the denom schema is not a compulsory field, it is generally recommended for informative summary of such denom.
Moreover, a denom is non-transferable, non-editable, and non-deletable, so be mindful when issuing a denom.
:::

---

### `mint`:
When a denom has been issued, the denom owner (the creator) may mint an NFT under such denom. 

#### `tx nft mint [denom_id] [token_id] --name [token_name] --uri [token_uri] --data [token_metadata] --recipient [recipient_address] --from [user_address]`- **Mint an NFT**
::: details Example: Mint an NFT with specified name, URI, data, and recipient
```bash
$ chain-maind tx nft mint fftb2050 v1ed1 --name "Version 1 Edition 1" --uri "https://crypto.com/fftb" --data '{ "Name": "v1", "Description": "ed1"}' --recipient <recipient_address> --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgMintNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "name": "Version 1 Edition 1",
    "uri": "https://crypto.com/fftb",
    "data": "{ \"Name\": \"v1\", \"Description\": \"ed1\"}",
    "sender": "cro18...",
    "recipient": "cro18..."
}
```
:::

::: tip NOTE
The token name, URI, and metadata fields are optional but highly recommended fields during the minting process, 
even though they might also be edited later through `edit`.
In addition, the minter may specify a recipient of the new NFT, where it defaults to be just the minter if not specified.
:::

---

### `edit`:
Unlike NFTs minted on **Ethereum**, an NFT minted on **Crypto.org Chain** may easily be edited, 
provided that the user editing it is both the owner and creator of such NFT. 

#### `tx nft edit [denom_id] [token_id] --name [new_name] --uri [new_uri] --data [new_metadata] --from [user_address]`- **Edit an NFT**
::: details Example: Edit an NFT to change its URI
```bash
$ chain-maind tx nft edit fftb2050 v1ed1 --uri "https://crypto.com/nft" --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgEditNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "name": "[do-not-modify]",
    "uri": "https://crypto.com/nft",
    "data": "[do-not-modify]",
    "sender": "cro18..."
}
```
:::

::: tip NOTE
There are 3 fields available for NFT editing: name, URI, and the metadata. Any field that is not specified will remain unchanged.
:::

---

### `burn`:
A user may burn an existing NFT as long as he/she is both the owner and creator of such NFT, similar to editing the NFT.

#### `tx nft burn [denom_id] [token_id] --from [user_address]`- **Burn an NFT**
::: details Example: Burn an NFT
```bash
$ chain-maind tx nft burn fftb2050 v1ed1 --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgBurnNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "sender": "cro18..."
}
```
:::

::: tip NOTE
A token ID is unique under a specific denom, meaning no two existing NFTs can share the same token ID under the same denom.
However, when an NFT gets burnt, its token ID is freed and is available for mint again.
:::

---

### `transfer`:
Transferring an NFT is easy: one only needs to be the owner of the NFT.
#### `tx nft transfer [recipient_address] [denom_id] [token_id] --from [granter_address]` - **Transfer an NFT**
::: details Example: Transfer an NFT to a recipient
```bash
$ chain-maind tx nft transfer <recipient_address> fftb2050 v1ed1 --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgTransferNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "sender": "cro18...",
    "recipient": "cro1j..."
}
```
:::

---

### Queries
In the NFT module, queries can be divided into 3 main categories:
- denom information;
- token information;
- owner information.

---

- #### query denom information:

#### `query nft denom [denom_id]` - Query information of a denom by its denom ID
::: details Example: Query information of a denom by its denom ID
```bash
$ chain-maind query nft denom fftb2050 --output json | jq
{
  "id": "fftb2050",
  "name": "Fortune Favours the Brave 2050",
  "schema": "{ \"Name\": \"string\", \"Description\": \"string\" }",
  "creator": "cro18..."
}
```
:::

Effectively, one may also query information of a denom by its denom name instead of denom id:
#### `query nft denom-by-name [denom_name]` - Query information of a denom by its denom name

To check the number of existing NFTs in a denom:
#### `query nft supply [denom_id]` - Query the number of existing NFTs in a denom
::: details Example: Query the number of existing NFTs in a denom
```bash
$ chain-maind query nft supply fftb2050
amount: "3"
```
:::

In addition, one may query the number of existing NFTs in a denom of a specific owner through the `--owner` flag:
#### `query nft supply [denom_id] --owner [owner_address]` - Query the number of existing NFTs in a denom of a specific owner
::: details Example: Query the number of existing NFTs in a denom of a specific owner
```bash
$ chain-maind query nft supply fftb2050 --owner <owner_address>
amount: "2"
```
:::

---

- #### query token information:

One may query information of a specific NFT with its UID (denom ID and token ID):
#### `query nft token [denom_id] [token_id]` - Query information of an NFT
::: details Example: Query information of an NFT
```bash
$ chain-maind query nft token fftb2050 v1ed1 --output json | jq
{
  "id": "v1ed1",
  "name": "Version 1 Edition 1",
  "uri": "https://crypto.com/fftb",
  "data": "{ \"Name\": \"v1\", \"Description\": \"ed1\"}",
  "owner": "cro1j..."
}
```
:::

One may also query information of all NFTs under a specific denom:
#### `query nft collection [denom_id]` - Query information of all NFTs under a specific denom
::: details Example: Query information of all NFTs under a specific denom
```bash
$ chain-maind query nft collection fftb2050 --output json | jq
{
  "collection": {
    "denom": {
      "id": "fftb2050",
      "name": "Fortune Favours the Brave 2050",
      "schema": "{ \"Name\": \"string\", \"Description\": \"string\" }",
      "creator": "cro18..."
    },
    "nfts": [
      {
        "id": "v1ed1",
        "name": "Version 1 Edition 1",
        "uri": "https://crypto.com/fftb",
        "data": "{ \"Name\": \"v1\", \"Description\": \"ed1\"}",
        "owner": "cro1j..."
      },
      {
        "id": "v1ed2",
        "name": "Version 1 Edition 2",
        "uri": "https://crypto.com/fftb",
        "data": "{ \"Name\": \"v1\", \"Description\": \"ed2\"}",
        "owner": "cro1j..."
      },
      {
        "id": "v1ed3",
        "name": "Version 1 Edition 3",
        "uri": "https://crypto.com/fftb",
        "data": "{ \"Name\": \"v1\", \"Description\": \"ed3\"}",
        "owner": "cro18..."
      }
    ]
  },
  "pagination": {
    "next_key": null,
    "total": "0"
  }
}
```
:::

---

- #### query owner information:

Last but not least, information of a specific NFT owner may also be queried.

#### `query nft owner [owner_address]` - Query information of all NFTs owned by a specific owner
::: details Example: Query information of all NFTs owned by a specific owner
```bash
$ chain-maind query nft owner <owner_address> --output json | jq
{
  "owner": {
    "address": "cro1j...",
    "id_collections": [
      {
        "denom_id": "fftb2022",
        "token_ids": [
          "fftb1"
        ]
      },
      {
        "denom_id": "fftb2050",
        "token_ids": [
          "v1ed1",
          "v1ed2"
        ]
      }
    ]
  },
  "pagination": {
    "next_key": null,
    "total": "0"
  }
}
```
:::

One may also use the `--denom-id` flag to query owner NFT information under a specific denom:
#### `query nft owner [owner_address] --denom-id [denom_id]` - Query information of all NFTs owned by a specific owner under specified denom
::: details Example: Query information of all NFTs owned by a specific owner under specified denom
```bash
$ chain-maind query nft owner <owner_address> --denom-id fftb2050 --output json | jq
{
  "owner": {
    "address": "cro1j...",
    "id_collections": [
      {
        "denom_id": "fftb2050",
        "token_ids": [
          "v1ed1",
          "v1ed2"
        ]
      }
    ]
  },
  "pagination": {
    "next_key": null,
    "total": "0"
  }
}
```
:::


## `slashing`

### Introduction

Validators are responsible for signing or proposing a block at each consensus round. A penalty should be imposed on validators' misbehaviour to reinforce this.

Specifically, `slashing` functionality that aims to dis-incentivize network-observable actions, such as faulty validations. The penalties may include losing some amount of their stake, losing their ability to perform the network functionality for a period of time, collect rewards, etc.

### Overview

#### Network parameters

Below are all the network parameters used to configure the behavior of validator punishments. Details of all these parameters and their effect on behavior of validator punishments is discussed later in this document.

- `signed_blocks_window`: Number of blocks for which the liveness is calculated for uptime tracking;
- `min_signed_per_window`: Maximum percentage of blocks with faulty/missed validations allowed for an account in last; `signed_blocks_window` blocks before it gets deactivated;
- `downtime_jail_duration`: Duration for [jailing](#jailing);
-  `slash_fraction_double_sign`: Percentage of funds being slashed when validator makes a byzantine fault; and
-  `slash_fraction_downtime`: Percentage of funds being slashed when a validator is non-live.

#### Slashing mechanism

Punishments for a validator are triggered when they either make a _byzantine fault_ or become _non-live_:

- Liveness Faults (Low availability)

  A validator is said to be **non-live** when they fail to successfully sign at least `min_signed_per_window` blocks (in percentage) in the
  last `signed_blocks_window` blocks. `signed_blocks_window` and `min_signed_per_window` are network
  parameters and can be configured during genesis and can be updated during runtime by the governance module.

:::tip Example:
For example, if `block_signing_window` is `2000` blocks and `min_signed_per_window` is `0.5`, a validator will
be marked as **non-live** and jailed if they fail to successfully sign at least `2000*0.5=1000` blocks in the last `2000` blocks.
:::

- Byzantine Faults 

  A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and round. Tendermint has mechanisms to publish evidence of validators that signed conflicting votes so they can be punished by the slashing module. For example:
  

  - Validator who votes for two different blocks within a single round (*"Equivocation validator"*/ *"Double signing"*);


  - Validator who signs commit messages for arbitrary application state ( *"Lunatic validator"*).


**Remark**: The evidence of a set of validators attempting to mislead a light client can also be detected and captured. However, even the [Amnesia attack](https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-056-light-client-amnesia-attacks.md#amnesia-attack) can be detected, punishment can not be applied at this stage, as we can not deduce the malicious validators.

:::tip Implementation note:
Tendermint passes `Evidence` of a byzantine validator in `BeginBlock` request. Before jailing any account due to byzantine fault, that evidence should be verified. Also, it should be checked that evidence provided by tendermint is
not older than `max_age` in tendermint.
:::





### Inactivity Slashing

It is important that the validators maintain excellent availability and network connectivity to perform their tasks. A penalty should be imposed on validators' misbehaviour to reinforce this.

When a validator fails to successfully sign `missed_block_threshold` blocks in the last `block_signing_window` blocks, it is
immediately jailed and punished by deducting funds from their bonded and unbonded amount and removing them from the active validator set. The funds to be deducted are calculated based on `slash_fraction_downtime`. Kindly refer to this [link](https://docs.cosmos.network/v0.40/modules/slashing/04_begin_block.html) on the logic of the liveness tracking.

### Jailing

A validator is jailed when they make liveness or Byzantine fault. When a validator is jailed, it will no longer be considered as an active validator until they are un-jailed. Futhermore, it cannot be un-jailed
before `downtime_jail_duration`. This `downtime_jail_duration` is a
network parameter which can be configured during genesis.

:::warning Important:
When a validator is jailed because of a byzantine fault, their validator public key is added to a list of permanently banned validators and cannot re-join the network as a validator with the same public key, see [staking tombstone](https://docs.cosmos.network/master/modules/slashing/07_tombstone.html)
:::

#### Un-jailing

When a jailed validator wishes to resume normal operations (after `downtime_jail_duration` has passed), they can create an `unjail` transaction which marks them as un-jailed. Validator will then rejoin the validator set once it has been successful un-jailed.

### Slashing for Byzantine Fault

When there is byzantine fault detected, they are immediately slashed other than jailed. The funds to be deducted are calculated based on `slash_fraction_double_sign`. Furthermore, validators who commit this double-signing fault will also be put into the "tombstone state", which means it will be blacklisted and jailed forever.

### Transactions and Queries

### Transactions

#### `tx slashing unjail` - Unjailing a validator

Validators could be punished and jailed due to network misbehaviour, for example if we check the validator set:

```bash
$ chain-maind query staking validators -o json | jq
................................
    "operator_address": "crocncl18prgwae59zdqpwye6t4xftmq3d87vl0h0rj0qq",
    "consensus_pubkey": "crocnclconspub1zcjduepqg0yml2l63qjnhr2cuw4tvprr72tle0twf3zymrxllmr0sj9uv3tqmpcrhs",
    "jailed": true,
    "status": 1,
................................
```

After the jailing period has passed, one can broadcast an `unjail` transaction to unjail the validator and resume its normal operations by

```bash
$ chain-maind tx slashing unjail --from node1 --chain-id cro-test
  {"body":{"messages":[{"@type":"/cosmos.slashing.v1beta1.MsgUnjail"...}]}
  confirm transaction before signing and broadcasting [y/N]: y
```

### Queries

#### `query slashing params ` - Query the current slashing parameters

We can query the current slashing parameters by

```json
$ chain-maind query slashing params --output json | jq

  {
    "signed_blocks_window": "2000",
    "min_signed_per_window": "0.500000000000000000",
    "downtime_jail_duration": "3600s",
    "slash_fraction_double_sign": "0.050000000000000000",
    "slash_fraction_downtime": "0.001000000000000000"
  }
```

### Appendix

#### `slashing` module: Network Parameters and configuration

The following tables show overall effects on different configurations of the slashing related network parameters:

|                      | `signed_blocks_window`                      | `min_signed_per_window`         | `downtime_jail_duration`           |
| -------------------- | ------------------------------------------- | ------------------------------- | ---------------------------------- |
| Type                 | string (int64)                              | string (dec)                    | string (int64)                     |
| Higher               | Larger window for calculating the downtime  | Higher availability is required | Longer jailing duration            |
| Lower                | Smaller window for calculating the downtime | Lower availability is required  | Longer jailing duration            |
| Constraints          | Value has to be a positive integer          | Value has to be positive        | Value has to be a positive integer |
| Sample configuration | `2000` (2000 blocks)                        | `0.5` (50%)                     | `3600s` (1 hour)                   |

---

|                      | `slash_fraction_double_sign`              | `slash_fraction_downtime`                 |
| -------------------- | ----------------------------------------- | ----------------------------------------- |
| Type                 | string (dec)                              | string (dec)                              |
| Higher               | Heavier penalty on byzantine faults       | Heavier penalty on liveness faults        |
| Lower                | Lighter penalty on byzantine faults       | Lighter penalty on liveness faults        |
| Constraints          | Value has to be less than or equal to `1` | Value has to be less than or equal to `1` |
| Sample configuration | `0.001` (0.1%)                            | `0.05` (5%)                               |



## `staking`

### Introduction

The `staking` module handles Proof-of-Stake related logics, which plays a very important part to the underneath consensus protocol.

### Overview

Crypto.org Chain is based on Tendermint Core's consensus engine, it relies on a set of validators to participate in the proof of stake (PoS) consensus protocol, and they are responsible for committing new blocks to the blockchain.

- `unbonding_time`: The time duration of unbonding;
- `max_validators`: The maximum number of validators;
- `max_entries`: The max entries for either unbonding delegation or redelegation;
- `historical_entries`: The number of historical entries to persist; and
- `bond_denom`: Coin denomination for staking.

### Validator

Validators are responsible for signing or proposing a block at each consensus round. It is important that the validators maintain excellent availability and network connectivity to perform their tasks. To incentivise the validator nodes to run the network, rewards are distributed to the validators according to their performance and amount of staked tokens (see [distribution](#distribution) and [mint](#mint)). On the other hand, a penalty should be imposed on validators' misbehaviour (see [slashing](#slashing)).

### Delegator

The `staking` module enables CRO owners to delegate their tokens to active validators and share part of the reward obtained by the validator during the proof of stake protocol(see [distribution](#distribution) module). Specifically, it allows token owners to take part in the consensus process without running a validator themselves.

It is important to point out that the delegator and the validator are on the same boat: they share the reward and the risk. In particular, part of their delegated token could be slashed due to validator's misbehaviour (see [slashing](#slashing)). Therefore, it is very important to choose a reliable validator to delegate to. Kindly refer to this [link](https://docs.cosmos.network/v0.40/modules/staking/02_state_transitions.html#delegations) for detailed specification and state transitions of delegation.

### Transactions and Queries

### Transactions

#### `tx staking create-validator` - Create new validator initialized with a self-delegation

First of all, we can create a validator with the `create-validator` transaction, for example:

```bash
$ chain-maind tx staking create-validator \
--from=[name_of_your_key] \
--amount=[staking_amount] \
--pubkey=[trocnclconspub...]  \
--moniker="[moniker_id_of_your_node]" \
--security-contact="[security contact email/contact method]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]"

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```

#### `tx staking delegate [validator-addr] [amount]` - Delegate liquid tokens to a validator

As discussed in the delegator section, one can delegate their tokens to an active validator by:

```bash
$ tx staking delegate [validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"...}
```

#### `tx staking unbond [validator-addr] [amount]` - Unbond shares from a validator

Delegators can unbond their staked tokens by

```bash
$ chain-maind tx staking unbond [validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgUndelegate"...}
```

_Remark:_ Note that funds will only be available after the `unbonding_time` has passed.

#### `tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount]` - Redelegate illiquid tokens from one validator to another

We can also move our staked tokens from one validator to another by:

```bash
$ chain-maind tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgBeginRedelegate"...}
```

### Queries

We will be covering most of the commonly used queries here. Meanwhile, you can use

```
chain-maind query staking -h
```

to check all the supported sub-commands.

#### `query staking delegation [delegator-addr] [validator-addr]` - Query a delegation based on address and validator address

With a given delegator address and the validator account that it is associated with, we can check the delegation by:

```json
$ chain-maind query chain-maind query staking delegation [delegator-addr] [validator-addr] --output json | jq

  {
    "delegation": {
      "delegator_address": "[delegator-addr]",
      "validator_address": "[validator-addr]",
      "shares": "[delegator_shares]"
    },
    "balance": {
      "denom": "basecro",
      "amount": "[delegator_balance]"
    }
  }
```

#### `query staking delegations-to [validator-addr]` - Query all delegations made to one validator

We can check all the delegations made to a specific validator:

```json
$ chain-maind query staking delegations-to [validator-addr] --output json  | jq

  {
    "delegation_responses": [
      {
        "delegation": {
          "delegator_address": "[delegator-addr-1]",
          "validator_address": "[validator-addr]",
          "shares": "[delegator_shares]"
        },
        "balance": {
          "denom": "basecro",
          "amount": "[delegator_balance_1]"
        }
      },
      {
        "delegation": {
          "delegator_address": "[delegator-addr-2]",
          "validator_address": "[validator-addr]",
          "shares": "[delegator_shares-2]"
        },
        "balance": {
          "denom": "basecro",
          "amount": "[delegator_balance_2]"
        }
      }
    .......
    ],
    "pagination": {
      "next_key": null,
      "total": "0"
    }
  }
```

#### `query staking pool` - Query the current staking pool values

We can check the amount of bonded and unbonded amount in the staking pool:

```json
$ chain-maind query staking pool --output json | jq

  {
    "not_bonded_tokens": "[not_bonded_amount]",
    "bonded_tokens": "[bonded_amount]",
  }
```

#### `query staking unbonding-delegation [delegator-addr] [validator-addr]` - Query an unbonding-delegation record based on delegator and validator address

```json
$ chain-maind query staking unbonding-delegation [delegator-addr] [validator-addr] --output json | jq

  {
    "delegator_address": "[delegator-addr]",
    "validator_address": "[validator-addr]",
    "entries": [
      {
        "creation_height": "[height_of_unbonding]",
        "completion_time": "[completion_time]",
        "initial_balance": "[unbonding_initial_balance]",
        "balance": "[unbonding_balance]"
      }
    ]
  }
```

#### `query staking validator [validator-addr]` - Query a specific validator

We can query the details of a specific validator with its validator address (crocncl...) by:

```json
$ chain-maind query staking validator [validator-addr] --output json | jq

  {
    "operator_address": "[validator_address (crocncl...)]",
    // address of the validator's operator
    "consensus_pubkey": "[consensus_pubkey (crocnclconspub...)]",
    // the consensus public key of the validator
    "jailed": "[jailed_or_not]",
    // if it has been jailed from bonded status?
    "status": "[validator_statuses]",
    // validator status (bonded/unbonding/unbonded)
    "tokens": "[total_tokens]",
    // total delegated tokens
    "delegator_shares": "[delegator_shares]",
    // total shares issued to a validator's delegators
    "description": {
      "moniker": "[validator_moniker_id]",
      "identity": "",
      "website": "",
      "security_contact": "[security_contact]",
      "details": ""
    },
    // description terms for the validator
    "unbonding_height": "[unbonding_height]",
    "unbonding_time": "[unbonding_time]",
    "commission": {
      "commission_rates": {
        "rate": "[commission_rates]",
        // the commission rate charged to delegators
        "max_rate": "[maximum_commission_rates]",
        // maximum commission rate which validator can ever charge
        "max_change_rate": "[maximum_rate_of_change_of_commission]"
        // maximum daily increase of the validator commission
      },
      "update_time": "[last_update_time]"
      // the last time the commission rate was changed
    },
    "min_self_delegation": "[min_self_delegation_amount]"
    // validator's self declared minimum self delegation
  }
```

#### `query staking validators` - Query all validators

A full list of validators and their details can be found by this query.

#### `query staking params` - Query the current staking parameters

Finally, we can query the current staking parameters by

```json
$ chain-maind query staking params --output json | jq

  {
    "unbonding_time": "1814400s",
    "max_validators": 100,
    "max_entries": 7,
    "historical_entries": 100,
    "bond_denom": "basecro"
  }
```

### Appendix

#### `staking` module: Network Parameters Configuration

The following tables show the overall effects of the staking related network parameters on different configurations:

|                      | `bond_denom` | `historical_entries`               | `max_entries`                                                 |
| -------------------- | ------------ | ---------------------------------- | ------------------------------------------------------------- |
| Type                 | string       | uint16                             | uint16                                                        |
| Higher               | N/A          | More historical entries to persist | More entries for either unbonding delegation or redelegation  |
| Lower                | N/A          | Less historical entries to persist | Fewer entries for either unbonding delegation or redelegation |
| Constraints          | N/A          | Value has to be positive           | Value has to be positive                                      |
| Sample configuration | `basecro`    | `100` (50%)                        | `7`                                                           |

---

|                      | `max_validators`                          | `unbonding_time`                     |
| -------------------- | ----------------------------------------- | ------------------------------------ |
| Type                 | uint16                                    | string                               |
| Higher               | More active validators                    | Longer waiting period for unbonding  |
| Lower                | Fewer active validators                   | Shorter waiting period for unbonding |
| Constraints          | Value has to be less than or equal to `1` | Positive value in seconds            |
| Sample configuration | `100` (maximum 100 active validator)      | `"1814400s"` (3 weeks)               |


## `supply`

### Introduction

The `supply` module is responsible for retrieving the total and liquid supply.



### Queries

#### `query supply liquid` - Check the total supply of coins on the chain

We can also use the `query` command of the `supply` module to check the current total supply:

```json
$ chain-maind query supply total
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_supply_amount]"
        }
    ]
    }
```

#### `query supply liquid` - Check the liquid supply of coins on the chain

We can also query the liquid supply, which is the total supply bonded subtracted by the non-circulating supply such as bonded amounts, unvested amounts, uncollected rewards, etc.

```json
$ chain-maind query supply total
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_circulating_amount]"
        }
    ]
    }
```
