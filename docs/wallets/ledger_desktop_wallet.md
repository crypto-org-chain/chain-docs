# Using Ledger device with desktop wallet

### Crypto.org Chain Desktop Wallet (Beta)
Crypto.org Chain Desktop Wallet (Beta) supports operations ranging from sending multiple assets, staking, governance & NFT. latest version can be found on the [release page](https://github.com/crypto-com/chain-desktop-wallet/releases). 


The following are the step-by-step instructions for the use of Ledger devices with Crypto.org Chain desktop wallet. Before starting the process, you will need:
 
- An initialized Ledger device (Nano S / Nano X) with latest firmware;
- Latest version of [Ledger Live](https://www.ledger.com/ledger-live);
- [Crypto.org Chain desktop wallet](https://github.com/crypto-com/chain-desktop-wallet/releases).


### Technical support and enquiries
In case you have any enquiry about using Ledger device with desktop wallet, kindly send a message to the Crypto.org Chain [Discord](https://discord.gg/pahqHz26q4) #desktop-wallet channel for assistance.


## Install the Crypto.org Chain desktop wallet app for Ledger and create the wallet  

### Step 1 - Install the Crypto.org Chain app on your Ledger device

- **Step 1.1** - Connect and unlock your Ledger device

- **Step 1.2** - On your Ledger device, go to "*Install app*", It should show "*Open Ledger live to install apps*"

- **Step 1.3** - On the Ledger Live, find Crypto.org Chain & Ethereum to install in the app catalog under "*Manager*" as below:
        <img src="./assets/ledger_desktop_wallet/s1-4-1.png" />
        <img src="./assets/ledger_desktop_wallet/s1-4-2.png" />

- **Step 1.4** - Your Ledger device will display "*Processing…*". Once the installation is completed, you should see "*Installed*" on your Ledger Live as below:
        <img src="./assets/ledger_desktop_wallet/s1-5-1.png" />
        <img src="./assets/ledger_desktop_wallet/s1-5-2.png" />

    You can confirm the installation by checking if the Crypto.org App shows up in the main menu of your Ledger device:
            <img src="./assets/ledger_desktop_wallet/s1-5-3.jpeg" />

**Remark**: Once Crypto.org App & Ethereum successfully installed, please remember to close the *Ledger Live* app before proceeding to the next step .

### Step 2 - Create wallet in Desktop Wallet with Ledger device

After the app is set, please conducting the following steps to create a wallet with the desktop wallet: 

- **Step 2.1** - Download the latest Crypto.org Chain desktop wallet [here](https://github.com/crypto-com/chain-desktop-wallet/releases)

- **Step 2.2** - Run the Crypto.org Chain desktop wallet and click "*Get started*":
        <img src="./assets/desktop_wallet/0-2.png" />

- **Step 2.3** - Before creating your wallet, you would need to create an App password to protect your desktop wallet:
        <img src="./assets/desktop_wallet/0-3.png" />

- **Step 2.4** - Afterwards, your wallet is ready to be created. Please make sure you select the following options accordingly:

    - Input your wallet name of your choice;
    - Tick "*Want to create with hardware wallet*" and choose "*Ledger*" as the wallet type. 
    - "**Address Index**" is the last value of the Derivation Path (e.g. `44'/394'/0'/0/{address_index}`), which used to derive different addresses from the same key based on different number input. You will need to input the same "**Address Index**" if you want to restore the Ledger wallet address on another device.
For the network, three options of "**Testnet Croeseid 4**", "**Mainnet**", and "**Custom Devnet**" are given. **Testnet Croeseid 4** is Croeseid testnet which is our Cosmos-based testnet that has been running since October 2020. **Mainnet** refers to Crypto.org Chain mainnet. Other than these, you can also fill up the custom configuration to your own network.
        <img src="./assets/ledger_desktop_wallet/s2-4.png" />
    In this demonstration, we will be creating a testnet address and connecting to the current Croeseid Testnet, therefore, we select "**Testnet Croeseid 4**" as the network option. 

- **Step 2.5** - After click "*Create Wallet*", and you will be asked to open Crypto.org Chain App on your Ledger device. 
        <img src="./assets/ledger_desktop_wallet/s2-5-1.png" />    
Before you click "Connect", make sure you are able to see "*Crypto.org Chain ready*" displayed on your device as follow: 
        <img src="./assets/ledger_desktop_wallet/s2-5-2.jpg" />    
    
- **Step 2.6** - You will be asked to open Ethereum App on your Ledger device in order to create a Cronos Chain wallet. 
        <img src="./assets/ledger_desktop_wallet/s2-5-3.png" />    
        Make sure you are able to see "*Application is ready*" displayed on your device as follow: 
        <img src="./assets/ledger_desktop_wallet/s2-5-4.png" />    
        Click "Connect". Both your Crypto.org native chain & Cronos Chain wallet should be successfully created.
        <img src="./assets/ledger_desktop_wallet/s2-5-5.png" />    


### Step 3 - Before you perform transactions with Ledger device
Before starting with the sending transaction/performing staking operations, we would need some funds to begin with:

- **Step 3.1** - Go to "*Assets*" and pick the asset you would like to transfer. Go to "*Receive*" tab in the desktop wallet and your wallet address will be displayed. Depending on which asset you choose, you might need to open different App on your ledger. 

| App | Supported Assets |
| :---: | --- | --- |
| Crypto.org  | CRO (Crypto.org Chain) |
| Ethereum  | CRO (Cronos Chain) |

Verify the address by clicking "*Verify address on Ledger*", you should see the same address being displayed on your ledger device as well.
            <img src="./assets/ledger_desktop_wallet/s3-1.png" />

- **Step 3.2** - Once the address has been confirmed, copy this address and request some funds from the [testnet faucet](https://crypto.org/faucet)

| Asset | Faucet |
| :---: | --- | --- |
| CRO (Crypto.org Chain) | [https://crypto.org/faucet](https://crypto.org/faucet) |
| CRO (Cronos Chain) | [https://cronos.crypto.org/faucet](https://cronos.crypto.org/faucet) |

- **Step 3.3** - Your current balance will be available on the "Assets" page. If you would like to view the transaction details, go to the "Transaction" Tab and simply hit the hash link under Transaction Hash, and it will direct you to the corresponding explorer where different details related to transactions will be displayed:
            <img src="./assets/ledger_desktop_wallet/s3-3.png" />

**Remark**: In case you have reached the daily limit on faucet airdrop, you can simply send a message on [Discord](https://discord.gg/pahqHz26q4) #request-tcro channel.

## Confirm transactions in Desktop Wallet with Ledger device
Desktop Wallet supports all sorts of transactions for both normal wallets and wallets created with Ledger device. In this demonstration, we will be confirming a fund sending transaction with a Ledger device.

- **Step 1** - Sending funds is easy with the desktop wallet. Once you obtain some fund from the testnet faucet, go to the "*Assets*" page. Pick your desired assets and click "Send". 
            <img src="./assets/ledger_desktop_wallet/s4-1-1.png" />

Fill up the request information: recipient address, amount to be sent and optional memo as needed:
            <img src="./assets/ledger_desktop_wallet/s4-1-2.png" />

- **Step 2** - Once you hit the "*Continue*" button, you can review the transaction details in the confirmation window on the desktop wallet and proceed to the next step by clicking "*Confirm*":
            <img src="./assets/ledger_desktop_wallet/s4-2.png" />

- **Step 3** - Now, your transaction details will be shown on your ledger device, which includes: 
Chain-id, Account number, sequence, Type of the transaction, the amount in "*basetcro*", Sender address, Receiver address, memo message, Transaction fee and gas:
            <img src="./assets/ledger_desktop_wallet/s4-3-1.jpeg" />
    - You can confirm the details and approve the transaction on the ledger device:
                <img src="./assets/ledger_desktop_wallet/s4-3-2.jpeg" />
    - Once the transaction has been approved on you ledger device, you should see a success message on your Desktop Wallet:
                <img src="./assets/ledger_desktop_wallet/s4-3-3.png" />
    - You can then check the transaction history in "*Transaction*" Tab. 

## Restoring a Ledger wallet 
Since the private key of Ledger wallets are always stored inside the Ledger device, you don't need the **Mnemonic Phrases** to restore a Ledger wallet on the Desktop Wallet. You may just follow our [*Create wallet in Desktop Wallet with Ledger device Guide*](#step-2-create-wallet-in-desktop-wallet-with-ledger-device) once again to restore your previously created Ledger wallet. 

Please note that you may still need to input the correct **Address Index** to derive your desired Ledger wallet address.

## Ledger connection troubleshoot
There are numerous reasons & possibilities why your Ledger device cannot be connected with the Crypto.org Chain Desktop Wallet (Beta) properly. Here are the most common checklist for you to troubleshoot the issue: 
- Use the latest version of "Crypto.org App" & "Ethereum App" on Ledger
- Wait several seconds after the App on Ledger device is first opened
- If you have connected the Ledger device on other applications, e.g. Ledger Live, close these applications since they could potentially occupy the Ledger connection channel
- Restart your machine to clear off any potential connection channel occupency
- Check if your USB cable is working properly
- Check if your USB port on your machine is working properly