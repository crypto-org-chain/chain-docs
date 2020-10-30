# List of parameters

This section aims to collect and provide brief a description of all the mentioned network parameters:

#### Distribution-related parameters - `distribution` module

| Key                     | Type         | Description                                                              |
| ----------------------- | ------------ | ------------------------------------------------------------------------ |
| `base_proposer_reward`  | string (dec) | Base bonus on transaction fees collected in a valid block                |
| `bonus_proposer_reward` | string (dec) | Max bonus on transaction fees collected in a valid block                 |
| `community_tax`         | string (dec) | The rate of community tax                                                |
| `withdraw_addr_enabled` | bool         | Whether delegators can set a different address to withdraw their rewards |

#### Reward-related parameters - `mint` module

| Key                     | Type           | Description                                           |
| ----------------------- | -------------- | ----------------------------------------------------- |
| `blocks_per_year`       | string (int64) | The expected number of blocks being produced per year |
| `goal_bonded`           | string (dec)   | Goal of bonded token in percentage                    |
| `inflation_max`         | string (dec)   | Maximum inflation rate                                |
| `inflation_min`         | string (dec)   | Minimum inflation rate                                |
| `inflation_rate_change` | string (dec)   | Maximum annual change in inflation rate               |
| `mint_denom`            | string         | Token type being minted                               |


#### Staking-related parameters - `staking` module

| Key                  | Type   | Description                                                     |
| -------------------- | ------ | --------------------------------------------------------------- |
| `bond_denom`         | string | Coin denomination for staking                                   |
| `historical_entries` | uint16 | The number of historical entries to persist                     |
| `max_entries`        | uint16 | The max entries for either unbonding delegation or redelegation |
| `max_validators`     | uint16 | The maximum number of validator                                 |
| `unbonding_time`     | string | The time duration of unbonding                                  |



#### Punishment-related parameters - `slashing` module

| Key                          | Type           | Description                                                                |
| ---------------------------- | -------------- | -------------------------------------------------------------------------- |
| `downtime_jail_duration`     | string (int64) | The jailing duration for validators with low availability                  |
| `min_signed_per_window`      | string (dec)   | Threshold of total missed blocks                                           |
| `signed_blocks_window`       | string (int64) | Window to calculate validators's liveness                                  |
| `slash_fraction_double_sign` | string (dec)   | Maximum percentage of stake reduction for byzantine validators             |
| `slash_fraction_downtime`    | string (dec)   | Maximum percentage of stake reduction for validators with low availability |


