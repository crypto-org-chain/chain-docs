# 🔰 Architecture

## Overview

Building a blockchain is not just about software/hardware development. Instead, it is a combination of technological design, incentive mechanism, game theory and governance, which together nourish a robust system that also allows for continuous innovation. Our initially proposed architecture may hence undergo future revisions in response to changes in incentives, governance or other external requirements.

Crypto.org Chain is open to the public to join, participate and scrutinise related transactions. We do not expect that, for example, mobile clients will be able to perform heavy-lifting tasks and have a reliable always-online network connection. For that reason, there are two different types of nodes are responsible for various duties:

* **Validator**, responsible for validating transactions and committing new blocks to the blockchain; and
* **Full node**, responsible for fetching the blockchain data and serve it upon the client's request.

## Consensus engine

Crypto.org Chain is based on Tendermint Core's consensus engine, it relies on a set of validators to participate in the proof of stake (PoS) consensus protocol, and they are responsible for committing new blocks in the blockchain.

Specifically, validators run a Byzantine Fault Tolerant (BFT) consensus protocol among themselves which resolves the final order of transaction sequences. Crypto.org Chain utilizes [Cosmos SDK](https://cosmos.network/sdk) and the [Tendermint](https://tendermint.com/) Core consensus engine underneath. Tendermint works well for PoS / DPos networks, allows high transaction throughputs, and provides instant transaction finality on block commitment. It was chosen as the consensus engine for the Chain prototype due to the following additional reasons:

* Backed by [formal research](https://eprint.iacr.org/2018/574.pdf);
* Robustly tested [implementation](http://jepsen.io/analyses/tendermint-0-10-2);
* Track record of adoption: Tendermint has been in continuous development since 2014, and has been adopted by several high-profile [projects](https://forum.cosmos.network/t/list-of-projects-in-cosmos-tendermint-ecosystem/243) ; and
* Modular architecture: It offers flexibility on which and how applications are developed on top of it.
