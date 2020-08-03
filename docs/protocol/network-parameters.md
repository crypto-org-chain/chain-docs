# List of network parameters

This section aims to collect and provide brief a description of all the mentioned network parameters:

#### Staking-related parameters

| Key                             | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| `max_validators`                | The maximum number of validator                                |
| `required_council_node_stake`   | The minimum staking amount required to be a validator          |
| `required_community_node_stake` | The minimum staking amount required to become a community node |

#### `rewards_config`: Reward-related parameters

| Key                        | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `monetary_expansion_cap`   | The total amount of tokens reserved for validator's reward in the basic unit |
| `reward_period_seconds`    | The period of reward being distributed (unit: seconds)                       |
| `monetary_expansion_r0`    | The upper bound for the reward rate per annum                                |
| `monetary_expansion_tau`   | Initial value of tau in the reward function                                  |
| `monetary_expansion_decay` | The decay rate of tau.                                                       |

#### `jailing_config` and `slashing_config`: Punishment-related parameters

| Key                            | Description                                                                |
| ------------------------------ | -------------------------------------------------------------------------- |
| `block_signing_window`         | Window to calculate validators's liveness                                  |
| `missed_block_threshold`       | Threshold of total missed blocks                                           |
| `byzantine_slash_percent`      | Maximum percentage of stake reduction for byzantine validators             |
| `liveness_slash_percent`       | Maximum percentage of stake reduction for validators with low availability |
| `invalid_commit_slash_percent` | Maximum percent of stake reduction for nodes sending invalid MLS commits   |

#### `initial_fee_policy`: Transaction fee parameters

| Key           | Description              |
| ------------- | ------------------------ |
| `constant`    | Basic transaction fee    |
| `coefficient` | Transaction fee per byte |

#### TDBE related parameters

| Key                             | Description                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| `mls_commit_timeout_secs`       | Timeout (in seconds) for MLS handshake commit                                          |
| `mls_message_nack_timeout_secs` | Timeout (in seconds) for MLS handshake message NACK                                    |
| `keypackage_expiration_secs`    | Time (in seconds) after which, the keypackage for a node will be considered as expired |

TODO: TX that can change them?
