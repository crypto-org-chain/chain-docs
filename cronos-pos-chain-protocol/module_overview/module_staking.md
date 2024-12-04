# module\_staking

#### `staking` module

#### Introduction

The `staking` module handles Proof-of-Stake related logic, which plays a very important part in the underlying consensus protocol.

#### Overview

Cronos POS Chain is based on Tendermint Core's consensus engine, it relies on a set of validators to participate in the proof of stake (POS) consensus protocol, and they are responsible for committing new blocks in the blockchain.

* `unbonding_time`: The time duration of unbonding;
* `max_validators`: The maximum number of validators;
* `max_entries`: The max entries for either unbonding delegation or redelegation;
* `historical_entries`: The number of historical entries to persist; and
* `bond_denom`: Coin denomination for staking.

#### Validator

Validators are responsible for signing or proposing block at each consensus round. It is important that the validators maintain excellent availability and network connectivity to perform their tasks. To incentivise the validator nodes to run the network, rewards are distributed to the validators according to their performance and amount of staked token (see [distribution](module_distribution.md) and [mint](module_mint.md)). On the other hand, a penalty should be imposed on validators' misbehavior (see [slashing](module_slashing.md)).

#### Delegator

The `staking` module enables CRO owners to delegate their tokens to active validators and share part of the reward obtained by the validator during the proof of stake protocol(see [distribution](module_distribution.md) module). Specifically, It allows token owners to take part in the consensus process without running a validator themselves.

It is important to point out that the delegator and the validator are in the same boat: They share the reward and the risk. In particular, part of their delegated token could be slashed due to validator's misbehaviour (see [slashing](module_slashing.md)). Therefore, It is very important to choose a reliable validator to delegate. Kindly refer to this [link](https://docs.cosmos.network/v0.40/modules/staking/02_state_transitions.html#delegations) for detailed specification and state transitions of delegation.

#### Transactions and Queries

#### Transactions

**`tx staking create-validator` - Create new validator initialized with a self-delegation**

First of all, we can create a validator with the `create-validator` transaction, for example:

```bash
$ chain-maind tx staking create-validator \
--from=[name_of_your_key] \
--amount=[staking_amount] \
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

**`tx staking delegate [validator-addr] [amount]` - Delegate liquid tokens to a validator**

As discussed in the delegator section, one can delegate their tokens to an active validator by:

```bash
$ tx staking delegate [validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"...}
```

**`tx staking unbond [validator-addr] [amount]` - Unbond shares from a validator**

Delegator can unbond their staked tokens by

```bash
$ chain-maind tx staking unbond [validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgUndelegate"...}
```

_Remark:_ Note that funds will only be available after the `unbonding_time` has passed.

**`tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount]` - Redelegate illiquid tokens from one validator to another**

We can also move our staked tokens from one validator to another by:

```bash
$ chain-maind tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount]

## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgBeginRedelegate"...}
```

#### Queries

We will be covering most of the commonly used queries here. Meanwhile, you can use

```
chain-maind query staking -h
```

to check all the supported sub-commands.

**`query staking delegation [delegator-addr] [validator-addr]` - Query a delegation based on address and validator address**

With a given delegator address and the validator account that it is associated with, we can check the by:

```json
$ chain-maind query staking delegation [delegator-addr] [validator-addr] --output json | jq

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

**`query staking delegations-to [validator-addr]` - Query all delegations made to one validator**

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

**`query staking pool` - Query the current staking pool values**

We can check the amount of bonded and unbonded amount in the staking pool:

```json
$ chain-maind query staking pool --output json | jq

  {
    "not_bonded_tokens": "[not_bonded_amount]",
    "bonded_tokens": "[bonded_amount]",
  }
```

**`query staking unbonding-delegation [delegator-addr] [validator-addr]` - Query an unbonding-delegation record based on delegator and validator address**

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

**`query staking validator [validator-addr]` - Query a specific validator**

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

**`query staking validators` - Query all validators**

A full list of validators and their details can be found by this query.

**`query staking params` - Query the current staking parameters**

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

#### Appendix

**`staking` module: Network Parameters Configuration**

the The following tables show overall effects on different configurations of the staking related network parameters:

|                      | `bond_denom` | `historical_entries`               | `max_entries`                                                 |
| -------------------- | ------------ | ---------------------------------- | ------------------------------------------------------------- |
| Type                 | string       | uint16                             | uint16                                                        |
| Higher               | N/A          | More historical entries to persist | More entries for either unbonding delegation or redelegation  |
| Lower                | N/A          | Less historical entries to persist | Fewer entries for either unbonding delegation or redelegation |
| Constraints          | N/A          | Value has to be positive           | Value has to be a positive                                    |
| Sample configuration | `basecro`    | `100` (50%)                        | `7`                                                           |

***

|                      | `max_validators`                     | `unbonding_time`                     |
| -------------------- | ------------------------------------ | ------------------------------------ |
| Type                 | uint16                               | string                               |
| Higher               | More active validators               | Longer waiting period for unbonding  |
| Lower                | Fewer active validators              | Shorter waiting period for unbonding |
| Constraints          | Value has to be less or equal to `1` | Positive value in seconds            |
| Sample configuration | `100` (maximum 100 active validator) | `"1814400s"` (3 weeks)               |
