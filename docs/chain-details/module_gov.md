### `gov` module

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

After the `voting_period` has passed, there are several scenarios that a proposal will consider to be fail, for example, if

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
