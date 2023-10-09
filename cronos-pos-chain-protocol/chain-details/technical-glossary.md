# Technical glossary

A | [B](technical-glossary.md#b) | [C](technical-glossary.md#c) | [D](technical-glossary.md#d) | E | [F](technical-glossary.md#f) | [G](technical-glossary.md#g) | [H](technical-glossary.md#h) | [I](technical-glossary.md#i) | [J](technical-glossary.md#j) | K | [L](technical-glossary.md#l) | [M](technical-glossary.md#m) | [N](technical-glossary.md#n) | O | [P](technical-glossary.md#p) | [Q](technical-glossary.md#q) | [R](technical-glossary.md#r) | [S](technical-glossary.md#s) | [T](technical-glossary.md#t) | [U](technical-glossary.md#u) | [V](technical-glossary.md#v) | W | X | Y | Z

***

#### B

**Block Explorer**

An application that allows a user to explore the different blocks on a blockchain. It has a record of all the transactions in each block and is often made public to increase blockchain visibility and transparency. Here are our explorers: [Cronos PoS Chain Explorer](https://crypto.org/explorer/) and [Croeseid Testnet Explorer](https://crypto.org/explorer/croeseid4/).

**Bonded (staking state)**

The non-transferable amount of token staked to the corresponding address and can be unlocked by the `unbond` transaction.

**Byzantine Faults (Double signing)**

A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and round.

#### C

**Chain ID** A unique identifier for the blockchain. Different prefixes of the Chain ID are used to distinguish between _mainnet_, _devnet_, and _testnet_. For example, the Chain ID of our [testnet](https://crypto.org/docs/getting-started/croeseid-testnet.html) is `testnet-croeseid-4`.

**Chain-abci**

The **A**pplication **B**lock**C**hain **I**nterface connects Tendermint (for consensus operations) to the actual applications.

**Chain-maind**

chain-maind is the all-in-one command-line interface. It supports wallet management, funds transfer, and staking operations.

**Client-rpc**

The JSONRPC interface of the wallet client. It can be used to be integrated with different services and also power the Sample Wallet. It provides nearly the same set of operations as Client-cli does.

**Commission Max Change Rate**

The maximum daily increase of the validator’s commission. This parameter cannot be changed by the validator operator.

**Consensus**

The process of a group of entities to agree on a particular data value, and there are a variety of algorithms used for determining consensus.

[**CosmWasm**](https://cosmwasm.com/)

It is a new smart contracting platform built for the cosmos ecosystem. It is written as a module that can plug into the Cosmos SDK.

**Create-validator(Transaction Type: `create-validator`)**

The transaction for joining the network as a validator.

#### D

**Delegate (Transaction type: `delegate`)**

The transaction that delagate funds to a validator for staking purposes. Delegators should perform due diligence on validator candidates before delegating, as well as spreading their stake over multiple validators. It will also help keep the network decentralized.

**Delegator**

CRO holders who do not run validator operations themselves. Users can delegate CRO to validators and obtain a part of its revenue in exchange. Because they share revenue with their validators, delegators also share responsibility. Should a validator misbehave, each of its delegators will be partially slashed in proportion to their stake.

#### F

[**Faucet**](https://crypto.org/faucet)

Service carried out that dispenses funds in the form of free test token that can be used on a testnet.

**Full Node**

A full node is a node that participates in the network but will not help secure it. Full nodes can be used to store the entire state of a blockchain. There are two forms of state for Tendermint. First, blockchain state, this represents the blocks of a blockchain. Secondly, there is the Application state, this represents the state that transactions modify.

#### G

**Genesis**

The origin of a blockchain, also known as block 1. It can also be used to reference the initial state of the blockchain at origination.

**Governance**

The process of determining what changes to the network are permissible, such as modifications to code or movement of funds. The governance system in Cronos PoS Chain is on-chain and revolves around stakeholder voting.

#### H

**Hard Fork**

A permanent diversion of a blockchain can occur quickly due to a high priority change in a consensus rule. This change makes all-new recordings (blocks) very different from the original blocks. Any computer that is not updated with the new technology, will find these new blocks appear invalid.

**HD Wallet**

The [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) compatible Hierarchical Deterministic (HD) wallet is a system of deriving keys from a single starting point known as a [seed](https://en.bitcoin.it/wiki/Seed\_phrase). The seed can be presented in the form of a human-readable [mnemonic](technical-glossary.md#m) that can be used for easily backup and restore the wallet.

#### I

**Index**

A network structure meant to optimize the querying of information from across the blockchain by providing an efficient path to its storage source.

**Inflation**

The annualized rate at which CRO supply grows.

**Initial Commission Rate**

The commission rate on revenue charged to any delegator by the validator.

[**Inter-Blockchain Communication Protocol (IBC)**](https://ibcprotocol.org/)

IBC enables self-sovereign blockchains to connect and build strong network ecosystems, intending to end ‘network tribalism’.

#### J

**Jailing**

A validator is jailed when they make a byzantine fault. Jailing also happens to low uptime. When a validator gets jailed, they cannot perform any staking related operations relating to their account.

#### L

**Liveness Faults**

A validator is said to be non-live when they fail to sign at least `missed_block_threshold` blocks in the last `block_signing_window` blocks successfully.

#### M

**Maximum Commission**

The maximum commission rate this validator candidate can charge. This parameter cannot be changed by the validator operator.

**Mempool**

It is the node's collection of all the unconfirmed transactions it has already seen enabling it to decide whether or not to relay a new transaction. In short, the mempool is the node's holding area for all the pending transactions.

**Metadata**

It is used to summarize basic information about data which can make tracking and working with specific data easier. It is the data providing information about one or more aspects of the data.

**Minimum Self-bond Amount**

The minimum amount of CROs the validator candidate need to have bonded at all time. If the validator’s self-bonded stake falls below this limit, their entire staking pool will unbond. This parameter exists as a safeguard for delegators. Indeed, when a validator misbehaves, part of their total stake gets slashed. This included the validator’s self-delegated stake as well as their delegators’ stake. The minimum self-bond amount parameter guarantees to delegators that a validator will never fall below a certain amount of self-bonded stake. This parameter can only be increased by the validator operator.

**Mnemonic (of a wallet)**

The [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) compatible 24-word mnemonic phrase of the wallet. User can restore their wallet and associated addresses with this human-readable mnemonic.

**Multisig Addresses**

Multisig (multi-signature) is a digital signature that makes it possible for multiple unique signatures to sign documents as a group. It is the [threshold multi-signature](https://blockstream.com/2019/02/18/en-musig-a-new-multisignature-standard/) addresses that require multiple keys to authorize a transaction, which means multiple keys owned by separate entities are needed to make the transaction happen in an address.

#### N

**Network ID**

The last two hex characters of the Chain ID. Using our testnet Chain ID `testnet-croeseid-2` as an example, the network ID would be `2`.

**Non-fungible Token (NFT)**

NFT represents uniquely identifiable tokens with common use cases such as art, gaming, and asset ownership. NFTs are tokenized versions of digital or real-world assets. They function as verifiable proofs of authenticity and ownership within a blockchain network.

#### P

**Proposal**

A potential function call to be voted on in a referendum. Proposals modify the behavior of the Cronos PoS Chain network, from minor parameter tuning up to replacing the runtime code.

**Proposer (of a block)**

Validator can become a proposer and commit new blocks in the blockchain according to a deterministic [proposer selection procedure](https://docs.tendermint.com/master/spec/consensus/proposer-selection.html). The probability of a validator being selected as the proposer for a round is proportional to their [voting power](technical-glossary.md#v).

**Protocol**

A system of rules that allows two or more entities of a communications system to transmit information. The protocol defines the rules, syntax, semantics and synchronization of communication and possible recovery methods.

#### Q

**Quorum**

Quorum is defined as the minimum percentage of voting power that needs to be cast on a proposal for the result to be valid.

#### R

**Runtime**

The state transition function of a blockchain. It defines a valid algorithm for determining the state of the next block given the previous state.

#### S

**Seed Node**

A seed node provides a node with a list of peers to which a node can connect. When starting a node you must provide at least one type of node to be able to connect to the desired network. By providing a seed node you will be able to populate your address quickly. A seed node will not be kept as a peer but will disconnect from your node after it has provided a list of peers.

**Sentry Node**

A sentry node is similar to a full node in almost every way. The difference is a sentry node will have one or more private peers. These peers may be validators or other full nodes in the network. A sentry node is meant to provide a layer of security for your validator, similar to how a firewall works with a computer.

**SGX**

The Intel® Software Guard Extensions (SGX) is a set of instructions that increases the security of application code and data. It ensures the integrity and confidentiality of the data by isolating them from the OS or other enclaves.

**Slashing**

The penalty imposed on validators' misbehavior such as byzantine faults or liveness faults, which resulted in losing some amount of their staked tokens. Below are the main faults that can result in slashing of funds for a validator and its delegators:

* Double signing: If someone reports on chain A that a validator signed two blocks at the same height.
* Unavailability: If a validator signature has not been included in the last X blocks, the validator will get slashed by a marginal amount proportional to X. If X is above a certain limit Y, then the validator will get unbonded.

**State (of a staking address)**The general state of a staking address that includes _nonce_, _bounded/unbonded_ amount, _validator metadata_, and _slashing related information_ (if any).

#### T

**Tendermint**

The underneath byzantine fault tolerant protocol for performing distributed consensus.

**Tendermint KMS(tmkms)**

The [key management system](https://github.com/iqlusioninc/tmkms) for tendermint validators.

**Threshold**

The threshold is defined as the minimum proportion of Yes votes (excluding Abstain votes) for the proposal to be accepted.

**Transactions Per Second (TPS)**

The number of transactions that a blockchain network is capable of processing each second.

**Transfer (Transaction type:`transfer`)**

The transaction that transfers funds between transfer addresses.

**Transfer Address**

The address for payments/value transfers. Different prefixes of the transfer address are used to distinguish between _testnet_, _devnet_, and _mainnet_.

#### U

**Unbond (Transaction type: `unbond`)**

The transaction to unbond funds in the staking address. Note that funds will only be available for withdrawal after the unbonding period has passed.

**Unbonding Period**

The time duration of unbonding, which is the waiting period of the stake state's unbonded amount can be withdrawn.

**Unjail (Transaction type: `unjail`)**

The transaction to unjail a validator.

#### V

**Validator**

The role of validators is to run a full-node and participate in consensus by broadcasting votes which contain cryptographic signatures signed by their private key. Validators commit new blocks in the blockchain and receive revenue in exchange for their work. They must also participate in governance by voting on proposals. Only the top 100 validators with the highest stake are part of the Active validator set.

**Validator Keys**

The key pair for signing messages from the validator. The full key pair is located under the tendermint `priv_validator_key.json` folder after the initialization. In a production deployment, it is strongly advised not to keep the private key reside on the machine (see the [deployment notes](https://github.com/crypto-org-chain/chain-docs/blob/master/docs/getting-started/notes-on-production-deployment.md) and [recommendations](https://github.com/iqlusioninc/tmkms#hardware-security-modules-recommended) )

**Voting**

The process of stakeholders determining whether or not a referendum should pass.

**Voting Power**

The voting power is determined by the bonded amount in the validator's staking address. The probability of a validator being selected as the proposer for a round is proportional to their voting power.
