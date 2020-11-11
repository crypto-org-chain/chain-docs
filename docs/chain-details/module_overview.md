# Modules - overview


Crypto.com Chain utilizes [Cosmos SDK](https://cosmos.network/sdk) and the [Tendermint](https://tendermint.com/) Core consensus engine underneath. Specifically, the Cosmos SDK is a framework that facilitates the development of secure state-machines on top of Tendermint. In particular, we utilize different SDK modules to facilitate the special features of the Crypto.com chain. 

In this documentation, we will be focusing on some of the important modules we used, for example:

- [Bank](./module_bank) - Token transfer functionalities and query support for the total supply of all assets; 
- [Distribution](./module_module_distribution) - Fee distribution, and staking rewards to the validators and delegator; 
- [Governance](./module_gov) - On-chain proposals and voting;
- [Mint](./module_mint) - Creation of new units of staking token;
- [Slashing](./module_slashing) - Validator punishment mechanisms;
- [Staking](./module_staking) - Proof-of-Stake layer for public blockchains.