# Transaction

## Transaction Identifier

Each transaction has an identifier (typically shortened as TX ID). It is currently defined as

|blake2s_hash(SCALE-encoded transaction binary data)|
|-|

See [serialization](./serialization) for more details about the transaction binary format.

Note: the initial prototype uses blake2s, but it may be later changed to blake2b or something more complex: e.g. transaction identifier is a root of a Merkle tree formed from different transaction components as leaves

## Witness

See [signature-schemes](./signature-schemes) for more details

## Textual Address Representation

Crypto.com Chain supports threshold / multi-signature addresses that are represented as a single hash (see [signature-schemes](./signature-schemes)) which is different from Ethereum.

To represent the underlying byte array in a textual form, [Bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) is used. The convention for the human-readable part is the following:

- cro: mainnet payment
- tcro: testnet payment
- dcro: local devnet/regtest payment
- staking addresses (see [accounting](./transaction-accounting-model)) are textually represented in hexadecimal encoding to match the initial Ethereum ones

## Transaction Fees

The initial prototype uses a linear fee system, see [staking](./staking) for details.

## Transaction Types

### Basic Types (plain version):

:::tip NOTE
All these types should also contain metadata, such as network ID
:::

- TransferTx: UTXO-based transfer of funds, takes UTXO inputs, creates UTXO outputs - fee
- DepositStakeTx: takes UTXOs inputs, deposits them in the specified account’s bonded amount - fee
- UnbondStakeTx: takes nonce, amount, account and moves in the same account tokens from bonded to unbonded with timelock - fee
- WithdrawUnbondedTx: takes nonce, account and creates UTXOs - fee

### Advanced Types:

- UnjailTx: takes nonce, account, signed by the account’s corresponding key
- CreateCouncilNodeTx: takes council node data, staking address; signed by that node's staking key

#### TODO
These transaction types are not yet specified:

- ChangeNetworkParamTX?
- AddWhitelistServiceNodeTx: takes node data, whitelist type (customer acquirer, merchant acquirer, settlement agent), staking address; co-signed by 2/3 current nodes?
- EditWhitelistServiceNodeTx: takes node data, signed by that node?
- RemoveWhitelistServiceNodeTx: takes whitelisted node id; co-signed by 2/3 current nodes>
- AddMerchantIdTx: takes merchant data (certificate + cert-signed pk or some payment gateway point?), signed by merchant acquirer?
- RemoveMerchantIdTx: takes merchant id, signed by merchant acquirer?
