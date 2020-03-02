# Validator Punishments

This part describes functionality that aims to dis-incentivize network-observable actions, such as faulty validations,
of participants with values at stake by penalizing/slashing and jailing them. The penalties may include losing some
amount of their stake (surrendered to the rewards pool), losing their ability to perform the network functionality for a
period of time, collect rewards etc.

## Network Parameters

Below are all the network parameters used to configure the behavior of validator punishments. Details of all these
parameters and their effect on behavior of validator punishments is discussed later in this document.

1. `UNBONDING_PERIOD`: Unbonding period will be used as jailing period (time for which an account is jailed after it
   gets punished) and also as slashing period (time to wait before slashing funds from an account). This should be
   greater than or equal to `MAX_EVIDENCE_AGE` in tendermint.
1. `BLOCK_SIGNING_WINDOW`: Number of blocks for which the moving average is calculated for uptime tracking.
1. `MISSED_BLOCK_THRESHOLD`: Maximum number of blocks with faulty/missed validations allowed for an account in last
   `BLOCK_SIGNING_WINDOW` blocks before it gets jailed.
1. `LIVENESS_SLASH_PERCENT`: Percentage of funds (bonded + unbonded) slashed when a validator is non-live.
1. `BYZANTINE_SLASH_PERCENT`: Percentage of funds (bonded + unbonded) slashed when validator makes a byzantine fault.

:::warning Important:
During slashing, funds are slashed from both, bonded and unbonded, amounts.
:::

## Overview

Punishments for a validator are triggered when they either make a *byzantine fault* or become *non-live*: 

- Liveness Faults (Low availability)

    A validator is said to be **non-live** when they fail to sign at least `MISSED_BLOCK_THRESHOLD` blocks in
    last `BLOCK_SIGNING_WINDOW` blocks successfully. `BLOCK_SIGNING_WINDOW` and `MISSED_BLOCK_THRESHOLD` are network
    parameters and can be configured during genesis (currently, changing these network parameters at runtime is not
    supported). Tendermint passes signing information to ABCI application as `last_commit_info` in `BeginBlock` request.

:::tip Example:
For example, if `BLOCK_SIGNING_WINDOW` is `100` blocks and `MISSED_BLOCK_THRESHOLD` is `50` blocks, a validator will
be marked as **non-live** if they fail to successfully sign at least `50` blocks in last `100` blocks.
:::

- Byzantine Faults (Double signing)

    A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and
    round. Tendermint has mechanisms to publish evidence of validators that signed conflicting votes (it passes this 
    information to ABCI application in `BeginBlock` request), so they can be punished by the application.

:::tip Implementation note:
Tendermint passes `Evidence` of a byzantine validator in `BeginBlock` request. Before jailing any account because of
byzantine fault, that evidence should be verified. Also, it should be checked that evidence provided by tendermint is
not older than `MAX_EVIDENCE_AGE` in tendermint.
:::

### Inactivity Punishment

When a validator fails to successfully sign `MISSED_BLOCK_THRESHOLD` blocks in last `BLOCK_SIGNING_WINDOW` blocks, it is
immediately punished by deducting funds from their bonded and unbonded amount and removing them from active validator
set if the resulting bonded amount is still greater than minimum required stake. The funds to be deducted are calculated
based on `LIVENESS_SLASH_PERCENT`.

:::tip Note:
The validator is not **jailed** in this scenario. They can immediately send a `NodeJoinTx` to join back as a validator.
:::

### Jailing

A validator is jailed when they make a byzantine fault, e.g., they sign messages at same height and round.

When a validator gets jailed, they cannot perform any operations relating to their account, for example,
`withdraw_stake`, `deposit_stake`, `unbond_stake`, etc., until they are un-jailed. Also, a validator cannot be un-jailed
before `account.jailed_until` which is set to `block_time + UNBONDING_PERIOD` while jailing. `UNBONDING_PERIOD` is a
network parameter which can be configured during genesis.

:::warning Important:
`block_time` used in calculating `account.jailed_until` should be the time of the block at which the fault is detected
(i.e., `current_block_height`).
:::

:::warning Important:
When a validator is jailed because of a byzantine fault, their validator public key is added to a list of permanently
banned validators and cannot re-join the network as a validator with same public key.
:::

#### Un-jailing

When a jailed validator wishes to resume normal operations (after `account.jailed_until` has passed), they can create
`UnjailTx` which marks them as un-jailed. After successful un-jailing, validators can submit a `UnbondTx` and
`WithdrawTx` to withdraw their funds.

### Slashing

Validators are responsible for signing or proposing block at each consensus round. It is important that they maintain
excellent availability and network connectivity to perform these tasks. A penalty performed by the slashing module
should be imposed on validators' misbehavior reinforce this. Similar to jailing, a validator is slashed if they make a
byzantine fault. If a validator makes multiple faults in `UNBONDING_PERIOD`, they'll only be slashed once for the worst
fault in that period. The funds to be deducted are calculated based on `BYZANTINE_SLASH_PERCENT`.

:::warning Important:
A validator should not be slashed more than once within `UNBONDING_PERIOD`. If a validator commits multiple faults
within that time period, it should only be slashed once (for simplicity, we'll only slash the validator for the first
evidence that we get from tendermint and ignore other evidences until `UNBONDING_PERIOD`).
:::

:::tip Implementation note:
To enforce that we only slash an account only once within `UNBONDING_PERIOD`, we can just check if an account is
not jailed when we receive evidence of misbehavior from tendermint.
:::
