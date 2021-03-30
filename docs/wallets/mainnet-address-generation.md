# Mainnet Address Generation

This document contains the information of account address for Crypto.org Chain mainnet.

## Address prefix

Account address for mainnet starts with prefix `cro`. For example: `cro1y8ua5laceufhqtwzyhahq0qk7rm87hhugtsfey`.

## Hierarchical Deterministic Wallet (HD Wallet) Derivation Path

Crypto.org Chain has [registered](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) coin type `394` as defined in [BIP44 standard](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

Coin Type: 394 <br />
Derivation Path: `44'/394'/0'/0/{index}` where index starts from 0.

i.e. the first address is derived at path `44'/394'/0'/0/0` and the second one at path `44'/394'/0'/0/1`.

## How to generate address

::: warning MAKE SURE YOU BACKUP YOUR MNEMONIC WORDS
Before you use the generated mainnet addresses to receive funds on mainnet, make sure that you have backup your address's mnemonic words correctly in a safe place and the mnemonic words are correct such that it can restore to your wallet address in the future.

You are the sole owner of your wallet mnemonic words and there is no way for Crypto.org to restore your wallet or recover your funds if you lost the mnemonic words.
:::

::: warning GENERATE ADDRESS ONLY IN A SECURE ENVIRONMENT
We recommend you to generate an address only on a trusted and secure computer. To further enhance the security, you should consider to run on a air-gapped (offline) machine.
:::

::: warning ALWAYS VERIFY YOUR MNEMONIC WORDS AND ADDRESS
To make sure you have backed up the mnemonic words correctly, we recommend you to try to restore your wallet with the mnemonic words and verify the address derived is the same.

For more details on how to verify your mnemonic words and addresses, please check [Mainnet Address Verification](./mainnet-address-verification.md)
:::
There are four ways to generate the mainnet address by using:

- [Release Binary (CLI)](#a-release-binary-cli);
- [Ledger Wallet](#b-ledger-wallet);
- [Programmatically via Crypto.org Chain JavaScript Library](#c-programmatically); and
- [Crypto.org Chain Desktop Wallet (Beta version)](#d-crypto-org-chain-desktop-wallet-beta).

## A. Release Binary (CLI)

Supported OS: Linux, Mac OS and Windows

#### Step 1. Get the Crypto.org Chain binary

Download the Crypto.org Chain Binary for Mainnet from [release page](https://github.com/crypto-org-chain/chain-main/releases/tag/v1.0.0) and extract the binary. Here we used Linux as an example:

```bash
$ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v1.1.0/chain-main_1.1.0_Linux_x86_64.tar.gz
$ tar -zxvf chain-main_1.1.0_Linux_x86_64.tar.gz
```

If you are downloading the binary for other operating systems, make sure you are downloading `v1.0.0`, which is the version targeting for mainnet.

Before moving to the next step, kindly check your `chain-maind` version by

```bash
$ ./chain-maind version
1.1.0
```

#### Step 2. Create a new key and address

Run the following command to create a new address. For example, you can create a key with the name "Default" by:

```bash
$ ./chain-maind keys add Default
```

You can find the generated address after running the command. **Please make sure that you have safely backed up the mnemonic words that appear on the last line.**

```bash
- name: Default
  type: local
  address: cro1qxm5lwml3v36h4pygwnn5nfzesupg7cx8nyfkt
  pubkey: cropub1addwnpepqg95fk5grlyucrnvdu8v3h4qnhgcm03ust4yysgtvdjqnh2ytmg6syjkav6
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

scare blur bless unfair chat gadget leaf reveal job depend daughter unveil fatal cliff bus beach betray over later rent planet alert remove cactus
```

## B. Ledger Wallet

- Supported OS: Linux, Mac OS and Windows
- Pre-requisite: Ledger Hardware Wallet

::: tip Crypto.org Chain Ledger Application Is In Development Mode
The Crypto.org Chain Ledger Application is available on Ledger Live under development mode only. It is under review by the Ledger team.
:::

### Step 1. Install Ledger Application

#### Step 1-1. Plug in your Ledger device to your computer. If you are using Ledger Nano X, please connect to your computer using the USB-C cable.

#### Step 1-2. Click "Manager" on the left navigation menu. Confirm to "Allow Ledger Manager" on your Ledger device.

<img src="./assets/mainnet-address-generation/ledger-live-manager.png" />

#### Step 1-3. Search for "Crypto.com Chain" and install the application to your Ledger.

<img src="./assets/ledger_desktop_wallet/s1-5.png" />

#### Step 1-4. Confirm the installation

You can confirm the installation by checking if the Crypto.org App shows up in the main menu of your Ledger device:

<img src="./assets/ledger_desktop_wallet/s1-5-1.jpeg" />

---


## B-i. Ledger Wallet via Release Binary (CLI)

#### Step 1. Get the Crypto.org Chain binary

Download the Crypto.org Chain Binary for Mainnet from [release page](https://github.com/crypto-org-chain/chain-main/releases/tag/v1.0.0) and extract the binary. Here we used Linux as an example:

```bash
$ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v1.0.0/chain-main_1.0.0_Linux_x86_64.tar.gz
$ tar -zxvf chain-main_1.0.0_Linux_x86_64.tar.gz
```

If you are downloading the binary for other operating systems, make sure you are downloading `v1.0.0`, which is the version targeting for mainnet.

#### Step 2. Open the Crypto.com Chain application on your Ledger device

#### Step 3. Create a new key and address

Run the following command to create a new address. For example, you can create a key with the name "Default" by:

```bash
$ ./chain-maind keys add Ledger --ledger
```

You will be prompted with the address on your Ledger device screen. Read it carefully and write it down. Afterward, confirm the address on your Ledger device.

::: tip Cannot Connect To Your Ledger Device?
If you encounter connection error when creating a wallet, you can try to unplug and plug your Ledger device to your computer again. Please make sure your Ledger device is unlocked and you have opened the "Crypto.com Chain" application on your Ledger.
:::

#### Step 4. Verify the address displayed on the terminal, and make sure it matches the address you saw on Ledger device

```bash
- name: Ledger
  type: ledger
  address: cro1tzhdkuc328cgh2hycyfddtdpqfwwu42yq3qgkr
  pubkey: cropub1addwnpepqw802qz5mvdcchlekqnypgj5vw3hef75yjw6gw6wda823aa0wrdwc7pl4n9
  mnemonic: ""
  threshold: 0
  pubkeys: []
```

---

## B-ii. Ledger Wallet via Crypto.org Chain Desktop Wallet

::: warning DESKTOP WALLET IS IN BETA
Desktop wallet is in beta testing. Please be aware of the [potential risks](https://github.com/crypto-com/chain-desktop-wallet#warning) of using it in mainnet. You should run it only on a trusted, safe and offline computer and always verify the mnemonic words before using the address.
:::
Download the latest version of the Crypto.org Chain Desktop Wallet [here](https://github.com/crypto-com/chain-desktop-wallet/releases) and follow the steps below to create an address:

#### Step 1. Open the application and click "Get Started" to set up an application password.

<img src="./assets/mainnet-address-generation/desktop-get-started.png" />

#### Step 2. After setting up the password, click "Create Wallet".

<img src="./assets/mainnet-address-generation/desktop-create-wallet.png" />

#### Step 3. Fill in any wallet name of your choice and choose "MAINNET" as the network. Then check "Want to create with hardware wallet?" and choose "Ledger" as "Wallet Type"

<img src="./assets/mainnet-address-generation/ledger-desktop-create-wallet.png" />
<img src="./assets/mainnet-address-generation/desktop-create-success.png" />

#### Step 4. Upon successful wallet creation, a warning message will be shown on the top right hand corner to remind you that the wallet is for address generation only and may not work when mainnet launch.

::: tip Cannot Connect To Your Ledger Device?
If you encounter connection error when creating a wallet, you can try to unplug and plug your Ledger device to your computer again. Please make sure your Ledger device is unlocked and you have opened the "Crypto.com Chain" application on your Ledger.
:::

<img src="./assets/mainnet-address-generation/desktop-main-page.png" />

#### Step 5. You can check the wallet address by click the "Receive" tab on the left navigation menu. Click "Verify address on Ledger" and the generated address will appear on your Ledger device screen for verification.

<img src="./assets/mainnet-address-generation/ledger-desktop-address.png" />

## C. Programmatically

You can generate the Mnemonic and address programmatically. Here is an example code snippet written in JavaScript using the [Crypto.org Chain JavaScript Library](https://github.com/crypto-com/chain-jslib) to generate the mnemonic and the mainnet address:

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

## D. Crypto.org Chain Desktop Wallet (Beta)

Supported OS: Ubuntu, Mac OS and Windows

::: warning DESKTOP WALLET IS IN BETA
Desktop wallet is in beta testing. Please be aware of the [potential risks](https://github.com/crypto-com/chain-desktop-wallet#warning) of using it in mainnet. You should run it only on a trusted, safe and offline computer and always verify the mnemonic words before using the address.
:::

Download the latest version of the Crypto.org Chain Desktop Wallet [here](https://github.com/crypto-com/chain-desktop-wallet/releases) and follow the steps below to create an address:

#### Step 1. Open the Crypto.com Chain application on your Ledger device

#### Step 2. Open the application and click "Get Started" to set up an application password.

<img src="./assets/mainnet-address-generation/desktop-get-started.png" />

#### Step 3. After setting up the password, click "Create Wallet".

<img src="./assets/mainnet-address-generation/desktop-create-wallet.png" />

#### Step 4. Fill in any wallet name of your choice and choose "MAINNET" as the network. Then create the wallet by clicking "Create Wallet"

<img src="./assets/mainnet-address-generation/desktop-create-mainnet-wallet.png" />
<img src="./assets/mainnet-address-generation/desktop-create-success.png" />

#### Step 5. Upon successful wallet creation, a list of 24 mnemonic words will be displayed. Make sure you have copied and stored your mnemonic words in a safe place.

<img src="./assets/mainnet-address-generation/desktop-backup-mnemonic.png" />

#### Step 6. A warning message will be shown on the top right hand corner to remind you that the wallet is for address generation only and may not work when mainnet launch.

<img src="./assets/mainnet-address-generation/desktop-main-page.png" />

#### Step 7. You can check the wallet address by click the "Receive" tab on the left navigation menu.

<img src="./assets/mainnet-address-generation/desktop-address.png" />