# chain-maind

`chain-maind` is the all-in-one command-line interface. It supports wallet management, funds transfer and staking operations.

## Build and configurations

### Build Prerequisites

- Yuo can get the  latest `chain-maind` binary here from the [release page](https://github.com/crypto-org-chain/chain-main/releases);
- Alternatively, you can instal `chain-maind` by [homebrew](https://brew.sh/)
  ```bash 
  # tap the repo
  brew tap crypto-org-chain/chain-maind
  # install the CLI tool
  brew install chain-maind
  # get a list of all the commands
  chain-maind
  ```

### Using `chain-maind`

`chain-maind`is bundled with the Crypto.org Chain code. After you have obtain the latest `chain-maind` binary, run

```bash
$ chain-maind [command]
```

There is also a `-h, --help` command available

```bash
$ chain-maind -h
```

### Config and data directory

By default, your config and data are stored in the folder located at the `~/.chain-maind` directory.

Make sure you have backed up your wallet storage after creating the wallet or else your funds may be inaccessible in case of accident forever.

#### Configure chain-maind config and data directory

To specify the chain-maind config and data storage directory; you can add a global flag `--home <directory>`

### Configure Chain ID

Crypto.org Chain has different Chain ID to distinguish between _devnet_, _testnet_ and _mainnet_ . Accordingly, you should set up your chain-maind and use the correct configuration for the node you are connecting to. For example, you might create the follow aliases and add the global `--chain-id` flag, for example, `crypto-org-chain-mainnet-1` is the chain-id for the Crypto.com Chain mainnet:

```bash
alias chain-maind="chain-maind --chain-id crypto-org-chain-mainnet-1"
```

### Options

A list of commonly used flags of chain-maind is listed below:

| Option              | Description                   | Type         | Default Value    |
| ------------------- | ----------------------------- | ------------ | ---------------- |
| `--home`            | Directory for config and data | string       | `~/.chain-maind` |
| `--chain-id`        | Full Chain ID                 | String       | ---              |
| `--output`          | Output format                 | string       | "text"           |
| `--keyring-backend` | Select keyring's backend      | os/file/test | os               |

## Command list

A list of commonly used `chain-maind` commands.

| Command | Description                                             | List                                                         |
| ------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| `keys`  | [Keys management](#keys-management-chain-maind-keys)   | [`add <wallet_name>`](#keys-add-wallet-name-create-a-new-key)<br /><br />[`add <key_name> --recover`](#keys-add-key-name-recover-restore-existing-key-by-seed-phrase)<br /><br />[`list`](#keys-list-list-your-keys)<br /><br />[`show <key_name>`](#keys-show-key-name-retrieve-key-information)<br /><br />[`delete <key_name>`](#keys-delete-key-name-delete-a-key)<br /><br />[`export <key_name>`](#keys-export-key-name-export-private-keys) |
| `tx`    | [Transactions subcommands](#transactions-subcommands-chain-maind-tx)| [`bank send`](#tx-bank-send-transfer-operation)<br /><br />[`staking delegate`](#delegate-you-funds-to-a-validator-tx-staking-delegate-validator-addr-amount)<br /><br />[`staking unbond`](#unbond-your-delegated-funds-tx-staking-unbond-validator-addr-amount)<br /><br />[`staking create-validator`](#tx-staking-create-validator-joining-the-network-as-a-validator)<br /><br />[`slashing unjail`](#tx-slashing-unjail-unjail-a-validator) |
| `query` | [Query subcommands](#balance-transaction-history)                   | [`query bank balance`](#query-bank-balances-check-your-transferable-balance)                                         |

You may also add the flag `-h, --help` on `chain-maind [command]` to get more available commands and details.

::: details Example: More details of subcommand - tx staking 

```bash
$ chain-maind tx staking --help
Staking transaction subcommands

Usage:
  chain-maind tx staking [flags]
  chain-maind tx staking [command]

Available Commands:
  create-validator create new validator initialized with a self-delegation to it
  delegate         Delegate liquid tokens to a validator
  edit-validator   edit an existing validator account
  redelegate       Redelegate illiquid tokens from one validator to another
  unbond           Unbond shares from a validator

Flags:
  -h, --help   help for staking

Global Flags:
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/Users/.chain-maind")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace   
```
:::

## Keys management - `chain-maind keys`

First of all, you will need an address to store and spend your CRO.

### `keys add <wallet_name>` - Create a new key

You can create a new key with the name `Default` as in the following example:
::: details Example: Create a new address

```bash
$ chain-maind keys add Default 
- name: Default
  type: local
  address: cro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n
  pubkey: cropub1addwnpepqdct05khsxvtaaj0stuvayrpw0j8t6styr7vu05k3y63d5540ftuz8x6tsq
  mnemonic: ""
  threshold: 0
  pubkeys: []

**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

spare leopard potato hospital series salt model myself bronze print despair please mutual rival battle lumber crater brain food artwork goose west talent ritual
```

:::
The key comes with a "mnemonic phrase", which is serialized into a human-readable 24-word mnemonic. User can recover their associated addresses with the mnemonic phrase.

:::danger
It is important that you keep the mnemonic for address secure, as there is **no way** to recover it. You would not be able to recover and access the funds in the wallet if you forget the mnemonic phrase.
:::

### `keys add <key_name> --recover ` - Restore existing key by seed phrase

You can restore an existing key with the mnemonic.

::: details Example: Restore an existing key

```bash
$ chain-maind keys add Default_restore --recover 
> Enter your bip39 mnemonic
## Enter your 24-word mnemonic here ##
```

:::


### `keys list` - List your keys

Multiple keys can be created when needed. You can list all keys saved under the storage path.

::: details Example: List all of your keys

```bash
$ chain-maind keys list
    - name: Default
    type: local
    address: ## Address of "Default" ##
    pubkey: ## Pubkey of "Default" ##
    mnemonic: ""
    threshold: 0
    pubkeys: []
  - name: Default_restore
    type: local
    address: ## Address of "Default_restore" ##
    pubkey: ## Pubkey of "Default_restore" ##
    mnemonic: ""
    threshold: 0
    pubkeys: []
```

:::

### `keys show <key_name>` - Retrieve key information

You can retrieve key information by its name:

::: details Example: Retrieve key information - Account Address and its public key

```bash
$ chain-maind keys show Default --bech acc
- name: Default
  type: local
  address: cro1quw5r22pxy8znjtdkgqc65atrm3x5hg6vycm5n
  pubkey: cropub1addwnpepqdct05khsxvtaaj0stuvayrpw0j8t6styr7vu05k3y63d5540ftuz8x6tsq
  mnemonic: ""
  threshold: 0
  pubkeys: []
```

:::

::: details Example: Retrieve key information - Validator Address and its public key

```bash
$ chain-maind keys show Default --bech val
- name: Default
  type: local
  address: crocncl1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s3prz35z
  pubkey: crocnclpub1addwnpepq0ua07k8p3vrv5dap4pl77n4gjyyqsqrndzu0tdrr60ddhfg6ah0ck5ad5l
  mnemonic: ""
  threshold: 0
  pubkeys: []
```

:::

::: details Example: Retrieve key information - Consensus nodes Address and its public key

```bash
$ chain-maind keys show Default --bech cons
- name: Default
  type: local
  address: crocnclcons1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s34pfmlc
  pubkey: crocnclconspub1addwnpepq0ua07k8p3vrv5dap4pl77n4gjyyqsqrndzu0tdrr60ddhfg6ah0ch6kdrc
  mnemonic: ""
  threshold: 0
  pubkeys: []
```

:::


### `keys delete <key_name>` - Delete a key

You can delete a key in your storage path.

:::danger
Make sure you have backed up the key mnemonic before removing any of your keys, as there will be no way to recover your key without the mnemonic.
:::

::: details Example: Remove a key

```bash
$ chain-maind keys delete Default_restore1
Key reference will be deleted. Continue? [y/N]: y
Key deleted forever (uh oh!)
```

:::

### `keys export <key_name>` - Export private keys

You can export and backup your key by using the `export` subcommand:

::: details Example: Export your keys
Exporting the key _Default_ :

```bash
$ chain-maind keys export Default
Enter passphrase to encrypt the exported key: ## Insert passphrase (must be at least 8 characters)##
-----BEGIN TENDERMINT PRIVATE KEY-----
kdf: bcrypt
salt: ## Salt of the key ##
type: secp256k1

## Tendermint private key ##
-----END TENDERMINT PRIVATE KEY-----
```

:::

### The keyring `--keyring-backend` option
Interacting with a node requires a public-private keypair. Keyring is the place holding the keys. The keys can be stored in different locations with specified backend type. 
```
$ chain-maind keys [subcommands] --keyring-backend [backend type]
```
### `os` backend
The default `os` backend stores the keys in operating system's credential sub-system, which are comfortable to most users, yet without compromising on security. 

Here is a list of the corresponding password managers in different operating systems: 
- macOS (since Mac OS 8.6): [Keychain](https://support.apple.com/en-gb/guide/keychain-access/welcome/mac)
- Windows: [Credentials Management API](https://docs.microsoft.com/en-us/windows/win32/secauthn/credentials-management)
- GNU/Linux:
  - [libsecret](https://gitlab.gnome.org/GNOME/libsecret)
  - [kwallet](https://api.kde.org/frameworks/kwallet/html/index.html)

### `file` backend
The `file` backend stores the encrypted keys inside the app's configuration directory. A password entry is required everytime a user access it, which may also occur multiple times of repeated password prompts in one single command. 

### `test` backend
The `test` backend is a password-less variation of the `file` backend. It stores unencrypted keys inside the app's configuration directory. It should only be used in testing environments and never be used in production.

## Transactions subcommands - `chain-maind tx`

### `tx bank send ` - Transfer operation

Transfer operation involves the transfer of tokens between two addresses.

#### **Send Funds** [`tx bank send <from_key_or_address> <to_address> <amount> <network_id>`]

:::details Example: Send 10cro from an address to another.

```bash
$ chain-maind tx bank send Default cro17waz6n5a4c4z388rvc40n4c402njfjgqmv0qcp 10cro --chain-id crypto-org-chain-mainnet-1
  ## Transaction payload##
  {"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

### `tx staking` - Staking operations

Staking operations involve the interaction between an address and a validator. It allows you to create a validator and lock/unlocking funds for staking purposes.

#### **Delegate you funds to a validator** [`tx staking delegate <validator-addr> <amount>`]

To bond funds for staking, you can delegate funds to a validator by the `delegate` command

::: details Example: Delegate funds from `Default` to a validator under the address `crocncl1zd...rz35z`

```bash
$ chain-maind tx staking delegate crocncl1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s3prz35z 100cro --from Default --chain-id crypto-org-chain-mainnet-1
## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgDelegate"....}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

#### **Unbond your delegated funds** [`tx staking unbond <validator-addr> <amount>`]

On the other hand, we can create a `Unbond` transaction to unbond the delegated funds

::: details Example: Unbond funds from a validator under the address `crocncl1zdl...rz35z`

```bash
$ chain-maind tx staking unbond crocncl1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s3prz35z 100cro --from Default --chain-id crypto-org-chain-mainnet-1
## Transaction payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgUndelegate"...}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

::: tip

- Once your funds were unbonded, It will be locked until the `unbonding_time` has passed.

:::

## Balance & transaction history

### `query bank balances` - Check your transferable balance

You can check your _transferable_ balance with the `balances` command under the bank module.
:::details Example: Check your address balance

```bash
$ chain-maind query bank balances cro1zdlttjrqh9jsgk2l8tgn6f0kxlfy98s3zwpck7

balances:
- amount: "10005471622381693"
  denom: basecro
pagination:
  next_key: null
  total: "0"

```

:::

## Advance operations and transactions

### `tx staking create-validator` - Joining the network as a validator

Anyone who wishes to become a validator can submit a `create-validator` transaction by

```bash
$ chain-maind tx staking create-validator [flags]
```

::: details Example: Joining the network as a validator

```bash
$ chain-maind tx staking create-validator \
--amount="100cro" \
--pubkey="crocnclconspub1zcjduepqg0yml2l63qjnhr2cuw4tvprr72tle0twf3zymrxllmr0sj9uv3tqmpcrhs" \
--moniker="The_new_node" \
--chain-id="cro-test" \
--commission-rate="0.10" \
--commission-max-rate="0.20" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1" \
--from=node1
## Transactions payload##
{"body":{"messages":[{"@type":"/cosmos.staking.v1beta1.MsgCreateValidator"...}
confirm transaction before signing and broadcasting [y/N]: y
```

:::

(TODO: details of each flag )

### `tx slashing unjail` - Unjail a validator

Validator could be punished and jailed due to network misbehaviour, for example if we check the validator set:

```bash
$ chain-maind query staking validators -o json | jq
................................
    "operator_address": "crocncl18prgwae59zdqpwye6t4xftmq3d87vl0h0rj0qq",
    "consensus_pubkey": "crocnclconspub1zcjduepqg0yml2l63qjnhr2cuw4tvprr72tle0twf3zymrxllmr0sj9uv3tqmpcrhs",
    "jailed": true,
    "status": 1,
................................
```

After the jailing period has passed, one can broadcast a `unjail` transaction to unjail the validator and resume its normal operations by

```bash
$ chain-maind tx slashing unjail --from node1 --chain-id crypto-org-chain-mainnet-1
  {"body":{"messages":[{"@type":"/cosmos.slashing.v1beta1.MsgUnjail"...}]}
  confirm transaction before signing and broadcasting [y/N]: y
```
