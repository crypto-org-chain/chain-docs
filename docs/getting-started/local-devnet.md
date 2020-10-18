# Devnet: Running Latest Development Node

::: warning caution
this page is for building and running the latest development version of the chain for testing purpose only. Development branch is under active development and is highly unstable and subject to breaking changes. You should expect a moderate amount of troubleshooting work is required.

for anyone interested in joining the crypto.com chain testnet,
please refer to our [testnet documentation](./croeseid-testnet.md).
:::

By following this tutorial, you can compile and run the latest development version of Crypto.com Chain from scratch. It is intended for testing purpose only.

## Overview

We will be using [pystarport](https://github.com/crypto-com/chain-main/tree/master/pystarport), a dedicated script similar to [cosmos starport](https://github.com/tendermint/starport) without the scaffolding feature to build a local development network with multiple validators.

## Pre-requisites

- Python > 3.7.3
- [chain-maind](https://github.com/crypto-com/chain-main)



### Install pystarport

Firstly, we would have to install pystarport, please go to `chain-main/pystarport` and run 

   ```
   $ pip install .
   ```

## Configure your devnet

In `chain-main/config.toml`, you can configure the devnet that we are going to create, for example:

```
chain_id: chainmaind
validators:
- coins: 100cro
   staked: 100cro
- coins: 100cro
   staked: 100cro
accounts:
- name: community
   coins: 100cro
- name: ecosystem
   coins: 200cro
- name: reserve
   coins: 200cro
   vesting: "1d"
- name: launch
   coins: 100cro
genesis:
app_state:
   staking:
   params:
      unbonding_time: "10s"
```

This configuration will give us a 2 validators devnet with the chain-id `chainmaind`; 4 accounts under the name of `community`, `ecosystem` `reserve` and `launch` with some allocated funds at the genesis.

You can also specify some of the network parameters in the genesis file of your devnet under `genesis:` for different testing purpose. As in the above example, we have specified the `unbonding_time` to be `10` seconds.

## Start the devnet

Once we finish with the configuration, we are ready to start the chain: in the `chain-main` directory, run

```
$ pystarport serve
```

Afterwards, keys will be generated according to the configuration in `chain-main/config.toml`, for example

```
{‘name’: ‘validator’, ‘type’: ‘local’, ‘address’: ‘cro1ytd4m6n6mnf6u74y36uke7slu2p593f7rl7c0y’, ‘pubkey’: ‘cropub1addwnpepq2nf4v2nnscc37rt4a5neegvujqktlfztrwatkp0ha0q0rz59rrryn9s9pg’, ‘mnemonic’: ‘music ring yellow artist happy apple basic unknown sick desert start cruise mouse undo frozen glue raw basic critic matter exotic tribe raise outside’}
{‘name’: ‘validator’, ‘type’: ‘local’, ‘address’: ‘cro1699grykdg2hdg4jaz6dwtzxkv9tkv66suunl0t’, ‘pubkey’: ‘cropub1addwnpepq2nkv25ckp5szahewtehxvpm76hrfu9fwkjcwwtuyht8nvulw9y6jp7kn40’, ‘mnemonic’: ‘pig enroll borrow silver power mass spare allow then utility famous attend cross first disagree wool pole sniff physical cherry wire flip impact siege’}
{‘name’: ‘community’, ‘type’: ‘local’, ‘address’: ‘cro1qgk8l90syh7y6erxq6cmm5jg53dvyg26nfwcas’, ‘pubkey’: ‘cropub1addwnpepq0a7nqjtyyvdhha7tyhj9tn6vdddjgrv93rjj07gmvupdev2j0kwxetrjxj’, ‘mnemonic’: ‘retire drill service clog mouse usage reward off tuition situate tone employ when pull input piano emotion ordinary build where tool spare torch water’}
{‘name’: ‘ecosystem’, ‘type’: ‘local’, ‘address’: ‘cro15ytky55j0npav2584tde4tcnej73c9nwl5ahkv’, ‘pubkey’: ‘cropub1addwnpepqf874063srt54936l2mpyc5jfxqc7lwdfy8avjrde93ag2wl9chlg2f5u2a’, ‘mnemonic’: ‘hire clog elephant pencil shallow unable idle chat later fiscal party pudding describe sure december uniform grab modify clutch inner group spin fancy congress’}
{‘name’: ‘reserve’, ‘type’: ‘local’, ‘address’: ‘cro19x027pxmdsg2luthunlypkedwx45qm8hnyjxe0’, ‘pubkey’: ‘cropub1addwnpepqds6cdv67f6xqw2trqe5a7l3znmt600ht7legm4m6rarf0drf9r273v2rzf’, ‘mnemonic’: ‘employ frozen skill uphold piece sudden gain buddy large pupil donate double must shoot curtain couch boil bundle render comic depend calm donor link’}
{‘name’: ‘launch’, ‘type’: ‘local’, ‘address’: ‘cro1jyd8ul8ze2eyppet3ajl3t9sjfglf76l0ukgns’, ‘pubkey’: ‘cropub1addwnpepqtapys5eyeg28nak7xurka7phugp8m5fyzcc92d2sz86hgf7s85lqw6jgqv’, ‘mnemonic’: ‘beef pistol fury work kick thumb delay side cement suggest tenant blind inform copy cross pull clinic arrow curtain laugh item oven clinic add’}
```

Kindly save these mnemonics for key recovery later.

Blocks is now being generated! You can view the blockchain data by the rpc port of the `node0` (first node): [http://localhost:26657/](http://localhost:26657/).
Futhermore, you can also use the swagger doc of `node0` at [http://localhost:26654/swagger/](http://localhost:26654/swagger/).

## Interact with the chain

### Restore the key wallet

As in the last section, pre-created Hierarchical Deterministic (HD) Wallet wallet mnemonic with genesis funds inside are prepared for you in the Devnet. To gain access to the funds, kindly restore the key by using the mnemonic before moving on to the next step.

**Note**: The keys are stored in your operating system by default, we will use `--keyring-backend test` for simplicity

- Firstly, restore the key name as `launch`:

  ```bash
  $ chain-maind keys add launch --recover --keyring-backend test

   > Enter your bip39 mnemonic
   beef pistol fury work kick thumb delay side cement suggest tenant blind inform copy cross pull clinic arrow curtain laugh item oven clinic add

   - name: launch
   type: local
   address: cro1jyd8ul8ze2eyppet3ajl3t9sjfglf76l0ukgns
   pubkey: cropub1addwnpepqtapys5eyeg28nak7xurka7phugp8m5fyzcc92d2sz86hgf7s85lqw6jgqv
   mnemonic: ""
   threshold: 0
   pubkeys: []
  ```

- Now you can check the balance of it by running
  ```bash
  $ chain-maind q bank  balances cro1jyd8ul8ze2eyppet3ajl3t9sjfglf76l0ukgns
  balances:
  - amount: “20000000000”
  denom: basecro
  pagination:
  next_key: null
  total: “0"
  ```
  We can see that there is `20000000000` basecro (=`200`cro) in this address as expected.

### Transfer CRO to another address

Once we have a restore the key and the address , we are now ready to transfer token between different wallets; we can create another wallet with the name `Bob`, or whatever name you like.

```bash
$ chain-maind keys add Bob --keyring-backend test
   - name: Bob
   type: local
   address: cro13vy5dks0ns99h3rkuqtka3wasp0aqax6feeqfa
   pubkey: cropub1addwnpepqwy37un50y4wd6npgx0eegjj50xdjk9a00uuw996zcer534n5edz5ka28ml
   mnemonic: ""
   threshold: 0
   pubkeys: []
```

- Now you can transfer tokens to Bob, for example you can send `1cro` to Bob's address by

   ```bash
   $ chain-maind tx bank send launch cro13vy5dks0ns99h3rkuqtka3wasp0aqax6feeqfa 1cro --keyring-backend test --chain-id chainmaind
   ```


- Lastly, check `balance` of Bob's address:

   ```bash
   $ chain-maind query bank  balances cro1qrnqv9hgmyr4nrdr905wf2h4w6gvwypwhklhar
      balances:
      - amount: “100000000”
      denom: basecro
      pagination:
      next_key: null
      total: “0"
   ```

Congratulations! You've successfully transferred tokens to Bob.

If you are interested in contributing to or joining our testnet, you can continue reading the following sections about [Joining the Croeseid Testnet](./thaler-testnet.md).
