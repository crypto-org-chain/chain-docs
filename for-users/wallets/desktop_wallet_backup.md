# Crypto.org Chain Desktop Wallet

Crypto.org Chain Desktop Wallet (Beta) supports staking operations, validator selections, and governance voting. Users can also view, send and mint NFTs directly, and much more from the Desktop Wallet. The latest version can be found on the [Desktop Wallet page](https://crypto.org/desktopwallet), and the previous releases are also available on the [release page](https://github.com/crypto-com/chain-desktop-wallet/releases).

### Geo-Restrictions

Information about [restricted locations](https://crypto.org/desktopwallet/geo-restrictions) from downloading [Crypto.org](https://crypto.org/) Chain Desktop Wallet.

### Technical support and enquiries

Hope this guide gives you a better understanding of the use of Crypto.org Chain Desktop Wallet!

In case you have any enquiries about using the Desktop Wallet, kindly send a message to the Crypto.org Chain [Discord](https://discord.gg/pahqHz26q4) #desktop-wallet channel or [chain@crypto.org](mailto:chain@crypto.org) for assistance.

## Using Desktop Wallet for the first time

* **Step 1** - [Download](https://crypto.org/desktopwallet) the latest Crypto.org Chain Desktop Wallet.
* **Step 2** - Run the Desktop Wallet you just installed and and click "_Get Started_". ![](../../docs/wallets/assets/desktop\_wallet/0-2.png)
* **Step 3** - Before creating or restoring your wallet, you would need to create an App password to protect your desktop wallet. The password is required to be at least 8 characters, containing a letter, a number, and a special character. ![](../../docs/wallets/assets/desktop\_wallet/0-3.png) **Remark**: It is recommended to create a stronger and unguessable password. A password labeled as "_safe_" and "_strong_" means that a person would have an extremely low probability to guess it correctly.
* **Step 4** - Choose between ["_Restore Wallet_"](desktop\_wallet\_backup.md#\_1-2-restore-wallet-from-mnemonic-phrases) and ["_Create Wallet_"](desktop\_wallet\_backup.md#\_1-1-create-wallet) ![](../../docs/wallets/assets/desktop\_wallet/0-4.png)

## Settings

### 1. Custom your node configuration

You are able to change the node connection settings for every different wallet specifically. ![](../../docs/wallets/assets/desktop\_wallet/settings-1.png)

* Check the "_Propagate the settings…_" box if you would like to apply the current settings to all wallets with the same network type.
* Here are the default node configurations of different network types:

|       Network      | Mainnet                             | Testnet Croeseid 4                            |
| :----------------: | ----------------------------------- | --------------------------------------------- |
|      Node URL      | https://rpc.mainnet.crypto.org      | https://testnet-croeseid-4.crypto.org         |
| Chain Indexing URL | https://crypto.org/explorer/api/v1/ | https://crypto.org/explorer/croeseid4/api/v1/ |
|      Chain ID      | crypto-org-chain-mainnet-1          | testnet-croeseid-4                            |
|     Network Fee    | 10000                               | 10000                                         |
|      Gas Limit     | 300000                              | 300000                                        |

### 2. Change your App Language

Since v0.4.0, we support languages other than English. You’re able to choose your preferred language under Tab "_General Configuration_": ![](../../docs/wallets/assets/desktop\_wallet/settings-2.png) While we’re planning to bring more languages to the app, we also welcome your contribution on perfecting the translations. You may refer to [Content Management](https://github.com/crypto-com/chain-desktop-wallet/blob/dev/CONTENT\_MANAGEMENT.md) for more details.

### 3. Export your Wallet Recovery Phrase

Since v0.3.8, you are able to export your wallet recovery phrase. All the wallets in Desktop Wallet are encrypted with the app password, therefore you are required to enter the correct app password to decrypt and export the wallet properly.

* **Step 1** - Under Tab "_General Configuration_", click "_Export_" in "_Export your Recovery Phrase_": ![](../../docs/wallets/assets/desktop\_wallet/settings-3-1.png)
* **Step 2** - Enter the app password and decrypt the wallet.
* **Step 3** - Please swipe through and write down all the Recovery Phrases in the correct order: ![](../../docs/wallets/assets/desktop\_wallet/settings-3-2.png)

### 4. Clear your Storage

You may come across occasions when you’ve forgotten your app password, or you would like to clean up the access of all the existing wallets inside the Desktop Wallet. You are able to safely reset the Desktop Wallet’s storage with the following steps:

* **Step 1** - Under Tab "_Clear Storage_", click "_Clear Storage_" ![](../../docs/wallets/assets/desktop\_wallet/settings-4-1.png)
* **Step 2** - Make sure you’ve checked the checkbox and understood the consequences: ![](../../docs/wallets/assets/desktop\_wallet/settings-4-2.png)
* **Step 3** - Enter "_CLEAR_", then click "_Clear Storage_": ![](../../docs/wallets/assets/desktop\_wallet/settings-4-3.png) When the Clear Storage process finishes, it brings you back to the Welcome Page and the Desktop Wallet becomes a brand new installed state again: ![](../../docs/wallets/assets/desktop\_wallet/settings-4-4.png)

## 1. Wallet Menu

This is where you could manage all your wallets, including Create, Restore, Delete, and switch between wallets. ![](../../docs/wallets/assets/desktop\_wallet/1.png)

### 1.1 - Create Wallet

* **Step 1** - Before your wallet is ready to be created, please make sure you select the following options accordingly:
  * Input the wallet name of your choice.
  * For the network, three options of "_TESNET Croeseid 4_", "_MAINNET_", and "_CUSTOM DEVNET_" are given:
    * "_TESNET Croeseid 4_" is our Cosmos-based `testnet-croeseid-4`.
    * "_MAINNET_" is referring to Crypto.org Chain mainnet.
    * Other than these, you may fill up the custom configuration to your own network.
  * In this demonstration, we will be creating a testnet address and connecting to the current `testnet-croeseid-4`, therefore, we select "_TESNET Croeseid 4_" as the network option. ![](../../docs/wallets/assets/desktop\_wallet/1-1-1.png)
* **Step 2** - After inputting the information, please hit "_Create Wallet_", and the success window will pop up. ![](../../docs/wallets/assets/desktop\_wallet/1-1-2.png)
* **Step 3** - Once you click "_Continue_", the wallet will automatically generate the recovery phrase for users. Please make sure you record down all the phrases in order to restore your wallet in the future. ![](../../docs/wallets/assets/desktop\_wallet/1-1-3.png)
* **Step 4** - After you input the app password again, hit "_Go to Home_", and it will bring you to the main dashboard. ![](../../docs/wallets/assets/desktop\_wallet/1-1-4.png)

### 1.2 - Restore Wallet from Mnemonic Phrases

When you select the option of "_Restore Wallet_", it brings you to the following window that allows you to input the wallet name and mnemonic phrase that was previously created.

* **Step 1** - Input all the required information (make sure you input the correct information of your wallet) and then hit "_Restore Wallet_". ![](../../docs/wallets/assets/desktop\_wallet/1-2-1.png)
* **Step 2** - Then it requires you to input the app password you created when you initially installed the app. ![](../../docs/wallets/assets/desktop\_wallet/1-2-2.png)
* **Step 3** - After you input the app password, hit “Go to Home”, and it will bring you to the main dashboard. Now you have successfully restored your wallet! ![](../../docs/wallets/assets/desktop\_wallet/1-2-3.png) ![](../../docs/wallets/assets/desktop\_wallet/1-2-4.png)

### 1.3 - Delete Wallet

* **Step 1** - In the case that you would like to delete any of your wallets, you can do so by hitting the bottom left button and selecting the option "_Delete Wallet_": ![](../../docs/wallets/assets/desktop\_wallet/1-3-1.png)
* **Step 2** - A confirmation page will pop up with the wallet address, before deleting the wallet, please make sure you already have saved the phrase properly. If you have not backed up your wallet mnemonic phrase and deleted the wallet in the Desktop Wallet, this will result in losing your funds forever. Once you are ready to delete the wallet from the Desktop Wallet, hit "_Confirm_": ![](../../docs/wallets/assets/desktop\_wallet/1-3-2.png)
* **Step 3** - In the next window, please enter the words “DELETE” to further confirm, then click “Delete Wallet”. After a bit of loading time, the success page will show: ![](../../docs/wallets/assets/desktop\_wallet/1-3-3.png) ![](../../docs/wallets/assets/desktop\_wallet/1-3-4.png)

### 1.4 - Wallet List

You can find the list of all your wallets by clicking the bottom left button and selecting the "_Wallet List_", and then all the inputted wallets will be displayed on the right interface. You can select any wallet you would like to access by hitting "_Select_" under "_Action_". ![](../../docs/wallets/assets/desktop\_wallet/1-4.png)

## 2. Transactions

### 2.1 - Sending Transactions

Sending funds is easy with the Desktop Wallet. Ensure that you have enough funds before you perform the sending operation. Do not forget that you can always request some testing tokens in faucet:

\| Asset | Faucet | | :---: | --- | --- | | TCRO (Croeseid Testnet) | [https://crypto.org/faucet](https://crypto.org/faucet) | | TCRO (Cronos Testnet) | [https://cronos.crypto.org/faucet](https://cronos.crypto.org/faucet) |

In case you have reached the daily limit on faucet airdrop, you can simply send a message on [Discord #request-tcro channel](https://discord.gg/c7vSX4TSrf).

* **Step 1** - Select the "_Assets_" on the left panel, and you will see the "_Send_" and "_Receive_" options on the left right of each asset. ![](../../docs/wallets/assets/desktop\_wallet/2-1-1.png) After you click the "_Send_", fill up the request information:
  * recipient address
  * amount to be sent
  * optional memo ![](../../docs/wallets/assets/desktop\_wallet/2-1-2.png)
* **Step 2** - Once you hit the "_Continue_" button, you can review the transaction details in the confirmation window on the Desktop Wallet and proceed to the next step by clicking "Confirm". Then enter your app password and hit "_Decrypt Wallet_". ![](../../docs/wallets/assets/desktop\_wallet/2-1-3.png)
* **Step 3** - In the "_Confirm Transaction_" section, please double-check the information and make sure the information you entered is correct. Now you can go with "_Confirm_" and click "_OK_" on the next page. ![](../../docs/wallets/assets/desktop\_wallet/2-1-4.png)
* **Step 4** - Now your funds have been transferred successfully to your selected address! You can then check the transaction history by clicking "_Transaction_" tab under any of your Assets. ![](../../docs/wallets/assets/desktop\_wallet/2-1-5.png) ![](../../docs/wallets/assets/desktop\_wallet/2-1-6.png)

### 2.2 - Receive Transactions

If someone is sending funds to you or you are sending funds from your other address to the current address, you can:

* **Step 1** - Under the "_Assets_" page, you will see the “Send” and “Receive” tabs on the left-right of each asset. Click "_Receive_". ![](../../docs/wallets/assets/desktop\_wallet/2-1-1.png)
* **Step 2** - You will find the QR code and the address of your current wallet account. ![](../../docs/wallets/assets/desktop\_wallet/2-2.png)

## 3. Staking Operations

Crypto.org Chain is based on Tendermint Core's consensus engine, it relies on a set of validators to participate in the proof of stake (PoS) consensus protocol who are responsible for committing new blocks in the blockchain. Token holders might stake their tokens to validators to secure the network and earn rewards. Particularly, we can:

* Delegate to a validator;
* Withdraw staking rewards from a validator;
* Redelegate from a validator.
* Undelegate from a validator.

### 3.1 - Delegate to a validator

* **Step 1** - To begin staking, go to "_Staking_" page and direct to the second tab "_Delegate Funds_". You can choose one of the active validators that you would like to delegate to, and enter the delegation amount. ![](../../docs/wallets/assets/desktop\_wallet/3-1-1-1.png) You can input the validator’s information either by:
  * Clicking the list button under "_Validator address_", and selecting your preferred validators. ![](../../docs/wallets/assets/desktop\_wallet/3-1-1-2.png)
  * Copying the complete address of your preferred validator, and pasting the validator’s "_Operator Address_" (begin with `tcrocncl...` for testnet) under "_Validator address_". Then specify the amount that you would like to delegate.

**Remark**: To support the decentralization of the network, we suggest all users delegate your funds to validators with fewer shares, but please make you've done research into the validators you selected before the delegation to minimize your risk of unnecessary fund loss.

* **Step 2** - Similar to sending a transaction, you can review and confirm the transaction details on the Desktop Wallet first shown below, click "_Review_" and enter your app password. ![](../../docs/wallets/assets/desktop\_wallet/3-1-2.png)
* **Step 3** - Now you will proceed to the confirmation section. Make sure you input the correct information of your wallet and then hit "_Confirm_". ![](../../docs/wallets/assets/desktop\_wallet/3-1-3-1.png) ![](../../docs/wallets/assets/desktop\_wallet/3-1-3-2.png) Now you’ve successfully staked the desired amount to your selected validator!

### 3.2 - Withdraw the reward from a validator

* **Step 1** - Under "_Staking Rewards_" on the "_Staking_" page, your staking reward amount from different validators will be displayed as below: ![](../../docs/wallets/assets/desktop\_wallet/3-2-1.png)
* **Step 2** - Click the "_Withdraw Reward_" under "_Action_", and input your app password. Similar to other transaction operations, you should review and double-check the transaction details "_Confirm_" before processing "_Confirm_". ![](../../docs/wallets/assets/desktop\_wallet/3-2-2.png) Please note that all of your available rewards from a validator will be withdrawn in the transaction.

Now you should see a success message on the Desktop Wallet, and your rewards withdrawal transaction was broadcasted successfully!

### 3.3 - Redelegate the staking from a validator

* **Step 1** - In the case that you plan to redelegate your staked funds from a validator, you can go to Delegation Management under the "_Staking_" page. The "_Redelegate Stake_" option is highlighted in green color. ![](../../docs/wallets/assets/desktop\_wallet/3-3-1.png)
* **Step 2** - You can click "_Redelegate Stake_" to redelegate your staked tokens from a validator now. On the popup window, likewise to [delegating to a validator](desktop\_wallet\_backup.md#\_3-1-delegate-to-a-validator), you will be required to fill in the validator’s address(you can either choose your preferred validator from the validator list or input its complete address), and the amount that you would like to redelegate from a validator, review and confirm the transaction details on the Desktop Wallet, input your app password again, then click "_Confirm_" to process. ![](../../docs/wallets/assets/desktop\_wallet/3-3-2.png) ![](../../docs/wallets/assets/desktop\_wallet/3-3-3.png)

Now you should see a success message on the Desktop Wallet, and your funds are redelegated to another preferred validator!

### 3.4 - Undelegate the staking from a validator

* **Step 1** - If you plan to undelegate your staked funds from a validator, you can go to Delegation Management under the "_Staking_" page. "_Undelegate Stake_" option is highlighted in red color. ![](../../docs/wallets/assets/desktop\_wallet/3-4-1.png)
* **Step 2** - You can undelegate your staked tokens from a validator by clicking "_Undelegate Stake_". Afterwards, you can specify the amount of token that you would like to undelegate from a validator, review and confirm the transaction details on the Desktop Wallet, input your app password again, then click "_Confirm_" to process. ![](../../docs/wallets/assets/desktop\_wallet/3-4-2.png) ![](../../docs/wallets/assets/desktop\_wallet/3-4-3.png)

Now you should see a success message on the Desktop Wallet, and your undelegation transaction was successfully processed!

::: tip NOTE

* You can review your undelegation process by clicking "_View Unbonding Delegation_" at the top right corner in the "_Delegation Management_" section. ![](../../docs/wallets/assets/desktop\_wallet/3-4-4.png)

:::

## 4. Governance

Governance proposals potentially impact many stakeholders. You are able to view all the concurrent voting, finished or rejected proposals, and cast your votes here. ![](../../docs/wallets/assets/desktop\_wallet/4.png)

### 4.1 - Cast your vote to a proposal

* **Step 1** - Choose a proposal which is in its Voting Period. You’re able to see the description of this proposal, with the current ratios of different vote options. Pick your desired vote option to this proposal and then click "_Send Vote_": ![](../../docs/wallets/assets/desktop\_wallet/4-1.png)
* **Step 2** - Make sure you have reviewed and confirmed the transaction details, then click "_Confirm_" ![](../../docs/wallets/assets/desktop\_wallet/4-2.png)

## 5. NFT Support

The "_My NFT_" page is where you could manage your NFTs which exist on the Crypto.org Chain, no matter browsing around your NFTs collections, transfer any NFTs to your friend, or even mint your very own unique NFT. ![](../../docs/wallets/assets/desktop\_wallet/5.png)

### 5.1 - Transfer an NFT

* **Step 1** - Under "_NFT Collection_", select the NFT you would like to transfer. Click "_Transfer NFT_": ![](../../docs/wallets/assets/desktop\_wallet/5-1-1.png)
* **Step 2** - Enter the Recipient Address. Please make sure that the recipient address is compatible with the Crypto.org Chain NFT token standard. Click "_Continue_": ![](../../docs/wallets/assets/desktop\_wallet/5-1-2.png)
* **Step 3** - Review the NFT transaction details in the confirmation window, then click "_Confirm Transfer_": ![](../../docs/wallets/assets/desktop\_wallet/5-1-3.png)

### 5.2 - Mint an NFT with your own Artwork

* **Step 1** - Under "_Mint NFT_", you are required to fill up the below NFT information: ![](../../docs/wallets/assets/desktop\_wallet/5-2-1.png)
* **Step 2.1** - You are able to upload your Artwork as either Image(.jpg, .png), or Video (.mp4): ![](../../docs/wallets/assets/desktop\_wallet/5-2-2-1.png)
* **Step 2.2** - Do not forget to upload a Thumbnail as well if you are minting a Video NFT: ![](../../docs/wallets/assets/desktop\_wallet/5-2-2-2.png)
* **Step 3** - It will manage to upload the files directly to the IPFS network. Please wait until the file upload process finishes, then click "_Review_": ![](../../docs/wallets/assets/desktop\_wallet/5-2-3.png)
* **Step 4** - Review the details of the NFT. Click "_Confirm_" to approve the minting transaction: ![](../../docs/wallets/assets/desktop\_wallet/5-2-4-1.png)

## 6. Cronos Bridge

Our Cronos Mainnet Beta, an EVM Compatible chain built with Etheremint, is live on 8th November 2021. You could easily convert and transfer your Crypto.org Native CRO and Cronos CRO between each other seamlessly with the Cronos Bridge we provide. ![](../../docs/wallets/assets/desktop\_wallet/6.png)

### 6.1 - Before the bridge transfer

First, you need to decide your desired bridge direction. You can also customize the config settings of a specific bridge direction, by clicking the config icon at the top-right corner. ![](../../docs/wallets/assets/desktop\_wallet/6-1.png)

Here are the default settings of certain bridge directions:

**MAINNET BETA** - _Crypto.org Chain_ to _Cronos Chain_ | Field | Value | | :---: | --- | --- | | Prefix | crc | | Bridge Channel | channel-44 | | Bridge Port | transfer | | Bridge Indexing URL | https://cronos.crypto.org/indexing/api/v1/bridges |

**MAINNET BETA** - _Cronos Chain_ to _Crypto.org Chain_ | Field | Value | | :---: | --- | --- | | Cronos Bridge Contract Address | [0x6b1b50c2223eb31E0d4683b046ea9C6CB0D0ea4F](https://cronos.crypto.org/explorer/address/0x6b1b50c2223eb31E0d4683b046ea9C6CB0D0ea4F/transactions) | | Bridge Indexing URL | https://cronos.crypto.org/indexing/api/v1/bridges | | Gas Limit | 30000 |

**TESTNET** - _Crypto.org Chain_ to _Cronos Chain_ | Field | Value | | :---: | --- | --- | | Prefix | tcrc | | Bridge Channel | channel-131 | | Bridge Port | transfer | | Bridge Indexing URL | https://cronos.crypto.org/testnet3/indexing/api/v1/bridges |

**TESTNET** - _Cronos Chain_ to _Crypto.org Chain_ | Field | Value | | :---: | --- | --- | | Cronos Bridge Contract Address | [0x44b8c54d95906D6b223dAE5E038cB8EF4ef45aE5](https://cronos.crypto.org/explorer/testnet3/address/0x44b8c54d95906D6b223dAE5E038cB8EF4ef45aE5/transactions) | | Bridge Indexing URL | https://cronos.crypto.org/testnet3/indexing/api/v1/bridges | | Gas Limit | 30000 |

NOTE: A misconfiguration may lead to a bridge transfer failure.

### 6.2 - Initiate a bridge transfer transaction

* **Step 1** - Once a valid bridge direction is selected, you are able to choose your desired transferring asset and enter the amount for the transferral. Then click "Transfer Asset" & enter your App Password to proceed. ![](../../docs/wallets/assets/desktop\_wallet/6-2-1.png)
* **Step 2** - Please confirm the transfer details. You may modify your transfer by clicking the back button on the top-left corner as needed. Please note that once you’ve clicked the "Confirm" button, there will be no going back. ![](../../docs/wallets/assets/desktop\_wallet/6-2-2.png)
* **Step 3** - After the transfer is initiated, the corresponding tokens will be transferred to our dedicated Cronos bridge smart contract. ![](../../docs/wallets/assets/desktop\_wallet/6-2-3-1.png)

The process may take up to a few minutes to finish. Once it’s done, you will see an updated balance in your receiving address. ![](../../docs/wallets/assets/desktop\_wallet/6-2-3-2.png)

### 6.3 - Check your Bridger Transfer History

You can always review your latest bridge transfer history at the top-right corner. ![](../../docs/wallets/assets/desktop\_wallet/6-3.png) If you found your bridge transfer history failed to get latest transferrals, please make sure your Bridge Indexing URL is correct with the value [mentioned above](desktop\_wallet\_backup.md#\_6-1-before-the-bridge-transfer)

## 7. DApp Browser

Since v0.6.4, you’re able to access any DApps available on Cronos Mainnet Beta directly through the Desktop Wallet on both Standard & Ledger Wallet. ![](../../docs/wallets/assets/desktop\_wallet/7.png)

::: warning DISCLAIMER You are responsible for your use of any DApps. DApps are controlled solely by their respective project providers. Please check the receiving addresses or contract addresses before you transfer any assets. We are not responsible for the accuracy, completeness, or usefulness of such DApps. Accordingly, we neither endorse, recommend, nor give any opinion, advice or whatsoever on such DApps, and are not responsible or liable for any losses incurred during your use of DApps. :::

### 7.1 - Choose your DApp

You may go to any DApps you like by either clicking the DApps inside the _Popular_ / _Saved_ section or typing the URL of the DApp directly on the Address Bar at the top.

### 7.2 - Save your favourite DApp

You can easily save any DApps you like by clicking the bookmark button at the top-right corner. When the bookmark button turns blue, it means the DApp has been successfully saved into your _Saved_ collection. ![](../../docs/wallets/assets/desktop\_wallet/7-2-1.png)

The bookmarked DApps will appear in _Saved_ section for quick access. ![](../../docs/wallets/assets/desktop\_wallet/7-2-2.png)

### 7.3 - Connect to DApp

To connect to a DApp, click the "connect" button and choose "**Crypto.org Chain Desktop Wallet**". ![](../../docs/wallets/assets/desktop\_wallet/7-3-1.png)

**Remark**: If "**Crypto.org Chain Desktop Wallet**" is missing from the options, choosing "**Metamask**" will also allow you to connect to the DApp.

Once you see that your selected wallet address on the Desktop Wallet appears, you’re successfully connected to the DApp. ![](../../docs/wallets/assets/desktop\_wallet/7-3-2.png)

### 7.4 - Enter your App Password

When you trigger any transactions on the DApp for the first time, a Password Input prompt will pop up – as is the case for any transaction you perform on the Desktop Wallet. ![](../../docs/wallets/assets/desktop\_wallet/7-4.png)

Enjoy your DApp Journey!
