# Mainnet Address Generation

This document contains the information of account address for Cronos POS Chain mainnet.

## Address prefix

Account address for mainnet starts with prefix `cro`. For example: `cro1y8ua5laceufhqtwzyhahq0qk7rm87hhugtsfey`.

## Hierarchical Deterministic Wallet (HD Wallet) Derivation Path

Cronos POS Chain has [registered](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) coin type `394` as defined in [BIP44 standard](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

Coin Type: 394\
Derivation Path: `44'/394'/0'/0/{index}` where index starts from 0.

i.e. the first address is derived at path `44'/394'/0'/0/0` and the second one at path `44'/394'/0'/0/1`.

## How to generate an address

{% hint style="warning" %}
**MAKE SURE YOU BACKUP YOUR MNEMONIC WORDS**\
Before using your generated mainnet addresses to receive funds, ensure that you have securely backed up your address's mnemonic words. It’s crucial to verify that these words are correct and can restore your wallet address in the future.

Please note that you are the sole owner of your wallet's mnemonic words. The Cronos POS Chain team cannot restore your wallet or recover your funds if the mnemonic words are lost.
{% endhint %}

{% hint style="warning" %}
**GENERATE ADDRESS ONLY IN A SECURE ENVIRONMENT**\
We recommend generating an address only on a trusted and secure computer. For enhanced security, consider running on an air-gapped (offline) machine.
{% endhint %}

{% hint style="warning" %}
**ALWAYS VERIFY YOUR MNEMONIC WORDS AND ADDRESS**\
Ensure you have backed up your mnemonic words correctly by restoring your wallet with them and verifying that the derived address is the same.

For more details on verifying your mnemonic words and addresses, please check [Mainnet Address Verification](mainnet-address-verification.md)&#x20;
{% endhint %}

There are four ways to generate the mainnet address by using:

* [Release Binary (CLI)](mainnet-address-generation.md#a-release-binary-cli);
* [Ledger Wallet](mainnet-address-generation.md#b-ledger-wallet);
* [Programmatically via Cronos POS Chain JavaScript Library](mainnet-address-generation.md#c-programmatically);

## A. Release Binary (CLI)

Supported OS: Linux, Mac OS, and Windows

#### Step 1. Get the Cronos POS Chain binary

Download the Cronos POS Chain Binary for Mainnet from the [release page](https://github.com/crypto-org-chain/chain-main/releases) and extract the binary. Here we used Linux as an example:

```bash
 $ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.9/chain-main_3.3.9_Linux_x86_64.tar.gz
 $ tar -zxvf chain-main_3.3.9_Linux_x86_64.tar.gz
```

If you are downloading the binary for other operating systems, make sure you are downloading `v3.3.9` or newer versions that are targeting for mainnet.

Before moving to the next step, kindly check your `chain-maind` version by

```bash
$ ./chain-maind version
3.3.9
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

* Supported OS: Linux, Mac OS and Windows
* Pre-requisite: Ledger Hardware Wallet

### Step 1. Install Ledger Application

#### Step 1-1. Plug in your Ledger device to your computer. If you are using Ledger Nano X, please connect to your computer using the USB-C cable.

#### Step 1-2. Click "Ledger Icon" on the left navigation menu. Confirm to "Allow Ledger Manager" on your Ledger device.

<div align="center"><figure><img src="../../.gitbook/assets/Screenshot 2024-12-04 151307.png" alt="" width="563"><figcaption></figcaption></figure></div>

#### Step 1-3. Search for "Cronos POS Chain" and install the application to your Ledger.

<div align="center"><figure><img src="../../.gitbook/assets/Screenshot 2024-12-04 at 15.33.28.png" alt="" width="563"><figcaption></figcaption></figure></div>

#### Step 1-4. Confirm the installation

You can confirm the installation by checking if the Cronos POS Chain App shows up in the main menu of your Ledger device:

<div align="center"><figure><img src="../../.gitbook/assets/WhatsApp Image 2024-12-03 at 17.36.22.jpeg" alt="" width="375"><figcaption></figcaption></figure></div>

***

## B-i. Ledger Wallet via Release Binary (CLI)

#### Step 1. Get the Cronos POS Chain binary

Download the Cronos POS Chain Binary for Mainnet from [release page](https://github.com/crypto-org-chain/chain-main/releases) and extract the binary. Here we used Linux as an example:

```bash
$ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.9/chain-main_3.3.9_Linux_x86_64.tar.gz
$ tar -zxvf chain-main_3.3.9_Linux_x86_64.tar.gz
```

If you are downloading the binary for other operating systems, make sure you are downloading `v3.3.9`, which is the version targeting for mainnet.

#### Step 2. Open the Cronos POS Chain application on your Ledger device

#### Step 3. Create a new key and address

Run the following command to create a new address. For example, you can create a key with the name "Default" by:

```bash
$ ./chain-maind keys add Ledger --ledger
```

You will be prompted with the address on your Ledger device screen. Read it carefully and write it down. Afterward, confirm the address on your Ledger device.

{% hint style="info" %}
Cannot Connect To Your Ledger Device?&#x20;

If you encounter a connection error when creating a wallet, you can try to unplug and plug your Ledger device into your computer again. Please make sure your Ledger device is unlocked and you have opened the "Cronos POS Chain" application on your Ledger.
{% endhint %}

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
