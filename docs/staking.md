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
    pub jailed: bool, // has the account been jailed in slashing-related logic?
    pub slash_ratio: Decimal, // increases each time the account is slashed in slashing-related logic    
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

Transaction payloads with UTXOs (`TransferTX`, `DepositStakeTx` and `WithdrawUnbondedTx`) where inputs and/or outputs aren't visible (are only visible to participants and validators) will be augmented, so that transaction data contains the fee amount and the validation will check:
```
sum(inputs amounts) or account.unbonded == sum(outputs amounts) + fee
```
The whole transaction structure (the whole encrypted payload) will be wrapped / enveloped as something like:
```
TxWrap(tx_payload: ..., txid: TxId, originator_sig: RecoverableSignature)
```
Where `originator_sig` is a signature of the original broadcasting node (acquirer or community) on the transaction:

1. CheckTX: an `originator_address` is derived from the signature and signature is verified

2. DeliverTX / BlockCommit: if the transaction is valid && `originator_address.jailed` is false && `slash_ratio > 0` && `originator_address.bonded >= COMMUNITY_NODE_MIN_STAKE` && `originator_address` is not a validator/councilnode's staking_address, then `END/COMMIT_BLOCK_STATE_UPDATE(originator_address.bonded += fee; originator_address.nonce += 1)` 

3. otherwise, the transaction isn't considered valid (even if it's valid without the originator) and slashing logic for non-validator nodes is triggered.

For `UnbondStakeTx`, the fee goes to the rewards pool.

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

The initial prototype will have a `DAILY_DISTRIBUTION_AMOUNT` network parameter; later on, it should take be a function that takes a target emission rate, total remaining amount etc. as parameters.

### Distribution
The UTXO-based TX wrapping structure will be augmented as follows:
```
TxWrap(tx_payload: ..., txid: TxId, originator_sig: RecoverableSignature, recipient_sig: Option<RecoverableSignature>)
``` 

where recipient_sig is an optional signature of the receiving merchant acquirer.

Each validator will maintain three structures (perhaps persistent / on-disk): `day_claim_council_node: Map<RedeemAddress, BlockCount>`, `day_claim_merchant_acquirer: Set<RedeemAddress>`, `day_claim_customer_acquirer: Set<RedeemAddress>`

1. CheckTX: if recipient_sig is present, verify it and derive the address from it: merchant_acquirer_address
2. DeliveryTX additional checks: `merchant_acquirer_address.jailed` is false && `slash_ratio == 0`
&& `merchant_acquirer_address` is a merchant_acquirer 
&& `merchant_acquirer_address.bonded >= <merchant_id_count> * PER_MERCHANT_MIN_STAKE`
&& `merchant_acquirer_address` is not a validator/councilnode's staking_address
3. BlockCommit: for each valid TX:
* if `originator_address` is a customer acquirer address (check `originator_address.bonded >= CUSTOMER_ACQUIRER_NODE_MIN_STAKE` && `originator_address` is not a validator/councilnode's staking_address), add it to `day_claim_merchant_acquirer`
* if `merchant_acquirer_address` is a merchant acquirer staking_address, add it to `day_claim_customer_acquirer`

Where `PER_MERCHANT_MIN_STAKE` and `CUSTOMER_ACQUIRER_NODE_MIN_STAKE` are network parameters.
The actual distribution then happens once in a while in BeginBlock, here's a pseudo code:
```
for each validator in BeginBlock.LastCommitInfo:
    lookup validator's staking_address
    if day_claim_council_node[validator_day_claim_council_node] is Nil:
        day_claim_council_node[validator_day_claim_council_node] = 0
    day_claim_council_node[validator_day_claim_council_node] += 1

for each node in day_claim_council_node, day_claim_merchant_acquirer, day_claim_customer_acquirer:
    if node.staking_address.jailed is true OR node.staking_address.bonded < <required amount> (CUSTOMER_ACQUIRER_NODE_MIN_STAKE OR CUSTOMER_ACQUIRER_NODE_MIN_STAKE OR COUNCIL_NODE_MIN_STAKE)
    OR slash_ratio > 0:
        remove node from claim set

if BeginBlock.time >= RewardsPool.last_update + 24 hours:
    amount = min(DAILY_DISTRIBUTION_AMOUNT, RewardsPool.total_remaining)
    validator_amount = COUNCIL_NODE_SHARE * amount
    customer_acquirer_amount = CUSTOMER_ACQUIRER_SHARE * amount
    merchant_acquirer_amount = MERCHANT_ACQUIRER_SHARE * amount

    for each node in day_claim_council_node, day_claim_merchant_acquirer, day_claim_customer_acquirer:
        node_share = compute_share((day_claim_council_node OR day_claim_merchant_acquirer OR day_claim_customer_acquirer), 
                    (validator_amount OR customer_acquirer_amount OR merchant_acquirer_amount) )
        END/COMMIT_BLOCK_STATE_UPDATE(node.staking_address.bonded += node_share; node.staking_address.nonce += 1)
        
    END/COMMIT_BLOCK_STATE_UPDATE(RewardsPool.total_remaining -= amount; RewardsPool.nonce += 1; RewardsPool.last_update = BeginBlock.time)
    day_claim_council_node = {}
    day_claim_merchant_acquirer = {}
    day_claim_customer_acquirer = {}
```

Where COUNCIL_NODE_SHARE, CUSTOMER_ACQUIRER_SHARE, MERCHANT_ACQUIRER_SHARE are network parameters and: COUNCIL_NODE_SHARE + CUSTOMER_ACQUIRER_SHARE + MERCHANT_ACQUIRER_SHARE = 1.0.

`compute_share` determines the amount for each claiming node; the initial prototype will compute it:
* council nodes: proportional to the signed block count (node block signatures / all block validators signatures)
* acquires: simple share? (1 / other claiming nodes)

NOTE: the draft technical whitepaper says these will be computed based on number of transaction processed (rather than signed blocks) in council nodes and transaction amount in acquirers (rather than simple share).
These terms may be revised in later drafts.

## Slashing
TODO

## "Global state" / APP_HASH
TODO

### network parameters
TODO

### END/COMMIT_BLOCK_STATE_UPDATE
TODO

### InitChain
TODO