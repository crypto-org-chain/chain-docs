# 🎛️ Modules

## Overview

Cronos POS Chain utilizes [Cosmos SDK](https://cosmos.network/sdk) and the [Tendermint](https://tendermint.com/) Core consensus engine underneath. Specifically, the Cosmos SDK is a framework that facilitates the development of secure state-machines on top of Tendermint. In particular, we utilize different SDK modules to facilitate the special features of the Cronos POS Chain.

In this documentation, we will be focusing on some of the important modules we used, for example:

* [Authz](./#authz) - Facilitates authorizations granted to one account to perform actions on behalf of another account;
* [Bank](./#bank) - Token transfer functionalities and query support for the total supply of all assets;
* [Distribution](./#distribution) - Fee distribution, and staking rewards to the validators and delegator;
* [Governance](./#gov) - On-chain proposals and voting;
* [Mint](./#mint) - Creation of new units of staking token;
* [Nft](./#nft) - Non-Fungible Token management;
* [Slashing](./#slashing) - Validator punishment mechanisms;
* [Staking](./#staking) - Proof-of-Stake layer for public blockchains;
* [Supply](./#supply) - Retrieve total and liquid supply;
* [Inflation](module_inflation.md) - Manage the total supply cap and inflation decay;
* [Tier Reward](module_tieredrewards.md) - Manage tiered staking positions with bonus APY on top of base staking rewards.

