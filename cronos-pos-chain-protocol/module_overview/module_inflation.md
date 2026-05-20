---
hidden: true
---

# module\_inflation

{% hint style="info" %}
`x/inflation` is a new module introduced in the v7 upgrade. It wraps `x/mint` and takes over the calculation of the effective inflation rate.
{% endhint %}

#### `inflation` module

#### Introduction

v7 introduces `x/inflation`, which controls the total supply cap and gradually reduces the inflation rate over time.

#### How inflation decay works

The inflation rate decreases each month by a fixed percentage (compound decay), so early stakers benefit from higher inflation before it tapers off.

```
inflation_rate = base_rate × (1 − decay_rate) ^ months_elapsed

Where:
  base_rate      = 1% (fixed; InflationMin = InflationMax = 0.01)
  decay_rate     = 6.8% per month
  months_elapsed = blocks since upgrade height ÷ blocks per month
```

Inflation is always ≥ 0 and never goes negative.

#### Mainnet parameters

| Parameter   | Value                           |
| ----------- | ------------------------------- |
| Max supply  | 100 billion CRO (10^19 basecro) |
| Decay rate  | 6.8% per month                  |
| Decay start | v7 upgrade block height         |
| Base rate   | 1% (fixed min/max)              |

{% hint style="warning" %}
The chain halts if circulating supply exceeds the max supply cap. Balances held at designated burn addresses are excluded from the circulating supply calculation.
{% endhint %}

#### Query inflation parameters

```bash
# CLI
chain-maind query inflation params

# REST
GET https://rest.mainnet.crypto.org/chainmain/inflation/v1/params
```

All parameters are governance-adjustable.

| Query    | Description                                            |
| -------- | ------------------------------------------------------ |
| `params` | Returns `max_supply`, `decay_rate`, `burned_addresses` |

#### **Transactions:**

| Transaction       | Description                                   |
| ----------------- | --------------------------------------------- |
| `MsgUpdateParams` | Update inflation parameters (governance only) |
