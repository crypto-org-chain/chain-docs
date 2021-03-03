# Mainnet Address Generation

This document contains the information of account address for in Crypto.org Chain mainnet.

## Addres prefix

Account address for mainnet start with prefix `cro`. For example: `cro1y8ua5laceufhqtwzyhahq0qk7rm87hhugtsfey`.

## Hierachical Deterministic Wallet (HD Wallet) Derivation Path

Crypto.org Chain has [registered](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) coin type `394` as defined in [BIP44 standard](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

Coin Type: 394 <br />
Deriviation Path: `44'/394'/0'/0/{index}`  where index starts from 0.

i.e. the first address is derived at path `44'/394'/0'/0/0` and second one at path `44'/394'/0'/0/1`.

## How to generate address

::: warning MAKE SURE YOU BACKUP YOUR MNEMONIC WORDS
Before you use the generated mainnet addresses to receive funds on chain, make sure that you have backup your address's mnemonic words in a safe place and the mnemonic words are correct such that it can restore to your wallet address.

You are the sole owner of your wallet mnemonic words and there is no way for Crypto.org to restore you wallet or recover you funds if you lost it.
:::

### A. Release binary (CLI)

Supported OS: Linux, Mac OS and Windows

#### Step 1. Get the Crypto.org Chain binary

Download the Crypto.org Chain Binary from Crossfire from [release page](https://github.com/crypto-org-chain/chain-main/releases/tag/v0.9.1-crossfire) and extract the binary. Here we used Linux as an example:

```bash
$ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v0.9.1-crossfire/chain-main_0.9.1-crossfire_Linux_x86_64.tar.gz
$ tar -zxvf chain-main_0.9.1-crossfire_Linux_x86_64.tar.gz
```

If you are downloading the binary for other operating systems, make sure you are downlaoding `v0.9.1-crossfire`.

#### Step 2. Create a new key and address

Run the followings to create a new address. For example, you can create a key with the name "Default" by:

```bash
$ ./chain-maind keys add Default 
```

### B. Programmatically

### C. Ledger Wallet

### C. Crypto.org Chain Desktop Wallet (Beta)
