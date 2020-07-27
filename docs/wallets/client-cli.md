# ClientCLI

ClientCLI is a command line interface for the wallet client. It supports wallet management, funds transfer and basic staking operations.

## Build and configurations

### Build Prerequisites

- Crypto.com Chain: [https://github.com/crypto-com/chain](https://github.com/crypto-com/chain)

### Build instructions

ClientCLI is bundled with the Crypto.com chain code. After you have [compile the binaries](https://crypto-com.github.io/getting-started/#compile-chain), it is available under `./bin/client-cli`.

### How to use

```bash
$ ./bin/client-cli [command] [argument]
```

There is also a help command available at

```bash
$ ./bin/client-cli --help
```

### Wallet Storage

By default, your wallets are stored in the folder `./storage` located at the same path of where `./client-cli` is executed.

Make sure you have backed up your wallet storage after creating the wallet or else your funds may be inaccessible in case of accident forever.

#### Configure Wallet Storage Location

To customize the wallet storage location when running ClientCLI, you can update the environment variable `CRYPTO_CLIENT_STORAGE` with the path:

```bash
$ CRYPTO_CLIENT_STORAGE=/my-wallet-storage ./bin/client-cli ...
```

### Chain ID

Crypto.com Chain has different [Chain ID](../getting-started/chain-id-and-network-id#chain-id) to distinguish between _devnet_, _testnet_ and _mainnet_. Accordingly, you should set up your ClientCLI and use the correct configuration for the node you are connecting to.

#### Configure Chain ID

To customize the Chain ID while running ClientCLI, you can update the environment variable `CRYPTO_CHAIN_ID` with the full chain ID. For example, we can change it to the testnet with Chain ID `testnet-thaler-crypto-com-chain-42` by:

```bash
$ CRYPTO_CHAIN_ID=testnet-thaler-crypto-com-chain-42 ./bin/client-cli ...
```

### Configure Tendermint URL

Similarly, we can also change the Tendermint URL when running ClientCLI, update environment variable `CRYPTO_CLIENT_TENDERMINT` with the Tendermint URL.

### Options

A list of supported environment variables of ClientCLI is listed below:

| Option                     | Description                                                                  | Type              | Default Value                  |
| -------------------------- | ---------------------------------------------------------------------------- | ----------------- | ------------------------------ |
| CRYPTO_CLIENT_DEBUG        | How detail should the debug message be on error                              | Boolean           | false                          |
| CRYPTO_CHAIN_ID            | Full [Chain ID](../getting-started/chain-id-and-network-id.md#chain-id)      | String            | ---                            |
| CRYPTO_CLIENT_STORAGE      | Wallet storage directory                                                     | Storage directory | .storage                       |
| CRYPTO_CLIENT_TENDERMINT   | Websocket endpoint for tendermint                                            | String            | ws://localhost:26657/websocket |
| CRYPTO_GENESIS_FINGERPRINT | [The genesis fingerprint](../getting-started/genesis.md#genesis-fingerprint) | String            | ---                            |

## Wallet operations

First of all, you will need a wallet to store and spend your CRO.

### `wallet new` - Create a new wallet

Currently, `client-cli` supports two types of wallets: The _basic wallet_ and the _HD ([Hierarchical Deterministic](https://en.bitcoin.it/wiki/Deterministic_wallet)) wallet_.

::: warning Important note:
For safety reasons, it is **strongly suggested** that users should create their wallet in the form of an HD wallet to prevent loss or damage of the device.
:::

- **Basic wallet** [`--type basic`]

You can create a new basic wallet with the name "Default" as in the following example:
::: details Example: Create a basic wallet

```bash
$ ./bin/client-cli wallet new --name Default --type basic
Enter passphrase:## Enter passphrase for your wallet ##
Confirm passphrase:## Confirm passphrase for your wallet ##
Authentication token: 42a4c4003bfc3accbc2c0e4aff526edbb535f5b8d0c19f27fa52551d3ed52c08
```

:::

- **HD wallet** [`--type hd`]

  The HD wallet comes with a "seed phrase", which is serialized into a human-readable 24-word mnemonic. User can [restore](#wallet-restore-restore-an-hd-wallet) their wallet and associated addresses with the seed phrase.
  ::: details Example: Create a HD wallet

  You can create a new HD wallet with the name "Default_HD" by running

  ```bash
  $ ./bin/client-cli wallet new --name Default_HD --type hd
  Enter passphrase:## Enter passphrase for your wallet ##
  Confirm passphrase:## Confirm passphrase for your wallet ##
  Please store following mnemonic safely to restore your wallet later:
      ## Your 24-word mnemonic will be shown here ##
  Authentication token: a6cdb10fee25097775354162f379b4fbb6089b2a1c02d4b978e70821a962c185
  ```

  :::

:::danger
It is important that you keep the passphrase (and mnemonic for HD wallet) secure, as there is **no way** to recover it. You would not be able to access the funds in the wallet if you forget the passphrase.
:::

### `wallet restore` - Restore an HD wallet

You can restore an HD wallet with the mnemonic.

::: details Example: Restore an HD wallet

```bash
$ ./bin/client-cli wallet restore --name  Default_HD
Enter passphrase:## Enter passphrase for your wallet ##
Confirm passphrase:## Confirm passphrase for your wallet ##
Enter mnemonic:
## Enter your 24-word mnemonic here ##
Confirm mnemonic:
## Confirm your 24-word mnemonic here ##
Authentication token: a6cdb10fee25097775354162f379b4fbb6089b2a1c02d4b978e70821a962c185
```

:::

### `wallet list` - List your wallets

Multiple wallets can be created when needed. You can list all wallets saved under the storage path.

::: details Example: List all of your wallets

```bash
$ ./bin/client-cli wallet list
Wallet name: Default
```

:::

### `wallet delete` - Delete a wallet

You can delete a wallet in your storage path.

:::danger
Make sure you have backed up the wallet mnemonic before removing any of your wallets, as there will be no way to recover your wallet without the mnemonic.
:::

::: details Example: Remove a wallet

```bash
$./bin/client-cli wallet delete
```

:::

### `wallet auth-token` - Show the authentication token

All authorised commands required the authentication token of the wallet, it can be shown by using the `auth-token` subcommand:

::: details Example: Show authentication token of your wallet

```bash
$ ./bin/client-cli wallet auth-token --name Default_HD
Enter passphrase:## Enter passphrase of your wallet ##
Authentication token: a6cdb10fee25097775354162f379b4fbb6089b2a1c02d4b978e70821a962c185
```

:::

### `wallet export` - Export your wallet to a file

You can export and backup your wallet(s) by using the `export` subcommand:

::: details Example: Export your wallet(s)
Exporting the wallet _Default_HD_ to the new file _"backup"_ :

```bash
$ ./bin/client-cli wallet export --name Default_HD --to_file backup
Enter authentication token for Default_HD: ## Insert your authentication token ##
Get all 1 wallets info.
Export 1 wallet to file "backup" success
```

Note: Multiple wallets can be exported at the same time. Simply separate the wallet names with commas.

:::

### `wallet import` - Import your wallet from a file

You can export and backup your wallet(s) by using the `import` subcommand:

::: details Example: Import wallet
Importing the wallet _"Default_HD"_ from the file _"backup"_ :

```bash
$ ./bin/client-cli wallet import --file ./backup
Input passphrase for wallet Default_HD
Authentication token of wallet pocket:
```

:::

## Address operations

Once we have a wallet, we are now ready to create new addresses for receiving/staking funds. The most common address types in Crypto.com Chain are

1. **Transfer address**: For normal token transfer;
1. **Staking address**: For staking related operations.

### `address new` - Create a new address

Addresses can be created by using the `address new` command:

- Create a _Transfer_ address [`--type Transfer`]

  ::: details Example: Create a Transfer type address

  ```bash
  $ ./bin/client-cli address new --name Default --type Transfer
  Enter authentication token: ## Insert your authentication token ##
  New address: dcro1da35hvgcz6p977tud3xhuskup5jkkl8shn84rwffgjcsnffpz64qd73e0k
  ```

  :::

- Create a _Staking_ address [`--type Staking`]

  ::: details Example: Create a Staking type address

  ```bash
  $ ./bin/client-cli address new --name Default --type Staking
  Enter authentication token:
  New address: 0x377c85a79d843753da78ff970a388cbc6a49c620
  ```

  :::

### `address list`- List your addresses

You can list all of your addresses with specified type under a wallet.

::: details Example: List your addresses

- List your Transfer type address:

  ```bash
  $ ./bin/client-cli address list --name Default --type Transfer
  Enter authentication token: ## Insert your authentication token ##
  dcro1da35hvgcz6p977tud3xhuskup5jkkl8shn84rwffgjcsnffpz64qd73e0k
  ```

- List your Staking type address:

  ```bash
  $ ./bin/client-cli address list --name Default --type Staking
  Enter authentication token: ## Insert your authentication token ##
  0x377c85a79d843753da78ff970a388cbc6a49c620
  ```

- If there are no address under the wallet:

  ```bash
  $ .bin//client-cli address list --name Default -t Transfer
  Enter authentication token: ## Insert your authentication token ##
  No addresses found!
  ```

:::

### `sync` - Sync your wallet

It is important to keep your wallet sync with the blockchain before doing any wallet operation. This can be easily done by the `sync` command.

:::details Example: Sync your wallet

```bash
$  ./bin/client-cli sync  --name Default
Enter authentication token: ## Insert your authentication token ##
Synchronizing: 2168 / 2168 [=============================================] 100.00 % 3.29/s
Synchronization complete!
```

:::

### `view-key`- Obtain the View Key

In Crypto.com Chain, transactions are encrypted, and it can only be viewed by the owner of the view key. This functionality provides us with an extra layer of privacy and accountability.

It is important that in order for the receiver to spend the funds, they would need to be able to view the transaction details and obtain the corresponding UTXO data.
Therefore, the receiver's view key is one of the essential components when launching a transaction.

::: details Example: Obtain the View Key
The view key can be obtained by running:

```bash
$ ./bin/client-cli view-key  --name Default
Enter authentication token: ## Insert your authentication token ##
View Key: 0253be0b7af1cddc7a80207ef1a0b647f5649670415a8417424f23210569c28173
```

:::

## Transaction operations

Transactions can be created using the `transaction new` command. In this section, we break it down into [Transfer](#transfer-operations) and [Staking](#staking-operations) operations for different transaction types.

### Transfer operations

Transfer operation involves the transfer of tokens between two _transfer_ addresses.

#### Transfer prerequisites

As mentioned [earlier](#view-key-obtain-the-view-key), to send funds to another address, we will have to obtain the receiver's **transfer address** and their **view key** in the first place. More than one view keys can be inserted into a transaction.

#### Send Funds [`--type Transfer`]

:::details Example: Send funds from a transfer address to another.

```bash
$ ./bin/client-cli transaction new --name Default --type Transfer
Enter authentication token: ## Insert your authentication token ##
Enter output address: ## Insert the output address ##
Enter amount (in CRO): ## Insert the transfer amount ##
Enter timelock (seconds from UNIX epoch) (leave blank if output is not time locked):
More outputs? [yN] N
Enter view keys (comma separated) (leave blank if you don't want any additional view keys in transaction): ## Insert the view-key ##
```

:::

#### Receive funds

On the other hand, similarly, to receive funds, you will need to present your **address** and **view key** to the sender.

### Staking operations

Staking operations involve the interaction between _transfer_ address and _staking_ address. It allows you to lock/unlocking funds for staking purposes.

- **Bond you funds** [`--type Deposit`]

  To bond funds for staking, you can deposit funds (an unspent transaction) to a _staking_ address by the `Deposit` operation.

  ::: details Example: Bond funds from a transfer address to a staking address

  ```bash
  $ ./bin/client-cli transaction new --name Default --type Deposit
  Enter authentication token: ## Insert your authentication token ##
  Enter staking address: 60000000 ## Insert receiver's staking address ##
  Enter amount (in CRO): 60000000.00000000 ## Insert the deposit amount ##
  Is the amount ********* CRO? [Y|N]:Y ## Verify the deposit amount ##
  create a transfer transaction to make a UTXO with 60000000.00000299 amount(fee is 0.00000299)
  broadcast transfer transaction
  create deposit transaction
  deposit success, transaction id is: ***********
  Transaction successfully created!
  ```

  - Remarks: In the above example, If you would like to deposit _60000000_ CRO, there will be a `Transfer` type transaction of _60000000_ CRO + _fees_ to yourself at the beginning. Afterwards, we spend this newly obtained unspent transaction output of _60000000_ CRO for the `Deposit` transaction.
    :::

 

- **Unlock your bonded funds** [`--type Unbond`]
  On the other hand, we can create a `Unbond` transaction to unbond staked funds

  ::: details Example: Unbond funds from a staking address

  ```bash ./bin/client-cli transaction new --type unbond --name Default
  Enter authentication token: ## Insert your authentication token ##
  Enter staking address: ## Insert the target staking address ##
  Enter amount (in CRO): ## Insert the unbonding amount ##
  Transaction successfully created!
  ```

  :::

  ::: tip

  - The unbonded amount will go to the `Unbonded` balance in your staking address. It will be locked until the `unbonding_period` has passed. Details about the deposited funds in the staking address can be found by checking its [staking state](#state-check-the-staking-state).

  :::

- **Withdraw your unbonded funds** [`--type Withdraw`]

  Once the `unbonding_period` has passed, we can create a `Withdraw` transaction to withdraw the staked funds (view-key required)
  ::: details Example: Withdraw funds from a staking address

  ```bash
  $ ./bin/client-cli transaction new --name Default --type Withdraw
    Enter authentication token: ## Insert your authentication token ##
    Enter staking address: ## Insert your staking address ##
    Enter transfer address: ## Insert the target transfer address ##
    Enter view keys (comma separated) (leave blank if you don't want any additional view keys in transaction):
    Transaction successfully created!
  ```

  :::

Please also refer to this [diagram](../getting-started/send_your_first_transaction.md#send-your-first-transaction) for interaction between _staking address_ and _transfer address_

### `transaction show` Show transaction details

You can show the detailed transaction metadata, inputs and outputs from a given transaction id:
::: details Example: Show transaction details

```bash
$ ./bin/client-cli transaction show  --id <transaction id> --name <wallet name>
  Enter authentication token: ## Insert your authentication token ##
  Transaction metadata:
  +----------------+--------+--------+-----+------------------+--------------+------------+
  | Transaction ID | In/Out | Amount | Fee | Transaction Type | Block Height | Block Time |
  +----------------+--------+--------+-----+------------------+--------------+------------+
  |................|........|........|.....|..................|..............|............|
  +----------------+--------+--------+-----+------------------+--------------+------------+
  Transaction inputs:
  +---------------+-------+
  | Transaction ID| Index |
  +---------------+-------+
  |...............|.......|
  +---------------+-------+
  Transaction outputs:
  +---------+-------+-------------------+---------------+
  | Address | Value | Time-locked until | Spent/Unspent |
  +---------+-------+-------------------+---------------+
  |.........|.......|...................|...............|
  +---------+-------+-------------------+---------------+

```

:::

## Balance & transaction history

### `balance` - Check your transferable balance

You can check your _transferable_ balance with the `balance` command.
:::details Example: Check your transferable balance

```bash
$ ./bin/client-cli balance --name Default
Enter authentication token: ## Insert your authentication token ##
+-----------+---------------+
| Total     | 1000.00000000 |
+-----------+---------------+
| Pending   | 0.00000000    |
+-----------+---------------+
| Available | 1000.00000000 |
+-----------+---------------+
```

:::

:::tip Note

- Please note that `balance` will only show your _transferable_ balance, for _staking_ related balance, please check it with the `state` [command](#state-check-the-staking-state).
- Once a transaction has been sent, the remaining amount ( _Total_ amount subtracted by the transaction amount and fees) will go to "_Pending_" status. The balance will be settled once the transaction has been confirmed. Therefore, It is suggested that you should `sync` your wallet before checking the balance to obtain the latest balance.
  :::

### `history` - Check your transaction history

Besides checking the transferable balance of your wallet, you can view a more detailed transaction history.

:::details Example: Check your transaction history

```bash
$ ./bin/client-cli history --name Default
Enter authentication token: ## Insert your authentication token ##
+----------------+--------+--------+-----+--------------+------------+
| Transaction ID | In/Out | Amount | Fee | Block Height | Block Time |
+----------------+--------+--------+-----+--------------+------------+
|................|........|........|.....|..............|............|
+----------------+--------+--------+-----+--------------+------------+
```

:::

It provides you with details such as the **Transaction ID**, **Direction**(In/out), **Amount** and **Fee** of the transaction, the **Block Height** of where the transaction happened and its corresponding **Block Time**.

### `state` - Check the staking state

Crypto.com Chain uses a mixed [UTXO+Accounts model](../getting-started/transaction-accounting-model.md#utxo-accounts-model), besides checking _transferable_ balance of a _transfer_ type address, we can check the [state](../getting-started/transaction-accounting-model.md#staked-state) of a _staking_ type address.

::: details Example: Check the state of a staking address

```bash
$ ./client-cli state --address <staking address>  --name <wallet name>

+-----------------+----------------------------+
| Nonce           |                          1 |
+-----------------+----------------------------+
| Bonded          |          50099999.99999671 |
+-----------------+----------------------------+
| Unbonded        |                 0.00000000 |
+-----------------+----------------------------+
| Unbonded From   | 2020-02-01 16:53:30 +08:00 |
+-----------------+----------------------------+
| Jailed Until    |                 Not jailed |
+-----------------+----------------------------+
| Punishment Type |               Not punished |
+-----------------+----------------------------+
| Slash Amount    |               Not punished |
+-----------------+----------------------------+
```

**Note**: The error message `Error: Invalid input: staking not found` will be displayed if there is no transaction associated with the staking address.
:::

## Advance operations and transactions

### `node-join` - Joining the network as a validator

Anyone who wishes to become a validator can submit a `NodeJoinTx` by

```bash
$ ./bin/client-cli transaction new --name Default --type node-join
```

See [here](../getting-started/staking.md#joining-the-network) for the actual requirement of becoming a validator.

### `unjail` - Unjailing a validator

Validator could be [punished](../getting-started/reward-and-punishments.md#validator-punishments) and [jailed](../getting-started/reward-and-punishments.md#jailing) due to network misbehaviour. After the jailing period has passed, one can broadcast a `UnjailTx` to unjail the validator and resume its normal operations by

```bash
$ ./bin/client-cli transaction new --name Default --type unjail
```

### `export`/`import` - Export & Import Transactions

As mentioned before, sender should add the receiver's view-key to the transaction. Because sender can't push data directly to the receiver. However, it is also possible to send / receive a payment by directly exchanging the (raw) transaction payload data. The sender (who creates the transaction) would export it, the receiver would import it and check the transaction data locally and check the transaction ID against the distributed ledger. Following explains the flow:

1.  **Sender**: Get your transaction id from the history, you may need to sync before running the following command:
    ::: details Example: Obtain the transaction id

    ```bash
    $ ./bin/client-cli history --limit ? --offset ? --name <sender_wallet>
    Enter authentication token: ## Insert your authentication token ##
    +----------------+--------+--------+-----+--------------+------------+
    | Transaction ID | In/Out | Amount | Fee | Block Height | Block Time |
    +----------------+--------+--------+-----+--------------+------------+
    |<transaction_id>|........|........|.....|..............|............|
    +----------------+--------+--------+-----+--------------+------------+

    ```

    :::

1.  **Sender**: Export the target transaction payload from the sender's wallet:
    ::: details Example: Export the raw transaction data

    ```bash
    $ ./bin/client-cli transaction export --id <transaction_id> --name <sender_wallet>
    Enter authentication token: ## Insert your authentication token ##

        ## transaction_payload_example ##
        eyJ0eCI6eyJ0eXBlIjoiVHJhbnNmZXJUcmFuc2FjdGlvbiIsImlucHV0cyI6W3siaWQiOiI3ZDk3NzVjNTcyODQ1ZjRlNzRjOGU5Y2Q1NjhkZjk4Mjk0NjQ1ODM1NDA5OGQzZDBlZjcxNzRmYmQ3NDdkMDhkIiwiaW5kZXgiOjF9XSwib3V0cHV0cyI6W3siYWRkcmVzcyI6InRjcm8xenR2MDZ6dzRtdHZ3NnhhZ25jMGdheTJkbXN5OHo5cjN4N2RwdGoycW5tdnBoNDY1YXQ5c251M2x1YSIsInZhbHVlIjoiMTAwMDAwMDAwMDAwIiwidmFsaWRfZnJvbSI6bnVsbH0seyJhZGRyZXNzIjoidGNybzFtODd5cTYwMmM2M2ZrY3p2ejZwcW5xY3JzOXZ0bnEzOHRuZjQ1a3lqMG1rdHY1ZGVkaDBxYTNmcHB2IiwidmFsdWUiOiI1OTk5ODk5OTk5OTk3ODg3IiwidmFsaWRfZnJvbSI6bnVsbH1dLCJhdHRyaWJ1dGVzIjp7ImNoYWluX2hleF9pZCI6IjQyIiwiYWxsb3dlZF92aWV3IjpbeyJ2aWV3X2tleSI6IjAzZDRkNWZiN2Q4MjJiZGUwZjYwOTgwNmU3ZTEzMDVmNTI3NjYzZmM5YWU2ZmZhMjJiNDVhMDc1NDRhOGU5OGY1YiIsImFjY2VzcyI6IkFsbERhdGEifV19fSwiYmxvY2tfaGVpZ2h0IjozMjQ2Mn0
    ```

    :::

1.  **Receiver**: The transaction can be imported into receiver's wallet by
    ::: details Example: Import the raw transaction data

    ```bash
    $ ./bin/client-cli transaction import --tx <transaction_payload> --name <receiver_wallet>

        Enter authentication token: ## Insert your authentication token ##

    import amount: <transaction_amount>
    ```

    :::

1.  Finally, receiver can verify this transaction by checking the [transaction history](#history-check-your-transaction-history)

### `multisig` - Multi-signature operations

Crypto.com Chain implemented the [threshold Multisig](https://blockstream.com/2019/02/18/en-musig-a-new-multisignature-standard/) for multi-signature related features. Specifically, a threshold multi-signature address requires multiple keys to authorize a transaction.

#### Create a public key for multi-signature address

To begin, we would need to create a new public key for the multi-signature address by the `new-address-public-key` command:

::: details Example: Create a public key for multi-signature address

```bash
  $ ./bin/client-cli multisig new-address-public-key --name <Wallet_name>
  ## Insert your authentication token ##
      Enter authentication token:
  Public key: 02a71aef2e97bdbffbf526548cf475103a82853fce43403eef40a55d17715fa6a1
```

:::

#### Generating a multi-signature address

Now we are ready to create a _M-of-N_ multi-signature address by the `new-address` command, where

- _M_ is the minimum signatures required to spend the funds from the multi-signature address;
- _N_ is the total number of keys involved;
- _N_ has to be greater or equal to _M_.

Some of the actual use cases of multi-signature are covered in these [application examples](https://en.bitcoin.it/wiki/Multisignature).

::: details Example: Create a M-of-N multi-signature address

```bash
  $ ./bin/client-cli multisig new-address --name <Wallet_name>
  ## Insert your authentication token ##
      Enter authentication token:
  ## Insert N different public keys for the multi-signature address ##
      Enter public keys(include self public key, separated by commas):<Public_Key_1, Public_Key_2, ..., Public_Key_N>
  ## Insert your own public key in the wallet ##
      input self public key: 02a71aef2e97bdbffbf526548cf475103a82853fce43403eef40a55d17715fa6a1
  ## Insert the number of signatures required to release the fund##
      how many signatures required: M
```

:::

#### List your public keys

We can list the public keys for multi-signature address by the `list-address-public-keys` command:

::: details Example: List public keys for multi-signature address

```bash
  $ ./bin/client-cli multisig list-address-public-keys --name <Wallet_name>
  ## Insert your authentication token ##
      Enter authentication token:
  Public key: 02a71aef2e97bdbffbf526548cf475103a82853fce43403eef40a55d17715fa6a1
```

:::

#### List your multi-signature addresses:

Finally, multi-signature addresses will be kept in your wallet after it has been generated. We can list them by using the
[address-list](#address-list-list-your-addresses) command as mentioned earlier.
::: details Example: List multi-signature addresses

```bash
  $ ./bin/client-cli address list --name <Wallet_name>
  ## Insert your authentication token ##
      Enter authentication token:
  Address: tcro1pra4uuphf2cykgd542kzt53echtt4tu68wpet6zf400m8wccfhes4ssmk9
  MultiSig Address: tcro1u7wuwrnfyqvc7gx77lxvl65dj3vczv3g8k7az7ls9rq7z87m4vlqkctkv4(1/2)
```

:::
