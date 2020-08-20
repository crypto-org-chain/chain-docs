# Transaction Data Bootstrapping Enclave details

Transaction Validation Enclave (TVE):
- responsible for validating Enclave tx types;
- holds current tx obfuscation key;
- reacts to *immediate* requests (chain-abci, i.e. potentially uncommitted or invalid transaction; encryption requests from tx-query enclave)
- chain-abci directly talks to it during (consensus) state-machine execution

Transaction Data Bootstrapping Enclave (TDBE):
- responsible for generating MLSHandshake tx types;
- fetches old transaction data payloads;
- prerequisite for a node administrator to submit a node join tx request or construct genesis.json
- reacts to *block-committed* requests:
  - needs to run a Tendermint light client verification (TODO: trusted anchor injected as compile-time data?) and be connected to its Tendermint node RPC
  - chain-abci does not talk to it (it may invoke it during startup / for fetching old tx data, but can't talk to it during state-machine execution)
  - "knows" when it should generate MLSHandshake tx: 1) when in mid-time of keypackage expiration; 2) being "leftmost" node 
  - based on valid block-committed requests, it should update its internal states, derive secrets and push tx obfuscation key to TVE

## New/Rejoining Node Process

At any point of time, a new node can join the blockchain network (after genesis). All the nodes joining after genesis
have to follow below procedure to successfully join the network:

- First step for all the nodes to to catch-up with current network (See `Catch-up process` section below for details).
- New node then requests an _invitation_ (by sending `InvitationRequest`) from remote node's TDBE server (see below for
  more details on **Invitation protocol**):
  - The request should consist of:
    - Staking address.
    - New node's keypackage.
  - Remote node's TDBE server verifies the details provided in the `InvitationRequest` and generates `Welcome`, `Add`
    and `Commit` messages to add new node to the network.
  - New node, after receiving a response from remote TDBE server, verifies (TODO: Define validations on TDBE response)
    it and starts the whole process again if the verification fails (with a different remote TDBE server). If the
    verification is successfull, it continues to the next step.
- New node constructs `NodeJoinTx` (for community node) and submits the transaction after getting it signed
  by the node operator (see below for mode details on **Transaction signing**).
- If the `NodeJoinTx` is accepted in a block, new node can start to operate normally (as `Commit` with Add-only proposal
  does not need to fill paths -- node need to wait for NACK timeout).
  - New node's TDBE server can apply `Welcome` message to update its state.
  - If one wishes to join as the "council node" (have validator capabilities and responsibilities): once the local node
  catches up fully with the latest state (i.e. chain-abci gets to the latest block), the operator can submit
  the second `NodeJoinTx` transaction with its node's consensus public key 
- If the `NodeJoinTx` is not accepted (this can happen when there was another `Commit` in the meantime), then restart
  the process.

:::tip Note:
No need to fetch the leaf nodes as they will be a part of `ratchet_tree` extension of `Welcome` message.
:::

### Transaction signing

Before submitting `NodeJoinTx`, operator needs to sign the transaction which may happen on a different machine. New
node's TDBE server will generate a binary transaction file which the operator can copy to different machine, verify its
details manually and sign in using some CLI tool (maybe devutils?) which generates a new binary file with signed
transaction. After the operator has signed the transaction, they can copy the signed transaction file back to new node
and maually signal TDBE server to submit the signed transaction (manual trigger will contain the path to the signed
transaction file).

### Invitation protocol

To join the network as a validator or community node, it has to initiate "New/Rejoining Node Process" and sending an
`InvitationRequest` request is the first step a node performs after completing "Catch-up process".

- New node's TDBE sends an `TrustedTdbeRequest::Invitation` to remote node's TDBE:

```rust
pub enum TrustedTdbeRequest<'a> {
    // Other variants..
    /// Invitation request for new/rejoining node
    Invitation {
        /// New node's staking address
        staking_address: StakedStateAddress,
        /// New node's KeyPackage
        keypackage: Cow<'a, [u8]>,
    }
}
```

- Remote node's TDBE server looks up for staking state and its merkle proof corresponding to provided `staking_address`,
  performs all the validation corresponding to "clean staking" mentioned [here](https://github.com/crypto-com/chain-docs/blob/master/docs/modules/staking-state.md#state-transitions)
  and also perform validations on `keypackage` (e.g., if given keypackage does not already exists, etc. TODO: Define
  validations on keypackage)

- After validating the invitation request, remote TDBE server responds with `TrustedTdbeResponse` with either
  `Invitation` variant (if successfull) or `Error` variant if failed:

```rust
pub enum TrustedTdbeResponse<'a> {
    // Other variants..
    /// Invitation response for new/rejoining node
    Invitation {
        /// `Add` proposal new node joining
        add: MLSPlaintext,
        /// `Commit` message for new node joining
        commit: MLSPlaintext,
        /// `Welcome` message for new node joining
        welcome: MLSPlaintext,
    },
}
```

- After receiving successfull invitation response, new node performs following validations on it:
  - Try initialising its own state from the `Welcome` message (see [Welcoming New Members](https://github.com/mlswg/mls-protocol/blob/master/draft-ietf-mls-protocol.md#welcoming-new-members)
    for details).
  - Check `Add`/`Commit` similar to [this](https://github.com/crypto-com/chain-docs/pull/209/files#diff-8e112651c7b3d2293370b59567ddaddaR253)
    (minus the "abci state machine" / TVE) against the internal group state (if step 1 was successful) -- for the
    keypackage perhaps verify that it's the one submitted in the request


- After receiving successfull invitation response from remote node's TDBE server, a node can create `NodeJoinTx` using
  `add` and `commit` messages received in invitation response.


### Catch-up process

When a node starts, it should first check the configuration parameter `perform_catchup`. If `perform_catchup` is `true`,
the node should perform following catch-up process to fetch all the changes in UTXO set from `last_block_height` of
curent node to `current_block_height` of remote node. If `perform_catchup` is `false`, it should skip the catch-up
process and start performing normal operations.

To obtain all the changes in UTXO set from `last_block_height` of current node to `current_block_height` on remote node,
it can first use Tendemint light client verifying connection to obtain a list of `Withdraw` and `Transfer`
`transaction_id`s between the two block heights. Once all the transaction IDs are available, it can start establishing
an enclave-to-enclave mutually attested TLS stream with remote TDBE server to get all the `TxWithOutputs` corresponding
to above `transaction_id`s. After fetching all the transactions from remote TDBE server it can directly persist them
using `chain-storage` (using [`chain_storage::store_sealed_log`](https://github.com/crypto-com/chain/blob/e24f29fceabebb979ac4ba1947148040d0be1cc5/chain-storage/src/api.rs#L152);
TODO: Should this process also include creating and spending UTXOs or should that be done during tendermint
synchronization process?) and update `last_fetched_block` in `chain-abci`.

After all the transaction data is persisted, `chain-abci` can start listening to ABCI requests block-by-block and skip
`tx-validation` for `Transfer` and `Withdraw` transactions until `last_fetched_block`. `chain-abci` should still do
following basic validations for each transaction in a block:

- If `block_height <= last_fetched_block` **AND** (`tx_type == Transfer` **OR** `tx_type == Withdraw`) **AND**
  transaction is present in storage, then, check if outputs size matches and all the inputs are unspent.
- If `block_height <= last_fetched_block` **AND** (`tx_type == Transfer` **OR** `tx_type == Withdraw`) **AND**
  transaction is not present in storage, then, skip the transaction as it is an invalid transaction.
- If `block_height <= last_fetched_block` **AND** (`tx_type != Transfer` **AND** `tx_type != Withdraw`), then, perform
  normal transaction validation.
- If `block_height > last_fetched_block`, then, perform normal transaction validation.

:::tip Note:
Starting from Tendermint v0.34, instead of listening to ABCI requests from `last_block_height` to `last_fetched_block`
and skipping `tx-validation`, it can potentially use Tendermint's [`StateSync`](https://docs.tendermint.com/master/spec/abci/apps.html#state-sync)
for synchronizing jellyfish merkle and staking state uptil `last_fetched_block`.
:::

## Light client

To obtain all the changes in UTXO set from `last_block_height` of current node to `current_block_height` on remote node
using tendermint light client, TDBE need to fetch block data from chain and verify them like a light client.

:::tip Note:
to simplify `app_hash` validation, `app_hash` should be modified to contain root of merkle tree of `transaction_id`s for verifying each block. The new
`app_hash` format is `"<merkle root of valid transaction IDs (32 bytes)><current way to compute app_hash (32 bytes)>"`.
After this change, `app_hash` will become 64 bytes long. To see the current way to compute `app_hash` refer
[here](https://github.com/crypto-com/chain/blob/6a3233ebeae615ad0198308819a1d221c1741cd4/chain-core/src/lib.rs#L42).
:::

We fetch block data from single node one by one, verify each block against the previous one:

```rust
struct LightBlock {
  // rpc: /commit
  signed_header: SignedHeader {
    header,
    commit,
  },
  // rpc: /validator
  validator_set,
  // rpc: /validator
  next_validator_set,
}

struct BlockContent {
  // rpc: /block
  block: Block,
  // rpc: /block_results
  block_result: BlockResult,
}

fn verify(
  last_block: LightBlock,
  last_app_hash: AppHash,  // first 32 bytes
  untrusted: LightBlock,
  untrusted_block: BlockContent,
  options...
) -> Result<(), Error> {
  Validate the light block:

  - Ensure the header validator hashes match the given validators
  - Ensure the header next validator hashes match the given next validators
  - Ensure the header matches the commit
  - Check that the untrusted block is more recent than the trusted one
  - Check that the untrusted block is the very next block of the trusted one
    - untrusted.height == last_block.height + 1
    - untrusted.last_block_id == last_block.compute_block_id()
  - Check that their (next) validator sets hashes match.
  - Verify that more than 2/3 of the validators correctly committed the block.
  
  Validate the block content and app hash:
  - Check the block content matches the header of LightBlock
  - Check block_results matches the block_result_hash
  - Check the first 32 bytes of last_app_hash matches the given last_app_hash
  - Compute new app hash(first 32 bytes) from block content
  
  Store untrusted and new app hash for validation of next block
}
```

In standard light client protocol, client use time of now to verify trusting period, since in enclave we don't have time of now, we don't verify trusting period.

For the first block, we need to verify it against genesis information (notabely genesis validator set) which is compiled into enclave.

```rust
fn verify_first_block(genesis: Genesis, untrusted: LightBlock) -> Result<(), Error>;
```

After validation succeed, decode the valid transactions and process them:

- Extract all the valid `Transfer` and `Withdraw` `transaction_id`s from `block_results`
- Establish an enclave-to-enclave mutually attested TLS stream with remote
  TDBE server and fetch transaction data by sending [`GetTransactionsWithOutputs`](https://github.com/crypto-com/chain/blob/8de5e08ffc6176f7ef2e726a3db1f53e783c461d/enclave-protocol/src/tdbe_protocol.rs#L11)
  request.

## Sealing / recovering

on genesis or when the (add/update) request is committed,
TDBE should seal its init key + credential + last trusted `LightBlock` + app hash with app hash as AAD.

Restarted TDBE (that wasn't kicked out) starts off this state via the TM light client

## Security upgrades
TDBE/chain-abci should keep track of the highest `isv_svn` observed
(in a valid committed tx) and reject Add/Update proposals with a lower number.
for (old) data bootstrapping:

- TDBE (server): reject all TLS connections with lower `isv_svn` than the highest one
- TDBE (client): keep track keypackage `isv_svn` proportions (based on MLSHandshake messages);
  - if (highest `isv_svn` count / lower `isv_svn` count >= 2/3), reject all TLS connections with lower `isv_svn` than the highest one
  - otherwise, tolerate fetching data from servers where `isv_svn` == `the highest one - 1`

### SVN verification + compilation order
Besides verifying `MRSIGNER`, ProductId, etc. is the same as in `Report::for_self()`, one should also verify:

- TDBE: if (other party's `isv_svn`) == (my `isv_svn` / in the report), check MRENCLAVE is the same
- TVE: (incoming local connection's  `isv_svn`) == (my `isv_svn`) and MRENCLAVE is corresponding to compile-time encoded value of TQE or TDBE (depending on the expected connection type)

NOTE: as TVE only expects local communication, it should expect `isv_svn` to be exactly the same as its own
(the node operator would update all binaries at once on its node).

This mandates the following compilation / signing order:

1. TDBE
2. TQE
3. TVE: (provided TDBE's and TQE's MRENCLAVE values at compile-time)

## Obfuscation key rotation via Message Layer Security handshakes
### data type modifications

```rust
struct StakedState {
    address: StakedStateAddress,
    nonce: u64,
    bonded: Coin,
    unbonded: Coin,
    unbonded_from: Timespec,
    node_details: Option<NodeDetails>,
}

enum NodeDetails {
    Council(Validator),
    Community(FullNode)
}

struct FullNode {
    council_node: CommunityNode,
    jailed_until: Option<Timespec>, // TODO: should there be jailing? for invalid handshake tx submission?
    inactive_time: Option<Timespec>, // TODO: when missing submitting handshake tx? should validator have 2 "inactive times"?
}

pub struct CommunityNode {
    pub name: Name,    /// name / moniker (just for reference / human use)
    pub security_contact: Contact,    /// optional security@... email address
    pub confidential_init: ConfidentialInit, // contains the keypackage
}
```

### extra network params

Following are the TDBE related network parameters (to be configured in `genesis.json`):

- `"required_community_node_stake"`: The minimum staking amount required to become a community node.
- `"mls_commit_timeout_secs"`: Timeout (in seconds) for MLS handshake commit.
- `"mls_message_nack_timeout_secs"`: Timeout (in seconds) for MLS handshake message NACK.
- `"invalid_commit_slash_percent"`: The maximum percent of stake reduction for nodes sending invalid commits.
- `"keypackage_expiration_secs"`: Time (in seconds) after which, the keypackage for a node will be considered as
  expired. (refer to [Removes](#removes))
- `"keypackage_update_secs"`: Time (in seconds) after which, the keypackage for a node is allowed to be updated (refer to [Updates](#updates)), `keypackage_update_secs < keypackage_expiration_secs`.

### genesis.json creation
The genesis generation ceremony needs to happen in several steps:

1. Keypackage-independent parameters are exchanged/specified as compile-time parameters (for the light client trusted anchor basis)

2. enclave code is compiled with these parameters and signed on by the production key

3. administrators of nodes participating from genesis obtain and verify the signed binaries and use them to generate their keypackages

4. they exchange keypackages

5. leftmost / first validator's node administrator is responsible for generating the first MLSHandshake CommitChange that's included in genesis.json
and generating and distributing genesis.json (that's verified by other parties)

### extra TX types

```
Enclave
  ...
Public
  ...
  NodeJoin
MLSHandshake
  CommitRemove
  SelfUpdateProposal
  MsgNack
```

NodeJoin is extended that instead of taking `CouncilNode`, it'd take `NodeMetadata` which is enum
with council node and community node variants.
`ConfidentialInit` instead of taking `keypackage: Vec<u8>` takes
`init: Vec<u8>` which 
represents:
```rust
pub enum MLSInit {
  CommunityToCouncilNodeSwitch,
  // KeyPackage
  Genesis(Vec<u8>),
  CommunityNodeJoin {
    add: Vec<u8>, // MLSPlaintext -- Add
    commit: Vec<u8> // MLSPlaintext -- Commit
}
```

#### Handshake transactions
internal `Vec<u8>` payloads are expected to be encoded in the TLS standard binary encodings
(TODO: 
[the draft MLS architecture doc](https://github.com/mlswg/mls-architecture/blob/master/draft-ietf-mls-architecture.md):
> In addition, it does not specify a complete wire encoding, but rather a set of abstract data structures which can then be mapped onto a variety of concrete encodings, such as TLS RFC8446, CBOR RFC7049, and JSON RFC7159.

Besides X.509 (to reuse TLS RA stuff) identities in keypackages, we may potentially switch to SCALE to keep it simpler;
TLS wire format is mainly interesting for test-vectors / unit tests, but the protocol draft is too in flux at the moment.
).

```rust
pub struct CommitRemoveTx {
    proposals: Vec<Vec<u8>>, // MLSPlaintext -- Remove
    commit: Vec<u8> // MLSPlaintext -- Commit
}
```

```rust
pub struct SelfUpdateProposal {
    proposal: Vec<u8>, // MLSPlaintext -- Update
    commit: Vec<u8>, // MLSPlaintext -- Commit
}
```

```rust
pub struct MsgNack {
    nack: Vec<u8>, // msg ref + `dh` + DLEQ proof -- TBD: https://github.com/mlswg/mls-protocol/issues/21#issuecomment-455392023
}
```

```rust
pub struct NackDleqProof {
     /// the computed "r" value
     r_response: [u8; 32],
     /// the intermediate hash
     c_inter_hash: [u8; 32],
     /// revealed shared secret; same size as uncompressed pubkey
     dh: [u8; 65],
 }

pub struct NackBody {
  proof: NackDleqProof,
  /// txid (domain + hash) of CommitRemoveTx or SelfUpdateProposal
  commit_msg_ref: [u8; 32],
  /// index of invalid `DirectPathNode` 
  direct_path_index: u16,
  /// leaf index of the affected receiver
  receiver: u32,
}

/// sketch of the nack message content
pub struct NackContentSketch {
  body: NackBody,
  /// the signature using the identity key of the affected receiver
  signature: Vec<u8>,
}
```

(TODO: `CommitRemoveTx` / `SelfUpdateProposal` may need to contain Schnorr NIZK of knowledge (RFC 8235)
for encrypted parts (`DirectPathNode`...))

##### TDBE handling / generation
TDBE runs as a standalone enclave which includes TM light client and reacts to information received from it.
For fetched transactions with MLS handshake messages, it should verify they are valid (i.e. their TXID is a leaf in the Merkle tree
of valid transactions in a particular block).
It opens mutually attested TLS connection to tx-validation enclave (TVE) for pushing exported obfuscation keys.

###### Commits
When a block is committed with nodejoin, unbond or punishment events (liveness/byzantine issues, bue also including expired keypackages), 
Node's TDBE corresponding to the leftmost non-empty leaf should generate and broadcast `CommitRemoveTx` with proposals reflecting the triggering block's change (
  bonded stake amount changes below minimum due to unbondtx or some event
).

[[ TODO: instead of leftmost non-empty leaf, start with `triggering block time ``mod`` leaf_count` closest non-empty to the right circulating to 0 ? ]]

[[ TODO: Or should all nodes try to generate the Commit and they'll just try to apply / wait for NACK timeout with whatever gets first / is selected valid in a block?  ]]

(It should use the triggering block's number as AAD.)

NOTE: if the node to generate `CommitRemoveTx` is happened be the one to be removed, the next left-most node should generate and broadcast `CommitRemoveTx`

If CommitRemoveTx is not received in a block with time less the triggering block's time + timeout,
OR received CommitRemoveTx was invalid;

node's TDBE corresponding to the next leftmost non-empty leaf should generate and broadcast `CommitRemoveTx` -- it should include
a Remove proposal for the previous node(s) (that failed to submit in time or submitted invalid `CommitRemoveTx`;
it should be indicated in timeout-committed block
);
and include any additional proposals (if any) since the original triggering block;
(it should take the latest "timeout" block's number as AAD.)

Commit (in `CommitRemoveTx` / `SelfUpdateProposal`) should be applied after NACK timeout.

###### NACK
If the receiver of the `HPKECiphertext` (Welcome message or DirectPath) cannot process it
/ it fails (e.g. the encrypted secret does not match the outside public key),
they generate and broadcast a message that
reveals `dh` value and provides a proof `DLEQ(dh/kem_output == node_hpke_public_key/group_point)`
(ref: https://blog.cloudflare.com/privacy-pass-the-math/).

If NACK is valid and submitted in time, the Commit-containing message should be considered as invalid
(even though the corresponding TX was assumed as valid before) -- the punishment logic should be applied
to the related message submitter;
the next node's TDBE (next non-empty leaf) should generate and broadcast `CommitRemoveTx` 
and include Remove proposals as with the "commit timeout" case.

###### Updates
When `keypackage.create_time + keypackage_expiration_secs > block_time >= keypackage.create_time + keypackage_update_secs`, TDBE will generate and broadcast `SelfUpdateProposal`.

If processing of the commit failed (might because of other concurrent commit), TDBE should retry automatically as long as the keypackage not expired.

###### Removes

There are two cases a keypackage should be removed:

- After `block_time >= keypackage.create_time + keypackage_expiration_secs`, the keypackage is expired.

- When the validator becomes inactive ([state transition](/staking-state.md)).

In these cases, the leftmost non-empty leaf node should generate and broadcast `CommitRemove`  to remove it.

When abci process `CommitRemove`, it should also turn the validator inactive if it's still active.

###### new obfuscation key
Once the Commit is applied after a NACK timeout (or state is reconstructed from Welcome), TDBE should generate a new obfuscation key as:

```
new_key = MLS-Exporter(
    Label="Crypto.com Chain tx validation " + block number where CommitRemoveTx/NodeJoinTx/SelfUpdateProposal is included,
    Context=(that updated group's context),
    length=(AES_128_GCM_SIV key length)
)
```

and it should push it over mutually attested TLS to TVE.
TVE should delete old key after being pushed the new key.

As with https://github.com/mlswg/mls-protocol/blob/master/draft-ietf-mls-protocol.md#deletion-schedule

TDBE should delete the secrets + exported key after it's been pushed to TVE.

##### abci processing
In MLS Architecture terminology:
- Tendermint serves as Delivery Service (DS)
- IAS/DCAP/... + Tendermint (staking states) serve as Authentication Service (AS)

As such, abci app (chain-abci) needs to have some understanding of the logic of `MLSHandshake` transaction types.

Notably, it needs:
- to keep track of (MLS) Leaf`<->`staking address mapping in order to execute corresponding updates on stake
- to keep track of keypackage lifetimes -- to limit frequency / know when `SelfUpdateProposal` are valid; for validators whose corresponding keypackage expires,
they should be removed from the validator set (similar to liveness fault handling)
- to keep track if valid `CommitRemoveTx` was received in time -- invalid one receive similar treatment as byzantine faults (removal from validator set if a validator + slash)
- to keep track if valid `NACK` was received after a "valid" `CommitRemoveTx` -- NACK invalidating `CommitRemoveTx` should treat the `CommitRemoveTx` similar to byzantine faults
- after `CommitRemoveTx`/`SelfUpdateProposal`/`NodeJoinTx` -- after block commit and NACK timeout, enquire TVE if it was pushed a new key;
if not, it is a local node problem (e.g. no running TDBE) -- TODO: block consensus state machine or shutdown?

[[ OPEN ISSUE: 
https://github.com/mlswg/mls-protocol/issues/21

update the NACK solution here with the official one when it is drafted in the protocol spec
]]

##### abci processing sketch
Inputs:
- previous block time
- MLS update state: Available / Awaiting Commit / Pending NACK
- expected removals: `Option<Vec<(LeafPos, StakingAddress)>>` (expectedR): these track removals that need to be included in the `CommitRemoveTx` message
- pending removals: `Option<Vec<(LeafPos, StakingAddress)>>` (pendingR): these track removals that happened while waiting for the `CommitRemoveTx` or `NACK`
- CommitMsg: `Option<MLSPlaintext>` (+ txid?)

Basic transitions are documented in the state diagram below:
```plantuml
[*] --> Available

Available : expectedR=None
Available : pendingR=None

Available --> Available : 1. NodeJoinTX
Available --> AwaitingCommit : 2. state change (event or unbondtx) or expiration
Available --> PendingNACK : 3. SelfUpdateProposal

AwaitingCommit : expectedR
AwaitingCommit : pendingR

AwaitingCommit --> AwaitingCommit : 4. state change (event or unbondtx) or expiration
AwaitingCommit --> AwaitingCommit : 5. CommitRemoveTx timeout
AwaitingCommit --> PendingNACK : 6. valid CommitRemoveTx

PendingNACK --> PendingNACK : 7. state change (event or unbondtx) or expiration
PendingNACK --> Available : 8. NACK timeout (pendingR is None)
PendingNACK --> AwaitingCommit : 9. valid NACK
PendingNACK --> AwaitingCommit : 10. NACK timeout (pendingR is Some)

PendingNACK : expectedR
PendingNACK : pendingR
```

Transitions:
1. `NodeJoinTX` can only happen when there is no other MLS update happening;
as the `Commit` message inside `NodeJoinTX` does not need to populate any paths,
there is no need to wait for NACK, as everyone can update instantly (provided the `NodeJoinTX` is valid)

2. if state of a node changes (due to unbond tx or some event) or its keypackage expires, the state update (e.g. removal from the validator set) can be done immediately,
but the TDBE update needs to 1) wait for a valid signed `Commit`, 2) after receiving a valid signed `Commit`, it needs to wait for a potential `NACK`.
in this transition, `expectedR` will be set to `Some(...)` and the internal vector will contain the node details to be removed

3. if `SelfUpdateProposal` is valid (the proposal comes after 1/3 of validity time, before expiration; is signed correctly, new keypackage is valid, Commit is against a correct epoch...),
one still needs to wait for a potential `NACK` (as the encrypted secrets in the direct paths may not match for some nodes)

4. during waiting for the removal commit, there may be other changes or expirations, which will be appended to `pendingR`

5. if the removal commit wasn't received in time, `pendingR` is appended to `expectedR` (and `pendingR` is then cleared), and details of the sender that was meant to send the removal commit are added to `expectedR`

6. if a valid `CommitRemoveTx` was received, one still needs to wait for a potential `NACK` (as the encrypted secrets in the direct paths may not match for some nodes)

7. during waiting for the potential NACK, there may be other changes or expirations, which will be appended to `pendingR`

8. if no NACK is received and there are no items in `pendingR`, `expectedR` can be cleared and we can wait for new potential `SelfUpdateProposal` or `NodeJoinTx`

9. if a valid NACK is received, the sender of `CommitMsg` should be punished (slashing + jail), `pendingR` is appended to `expectedR` (and `pendingR` is then cleared), and details of the sender that sent the invalid Commit are added to `expectedR` -- and we need to wait for a new commit

10. if no NACK is received and there are items in `pendingR`, `pendingR` is moved to `expectedR` and we can need for wait for another `CommitRemoveTx`

NOTE: similar logic is applied in TDBE -- they can apply `Commit` (or `Welcome` in 1. for the new joiner) after transitions 1., 8. and 10. 
