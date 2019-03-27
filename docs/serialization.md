# Serialization

Crypto.com Chain prototype currently uses RLP for the transaction serialization payloads: https://github.com/ethereum/wiki/wiki/RLP

The unsigned (such as the coin amount) are currently encoded in the little endian form.

See chain-core for the exact details or https://github.com/crypto-com/chain/blob/master/signer-cli/src/main.rs#L39 for a high-level description.