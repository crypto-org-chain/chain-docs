# Crypto.org Chain Desktop Wallet 

Crypto.org Chain Desktop Wallet (Beta) supports staking operations, validator selections, and governance voting. Users can also view, send and mint NFTs directly, and much more from the Desktop Wallet. The latest version can be found on the [Desktop Wallet page](https://crypto.org/desktopwallet), and the previous releases are also available on the [release page](https://github.com/crypto-com/chain-desktop-wallet/releases).

### Geo-Restrictions

Information about [restricted locations](https://crypto.org/desktopwallet/geo-restrictions) from downloading [Crypto.org](https://crypto.org/) Chain Desktop Wallet.

### Technical support and enquiries
Hope this guide gives you a better understanding of the use of Crypto.org Chain Desktop Wallet! 

In case you have any enquiries about using the Desktop Wallet, kindly send a message to the Crypto.org Chain [Discord](https://discord.gg/pahqHz26q4) #desktop-wallet channel or [chain@crypto.org](mailto:chain@crypto.org) for assistance.

## Using Desktop Wallet for the first time
- **Step 1** - [Download](https://crypto.org/desktopwallet) the latest Crypto.org Chain Desktop Wallet.
- **Step 2** - Run the Desktop Wallet you just installed and and click "*Get Started*". 
        <img src="./assets/desktop_wallet/0-2.png" />
- **Step 3** - Before creating or restoring your wallet, you would need to create an App password to protect your desktop wallet. The password is required to be at least 8 characters, containing a letter, a number, and a special character.
        <img src="./assets/desktop_wallet/0-3.png" />
**Remark**: It is recommended to create a stronger and unguessable password. A password labeled as "*safe*" and "*strong*" means that a person would have an extremely low probability to guess it correctly.
- **Step 4** - Choose between ["*Restore Wallet*"](#_1-2-restore-wallet-from-mnemonic-phrases) and ["*Create Wallet*"](#_1-1-create-wallet)
        <img src="./assets/desktop_wallet/0-4.png" />

## 1. Wallet Menu
This is where you could manage all your wallets, including Create, Restore, Delete, and switch between wallets.
        <img src="./assets/desktop_wallet/1.png" />

### 1.1 - Create Wallet
- **Step 1** - Before your wallet is ready to be created, please make sure you select the following options accordingly:
    - Input the wallet name of your choice.
    - For the network, three options of "*TESNET CROESEID 3*", "*MAINNET*", and "*CUSTOM DEVNET*" are given: 
        - "*TESNET CROESEID 3*" is our Cosmos-based `testnet-croeseid-4`.
        - "*MAINNET*" is referring to Crypto.org Chain mainnet. 
        - Other than these, you may fill up the custom configuration to your own network. 
    - In this demonstration, we will be creating a testnet address and connecting to the current `testnet-croeseid-4`, therefore, we select "*TESNET CROESEID 3*" as the network option.
                <img src="./assets/desktop_wallet/1-1-1.png" />

- **Step 2** - After inputting the information, please hit "*Create Wallet*", and the success window will pop up. 
                <img src="./assets/desktop_wallet/1-1-2.png" />

- **Step 3** - Once you click "*Continue*", the wallet will automatically generate the recovery phrase for users. Please make sure you record down all the phrases in order to restore your wallet in the future.
                <img src="./assets/desktop_wallet/1-1-3.png" />

- **Step 4** - After you input the app password again, hit "*Go to Home*", and it will bring you to the main dashboard.
                <img src="./assets/desktop_wallet/1-1-4.png" />

### 1.2 - Restore Wallet from Mnemonic Phrases
When you select the option of "*Restore Wallet*", it brings you to the following window that allows you to input the wallet name and mnemonic phrase that was previously created. 
- **Step 1** - Input all the required information (make sure you input the correct information of your wallet) and then hit "*Restore Wallet*".
        <img src="./assets/desktop_wallet/1-2-1.png" />

- **Step 2** - Then it requires you to input the app password you created when you initially installed the app.
        <img src="./assets/desktop_wallet/1-2-2.png" />
- **Step 3** - After you input the app password, hit “Go to Home”, and it will bring you to the main dashboard. Now you have successfully restored your wallet!
        <img src="./assets/desktop_wallet/1-2-3.png" />
        <img src="./assets/desktop_wallet/1-2-4.png" />

### 1.3 - Delete Wallet
- **Step 1** - In the case that you would like to delete any of your wallets, you can do so by hitting the bottom left button and selecting the option "*Delete Wallet*":
        <img src="./assets/desktop_wallet/1-3-1.png" />

- **Step 2** - A confirmation page will pop up with the wallet address, before deleting the wallet, please make sure you already have saved the phrase properly. If you have not backed up your wallet mnemonic phrase and deleted the wallet in the Desktop Wallet, this will result in losing your funds forever. Once you are ready to delete the wallet from the Desktop Wallet, hit "*Confirm*":
        <img src="./assets/desktop_wallet/1-3-2.png" />

- **Step 3** - In the next window, please enter the words “DELETE” to further confirm, then click “Delete Wallet”. After a bit of loading time, the success page will show:
        <img src="./assets/desktop_wallet/1-3-3.png" />
        <img src="./assets/desktop_wallet/1-3-4.png" />

### 1.4 - Wallet List
You can find the list of all your wallets by clicking the bottom left button and selecting the "*Wallet List*", and then all the inputted wallets will be displayed on the right interface. You can select any wallet you would like to access by hitting "*Select*" under "*Action*".
        <img src="./assets/desktop_wallet/1-4.png" />

## 2. Transactions

### 2.1 - Sending Transactions
Sending funds is easy with the Desktop Wallet. Ensure that you have enough funds before you perform the sending operation.
Do not forget that you can always request some testing tokens in faucet: 

| Asset | Faucet |
| :---: | --- | --- |
| CRO (Crypto.org Chain) | [https://crypto.org/faucet](https://crypto.org/faucet) |
| CRO (Cronos Chain) | [https://cronos.crypto.org/faucet](https://cronos.crypto.org/faucet) |

In case you have reached the daily limit on faucet airdrop, you can simply send a message on [Discord #request-tcro channel](https://discord.gg/c7vSX4TSrf).

- **Step 1** - Select the "*Assets*" on the left panel, and you will see the "*Send*" and "*Receive*" options on the left right of each asset. 
        <img src="./assets/desktop_wallet/2-1-1.png" />
After you click the "*Send*", fill up the request information:
    - recipient address
    - amount to be sent 
    - optional memo
        <img src="./assets/desktop_wallet/2-1-2.png" />

- **Step 2** - Once you hit the "*Continue*" button, you can review the transaction details in the confirmation window on the Desktop Wallet and proceed to the next step by clicking "Confirm". Then enter your app password and hit "*Decrypt Wallet*".
        <img src="./assets/desktop_wallet/2-1-3.png" />

- **Step 3** - In the "*Confirm Transaction*" section, please double-check the information and make sure the information you entered is correct. Now you can go with "*Confirm*" and click "*OK*" on the next page.
        <img src="./assets/desktop_wallet/2-1-4.png" />

- **Step 4** - Now your funds have been transferred successfully to your selected address! You can then check the transaction history by clicking "*Transaction*" tab under any of your Assets.
        <img src="./assets/desktop_wallet/2-1-5.png" />
        <img src="./assets/desktop_wallet/2-1-6.png" />

### 2.2 - Receive Transactions
If someone is sending funds to you or you are sending funds from your other address to the current address, you can: 
- **Step 1** - Under the "*Assets*" page, you will see the “Send” and “Receive” tabs on the left-right of each asset. Click "*Receive*".
        <img src="./assets/desktop_wallet/2-1-1.png" />
        
- **Step 2** - You will find the QR code and the address of your current wallet account.
        <img src="./assets/desktop_wallet/2-2.png" />


## 3. Staking Operations
Crypto.org Chain is based on Tendermint Core's consensus engine, it relies on a set of validators to participate in the proof of stake (PoS) consensus protocol who are responsible for committing new blocks in the blockchain. Token holders might stake their tokens to validators to secure the network and earn rewards. Particularly, we can:
- Delegate to a validator;
- Withdraw staking rewards from a validator;
- Redelegate from a validator.
- Undelegate from a validator.

### 3.1 - Delegate to a validator
- **Step 1** - To begin staking, go to "*Staking*" page and direct to the second tab "*Delegate Funds*". You can choose one of the active validators that you would like to delegate to, and enter the delegation amount. 
        <img src="./assets/desktop_wallet/3-1-1-1.png" />
You can input the validator’s information either by:
    - Clicking the list button under "*Validator address*", and selecting your preferred validators. 
        <img src="./assets/desktop_wallet/3-1-1-2.png" />

    - Copying the complete address of your preferred validator, and pasting the validator’s "*Operator Address*" (begin with `tcrocncl...` for testnet) under "*Validator address*". Then specify the amount that you would like to delegate.

**Remark**: To support the decentralization of the network, we suggest all users delegate your funds to validators with fewer shares, but please make you've done research into the validators you selected before the delegation to minimize your risk of unnecessary fund loss.

- **Step 2** - Similar to sending a transaction, you can review and confirm the transaction details on the Desktop Wallet first shown below, click "*Review*" and enter your app password.
        <img src="./assets/desktop_wallet/3-1-2.png" />

- **Step 3** - Now you will proceed to the confirmation section. Make sure you input the correct information of your wallet and then hit "*Confirm*". 
        <img src="./assets/desktop_wallet/3-1-3-1.png" />
        <img src="./assets/desktop_wallet/3-1-3-2.png" />
Now you’ve successfully staked the desired amount to your selected validator!

### 3.2 - Withdraw the reward from a validator
- **Step 1** - Under "*Staking Rewards*" on the "*Staking*" page, your staking reward amount from different validators will be displayed as below:
        <img src="./assets/desktop_wallet/3-2-1.png" />
- **Step 2** - Click the "*Withdraw Reward*" under "*Action*", and input your app password. Similar to other transaction operations, you should review and double-check the transaction details "*Confirm*" before processing "*Confirm*". 
        <img src="./assets/desktop_wallet/3-2-2.png" />
Please note that all of your available rewards from a validator will be withdrawn in the transaction.

Now you should see a success message on the Desktop Wallet, and your rewards withdrawal transaction was broadcasted successfully!

### 3.3 - Redelegate the staking from a validator
- **Step 1** - In the case that you plan to redelegate your staked funds from a validator, you can go to Delegation Management under the "*Staking*" page. The "*Redelegate Stake*" option is highlighted in green color. 
        <img src="./assets/desktop_wallet/3-3-1.png" />

- **Step 2** - You can click "*Redelegate Stake*" to redelegate your staked tokens from a validator now. On the popup window, likewise to [delegating to a validator](#_3-1-delegate-to-a-validator), you will be required to fill in the validator’s address(you can either choose your preferred validator from the validator list or input its complete address), and the amount that you would like to redelegate from a validator, review and confirm the transaction details on the Desktop Wallet, input your app password again, then click "*Confirm*" to process.
        <img src="./assets/desktop_wallet/3-3-2.png" />
        <img src="./assets/desktop_wallet/3-3-3.png" />

Now you should see a success message on the Desktop Wallet, and your funds are redelegated to another preferred validator!

### 3.4 - Undelegate the staking from a validator
- **Step 1** - If you plan to undelegate your staked funds from a validator, you can go to Delegation Management under the "*Staking*" page. "*Undelegate Stake*" option is highlighted in red color. 
        <img src="./assets/desktop_wallet/3-4-1.png" />

- **Step 2** - You can undelegate your staked tokens from a validator by clicking "*Undelegate Stake*". Afterwards, you can specify the amount of token that you would like to undelegate from a validator, review and confirm the transaction details on the Desktop Wallet, input your app password again, then click "*Confirm*" to process.
        <img src="./assets/desktop_wallet/3-4-2.png" />
        <img src="./assets/desktop_wallet/3-4-3.png" />

Now you should see a success message on the Desktop Wallet, and your undelegation transaction was successfully processed!


  ::: tip NOTE

  - You can review your undelegation process by clicking "*View Unbonding Delegation*" at the top right corner in the "*Delegation Management*" section. 
<img src="./assets/desktop_wallet/3-4-4.png" />

  :::

## 4. Governance
Governance proposals potentially impact many stakeholders. You are able to view all the concurrent voting, finished or rejected proposals, and cast your votes here. 
        <img src="./assets/desktop_wallet/4.png" />

### 4.1 - Cast your vote to a proposal
- **Step 1** - Choose a proposal which is in its Voting Period. You’re able to see the description of this proposal, with the current ratios of different vote options. Pick your desired vote option to this proposal and then click "*Send Vote*":
        <img src="./assets/desktop_wallet/4-1.png" />

- **Step 2** - Make sure you have reviewed and confirmed the transaction details, then click "*Confirm*"
        <img src="./assets/desktop_wallet/4-2.png" />

## 5. NFT Support
The "*My NFT*" page is where you could manage your NFTs which exist on the Crypto.org Chain, no matter browsing around your NFTs collections, transfer any NFTs to your friend, or even mint your very own unique NFT. 
        <img src="./assets/desktop_wallet/5.png" />

### 5.1 - Transfer an NFT
- **Step 1** - Under "*NFT Collection*", select the NFT you would like to transfer. Click "*Transfer NFT*":
        <img src="./assets/desktop_wallet/5-1-1.png" />

- **Step 2** - Enter the Recipient Address. Please make sure that the recipient address is compatible with the Crypto.org Chain NFT token standard. Click "*Continue*":
        <img src="./assets/desktop_wallet/5-1-2.png" />

- **Step 3** - Review the NFT transaction details in the confirmation window, then click "*Confirm Transfer*": 
        <img src="./assets/desktop_wallet/5-1-3.png" />

### 5.2 - Mint an NFT with your own Artwork
- **Step 1** - Under "*Mint NFT*", you are required to fill up the below NFT information:
        <img src="./assets/desktop_wallet/5-2-1.png" />
- **Step 2.1** - You are able to upload your Artwork as either Image(.jpg, .png), or Video (.mp4):
        <img src="./assets/desktop_wallet/5-2-2-1.png" />
- **Step 2.2** - Do not forget to upload a Thumbnail as well if you are minting a Video NFT:
        <img src="./assets/desktop_wallet/5-2-2-2.png" />
- **Step 3** - It will manage to upload the files directly to the IPFS network. Please wait until the file upload process finishes, then click "*Review*":
        <img src="./assets/desktop_wallet/5-2-3.png" />
- **Step 4** - Review the details of the NFT. Click "*Confirm*" to approve the minting transaction:
        <img src="./assets/desktop_wallet/5-2-4-1.png" />

## 6. Cronos Bridge
Our Cronos Mainnet Beta, an EVM Compatible chain built with Etheremint, is live on 8th November 2021. You could easily convert and transfer your Crypto.org Native CRO and Cronos CRO between each other seamlessly with the Cronos Bridge we provide. 
        <img src="./assets/desktop_wallet/6.png" />

### 6.1 - Before the bridge transfer
First, you need to decide your desired bridge direction. You can also customize the config settings of a specific bridge direction, by clicking the config icon at the top-right corner. 
        <img src="./assets/desktop_wallet/6-1.png" />

Here are the default settings of certain bridge directions:

**MAINNET BETA** - *Crypto.org Chain* to *Cronos Chain*
| Field | Value |
| :---: | --- | --- |
| Prefix | crc |
| Bridge Channel | channel-44 |
| Bridge Port | transfer |
| Bridge Indexing URL | https://cronos.crypto.org/indexing/api/v1/bridges |

**MAINNET BETA** - *Cronos Chain* to *Crypto.org Chain*
| Field | Value |
| :---: | --- | --- |
| Cronos Bridge Contract Address | TO_BE_DECIDED |
| Bridge Indexing URL | https://cronos.crypto.org/indexing/api/v1/bridges |
| Gas Limit | 30000 |

**TESTNET** - *Crypto.org Chain* to *Cronos Chain*
| Field | Value |
| :---: | --- | --- |
| Prefix | tcrc |
| Bridge Channel | channel-131 |
| Bridge Port | transfer |
| Bridge Indexing URL | https://cronos.crypto.org/indexing/api/v1/bridges |

**TESTNET** - *Cronos Chain* to *Crypto.org Chain*
| Field | Value |
| :---: | --- | --- |
| Cronos Bridge Contract Address | 0x44b8c54d95906D6b223dAE5E038cB8EF4ef45aE5 |
| Bridge Indexing URL | https://cronos.crypto.org/indexing/api/v1/bridges |
| Gas Limit | 30000 |

NOTE: A misconfiguration may lead to a bridge transfer failure.

### 6.2 - Initiate a bridge transfer transaction
- **Step 1** - Once a valid bridge direction is selected, you are able to choose your desired transferring asset and enter the amount for the transferral. Then click "Transfer Asset" & enter your App Password to proceed.
        <img src="./assets/desktop_wallet/6-2-1.png" />

- **Step 2** - Please confirm the transfer details. You may modify your transfer by clicking the back button on the top-left corner as needed. Please note that once you’ve clicked the "Confirm" button, there will be no going back.
        <img src="./assets/desktop_wallet/6-2-2.png" />

- **Step 3** - After the transfer is initiated, the corresponding tokens will be transferred to our dedicated Cronos bridge smart contract. 
        <img src="./assets/desktop_wallet/6-2-3-1.png" />

The process may take up to a few minutes to finish. Once it’s done, you will see an updated balance in your receiving address. 
        <img src="./assets/desktop_wallet/6-2-3-2.png" />

### 6.3 - Check your Bridger Transfer History
You can always review your latest bridge transfer history at the top-right corner. 
        <img src="./assets/desktop_wallet/6-3.png" />
If you found your bridge transfer history failed to get latest transferrals, please make sure your Bridge Indexing URL is correct with the value [mentioned above](#_6-1-before-the-bridge-transfer)

## 7. Settings

### 7.1 - Custom your node configuration
You are able to change the node connection settings for every different wallet specifically. 
        <img src="./assets/desktop_wallet/7-1.png" />
- Check the "*Propagate the settings…*" box if you would like to apply the current settings to all wallets with the same network type. 
- Here are the default node configurations of different network types:

| Network | Mainnet | Testnet Croeseid 3 |
| :---: | --- | --- |
| Node URL  | https://mainnet.crypto.org | https://testnet-croeseid-4.crypto.org |
| Chain Indexing URL  | https://crypto.org/explorer/api/v1/ | https://crypto.org/explorer/croeseid4/api/v1/ |
| Chain ID  | crypto-org-chain-mainnet-1 | testnet-croeseid-4 |
| Network Fee  | 10000 | 10000 |
| Gas Limit  | 300000 | 300000 |

### 7.2 - Change your App Language
Since v0.4.0, we support languages other than English. You’re able to choose your preferred language under Tab "*General Configuration*":
        <img src="./assets/desktop_wallet/7-2.png" />
While we’re planning to bring more languages to the app, we also welcome your contribution on perfecting the translations. You may refer to [Content Management](https://github.com/crypto-com/chain-desktop-wallet/blob/dev/CONTENT_MANAGEMENT.md) for more details. 

### 7.3 - Export your Wallet Recovery Phrase
Since v0.3.8, you are able to export your wallet recovery phrase. All the wallets in Desktop Wallet are encrypted with the app password, therefore you are required to enter the correct app password to decrypt and export the wallet properly. 

- **Step 1** - Under Tab "*General Configuration*", click "*Export*" in "*Export your Recovery Phrase*":
        <img src="./assets/desktop_wallet/7-3-1.png" />
- **Step 2** - Enter the app password and decrypt the wallet.
- **Step 3** - Please swipe through and write down all the Recovery Phrases in the correct order:
        <img src="./assets/desktop_wallet/7-3-2.png" />

### 7.4 - Clear your Storage
You may come across occasions when you’ve forgotten your app password, or you would like to clean up the access of all the existing wallets inside the Desktop Wallet. You are able to safely reset the Desktop Wallet’s storage with the following steps:

- **Step 1** - Under Tab "*Clear Storage*", click "*Clear Storage*"
        <img src="./assets/desktop_wallet/7-4-1.png" />
- **Step 2** - Make sure you’ve checked the checkbox and understood the consequences:
        <img src="./assets/desktop_wallet/7-4-2.png" />
- **Step 3** - Enter "*CLEAR*", then click "*Clear Storage*":
        <img src="./assets/desktop_wallet/7-4-3.png" />
When the Clear Storage process finishes, it brings you back to the Welcome Page and the Desktop Wallet becomes a brand new installed state again:
        <img src="./assets/desktop_wallet/7-4-4.png" />
