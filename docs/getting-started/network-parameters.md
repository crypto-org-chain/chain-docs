# List of network parameters

This section aims to collect and provide brief a description of all the mentioned network parameters:

#### Staking-related parameters

| Key                           | Description                                           |
| ----------------------------- | ----------------------------------------------------- |
| `unbonding_period`            | The time duration of unbonding                        |
| `max_validators`              | The maximum number of validator                       |
| `required_council_node_stake` | The minimum staking amount required to be a validator |

#### Reward parameters

| Key                        | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `monetary_expansion_cap`   | The total amount of tokens reserved for validator's reward in the basic unit |
| `reward_period_seconds`    | The period of reward being distributed (unit: seconds)                       |
| `monetary_expansion_r0`    | The upper bound for the reward rate per annum                                |
| `monetary_expansion_tau`   | Initial value of tau in the reward function                                  |
| `monetary_expansion_decay` | The decay rate of tau.                                                       |

#### Slashing parameters

| Key                       | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| `MAX_EVIDENCE_AGE`        | Maximum age of evidence                                                    |
| `block_signing_window`    | Window to calculate validators's liveness                                  |
| `jail_duration`           | The time period for jailing                                                |
| `missed_block_threshold`  | Threshold of total missed blocks                                           |
| `byzantine_slash_percent` | Maximum percentage of stake reduction for byzantine validators             |
| `liveness_slash_percent`  | Maximum percentage of stake reduction for validators with low availability |

#### Transaction fee parameters

| Key           | Description              |
| ------------- | ------------------------ |
| `BASE_AMOUNT` | Basic transaction fee    |
| `PER_BYTE`    | Transaction fee per byte |

TODO: TX that can change them?
