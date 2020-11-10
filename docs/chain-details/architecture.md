# Design Goals
On the technical side, the vision described in whitepapers etc. translates into the following goals:

1. "Security": robust and well-understood primitives and implementation are favoured

2. "Scalability": parts that hinder overall latency, throughput, lightweight client support, etc. should be mitigated

3. "Multi-party": the system should permit multi-party operation; anything that puts trust in a single party should be opt-in

4. "Long-term operation": there needs to be a leeway for backwards- and forwards-compatibility etc.

5. "Developer ecosystem": external developers can easily work with Chain, regardless of their used programming language



## Overview

Building a blockchain is not just about software/hardware development. Rather, it is a combination of technological design, incentive mechanism, game theory and governance, which together nourish a robust system that also allows for continuous innovation. Our initially proposed architecture may hence undergo future revisions in response to changes in incentives, governance or other external requirements.

Crypto.com Chain is open to the public to join, participate and scrutinise related transactions. We do not expect that, for example, mobile clients will be able to perform heavy-lifting tasks and have a reliable always-online network connection. For that reason and DA2, in the initial prototype of Thaler Experimental NetworkCrypto.com chain, there are two different types of nodes are responsible for various duties:

- Council Node (Validator), responsible for validating and committing new blocks to the blockchain; and
- Community Node (Full node), responsible for fetching the blockchain data and serve it upon the client's request.

Consensus
Council Nodes run a Byzantine Fault Tolerant (BFT) consensus protocol among themselves which resolves the final order of transaction sequences. Crypto.com Chain will utilize Cosmos SDK and the Tendermint Core consensus engine underneath. Tendermint works well for PoS / DPos networks, allows high transaction throughputs, and provides instant transaction finality on block commitment, which aligns well with DA2. It was chosen as the consensus engine for the Chain prototype due to the following additional reasons:

- Backed by formal research;
- Robustly tested implementation;
- Track record of adoption; and 
- Modular architecture.

Moreover, to facilitate a high availability, the total number of Council Nodes in different locations will be required to be greater than a minimum set that is based on real performance tests.




