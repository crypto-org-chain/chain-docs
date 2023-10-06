# Chain ID, Address Format and Signatures

## Chain ID

Crypto.org Chain has different Chain ID to distinguish between _devnet_, _testnet_ and _mainnet_. When running the Crypto.org Chain in your local environment, you will also need to decide your own Chain ID.

For example, our testnet Chain ID is `testnet-croeseid-4`.

## Address prefix

[BIP-0173](https://github.com/satoshilabs/slips/blob/master/slip-0173.md) defines a new format for segregated witness output addresses that contains a human-readable part that identifies the coin type. Crypto.org Chain has different address prefixes for its corresponding network types, these prefixes are:

| Mainnet | Testnet | Devnet |
| ------- | ------- | ------ |
| `cro`   | `tcro`  | `dcro` |

Crypto.org Chain uses the Bech32 address format wherever users must handle binary data. Bech32 encoding provides robust integrity checks on data and the human readable part(HRP) that provides contextual hints that can assist UI developers with providing informative error messages. Specifically, we have the following HRP prefix for different addresses types in the mainnet:

|                    | Address bech32 Prefix |
| ------------------ | --------------------- |
| Account            | `cro`                 |
| Validator Operator | `crocncl`             |
| Consensus Nodes    | `crocnclcons`         |

We can use the `keys show` command of `chain-maind` with the flag `--bech <type> (acc|val|cons) ` to obtain the addresses and keys as mentioned above: for example,

```
$ chain-maind keys show test --bech acc
    - name: test0
    type: local
    address: cro1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s3zwpck7
    pubkey: cropub1addwnpepq0ua07k8p3vrv5dap4pl77n4gjyyqsqrndzu0tdrr60ddhfg6ah0c4mu5gw
    mnemonic: ""
    threshold: 0
    pubkeys: []

$ chain-maind keys show test --bech val
    - name: test0
    type: local
    address: crocncl1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s3prz35z
    pubkey: crocnclpub1addwnpepq0ua07k8p3vrv5dap4pl77n4gjyyqsqrndzu0tdrr60ddhfg6ah0ck5ad5l
    mnemonic: ""
    threshold: 0
    pubkeys: []

$ chain-maind keys show test --bech cons
    - name: test0
    type: local
    address: crocnclcons1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s34pfmlc
    pubkey: crocnclconspub1addwnpepq0ua07k8p3vrv5dap4pl77n4gjyyqsqrndzu0tdrr60ddhfg6ah0ch6kdrc
    mnemonic: ""
    threshold: 0
    pubkeys: []
```

## Signatures
[Digital signature](https://en.wikipedia.org/wiki/Digital_signature) has been the main way to authenticate users, by allowing users to sign transactions using their own private key. The public key and other data that are required for proper transaction validation are stored in an `Account` object. 

Since the [`chain-maind`](https://github.com/crypto-org-chain/chain-main/releases) v3.0.0, the new types of public keys and signing algorithms are supported, including secp256r1/NIST P-256. Secp256r1 is commonly applied in HSMs, [macOS/iOS/watchOS Secure Enclave](https://support.apple.com/en-ca/guide/security/sec59b0b31ff/web) and [Android hardware-backed Keystore](https://source.android.com/security/keystore/features), which allows the devices to function as hardware wallets. Based on secp256r1, the chosen parameters are supposed to be random numbers, while secp256k1 has had its parameters chosen [relatively rigidly](http://safecurves.cr.yp.to/rigid.html). Also, the address length (in bytes) in secp256k1 is 20 versus secp256r1 of 32.

At this stage, the following three digital key schemes for creating digital signatures are supported in Cosmos SDK. You can learn more at the [Cosmos SDK website](https://docs.cosmos.network/master/basics/accounts.html#keys-accounts-addresses-and-signatures).
- `secp256k1`, as implemented in the [SDK's crypto/keys/secp256k1 package](https://github.com/cosmos/cosmos-sdk/blob/v0.42.1/crypto/keys/secp256k1/secp256k1.go)
- `secp256r1`, as implemented in the [SDK's crypto/keys/secp256r1 package](https://github.com/cosmos/cosmos-sdk/blob/master/crypto/keys/secp256r1/pubkey.go) 
- `tm-ed25519`, as implemented in the [SDK crypto/keys/ed25519 package](https://github.com/cosmos/cosmos-sdk/blob/v0.42.1/crypto/keys/ed25519/ed25519.go)  (supported only for the consensus validation)

| Key schemes | Address length in bytes | Public key length in bytes | Used for transaction authentication | Used for consensus (Tendermint) | 
| --- | --- | --- | --- | --- |
| `secp256k1` | 20 | 33 | yes | no|
| `secp256r1` | 32 | 33 | yes | no|
| `tm-ed25519` | not used | 32 | no | yes |
