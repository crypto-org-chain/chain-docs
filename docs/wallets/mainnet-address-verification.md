# Mainnet Address Verification

After you have generated a mainnet address, you should first verify that you have backed up the correct mnemonic words and can restore to the same address before using it to receive funds.

::: warning VERIFY ONLY IN SECURE ENVIRONMENT We recommend to verify your mnemonic words and address only on a trusted, safe and offline computer and always verify the mnemonic words before using it. :::

## Release Binary (CLI)

Supported OS: Linux, Mac OS and Windows

#### Step 1. Get the Crypto.org Chain binary

Download the Crypto.org Chain Binary for Mainnet from [release page](https://github.com/crypto-org-chain/chain-main/releases/tag/v1.0.0) and extract the binary. Here we used Linux as an example:

```bash
$ curl -LOJ https://github.com/crypto-org-chain/chain-main/releases/download/v1.0.0/chain-main_1.0.0_Linux_x86_64.tar.gz
$ tar -zxvf chain-main_1.0.0_Linux_x86_64.tar.gz
```

If you are downloading the binary for other operating systems, make sure you are downloading `v1.0.0` or newer version avaliable for mainnet.

#### Step 2. Recover a new key and derive the address

Run the followings to restore from your save mnemonic words. For example, you can restore a key with the name "Default" by:

```bash
$ ./chain-maind keys add Default --recover
> Enter your bip39 mnemonic
elder pony lottery motion universe comfort table matrix fly close boy rival verify virus defy permit pottery summer tilt seek trip child defense success
```

You can find the generated address from the mnemonics words after running the command. You can verify whether this address matches with the previous one you have generated.

```bash
- name: Default
  type: local
  address: cro1qxm5lwml3v36h4pygwnn5nfzesupg7cx8nyfkt
  pubkey: cropub1addwnpepqg95fk5grlyucrnvdu8v3h4qnhgcm03ust4yysgtvdjqnh2ytmg6syjkav6
  mnemonic: ""
  threshold: 0
  pubkeys: []
```
