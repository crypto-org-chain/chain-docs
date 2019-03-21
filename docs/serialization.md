# Serialization

Crypto.com Chain prototype currently uses CBOR for the transaction serialization payloads. It uses the serde compact representation where structs are serialized as maps and each variant is a distinct single number key.

This serialization format is temporary for the ininitial development.
It will likely change (e.g. to RLP) and this exact specification is going to be documented here.

See chain-core for the exact details or https://github.com/crypto-com/chain/blob/master/signer-cli/src/main.rs#L39 for a high-level description.