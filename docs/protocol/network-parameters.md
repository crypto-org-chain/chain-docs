# List of network parameters

This section aims to collect and provide brief a description of all the mentioned network parameters:

#### `staking_params` parameters

| Key              | Description                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `bond_denom`     | Denomination of the staking token.                                                                  |
| `max_entries`    | Maximum unbonding delegations and redelegations between a particular pair of delegator / validator. |
| `max_validators` | Maximum number of active validators.                                                                |
| `unbonding_time` | Time it takes for tokens to complete unbonding (in nanosecond ).                                    |

#### `mint_params`: Reward-related parameters

| Key                     | Description                                                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inflation`             | Initial yearly percentage of increase in the total supply of staking token, compounded weekly. Value `0.0700` means the target is 7% yearly inflation, compounded weekly. |
| `blocks_per_year`       | Estimation of the amount of blocks per year.                                                                                                                              |
| `goal_bonded`           | Percentage of the total supply that is targeted to be bonded.                                                                                                             |
| `inflation_max`         | Maximum level of inflation.                                                                                                                                               |
| `inflation_min`         | Minimum level of inflation.                                                                                                                                               |
| `inflation_rate_change` | Max yearly change in inflation.                                                                                                                                           |

#### `slashing_params`: Punishment-related parameters

| Key                          | Description                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `downtime_jail_duration`     | Jail duration due to downtime                                                                                          |
| `min_signed_per_window`      | Minimum percentage of `precommits` that must be present in the block window for the validator to be considered online. |
| `signed_blocks_window`       | Moving window to calculate validators's liveness                                                                       |
| `slash_fraction_double_sign` | Maximum percentage of stake reduction for byzantine validators                                                         |
| `slash_fraction_downtime`    | Maximum percentage of stake reduction for validators with low availability                                             |

(TODO: Uptate to chain-main, gov and distribution)
