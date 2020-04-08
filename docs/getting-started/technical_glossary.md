# Technical glossary

[A](#a) | [B](#b) | [C](#c) | [D](#d) | E | F | G | [H](#h) | I | [J](#j) | K | [L](#l) | [M](#m) | [N](#n) | O | [P](#p) | Q | R | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | X | Y | Z

---

#### A

**Authentication token**

The access token for wallet related commands, It can be shown by [cli-command](../wallets/client-cli.md#wallet-auth-token-show-the-authentication-token).

#### B

**Bonded (staking state)**

The non-transferable amount of token staked to the corresponding address, it can be unlocked by the `unbond` transaction.

**Byzantine Faults (Double signing)**

A validator is said to make a byzantine fault when they sign conflicting messages/blocks at the same height and round.

#### C

**Chain ID**

A unique identifier for the blockchain. Different [prefixes](./chain-id-and-network-id.md#chain-id) of the Chain ID are used to distinguish between _devnet_, _testnet_ and _mainnet_. For example, the Chain ID of our [testnet](./thaler-testnet.md) is `testnet-thaler-crypto-com-chain-42`

**Chain-abci**

The **A**pplication **B**lock**C**hain **I**nterface connects Tendermint (for consensus operations) to the actual applications.

**Client-cli**

The command line interface for the wallet client. It supports wallet management, funds transfer and basic staking operations.

**Client-rpc**

The JSONRPC interface of the wallet client. It can be used to be integrated with different services and also power the Sample Wallet. It provides nearly the same set of operations as Client-cli does.

#### D

**Deposit (Transaction type: `deposit`)**

The transaction that transfers funds from a transfer address to a staking address for staking purposes.

#### H

**HD wallet**

The [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) compatible Hierarchical Deterministic (HD) wallet is a system of deriving keys from a single starting point known as a [seed](https://en.bitcoin.it/wiki/Seed_phrase). The seed can be presented in the form of a human-readable [mnemonic](#m) that can be used for easily backup and restore the wallet.

#### J

**Jailing**

A validator is jailed when they make a byzantine fault. When a validator gets jailed, they cannot perform any staking related operations relating to their account.

#### L

**Liveness Faults**

A validator is said to be non-live when they fail to sign at least `missed_block_threshold` blocks in last `block_signing_window` blocks successfully.

#### M

**Mnemonic (of a wallet)**

The [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) compatible 24-word mnemonic phrase of the wallet. User can restore their wallet and associated addresses by this human-readable mnemonic.

**Multisig addresses**

The [threshold multi-signature](https://blockstream.com/2019/02/18/en-musig-a-new-multisignature-standard/) addresses that require multiple keys to authorize a transaction.

#### N

**Network ID**

The last two hex characters of the Chain ID. Using our testnet Chain ID `testnet-thaler-crypto-com-chain-42` as an example, the network ID would be `42`(in hex).

**Node-join (Transaction Type: `node-join`)**

The transaction for joining the network as a validator.

**Nonce (of a staking address)**

The nonce is the number of transactions that have the witness of the staking address. It also serves as an important safety precaution for preventing [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).

#### P

**Proposer (of a block)**

Validator can become a proposer and commit new blocks in the blockchain according to a deterministic [proposer selection procedure](https://docs.tendermint.com/master/spec/reactors/consensus/proposer-selection.html). The probability of a validator being selected as the proposer for a round is proportional to their [voting power](#v).

#### S

**SGX**

The Intel® Software Guard Extensions (SGX) is a set of instructions that increases the security of application code and data. It ensures the integrity and confidentiality of the data by isolating them from the OS or other enclaves.

**Slashing**

The penalty imposed on validators' misbehaviour such as byzantine faults or liveness faults, which resulted in losing some amount of their staked tokens.

**Staking address**

The address for staking related operations, it follows the format of the 20 bytes [Ethereum](https://en.wikipedia.org/wiki/Ethereum#Addresses) account address.

**State (of a staking address)**

The general state of a staking address that includes _nonce_, _bounded/unbonded_ amount, _validator metadata_, and _slashing related information_ (if any).

#### T

**TDBE**

**T**ransaction **d**ata **b**ootstrapping **e**nclave responsible for fetching current UTXO set transaction data; and handling periodic key generation operations.

**Tendermint**

The underneath byzantine fault tolerant protocol for performing distributed consensus.

**Tendermint KMS(tmkms)**

The [key management system](https://github.com/iqlusioninc/tmkms) for tendermint validators.

**TQE**

**T**ransaction **q**uery **e**nclave serves the encryption and decryption requests from wallets / clients. It allows semi-trusted client querying of sealed tx payloads.

**Transfer (Transaction type:`transfer`)**

The transaction that transfers funds between transfer addresses.

**Transfer address**

The address for payments/value transfers. Different prefixes of the transfer address are used to distinguish between devnet, testnet and mainnet.

#### U

**Unbond (Transaction type: `unbond`)**

The transaction to unbond funds in the staking address. Note that funds will only be available for withdrawal after the unbonding period has passed.

**Unbonding period**

The time duration of unbonding, which is the waiting period of the stake state's unbonded amount can be withdrawn.

**Unjail (Transaction type: `unjail`)**

The transaction to unjail a validator.

#### V

**Validator**

The participant in the proof of stake (PoS) consensus protocol. They are responsible for transaction validation and committing new blocks in the blockchain.

**Validator keys**

The key pair for signing messages from the validator. The full key pair is located under the tendermint `priv_validator_key.json` folder after the initialization. In production deployment, it is strongly advised not to keep the private key reside on the machine ( see the [deployment notes](./notes-on-production-deployment.md) and [recommendations](https://github.com/iqlusioninc/tmkms#hardware-security-modules-recommended) )

**View key**

The key pair to enforce access to the confidential transaction data.

**Voting power**

The voting power is determined by the bounded amount in validator's staking address. The probability of a validator being selected as the proposer for a round is proportional to their voting power.

#### W

**Withdraw (Transcation type :`withdraw`)**

The transaction for withdrawing funds from a staking address to a transfer address.
