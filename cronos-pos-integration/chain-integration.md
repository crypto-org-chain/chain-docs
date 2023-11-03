# 🔄 Integration documentation

## Useful Links

* [Cronos PoS Chain website](https://crypto.org/)
* [GitHub Repository](https://github.com/crypto-org-chain/chain-main)
* [Official Documentation](https://crypto.org/docs/)

## Node and RPC setup notes

[Node Setup and RPC note](node-and-rpc-setup-notes.md)

## Setup Guide

* **Mainnet**:
  * [Running a full node](https://crypto.org/docs/getting-started/mainnet.html)
  * [Running a validator](https://crypto.org/docs/getting-started/mainnet\_validator.html)
  * [Mainnet Validator Security Checklist](https://crypto.org/docs/getting-started/security-checklist.html#part-1-conduct-survey-on-general-controls-of-hosting-data-centre)
* **Testnet**:
  * [Joining the Croeseid Testnet](https://crypto.org/docs/getting-started/croeseid-testnet.html)
  * [Deploy testnet node with nix](https://crypto.org/docs/getting-started/croeseid-testnet-nix.html#pre-requisites)
* **Devnet**
  * [Running the latest development network locally](https://crypto.org/docs/getting-started/local-devnet.html#overview)

## API Documentation

There are a few ways to access the Cronos PoS Chain

1. **Tendermint RPC**

* Raw but most-completed data
* Hosted documentation (use the latest master only): https://docs.tendermint.com/master/rpc/
* Swagger file: https://github.com/tendermint/tendermint/blob/v0.34.3/rpc/openapi/openapi.yaml

2. **gRPC Based**

* Processed chain information. Old state may be pruned from time-to-time. To avoid state pruning, update `pruning = "nothing"` in `~/.chain-maind/config/app.toml`
* There are two query methods based on gRPC:
  1. [gRPC Server](https://github.com/crypto-org-chain/chain-integration/blob/master/grpc/README.md)
  2. [gRPC Proxy RESTful Server](https://github.com/crypto-org-chain/chain-integration/blob/master/grpc-proxy-rest/README.md)
     * [Swagger UI](https://v1.cosmos.network/rpc/v0.41.4)
     * [Swagger file](https://github.com/crypto-org-chain/chain-integration/blob/master/grpc-proxy-rest/swagger.yml)



## API Clients and libraries

* [**TypeScript** library](https://github.com/crypto-org-chain/chain-jslib)
* [**Python** library](https://pypi.org/project/chainlibpy/#description)
* [**Rust** library](https://github.com/crypto-org-chain/chainlib-rs) (note that it is not feature complete)
* [@cosmjs/stargate](https://github.com/cosmos/cosmjs/tree/master/packages/stargate)

## Indexing

* [chain-indexing](https://github.com/crypto-com/chain-indexing) (indexing on-chain data)

## Node Monitoring (Prometheus)

The Ansible playbook for deploying Prometheus and some rules we are using are under [chain-integration/monitoring](https://github.com/crypto-org-chain/chain-integration/tree/master/monitoring).

## Public Nodes

### Mainnet - `crypto-org-chain-mainnet-1`

* [Tendermint](https://rpc.mainnet.crypto.org/)
* [Cosmos RESTful gRPC](https://rest.mainnet.crypto.org/)

### Croeseid Testnet - `testnet-croeseid-4`

* [Tendermint](https://testnet-croeseid-4.crypto.org:26657/)
* [Cosmos RESTful gRPC](https://testnet-croeseid-4.crypto.org:1317/)

## Block Explorer

### Mainnet

[https://](https://crypto.org/explorer)[cronos-pos.org/explorer](http://cronos-pos.org/explorer)

### Croeseid Testnet

[https://cronos-pos.org/explorer/croeseid4](https://crypto.org/explorer/croeseid4/)

## Community

[Discord](https://discord.gg/5JTk2ppsY3)
