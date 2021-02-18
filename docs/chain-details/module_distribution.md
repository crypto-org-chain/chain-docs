### `distribution` module

### Introduction

The `distribution` module is responsible for the distribution of rewards to the validators and delegators.

### Overview

#### Network Parameters

Below are all the network parameters for the `distribution` module:

- `community_tax` - The rate of community tax;
- `base_proposer_reward` - Base bonus on transaction fees collected in a valid block;
- `bonus_proposer_reward` - Maximum bonus on transaction fees collected in a valid block;
- `withdraw_addr_enabled` - Whether delegators can set a different address to withdraw their rewards.

#### Rewards

There are two main types of rewards

- Block rewards, governed by the [mint](./module_mint) module; and
- [Transaction fees bonus](#transaction-fees-bonus).

#### Block reward

Block rewards are distributed proportionally to all validators relative to their voting power. This means that even though each validator gains cro with each reward, all validators will maintain equal weight over time.

For the validator operator, the distribution information is updated if:

- the amount of delegation to a validator is updated (delegation, unbond, slashing etc.);
- a validator successfully proposes a block and receives the reward;
- any delegator withdraws from a validator, or
- the validator withdraws it's commission.

For delegators, once they have delegated to a validator, they will be entitled to a portion of the total reward obtained by the validators. The reward is proportional to their delegated amount, and the commission charged by the validator operator (if any).

#### Transaction Fees Bonus

When a validator is selected to propose the next block, they must include at least 66% precommits of the previous block. To incentivise validators to include more than 66% precommits, the module provide a bonus reward (a portion of the transaction fee in the block) to the proposer.

This bonus reward is dependent linearly on the precommits from the other validators. Stating from 66% of the precommits, the basic bonus will be `base_proposer_reward` and increase linearly to `bonus_proposer_reward` when the validator includes 100% of the precommits.

This mechanism aims to incentivize non-empty block proposals, better networking between validators as well as to mitigate censorship. For further example, kindly refers to this [link](https://hub.cosmos.network/master/validators/validator-faq.html).

#### Community tax

The `community_tax` is the tax rate to the reward obtained by the validator. Specifically, part of the reward will be taxed and send to the community pool. The funds in the community pool can be withdrawn by submitting a community pool spend proposal with the [gov module](./module_gov).

Even if the `community_tax` is set to be zero, the balance of the community pool could be non-zero. For example, the truncated remainder in some accounting edge cases will be sent to the community pool as well. Besides that, users can fund the community pool voluntary, and there could be funds allocated to the community pool in the [genesis](./genesis_file).

### Transactions and Queries

### Transactions

#### `tx distribution withdraw-all-rewards` - Withdraw all delegations rewards for a delegator

Delegator can withdraw their reward(s) from the validator(s) that they have delegated all at once.

#### `tx distribution withdraw-rewards [validator-addr]` - Withdraw rewards from a given validator address

Delegator can withdraw their reward from a specific validator.

:::tip Remark:
Validator operation can withdraw the commission in addition to the rewards by adding the commission flag `--commission`.
:::

#### `tx distribution set-withdraw-addr [withdraw-addr]` - Change the default withdraw address for rewards associated with an address

Delegator can set a different address to withdraw their rewards.

#### `tx distribution fund-community-pool [amount]` - Funds the community pool with the specified amount

Users can make a contribution to the community pool with a specific amount.

### Queries

#### `query distribution commission [validator]` - Query distribution validator commission

We can check the commission of a specific validator.

#### `query distribution community-pool` - Query the amount of coins in the community pool

We can check the balance of the community pool.

#### `query distribution rewards [delegator-addr] [validator-addr]` - Query all distribution delegator rewards or rewards from a particular validator

We can check the current rewards for a delegation on a specific validator.

#### `query distribution slashes [validator] [start-height] [end-height]` - Query distribution validator slashes

We can check the history of slashing event of a validator.

#### `query distribution validator-outstanding-rewards [validator]` - Query distribution outstanding rewards for a validator and all their delegations

We can check distribution outstanding (un-withdrawn) rewards for a validator and all of their delegations.

#### `query distribution params ` - Query the current distribution parameters

We can query the current distribution parameters by

```json
$ chain-maind query distribution params --output json | jq

  {
    "community_tax": "0.000000000000000000",
    "base_proposer_reward": "0.010000000000000000",
    "bonus_proposer_reward": "0.040000000000000000",
    "withdraw_addr_enabled": true
  }
```

### Appendix

#### `distribution` module: Network Parameters and configuration

The following tables show overall effects on different configurations of the distribution related network parameters:

|                      | `community_tax`                               | `base_proposer_reward`                               | `bonus_proposer_reward`              |
| -------------------- | --------------------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| Type                 | string (dec)                                  | string (dec)                                         | string (dec)                         |
| Higher               | More reward will go into the community pool | Higher basic transaction fees bonus for the proposer | Easier for a proposal to be passed   |
| Lower                | Less reward will go into the community pool | Lower basic transaction fees bonus for the proposer  | Harder for a proposal to be passed   |
| Constraints          | Value has to be less or equal to `1`          | Value has to be less or equal to `1`                 | Value has to be less or equal to `1` |
| Sample configuration | `0` (0%)                                      | `0.01` (1%)                                          | `0.04` (4%)                          |
