# Transaction processing

> _**Caution:**_ Some details are subject to changes.

The `check_tx` and `deliver_tx` events share the same transaction processing code, the only difference is they operate
on different storage buffers (refer to [buffered-storage](#)).

In `commit` event, the `deliver_tx` buffer is flushed, while the `check_tx` buffer is dropped.

## Transaction types

```
Enclave
  Transfer
  Deposit
  Withdraw
Public
  Unbond
  Unjail
  NodeJoin
MLSHandshake
  CommitRemove
  SelfUpdateProposal
  MsgNack
```

The enclave transactions are obfuscated in enclave, so they can only be verified completely in the validation enclave,
while the public transactions don't need enclave to verify.

The basic process procedure is like this:

```rust
let context = ...
match tx {
    Enclave(tx) => {
        let action = validate_enclave_tx(storage, context, tx)?;
        execute_enclave_tx(storage, tx, action)?;
    },
    Public(tx) => {
        process_public_tx(storage, context, tx)?;
    }
}
```

### Context

```rust
struct ChainInfo {
    /// minimal fee computed for the transaction
    pub min_fee_computed: Fee,
    /// network hexamedical ID
    pub chain_hex_id: u8,
    /// block time of current processing block
    pub block_time: Timespec,
    /// height of current processing block
    pub block_height: BlockHeight,
    /// max evidence age in tendermint consensus parameter
    pub max_evidence_age: Timespec,
}
```

## Enclave transactions

### `validate_enclave_tx`

- Check inputs unspent and load sealed log for them, and pass to validation enclave

- Load staking state for withdraw and deposit transactions, and pass to validation enclave

- Validation enclave decrypt the transaction, unseal the inputs and do the following validations:

  1. Check tx attributes (`chain_hex_id`, `app_version`)

  2. Check inputs/outputs basic
     - Not empty
     - No duplicates
     
  3. Check input timelock

  4. Verify inputs witnesses for transfer/deposit

  5. Verify staking address witness for withdraw

  6. Check staking state not jailed for withdraw/deposit

  7. Check staking state for withdraw:

     - `nonce` match
     - ` context.block_time >= unbonded_from`
     - `unbonded != 0`
     - `outputs.iter().all(|x| x.valid_from == account.unbonded_from)`

  8. Check fee and input/output sum amounts:

     - Transfer

       `sum_input - sum_output == min_fee`

       Return `sum_input - sum_output` as paid fee

     - Deposit

       `sum_input > min_fee`

       Return `sum_input - min_fee` as deposit amount

     - Withdraw

       `account.unbonded - sum_output == min_fee`

       Return `account.unbonded - sum_output` as paid fee

### `execute_enclave_tx`

The `TxEnclaveAction` is returned as the result of success validation of enclave transaction:

```rust
enum TxEnclaveAction {
    Transfer {
        fee: Fee,
        spend_utxo: Vec<TxoPointer>,
        create_utxo: TxoIndex,
        sealed_log: SealedLog,
    },
    Deposit {
        fee: Fee,
        spend_utxo: Vec<TxoPointer>,
        deposit: (StakedStateAddress, Coin),
    },
    Withdraw {
        fee: Fee,
        // withdraw supposed to withdraw all unbonded,
        // the amount here only to do sanity check
        withdraw: (StakedStateAddress, Coin),
        create_utxo: TxoIndex,
        sealed_log: SealedLog,
    },
}
```

It's executed as follows:

- `fee`

  Written into block result events, and get accumulated into reward pool afterward.

- `spend_utxo`/`create_utxo`

  Modify UTxO storage

- `sealed_log`

  Write into storage

- `deposit`/`withdraw`

  Modify staking state and related states

## Public transactions

Common validations:

- Check tx attributes (`chain_hex_id`, `app_version`)
- Verify staking witness
- Check the witness match the staking address
- Check `nonce` matches

### Unbond

The actual paid fee is `context.min_fee_computed`.

Actions: 

- `staking.bonded -= tx.value`
- `staking.unbonded += tx.value - context.min_fee_computed`
- `staking.unbonded_from = block_time + max_evidence_age`

Validations:

- Not jailed
- Coin computations no error, which implies:
  - `tx.value >= context.min_fee_computed`
  - `staking.bonded >= tx.value`

### Unjail

The actual paid fee is zero.

Action: 

- Transit staking state from "jailed validator" to "inactive(unjailed) validator" (refer to [staking
  state](staking-state.md#unjail)).

Validations:

- Already jailed
- `block_time >= jailed_until`

### Node Join

The actual paid fee is zero.

Action

-  Transit staking state depending on the option (refer to [staking state](staking-state.md#node-join)):
  - from "clean staking" to community node
  - from community node to active validator 
  - from "inactive(unjailed) validator" (if still in mls group) to active validator 

Validations:

- Not jailed

- Not active

- `staking.bonded >= minimal_required_staking or minimal_required_staking_for_community_node`

- If join as a community node:

  - verify the state is "clean staking"

  - verify the attached MLSInit (Add + Commit messages) as below

- If join as a council node:

  - verify state is "community node"

  - verify transaction's MLSInit is set to `CommunityToCouncilNodeSwitch`

  - Validator address not used

  - Used validator address list not full

#### verify `MLSInit`

chain-abci state:

```rust
enum TDBEState {
    Available,
    AwaitingCommit,
    PendingNACK,
}
struct TDBEVerifyState {
    epoch: u64,
    tree: TreePublicKey,
    tdbe_state: TDBEState
}
```

Verify `MLSInit`:

```rust
const cs: CipherSuite;
const ra_verifier: impl AttestedCertVerifier;
const group_id: Vec<u8>;

fn verify(state: &TDBEVerifyState, MLSInit::NodeJoin { add, commit }) {
    // verify state machine
    verify(state.tdbe_state == TDBEState::Available)?;

    // verify epoch
    verify(state.epoch == commit.content.epoch)?;
  
    // verify message signature
    verify_signature(&tree, commit.sender, &commit)?;
    verify_signature(&tree, add.sender, &add)?;

    // verify commit contains only the add proposal
    commit.updates.is_empty()?;
    commit.removes.is_empty()?;
    (commit.adds.len() == 1 && commit.adds[0] == cs.hash(add))?;
  
    // verify keypackage in proposal
    add.key_package.verify()?;
  
    // verify no duplicate keypackage identity and hpke pub keys
  
    // verify no path secrets
    verify(commit.path.is_none())?;

    // update tree
    let updated_tree = update_tree(&self.tree, add);

    // verify confirmation with TVE
    TVE.verify_confirmation(epoch, add, commit)?;
}
```

TVE can verify the confirmation like this:

```rust
fn TVE.verify_confirmation(epoch, add, commit) {
 
    check_with_TDBE(epoch, add, commit):
      - compute updated_tree, `transcript_hash` + `group context`
      - generate epoch secrets
      - `computed_confirmation`: compute the confirmation using the secrets
      - verify(computed_confirmation == commit.confirmation)?;

}
```

After validation passed, update the chain-abci state:

```rust
state.epoch += 1;
state.tree = updated_tree;
```

## MLSHandshake
### CommitRemove
FIXME
### SelfUpdateProposal
FIXME
### MsgNack
This message is to prevent potential DoS due to malformed paths in `CommitRemove` or `SelfUpdateProposal`.
The fee (as with other MLSHandshake messages) is zero, as it can't be arbitrarily sent.

Network parameters:
- nack timeout

Inputs:
- handshake state
- last block time
- tree of public keys: https://github.com/mlswg/mls-protocol/blob/master/draft-ietf-mls-protocol.md#synchronizing-views-of-the-tree
- "valid" commit message: content + commit_message block time

Action (if valid)
- original commit message sender staking state punishment
- transition handshake state to `AwaitingCommit` (to wait for the next commit) and add the original commit sender to the expected removals
  

Validation:
- handshake state is `PendingNACK`
- last block time <=  commit_message block time + nack timeout
- nack message refers to a valid commit message
- sender of MsgNack is not a sender of the original commit message
- sender is a valid leaf in the tree of public keys
- the referred encrypted path secret exists in the commit message
- the attached proof `DLEQ(dh/kem_output == node_hpke_public_key/group_point)` is valid
- the signature on the MsgNack content is valid
- with the disclosed `dh` value, the referred encrypted path secret's HPKE ciphertext:
  - either cannot be decrypted (e.g. authentication tag does not match)
  - or can be decrypted AND one of public keys on the path from the received commit message do not match public keys derived from the path secret values

## Appendix

### Tx Storage

#### KV Store

* `COL_TX_META`, `txid -> BitVec`
  UTxO spent status.
* `COL_ENCLAVE_TX`, `txid -> sealed tx payload`

  - abci query sealed payload for tx inputs, pass them to tx-validation-enclave for it to validate the tx.
  - For tx-query to query sealed tx payload.
* `COL_WITNESS`, `txid -> TxWitness`
  Only for abci-query
* `COL_BODIES`, `txid -> Tx`
  Only for abci-query

#### Merkle Trie

Staking states are stored in merkle trie.
