# Transaction Accounting Model

Crypto.com Chain uses both Unspent Transaction Outputs (UTXOs) and (a form of) accounts for its accounting model, inspired by the work on [chimeric ledgers](https://eprint.iacr.org/2018/262.pdf).

## Motivation

The native token used in Crypto.com Chain serves two main purposes:

1. Payments
2. Network operation (staking etc.)

These two realms have different rules and properties. These differences are highlighted in the table below:

|                                  | Transaction Volume | Visibility                                             | State Changes                                                                         | Value Transfer Rules                                                                                                                     |
| -------------------------------- | ------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Payments                         | High               | Minimal / confidentiality / data protection is desired | UTXO set is the only “state”: changes only by transactions                            | Flexible: new address per invoice, ad-hoc n-of-m address formations (e.g. for escrows); encoding extra information for atomic swaps etc. |
| Network operation (staking etc.) | Low                | Maximal transparency is desired                        | Both by transactions and network events (e.g. a validator not following the protocol) | Self-contained: same account changes (reward payouts, unbonding…)                                                                        |

## UTXO+Accounts model

For this reason, we chose the mixed model where:

- UTXO is used for payments / value transfers
- Account-model is used for network operations (“staked state”)

Different types of transactions and how they relate to these accounting are [described in transactions](./transaction).

### Staked state

The current account usage is self-contained limited. Each account (“staked state”) contains two balances:

- bonded amount
- unbonded amount

and its slashing related information.

For example, by using [clinent-cli](../wallets/client-cli.md#staking-operations), one can check the staking stake of a _Staking_ type address and obtain the following:

```bash
##### EXAMPLE: Staking state #####
+-----------------+----------------------------+
| Nonce           |                          2 |
+-----------------+----------------------------+
| Bonded          |           2000000.00000000 |
+-----------------+----------------------------+
| Unbonded        |              3000.00000000 |
+-----------------+----------------------------+
| Unbonded From   | 2020-02-02 08:28:16 +08:00 |
+-----------------+----------------------------+
| Jailed Until    |                 Not jailed |
+-----------------+----------------------------+
| Punishment Type |               Not punished |
+-----------------+----------------------------+
| Slash Amount    |               Not punished |
+-----------------+----------------------------+
```

- The `Nonce` is the number of transactions that have the witness of the staking address.

- The `Bonded` amount is the amount used to check against minimal staking requirements and used to calculate the Tendermint validator voting power (in case of council nodes).

  As it may take time for the network evidence of malicious activity (e.g. double signing) to appear, the stake cannot be withdrawn immediately and is first moved to the “unbonded” balance.

- The `Unbonded` balance can be withdrawn (into transaction outputs) after `Unbonded From` time if the account was not jailed / slashed (see [staking](./staking)).

- For slashing related information:
  - `Jailed Until` is the time until which current account is jailed;
  - `Punishment Type` represents the type of [punishment](./staking.md#punishments) that will be imposed on the account (if any);
  - `Slash Amount` is the amount of penalty.

### Staked State Storage

The account state is currently stored in a sparse Merkle trie structure (currently MerkleBIT backed by RocksDB, but it may be migrated to a more robust / better understood structure, e.g. a Patricia Merkle trie or IAVL+).
