# module\_inflation (including mint)

{% hint style="info" %}
As of the v7 upgrade(May 2026), The effective inflation is now controlled by the new `module_inflation`, which wraps `module_mint` (See [here](https://github.com/crypto-org-chain/chain-main/discussions/1291) for the full proposal).

To avoid splitting the explanation across two pages, both modules are documented together here.
{% endhint %}

## `inflation` module

### Introduction

v7 introduces `x/inflation`, which controls the total supply cap and gradually reduces the inflation rate over time.

### Overview

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

### **Transactions And** Query

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

***



## `mint` module

{% hint style="warning" %}
As of the v7 upgrade(May 2026), the `x/mint` parameters `inflation_min`, `inflation_max`, and `inflation_rate_change` have been pinned to static values: (InflationMin = InflationMax = 0.01, InflationRateChange = 0). The `bonded-ratio` based dynamic inflation described on this page no longer drives the live rate. **So the formulas and parameter semantics described below are for historical reference only after v7** (See [here](https://github.com/crypto-org-chain/chain-main/discussions/1291) for the full proposal).

The effective inflation is now controlled by the new `x/inflation` module([above](module_inflation-including-mint.md#inflation-module)), which wraps `x/mint` and applies a 6.8% monthly compound decay. A hard 100B CRO `MaxSupply` cap and explicit `BurnedAddresses` list were also introduced.
{% endhint %}

### Introduction

The `mint` module is responsible for creating tokens in a flexible way to reward the validators who participate in the proof of stake consensus process (see also the [distribution module](module_distribution.md)). It is also designed in a way to bring a balance between market liquidity and staked supply.

### Overview

#### **Network parameters**

Below are all the network parameters for the `mint` module:

* `"blocks_per_year"` - The expected number of blocks being produced per year;
* `"goal_bonded"` - Goal of bonded token in percentage;
* `"inflation_max"` - Maximum annual inflation rate;
* `"inflation_min"` - Minimum annual inflation rate;
* `"inflation_rate_change"` - Maximum annual change in inflation rate;
* `"mint_denom"` - Token type being minted.

The target annual inflation rate is recalculated for each previous cycle. The inflation is also subject to a rate change (positive or negative) depending on the distance from the desired ratio (`"goal_bonded"`). The maximum rate change possible is defined to be `"inflation_rate_change"` per year, where the annual inflation is capped as between `"inflation_min"` and `"inflation_max"`.

#### **Parameters explained**

`"goal_bonded"`&#x20;

Goal of bonded token in percentage (also called staking ratio), the changes of the reward and the inflation rate related to this parameter can be summarized as follows cases:

* If the staking ratio is **below** the `"goal_bonded"` , the inflation rate will increase until reaching a maximum upper bound (`"inflation_max"`);
* If the staking ratio is **equal** to `"goal_bonded"`, the inflation rate will stay constant;
* If the staking ratio is **above** the `"goal_bonded"`, it will decrease until reaching a minimum lower bound `"inflation_min"`).

`"inflation_rate_change"`&#x20;

Maximum annual change in inflation rate, represents the maximum percentage by which the inflation rate can change in a year.&#x20;

### Emissions and supply of $CRO

The current emissions and supply of $CRO and its emission projections can be easily queried directly from URLs, as described in this section.

#### How inflation rate is calculated

The magnitude of the rate of change of the inflation rate is controlled by an additional factor, which is the ratio between the current bonded ratio with the `"goal_bonded"`, the inflation rate is updated at the end of every block accordingly to the following formula:

```
Inflation Rate = min(max(params.InflationMin, currentInflation + ((1 - bondedRatio / params.GoalBonded) * params.InflationRateChange / params.BlocksPerYear)), params.InflationMax)
```

Or simply, when the inflation rate within the maximum and the minimum bounds

```
current inflation + ((1 - bondedRatio / params.GoalBonded) * params.InflationRateChange / params.BlocksPerYear)),
```

as

<figure><img src="../../.gitbook/assets/296951777-bfe501ca-9053-40d0-9b94-8f04fb3c43de (1).png" alt=""><figcaption></figcaption></figure>

This function then updates the current inflation rate by adding the inflationRateChange to it. Finally, the function checks that the updated inflation rate is within the range defined by the InflationMin and InflationMax parameters, and returns the resulting inflation rate.

{% hint style="info" %}
From V7 upgrade, `params.InflationRateChange` is fixed to 0, fixing `Inflation Rate` above finally at 1%.
{% endhint %}

#### How emissions are calculated

#### **Annual provisions**

The emission of the Cronos POS Chain is controlled by the inflation rate and the total supply of $CRO. New $CRO tokens are minted at each block and distributed as block rewards to delegators. The inflation rate determines the amount of $CRO emitted to delegators at each block, with emissions being distributed as staking rewards according to the Proof-of-Stake consensus mechanism.

The annualized quantity of $CRO emitted is called Annual Provisions. It can be calculated based on the inflation rate with:

```
Annual provisions = Inflation rate * Total supply of CRO
```

{% hint style="info" %}
At any point, the inflation, in annualized percentage increase of CRO supply, can be queried from [https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/inflation](https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/inflation).
{% endhint %}

This can be seen in the [following code](https://github.com/cosmos/cosmos-sdk/blob/main/x/mint/types/minter.go#L74) in the Cosmos SDK:

```
m.Inflation.MulInt(totalSupply)
```

{% hint style="info" %}
**Easy to use endpoints to query $CRO emissions**

* The current value of annual provisions of CRO can be queried at any time [at this endpoint](https://rest.mainnet.crypto.org/cosmos/mint/v1beta1/annual_provisions).
* The total supply of CRO can be queried at any time [at this endpoint](https://rest.mainnet.crypto.org/cosmos/bank/v1beta1/supply/by_denom?denom=basecro)&#x20;

Note: These numbers are provided in basecro, where `1 CRO = 10^8 basecro` on the Cronos POS chain.

* Annualized emissions can also be seen on the Blockchain Explorer at [https://cronos-pos.org/explorer](https://cronos-pos.org/explorer) under "Events" of each block.
* This annualized emission value can be derived into a per-block value (see [#block-provisions](module_inflation-including-mint.md#block-provisions "mention")), using the block per year value provided by the following endpoint: \
  [https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/params](https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/params)
{% endhint %}

#### **Block provisions**

To calculate the number of $CRO emitted to delegators at each block, we need to divide the Annual Provisions by the expected number of blocks per year (`blocks_per_year`, an be queried at any time [at this endpoint](https://rest.mainnet.crypto.org/cosmos/mint/v1beta1/params))

The resulting number is called the "Block Provision":

```
Reward per block = Block Provision = Annual provisions / Expected blocks per year
```

This can be seen in the [following code](https://github.com/cosmos/cosmos-sdk/blob/main/x/mint/types/minter.go#L80) in the CosmosSDK:

```
m.AnnualProvisions.QuoInt(math.NewInt(int64(params.BlocksPerYear)))
```

#### Total and Circulating Supply of $CRO

* The **Total Supply** refers to the total amount of $CRO that has been created on Cronos POS chain;
* The **Circulating Supply** refers to the total supply minus the amount stored in the "[burn address](https://cronos-pos.org/explorer/account/cro1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqtcgxmv)", which has effectively been taken out of circulation by [community burn governance proposals](https://blog.cronos-pos.org/p/cro-community-burn-proposal-explainer), i.e.

```
Circulating Supply = Total supply - [$CRO balance held in the burn address]
```

{% hint style="info" %}
**Easy to use endpoints to query $CRO supplies:**

* The current **total supply** of $CRO can be obtained [here](https://cronos-pos.org/explorer/api/v1/supply/total).
* The current **circulating supply** of $CRO can be obtained [here](https://cronos-pos.org/explorer/api/v1/supply/circulating).
* The current **burned amount** of $CRO can be obtained [here](https://cronos-pos.org/explorer/api/v1/supply/burned).

_Note -_ This number is provided in `basecro`, where _1 CRO = 10^8 `basecro`_ on the Cronos POS chain.

* Total burned amount and progress can be found in the [Cronos Burninfo page](https://burninfo.cronos-pos.org/).
{% endhint %}

***

### Queries

**Query the current minting annual provisions value**

We can query the current minting annual provisions value, for example:

{% tabs %}
{% tab title="curl" %}
```
$ curl -X GET "https://rest.mainnet.crypto.org/cosmos/mint/v1beta1/annual_provisions"
{ "annual_provisions": "100346483960386394.920000000000000000" }
```

implies that the current minting annual provisions will be 100346483960386394 basecro ( i.e. `1,003,464,839` CRO)
{% endtab %}

{% tab title="chain-maind cli" %}
```
$ chain-maind query mint annual-provisions 
100346483960386394
```


{% endtab %}
{% endtabs %}

**Query the current minting inflation value**

We can query the current minting inflation value, for example:

{% tabs %}
{% tab title="curl" %}
<pre><code><strong>$ curl -X GET "https://rest.mainnet.crypto.org/cosmos/mint/v1beta1/inflation"
</strong>{
  "inflation": "0.010000000000000000"
}
</code></pre>
{% endtab %}

{% tab title="chain-maind cli" %}
```
 $ chain-maind query mint inflation
  0.037000000000000000
```

implies that the inflaction rate is `3.7%`&#x20;
{% endtab %}
{% endtabs %}

&#x20;**Query the current minting parameters**

We can query the current query parameters by

{% tabs %}
{% tab title="curl" %}
<pre><code><strong>$ curl -X GET "https://rest.mainnet.crypto.org/cosmos/mint/v1beta1/params"
</strong>
{
  "params": {
    "mint_denom": "basecro",
    "inflation_rate_change": "0.000000000000000000",
    "inflation_max": "0.010000000000000000",
    "inflation_min": "0.010000000000000000",
    "goal_bonded": "0.600000000000000000",
    "blocks_per_year": "6311520"
  }
}
</code></pre>
{% endtab %}

{% tab title="chain-maind cli" %}
```
$ chain-maind query mint params --output json | jq

{
  "mint_denom": "basecro",
  "inflation_rate_change": "0.000000000000000000",
  "inflation_max": "0.010000000000000000",
  "inflation_min": "0.010000000000000000",
  "goal_bonded": "0.600000000000000000",
  "blocks_per_year": "6311520"
}
```
{% endtab %}
{% endtabs %}

| Parameter               | Value                        | Description                                                            |
| ----------------------- | ---------------------------- | ---------------------------------------------------------------------- |
| `inflation_max`         | `0.01` (fixed value from V7) | Maximum annual inflation rate (1%)                                     |
| `inflation_min`         | `0.01` (fixed value from V7) | Minimum annual inflation rate (1%)                                     |
| `inflation_rate_change` | `0` (fixed value from V7)    | Maximum annual change in inflation rate (fixed, no dynamic adjustment) |

***



### Appendix

**`gov` module: Network Parameters and configuration**

The following tables show overall effects on different configurations of the mint related network parameters:

|                      | `blocks_per_year`                  | `goal_bonded`                        | `mint_denom` |
| -------------------- | ---------------------------------- | ------------------------------------ | ------------ |
| Type                 | string (uint64)                    | string (dec)                         | string       |
| Higher               | More expected blocks per year      | Higher target bonding ratio          | N/A          |
| Lower                | Less expected blocks per year      | Lower target bonding ratio           | N/A          |
| Constraints          | Value has to be a positive integer | Value has to be less or equal to `1` | N/A          |
| Sample configuration | `5256000` (5,256,000 blocks)       | `0.66` (66%)                         | `basecro`    |

|                      | `inflation_max`              | `inflation_min`              | `inflation_rate_change` |
| -------------------- | ---------------------------- | ---------------------------- | ----------------------- |
| Type                 | string (dec)                 | string (dec)                 | string (dec)            |
| Higher               | N/A                          | N/A                          | N/A                     |
| Lower                | N/A                          | N/A                          | N/A                     |
| Constraints          | fixed to `0.01` (1%) from V7 | fixed to `0.01` (1%) from V7 | fixed to `0` from V7    |
| Sample configuration | `0.01` (1%)                  | `0.01` (1%)                  | `0` (0%)                |
