# module\_mint

#### `mint` module

#### Introduction

The `mint` module is responsible for creating token in a flexible way to reward the validator who participate in the proof of stake consensus process (see also the [distribution module](module\_distribution.md)). It is also designed in a way to bring a balance between market liquidity and staked supply.

#### Overview

**Network parameters**

Below are all the network parameters for the `mint` module:

* `"blocks_per_year"` - The expected number of blocks being produced per year;
* `"goal_bonded"` - Goal of bonded token in percentage;
* `"inflation_max"` - Maximum annual inflation rate;
* `"inflation_min"` - Minimum annual inflation rate;
* `"inflation_rate_change"` - Maximum annual change in inflation rate;
* `"mint_denom"` - Token type being minted.

The target annual inflation rate is recalculated for each previsions cycle. The inflation is also subject to a rate change (positive or negative) depending on the distance from the desired ratio (`"goal_bonded"`). The maximum rate change possible is defined to be `"inflation_rate_change"` per year, where the annual inflation is capped as between `"inflation_min"` and `"inflation_max"`.

#### `mint` module: Queries

#### Queries

**`query mint params` - Query the current minting annual provisions value**

We can query the current minting annual provisions value, for example:

```json
  $ chain-maind query mint annual-provisions
  109573801550200370
```

implies that the current minting annual provisions will be `109573801550200370` basecro ( i.e. `1,095,738,015` cro)

**`query mint inflation` - Query the current minting inflation value**

We can query the current minting inflation value, for example:

```json
  $ chain-maind query mint inflation
  0.013687008526984104
```

implies that the current minting annual provisions will be `0.013687008526984104`( i.e. `1.368%`)

**`query mint annual-provisions` - Query the current minting parameters**

We can query the current query parameters by

```json
$ chain-maind query mint params --output json | jq

  {
    "mint_denom": "basetcro",
    "inflation_rate_change": "0.013000000000000000",
    "inflation_max": "0.020000000000000000",
    "inflation_min": "0.007000000000000000",
    "goal_bonded": "0.670000000000000000",
    "blocks_per_year": "6311520"
  }
```



**Easy to use endpoints to query CRO supply and emissions**

The current supply of CRO and its emission projections can be easily queried directly from URLs, as described in this section.

**Supply**

The current total supply of CRO can be obtained from \
[https://rest.mainnet.cronos-pos.org/cosmos/bank/v1beta1/supply/by\_denom?denom=basecro](https://rest.mainnet.cronos-pos.org/cosmos/bank/v1beta1/supply/by\_denom?denom=basecro).\
\
_Note_: This number is provided in `basecro`, where _1 CRO = 10^8 `basecro`_ on the Cronos POS chain.

**Emissions**

Under the Cosmos SDK `x/mint` module, the CRO inflation is determined by multiple parameters such as min and max inflation and the percentage of staked CRO at any point in time.

At any point, the inflation, in annualized percentage increase of CRO supply, can be queried from [https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/inflation](https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/inflation).

This results in annualized emissions that can be queried from \
[https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/annual\_provisions](https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/annual\_provisions) (in `basecro`).

Annualized emissions can also be seen on the Blockchain Explorer at [https://cronos-pos.org/explorer](https://cronos-pos.org/explorer) under "Events" of each block.

This annualized emission value can be derived into a per-block value by using the block per year value provided by the following endpoint:  [https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/params](https://rest.mainnet.cronos-pos.org/cosmos/mint/v1beta1/params)

#### Appendix

**`gov` module: Network Parameters and configuration**

The following tables show overall effects on different configurations of the mint related network parameters:

|                      | `blocks_per_year`                  | `goal_bonded`                        | `mint_denom` |
| -------------------- | ---------------------------------- | ------------------------------------ | ------------ |
| Type                 | string (uint64)                    | string (dec)                         | string       |
| Higher               | More expected blocks per year      | Higher target bonding ratio          | N/A          |
| Lower                | Less expected blocks per year      | Lower target bonding ratio           | N/A          |
| Constraints          | Value has to be a positive integer | Value has to be less or equal to `1` | N/A          |
| Sample configuration | `5256000` (5,256,000 blocks)       | `0.66` (66%)                         | `basecro`    |

|                      | `inflation_max`                       | `inflation_min`                      | `inflation_rate_change`                       |
| -------------------- | ------------------------------------- | ------------------------------------ | --------------------------------------------- |
| Type                 | string (dec)                          | string (dec)                         | string (dec)                                  |
| Higher               | Higher ceiling for the inflation rate | Higher floor for the inflation rate  | Higher yearly rate of change to the inflation |
| Lower                | Lower ceiling for the inflation rate  | Lower floor for the inflation rate   | Lower yearly rate of change to the inflation  |
| Constraints          | Value has to be less or equal to `1`  | Value has to be less or equal to `1` | Value has to be less or equal to `1`          |
| Sample configuration | `0.02` (2%)                           | `0.01` (1%)                          | `0.01` (1%)                                   |
