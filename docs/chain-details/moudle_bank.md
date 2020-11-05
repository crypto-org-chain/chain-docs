## `bank` module
### Introduction
`bank` module tracks and provides query support for the total supply of all assets used in the application. Specifically, the total supply is updated whenever a token is
- **Minted**, e.g. Token created by the `mint` module; or
- **Burned**, e.g. Token distorted by the `slashing` module.

The `bank` module maintains the state of two primary objects:

- Account balances by address

- Total supply of tokens of the chain

## `bank` module: Transactions and Queries

### Transaction

You can transfer of tokens between to a designated address by the `tx bank send` command:

#### `tx bank send [from_key_or_address] [to_address] [amount] [network_id]` - **Send Funds** 

:::details Example: Send 10cro from an address to another.

```bash
$ chain-maind tx bank send Default cro17waz6n5a4c4z388rvc40n4c402njfjgqmv0qcp 10cro --chain-id cro-test
## Transaction payload##
  {"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

**Remarks**: You can also send a "batch payment", from one account to multiple outputs by using the command
`tx bank multisend-1tomany [from_key_or_address] [to_address1] [amount1] [to_address2] [amount2]...[network_id]`



### Query

#### Check the balance of a specified account

One can check the current balance of a specified account by:

```json
$ chain-maind query bank  balances cro1j7pej8kplem4wt50p4hfvndhuw5jprxxn5625q --output json | jq
{
"balances": [
    {
    "denom": "basecro",
    "amount": "1996637260214296256"
    }
],
"pagination": {
    "next_key": null,
    "total": "0"
}
}
```

#### Check total supply of the token

You can also check the current total supply of the token by:

```json
$ chain-maind query bank total --output json | jq
{
"supply": [
    {
    "denom": "basecro",
    "amount": "8004733316545727291"
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
