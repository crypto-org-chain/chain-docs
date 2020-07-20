# Staking and Council Node

Crypto.com Chain is based on Tendermint Core's consensus engine, it relies on a set of validators (Council Node) to participate in the proof of stake (PoS) consensus protocol, and they are responsible for committing new blocks in the blockchain.

## Staked state / Account

StakedState is a data structure that holds state about staking:

```
pub struct StakedState {
    pub nonce: Nonce,    /// "from" operations counter
    pub bonded: Coin,    /// bonded amount used to determine voting power
    pub unbonded: Coin,    /// amount unbonded for future withdrawal
    pub unbonded_from: Timespec,    /// time when unbonded amount can be withdrawn
    pub address: StakedStateAddress,    /// the address used (to check transaction witness against)
    pub validator: Option<Validator>,    /// validator metadata
    pub last_slash: Option<SlashRecord>,    /// record the last slash only for query
}
```

TODO: should it have a minimum bonded amount?

## Council Node

Council Node is a data structure that holds state about a node responsible for transaction validation:

```
pub struct CouncilNode {
    pub name: ValidatorName,    /// validator name / moniker (just for reference / human use)
    pub security_contact: ValidatorSecurityContact,    /// optional security@... email address
    pub consensus_pubkey: TendermintValidatorPubKey,    /// Tendermint consensus validator-associated public key
    /// X.509 credential payload for MLS (https://tools.ietf.org/html/draft-ietf-mls-protocol-09)
    /// (expected that attestation payload will be a part of the cert extension, as done in TLS)
    pub confidential_init: ConfidentialInit,
}
```

### EFFECTIVE_MIN_STAKE

Effective minimum stake (`EFFECTIVE_MIN_STAKE`) is defined as follows at any time:

1. if the number of validators has not reached `MAX_VALIDATORS`, it is `COUNCIL_NODE_MIN_STAKE` (the network parameter)
1. if the number of validators has reached `MAX_VALIDATORS`, it is equal to the lowest bonded amount of the staked states of the current validators plus 1.0 Coin.

### Joining the network

Anyone who wishes to become a council node can submit a NodeJoinTx; this transaction is considered to be valid as long as:

1. The associated staking account has `bonded` amount >= `EFFECTIVE_MIN_STAKE` and is not [punished](#punishments);
1. There is no other validator with the same `staking_address` or the `consensus_pubkey`

### Leaving the network

Anyone who wishes to leave the network, provided their associated staked state does not have any punishments, can submit UnbondStakeTx with the amount that will reduce the `bonded` amount to be lower than `COUNCIL_NODE_MIN_STAKE`.

#### Voting power and proposer selection

At the beginning of each round, a council node will be chosen deterministically to be the block proposer.

The chance of being a proposer is directly proportional to their _voting power_ at that time, which, in general, is equal to the `bonded` amount (rounded to the whole unit) in the associated staking address of the council node.

The top `MAX_VALIDATORS` with the most `bonded` amount would put to the _active_ validator set in `END_BLOCK`. If a validator's `bonded` amount is below the top `MAX_VALIDATORS`, It will be considered as _non-active_ and would not be able to take part in the consensus. For example,

- If the number of _active_ validators < `MAX_VALIDATORS`:

  |                          | `bonded` amount < `COUNCIL_NODE_MIN_STAKE` | `bonded` amount => `COUNCIL_NODE_MIN_STAKE` |
  | ------------------------ | ------------------------------------------ | ------------------------------------------- |
  | Validator's voting power | Set to 0                                   | Set to the `bonded` amount                  |

- On the other hand, If the number of _active_ validators = `MAX_VALIDATORS`:

  |                          | `bonded` amount is below the top `MAX_VALIDATORS` | Otherwise                  |
  | ------------------------ | ------------------------------------------------- | -------------------------- |
  | Validator's voting power | Set to 0                                          | Set to the `bonded` amount |

### Removed validators / council nodes

A Validator is removed when its voting power is set to 0.
This can happen in the following scenarios:

1. The Validator is being punished for infraction(s).
1. Its operator submitted UnbondStakeTx with sufficient stake to leave the network.
1. When the `bonded` amount <= `EFFECTIVE_MIN_STAKE`

When this happens, the following metadata is cleaned up as follows:

- its associated reward tracking-related data is cleared:
  - (a) immediately (_if the validator is being punished_)
  - (b) in the block that triggers next reward distribution (_otherwise_)
- its liveness tracking information is cleared in the block when this occurs
- its slashing related information (mapping Tendermint address / pubkey => staked state address) is scheduled to be cleared in a block after the current block time + `MAX_EVIDENCE_AGE` (`SLASH_MAP_DELETE`)

Note this inequality must be checked in network parameters: UNBOND_PERIOD >= JAIL_DURATION >= MAX_EVIDENCE_AGE

If the validator wishes to re-join the validator set, they can (unjail if necessary and) submit a NodeJoinTx (see the Joining the Network section).

If the NodeJoinTx transaction is valid AND this happens before `SLASH_MAP_DELETE` AND the consensus pubkey (or associated Tendermint address) from NodeJoinTx transaction is the same, the previous slashing information is preserved (i.e. the "delete schedule" is cancelled).

If the NodeJoinTx transaction is valid AND this happens before next reward distribution AND the consensus pubkey from NodeJoinTx transaction is different, the associated staked state is then rewarded for interactions with both consensus pubkeys (as reward tracking is per staked state).

### Validators / Council Nodes

Each `BeginBlock` contains two fields that will determine penalties:

- LastCommitInfo: this contains information which validators signed the last block
- ByzantineValidators: evidence of validators that acted maliciously

Their processing is the following:

```
FIXME: this looks out of date?

for each evidence in ByzantineValidators:
    if evidence.Timestamp >= BeginBlock.Timestamp - MAX_EVIDENCE_AGE:
        account = (... get corresponding account ...)
        if account.slashing_period.end is set and it's before BeginBlock.Timestamp:
            account.slashing_period.slashed_ratio = max(account.slashing_period.slashed_ratio, BYZANTINE_SLASH_RATIO)
        else:
            if account.slashing_period.end is set and it's after BeginBlock.Timestamp:
                END/COMMIT_BLOCK_STATE_UPDATE(deduct(slashing_period, account))

            account.slashing_period = Some(SlashingPeriod(start = Some(BeginBlock.Timestamp),
                end = Some(BeginBlock.Timestamp + SLASHING_PERIOD_DURATION, slashed_ratio = BYZANTINE_SLASH_RATIO)))
            account.jailed_until = Some(BeginBlock.Timestamp + JAIL_DURATION)


for each signer in LastCommitInfo:
    council_node = (... lookup by signer / tendermint validator key ...)
    update(council_node, BLOCK_SIGNING_WINDOW)

for each council_node:
    missed_blocks = get_missed_signed_blocks(council_node)
    if missed_blocks / BLOCK_SIGNING_WINDOW >= MISSED_BLOCK_THRESHOLD:
        account = (... lookup corresponding account ...)
        if account.slashing_period.end is set and it's before BeginBlock.Timestamp:
            account.slashing_period.slashed_ratio = max(account.slashing_period.slashed_ratio, LIVENESS_SLASH_RATIO)
        else:
            if account.slashing_period.end is set and it's after BeginBlock.Timestamp:
                END/COMMIT_BLOCK_STATE_UPDATE(deduct(slashing_period, account))

            account.slashing_period = Some(SlashingPeriod(start = Some(BeginBlock.Timestamp),
                end = Some(BeginBlock.Timestamp + SLASHING_PERIOD_DURATION, slashed_ratio = LIVENESS_SLASH_RATIO)))
            account.jailed_until = Some(BeginBlock.Timestamp + JAIL_DURATION)
```

### “Global state” / APP_HASH

Tendermint expects a single compact value, `APP_HASH`, after each BlockCommit that represents the state of the application. In the early Chain prototype, this was constructed as a root of a Merkle tree from IDs of valid transactions.

In this staking scenario, some form of “chimeric ledger” needs to be employed, as staking-related functionality is represented with accounts. In Ethereum, [Merkle Patricia Trees](https://github.com/ethereum/wiki/wiki/Design-Rationale#merkle-patricia-trees) are used: (The [alternative](https://github.com/tendermint/iavl) in Tendermint: depends on the order of transactions though)

They could possibly be used to represent an UTXO set: https://medium.com/codechain/codechains-merkleized-utxo-set-c76c9376fd4f

The overall “global state” then consists of the following items:

- UTXO set
- Account
- RewardsPool
- CouncilNode

So each component could possibly be represented as MPT and these MPTs would then be combined together to form a single `APP_HASH`.

### END/COMMIT_BLOCK_STATE_UPDATE

FIXME: scheduling slashing cleanup

Besides committing all the relevant changes and computing the resulting `APP_HASH` in `BlockCommit`; for all changes in _Accounts_, the implementation needs to signal `ValidatorUpdate` in `EndBlock`.

For example, when the number of _active validators_ is less then `MAX_VALIDATORS`:

- When the changes are relevant to the `bonded` amount of the council node’s staking address and the validator is not jailed:

  - If the `bonded` amount changes and < `COUNCIL_NODE_MIN_STAKE`, then the validator’s voting power should be set to 0;
  - If the `bonded` amount changes and >= `COUNCIL_NODE_MIN_STAKE`, then the validator’s voting power should be set to that amount (rounded to the whole unit).

- When the changes are relevant to the jailing condition of the council node’s staking address:

  - If the `jailed_until` changes to `Some(...)` (i.e. the node is being _jailed)_, then the validator’s power should be set to 0;
  - If the `jailed_until` changes to `None` (i.e. the node was _un-jailed_) and `bonded` amount >= `COUNCIL_NODE_MIN_STAKE`, then the validator’s power should be set to the `bonded` amount (rounded to the whole unit).


    It can be summarized in the following table:
    |    |   `bonded` <  `COUNCIL_NODE_MIN_STAKE` |  `bonded` >=  `COUNCIL_NODE_MIN_STAKE` but *Jailed* | `bonded` >=  `COUNCIL_NODE_MIN_STAKE` and *NOT jailed* |
    |----|---|---|---|---|
    |Validator's voting power| Set to 0 | Set to 0| Set to the `bonded` amount|

On the other hand, If the number of the current _active_ validators is equal to `MAX_VALIDATORS`, the validator's voting power will also be depended on whether its `bonded` amount is at the top `MAX_VALIDATORS`, please refer to the [previous section](#voting-power-and-proposer-selection)

### InitChain

The initial prototype’s configuration will need to contain the following elements:

- [Network parameters](./network-parameters.md)
- ERC20 snapshot state / holder mapping `initial_holders`:
  `Vec<(address: RedeemAddress, is_contract: bool, amount: Coin)>` (or `Map<RedeemAddress, (bool, Coin)>`)
- Network long-term incentive address: `nlt_address`
- Secondary distribution and launch incentive addresses: `dist_address1`, `dist_address2`
- Initial validators: `Vec<CouncilNode>`
- Bootstrap nodes / initially bonded: `Vec<RedeemAddress>`

The validation of the configuration is the following:

1. validate parameters format (e.g. CUSTOMER_ACQUIRER_SHARE + MERCHANT_ACQUIRER_SHARE + COUNCIL_NODE_SHARE = 1.0)
2. check that sum of amounts in `initial_holders` == MAX_COIN (network constant)
3. check there are no duplicate addresses (if Vec) in `initial_holders`
4. for each `council_node` in `Vec<CouncilNode>`: check `staking_address` is in `initial_holders` and the amount >= `COUNCIL_NODE_MIN_STAKE`
5. for each `address` in initially bonded `Vec<RedeemAddress>`: check `address` is `initial_holders` and the amount >= `COMMUNITY_NODE_MIN_STAKE`
6. size(Validators in InitChainRequest) == size(`Vec<CouncilNode>`) and for every CouncilNode, its `consensus_pubkey` appears in Validators and power in Validators corresponds to staking address’ amount

If valid, the genesis state is then initialized as follows:

1. initialize RewardsPool’s amount with amounts corresponding to: `nlt_address` + `dist_address1` + `dist_address2`
2. for every council node, create a `CouncilNode` structure
3. for every council node’s staking address and every address in initially bonded: create `Account` where all of the corresponding amount is set as `bonded`
4. for every address in `initial_holders` except for `nlt_address`, `dist_address1`, `dist_address2`, council nodes’ staking addresses, initially bonded addresses: if `is_contract` then add the amount to RewardsPool else create `Account` where the amount is all in `unbonded` and `unbonded_from` is set to genesis block’s time (in InitChain)
