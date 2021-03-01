# List of parameters

This section aims to collect and provide brief a description of all the mentioned network parameters:


#### Distribution-related parameters - `distribution` module

| Key                     | Type         | Description                                                              |
| ----------------------- | ------------ | ------------------------------------------------------------------------ |
| `base_proposer_reward`  | string (dec) | Base bonus on transaction fees collected in a valid block                |
| `bonus_proposer_reward` | string (dec) | Max bonus on transaction fees collected in a valid block                 |
| `community_tax`         | string (dec) | The rate of community tax                                                |
| `withdraw_addr_enabled` | bool         | Whether delegators can set a different address to withdraw their rewards |

#### Punishment-related parameters - `gov` module

| Key                  | Type                 | Description                                                                                             |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_deposit`        | array (coins)        | Minimum deposit for a proposal to enter voting period                                                   |
| `max_deposit_period` | string (time in ns)  | Maximum period for Cro holders to deposit on a proposal                                                 |
| `voting_period`      | string (time in ns)) | The length of voting period                                                                             |
| `quorum`             | string (dec)         | The minimum percentage of voting power that needs to be casted on a proposal for the result to be valid |
| `threshold`          | string (dec)         | Minimum proportion of `Yes` votes (excluding `Abstain` votes) for the proposal to be accepted.          |
| `veto`               | string (dec)         | Minimum proportion of `Veto` votes to Total votes ratio for proposal to be vetoed.                      |


#### Reward-related parameters - `mint` module

| Key                     | Type           | Description                                           |
| ----------------------- | -------------- | ----------------------------------------------------- |
| `blocks_per_year`       | string (int64) | The expected number of blocks being produced per year |
| `goal_bonded`           | string (dec)   | Goal of bonded token in percentage                    |
| `inflation_max`         | string (dec)   | Maximum annual inflation rate                         |
| `inflation_min`         | string (dec)   | Minimum annual inflation rate                         |
| `inflation_rate_change` | string (dec)   | Maximum annual change in inflation rate               |
| `mint_denom`**            | string         | Token type being minted                               |

#### Punishment-related parameters - `slashing` module

| Key                          | Type           | Description                                                                |
| ---------------------------- | -------------- | -------------------------------------------------------------------------- |
| `downtime_jail_duration`     | string (int64) | The jailing duration for validators with low availability                  |
| `min_signed_per_window`      | string (dec)   | Threshold of total missed blocks                                           |
| `signed_blocks_window`       | string (int64) | Window to calculate validators's liveness                                  |
| `slash_fraction_double_sign` | string (dec)   | Maximum percentage of stake reduction for byzantine validators             |
| `slash_fraction_downtime`    | string (dec)   | Maximum percentage of stake reduction for validators with low availability |



#### Staking-related parameters - `staking` module

| Key                  | Type   | Description                                                     |
| -------------------- | ------ | --------------------------------------------------------------- |
| `bond_denom`**         | string | Coin denomination for staking                                   |
| `historical_entries` | uint16 | The number of historical entries to persist                     |
| `max_entries`        | uint16 | The max entries for either unbonding delegation or redelegation |
| `max_validators`     | uint16 | The maximum number of validator                                 |
| `unbonding_time`     | string | The time duration of unbonding                                  |


** Please note: Denominations can be 3 ~ 128 characters long and support letters, followed by either a letter, a number or a separator ('/').

