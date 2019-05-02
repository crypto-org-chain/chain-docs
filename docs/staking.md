# Staking

This doc cointains the specification of the initial staking, slashing, fees and rewards mechanisms.

## Account
Account is a data structure that holds state about staking:

```
pub struct Account {
    pub nonce: usize, // transaction counter
    pub bonded: Coin, // bonded staked amount
    pub unbonded: Coin, // unbonded staked amount
    pub unbonded_from: Timespec, // when the unboded staked amount can be withdrawn
    pub address: RedeemAddress, // ETH-style address; TODO: extended address?
    pub jailed_until: Option<Timespec>, // has the account been jailed in slashing-related logic?
    pub slashed: Option<SlashingPeriod>, // how much is the account supposed to be slashed in slashing-related logic?
}
```

TODO: should it have a minimum bonded amount?

## Council Node
Council Node is a data structure that holds state about a node responsible for transaction validation and service node whitelist management:
```
pub struct CouncilNode {
    pub staking_address: RedeemAddress, // account with the required staked amount
    pub consensus_pubkey: crypto.PubKey, // Tendermint consensus validator-associated public key: note that Tendermint supports different signature schemes
    pub council_pubkey: PublicKey, // key for council node-related transaction types
    pub service_whitelist_pubkey: PublicKey, // key for service node whitelist-related transaction types
    pub nonce: usize, // update counter
}
```

## Service Node
Service Node is a data structure that holds state about a high responsibility node and its offered service:
```
pub struct ServiceNode {
    pub staking_address: RedeemAddress, // account with the required staked amount
    pub service_pubkey: PublicKey, // key for service node whitelist entry updates
    pub service_type: ServiceNodeType, // what service this node offers
    pub service_url: URL, // HTTPS endpoint of the provided service
    pub nonce: usize, // update counter
}
```

```
pub enum ServiceNodeType {
    CustomerAcquirer, // (optional) custodial multi-currency wallet provider
    MerchantAcquirer, // (optional) verified merchant ID management provider, payment gateway, merchant custodial currency risk management and per-agreement fiat settlements (most initial on-boarded merchants will most likely prefer to avoid volatility risks)
    SettlementAgent, // provides currency exchange service (e.g. via IBC and DEX)
}
```

As most of the functionality is meant to faciliate some actions outside Chain, the information is recorded in the flexible form of storing a URL pointing to HTTPS API. These API endpoints will either directly execute some action or return information required for the action to be executed (e.g. other protocol's details).

## Transaction Fee
The minimal transaction fee is defined according to the formula:

```
<BASE_AMOUNT> + <PER_BYTE> * size
```

`BASE_AMOUNT` and `PER_BYTE` are special network parameters in a fraction of CRO.
`size` is the serialized transaction data's size in bytes.

Basic (`TransferTX`, `DepositStakeTx`, `WithdrawUnbondedTx`, `UnbondStakeTx`,) transaction types need to check
```
sum(inputs amounts) or account.unbonded/bonded == sum(outputs amounts) + fee
```
The fee goes to the rewards pool.

For Advanced TX types (council node and service node state metadata management), the initial prototype will not require a fee.

## Rewards
The rewards pool is a data structure that stores the information about remaining funds:

```
pub struct RewardsPool {
    pub nonce: usize, // update counter
    pub total_remaining: Coin, // total available amount
    pub last_update: Timespec, // when was the pool last updated
}
```

The initial prototype will have a `DAILY_DISTRIBUTION_AMOUNT` network parameter; later on, it should be a function that takes a target emission rate, total remaining amount etc. as parameters.

### Distribution
Each validator will maintain this structures (perhaps persistent / on-disk): `day_claim_council_node: Map<CouncilNode, BlockCount>`

The actual distribution then happens once in a while in BeginBlock, here's a pseudo code:
```
for each validator in BeginBlock.LastCommitInfo:
    lookup validator's staking_address
    if day_claim_council_node[validator_day_claim_council_node] is Nil:
        day_claim_council_node[validator_day_claim_council_node] = 0
    day_claim_council_node[validator_day_claim_council_node] += 1

for each node in day_claim_council_node:
    if node.staking_address.jailed_until.is_some() OR node.staking_address.jailed_until.is_some() OR 
    node.slashed.is_some() OR
    node.staking_address.bonded < COUNCIL_NODE_MIN_STAKE:
        remove node from claim set

if BeginBlock.time >= RewardsPool.last_update + 24 hours:
    validator_amount = min(DAILY_DISTRIBUTION_AMOUNT, RewardsPool.total_remaining)

    for each node in day_claim_council_node:
        node_share = compute_share(node, day_claim_council_node, validator_amount)
        END/COMMIT_BLOCK_STATE_UPDATE(node.staking_address.bonded += node_share; node.staking_address.nonce += 1)
        
    END/COMMIT_BLOCK_STATE_UPDATE(RewardsPool.total_remaining -= amount; RewardsPool.nonce += 1; RewardsPool.last_update = BeginBlock.time)
    day_claim_council_node = {}
```

`compute_share` determines the amount for each claiming node; the initial prototype will compute it:
* council nodes: proportional to the signed block count (node block signatures / all block validators signatures)

NOTE: the draft technical whitepaper says there will be rewards for acquirer nodes.
These terms may be revised in later drafts.

## Slashing
This part describes functionality that aims to disincentivize network-observable actions, such as faulty validations, of participants with values at stake by penalizing/slashing them.
The penalties may include losing some amount of their stake (surrendered to the rewards pool), losing their ability to perform the network functionality for a period of time, collect rewards etc.

### Slashing period
Some of the faulty behavior may be non-malicious, e.g. due to misconfiguration. In order to mitigate the impact of these initially likely categories of faults, there is a concept of a 
*slashing period* whereby the penalty is capped. As penalties are specified in fixed decimal fractions of a stake, it is the highest fraction.
In other words, in a given period, a violator is punished for the worst violation rather than losing all stake.

Even with this "more tolerant" punishment setup, it will still be quite expensive and desirable to avoid. 
Note that this setup *must* be accompanied by immediate jailing / limiting the violater's network ability.

This is a sketched out additional data structure to keep track of (a part of Account):

```
pub struct SlashingPeriod { 
    pub start: Timespec, // when the period started,
    pub end: Timespec, // when the period ended, 
    pub slashed_ratio: Decimal, // fixed decimal; cumulative so far slashed fraction; 0.0 initially 
}
```

### Unjail
When the previous violator wishes to resume the functionality, the node operator can send a signed `UnjailTx`. Its validation logic is the following:

```
block_time = (... from beginblock ...)
account = (...lookup / recover from signature...)
if account not found:
    return invalid("account not found")

if account.jailed_until.is_none():
    return invalid("account not jailed")

if nonce != account.nonce + 1:
    return invalid("invalid nonce")

if block_time < account.jailed_until.unwrap() || (account.slashed.is_some() && account.slashed.end > block_time):
    return invalid("account still jailed")

if !check_signature(txid):
    return invalid("invalid signature")

END/COMMIT_BLOCK_STATE_UPDATE(deduct(account); account.jailed = None)
```

TODO: auto-unjailing?

### Tracking

#### validators / council nodes
Each BeginBlock contains two fields that will determine penalties:

* LastCommitInfo: this contains information which validators signed the last block
* ByzantineValidators: evidence of validators that acted maliciously

Their processing is the following:
```
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

## "Global state" / APP_HASH

Tendermint expects a single compact value, `APP_HASH`, after each BlockCommit that represents the state of the application.
In the early Chain prototype, this was constructed as a root of a Merkle tree from IDs of valid transactions.

In this staking scenario, some form of "chimeric ledger" needs to be employed, as staking-related functionality is represented with accounts. In Eth, Merkle Patricia Trees are used: https://github.com/ethereum/wiki/wiki/Design-Rationale#merkle-patricia-trees (The alternative in TM: https://github.com/tendermint/iavl depends on the order of transactions though)

They could possibly be used to represent an UTXO set: https://medium.com/codechain/codechains-merkleized-utxo-set-c76c9376fd4f

The overall "global state" then consists of the following items:

* UTXO set
* Account
* RewardsPool
* CouncilNode
* ServiceNode
* MerchantWhitelist (not yet spec-out / TODO)

So each component could possibly be represented as MPT and these MPTs would then be combined together to form a single `APP_HASH`.

### network parameters

This section aims to collect all the mentioned network parameters:

* `BASE_AMOUNT` 
* `PER_BYTE`
* `COMMUNITY_NODE_MIN_STAKE`
* `DAILY_DISTRIBUTION_AMOUNT` 
* `PER_MERCHANT_MIN_STAKE` 
* `CUSTOMER_ACQUIRER_NODE_MIN_STAKE`
* `COUNCIL_NODE_MIN_STAKE`
* `MAX_EVIDENCE_AGE` (note that currently in EvidenceParams of ABCI, there's MaxAge set in the number of blocks, but here we assume time)
* `SLASHING_PERIOD_DURATION`
* `JAIL_DURATION`
* `BLOCK_SIGNING_WINDOW`
* `MISSED_BLOCK_THRESHOLD`
* `BYZANTINE_SLASH_RATIO`
* `LIVENESS_SLASH_RATIO`

TODO: TX that can change them?

### END/COMMIT_BLOCK_STATE_UPDATE
Besides committing all the relevant changes and computing the resulting `APP_HASH` in BlockCommit;
for all changes in Accounts, the implementation needs to signal `ValidatorUpdate` in EndBlock if the change is relevant to the council node's staking address:

* if the `bonded` amount changes and >= `COUNCIL_NODE_MIN_STAKE`, then the validator's power should be set to that amount
* if the `bonded` amount changes and < `COUNCIL_NODE_MIN_STAKE`, then the validator's power should be set 0
* if the `jailed_until` changes to `Some(...)`, then the validator's power should be set 0
* if the `jailed_until` changes to `None` (unjailtx or auto?) and `bonded` amount >= `COUNCIL_NODE_MIN_STAKE`, then the validator's power should be set to the `bonded` amount

### InitChain
The initial prototype's configuration will need to contain the following elements:

* Above network parameters
* ERC20 snapshot state / holder mapping `initial_holders`: `Vec<(address: RedeemAddress, is_contract: bool, amount: Coin)>` (or `Map<RedeemAddress, (bool, Coin)>`)
* Network long-term incentive address: `nlt_address`
* Secondary distribution and launch incentive addresses: `dist_address1`, `dist_address2`
* initial validators: `Vec<CouncilNode>`
* bootstrap nodes / initially bonded: `Vec<RedeemAddress>`

The validation of the configuration is the following:

0. validate parameters format (e.g. CUSTOMER_ACQUIRER_SHARE + MERCHANT_ACQUIRER_SHARE + COUNCIL_NODE_SHARE = 1.0)
1. check that sum of amounts in `initial_holders` == MAX_COIN (network constant)
2. check there are no duplicate addresss (if Vec) in  `initial_holders`
3. for each `council_node` in `Vec<CouncilNode>`: check `staking_address` is in `initial_holders` and the amount >= `COUNCIL_NODE_MIN_STAKE`
4. for each`address` in initially bonded  `Vec<RedeemAddress>`: check `address` is `initial_holders` and the amount >= `COMMUNITY_NODE_MIN_STAKE`
5. size(Validators in InitChainRequest) == size(`Vec<CouncilNode>`) and for every CouncilNode, its `consensus_pubkey` appears in Validators and power in Validators corresponds to staking address' amount

If valid, the genesis state is then initialized as follows:

0. initialize RewardsPool's amount with amounts corresponding to: `nlt_address` +  `dist_address1` + `dist_address2`
1. for every council node, create a `CouncilNode` structure
2. for every council node's staking address and every address in initially bonded: create `Account` where all of the corresponding amount is set as `bonded`
3. for every address in `initial_holders` except for `nlt_address`,  `dist_address1`, `dist_address2`, council nodes' staking addresses, initially bonded addresses: if `is_contract` then add the amount to RewardsPool else create `Account` where the amount is all in `unbonded` and `unbonded_from` is set to genesis block's time (in InitCHain)
