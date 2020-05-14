# Serialization

After several iterations of binary formats, Crypto.com Chain settled on using
the SCALE (Simple Concatenated Aggregate Little-Endian) codec.

It is formally described in Section B.1 of [Polkadot RE Protocol
Specification](https://github.com/w3f/polkadot-re-spec/blob/master/runtime-environment-spec/polkadot_re_spec.pdf).

## Test Vectors
### Key pairs and Addresses
Transaction-related keys use the secp256k1 ECC, as in Bitcoin, Ethereum etc. The
following test vectors were generated with the seed
`ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`.

#### View key pair
A secp256k1 key pair used for authentication when requesting transaction data
from enclaves.

Secret: `b4518a5a1594816446f9a50390fe2d5a896b91590b794bcd7ff4bee75d2ab601`

Public key:
```
045935d68aa6ed95edbfa897b8ee6b050d428594c7542c110b24ffc568f885b22b5b9bb40d731161eb077c2f0b1ee0dc112ebb26c0e9c0da01d9b3d7b6d621556e
```

NOTE: as this key pair is used in an interactive protocol, wallet client
software that supports an external device (e.g. hardware wallets) may work in a
"mixed" mode where view keypairs are independently generated and stored locally
(unlike transfer secrets which do not leave the external device).

#### Staking key pair and Address
A secp256k1 key pair used for signing network operations-related transactions.

Secret: `e6733383185784496214adba3968672eae49f0165bcf60ae0c5fd3a570d946e9`

Public key:
```
04deb799363e8e779ac4f2fe6c873b2dbd6870d1cb899ef103c6d3c4af755b81aa1947e293b109bb41cb411de0fc578acea40e60b4d03b9574837695dff52e2698
```

The address is derived from the public key in the same way as externally owned
account addresses on Ethereum (rightmost 20 bytes of the Keccak-256 hash of the
public key...). Its textual representation is hexadecimal:

`0x410afb0ccf51aefd111bceafb6c298acd4decaf6`

#### Transfer key pair and Address
A secp256k1 key pair used for signing payment-related transactions. As payment
transactions are signed using a
[BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)-compatible
scheme where public keys which only encode X coordinates are used (Y coordinates
are chosen implicitly as quadratic residues).

Secret: `865396765de5856157d044f7fbfc93165a9a0226be83b84e376a5d284534f07b`

Public key:
```
04bea01313886bcb3f9b80846fa43df72aa9c59f48478a142ed86afe59e7b595517731c8d77a53ddce2178ae837977b37e178eac876dca4a277ed2f3a462c72aa1
```

X-only public key:
`bea01313886bcb3f9b80846fa43df72aa9c59f48478a142ed86afe59e7b59551`

The address is defined as a root of a Merkle tree with X-only public keys being
leafs, hashed using Blake3 (32 bytes). We can construct a Merkle tree with one
leaf being the above X-only public key. Its textual representation is using
Bech32:

* (public) testnet:
  `tcro1lrmqarjnxqqfsqlw9egc6w0llgnhnveuhtj6l4ryzgqleshm5eeqzre704`
* mainnet: `cro1lrmqarjnxqqfsqlw9egc6w0llgnhnveuhtj6l4ryzgqleshm5eeq0y7gwx`

##### Other examples
Secret: `9b7e526baa8cfcb757dd3462b0df07d62a4453e04ada1ec9325f4b6e61a577ca`

Public key:
```
04d61feba9a9aa5ca43981eeb3c23893baa5010821569f7f8b71dc987ad4114aefb4ba735d5de5c9405a6ce8474f46aa49a1d88bdd7143d6824e4892bffa80a066
```

X-only public key:
`d61feba9a9aa5ca43981eeb3c23893baa5010821569f7f8b71dc987ad4114aef`

* (public) testnet:
  `tcro1v3x0j5jeftkq0cpsahkghfadazthqulj6rh3z5kvuyzmnc8yrpqqcqrrx7`
* mainnet: `cro1v3x0j5jeftkq0cpsahkghfadazthqulj6rh3z5kvuyzmnc8yrpqq48y48d`

--

Secret: `45f3aef34147d00100469dcf8771d52436a8e312a2f8e8214995a76e36e458c7`

Public key:
```
04be31878078caa7919e18b2682cc40a49910ed9131f18a63499f850cf7552369c17bd2df5e0ea195d860b4e2181c66efcea82b863e29e5ec9cf7401d2cac6afc2
```

X-only public key:
`be31878078caa7919e18b2682cc40a49910ed9131f18a63499f850cf7552369c`


* (public) testnet:
  `tcro1h2ukeq63nmcw0l5y7jrkjasfcsmwds87976zqe5levzs068nejjsvjclvl`
* mainnet: `cro1h2ukeq63nmcw0l5y7jrkjasfcsmwds87976zqe5levzs068nejjsp4lfdv`

TODO: examples with combined public keys and multi-leaf trees

### Transactions
#### Attributes
Each transaction payload contains additional transaction attributes. They
contain:

- version number (u64): for the 0.5 version, it's "1"
- network id (u8): for the mainnet, it's 0x2A

The attribute payload for "account-based" transactions without transaction
outputs (deposit stake, unbond stake, node join), the attribute payload is:
`002a0100000000000000`

For transactions with outputs (transfer, withdraw unbonded stake), there is an
additional information containing access information -- for the public view key
above:
```
045935d68aa6ed95edbfa897b8ee6b050d428594c7542c110b24ffc568f885b22b5b9bb40d731161eb077c2f0b1ee0dc112ebb26c0e9c0da01d9b3d7b6d621556e
```

with access to all transaction data, the attribute payload is (the public is 
serialized in the compressed form):
```
002a04025935d68aa6ed95edbfa897b8ee6b050d428594c7542c110b24ffc568f885b22b000100000000000000
```

#### Witness
Each transaction contains a segregated witness payload. For network operations,
the witness payload is a recoverable ECDSA (the same as in Ethereum), with the
transaction identifier (Blake3 hash of the transaction payload) being the
message digest. With the secret above
(`e6733383185784496214adba3968672eae49f0165bcf60ae0c5fd3a570d946e9`), here are a
few examples:
* txid: `d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea1`
* witness:
  ```
  0001786bda8b0a8a9bdf8c0e7379f678000cb9865aaa4995213f929cdb21b8f0c0035499e14c6bac48573fed33737da86d515e24109f651573e112930cb40615b6ee
  ```

* txid: `b079b56268e7e8ecac6c80e546af343fc89ec3e02ae00071b584da048789de05`
* witness:
  ```
  0001eb9e2e9d71f12674ab87682d132eec76018c6e1c3dbd4d992b4122abc0b1cddb758096bf60bf03b61ebadce96214a48f1b02b00340ddad82ad9909689bfee594
  ```

* txid: `b857a50a3bc5ad7e66bd62155c608d654ce0a4052ba30d95de5415dc3d6fb6b2`
* witness:
  ```
  000189e2f25993e6db91037ca93befef075c07975add286062433c64c83e6835c21942bad4a5f06450f1a40b349a936ce6275308c0db720772bce9819e684ddebb12
  ```

For transfer operations, the witness payload is a Merkle proof and BIP340
Schnorr signature (again with the transaction identifier being the message
digest). Here are examples signed with the secret
`865396765de5856157d044f7fbfc93165a9a0226be83b84e376a5d284534f07b` and a proof
for the corresponding x-only public key
`bea01313886bcb3f9b80846fa43df72aa9c59f48478a142ed86afe59e7b59551`

* txid: `fac96a0081af98df1a70b7db03825c41109f0b2687fbdbd957938dfcc3a2dbc8`
* witness:
  ```
  040061327a299e52a79bda96ecdf97efbb329f546199e82e9d9813d099a2da57164219acdc13a03292dc4110830670204d41d43ebcc686ef49268adbb522d691521d00bea01313886bcb3f9b80846fa43df72aa9c59f48478a142ed86afe59e7b59551
  ```

* txid: `510f78adeae403e56b40f5c3bea1ff70f3dec2da6911e1e9b1f0ea03203019bc`
* witness:
  ```
  0400db315f21d8dfa747b772ba6af05c3efbbf28eaf7c3cd6fcab91dfb9f566f5a3f2779b84a714e3653ea8fc3d0092e0b982ebf10440df9f3a9e2e33caa310cc86200bea01313886bcb3f9b80846fa43df72aa9c59f48478a142ed86afe59e7b59551
  ```

TODO: examples with longer Merkle proofs

#### Plain payloads
[Certain transactions have some of their data
obfuscated](transaction-privacy.md) -- the resulting ciphertext-containing
transactions (that is broadcasted on the network) is created in an interactive
protocol with code running in local or remote enclaves. In this section, we show
the plain payloads that can be created anywhere and are then be passed to an
enclave before they are broadcasted on the network.

##### Withdraw unbonded stake
The witness payload is public, but the transaction outputs will be obfuscated.
Example for plain payload -- withdrawing 1000 base unit coins from
`0x410afb0ccf51aefd111bceafb6c298acd4decaf6` to
`cro1lrmqarjnxqqfsqlw9egc6w0llgnhnveuhtj6l4ryzgqleshm5eeq0y7gwx` unbonded from
time `0` (with the transaction attributed shown above).

* plain transaction payload:
  ```
  0200000000000000000400f8f60e8e5330009803ee2e518d39fffa2779b33cbae5afd4641201fcc2fba672e803000000000000010000000000000000002a04025935d68aa6ed95edbfa897b8ee6b050d428594c7542c110b24ffc568f885b22b000100000000000000
  ```
  (txid: `d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea1`)

##### Transfer
The payload will be fully obfuscated. Example for plain payload:

* spending output 0 of transaction
  `d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea1`:
  `d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea10000`
  creating two outputs:
* 100 base unit coins to
  `cro1h2ukeq63nmcw0l5y7jrkjasfcsmwds87976zqe5levzs068nejjsp4lfdv`:
  `00644cf952594aec07e030edec8ba7ade8977073f2d0ef1152cce105b9e0e41840840300000000000000`
* 900 base unit coins to
  `cro1v3x0j5jeftkq0cpsahkghfadazthqulj6rh3z5kvuyzmnc8yrpqq48y48d`:
  `00bab96c83519ef0e7fe84f487697609c436e6c0fe2fb420669fcb0507e8f3cca5640000000000000000`
* witness and attribute payloads shown above
* full plain transaction payload:
  ```
  0004d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea100000800644cf952594aec07e030edec8ba7ade8977073f2d0ef1152cce105b9e0e4184084030000000000000000bab96c83519ef0e7fe84f487697609c436e6c0fe2fb420669fcb0507e8f3cca5640000000000000000002a04025935d68aa6ed95edbfa897b8ee6b050d428594c7542c110b24ffc568f885b22b000100000000000000040061327a299e52a79bda96ecdf97efbb329f546199e82e9d9813d099a2da57164219acdc13a03292dc4110830670204d41d43ebcc686ef49268adbb522d691521d00bea01313886bcb3f9b80846fa43df72aa9c59f48478a142ed86afe59e7b59551
  ```
  (txid: `fac96a0081af98df1a70b7db03825c41109f0b2687fbdbd957938dfcc3a2dbc8`)

##### Deposit
Here, the witness payload will be obfuscated, the transaction payload is public.
Example for plain payload:
* spending output 0 of transaction
  `d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea1`:
  `d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea10000`
* witness and attribute payloads shown above
* depositing to the address `0x410afb0ccf51aefd111bceafb6c298acd4decaf6`
* plain transaction payload:
  ```
  04d0a35414d432dc757433e01a1523a53d34ef94dfaee09fd62564f42c783a5ea1000000410afb0ccf51aefd111bceafb6c298acd4decaf6002a0100000000000000
  ```
  (txid: `510f78adeae403e56b40f5c3bea1ff70f3dec2da6911e1e9b1f0ea03203019bc`)

#### Network operations
##### Unbond
At nonce 0, unbond 1000 base unit coins with the transaction attributes and
witness above for address `0x410afb0ccf51aefd111bceafb6c298acd4decaf6`.

transaction payload:
```
010000410afb0ccf51aefd111bceafb6c298acd4decaf60000000000000000e803000000000000002a0100000000000000000189e2f25993e6db91037ca93befef075c07975add286062433c64c83e6835c21942bad4a5f06450f1a40b349a936ce6275308c0db720772bce9819e684ddebb12
```
(txid: `b857a50a3bc5ad7e66bd62155c608d654ce0a4052ba30d95de5415dc3d6fb6b2`)

##### Node join request
At nonce 1, with Tendermint Ed25519 consensus pubkey
`d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a`, "example" as
a human-readable moniker, "security@example.com" as a security contact, TDBE
certificate set as `4649584d45` (FIXME: example when TDBE-related key packages
are implemented) request a council node joining with address
`0x410afb0ccf51aefd111bceafb6c298acd4decaf6` (attribute and witness payloads
above).

transaction payload:
```
0102010000000000000000410afb0ccf51aefd111bceafb6c298acd4decaf6002a0100000000000000001c6578616d706c6501507365637572697479406578616d706c652e636f6d00d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a144649584d450001eb9e2e9d71f12674ab87682d132eec76018c6e1c3dbd4d992b4122abc0b1cddb758096bf60bf03b61ebadce96214a48f1b02b00340ddad82ad9909689bfee594
```
(txid: `b079b56268e7e8ecac6c80e546af343fc89ec3e02ae00071b584da048789de05`)