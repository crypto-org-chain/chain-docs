# module\_slashing

#### `slashing` module

#### Introduction

Validators are responsible for signing or proposing block at each consensus round. A penalty should be imposed on validators' misbehavior to reinforce this.

Specifically, `slashing` functionality that aims to dis-incentivize network-observable actions, such as faulty validations. The penalties may include losing some amount of their stake, losing their ability to perform the network functionality for a period of time, collect rewards etc.

#### Overview

**Network parameters**

Below are all the network parameters used to configure the behavior of validator punishments. Details of all these parameters and their effect on behavior of validator punishments is discussed later in this document.

* `signed_blocks_window`: Number of blocks for which the liveness is calculated for uptime tracking;
* `min_signed_per_window`: Maximum percentage of blocks with faulty/missed validations allowed for an account in last; `signed_blocks_window` blocks before it gets deactivated;
* `downtime_jail_duration`: Duration for [jailing](module\_slashing.md#jailing);
* `slash_fraction_double_sign`: Percentage of funds being slashed when validator makes a byzantine fault; and
* `slash_fraction_downtime`: Percentage of funds being slashed when a validator is non-live.

**Slashing mechanism**

Punishments for a validator are triggered when they either make a _byzantine fault_ or become _non-live_:

*   Liveness Faults (Low availability)

    A validator is said to be **non-live** when they fail to sign at least `min_signed_per_window` blocks (in percentage) in the last `signed_blocks_window` blocks successfully. `signed_blocks_window` and `min_signed_per_window` are network parameters and can be configured during genesis and can be updated during runtime by the governance module.

:::tip Example: For example, if `block_signing_window` is `2000` blocks and `min_signed_per_window` is `0.5`, a validator will be marked as **non-live** and jailed if they fail to successfully sign at least `2000*0.5=1000` blocks in last `2000` blocks. :::

*   Byzantine Faults

    A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and round. Tendermint has mechanisms to publish evidence of validators that signed conflicting votes so they can be punished by the slashing module. For example:

    * Validator who votes for two different blocks within a single round (_"Equivocation validator"_/ _"Double signing"_);
    * Validator who signs commit messages for arbitrary application state ( _"Lunatic validator"_).

**Remark**: The evidence of a set of validators attempting to mislead a light client can also be detected and captured. However, even the [Amnesia attack](https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-056-light-client-amnesia-attacks.md#amnesia-attack) can be detected, punishment can not be applied at this stage, as we can not deduce the malicious validators.

:::tip Implementation note: Tendermint passes `Evidence` of a byzantine validator in `BeginBlock` request. Before jailing any account due to byzantine fault, that evidence should be verified. Also, it should be checked that evidence provided by tendermint is not older than `max_age` in tendermint. :::

#### Inactivity Slashing

It is important that the validators maintain excellent availability and network connectivity to perform their tasks. A penalty should be imposed on validators' misbehavior to reinforce this.

When a validator fails to successfully sign `missed_block_threshold` blocks in last `block_signing_window` blocks, it is immediately jailed and punished by deducting funds from their bonded and unbonded amount and removing them from active validator set. The funds to be deducted are calculated based on `slash_fraction_downtime`. Kindly refer to this [link](https://docs.cosmos.network/v0.40/modules/slashing/04\_begin\_block.html) on the logic of the liveness tracking.

#### Jailing

A validator is jailed when they make liveness or Byzantine fault, when a validator is jailed, it will no longer be considered as an active validator until they are un-jailed. Furthermore, it cannot be un-jailed before `downtime_jail_duration`. This `downtime_jail_duration` is a network parameter which can be configured during genesis.

:::warning Important: When a validator is jailed because of a byzantine fault, their validator public key is added to a list of permanently banned validators and cannot re-join the network as a validator with the same public key, see [staking tombstone](https://docs.cosmos.network/master/modules/slashing/07\_tombstone.html) :::

**Un-jailing**

When a jailed validator wishes to resume normal operations (after `downtime_jail_duration` has passed), they can create an`unjail` transaction which marks them as un-jailed. Validator will then rejoin the validator set once it has been successful un-jailed.

#### Slashing for Byzantine Fault

When there is byzantine fault detected, they are immediately slashed other than jailed. The funds to be deducted are calculated based on `slash_fraction_double_sign`. Furthermore, validator who commit this double-signing fault will also be put into the "tombstone state", which means it will be blacklisted and jailed forever.

#### Transactions and Queries

#### Transactions

**`tx slashing unjail` - Unjailing a validator**

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

#### Queries

**`query slashing params` - Query the current slashing parameters**

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

#### Appendix

**`slashing` module: Network Parameters and configuration**

The following tables show overall effects on different configurations of the slashing related network parameters:

|                      | `signed_blocks_window`                      | `min_signed_per_window`         | `downtime_jail_duration`           |
| -------------------- | ------------------------------------------- | ------------------------------- | ---------------------------------- |
| Type                 | string (int64)                              | string (dec)                    | string (int64)                     |
| Higher               | Larger window for calculating the downtime  | Higher availability is required | Longer jailing duration            |
| Lower                | Smaller window for calculating the downtime | Lower availability is required  | Longer jailing duration            |
| Constraints          | Value has to be a positive integer          | Value has to be positive        | Value has to be a positive integer |
| Sample configuration | `2000` (2000 blocks)                        | `0.5` (50%)                     | `3600s` (1 hour)                   |



|                      | `slash_fraction_double_sign`         | `slash_fraction_downtime`            |
| -------------------- | ------------------------------------ | ------------------------------------ |
| Type                 | string (dec)                         | string (dec)                         |
| Higher               | Heavier penalty on byzantine faults  | Heavier penalty on liveness faults   |
| Lower                | Lighter penalty on byzantine faults  | Lighter penalty on liveness faults   |
| Constraints          | Value has to be less or equal to `1` | Value has to be less or equal to `1` |
| Sample configuration | `0.001` (0.1%)                       | `0.05` (5%)                          |
