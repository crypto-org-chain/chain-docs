# List of network parameters

This section aims to collect and provide brief description of all the mentioned network parameters:

#### Staking-related parameters

| Key              | Description                     |
| ---------------- | ------------------------------- |
| `UNBOUND_PERIOD` | The time duration of unbonding  |
| `MAX_VALIDATORS` | The maximum number of validator |

#### Reward parameters

| Key                        | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `monetary_expansion_cap`   | The total amount of tokens reserved for validator's reward in the basic unit |
| `distribution_period`      | The period of reward being distributed                                       |
| `monetary_expansion_r0`    | The upper bound for the reward rate per annum                                |
| `monetary_expansion_tau`   | Initial value of tau in the reward function                                  |
| `monetary_expansion_decay` | The decay rate of tau.                                                       |

#### Slashing parameters

| Key                       | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| `MAX_EVIDENCE_AGE`        | Maximum age of evidence                                                    |
| `BLOCK_SIGNING_WINDOW`    | Window to calculate validators's liveness                                  |
| `JAIL_DURATION`           | The time period for jailing                                                |
| `MISSED_BLOCK_THRESHOLD`  | Threshold of total missed blocks                                           |
| `BYZANTINE_SLASH_PERCENT` | Maximum percentage of stake reduction for byzantine validators             |
| `LIVENESS_SLASH_PERCENT`  | Maximum percentage of stake reduction for validators with low availability |

#### Transaction fee parameters

| Key           | Description              |
| ------------- | ------------------------ |
| `BASE_AMOUNT` | Basic transaction fee    |
| `PER_BYTE`    | Transaction fee per byte |

TODO: TX that can change them?
