# Devnet: Running Latest Development Node

::: warning caution
this page is for building and running the latest development version of the chain for testing purpose only. development branch is under active development and is highly unstable and subject to breaking changes. you should expect a moderate amount of troubleshooting work is required.

for anyone interested in joining the crypto.com chain testnet,
please refer to our [testnet documentation](./croeseid-testnet.md).
:::

By following this tutorial, you can compile and run the latest development version of Crypto.com Chain from scratch. It is intended for testing purpose only.

For the ease of environment setup, we will be using `Microsoft Azure`. With supported hardware, you can run the chain locally. However, since there are many variations in hardwares and OSs, the steps to setup may be different from this documentation and we will not cover it.

## Pre-requisites

#### Intel® Software Guard Extensions (Intel® SGX)

Because we utilize the technology of `Intel® Software Guard Extensions (Intel® SGX)`
for [payment data confidentiality](../protocol/transaction-privacy.md#motivation), the pre-requisites are a little more strict than the other
chains' setup. A special type of hardware is needed and the reference of [SGX-hardware](https://github.com/ayeks/SGX-hardware)
could help you identify if your current hardware supports `Intel® SGX` or not.

If your development machine does not support SGX, we recommend spinning up a cloud instance listed in the [this reference](https://github.com/ayeks/SGX-hardware#cloud-vendors). In this guide, we will walk through the process of setting it up on [Azure Confidential Compute VM](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-azure-compute.acc-virtual-machine-v2?tab=overview).

#### Supported OS

We officially support Linux only. Other platforms may work but there is no guarantee. We will extend our support to other platforms after we have stablized our current architecture.

## Overview

Before diving into details, we would like to introduce you the big picture of Crypto.com Chain's main components as follows:

![](./assets/big_pic.png)

At the end of this getting-start document, you will be running four components:

- `chain-abci` as main chain process.
- `client-rpc` as rpc server for client's interactions.
- `tendermint` for consensus.
- `tx-query-app` allows semi-trusted client querying of sealed tx payloads.

### Azure Account Creation

You will first need to create an [Microsoft Azure](https://azure.microsoft.com/) account with a `pay-as-you-go` subscription. This will require providing your credit card information to `Microsoft Azure` and you may be subject to charges when you create a virtual machine.

Please read `Microsoft Azure` free trial introduction to see if you are eligible for the free-tier.

### Create your SSH key

To access your remote Azure VM later, you will first need to create an SSH key in your local computer. You can follow the steps [here](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Azure VM creation

1. Log in into the portal of Azure computing
1. Create a new [Azure Confidential Compute VM](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-azure-compute.acc-virtual-machine-v2?tab=overview) with the following config.
   - **Region**: Azure Confidential Compute VM is available in a number of regions only. You can check the latest region support [here](https://azure.microsoft.com/en-gb/global-infrastructure/services/?products=virtual-machines&regions=all).
   - **Image**: `Ubuntu Server 18.04 (Gen 2)`
   - **Authentication type**: `SSH Public Key`
   - **SSH public key**: Copy the SSH key you have generated from the above step.

![](./assets/azure_setup_1.png)

3. Choose your virtual machine settings
   - Make sure to enable SSH public inbound ports:

![](./assets/azure_setup_2.png)

4. Click "Create" to create the VM

## VM environment setup

1. Go to your newly-created Azure VM details page and copy your newly-created Azure VM `Public IP Address`. Then SSH to your the machine and set up the environment for Crypto.com Chain.

   ```bash
   $ ssh {Azure VM Username}@{Azure VM Public IP Address}
   ## Example: ssh crypto@127.0.0.1
   ```

1. Install `Docker`: you can refer to the following document on ["How To Install and Use Docker on Ubuntu 18.04"
   ](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)

   Make sure you have complete the part of `Executing the Docker Command Without Sudo` by:

   ```bash
   $ sudo usermod -aG docker ${USER}
   ```

   - Install build dependencies

   ```bash
   $ sudo apt install build-essential
   ```

   - Clone the main chain repo

   ```bash
   $ git clone https://github.com/crypto-com/chain.git
   ```

### Uninstall DCAP SGX Driver

::: tip Azure VM Intel SGX driver
Starting from July 2020, Azure DCsv2 (Confidential Cloud) instance have been upgraded to use DCAP driver higher than v1.32 which is not compatible with our chain. In this step we will re-install the SGX driver with a compatible one.
:::

1. Remove existing DCAP driver. This will take 5 minutes
   ```bash
   $ cd chain
   $ make rm-dcap-sgx-driver
   ```
1. Reboot your VM
   ```bash
   $ sudo reboot
   ```
1. Your Azure VM will now restart and you will be kicked from the SSH session. Wait for 10 minutes and SSH to your VM again
   ```bash
   $ ssh {Azure VM Username}@{Azure VM Public IP Address}
   ## Example: ssh crypto@127.0.0.1
   ```
1. Install the compatible SGX driver.
   ```bash
   $ ch chain
   $ make install-isgx-driver
   ```

## Build binary and Docker images

1. Build the Crypto.com Chain binary files:

   ```bash
   $ make build
   ```

1. It will take you 20 - 30 minutes. After the build, check the binary files are compiled successfully in following directory:

   ```bash
   $ ls target/debug

   chain-abci client-rpc client-cli tx-query-app ...
   ```

1. Build the docker image with the compiled local binary files using following command:

   ```bash
   $ make image
   ```

1. Check the image is built successfully:

   ```bash
   $ docker images

   REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE
   crypto-chain            develop             817f6c7c7a76        - seconds ago      940MB
   ```

### Prepare SPID & KEY

Before kicking off all the components, there is one more step to go, which is
registering your own accessing ID and KEY for Intel SGX attestation service.

:::tip Enhanced Privacy ID (EPID)
The Intel SGX attestation service is a public web service operated by Intel for client-based privacy focused usages on PCs or workstations. The primary responsibility of the Intel SGX attestation service is to verify attestation evidence submitted by relying parties. The Intel SGX attestation service utilizes Enhanced Privacy ID (EPID) provisioning, in which an Intel processor is given a unique signing key belonging to an EPID group. During attestation, the quote containing the processor’s provisioned EPID signature is validated, establishing that it was signed by a member of a valid EPID group. A commercial use license is required for any SGX application running in production mode accessing the Intel SGX attestation service.
:::

In short, you should go to [Intel® SGX Services](https://api.portal.trustedservices.intel.com)
to sign up for the ID and KEY. It won't take you more than 5 minutes.

1. Sign up/Sign in to [Intel® SGX Services](https://api.portal.trustedservices.intel.com)
2. Enroll in [Intel® SGX Attestation Service](https://api.portal.trustedservices.intel.com/EPID-attestation) by subscribing to the product ["DEV Intel® Software Guard Extensions Attestation Service (Unlinkable)"](https://api.portal.trustedservices.intel.com/Products/dev-intel-software-guard-extensions-attestation-service-unlinkable).
3. Go to [Manage Subscriptions page](https://api.portal.trustedservices.intel.com/developer), your `SPID` and `Primary key` will be shown on the portal as below:

   ![](./assets/intel_sub.png)

   :::tip Page not found
   If you see page not found error when subscribing the Intel® SGX Attestation Service, make sure to sign in to [Intel® SGX Services](https://api.portal.trustedservices.intel.com/EPID-attestation) first.
   :::

4. After you obtained your `SPID` and `Primary key` from Intel, you should embed them to your `.profile` file as environment variables. So, make sure append the following lines in your `.profile` file by running the command:

   ```bash
   $ echo '
   export SPID={YOUR_SPID}
   export IAS_API_KEY={YOUR_PRIMARY_KEY}
   ' >> ~/.profile
   ```

5. Surely, remember to source the new `.profile` file:

   ```bash
   $ source ~/.profile
   ```

## Prepare environment to run the chain

- Prepare initial chain data and try to install Intel SGX if the SGX device is not ready.

  ```bash
  $ sudo make create-path
  $ sudo make chown-path user=$(id -u) group=$(id -g)
  $ make prepare
  ```

## Run chain components

1. Run all the components of Crypto.com Chain with following command:

   ```bash
   $ make run TX_QUERY_HOSTNAME={YOUR_VM_HOSTNAME}
   ```

   Depending on where you will run your wallet in the next step, `{YOUR_VM_HOSTNAME}` will have different values:
   | Wallet Location | `{YOUR_VM_HOSTNAME}` |
   | --- | --- |
   | In the same Azure machine | `127.0.0.1` |
   | Remote (e.g. from your computer) | Azure VM IP address |
   | Inside the node Docker network | Ignore `TX_QUERY_HOSTNAME` |

1. Then you can check if all containers are running normally:

   ```bash
   $ docker ps

   CONTAINER ID     IMAGE                           COMMAND                  CREATED STATUS   PORTS                                  NAMES
   fc51af59593b     crypto-chain:develop            "client-rpc --port=2…"   -       -        0.0.0.0:26659->26659/tcp               client-rpc
   bc586070744b     crypto-chain:develop            "chain-abci --chain_…"   -       -                                               chain-abci
   ade1db657cd8     tendermint/tendermint:v0.32.8   "/usr/bin/tendermint…"   -       -        0.0.0.0:26656-26657->26656-26657/tcp   tendermint
   800f173dccc7     crypto-chain:develop            "bash ./run_tx_query…"   -       -        0.0.0.0:26651->26651/tcp               sgx-query
   ```

1. Besides, you can check the chain-abci and Tendermint status by following commands:

   ```bash
   $ docker logs -f chain-abci
   [-T08:50:02Z INFO  chain_abci::app] received beginblock request
   [-T08:50:02Z INFO  chain_abci::app] received endblock request
   [-T08:50:02Z INFO  chain_abci::app] received commit request
   [-T08:50:03Z INFO  chain_abci::app] received beginblock request
   [-T08:50:03Z INFO  chain_abci::app] received endblock request
   [-T08:50:03Z INFO  chain_abci::app] received commit request
   ...

   $ curl 'http://localhost:26657/health'
   {
   "jsonrpc": "2.0",
   "id": "",
   "result": {}
   }
   ```

Congratulations! Crypto.com Chain is now running on your machine!

### Re-initialize the Devnet node

If you need to stop the processes and initialize a new chain

1. you should stop all service and remove docker containers by:

   ```bash
   $ make stop-all
   $ make rm-all
   ```

2. clean all the storage used by Tendermint, Crypto.com Chain by:

   ```bash
   $ make clean-data
   ```

3. you can initialize a new chain by:

   ```bash
   $ sudo make create-path
   $ sudo make chown-path user=$(id -u) group=$(id -g)
   $ make prepare
   $ make run TX_QUERY_HOSTNAME={YOUR_VM_HOSTNAME}
   ```

### Congratulations

Congratulations, now the environment to run Crypto.com Chain is all set. Let's on on and start sending your first transaction

## Send Your First Transaction

::: warning Caution
This page is a continuation of [Devnet: Running Latest Development Node](./local-devnet.md) for development.

For anyone interested more on wallet management, getting testing token from the faucet and sending transactions,
please refer to [ClientCLI](../wallets/client-cli.md).
:::

Crypto.com Chain uses a hybrid transaction accounting model with different transaction types. Before sending the transaction, please notice that the genesis fund is stored in a _staking_ address at the beginning. You first have to **withdraw** it to UTXO:

![](./assets/states.png)

Specifically, the blockchain begins with this [genesis file](https://github.com/crypto-com/chain/blob/master/docker/config/devnet/tendermint/genesis.json), which you can [see that](https://github.com/crypto-com/chain/blob/master/docker/config/devnet/tendermint/genesis.json#L20-L22) some genesis funds have already been distributed to the address `0x2dfd...38ea8` at the beginning:

```json
"0x2dfde2178daa679508828242119dcf2114038ea8": [
  "UnbondedFromGenesis",
  "500000000000000000"
],
```

In this documentation, we will

- Restore the wallet with the default [mnemonics](https://github.com/crypto-com/chain/blob/master/docker/config/devnet/tendermint/mnemonics.txt#L1);
- Gain access to the allocated funds in the _staking address_ `0x2dfd...38ea8` and perform transactions.

### Pre-requisites:

To start using the wallet with the client-cli, we have to configure the environment with the node information:

```bash
$ export CRYPTO_CHAIN_ID=test-chain-y3m1e6-AB
$ export CRYPTO_CLIENT_TENDERMINT=ws://127.0.0.1:26657/websocket
$ export CRYPTO_GENESIS_FINGERPRINT=0F73F35EDE9EB74299F9816B0C9DE4C7ED4D284590A4CB9348CAEC38BA86893F
```

If you are running your wallet on the same Azure machine, you can use the above configuration. If you are running the wallet on your local machine, you will have to change the `ws://127.0.0.1:26657/websocket` with the Azure instance public IP address.

### Restore the Default wallet

A pre-created Hierarchical Deterministic (HD) Wallet wallet mnemonic with genesis funds inside are prepared for you in the Devnet. To gain access to the funds, kindly restore the wallet by using this [mnemonic](https://github.com/crypto-com/chain/blob/master/docker/config/devnet/tendermint/mnemonics.txt) before moving on to the next step.

- Firstly, restore the HD wallet and name it as `Default`:

  ```bash
  $ ./target/debug/client-cli wallet restore --name Default

  Enter passphrase:       # Enter your passphrase here
  Confirm passphrase:     # Confirm your passphrase
  Enter mnemonic:         ordinary mandate edit father snack mesh history identify print borrow skate unhappy cattle tiny first
  Confirm mnemonic:       ordinary mandate edit father snack mesh history identify print borrow skate unhappy cattle tiny first

  Authentication token: 3082fe4221eb21ee8714604f6f59e548356702b20a6124eae50c4404f8deb923
  ```

You will get the `Authentication token`, keep the token safe and it will be needed for all authorized commands.

### Create _Transfer_ & _Staking_ Address

Once we have a restore wallet, we are now ready to create new addresses for performing transaction: The most common address types in Crypto.com Chain are

1. _Staking_ address: For staking related operations;
2. _Transfer_ address: For token transfer.

#### Create _Staking_ addresses

- Firstly we generate **two** `Staking` type addresses with the `Default` wallet you have just restored:

  ```bash
  $ ./target/debug/client-cli address new --name Default --type Staking
  Enter authentication token:       # Input the Authentication token
  New address: 0x45c1851c2f0dc6138935857b9e23b173185fea15
  ```

- Run it another time and obtain the _staking_ address `0x2dfd...38ea8` that stores the genesis funds:

  ```bash
  $ ./target/debug/client-cli address new --name Default --type Staking
  Enter authentication token:       # Input the Authentication token
  New address: 0x2dfde2178daa679508828242119dcf2114038ea8
  ```

#### Create a _Transfer_ address

- Afterwards, you can create a `Transfer` type address in the `Default` to receive the genesis funds:

  ```bash
  $ ./target/debug/client-cli address new --name Default --type Transfer
  Enter authentication token:       # Input the Authentication token
  New address: dcro1kxl8xy6k8twhes6j972mrzurfvgms0e549z852cgqyl796jss89sadlmgd
  ```

#### Sync your wallet

- It is important to keep your wallet sync with the blockchain. This can be easily done by the `sync` command:

  ```bash
  $ ./target/debug/client-cli sync --name Default
  Enter authentication token:       # Input the Authentication token
  Synchronizing: 1951 / 1951 [=================================] 100.00 % 930.09/s
  Synchronization complete!
  ```

::: tip Note: If you encounter a fingerprint mismatched error

```bash
$ ./target/debug/client-cli sync --name Default
Enter authentication token:
Error: Verify error: genesis-fingerprint from tendermint 0F73F35EDE9EB74299F9816B0C9DE4C7ED4D284590A4CB9348CAEC38BA86893F does not match preset genesis-fingerprint DC05002AAEAB58DA40701073A76A018C9AB02C87BD89ADCB6EE7FE5B419526C8
```

Make sure you have exported the fingerprint manually

```bash
$ export CRYPTO_GENESIS_FINGERPRINT=0F73F35EDE9EB74299F9816B0C9DE4C7ED4D284590A4CB9348CAEC38BA86893F
```

:::

#### Check the genesis funds

- Once your wallet has been synced, you can check the _status_ of the _staking_ address `0x2d..38ea8` by the following command:

  ```
  $ ./target/debug/client-cli state --name Default --address 0x2dfde2178daa679508828242119dcf2114038ea8

  +-----------------+----------------------------+
  | Nonce           |                          0 |
  +-----------------+----------------------------+
  | Bonded          |                 0.00000000 |
  +-----------------+----------------------------+
  | Unbonded        |        5000000000.00000000 |
  +-----------------+----------------------------+
  | Unbonded From   | 2019-11-20 08:56:48 +00:00 |
  +-----------------+----------------------------+
  | Jailed Until    |                 Not jailed |
  +-----------------+----------------------------+
  | Punishment Type |               Not punished |
  +-----------------+----------------------------+
  | Slash Amount    |               Not punished |
  +-----------------+----------------------------+
  ```

  As in the above example, you can see that there are `5000000000 CRO` test tokens in the _staking_ address that is `Unbonded` and ready to go.

### Withdraw the genesis funds

The following is the transaction flow between _Staking_ address and _Transfer_ addresses with transaction types `Deposit`, `Withdraw`, `Deposit` and `Unbond`.

```bash
|   Staking   |       |     Transfer     |
|   address   |       |      address     |
| 0x2d..38ea8 |       |  dcro1k...dlmgd  |
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
+-------------+
│             │    Withdraw
│  Unbonded   +----------------+
│   Balance   │                │
│             │                │
+------+------+                v
       ^              +--------+--------+
       │              │   Transferable  │
Unbond │              │                 |
       │              │     Balance     │
       │              +--------+--------+
+------+------+                │
│             │                │
│   Bonded    │                │
│   Balance   + <--------------+
│             │    Deposit
+-------------+
```

We will cover the `Withdraw` type type in this section. For for further details on the other transaction types, please kindly refer to the [transaction operations](../wallets/client-cli.md#transaction-operations).

#### `Withdraw` type transaction: Withdraw the unbonded funds

- We are now ready to move the genesis funds from the _staking_ address `0x2d..38ea8`. To do this, we will perform a `Withdraw` type transaction that withdraws the funds from the _staking_ address `Unbonded` balance to the transfer address `dcro1k...dlmgd` we have just created.

```bash
$ ./target/debug/client-cli transaction new --name Default --type Withdraw
Enter authentication token:       # Input the Authentication token
Enter staking address: 0x2dfde2178daa679508828242119dcf2114038ea8
Enter transfer address: dcro1kxl8xy6k8twhes6j972mrzurfvgms0e549z852cgqyl796jss89sadlmgd
Enter view keys (comma separated) (leave blank if you don't want any additional view keys in transaction):
# Leave blank because this tx is in same wallet
Transaction successfully created
```

- Then, you can `sync` and check `balance` of your wallet:

  ```bash
  $ ./target/debug/client-cli sync --name Default
  Enter authentication token:       # Input the Authentication token
  Synchronizing: 1951 / 1951 [=================================] 100.00 % 930.09/s
  Synchronization complete!
  ```

- You can now check your `balance`. Noted that the `Available` only includes the transferable balance and the bonded/unbonded amount of your _staking_ address are not included:

  ```bash
  $ ./target/debug/client-cli balance --name Default
  Enter authentication token:       # Input the Authentication token
  +-----------+---------------------+
  | Total     | 5000000000.00000000 |
  +-----------+---------------------+
  | Pending   | 0.00000000          |
  +-----------+---------------------+
  | Available | 5000000000.00000000 |
  +-----------+---------------------+
  ```

Congratulations! You have successfully withdrawn all the unbonded genesis fund and now we will be able to transfer the test tokens to the others.

### Transfer CRO to another address/wallet

To transfer token between different wallets, we can create another wallet with the name `Bob`, or whatever name you like. The wallet type could be `hd` (Hierarchical Deterministic) or `basic`:

```bash
$ ./target/debug/client-cli wallet new --name Bob --type hd
Enter passphrase:
Confirm passphrase:
Please store following mnemonic safely to restore your wallet later:
Mnemonic: cabin typical scheme rather hood sunny salon mansion hazard update video drill century athlete argue human discover dish arrow soccer science ocean puppy wagon
Authentication token: 650aca93fdb6e6eeb988026d92e796c28f0306390a49d6bfd75160ea07e6bcb6
```

The following is the transaction flow between the _Transfer_ addresses in `Default` wallet and the wallet `Bob`, with transaction types `Transfer`:

```
│     Transfer     │                │     Transfer     │
│    address in    │                │    address in    │
│ "Default" wallet │                │   "Bob" wallet   │
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
+-----------------+                 +-----------------+
│   Transferable  │     Transfer    │   Transferable  │
│                 + <=============> +                 │
│     Balance     │                 │     Balance     │
+-----------------+                 +-----------------+
```

#### The "view-key"

In Crypto.com Chain, transactions are encrypted, and it can only be viewed by the owner of the view key. It is important that in order for the receiver to spend the funds, they would need to be able to view the transaction details and obtain the corresponding UTXO data. Therefore, the receiver's view key is one of the essential components when launching a transaction.

- For example, we can use the `view-key` command to obtain the view-key of `Default` wallet and `Bob` wallet:

  ```bash
  $ ./target/debug/client-cli view-key --name Default
  Enter authentication token:       # Input the Authentication token of Default
  View Key: 02b4dabfc862b9cb9f86b8d49520023aa0cccb2ad89446577dd0fee7bc946a79a1

  $ ./target/debug/client-cli view-key --name Bob
  Enter authentication token:       # Input the Authentication token of Bob
  View Key: 03ef78b2751d43c3309b6ac68641e56528a23dc5678a201e43a7ed852511a1c276
  ```

::: tip Tip

The following 3 types of transactions: `TransferTx`, `DepositStakeTx` and `WithdrawUnbondedTx`, have some of their payloads obfuscated.
Sender could associate one or more `view-keys` onto the transactions. The view-key associated wallet could easily sync and view the transaction.

For more information, you could refer to [Transaction Accounting Model](../protocol/transaction-accounting-model).

:::

#### `Transfer` type transaction: Transferring tokens

- In `Bob` wallet, create a _Transfer_ address for receiving funds:

  ```bash
  $ ./target/debug/client-cli address new --name Bob --type Transfer
  Enter authentication token:       # Input the Authentication token of Bob
  New address: dcro135w20p56vdduzv5e4v4g2a9ucu6vw9k25aeyd7jfxuej66l4af9s7ycz35
  ```

- Then, you can transfer your tokens to Bob by:

  ```bash
  $ ./target/debug/client-cli transaction new --name Default --type Transfer

  Enter authentication token:       # Input the Authentication token of Default
  Enter output address: dcro135w20p56vdduzv5e4v4g2a9ucu6vw9k25aeyd7jfxuej66l4af9s7ycz35
  Enter amount (in CRO): 12345678   # CRO token amount you will transfer to Bob
  Enter timelock (seconds from UNIX epoch) (leave blank if output is not time locked):    # Leave blank
  More outputs? [yN]
  Enter view keys (comma separated) (leave blank if you don't want any additional view keys in transaction):
  02b4dabfc862b9cb9f86b8d49520023aa0cccb2ad89446577dd0fee7bc946a79a1,03ef78b2751d43c3309b6ac68641e56528a23dc5678a201e43a7ed852511a1c276
  Transaction successfully created!
  ```

::: tip Tip

Remember to include Bob's `view-key` here.

:::

- Lastly, you can `sync` and check `balance` of Bob's wallet:

```bash
$ ./target/debug/client-cli sync --name Bob
Enter authentication token:       # Input the Authentication token
Synchronizing: 5121 / 5121 [=================================] 100.00 % 1606.16/s
Synchronization complete!
```

Check the `balance`:

```bash
$ ./target/debug/client-cli balance --name Bob
Enter authentication token:       # Input the Authentication token of Bob
+-----------+-------------------+
| Total     | 12345678.00000000 |
+-----------+-------------------+
| Pending   | 0.00000000        |
+-----------+-------------------+
| Available | 12345678.00000000 |
+-----------+-------------------+
```

Congratulations! You've successfully transferred `12345678 CRO` to Bob.

If you are interested in contributing or joining our testnet, you can continue reading the following sections about [Joining the Croeseid Testnet](./thaler-testnet.md).

### Export & Import Tx

As mentioned before, sender should add the receiver's view-key to the transaction. Because sender can't push data directly to the receiver. However, it is also possible to send / receive a payment by directly exchanging the (raw) transaction payload data. The sender (who creates the transaction) would export it, the receiver would import it and check the transaction data locally and check the transaction ID against the distributed ledger. Following explains the flow:

1. **Sender**: Get your transaction id from the history, you may need to sync before running the following command:

   ```bash
   $ ./target/debug/client-cli history --limit ? --offset ? --name <sender_wallet>
   Enter authentication token: ## Insert your authentication token ##
   +----------------+--------+--------+-----+--------------+------------+
   | Transaction ID | In/Out | Amount | Fee | Block Height | Block Time |
   +----------------+--------+--------+-----+--------------+------------+
   |<transaction_id>|........|........|.....|..............|............|
   +----------------+--------+--------+-----+--------------+------------+

   ```

1. **Sender**: Export the target transaction payload from the sender's wallet:

   ```bash
   $ ./target/debug/client-cli transaction  export --id <transaction_id>  --name <sender_wallet>
   Enter authentication token: ## Insert your authentication token ##

   ## transaction_payload_example ##
   eyJ0eCI6eyJ0eXBlIjoiVHJhbnNmZXJUcmFuc2FjdGlvbiIsImlucHV0cyI6W3siaWQiOiI3ZDk3NzVjNTcyODQ1ZjRlNzRjOGU5Y2Q1NjhkZjk4Mjk0NjQ1ODM1NDA5OGQzZDBlZjcxNzRmYmQ3NDdkMDhkIiwiaW5kZXgiOjF9XSwib3V0cHV0cyI6W3siYWRkcmVzcyI6InRjcm8xenR2MDZ6dzRtdHZ3NnhhZ25jMGdheTJkbXN5OHo5cjN4N2RwdGoycW5tdnBoNDY1YXQ5c251M2x1YSIsInZhbHVlIjoiMTAwMDAwMDAwMDAwIiwidmFsaWRfZnJvbSI6bnVsbH0seyJhZGRyZXNzIjoidGNybzFtODd5cTYwMmM2M2ZrY3p2ejZwcW5xY3JzOXZ0bnEzOHRuZjQ1a3lqMG1rdHY1ZGVkaDBxYTNmcHB2IiwidmFsdWUiOiI1OTk5ODk5OTk5OTk3ODg3IiwidmFsaWRfZnJvbSI6bnVsbH1dLCJhdHRyaWJ1dGVzIjp7ImNoYWluX2hleF9pZCI6IjQyIiwiYWxsb3dlZF92aWV3IjpbeyJ2aWV3X2tleSI6IjAzZDRkNWZiN2Q4MjJiZGUwZjYwOTgwNmU3ZTEzMDVmNTI3NjYzZmM5YWU2ZmZhMjJiNDVhMDc1NDRhOGU5OGY1YiIsImFjY2VzcyI6IkFsbERhdGEifV19fSwiYmxvY2tfaGVpZ2h0IjozMjQ2Mn0
   ```

1. **Receiver**: The transaction can be imported into receiver's wallet by

   ```bash
   $ ./target/debug/client-cli transaction import --tx <transaction_payload> --name <receiver_wallet>

   Enter authentication token: ## Insert your authentication token ##

   import amount: <transaction_amount>
   ```

1. Finally, receiver can verify this transaction by checking the transaction history:

   ```bash
   $ ./target/debug/client-cli history --limit ? --offset ? --name <receiver_wallet>
   ```
