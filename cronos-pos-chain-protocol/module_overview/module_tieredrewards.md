# module\_tieredrewards

#### `tier_rewards` module

#### Introduction

Manages tiered staking positions with bonus APY on top of base staking rewards. Introduced in v7.0.0, CRO holders can lock their stake for a defined exit commitment period (1/2/4 years) in exchange for bonus APY (up to +7%).&#x20;

The module also maintains a base reward floor (\~3% APY) by topping up shortfalls from the Tier Rewards Pool.

#### How tiered staking mechanism works

Kindly go [here](../../for-users/tokenomics-and-inflation/tiered-staking-rewards.md) for the details.

#### Transactions and Queries

**Transactions:**

| Transaction                 | Description                                            |
| --------------------------- | ------------------------------------------------------ |
| `lock-tier`                 | Lock fresh CRO into a tier and delegate to a validator |
| `commit-delegation-to-tier` | Convert existing delegation into a tier position       |
| `add-to-tier-position`      | Add tokens to an existing position                     |
| `tier-redelegate`           | Move position to a different validator                 |
| `claim-tier-rewards`        | Claim pending base + bonus rewards                     |
| `trigger-exit`              | Start exit commitment countdown                        |
| `clear-position`            | Cancel a triggered exit                                |
| `exit-tier-with-delegation` | Instant exit (no unbonding)                            |
| `tier-undelegate`           | Start standard 28-day unbonding                        |
| `withdraw-from-tier`        | Withdraw tokens after unbonding                        |

**Queries:**

| Query                       | Description                                 |
| --------------------------- | ------------------------------------------- |
| `tiers`                     | All tier definitions                        |
| `params`                    | Module parameters (`TargetBaseRewardsRate`) |
| `position`                  | Single position by ID                       |
| `positions-by-owner`        | All positions for an address                |
| `estimate-position-rewards` | Estimated pending rewards                   |
| `rewards-pool-balance`      | Current rewards pool balance                |
| `voting-power`              | Governance voting power from tier positions |
