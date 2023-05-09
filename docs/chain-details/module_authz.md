# module\_authz

#### `authz` module

#### Introduction

The `authz` module facilitates granting authorizations to perform actions, such as spending tokens, on behalf of one account to other accounts.

#### Overview

An _authorization_ is an allowance to execute an action by the _grantee_ on behalf of the authorization _granter_, e.g. to send tokens to an account from the _granter_, or to delegate tokens to a validator from the _granter_. There are 3 major built-in authorization types:

* `SendAuthorization`
* `StakeAuthorization`
* `GenericAuthorization`

***

**SendAuthorization**

`SendAuthorization` implements an authorization to the _grantee_ to perform, on behalf of the _granter_, a basic `send` action defined in the [bank](module\_bank.md) module. It takes a `SpendLimit` that is greater than 0 to specify the maximum amount of tokens the _grantee_ can spend with. The `SpendLimit` keeps track of how many tokens allowed are left in the authorization and is updated as the tokens are spent until the `SendAuthorization` gets cleared when the `SpendLimit`reaches 0. Sending an amount greater than the `SpendLimit` is not allowed.

***

**StakeAuthorization**

`StakeAuthorization` implements an authorization to the _grantee_ to perform, on behalf of the _granter_, `delegate`, `unbond` (undelegate), or `redelegate` actions defined in the [staking](module\_staking.md) module. Each of the above actions need to be authorized separately, with which either an `AllowList` or a `DenyList` must be specified to restrict which validators to or not to perform a staking action with. Optionally, `MaxTokens` can also be specified in the authorization that keeps track of a limit to the amount of tokens to be delegated/undelegated/redelegated. If left unspecified, the amount is unlimited. Similar to the `SpendLimit` in [`SendAuthorization`](module\_authz.md#SendAuthorization), `MaxTokens` gets updated after each valid authorized staking action. An authorized staking action that uses tokens beyond the `MaxTokens` is not allowed.

***

**GenericAuthorization**

`GenericAuthorization` implements an authorization to the _grantee_ to perform, on behalf of the _granter_, a generic action. In other words, `GenericAuthorization` facilitates an arbitrary action grant, where a `MsgTypeURL` must be specified to correspond to an action defined in the [modules](../../crypto.org-chain-protocol/module\_overview/). A `GenericAuthorization` is currently unrestricted beyond the `MsgTypeURL`. For example, when granting someone to send tokens, the `SpendLimit` in [`SendAuthorization`](module\_authz.md#SendAuthorization) will not be enforced. Therefore, a [`SendAuthorization`](module\_authz.md#SendAuthorization) without a spend limit may in fact be implemented as a `GenericAuthorization` with the `MsgTypeURL` been set to `/cosmos.bank.v1beta1.MsgSend`. The following are some common `MsgTypeURLs`:

* Send: `/cosmos.bank.v1beta1.MsgSend`
* Delegate: `/cosmos.staking.v1beta1.MsgDelegate`
* Unbond/Undelegate: `/cosmos.staking.v1beta1.MsgUndelegate`
* Redelegate: `/cosmos.staking.v1beta1.MsgBeginRedelegate`
* Withdraw delegator reward: `/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward`
* Mint NFT: `/chainmain.nft.v1.MsgMintNFT`
* Burn NFT: `/chainmain.nft.v1.MsgBurnNFT`
* Transfer NFT: `/chainmain.nft.v1.MsgTransferNFT`
* Edit NFT: `/chainmain.nft.v1.MsgEditNFT`

***

::: tip NOTE **Expiration of Grant**: The _granter_ can optionally set an `Expiration` time in form of a UNIX Timestamp for any authorization grant. The `Expiration` time should be later than current UNIX Timestamp and is defaulted to be one year from current time if unspecified. An authorization may be executed only if the grant has not yet expired. Setting an `Expiration` time for an authorization grant is generally encouraged. :::

#### Transactions and Queries

#### Transactions

In general, a _granter_ can `grant` an authorization to a _grantee_ or `revoke` an existing authorization already granted to the _grantee_. A _grantee_ can `execute` an authorization already granted by the _granter_.

#### `grant`:

An authorization starts from the _granter_ granting the _grantee_.

***

* under `SendAuthorization`

**`tx authz grant [grantee_address] send --spend-limit [amount] --from [granter_address]`- Grant to send with a spend limit**

::: details Example: Grant to send with a spend limit and an expiration time The _granter_ may grant a _grantee_ to send tokens on the _granter_'s behalf, where a spend limit should be provided through the `--spend-limit` flag. For example, _granter_ may authorize _grantee_ to spend up to `10 CRO`, and sets an expiration time at the end of the year 2022 (i.e. `1672531199` in Unix timestamp) by running

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

***

* under `StakeAuthorization`

**`tx authz grant [grantee_address] delegate --spend-limit [amount] --allowed-validators [list_of_allowed_validators_separated_by_,] --from [granter_address]`- Grant to delegate to validators on a specified list**

::: details Example: Grant to delegate to validators on a specified list with a spend limit The _granter_ may grant a _grantee_ to delegate tokens on the _granter_'s behalf, where either a list of allowed validators (through the `--allowed-validators` flag) or denied validators (through the `--deny-validators` flag) should be provided. For example, _granter_ may authorize _grantee_ to delegate on the _granter_'s behalf up to `10 CRO` towards a specified list of validators by running

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

**`tx authz grant [grantee_address] delegate --spend-limit [amount] --deny-validators [list_of_deny_validators_separated_by_,] --from [granter_address]`- Grant to delegate to validators excluding a specified list**

Granting to redelegate or undelegate (unbond) is very similar by just replacing the `delegate` with `redelegate` or `unbond`:

**`tx authz grant [grantee_address] redelegate --spend-limit [amount] --allowed-validators [list_of_allowed_validators_separated_by_,] --from [granter_address]`- Grant to redelegate to validators on a specified list**

**`tx authz grant [grantee_address] unbond --spend-limit [amount] --allowed-validators [list_of_allowed_validators_separated_by_,] --from [granter_address]`- Grant to unbond from validators on a specified list**

::: tip NOTE **Spend Limit for `StakeAuthorization`**: A spend limit for a grant to delegate/redelegate/unbond is not necessary but generally recommended. :::

***

* under `GenericAuthorization`

Other than the above grants under `SendAuthorization` or `StakeAuthorization`, one may authorize other grants through `GenericAuthorization`:

**`tx authz grant [grantee_address] generic --msg-type [msg_type_url] --from [granter_address]`- Grant for generic authorization with a specified Message Type URL**

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

**`tx authz grant [grantee_address] generic --msg-type /chainmain.nft.v1.MsgMintNFT --from [granter_address]`- Grant to mint NFT**

**`tx authz grant [grantee_address] generic --msg-type /chainmain.nft.v1.MsgTransferNFT --from [granter_address]`- Grant to transfer NFT**

**`tx authz grant [grantee_address] generic --msg-type /chainmain.nft.v1.MsgEditNFT --from [granter_address]`- Grant to edit NFT**

so on and so forth.

***

::: tip NOTE **Message Type URL & Updating an Existing Grant**: At any time, there is up to one grant allowed for each Message Type URL over a unique _granter_-_grantee_ pair. To update an existing grant, the _granter_ will need to re-grant the _grantee_ and the new grant will overwrite the old grant. :::

#### `exec`:

The `exec` transaction composes of 2 transactions:

* the `authorized transaction`: the transaction to be executed on behalf of the _granter_; and
* the `execution transaction`: the transaction that contains and executes the above `authorized transaction`.

After a valid grant is set up, the _grantee_ needs to first prepare the `authorized transaction`, in JSON format, on behalf of the _granter_. For instance, when the _grantee_ wants to execute a `SendAuthorization` to send `10 CRO` from the _granter_ to a `recipient`, one easy way to generate such `authorized transaction` and saves it to a file named `tx.json` is to use the `--generate-only` flag by running:

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

::: tip NOTE The `authorized transaction` here does not need to be signed and the address after the `--from` flag is the `granter_address` instead of the `grantee_address`. In other words, this `authorized transaction` is created by the _grantee_ but prepared as if he/she were the _granter_. :::

After the `authorized transaction` is properly prepared, the _grantee_ needs to issue an `execution transaction` to execute the `authorized transaction`:

**`tx authz exec [tx_json] --from [grantee_address]` - Execute an authorization**

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

#### `revoke`:

The _granter_ may choose to `revoke` an existing authorization already granted to the _grantee_ by running:

**`tx authz revoke [grantee_address] [msg_type_url] --from [granter_address]` - Revoke an authorization with a specified Message Type URL**

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

#### Queries

**`query authz grants [granter_address] [grantee_address]` - Query all existing grants between a **_**granter**_**-**_**grantee**_** pair**

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

**`query authz grants [granter_address] [grantee_address] [msg_type_url]` - Query the grant with a specified Message Type URL between a **_**granter**_**-**_**grantee**_** pair**

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
