# Consensus

Crypto.com Chain prototype uses Tendermint Core as its consensus algorithm.

It utilizes the ABCI (Application BlockChain Interface).

This allows "plugging" custom applications with Tendermint.

If the application is written in Go, it can be linked directly; if it's written in other languages, it communicates over 3 TCP or Unix sockets.

The details of this interface can be found on: [tendermint.com/docs/spec/abci/abci.html](https://tendermint.com/docs/spec/abci/abci.html#overview)

As Crypto.com Chain Core code is written in Rust, we utilize (and aim to continually improve) the [rust-abci](https://github.com/tendermint/rust-abci/) library.

What is executed when by the consensus engine and by the ABCI application can be seen in [this diagram](https://blog.cosmos.network/tendermint-in-a-nutshell-39d9f7f66ad7).


## Client: Interacting with the blockchain

To query a blockchain or submit a transaction, one can use the Tendermint RPC for that.

The details of the RPC mechanism can be found on: [tendermint.com/rpc/](https://tendermint.com/rpc/#introduction)

Currently, it supports 3 methods:

1. URI over HTTP
2. JSON-RPC over HTTP
3. JSON-RPC over WebSockets

The RPC HTTP server is executed on every full node. The RPC methods are equivalent, but WebSockets allow realtime subscription to different events.

Note that Tendermint RPC is for internal use only, as it doesn’t support rate-limiting, authentication etc., so it shouldn’t be directly exposed to the internet.

At this moment, it’s also recommended to use `tendermint lite` as a local proxy for the Chain client libraries when connecting to remote full nodes.

The Chain client interaction with Tendermint is currently done via a custom `client-rpc` crate.

The main RPC methods are used `broadcast_tx_(a)sync` and `abci_query`.

|broadcast_tx_(a)sync|
|--------------------|

This method takes “tx” parameter which is application-specific binary data (see [transaction serialization](https://cryptocom-chain-documentation.readthedocs.io/en/latest/serialization.html) for details on Chain binary format). The transaction binary payload is either hex-encoded (when called with the URI method) or base64-encoded (when called with JSON-RPC).

|abci_query|
|----------|

Currently the main usage is that given a path “account”, one can query the current “staked state” of some address (which is provided as the “data” field).

## APP HASH

Tendermint expects the ABCI application to be deterministic and consistency is checked that each instance, given the same input (block/consensus events + transaction data), updates its state in the same way and calculates the same “application hash” which is a compact representation of the overall ABCI application state.

In Chain, it is a Blake2s hash of several components:

- root of a Merkle tree of a valid transactions in a given block
- root of a sparse Merkle trie of staked states (see [accounting details](https://cryptocom-chain-documentation.readthedocs.io/en/latest/account-utxo.html))
- binary serialized state of rewards pool (see [serialization](https://cryptocom-chain-documentation.readthedocs.io/en/latest/serialization.html) for details on Chain binary format and [genesis](https://cryptocom-chain-documentation.readthedocs.io/en/latest/genesis.html) for details on “state”)

## Conventions

As [genesis](https://cryptocom-chain-documentation.readthedocs.io/en/latest/genesis.html) information is taken from the Ethereum network, the same address format is used (i.e. hexadecimal encoding of 20-bytes from a keccak-256 hash of a secp256k1 public key).

For Tendermint data, its conventions must be followed (e.g. validator keys are Ed25519, base64-encoded … “addresses” are the first 20 bytes of SHA256 of the raw public key bytes).

For Crypto.com Chain, it has the following conventions:

- Chain-ID: this is a string in Tendermint’s genesis.json. In Crypto.com Chain, it should end with two hex digits.
- Network-ID: a single byte determined by the two last hex digits of Chain-ID. It is included in metadata of every transaction
- Transactions, addresses etc.: see transaction [binary serialization](https://cryptocom-chain-documentation.readthedocs.io/en/latest/serialization.html), [accounting model](https://cryptocom-chain-documentation.readthedocs.io/en/latest/account-utxo.html), [addresses / witness](https://cryptocom-chain-documentation.readthedocs.io/en/latest/signature-schemes.html) and [format / types](https://cryptocom-chain-documentation.readthedocs.io/en/latest/transaction.html)
