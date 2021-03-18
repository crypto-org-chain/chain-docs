# Modules

## Overview
Crypto.org Chain utilizes [Cosmos SDK](https://cosmos.network/sdk) and the [Tendermint](https://tendermint.com/) Core consensus engine underneath. Specifically, the Cosmos SDK is a framework that facilitates the development of secure state-machines on top of Tendermint. In particular, we utilize different SDK modules to facilitate the special features of the Crypto.org Chain. 

In this documentation, we will be focusing on some of the important modules we used, for example:

- [Bank](#bank) - Token transfer functionalities and query support for the total supply of all assets; 
- [Distribution](#distribution) - Fee distribution, and staking rewards to the validators and delegator; 
- [Governance](#gov) - On-chain proposals and voting;
- [Mint](#mint) - Creation of new units of staking token;
- [Slashing](#slashing) - Validator punishment mechanisms;
- [Staking](#staking) - Proof-of-Stake layer for public blockchains;
- [Supply](#supply) - Retrieve total and liquid supply.


## `bank` 

### Introduction

The `bank` module maintains the state of two primary objects:

- Account balances by address;
- Total supply of tokens of the chain

`bank` module tracks and provides query support for the total supply of all assets used in the application. It also supports token transfer functionalities. Specifically, the total supply is updated whenever a token is:

- **Minted**, e.g. Token created by the [mint](#mint) module; or
- **Burned**, e.g. Token distorted by the [slashing](#slashing) module.

### Transactions and Queries

### Transactions

#### `tx bank send [from_key_or_address] [to_address] [amount] [network_id]` - **Send Funds**

You can transfer of tokens between to a designated address by the `tx bank send` command. For example, we can send 10 cro from `address_a` to `address_b` by

```bash
$ chain-maind tx bank send <address_a> <address_b> 10cro --chain-id <chain-id>

## Transaction payload##
{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```



### Queries

#### `query bank balances [address]` - Check the balance of a specified account

One can check the current balance of a specified account by:

```json
$ chain-maind query bank balances <address> --output json | jq
    {
    "balances": [
        {
        "denom": "basecro",
        "amount": "[token_balance]"
        }
    ],
    "pagination": {
        "next_key": null,
        "total": "0"
    }
    }
```

#### `query bank total` - Check the total supply of the token

You can also check the current total supply of the token by:

```json
$ chain-maind query bank total --output json | jq
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_supply_amount]"
        }
    ]
    }
```


### Appendix

#### `bank` module: Network Parameters and configuration

| Key                  | Type          | Example                              |
| -------------------- | ------------- | ------------------------------------ |
| `SendEnabled`        | []SendEnabled | [{denom: "basecro", enabled: true }] |
| `DefaultSendEnabled` | bool          | true                                 |

## `distribution`

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

- Block rewards, governed by the [mint](#mint) module; and
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

When a validator is selected to propose the next block, they must include at least 66% precommits of the previous block. To incentivise validators to include more than 66% precommits, the module provide a bonus reward (portion of the transaction fee in the block) to the proposer.

This bonus reward is dependent linearly on the precommits from the other validators. Stating from 66% of the precommits, the basic bonus will be `base_proposer_reward` and increase linearly to `bonus_proposer_reward` when the validator includes 100% of the precommits.

This mechanism aims to incentivize non-empty block proposals, better networking between validators as well as to mitigate censorship. For further example, kindly refers to this [link](https://hub.cosmos.network/main/validators/validator-faq.html).

#### Community tax

The `community_tax` is the tax rate to the reward obtained by the validator. Specifically, part of the reward will be taxed and send to the community pool. The funds in the community pool can be withdrawn by submitting a community pool spend proposal with the [gov module](#gov).

Even if the `community_tax` is set to be zero, the balance of the community pool could be non-zero. For example, the truncated remainder in some accounting edge cases will be sent to the community pool as well. Besides that, users can fund the community pool voluntary, and there could be funds allocated to the community pool in the [genesis](./genesis_file.md).

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

we can check the current rewards for a delegation on a specific validator.

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
| Higher               | More reward will goes into the community pool | Higher basic transaction fees bonus for the proposer | Easier for a proposal to be passed   |
| Lower                | Less reward will goes into the community pool | Lower basic transaction fees bonus for the proposer  | Harder for a proposal to be passed   |
| Constraints          | Value has to be less or equal to `1`          | Value has to be less or equal to `1`                 | Value has to be less or equal to `1` |
| Sample configuration | `0` (0%)                                      | `0.01` (1%)                                          | `0.04` (4%)                          |


## `gov`

### Introduction

The `gov` module enables on-chain governance which allows Crypto.org Chain token holder to participate in the decision-making processes. For example, users can:

- Submit a proposal along with an initial deposit;
- Deposit tokens and fund an active proposal;
- Vote for an active proposal...

### Overview

#### Network parameters

Below are all the network parameters for the `gov` module:

- `deposit_params` - Deposit related parameters:
  - `min_deposit`: Minimum deposit for a proposal to enter voting period; and
  - `max_deposit_period`: Maximum period for Cro holders to deposit on a proposal.
- `voting_params` - Voting related parameters
  - `voting_period`: The length of the voting period.
- `tally_params` - Tally related parameters
  - `quorum`: The minimum percentage of voting power that needs to be casted on a proposal for the result to be valid;
  - `threshold`: Minimum proportion of `Yes` votes (excluding `Abstain` votes) for the proposal to be accepted; and
  - `veto`: Minimum proportion of `Veto` votes to total votes ratio for proposal to be vetoed.

#### The Governance Procedure

**Phase 0 - Submit a proposal along with an initial deposit:**

Users can submit a proposal with an initial deposit. The proposal will then become "active" and entre the _deposit period_.

**Phase 1 - Deposit period**

During the _deposit period_, users can deposit and support an active proposal. Once the deposit of the proposal reached `min_deposit`, it will enter the _voting period_. Otherwise, if the proposal is not successfully funded within `max_deposit_period`, It will become inactive and all the deposit will be refunded.

**Phase 2 - Voting period**

During the _voting period_, staked (bonded) token will be able to participate in the voting. Users can choose one of the following option: `"yes"`, `"no"`, `"no_with_veto"` and `"abstain"`

After the `voting_period` has passed, there are several scenarios that a proposal will consider to be "Rejected", for example, if

- No one votes (everyone `"abstain"`);
- Votes did not reach the `quorum`;
- More than `veto` of voters vote for `"no_with_veto"`;
- More than `threshold` that non-abstaining voters vote `"no"`.

Otherwise, the proposal will be accepted and changes will be implemented according to the proposal.

### Transactions and Queries

### Transactions

#### `tx gov submit-proposal` - Submit a proposal along with an initial deposit

- Submit a parameter change proposal - `param-change [proposal-file]`

  Users can submit a proposal to modify network parameters during run time, Here is a demon proposal if we would like to change the parameter `MaxValidators` (maximum number of validator) in the `staking` module,

  ```json
  {
    "title": "Staking Param Change",
    "description": "Update max validators",
    "changes": [
      {
        "subspace": "staking",
        "key": "MaxValidators",
        "value": 151
      }
    ]
  }
  ```

- Submit a community pool spend proposal - `community-pool-spend [proposal-file]`

  Users can submit a proposal and request funds from the community pool to support their projects or other usages.

- Submit a software upgrade proposal- `software-upgrade [name] (--upgrade-height [height] | --upgrade-time [time]) (--upgrade-info [info])`

  Users can submit an upgrade proposal and suggest a software upgrade at a specific block height.

- Cancel the current software upgrade proposal - `cancel-software-upgrade`

  On the other hand, users can submit a proposal to cancel the planned software upgrade.

#### `tx gov deposit [proposal-id] [deposit]` - Deposit tokens for an active proposal

Users can submit a deposit transaction to fund and support an active proposal.

#### `tx gov vote [proposal-id] [option]` - Vote for an active proposal

Users can vote for an active proposal. Valid value of `"option"` field can be `"yes"`, `"no"`, `"no_with_veto"` and `"abstain"`.

### Queries

#### `query gov proposals [proposal-id]` - Query proposals with optional filters

We can check the proposal with optional filters by:

```json
$ chain-maind query gov proposals -o json | jq

  {
    "proposals": [
      {
        "proposal_id": "1",
        "content": {
          "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",
          "title": "Staking Param Change",
          "description": "Update max validators",
          "changes": [
            {
              "subspace": "staking",
              "key": "MaxValidators",
              "value": "151"
            }
          ]
        },
        "status": "PROPOSAL_STATUS_PASSED",
        "final_tally_result": {
          "yes": "50040000000000",
          "abstain": "0",
          "no": "0",
          "no_with_veto": "0"
        },
        "submit_time": "2020-10-15T10:05:49.996956080Z",
        "deposit_end_time": "2020-10-15T22:05:49.996956080Z",
        "total_deposit": [
          {
            "denom": "basecro",
            "amount": "100000000000"
          }
        ],
        "voting_start_time": "2020-10-15T10:14:56.958963929Z",
        "voting_end_time": "2020-10-15T22:14:56.958963929Z"
      }
    ],
    "pagination": {
      "next_key": null,
      "total": "0"
    }
  }
```

In the above example, there is only one proposal with `"proposal_id": "1"`, with the title: `"Staking Param Change"` that change the `MaxValidators` parameter of the `staking` module to `151`. We can also see that the status of the proposal is `"PROPOSAL_STATUS_PASSED"`, which means that this proposal has bee passed.

#### `query gov proposal [proposal-id]` Query details of a single proposal

Similarly, we can check the details of a proposal with a given `"proposal_id"`.

#### `query gov tally [proposal-id]` Get the tally of a proposal vote

We can also the tally of a proposal with a given `"proposal_id"`.

#### `query gov params` - Query the current gov parameters

We can query the current gov parameters by

```json
$ chain-maind query gov params --output json | jq

  {
    "voting_params": {
      "voting_period": "43200000000000"
    },
    "tally_params": {
      "quorum": "0.334000000000000000",
      "threshold": "0.500000000000000000",
      "veto_threshold": "0.334000000000000000"
    },
    "deposit_params": {
      "min_deposit": [
        {
          "denom": "basecro",
          "amount": "10000000"
        }
      ],
      "max_deposit_period": "43200000000000"
    }
  }
```

### Appendix

#### `gov` module: Network Parameters and configuration

The following tables show overall effects on different configurations of the gov related network parameters:

|                      | `min_deposit`                               | `max_deposit_period`         | `voting_period`              |
| -------------------- | ------------------------------------------- | ---------------------------- | ---------------------------- |
| Type                 | array (coins)                               | string (time ns)             | string (time ns)             |
| Higher               | Larger window for calculating the downtime  | Longer deposit period        | Longer voting period         |
| Lower                | Smaller window for calculating the downtime | Shorter deposit period       | Shorter voting period        |
| Constraints          | Value has to be a positive integer          | Value has to be positive     | Value has to be positive     |
| Sample configuration | `100000` (100000 cro)                       | `1209600000000000` (2 weeks) | `1209600000000000` (2 weeks) |

|                      | `quorum`                             | `threshold`                          | `veto`                               |
| -------------------- | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| Type                 | string (dec)                         | string (dec)                         | string (dec)                         |
| Higher               | Easier for a proposal to be passed   | Easier for a proposal to be passed   | Easier for a proposal to be passed   |
| Lower                | Harder for a proposal to be passed   | Harder for a proposal to be passed   | Harder for a proposal to be passed   |
| Constraints          | Value has to be less or equal to `1` | Value has to be less or equal to `1` | Value has to be less or equal to `1` |
| Sample configuration | `0.15` (15%)                         | `0.5` (50%)                          | `0.33` (33%)                         |


## `mint`

### Introduction

The `mint` module is responsible for creating token in a flexible way to reward the validator who participate in the proof of stake consensus process (see also the [distribution module](#distribution)). It is also designed in a way to bring a balance between market liquidity and staked supply.

### Overview

#### Network parameters

Below are all the network parameters for the `mint` module:

- `"blocks_per_year"` - The expected number of blocks being produced per year;
- `"goal_bonded"` - Goal of bonded token in percentage;
- `"inflation_max"` - Maximum annual inflation rate;
- `"inflation_min"` - Minimum annual inflation rate;
- `"inflation_rate_change"` - Maximum annual change in inflation rate;
- `"mint_denom"` - Token type being minted.

The target annual inflation rate is recalculated for each previsions cycle. The inflation is also subject to a rate change (positive or negative) depending on the distance from the desired ratio (`"goal_bonded"`). The maximum rate change possible is defined to be `"inflation_rate_change"` per year, where the annual inflation is capped as between `"inflation_min"` and `"inflation_max"`.

### `mint` module: Queries

### Queries

#### `query mint params` - Query the current minting annual provisions value

We can query the current minting annual provisions value, for example:

```json
  $ chain-maind query mint annual-provisions
  109573801550200370
```

implies that the current minting annual provisions will be `109573801550200370` basecro ( i.e. `1,095,738,015` cro)

#### `query mint inflation` - Query the current minting inflation value

We can query the current minting inflation value, for example:

```json
  $ chain-maind query mint inflation
  0.013687008526984104
```

implies that the current minting annual provisions will be `0.013687008526984104`( i.e. `1.368%`)

#### `query mint annual-provisions` - Query the current minting parameters

We can query the current query parameters by

```json
$ chain-maind query mint params --output json | jq

  {
    "mint_denom": "basecro",
    "inflation_rate_change": "0.013000000000000000",
    "inflation_max": "0.020000000000000000",
    "inflation_min": "0.007000000000000000",
    "goal_bonded": "0.670000000000000000",
    "blocks_per_year": "6311520"
  }
```

### Appendix

#### `gov` module: Network Parameters and configuration

The following tables show overall effects on different configurations of the mint related network parameters:

|                      | `blocks_per_year`                  | `goal_bonded`                        | `mint_denom` |
| -------------------- | ---------------------------------- | ------------------------------------ | ------------ |
| Type                 | array (coins)                      | string (dec)                         | string       |
| Higher               | More expected blocks per year      | Higher target bonding ratio          | N/A          |
| Lower                | Less expected blocks per year      | Lower target bonding ratio           | N/A          |
| Constraints          | Value has to be a positive integer | Value has to be less or equal to `1` | N/A          |
| Sample configuration | `5256000` (5,256,000 blocks)       | `0.66` (66%)                         | `basecro`    |

|                      | `inflation_max`                       | `inflation_min`                      | `inflation_rate_change`                       |
| -------------------- | ------------------------------------- | ------------------------------------ | --------------------------------------------- |
| Type                 | string (dec)                          | string (dec)                         | string (dec) (dec)                            |
| Higher               | Higher ceiling for the inflation rate | Higher floor for the inflation rate  | Higher yearly rate of change to the inflation |
| Lower                | Lower ceiling for the inflation rate  | Lower floor for the inflation rate   | Lower yearly rate of change to the inflation  |
| Constraints          | Value has to be less or equal to `1`  | Value has to be less or equal to `1` | Value has to be less or equal to `1`          |
| Sample configuration | `0.02` (2%)                           | `0.01` (1%)                          | `0.01` (1%)                                   |

## `slashing`

### Introduction

Validators are responsible for signing or proposing block at each consensus round. A penalty should be imposed on validators' misbehavior to reinforce this.

Specifically, `slashing` functionality that aims to dis-incentivize network-observable actions, such as faulty validations. The penalties may include losing some amount of their stake, losing their ability to perform the network functionality for a period of time, collect rewards etc.

### Overview

#### Network parameters

Below are all the network parameters used to configure the behavior of validator punishments. Details of all these parameters and their effect on behavior of validator punishments is discussed later in this document.

- `signed_blocks_window`: Number of blocks for which the liveness is calculated for uptime tracking;
- `min_signed_per_window`: Maximum percentage of blocks with faulty/missed validations allowed for an account in last; `signed_blocks_window` blocks before it gets deactivated;
- `downtime_jail_duration`: Duration for [jailing](#jailing);
-  `slash_fraction_double_sign`: Percentage of funds being slashed when validator makes a byzantine fault; and
-  `slash_fraction_downtime`: Percentage of funds being slashed when a validator is non-live.

#### Slashing mechanism

Punishments for a validator are triggered when they either make a _byzantine fault_ or become _non-live_:

- Liveness Faults (Low availability)

  A validator is said to be **non-live** when they fail to sign at least `min_signed_per_window` blocks (in percentage) in the
  last `signed_blocks_window` blocks successfully. `signed_blocks_window` and `min_signed_per_window` are network
  parameters and can be configured during genesis and can be updated during runtime by the governance module.

:::tip Example:
For example, if `block_signing_window` is `2000` blocks and `min_signed_per_window` is `0.5`, a validator will
be marked as **non-live** and jailed if they fail to successfully sign at least `2000*0.5=1000` blocks in last `2000` blocks.
:::

- Byzantine Faults 

  A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and round. Tendermint has mechanisms to publish evidence of validators that signed conflicting votes so they can be punished by the slashing module. For example:
  

  - Validator who votes for two different blocks within a single round (*"Equivocation validator"*/ *"Double signing"*);


  - Validator who signs commit messages for arbitrary application state ( *"Lunatic validator"*).


**Remark**: The evidence of a set of validators attempting to mislead a light client can also be detected and captured. However, even the [Amnesia attack](https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-056-light-client-amnesia-attacks.md#amnesia-attack) can be detected, punishment can not be applied at this stage, as we can not deduce the malicious validators.

:::tip Implementation note:
Tendermint passes `Evidence` of a byzantine validator in `BeginBlock` request. Before jailing any account due to byzantine fault, that evidence should be verified. Also, it should be checked that evidence provided by tendermint is
not older than `max_age` in tendermint.
:::





### Inactivity Slashing

It is important that the validators maintain excellent availability and network connectivity to perform their tasks. A penalty should be imposed on validators' misbehavior to reinforce this.

When a validator fails to successfully sign `missed_block_threshold` blocks in last `block_signing_window` blocks, it is
immediately jailed and punished by deducting funds from their bonded and unbonded amount and removing them from active validator set. The funds to be deducted are calculated based on `slash_fraction_downtime`. Kindly refer to this [link](https://docs.cosmos.network/v0.40/modules/slashing/04_begin_block.html) on the logic of the liveness tracking.

### Jailing

A validator is jailed when they make liveness or Byzantine fault, when a validator is jailed, it will no longer be considered as an active validator until they are un-jailed. Futhermore, it cannot be un-jailed
before `downtime_jail_duration`. This `downtime_jail_duration` is a
network parameter which can be configured during genesis.

:::warning Important:
When a validator is jailed because of a byzantine fault, their validator public key is added to a list of permanently banned validators and cannot re-join the network as a validator with the same public key, see [staking tombstone](https://docs.cosmos.network/master/modules/slashing/07_tombstone.html)
:::

#### Un-jailing

When a jailed validator wishes to resume normal operations (after `downtime_jail_duration` has passed), they can create an`unjail` transaction which marks them as un-jailed. Validator will then rejoin the validator set once it has bee successful un-jailed.

### Slashing for Byzantine Fault

When there is byzantine fault detected, they are immediately slashed other than jailed. The funds to be deducted are calculated based on `slash_fraction_double_sign`. Furthermore, validator who commit this double-signing fault will also be put into the "tombstone state", which means it will be blacklisted and jailed forever.

### Transactions and Queries

### Transactions

#### `tx slashing unjail` - Unjailing a validator

Validator could be punished and jailed due to network misbehaviour, for example if we check the validator set:

```bash
$ chain-maind query staking validators -o json | jq
................................
    "operator_address": "crocncl18prgwae59zdqpwye6t4xftmq3d87vl0h0rj0qq",
    "consensus_pubkey": "crocnclconspub1zcjduepqg0yml2l63qjnhr2cuw4tvprr72tle0twf3zymrxllmr0sj9uv3tqmpcrhs",
    "jailed": true,
    "status": 1,
................................
```

After the jailing period has passed, one can broadcast a `unjail` transaction to unjail the validator and resume its normal operations by

```bash
$ chain-maind tx slashing unjail --from node1 --chain-id cro-test
  {"body":{"messages":[{"@type":"/cosmos.slashing.v1beta1.MsgUnjail"...}]}
  confirm transaction before signing and broadcasting [y/N]: y
```

### Queries

#### `query slashing params ` - Query the current slashing parameters

We can query the current slashing parameters by

```json
$ chain-maind query slashing params --output json | jq

  {
    "signed_blocks_window": "2000",
    "min_signed_per_window": "0.500000000000000000",
    "downtime_jail_duration": "3600s",
    "slash_fraction_double_sign": "0.050000000000000000",
    "slash_fraction_downtime": "0.001000000000000000"
  }
```

### Appendix

#### `slashing` module: Network Parameters and configuration

The following tables show overall effects on different configurations of the slashing related network parameters:

|                      | `signed_blocks_window`                      | `min_signed_per_window`         | `downtime_jail_duration`           |
| -------------------- | ------------------------------------------- | ------------------------------- | ---------------------------------- |
| Type                 | string (int64)                              | string (dec)                    | string (int64)                     |
| Higher               | Larger window for calculating the downtime  | Higher availability is required | Longer jailing duration            |
| Lower                | Smaller window for calculating the downtime | Lower availability is required  | Longer jailing duration            |
| Constraints          | Value has to be a positive integer          | Value has to be positive        | Value has to be a positive integer |
| Sample configuration | `2000` (2000 blocks)                        | `0.5` (50%)                     | `3600s` (1 hour)                   |

---

|                      | `slash_fraction_double_sign`         | `slash_fraction_downtime`            |
| -------------------- | ------------------------------------ | ------------------------------------ |
| Type                 | string (dec)                         | string (dec)                         |
| Higher               | Heavier penalty on byzantine faults  | Heavier penalty on liveness faults   |  |
| Lower                | Lighter penalty on byzantine faults  | Lighter penalty on liveness faults   |
| Constraints          | Value has to be less or equal to `1` | Value has to be less or equal to `1` |
| Sample configuration | `0.001` (0.1%)                       | `0.05` (5%)                          |

### `supply`

### Introduction

The `supply` module is responsible for retrieve total and liquid supply. 



### Queries

#### `query supply liquid` - Check the total supply of coins of the chain

We can also use  `query` command of the `supply` module to check the current total supply:

```json
$ chain-maind query supply total
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_supply_amount]"
        }
    ]
    }
```

#### `query supply liquid` - Check the liquid supply of coins of the chain

We can also query the liquid supply, which is the total supply bonded subtracted by the non-circulating supply such as bonded amount, unvested amounts, and uncollected reward etc.

```json
$ chain-maind query supply total
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_circulating_amount]"
        }
    ]
    }
```

## `staking`

### Introduction

The `staking` module handles Proof-of-Stake related logics, which plays a very import part to the underneath consensus protocol.

### Overview

Crypto.org Chain is based on Tendermint Core's consensus engine, it relies on a set of validators to participate in the proof of stake (PoS) consensus protocol, and they are responsible for committing new blocks in the blockchain.

- `unbonding_time`: The time duration of unbonding;
- `max_validators`: The maximum number of validator;
- `max_entries`: The max entries for either unbonding delegation or redelegation;
- `historical_entries`: The number of historical entries to persist; and
- `bond_denom`: Coin denomination for staking.

### Validator

Validators are responsible for signing or proposing block at each consensus round. It is important that the validators maintain excellent availability and network connectivity to perform their tasks. To incentivise the validator nodes to run the network, rewards are distributed to the validators according to their performance and amount of staked token (see [distribution](#distribution) and [mint](#mint)). On the other hand, a penalty should be imposed on validators' misbehavior (see [slashing](#slashing)).

### Delegator

The `staking` module enables CRO owners to delegate their tokens to active validators and share part of the reward obtained by the validator during the proof of stake protocol(see [distribution](#distribution) module). Specifically, It allows token owners to take part in the consensus process without running a validator themselves.

It is important to point out that the delegator and the validator are on the same boat: They share the reward and the risk. In particular, part of their delegated token could be slashed due to validator's misbehaviour (see [slashing](#slashing)). Therefore, It is very important to choose a reliable validator to delegate. Kindly refer to this [link](https://docs.cosmos.network/v0.40/modules/staking/02_state_transitions.html#delegations) for detailed specification and state transitions of delegation.

### Transactions and Queries

### Transactions

#### `tx staking create-validator` - Create new validator initialized with a self-delegation

First of all, we can create a validator with the `create-validator` transaction, for example:

```bash
$ chain-maind tx staking create-validator \
--from=[name_of_your_key] \
--amount=[staking_abount] \
--pubkey=[trocnclconspub...]  \
--moniker="[moniker_id_of_your_node]" \
--security-contact="[security contact email/contact method]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]"

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```

#### `tx staking delegate [validator-addr] [amount]` - Delegate liquid tokens to a validator

As discussed in the delegator section, one can delegate their tokens to an active validators by:

```bash
$ tx staking delegate [validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"...}
```

#### `tx staking unbond [validator-addr] [amount]` - Unbond shares from a validator

Delegator can unbond their staked tokens by

```bash
$ chain-maind tx staking unbond [validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgUndelegate"...}
```

_Remark:_ Note that funds will only be available after the `unbonding_time` has passed.

#### `tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount]` - Redelegate illiquid tokens from one validator to another

We can also move our staked tokens from one validator to another by:

```bash
$ chain-maind tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgBeginRedelegate"...}
```

### Queries

We will be covering most of the commonly used queries here. Meanwhile, you can use

```
chain-maind query staking -h
```

to check all the supported sub-commands.

#### `query staking delegation [delegator-addr] [validator-addr]` - Query a delegation based on address and validator address

With a given delegator address and the validator account that it is associated with, we can check the by:

```json
$ chain-maind query chain-maind query staking delegation [delegator-addr] [validator-addr] --output json | jq

  {
    "delegation": {
      "delegator_address": "[delegator-addr]",
      "validator_address": "[validator-addr]",
      "shares": "[delegator_shares]"
    },
    "balance": {
      "denom": "basecro",
      "amount": "[delegator_balance]"
    }
  }
```

#### `query staking delegations-to [validator-addr]` - Query all delegations made to one validator

We can check all the delegations made to a specific validator:

```json
$ chain-maind query staking delegations-to [validator-addr] --output json  | jq

  {
    "delegation_responses": [
      {
        "delegation": {
          "delegator_address": "[delegator-addr-1]",
          "validator_address": "[validator-addr]",
          "shares": "[delegator_shares]"
        },
        "balance": {
          "denom": "basecro",
          "amount": "[delegator_balance_1]"
        }
      },
      {
        "delegation": {
          "delegator_address": "[delegator-addr-2]",
          "validator_address": "[validator-addr]",
          "shares": "[delegator_shares-2]"
        },
        "balance": {
          "denom": "basecro",
          "amount": "[delegator_balance_2]"
        }
      }
    .......
    ],
    "pagination": {
      "next_key": null,
      "total": "0"
    }
  }
```

#### `query staking pool` - Query the current staking pool values

We can check the amount of bonded and unbonded amount in the staking pool:

```json
$ chain-maind query staking pool --output json | jq

  {
    "not_bonded_tokens": "[not_bonded_amount]",
    "bonded_tokens": "[bonded_amount]",
  }
```

#### `query staking unbonding-delegation [delegator-addr] [validator-addr]` - Query an unbonding-delegation record based on delegator and validator address

```json
$ chain-maind query staking unbonding-delegation [delegator-addr] [validator-addr] --output json | jq

  {
    "delegator_address": "[delegator-addr]",
    "validator_address": "[validator-addr]",
    "entries": [
      {
        "creation_height": "[height_of_unbonding]",
        "completion_time": "[completion_time]",
        "initial_balance": "[unbonding_initial_balance]",
        "balance": "[unbonding_balance]"
      }
    ]
  }
```

#### `query staking validator [validator-addr]` - Query a specific validator

We can query the details of a specific validator with its validator address (crocncl...) by:

```json
$ chain-maind query staking validator [validator-addr] --output json | jq

  {
    "operator_address": "[validator_address (crocncl...)]",
    // address of the validator's operator
    "consensus_pubkey": "[consensus_pubkey (crocnclconspub...)]",
    // the consensus public key of the validator
    "jailed": "[jailed_or_not]",
    // if it has been jailed from bonded status?
    "status": "[validator_statuses]",
    // validator status (bonded/unbonding/unbonded)
    "tokens": "[total_tokens]",
    // total delegated tokens
    "delegator_shares": "[delegator_shares]",
    // total shares issued to a validator's delegators
    "description": {
      "moniker": "[validator_moniker_id]",
      "identity": "",
      "website": "",
      "security_contact": "[security_contact]",
      "details": ""
    },
    // description terms for the validator
    "unbonding_height": "[unbonding_height]",
    "unbonding_time": "[unbonding_time]",
    "commission": {
      "commission_rates": {
        "rate": "[commission_rates]",
        // the commission rate charged to delegators
        "max_rate": "[maximum_commission_rates]",
        // maximum commission rate which validator can ever charge
        "max_change_rate": "[maximum_rate_of_change_of_commission]"
        // maximum daily increase of the validator commission
      },
      "update_time": "[last_update_time]"
      // the last time the commission rate was changed
    },
    "min_self_delegation": "[min_self_delegation_amount]"
    // validator's self declared minimum self delegation
  }
```

#### `query staking validators` - Query all validators

A full list of validators and their details can be found by this query.

#### `query staking params` - Query the current staking parameters

Finally, we can query the current staking parameters by

```json
$ chain-maind query staking params --output json | jq

  {
    "unbonding_time": "1814400s",
    "max_validators": 100,
    "max_entries": 7,
    "historical_entries": 100,
    "bond_denom": "basecro"
  }
```

### Appendix

#### `staking` module: Network Parameters Configuration

The following tables show overall effects on different configurations of the staking related network parameters:

|                      | `bond_denom` | `historical_entries`               | `max_entries`                                                 |
| -------------------- | ------------ | ---------------------------------- | ------------------------------------------------------------- |
| Type                 | string       | uint16                             | uint16                                                        |
| Higher               | N/A          | More historical entries to persist | More entries for either unbonding delegation or redelegation  |
| Lower                | N/A          | Less historical entries to persist | Fewer entries for either unbonding delegation or redelegation |
| Constraints          | N/A          | Value has to be positive           | Value has to be a positive                                    |
| Sample configuration | `basecro`    | `100` (50%)                        | `7`                                                           |

---

|                      | `max_validators`                     | `unbonding_time`                     |
| -------------------- | ------------------------------------ | ------------------------------------ |
| Type                 | uint16                               | string                               |
| Higher               | More active validators               | Longer waiting period for unbonding  |
| Lower                | Fewer active validators              | Shorter waiting period for unbonding |
| Constraints          | Value has to be less or equal to `1` | Positive value in seconds            |
| Sample configuration | `100` (maximum 100 active validator) | `"1814400s"` (3 weeks)               |


## `supply`

### Introduction

The `supply` module is responsible for retrieve total and liquid supply. 



### Queries

#### `query supply liquid` - Check the total supply of coins of the chain

We can also use  `query` command of the `supply` module to check the current total supply:

```json
$ chain-maind query supply total
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_supply_amount]"
        }
    ]
    }
```

#### `query supply liquid` - Check the liquid supply of coins of the chain

We can also query the liquid supply, which is the total supply bonded subtracted by the non-circulating supply such as bonded amount, unvested amounts, and uncollected reward etc.

```json
$ chain-maind query supply total
    {
    "supply": [
        {
        "denom": "basecro",
        "amount": "[total_circulating_amount]"
        }
    ]
    }
```
