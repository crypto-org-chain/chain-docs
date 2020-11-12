# Ledger Hardware Wallets

You can use your [Ledger hardware wallets](https://www.ledger.com/) to securely manage your Testnet CRO assets. Ledger devices are hardware wallets which store your private keys safely in the device and can be used in even unsafe PCs.

## Pre-requisites

- An initialized Ledger Nano device
- Install the latest firmware on your device
- Install Ledger Live on your PC
- Download our latest [release binary](https://github.com/crypto-com/chain-main/releases)

## Install the Ledger app

There are currently two ways to install the Ledger app for Crypto.com Chain:

1. [Ledger Live (Preferred)](#_1-install-via-ledger-live)
1. [Build from source code](#_2-build-from-source-code)

### 1. Install via Ledger Live

:::tip
Crypto.com Chain Ledger application is being reviewed at the moment. Please use the Cosmos application for the time being, which has the same functionalities except for the supported address derivation path.
:::

1. Open "Manager" in Ledger Live.
1. Connect and unlock your Ledger devices.
1. If asked, allow Ledger manager on your Ledger device.
1. Search for Cosmos (ATOM) in the app catalog in Ledger Live.
1. Click the Install button to install the app.
1. Your device will display "Processing". Wait until the installing completed.
1. Your device will have a new app named "Cosmos"

### 2. Build from source code

:::danger
We HIGHLY DISCOURAGED using this method to install the Ledger app because it requires putting your Ledger device into development mode and loaded with an unsafe mnemonics. NEVER use this on a Ledger with funds and NEVER use the development Ledger devices on any production blockchain network.
:::

You can follow the [instructions](https://github.com/crypto-com/ledger-crypto#using-a-real-device) to build from source code and install the application to your development purpose ONLY Ledger device.

## Generate Address

1. Connect and unlock your Ledger device
1. Open "Cosmos" or "Crypto.com Chain" app on the device
1. Run in your terminal
    ```bash
    $ ./chain-maind keys add [name] --coin-type=[coin-type] --account=[account-index] --ledger --keyring-backend=test
    ```

    - `name` is an arbitrary name for your new key
    - `coin-type` is the Coin type. Depends on the application you installed, please use different types:
        | App | Coin type |
        | --- | --- |
        | Cosmos| `118` |
        | Crypto.com Chain | `394` |
    - `account-index` can be any integer inclusively starting from `0` to `2147483648`
    - For example, the following command will work for Cosmos application
    ```bash
    $ ./chain-maind keys add Ledger --coin-type=118 --account=0 --ledger --keyring-backend=test
    ```
1. An address will be displayed on your Ledger device
1. Confirm the address on your Ledger device and verify the address displayed on the terminal. They should match with each other.
1. Your address is generated successfully. You can now use the address for any chain operations.

## Query account balance

After you have [generated an address](#generate-address), kindly use the [CRO faucet](https://chain.crypto.com/faucet) to obtain test CRO tokens. Once the transaction is completed, you can query its balance by running in terminal:

```bash
$ ./chain-maind query bank balances [address]
```

`address` is the address you have generated. If you didn't copy your address, you can query the address by running in terminal:

```bash
$ ./chain-maind keys list --keyring-backend=test
```

## Sign a transaction

In this tutorial we will send a `MsgSend` transaction securely signed by your Ledger device to the chain.

1. Connect and unlock your Ledger device
1. Open "Cosmos" or "Crypto.com Chain" app on the device
1. Run in your terminal
    ```bash
    $ ./chain-maind tx bank send [from-address] [to-address] 1tcro --chain-id=testnet-croeseid-1 --ledger --keyring-backend=test  --sign-mode=amino-json
    ```

    - `from-address` is the from address [generated](#generate-address) by your Ledger device
    - `to-address` is the destination address
    - In this command, we are sending `1trco` from the from address, you can specify other amounts you want.
1. You will be asked to confirm the details of transaction in your terminal, input `y` to confirm:
    ```bash
    $ ./chain-maind tx bank send tcro1tzhdkuc328cgh2hycyfddtdpqfwwu42ywyfvkj tcro1aaah6juc9n6wvkkkr4zdn073n8gt7waha39xsv 1tcro --chain-id=testnet-croeseid-1 --ledger --keyring-backend=test  --sign-mode=amino-json
    {"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"tcro1tzhdkuc328cgh2hycyfddtdpqfwwu42ywyfvkj","to_address":"tcro1aaah6juc9n6wvkkkr4zdn073n8gt7waha39xsv","amount":[{"denom":"basetcro","amount":"100000000"}]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}

    confirm transaction before signing and broadcasting [y/N]: y
    ```
1. Transaction details will be displayed on your Ledger device, you can click the right button to read the different details.
1. Read the transaction details carefully and confirm ONLY when you have reviewed all the details are correct.
1. The transaction is signed and will be broadcasted.
1. Wait for a while and the broadcast result will be shown in your terminal.
