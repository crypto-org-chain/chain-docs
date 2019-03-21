# Signature Schemes
There are two address types which require corresponding signature schemes:

1) "RedeemAddress": Ethereum account address (for ERC20 reedem / backwards-compatibility); see `init/address.rs` in `chain-core`.
2) "Tree": threshold multisig addresses; records a root of a "Merklized Abstract Syntax Tree" where branches are "OR" operations
and leafs are Blake2s hashes of aggregated public keys:

* [Merklized Abstract Syntax Tree](https://blockstream.com/2015/08/24/treesignatures/)
* [MuSig: A New Multisignature Standard](https://blockstream.com/2019/02/18/musig-a-new-multisignature-standard/)