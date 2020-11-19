### `bank` module

### Introduction

The `bank` module maintains the state of two primary objects:

- Account balances by address;
- Total supply of tokens of the chain

`bank` module tracks and provides query support for the total supply of all assets used in the application. It also supports token transfer functionalities. Specifically, the total supply is updated whenever a token is:

- **Minted**, e.g. Token created by the [mint](./module_mint) module; or
- **Burned**, e.g. Token distorted by the [slashing](./module_slashing) module.

### Transactions and Queries

### Transactions

#### `tx bank send [from_key_or_address] [to_address] [amount] [network_id]` - **Send Funds**

You can transfer of tokens between to a designated address by the `tx bank send` command. For example, we can send 10 cro from `address_a` to `address_b` by

```bash
$ chain-maind tx bank send <address_a> <address_b> 10cro --chain-id <chain-id>

## Transaction payload##
{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::tip Remarks
You can also send a "batch payment", from one account to multiple outputs by using the command

```
tx bank multisend-1tomany [from_key_or_address] [to_address1] [amount1] [to_address2] [amount2]...[network_id]
```

:::

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

#### `query supply liquid` - Check the circulating supply of the token

We can also query the circulating supply, which is the total supply bonded subtracted by the non-circulating supply such as bonded amount, unvested amounts, and uncollected reward etc.

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

### Appendix

#### `bank` module: Network Parameters and configuration

| Key                  | Type          | Example                              |
| -------------------- | ------------- | ------------------------------------ |
| `SendEnabled`        | []SendEnabled | [{denom: "basecro", enabled: true }] |
| `DefaultSendEnabled` | bool          | true                                 |
