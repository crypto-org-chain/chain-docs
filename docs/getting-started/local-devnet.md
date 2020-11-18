# Devnet: Running Latest Development Node

::: warning caution
this page is for building and running the latest development version of the chain for testing purpose only. Development branch is under active development and is highly unstable and subject to breaking changes. You should expect a moderate amount of troubleshooting work is required.

For anyone interested in joining the crypto.com chain testnet,
please refer to our [testnet documentation](./croeseid-testnet.md).
:::

By following this tutorial, you can compile and run the latest development version of Crypto.com Chain from scratch. It is intended for testing purpose only.

## Overview

We will be using [pystarport](https://github.com/crypto-com/chain-main/tree/master/pystarport), a dedicated script similar to [cosmos starport](https://github.com/tendermint/starport) without the scaffolding feature to build a local development network with multiple validators.

## Install with Nix

### Install nix

Follow official instructions: https://nixos.org/download.html

### Use binary cache

If you are using linux, enable the cachix binary cache:

```
$ nix-env -iA cachix -f https://cachix.org/api/v1/install
$ cachix use crypto-com
```

### Install pystarport

Install the binded version, which install chain-maind together, and find it by absolute path:

```
$ nix-env -iA pystarport -f https://github.com/crypto-com/chain-main/archive/master.tar.gz
```

Install the unbinded version of pystarport, which find whatever version of chain-maind it finds in `PATH`:

```
$ nix-env -iA pystarport-unbind -f https://github.com/crypto-com/chain-main/archive/master.tar.gz
```

## Install pystarport manually

### Pre-requisites

- Python > 3.7.3
- [chain-maind](https://github.com/crypto-com/chain-main)

To install pystarport manually, run:

```
$ git clone https://github.com/crypto-com/chain-main.git
$ cd chain-main
$ pip3 install pystarport
```

## Customize your devnet

Jump to next section to start it without customization.

You can customize your devnet based on `examples/devnet.yaml`:

```yaml
chainmaind:  # The chain-id
  validators:
    - coins: 10cro # Tokens allocated for the first validator
      staked: 10cro # Tokens that were staked by the validator in the genesis
      moniker: awesome0 # Optional, default to node{i}
      hostname: localhost # Optional, default to localhost
      base_port: 26650 # Optional, default to BASE_PROT(26650) + i * 10
    - coins: 10cro
      staked: 10cro
      moniker: awesome1
      base_port: 26660
  accounts:
    - name: community
      coins: 100cro
    - name: ecosystem
      coins: 200cro
    - name: reserve
      coins: 200cro
      vesting: "1d" # Optional, vesting period of the account
    - name: launch
      coins: 100cro
  genesis: # Network parameters in the genesis can be specified in here
    app_state:
      staking:
        params:
          unbonding_time: "10s"
```

This configuration will give us a 2 validators devnet with the chain-id `chainmaind`; 4 accounts under the name of `community`, `ecosystem` `reserve` and `launch` with some allocated funds at the genesis.

You can also specify some of the network parameters in the genesis file of your devnet under `genesis:` for different testing purpose. As in the above example, we have specified the `unbonding_time` to be `10` seconds.

## Start the devnet

Once we finish with the configuration, we are ready to start the chain: in the repository root directory, run

```
$ pystarport serve --config examples/devnet.yaml
```

Afterwards, keys will be generated according to the configuration specified, the accounts information is generated in `data/chainmaind/accounts.json`, for example:

```json
[
  {"name": "validator", "type": "local", "address": "cro1u6w6hurleq6nxxdhn4p3avunkak6rm8t5dvk2q", "pubkey": "cropub1addwnpepqgn4qt0h0zvu6t9t05jwh7vedxwe4s8p5rv3jmq36v6l0c44falusftpgqm", "mnemonic": "off giggle census three heavy below balance vehicle useless reflect safe gym vivid fault fee connect miracle release material volume note coast laundry federal"},
  {"name": "validator", "type": "local", "address": "cro1yjvw6pwj7vvhg2j4rrxawcjevdqeqn5p4ujfds", "pubkey": "cropub1addwnpepqvc9kw0ntnny6u57g72pmecuvzy2k07y3xf9r0w4vjxhseg6ujwjuqq780g", "mnemonic": "fork security naive turtle bring pill imitate suffer clerk final century shock account pulp suffer gas runway punch extra spatial else solar mango explain"},
  {"name": "community", "type": "local", "address": "cro1f8hjnj8wv9rf2vy57gx80fs5f00nyczxuuelwj", "pubkey": "cropub1addwnpepqfr8zzx85yjw83uh33uhjajm8v3rr5lww6er6ysu7g6e3xendwsy7zadp4e", "mnemonic": "kangaroo session warrior echo make amount pear series random gas pizza cheap artefact senior lumber unknown beef rigid lemon dignity boss lesson cash innocent"},
  {"name": "ecosystem", "type": "local", "address": "cro1vfwelxg7yvgu0dhl3mcd9d8qf8g3q4zvknyhzk", "pubkey": "cropub1addwnpepqvz3hnk30qxx8z5n00zsq28ax0fhv057unqgnetunaxsdrj3y735qff30tn", "mnemonic": "result unable ball shove city high cook ignore rally student jaguar sound tiny duck nest yellow neglect people noodle crazy lazy evolve wheel machine"},
  {"name": "reserve", "type": "local", "address": "cro1krckx5esmlz3ga7gq9vkha92nqcw8u6w382s0u", "pubkey": "cropub1addwnpepqt4exeghsgsl2wrxp4atk63xj5ylnm95z3dkxevp8jrldvgy824duchdwky", "mnemonic": "bird best thank chalk agree buzz apple lens strike help eyebrow valley winner section protect panther april bright keen reunion burst episode obtain hockey"},
  {"name": "launch", "type": "local", "address": "cro1tgjt434qqr9y3ugmumwez5rule0ak86f2vdceg", "pubkey": "cropub1addwnpepqwn06cqy4895k5yhp0v5nx897c3s2psu4kzx4qq2r5eck2ljw557jx9e4pr", "mnemonic": "picture walnut banner glide once refuse cradle engage bike follow mistake clutch powder pencil ring walnut pigeon kind decade dutch tank immune coconut notable"}
]
```

Kindly save these mnemonics for key recovery later.

Blocks is now being generated! You can view the blockchain data by the rpc port of the `awesome0` (first node): [http://localhost:26657/](http://localhost:26657/).
Futhermore, you can also use the swagger doc of `awesome0` at [http://localhost:26654/swagger/](http://localhost:26654/swagger/).

## Interact with the chain

After the chain has been started, we may open up another terminal and start interacting with the chain by `chain-maind`.

### Key management

#### Restore the key

As in the last section, pre-created Hierarchical Deterministic (HD) mnemonic with genesis funds inside are prepared for you in the Devnet. To gain access to the funds, kindly restore the key by using the mnemonic before moving on to the next step.

**Note**: The keys are stored in your operating system by default, we will use `--keyring-backend test` for simplicity

- Firstly, restore the key name as `launch`:

  ```
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
  $ chain-maind query bank balances cro1jyd8ul8ze2eyppet3ajl3t9sjfglf76l0ukgns
  balances:
  - amount: “20000000000”
  denom: basecro
  pagination:
  next_key: null
  total: “0"
  ```
  We can see that there is `20000000000` basecro (=`200`cro) in this address as expected.

#### Transfer CRO to another address

Once we have a restore the key and the address , we are now ready to transfer token between different addresses; we can create another address with the key name `Bob`:

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

- Now you can transfer tokens to Bob, for example you can send `1` cro to Bob's address by

  ```
  $ chain-maind tx bank send launch cro13vy5dks0ns99h3rkuqtka3wasp0aqax6feeqfa 1cro --keyring-backend test --chain-id chainmaind
  ```

- Lastly, check `balance` of Bob's address:

  ```
  $ chain-maind query bank  balances cro1qrnqv9hgmyr4nrdr905wf2h4w6gvwypwhklhar
     balances:
     - amount: “100000000”
     denom: basecro
     pagination:
     next_key: null
     total: “0"
  ```

Congratulations! You've successfully transferred tokens to Bob.

### Staking Operation

Crypto.com chain is based on tendermint with the Proof of Stake (PoS) consensus algorithm. In this sub-section, we will be covering how to perform basic staking related transactions.

#### Check the current validator set

Firstly, we can check the details of the current validator set by the query command of chain-maind, for example:

```json
$ chain-maind query staking validators -o json | jq
[
  {
    "operator_address": "crocncl1h9037fa3rn2hpudj5p088574pcfh47sy8tu52q",
    "consensus_pubkey": "crocnclconspub1zcjduepq0etg4wk302r0h08fuvpep4vlu4mhv9xk8s0qp5vgae7u5cw296yqqmkc9m",
    "status": 3,
    "tokens": "1000000000",
    "delegator_shares": "1000000000.000000000000000000",
    "description": {
      "moniker": "awesome1"
    },
    "unbonding_time": "1970-01-01T00:00:00Z",
    "commission": {
      "commission_rates": {
        "rate": "0.100000000000000000",
        "max_rate": "0.200000000000000000",
        "max_change_rate": "0.010000000000000000"
      },
      "update_time": "2020-10-27T06:37:18.419202Z"
    },
    "min_self_delegation": "1"
  },
  {
    "operator_address": "crocncl173q6r8kc3gl8lccma23qe62q5c7v9h5q9mtx2j",
    "consensus_pubkey": "crocnclconspub1zcjduepq9zfvkh8m282xdv8h4fraqfudc9uc57g85nrga54ryc2fg577lweqyy97pu",
    "status": 3,
    "tokens": "1000000000",
    "delegator_shares": "1000000000.000000000000000000",
    "description": {
      "moniker": "awesome0"
    },
    "unbonding_time": "1970-01-01T00:00:00Z",
    "commission": {
      "commission_rates": {
        "rate": "0.100000000000000000",
        "max_rate": "0.200000000000000000",
        "max_change_rate": "0.010000000000000000"
      },
      "update_time": "2020-10-27T06:37:18.419202Z"
    },
    "min_self_delegation": "1"
  }
]
```

and we can see that there are two active validators `awesome0` and `awesome1` at the moment.

For each validator, we can see that it comes with an address and a public key:

- `"operator_address"` - The operator address, which is used for identifying the operators of validators;
- `"consensus_pubkey"` - The consensus public key, which is used for identifying the validator nodes participating in consensus.

#### Delegating to a validator

One can delegate their tokens to validator(s) and earn rewards by participating in the consensus process. For example, if you would like to delegate `5` cro to the validator node `"awesome0"`, It can be done by sending a transaction with the `Staking` module:

```
$ chain-maind tx staking delegate  crocncl173q6r8kc3gl8lccma23qe62q5c7v9h5q9mtx2j  5cro --from launch --keyring-backend test --chain-id chainmaind

{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"...}}}

confirm transaction before signing and broadcasting [y/N]: y

```

In order to do the above transaction, please note that you would need the "operator address" of the validator. This is the `"operator_address"` with the prefix `crocncl` we found in the last section.

#### Check and collect the delegation reward

As mentioned earlier, rewards will be accumulated once we delegate to a validator. We can check this reward by querying the `Distribution` module, for example:

```
$ chain-maind query distribution rewards cro1slecdwyyn35xex8ukhyddcaqml3ms59gx409rq crocncl173q6r8kc3gl8lccma23qe62q5c7v9h5q9mtx2j

rewards:
- amount: "550249.594800000000000000"
  denom: basecro
```

Afterwards, we can send the following transaction to withdraw the rewards: 

```
$ chain-maind tx distribution withdraw-rewards crocncl173q6r8kc3gl8lccma23qe62q5c7v9h5q9mtx2j --from launch --keyring-backend test --chain-id chainmaind

{"body":{"messages":[{"@type":"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"...}}}

confirm transaction before signing and broadcasting [y/N]: y
```
____
If you are interested in contributing to or joining our testnet, you can continue reading the following sections about [Joining the Croeseid Testnet](./thaler-testnet.md).
