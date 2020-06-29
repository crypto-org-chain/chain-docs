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
- submit council or community node join request TX
- if valid, wait until CommitChangeTx is committed with Welcome payload
- mark the block where this CommitChangeTx is committed as the "fetched up to" block
and obtain old transaction data

TODO: fetch keypackages/leaf nodes? https://github.com/mlswg/mls-protocol/issues/344

### Obtaining old transaction data
When a node is started up (before tendermint consensus syncing etc.), it should be provided
"genesis-skip" (in the case it's one of nodes starting at genesis)
or one or more connection strings
that would proxy to some public full node RPC.

Via the Tendermint light-client-verifying connection, it should obtain the list of 
needed transaction IDs (of withdrawal and transfer transactions):

- full node / historical querying: all IDs between its last processed block and the last block on the remote node
- validator: new IDs in the "UTXO set diff" between its last processed block and the last block on the remote node
(TODO: https://github.com/crypto-com/chain/issues/794 ; initial implementation here can start with just "all IDs" for both)

From remote node RPC, it should also learn its TDBE connection details
and then initiate enclave-to-enclave mutually attested TLS: TODO https://github.com/crypto-com/chain/issues/1549
and fetch the needed transaction payloads and seal them for its host.

TODO: handling in abci -- options (probably start with option 1):
1. record the "fetched up to" block;
report to TM still the last processed block
and run normal TM block-by-block syncing and skip tx-validation-enclave until the "fetched up to" block
2. TM 0.34+ -- run state-sync for jellyfish merkle / staking state https://docs.tendermint.com/master/spec/abci/apps.html#state-sync
and resume from the "fetched up to" block?

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
- community node minimal required stake
- mls handshake commit timeout
- mls handshake message NACK timeout
- slash rate for invalid commits?
- keypackage expiration time (as there are consensus-related rules -- 
e.g. when to remove nodes with expired keypackages whose TDBE failed to submit update in time;
when/how often update can be submitted -- it probably should be a consensus parameter)

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
  CommitChange
  SelfUpdateProposal
  MsgNack
```

NodeJoin is extended that instead of taking `CouncilNode`, it'd take `NodeMetadata` which is enum
with council node and community node variants.
TODO: extra rules for CouncilNode -> CommunityNode (needs to unbond / become inactive first?)

#### Handshake transactions
internal `Vec<u8>` payloads are expected to be encoded in the TLS standard binary encodings
(TODO: 
[the draft MLS architecture doc](https://github.com/mlswg/mls-architecture/blob/master/draft-ietf-mls-architecture.md):
> In addition, it does not specify a complete wire encoding, but rather a set of abstract data structures which can then be mapped onto a variety of concrete encodings, such as TLS {{?RFC8446}}, CBOR {{?RFC7049}}, and JSON {{?RFC7159}}.

Besides X.509 (to reuse TLS RA stuff) identities in keypackages, we may potentially switch to SCALE to keep it simpler;
TLS wire format is mainly interesting for test-vectors / unit tests, but the protocol draft is too in flux at the moment.
).

```rust
pub struct CommitChangeTx {
    messages: Vec<Vec<u8>>, // MLSPlaintext -- any proposals (Add or Remove), the last one is assumed to be Commit
    welcome: Option<Vec<u8>>, // Welcome -- if there are any Add proposals, there should be a welcome with encrypted paths/epochs for new joiners
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
    nack: Vec<u8>, // msg ref + `zz` + DLEQ proof -- TBD: https://github.com/mlswg/mls-protocol/issues/21#issuecomment-455392023
}
```

(TODO: `CommitChangeTx` / `SelfUpdateProposal` may need to contain Schnorr NIZK of knowledge (RFC 8235)
for encrypted parts (`Welcome`, `DirectPathNode`...))

##### TDBE handling / generation
TDBE runs as a standalone enclave which includes TM light client and reacts to information received from it.
For fetched transactions with MLS handshake messages, it should verify they are valid (i.e. their TXID is a leaf in the Merkle tree
of valid transactions in a particular block).
It opens mutually attested TLS connection to tx-validation enclave (TVE) for pushing exported obfuscation keys.

###### Commits
When a block is committed with nodejoin, unbond or punishment events (liveness/byzantine issues, bue also including expired keypackages), 
Node's TDBE corresponding to the leftmost non-empty leaf should generate and broadcast `CommitChangeTx` with proposals reflecting the triggering block's change (Add/Remove).

[[ TODO: instead of leftmost non-empty leaf, start with `triggering block time ``mod`` leaf_count` closest non-empty to the right circulating to 0 ? ]]

(It should use the triggering block's number as AAD.)
If there are only Add proposals (post-genesis/group creation), populating the path can be omitted.

If CommitChangeTx is not received in a block with time less the triggering block's time + timeout,
OR received CommitChangeTx was invalid;

node's TDBE corresponding to the next leftmost non-empty leaf should generate and broadcast `CommitChangeTx` -- it should include
a Remove proposal for the previous node(s) (that failed to submit in time or submitted invalid `CommitChangeTx`;
it should be indicated in timeout-committed block
);
and include any additional proposals (if any) since the original triggering block;
(it should take the latest "timeout" block's number as AAD.)

Commit (in `CommitChangeTx` / `SelfUpdateProposal`) should be applied after NACK timeout.

###### NACK
If the receiver of the `HPKECiphertext` (Welcome message or DirectPath) cannot process it
/ it fails (e.g. the encrypted secret does not match the outside public key),
they generate and broadcast a message that
reveals `dh` value and provides a proof `DLEQ(dh/kem_output == node_hpke_public_key/group_point)`
(ref: https://blog.cloudflare.com/privacy-pass-the-math/).

If NACK is valid and submitted in time, the Commit-containing message should be considered as invalid
(even though the corresponding TX was assumed as valid before) -- the punishment logic should be applied
to the related message submitter;
the next node's TDBE (next non-empty leaf) should generate and broadcast `CommitChangeTx` 
and include Remove proposals as with the "commit timeout" case.

###### Updates
After 1/3 of keypackage's lifetime is over, TDBE is allowed to generate and broadcast `SelfUpdateProposal`

-- it may happen that there's another committed `SelfUpdateProposal` (from a different sender) or `CommitChangeTx`,
which makes TDBE's original `SelfUpdateProposal` -- in which case, it should re-generate and retry.

###### new obfuscation key
Once the Commit is applied (or state is reconstructed from Welcome), TDBE should generate a new obfuscation key as:

```
new_key = MLS-Exporter(
    Label="Crypto.com Chain tx validation " + block number where CommitChangeTx is included,
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
- to keep track if valid `CommitChangeTx` was received in time -- invalid one receive similar treatment as byzantine faults (removal from validator set if a validator + slash)
- to keep track if valid `NACK` was received after a "valid" `CommitChangeTx` -- NACK invalidating `CommitChangeTx` should treat the `CommitChangeTx` similar to byzantine faults
- after `CommitChangeTx` -- after block commit and NACK timeout, enquire TVE if it was pushed a new key;
if not, it is a local node problem (e.g. no running TDBE) -- TODO: block consensus state machine or shutdown?

[[ OPEN ISSUE: 
https://github.com/mlswg/mls-protocol/issues/21

update the NACK solution here with the official one when it is drafted in the protocol spec
]]