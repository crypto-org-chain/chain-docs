# Transaction

## Transaction Identifier

Each transaction has an identifier (typically shortened as TX ID). It is defined as

| blake3_hash(SCALE-encoded transaction binary data) |
| --------------------------------------------------- |


See [serialization](./serialization) for more details about the transaction binary format.

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
The purpose of transaction fees in the initial prototype is an anti-spam measure, i.e. to prevent broadcasting valid transactions indefinitely.
The general scheme is:

* If the transaction type allows indefinite valid transactions in an immediate time span (e.g. "transfer"), a fee (calculated as below) must be paid -- i.e. each transaction should be validated that it included this sufficient fee. Note that the fee amount must be exactly equal to the computed one (this is to prevent errors where a much larger fee could be accidentally paid if the fee amount could be set arbitrarily large).
* If the transaction type allows a limited number of valid transactions, there is no fee. One example is "unjail" where only one valid transaction can be sent for a given state after the unjailing period.

More details can be found in the [transactions document](../modules/transactions.md).

(In the future, if necessary, a dynamic Dutch auction-style fee market may be introduced for congestion control -- this may, however, be outside of the consensus state machine, i.e. "off-chain", in order to incentivize full nodes or other network layers.)

### Fee Calculation
The initial prototype uses a linear fee system. The minimal transaction fee is defined according to the formula:

```
<BASE_AMOUNT> + <PER_BYTE> * size
```

`BASE_AMOUNT` and `PER_BYTE` are special [network parameters](./network-parameters.md) in a fraction of CRO. `size` is the serialized transaction data’s size in bytes.

To verify a [basic transaction](#transaction-types) one would need to check:

```
sum(inputs amounts) or account.unbonded/bonded == sum(outputs amounts) + fee
```

The transaction fee goes to the [rewards pool](./reward-and-punishments#validator-rewards) to reward the validations.

## Transaction Types

### Basic Types (plain version):

:::tip NOTE
All these types should also contain metadata, such as [network ID](./chain-id-and-network-id.md#network-id). Furthermore, some of these transactions will be obfuscated to provide [privacy protections](./transaction-privacy.md) to the users.
:::

| Tx type              | Inputs                 | Outputs                                                                      | Fees involved? | Obfuscated? |
| -------------------- | ---------------------- | ---------------------------------------------------------------------------- | -------------- | ----------- |
| `TransferTx`         | UTXOs                  | UTXOs                                                                        | Yes            | Yes         |
| `DepositStakeTx`     | UTXOs                  | Depostit to specified account’s `bonded` amount                              | Yes            | Yes         |
| `WithdrawUnbondedTx` | Nonce, account         | UTXOs                                                                        | Yes            | Yes         |
| `UnbondStakeTx`      | Nonce, amount, account | Moves funds from `bonded` to `unbonded` under the same account with timelock | Yes            | No          |

Please also refer to this [flowchart](./send_your_first_transaction.md#send-your-first-transaction) that shows different types of transaction and how they interact with each other.

### Advanced Types:

Besides the above-mentioned basic transactions, there are some advanced types of transactions related to the council node and service node state metadata management, for example:

- `UnjailTx`: This transaction can be broadcasted to [un-jail](./staking.md#un-jailing) a node. It takes _nonce_, _account_ and has to be signed by the account’s corresponding key.
- `NodeJoinTx`: Anyone who wishes to become a council node can broadcast this transaction. It takes _council node data_, _staking address_ and has to be signed by the node's staking key. For further details on the process of joining the Crypto.com chain as a validator, please refer to this [documentation](./node-joining.md).

Remarks: There will be no transaction fee for advanced types Tx in the initial prototype.

## Cross-currency transactions and settlements

A proof of concept on the cross-currency transfers and settlement on CRO can be found in this [repository](https://github.com/crypto-com/settlement-cro). It demonstrates how to configure [Interledger](https://github.com/interledger) nodes for performing CRO-ETH cross-currency transactions between the Ethereum network (testnet or mainnet) and the CRO devnet.
