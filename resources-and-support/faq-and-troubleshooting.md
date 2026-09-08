# 🐞 FAQ & TroubleShooting

### The difference among Cronos POS and Cronos EVM

The Cronos ecosystem is now multi-chain across several networks in order to support a broad range of user needs and use cases:

* Cronos POS chain is the layer-0 network that guarantees the security of the Cronos ecosystem. It is a public, open-source and permissionless chain with high speed and low fees, designed to help drive mass adoption of blockchain technology through use cases like Payments and NFTs. The network is supported by world-class ecosystem partners including Crypto.com, Ledger, and Coinbase, and is maintained by over 100 active validators with a multi-year track record of secure and reliable performance. It also serves as the native issuer of the $CRO utility token.
* Cronos EVM chain is the leading Ethereum-compatible network built on the Cosmos SDK, permissionless, programmable layer-1, home to more than 500 project teams who have created decentralized applications powered by smart contracts. Cronos EVM is extendable, thanks to application-specific optimistic layer-2 blockchains that can be deployed on top of Cronos by app creators. It remains the preferred network for community-based use cases around Web3 games and NFTs.

### Cronos POS Chain

#### What is the consensus algorithm used by Cronos POS Chain?

We adopt Tendermint Core as the consensus engine of the Cronos POS Chain. Tendermint is one of the most mature Byzantine-fault tolerant (BFT) consensus engines for building Proof-of-stake (PoS) systems.

#### What are the rewards for staking CRO?

The staking APR (Annual Percentage Rate) is dynamic and may fluctuate based on network conditions such as the total amount staked and validator commission rates. You can check the latest APR on [Mintscan](https://www.mintscan.io/crypto-org), which reflects the real-time return rate for stakers, as of now, it's approximately 7%. Rewards are generated every block, so stakers begin earning continuously once their CRO is delegated. In addition to these rewards, validators may earn commission from their delegators, which is set individually by each validator.

#### How should I stake my CRO?

CRO can be staked directly on the Cronos POS Chain using wallets like the [Crypto.com Onchain Wallet](https://crypto.com/en/defi/wallet/) to perform CRO staking.The [Base Delegation Guide](../for-users/tokenomics-and-inflation/base-delegation-guide.md) is designed to provide you with clear instructions for managing your CRO stakes across different platforms.

#### Where can I check the details about validators?

For information about validators, use the [Cronos POS explorer](https://cronos-pos.org/explorer/validators). The explorer's search feature lets you look up any validator by entering a block, transaction, account, or validator address. Users can also refer to some 3rd parties explorer like [Mintscan](https://www.mintscan.io/crypto-org/validators), [Validator.info](https://validator.info/cronos-pos) and [Defier](https://defier.net/) for the insight about validators.

#### Can I choose the validator to delegate my tokens?

Yes, you can choose your preferred validator when staking CRO tokens using the the Crypto.com DeFi Wallet mobile app. This allows you to delegate to validators based on your preferences for performance, commission rate, or other factors.

#### Is there a limited number of validators?

Yes, there's a cap on "active" validators. The mainnet supports a maximum of 100 active validators, with only the top 100 validators ranked by total staking amount qualifying as "active" and eligible to earn rewards.

#### What is the minimum staking required to be a validator?

There is no minimum stake amount to delegate, and you can always start with 1 CRO.

#### What is the requirement for being a validator?

For Cronos POS mainnet, you will need a machine with the following minimum requirements to run different types of nodes: Archive Node (setting pruning = nothing)

* RAM: 64GB (Rocksdb)
* Disk: 5.9TB
* CPU: 4 cores

Default Full Node (setting pruning = default)

* RAM: 64GB (Rocksdb) or 16GB (goleveldb)
* Disk: 1.5TB (From quick sync)
* CPU: 4 cores

Pruned Node (setting pruning = everything)

* RAM: 64GB (Rocksdb) or 16GB (goleveldb)
* Disk: 15GB (From Publicnode)
* CPU: 4 cores

Refer to [this page](../for-node-hosts/getting-started/mainnet/#prepare-your-machine) for the latest details.

#### What is the benefit of being the top 100 validator node?

The top 100 validators are considered to be "Active" and earn rewards.

#### What is the difference between a full node, a validator, and a state-sync node?

A full node maintains the complete transaction history of the blockchain. Running a full node gives you access to all historical chain data but requires substantial storage space due to the comprehensive database. A validator node is a specialized node that verifies transactions and signs blocks. Validators play a critical role in network security by validating new transactions before they're added to the blockchain. A state-sync node uses state synchronization to quickly sync with the network without downloading the entire blockchain history. This type of node doesn't store the full blockchain database, making it more storage-efficient while still allowing participation in the network.

#### What is the difference between a full node and a sentry node?

They are similar, while a sentry node has one or more private peers, and these peers may be validators or other full nodes in the network. A sentry node is meant to provide a layer of security for your validator.

#### What does the 28-day unbonding period mean?

When you unstake your CRO tokens, there's a mandatory 28-day waiting period before you can access them again. This is to protect against a validator attacking the Cronos POS Chain and then immediately withdrawing the stake amount.

#### Is there a time limit for redelegating? or how often can I redelegate to a new validator?

You can redelegate CRO once every 28 days. Once the tokens enter unbonding period, you will have to wait for 28 days before doing any other operation including redelegating.

#### Under what circumstances/conditions can a validator become jailed?

Punishments for a validator are triggered when they either make a byzantine fault or become non-live:

* **Liveness Faults (Low availability)**

A validator is said to be non-live when they fail to sign at least 2500 blocks (around 4.2 hrs) in the last 5000 blocks in the mainnet.

* **Byzantine Faults**

&#x20;A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and round. Tendermint has mechanisms to publish evidence of validators that signed conflicting votes so they can be punished by the slashing module. For example:

* Validator who votes for two different blocks within a single round;
* Validator who signs commit messages for arbitrary application states.

#### Will my (user) stake/delegation be slashed immediately after a validator becomes jailed?

For liveness faults (e.g. downtime or missing blocks), validators are jailed but no slashing is applied. For byzantine faults (e.g. double signing), validators are jailed and 5% of the validator’s and delegators’ stake will be slashed immediately.

#### What happens if the validator is unbonded or jailed?

You will not lose your CRO if your validator becomes unbonded or jailed. However:

* While the validator is jailed, it cannot earn rewards until it is unjailed.
* If the validator is unbonded, it is removed from the active set and no longer participates in consensus or earns rewards. If you have not redelegated in the past 28 days, you can still delegate to an active validator.

#### How can I check if my node (validator) status has missed any blocks?

You can check the information by command: `chain-maind q slashing signing-info <crocnclconspub address of validator>`

#### How can I change the commission rate?

`chain-maind tx staking edit-validator --from [wallet] --commission-rate="[rate]" --chain-id "[chain]" --gas-prices 0.1basecro`

#### How can I withdraw commissions from the validator?

`chain-maind tx distribution withdraw-rewards [delegator addrs] --from [key] --chain-id "crypto-org-chain-mainnet-1" --gas-prices 0.1basecro --commission`

#### Is there a way to change the details of my validator?

Yes, you can make changes with the "edit\_validator" command. `chain-maind tx staking edit-validator --help`

#### How can I withdraw rewards from delegation?

`chain-maind tx distribution withdraw-rewards [delagator] --from [key] --chain-id "crypto-org-chain-mainnet-1" --gas-prices 0.1basecro --commission`

#### Error: failed to initialize the database: resource temporarily unavailable

This error typically occurs when chain-maind is already running or another process is occupying the required port. To resolve this, check if chain-maind is already active on another port, or consider killing chain-maind then restart it again.

#### How much basecro in 1 CRO?

1 CRO = 10 ^ 8 basecro

#### Where can I find API-related documentation?

We regularly update the Chain documentation as required. The API documentation is now available here: [https://docs.cronos-pos.org/cronos-pos-integration/chain-integration#api-documentation](https://docs.cronos-pos.org/cronos-pos-integration/chain-integration#api-documentation)

#### What is the CRO coin type?

The coin type of CRO is 394, and you can refer to the coin type details at [https://github.com/satoshilabs/slips/blob/master/slip-0044.md](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)

#### Are rewards and principals separated?

Yes, rewards are separated from your principal staking amount in the sense that the pending reward will be allocated to the account but separated into different parts. For example, https://www.mintscan.io/crypto-org/account/cro1u5ryf5jwc2jhd9xyvmasfqzacxp03v8dmly0pc, where we can see that the amounts are separated.

#### What's the reward redemption time?

The reward is allocated to the account every block as mentioned above, the reward can then be redeemed by a "claim-reward" transaction, and the token will be instantly available right after it has been claimed.

&#x20;

### Croeseid Testnet

#### What is Croeseid testnet?

The Croeseid testnet is the testnet of the Cronos POS Chain which is based on the Cosmos SDK.

#### What is TCRO?

TCRO is a test token used on the Cronos POS Chain testnet and has no real value.

#### How do I participate in the Croeseid testnet?

Kindly follow this [guide](../for-node-hosts/getting-started/#cronos-pos-chain-croeseid-testnet) to join Croeseid testnet as a validator/full node.

#### What are the system requirements for running a node in the Croeseid testnet?

To run Cronos PoS Chain nodes in the testnet, you will need a machine with the following minimum requirements to run different types of nodes:

Archive Node (setting pruning = nothing)

* RAM: 16GB (goleveldb)
* Disk: 900GB
* CPU: 4 cores

Default Full Node (setting pruning = default)

* RAM 16GB (goleveldb)
* Disk: 150GB (Depends on how long the node is running for)
* CPU: 4 cores Refer to [this page](https://docs.cronos-pos.org/for-node-hosts/getting-started/croeseid-testnet) for the latest details.

#### How do I get test tokens?

To interact with the blockchain, simply use the [TCRO Faucet](https://cronos-pos.org/faucet) to obtain test CRO tokens for performing transactions on the Croeseid testnet. Note that you will need to [create an address](https://docs.cronos-pos.org/for-users/wallets/cli#keys-management-chain-maind-keys) before using the faucet.

#### How long does it take for a node to get back after it is jailed in testnet?

The `downtime_jail_duration` is 3600s (1 hour).

&#x20;
