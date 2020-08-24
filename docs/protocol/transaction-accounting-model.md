# Transaction Accounting Model

Crypto.com Chain uses both Unspent Transaction Outputs (UTXOs) and (a form of) accounts for its accounting model, inspired by the work on [chimeric ledgers](https://eprint.iacr.org/2018/262.pdf).

## Motivation

The native token used in Crypto.com Chain serves two main purposes:

1. **Payments/value transfers transactions**, which data confidentiality is desired, and
1. **Network operation**, such as staking related transactions and events that are designed to be publicly visible.

These two realms have different rules and properties. These differences are highlighted in the table below:

|                                      | Transaction Volume | Visibility                                             | State Changes                                                         | Value Transfer Rules                                                                                                                         |
| ------------------------------------ | ------------------ | ------------------------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Payments**                         | High               | Minimal / confidentiality / data protection is desired | UTXO set is the only “state”: changes only by transactions            | **Flexible**: new address per invoice, ad-hoc n-of-m address formations (e.g. for escrows); encoding extra information for atomic swaps etc. |
| **Network operation** (staking etc.) | Low                | Maximal transparency is desired                        | Both by transactions and network events (e.g. validator misbehaviour) | **Self-contained**: same account changes (reward payouts, unbonding…)                                                                        |

## Hybrid accounting model

To facilitate this, Crypto.com Chain uses a hybrid accounting system which combines the advantages from both **Unspent Transaction Outputs (UTXOs)** and **Account-based model** for its accounting model, where

- UTXOs is used for payments / value transfers, and
- Account-model is used for network operations.

Specifically, there are two different address types, namely the **Transfer Address** and **Staking Address** that handle different kinds of accounting models and transaction:

- **Transfer Address** -
  To represent the underlying byte array in a textual form, [Bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) is used. The convention for the human-readable prefix is the following:

  - `cro`: mainnet payment;
  - `tcro`: testnet payment;
  - `dcro`: local devnet/regtest payment.

  The following is a sample of a mainnet, transfer address:

  ```
  cro1h2ukeq63nmcw0l5y7jrkjasfcsmwds87976zqe5levzs068nejjsp4lfdv
  ```

- **Staking Address** -
  For backwards-compatibility with the existing [contract on Ethereum](https://etherscan.io/address/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b), the _Staking Addresses_ would preserve the hexadecimal textual representation. In which, it follows the format of the 20 bytes Ethereum account address in hexadecimal encoding. The following is a sample of a staking address:

  ```
  0x410afb0ccf51aefd111bceafb6c298acd4decaf6
  ```

Different types of transactions and how they relate to these addresses are [described in transactions](./transaction.md).

### Transfer address: Balances

For example, by using [client-cli](../wallets/client-cli.md#balance-check-your-transferable-balance), one can check the balance of a wallet, in which, is it the total sum of the transferable balance of the transfer addresses belongs to the wallet:

```bash
##### EXAMPLE: Balance of a wallet #####
+-----------+----------------------+
| Total     | 8000000.00000000     |
+-----------+----------------------+
| Pending   |       0.00000000     |
+-----------+----------------------+
| Available | 8000000.00000000     |
+-----------+----------------------+
```

### Staking address: Staked state

The current account usage is self-contained limited. Each account (“staked state”) contains two balances:

- **Bonded amount**,
- **Unbonded amount**,

and other staking-related information.

For example, by using [client-cli](../wallets/client-cli.md#staking-operations), one can check the staking stake of a _Staking_ type address and obtain the following:

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

- The `Unbonded` balance can be withdrawn (into transaction outputs) after `Unbonded From` time if the account was not jailed / slashed (see [punishment](./reward-and-punishments.md#validator-punishments)).

- For slashing related information:
  - `Jailed Until` is the time until which current account is jailed;
  - `Punishment Type` represents the type of [punishment](./reward-and-punishments.md#validator-punishments) that will be imposed on the account (if any);
  - `Slash Amount` is the amount of penalty.

#### Staked State Storage

The account state is currently stored in a sparse Merkle trie structure (currently MerkleBIT backed by RocksDB, but it may be migrated to a more robust / better understood structure, e.g. a Patricia Merkle trie or IAVL+).
