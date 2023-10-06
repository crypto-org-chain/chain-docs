# module\_supply

#### `supply` module

#### Introduction

The `supply` module is responsible for retrieve total and liquid supply.

#### Queries

**`query supply liquid` - Check the total supply of coins of the chain**

We can also use `query` command of the `supply` module to check the current total supply:

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

**`query supply liquid` - Check the liquid supply of coins of the chain**

We can also query the liquid supply, which is the total supply bonded subtracted by the non-circulating supply such as bonded amount, unvested amounts, and uncollected reward etc.

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
