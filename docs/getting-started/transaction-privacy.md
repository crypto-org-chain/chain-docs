# Transaction Privacy

## Motivation

Payment data need confidentiality for many reasons, including compliance with different privacy regulations, fungibility properties etc. While confidentiality can be achieved through different means, Crypto.com Chain leverages symmetric encryption in _Trusted Execution Environments_ (**TEE**) for the following benefits:

- _Flexibility_ in terms of what computation can be done and how the data schema can evolve.
  As requirements for Crypto.com Chain change, it's important that the existing code and data remain
  forwards-compatible. For example, one may extend the transaction format to support new signature schemes.

- _Auditability with potentially fine-grained access control mechanisms_:
  in the initial implementation, it's a separation of the permission to spend and the permission
  to view transaction data, but it could be more flexible and fine-grained (e.g.
  permission to view certain parts of transaction data).

- _Performance due to a low overhead_: unlike, for example, fully homomorphic encryption in software,
  the overhead of executing computation in TEE should be minimal
  and the main cryptographic primitive is symmetric encryption which can be accelerated
  by dedicated CPU instructions, such as AES-NI.

## Payloads

Depending on the transaction type (see [transaction types](./transaction)), some of its parts (transaction data, witness or both) need to be obfuscated. In that case, the broadcasted transaction binary payload includes:

- Transaction ID (if the transaction data is obfuscated)
- List of transaction inputs (if relevant) and the number of outputs (if relevant)
- Symmetric encryption-related metadata (key generation, nonce / initialization vector)
- Obfuscated payload

The encryption inside enclaves (see [enclave architecture](./enclave-architecture)) is done using “authenticated encryption with associated data” (AEAD) scheme – the initial planned algorithm is [AEAD_AES_128_GCM_SIV](https://tools.ietf.org/html/rfc8452).

## Periodic key generation

The active set of validators is involved in periodic generation of new keys that are then used by all full node enclaves on the network – the key distribution is done over mutually attested secure channels (see [enclave architecture](./enclave-architecture)).
