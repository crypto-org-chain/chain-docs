# Transaction Privacy

## Motivation

Payment data need confidentiality for many reasons, including compliance with different privacy regulations, fungibility properties etc. While confidentiality can be achieved through different means, Crypto.com Chain leverages symmetric encryption in Trusted Execution Environments for the following benefits:

- Performance due to a low overhead
- Auditability
- Flexibility in terms of what computation can be done and how the data schema can evolve

## Payloads

Depending on the transaction type (see [transaction types](https://cryptocom-chain-documentation.readthedocs.io/en/latest/transaction.html)), some of its parts (transaction data, witness or both) need to be obfuscated. In that case, the broadcasted transaction binary payload includes:

- Transaction ID (if the transaction data is obfuscated)
- List of transaction inputs (if relevant) and the number of outputs (if relevant)
- Symmetric encryption-related metadata (key generation, nonce / initialization vector)
- Obfuscated payload

The encryption inside enclaves (see [enclave architecture](https://cryptocom-chain-documentation.readthedocs.io/en/latest/enclave-architecture.html)) is done using “authenticated encryption with associated data” (AEAD) scheme – the initial planned algorithm is [AEAD_AES_128_GCM_SIV](https://tools.ietf.org/html/rfc8452).

## Periodic key generation

The active set of validators is involved in periodic generation of new keys that are then used by all full node enclaves on the network – the key distribution is done over mutually attested secure channels (see [enclave architecture](https://cryptocom-chain-documentation.readthedocs.io/en/latest/enclave-architecture.html)).
