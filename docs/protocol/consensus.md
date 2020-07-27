# Consensus

Crypto.com Chain prototype uses Tendermint Core as its consensus algorithm. It utilizes the [ABCI](https://docs.tendermint.com/master/spec/abci/) (Application BlockChain Interface), which allows applications written in different languages to interact with the blockchain.

This interface allows a "plugging" custom applications with Tendermint. Specifically, if the application is written in Go, it can be linked directly with the chain; otherwise, a connection can be established via 3 TCP or Unix sockets. The details of this interface can be found [here](https://docs.tendermint.com/master/spec/abci/abci.html#overview).

As Crypto.com Chain Core code is written in Rust, we utilize (and aim to continually improve) the [rust-abci](https://github.com/tendermint/rust-abci/) library.

For the overall architecture of Tendermint Core consensus engine with the ABCI, please refer to this [infographic](https://docs.tendermint.com/master/assets/img/tm-transaction-flow.258ca020.png) and this [guide](https://docs.tendermint.com/master/app-dev/app-architecture.html).

## Client: Interacting with the blockchain

To query a blockchain or submit a transaction, one can use the [Tendermint RPC](https://docs.tendermint.com/master/tendermint-core/rpc.html) for that. Details of this RPC and its mechanism can be found in [here](https://docs.tendermint.com/master/rpc/).

Currently, it supports 3 methods:

1. URI over HTTP
1. JSON-RPC over HTTP
1. JSON-RPC over WebSockets

The RPC HTTP server is executed on every full node. The RPC methods are equivalent, but WebSockets allow realtime subscription to different events.

:::tip NOTE
Tendermint RPC is for internal use only, as it doesn’t support rate-limiting, authentication etc., so it shouldn’t be directly exposed to the internet.
:::

At this moment, it’s also recommended to use `tendermint lite` as a local proxy for the Chain client libraries when connecting to remote full nodes.

The Chain client interaction with Tendermint is currently done via a custom `client-rpc` crate.

The main RPC methods are used `broadcast_tx_(a)sync` and `abci_query`.

| broadcast*tx*(a)sync |
| -------------------- |


This method takes “tx” parameter which is application-specific binary data (see [transaction serialization](./serialization.md) for details on Chain binary format). The transaction binary payload is either hex-encoded (when called with the URI method) or base64-encoded (when called with JSON-RPC).

| abci_query |
| ---------- |


Currently the main usage is that given a path “account”, one can query the current “staked state” of some address (which is provided as the “data” field).

## Application hash

The **“application hash”** is a compact representation of the overall ABCI application state. In Tendermint, ABCI applications are expected to be deterministic. Therefore, given the same input (block/consensus events + transaction data), one can expect that the applications will update its state in the same way. Eventually, we can compare the hash value of its application state with the others and verify the consistency.

In Crypto.com Chain, the application hash is a [Blake3](https://github.com/BLAKE3-team/BLAKE3) hash of several components:

- Root of a Merkle tree of a valid transaction in a given block;
- Root of a sparse Merkle trie of staked states (see [accounting details](./transaction-accounting-model.md));
- Binary serialized state of rewards pool (see [serialization](./serialization.md) for details on Chain binary format and [genesis](./genesis.md) for details on “state”);
- Serialised [network parameters](./network-parameters.md).

## Conventions

As [genesis](./genesis.md) information is taken from the Ethereum network, the same address format is used (i.e. hexadecimal encoding of 20-bytes from a keccak-256 hash of a secp256k1 public key).

For Tendermint data, its conventions must be followed:

- _Validator Key pair_: base64-encoded Ed25519 key-pair;
- _Addresses_: the first 20 bytes of SHA256 of the raw public key bytes.

For Crypto.com Chain, it has the following conventions:

- [Chain-ID](./chain-id-and-network-id.md#chain-id): this is a string in Tendermint’s genesis.json. In Crypto.com Chain, it should end with two hex digits;
- [Network-ID](./chain-id-and-network-id.md#network-id): a single byte determined by the two last hex digits of Chain-ID. It is included in metadata of every transaction to specify the network;
- Transactions, addresses etc.: Please refer to transaction [binary serialization](./serialization.md), [accounting model](./transaction-accounting-model.md), [addresses / witness](./signature-schemes.md) and [format / types](./transaction.md).
