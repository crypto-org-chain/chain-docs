# Mainnet Address Generation

This document contains the information of account address for in Crypto.org Chain mainnet.

## Address prefix

Account address for mainnet start with prefix `cro`. For example: `cro1y8ua5laceufhqtwzyhahq0qk7rm87hhugtsfey`.

## Hierarchical Deterministic Wallet (HD Wallet) Derivation Path

Crypto.org Chain has [registered](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) coin type `394` as defined in [BIP44 standard](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

Coin Type: 394 <br />
Derivation Path: `44'/394'/0'/0/{index}`  where index starts from 0.

i.e. the first address is derived at path `44'/394'/0'/0/0` and second one at path `44'/394'/0'/0/1`.

## How to generate address

::: warning MAKE SURE YOU BACKUP YOUR MNEMONIC WORDS
Before you use the generated mainnet addresses to receive funds on Mainnet, make sure that you have backup your address's mnemonic words in a safe place and the mnemonic words are correct such that it can restore to your wallet address.

You are the sole owner of your wallet mnemonic words and there is no way for Crypto.org to restore you wallet or recover you funds if you lost the mnemonic words.
:::

### A. Release binary (CLI)

Supported OS: Linux, Mac OS and Windows

#### Step 1. Get the Crypto.org Chain binary

Download the Crypto.org Chain Binary from Crossfire from [release page](https://github.com/crypto-org-chain/chain-main/releases/tag/v0.9.1-crossfire) and extract the binary. Here we used Linux as an example:

```bash
$ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v0.9.1-crossfire/chain-main_0.9.1-crossfire_Linux_x86_64.tar.gz
$ tar -zxvf chain-main_0.9.1-crossfire_Linux_x86_64.tar.gz
```

If you are downloading the binary for other operating systems, make sure you are downloading `v0.9.1-crossfire`.

#### Step 2. Create a new key and address

Run the followings to create a new address. For example, you can create a key with the name "Default" by:

```bash
$ ./chain-maind keys add Default 
```

### B. Programmatically

You can generate the Mnemonic and address programmatically. Here is an example code snippet written in JavaScript using the [Crypto.org Chain JavaScript Library](https://github.com/crypto-com/chain-jslib) to generate the mnemonic and the Mainnet address:
```javascript
// Import the library
const sdk = require("@crypto-com/chain-jslib");
const HDKey = sdk.HDKey;
const Secp256k1KeyPair = sdk.Secp256k1KeyPair;

// Initializing the library configurations with TestNet config
const cro = sdk.CroSDK({ network: sdk.CroNetwork.Testnet });

// Generating a random mnemonic words
const randomHDKey = HDKey.generateMnemonic(24); // This returns a 24 words mnemonic phrase

// Display the mnemonics words to the terminal. Only do this in a trusted, safe and offline computer.
// You may consider to store it securely instead of logging it.
console.log(randomHDKey);

// Derive a private key from an HDKey at the specified path
const privateKey = randomHDKey.derivePrivKey("m/44'/1'/0'/0/0");

// Getting a keyPair from a private key
const keyPair = Secp256k1KeyPair.fromPrivKey(privateKey);

// Generate address from the key pair
const address = new cro.Address(keyPair).account();
console.log(address);
```

### C. Ledger Wallet

### D. Crypto.org Chain Desktop Wallet (Beta)

::: warning Desktop Wallet Is Still In Beta
Desktop wallet is still in beta. Please be aware of the potential risk of using it. We recommend to run it only on a trusted, safe and offline computer and always verify the mnemonic words before using it.
:::

Download the latest version of the Crypto.org Chain Desktop Wallet [here](https://github.com/crypto-com/chain-desktop-wallet/releases) and follow the steps below to create an address:

#### 1. Open the application and click "Get Started" to setup an application password.

<img src="./assets/mainnet-address-generation/desktop-get-started.png" />

#### 2. After setting up the password, click "Create Wallet".

<img src="./assets/mainnet-address-generation/desktop-create-wallet.png" />

#### 3. Fill in any wallet name of your choice and choose "MAINNET" as the network. Then create the wallet by clicking "Create Wallet"

<img src="./assets/mainnet-address-generation/desktop-create-mainnet-wallet.png" />
<img src="./assets/mainnet-address-generation/desktop-create-success.png" />

#### 4. Upon successful wallet creation, a list of 24 mnemonic words will be displayed. Make sure you have copied and stored your mnemonic words in a safe place.

<img src="./assets/mainnet-address-generation/desktop-backup-mnemonic.png" />

#### 5. A warning message will be shown on top right hand corner to remind you that the wallet is for address generation only and may not work when Mainnet launch.

<img src="./assets/mainnet-address-generation/desktop-main-page.png" />

#### 6. You can check the wallet address by click the "Receive" tab on the left navigation menu.

<img src="./assets/mainnet-address-generation/desktop-address.png" />
