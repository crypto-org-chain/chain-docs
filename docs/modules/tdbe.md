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


## new/rejoining node
(for non-genesis specified ones)
- obtain old data (see below) from external node TDBE
- request "invitation" from the external node TDBE:
  - request should contain the merkle proof of the new node's associated staking state + keypackage
  - responding node should verify both -- if correct, it'll generate `Welcome`, `Add` proposal, and `Commit`
  - requesting node should verify the response -- if incorrect, start again (e.g. with a different external node TDBE on the list)
- construct council or community node join request TX payload -- get it signed by the node operator
- submit council or community node join request TX
- if accepted in a block, a node can start to operate
(as Commit with Add-only proposal does not need to fill paths -- no need to wait for NACK timeout)
-> requesting node's TDBE can apply `Welcome` to update its state
+ mark the block where node join tx was committed as the "fetched up to" block
and obtain old transaction data (if any)
- if not accepted (e.g. there was another `Commit` in the meantime) restart the procedure

TODO: fetch keypackages/leaf nodes? https://github.com/mlswg/mls-protocol/issues/344

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

#### How to obtain the list of all the transactions using tendermint light client?

To obtain all the changes in UTXO set from `last_block_height` of current node to `current_block_height` on remote node
using tendermint light client, we use strategy similar to the one used in `client-core` for synchronizing the client.

- Using `LightClient::verify_to_highest()`, retrieve `current_block_height`, `app_hash` and `block_hash` (of last block)
  of remote node.
- Split the block heights into a list of smaller chunks (`chunk_size` can be configurable), starting from
  `last_block_height` of current node uptil `current_block_height` received from light client, and for each `chunk` of
  `block_height`s:
  - Call `block` and `block_results` on remote node's tendermint RPC for each chunk. For each `block` and
    `block_results` in the response:
    - Extract all the valid `Transfer` and `Withdraw` `transaction_id`s from `block_results` using code similar to
      [this](https://github.com/crypto-com/chain/blob/8de5e08ffc6176f7ef2e726a3db1f53e783c461d/client-common/src/tendermint/types/block_results.rs#L37).
    - Verify the root of the merkle tree of `transaction_id`s with the `app_hash` returned in `block` response. See the
      note below for changes in `app_hash` computation.
  - For all the `transaction_id`s in a `chunk`, establish an enclave-to-enclave mutually attested TLS stream with remote
    TDBE server and fetch transaction data by sending [`GetTransactionsWithOutputs`](https://github.com/crypto-com/chain/blob/8de5e08ffc6176f7ef2e726a3db1f53e783c461d/enclave-protocol/src/tdbe_protocol.rs#L11)
    request.
- After fetching and processing all the chunks, it should verify the `app_hash` and `block_hash` of last block received
  with the one received in light client response.

:::tip Note:
`app_hash` should be modified to contain root of merkle tree of `transaction_id`s for verifying each block. The new
`app_hash` format is `"<merkle root of valid transaction IDs (32 bytes)><current way to compute app_hash (32 bytes)>"`.
After this change, `app_hash` will become 64 bytes long. To see the current way to compute `app_hash` refer
[here](https://github.com/crypto-com/chain/blob/6a3233ebeae615ad0198308819a1d221c1741cd4/chain-core/src/lib.rs#L42).
:::

## Sealing / recovering
on genesis or when the (add/update) request is committed,
TDBE should seal its init key + credential + "trusted anchor" parts (app hash components, validator identities... block number)
with app hash (or some state fingerprint?) as AAD.

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
  expired. (as there are consensus related rules -- e.g. when to remove nodes with expired keypackages whose TDBE failed
  to submit `Update` in time; when/how often `Update` can be submitted -- it probably should be a consensus parameter)

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
  // KeyPackage
  Genesis(Vec<u8>),
  NodeJoin {
    add: Vec<u8>, // MLSPlaintext -- Add
    commit: Vec<u8> // MLSPlaintext -- Commit
}
```
TODO: extra rules for CouncilNode -> CommunityNode (needs to unbond / become inactive first?)

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
After 1/3 of keypackage's lifetime is over, TDBE is allowed to generate and broadcast `SelfUpdateProposal`

-- it may happen that there's another committed `SelfUpdateProposal` (from a different sender) or `CommitRemoveTx`,
which makes TDBE's original `SelfUpdateProposal` -- in which case, it should re-generate and retry.

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
