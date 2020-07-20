# Client Flow

## Block-level filtering

The full node “tags” each block with a probabilistic filter (tagging is done using the [Events](https://docs.tendermint.com/master/spec/abci/abci.html#events) in Tendermint). This filter is then used by the light client code to determine which blocks are of any interest, requests these blocks and processes them. This current mechanism is similar to BIP 157.

Currently, the used filter is the Bloom filter used in Ethereum defined with the following parameters: m = 2048 (bits; keccak-256 hash function), k = 3 (yellowpaper page 5)

The full node inserts the following data into the filter at the moment:

1. “view keys” (secp256k1 public keys allowed to view the content) in the case of transactions producing UTXOs (see [transaction types](./transaction) and [transaction privacy mechanism](./transaction-privacy) for more details).
2. Staked state addresses in the case of transactions manipulating accounts (see [accounting details](./transaction-accounting-model)).

## Client knows the transaction data

Each block header includes an application hash (“APP_HASH”, see [consensus](./consensus) for details). As a part of it is a root of a Merkle tree of valid transactions, a client can check whether its known transaction was included in a block:

1. Get the block’s application hash / header information.
2. Compute the transaction ID from transaction data (see [transaction](./transaction)).
3. Check a Merkle inclusion proof where the transaction ID is one of the leaves, and a part of the application hash is the root.

## Client doesn’t know the transaction data

If the client doesn’t know transaction data, it can collect valid transaction identifiers from blocks that matched its data using the block-level filter. If the transaction data was transparent (staked state operations), the client can decode transaction directly by requesting the full block data. If the transaction data was obfuscated (payments), the client needs to contact an enclave and prove they can access transaction data using view key signatures (see [transaction privacy](./transaction-privacy) and [enclave architecture](./enclave-architecture) for more details).

Clients are responsible for their own confidential data treatment – the use of view keys (whether reused or not), requesting transaction data (e.g. from multiple enclaves when not the client isn’t running their own full node) etc.

## Payment transaction submission

When the client wishes to submit a payment transaction (UTXO-based), they will construct a plain signed transaction and submit it to one of the full node’s enclaves over a secure channel (see [enclave architecture](./enclave-architecture)).
