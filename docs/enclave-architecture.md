# Enclave Architecture

The primary initial use of Trusted Execution Environments (TEE) is for enforcing payment data confidentiality (see [transaction privacy](transaction-privacy.md)), while maintaining flexibility and auditability. Other use cases may be developed in the long term.

## Technology
The initial version is based on Intel SGX, but in the long-term, it would be desirable to support other TEE technology stacks, such as Arm TrustZone or RISC-V Keystone.

## Transaction validation
The validation of transactions that involve payment obfuscated transaction outputs (see [transaction types](transaction.md) and [accounting model](account-utxo.md)) need to happen inside enclaves.

For the ease of development, the transaction validation happens in a separate process. The Chain ABCI application process then communicates with this process using a simple request-reply protocol over a 0MQ socket:

```
+-----------+ REQ +--------+
|Chain ABCI +-----+ TX val.|
|           | REP | enc.   |
+-----------+     +--------+
```

In production deployment, both of these processes should be on the same machine and hence use IPC as the underlying transport for the 0MQ messages.
In development, other transport mechanisms (e.g. TCP) can be used and processes could be in different locations, for example:

* Chain ABCI is on executed on the developer laptop (any operating system), and the transaction validation enclave runs inside a Docker container (using the software-simulation mode).
* Chain ABCI is on executed on the developer laptop (any operating system), and the transaction validation enclave runs on a remote Linux machine (using the hardware mode).

### Data sealing
As previous transaction data is needed for transaction validation, it needs to be persisted locally.
The enclave uses the process of "data sealing" for this purposes. To make the data accessible for future upgrades and other
enclaves, it should be sealed with MRSIGNER-derived keys. 

## Transaction data bootstrapping
As old payment data becomes inaccessible due to the periodic key rotation (see [transaction privacy](transaction-privacy.md)),
newly joined nodes (or nodes that went offline for some time) would need a way to bootstrap the old transaction data
by connecting to enclaves of remote nodes and requesting transaction data that the other nodes have locally sealed.

### Lite client inside enclaves
Each enclave should internally run a lite client that would keep track of the validator set, so that it can safely store the latest "app hash" (see [consensus](consensus.md)).

### Mutual attestation
The core of the bootstrapping process lies in establishing a secure channel between two enclaves -- e.g. TLS, see [Integrating Remote Attestation with Transport Layer Security](https://arxiv.org/pdf/1801.05863.pdf).
During the connection establishment, both parties present attestation reports that they cross-verify.
This will initially utilize the Intel Attestation Service (IAS) where each full node is expected to run an IAS proxy that contains the required credentials (Key and SPID) that can be obtained on [Intel portal](https://api.portal.trustedservices.intel.com/EPID-attestation).

In the future, the support for Data Center Attestation Primitives (DCAP) will be developed, so that each full node operator can run its own attestation service (rather than relying on IAS).

Beyond the mutual attestation, enclaves should perform additional checks against the stored app hash, e.g. if the staked state-associated with the node's enclave is valid (or check the whitelist entry in the case of higher tier nodes).

## Transaction querying
As mentioned in [client flows](client-flow.md), clients may not know their transaction data and would need to submit blind queries requesting data of some payment transactions.

For this purpose, there needs to be an enclave that can unseal the previously stored transaction data, verify the client query and return the matching transactions.

This process would again require establishing a secure connection channel between the client and the enclave (if it is remote) as in the transaction data bootstrapping -- the difference is that it may only be one-side attested, as the client may not have access to the enclave architecture.

## Transaction creation
When the client wishes to broadcast a payment transaction, they first need to obfuscate its content which can only be done within enclaves (that have been up-to-date with the network).

For this purpose, there needs to be an enclave that can access the current random symmetric key obtained from other enclaves (similarly to the transaction validation enclave that needs it for decryption), so that it can encrypt the payment transaction content.

## Enclave breaches
If enclaves were breached, it would lead to reduced confidentiality -- there would still be a level of confidentiality, as the multi-signature scheme in Chain records only limited information in the blockchain (see [signature schemes](signature-schemes.md)).
It would only affect transactions that were obfuscated with the breached key, as the key would be periodically rotated (see [transaction privacy](transaction-privacy.md)).

Note that the breach wouldn't lead to the loss of ledger integrity, as that is preserved by the [consensus algorithm](consensus.md).