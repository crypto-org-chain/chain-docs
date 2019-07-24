Transaction accounting model
============================

Crypto.com Chain uses both Unspent Transaction Outputs (UTXOs) and (a
form of) accounts for its accounting model, inspired by the work on
`chimeric ledgers`_.

Motivation
----------

The native token used in Crypto.com Chain serves two main purposes:

1. Payments

2. Network operation (staking etc.)

These two realms have different rules and properties. These differences
are highlighted in the table below:

================================ ================== ====================================================== ===================================================================================== ========================================================================================================================================
\                                Transaction Volume Visibility                                             State Changes                                                                         Value Transfer Rules
================================ ================== ====================================================== ===================================================================================== ========================================================================================================================================
Payments                         High               Minimal / confidentiality / data protection is desired UTXO set is the only "state": changes only by transactions                            Flexible: new address per invoice, ad-hoc n-of-m address formations (e.g. for escrows); encoding extra information for atomic swaps etc.
Network operation (staking etc.) Low                Maximal transparency is desired                        Both by transactions and network events (e.g. a validator not following the protocol) Self-contained: same account changes (reward payouts, unbonding...)
================================ ================== ====================================================== ===================================================================================== ========================================================================================================================================

UTXO+Accounts model
-------------------

For this reason, we chose the mixed model where:

-  UTXO is used for payments / value transfers

-  Account-model is used for network operations ("staked state")

Different types of transactions and how they relate to these accounting
are `described in transactions`_.

Staked State
~~~~~~~~~~~~

The current account usage is self-contained limited. Each account
("staked state") contains two balances:

-  bonded amount

-  unbonded amount

The bonded amount is the amount used to check against minimal staking
requirements and used to calculate the Tendermint validator voting power
(in case of council nodes).

As it may take time for the network evidence of malicious activity (e.g.
double signing) to appear, the stake cannot be withdrawn immediately and
is first moved to the "unbonded" balance.

The unbonded balance can be withdrawn (into transaction outputs) after
"unbonded_from" time if the account was not jailed / slashed (see
`staking`_).

Staked State Storage
~~~~~~~~~~~~~~~~~~~~

The account state is currently stored in a sparse Merkle trie structure
(currently MerkleBIT backed by RocksDB, but it may be migrated
to a more robust / better understood structure,
e.g. a Patricia Merkle trie or IAVL+).

.. _chimeric ledgers: https://eprint.iacr.org/2018/262.pdf
.. _described in transactions: transaction.md
.. _staking: staking.md
