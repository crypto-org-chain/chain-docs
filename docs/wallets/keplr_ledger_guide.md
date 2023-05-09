# Using Ledger Device with Keplr

As an alternative way, you can consider using Keplr to conduct staking and reward claiming operations.

In the following step-by-step guide, you will learn how to stake your CROs using the Keplr chrome extension and web wallet together with your Ledger device. You may choose to use Ledger Nano S or Nano X. In this tutorial, Ledger Nano S is used for demonstration.

### Technical support and inquiries

In case you have any inquiries about using the Ledger device with Keplr, kindly refer to the [Keplr FAQ list](https://faq.keplr.app/) or send a message to the Crypto.org Chain [Discord Channel](https://discord.com/invite/pahqHz26q4) _#browser-extension-wallet_ channel for assistance. Using Keplr with a Ledger Nano on Windows sometimes causes some issues, if you encounter such issues, please reach out to the Keplr team.

## Set up Keplr Wallet and connect with your Ledger device

_The browser may ask for permission to access your Ledger device, please make sure to grant this permission in your browser during this process. Note that the permission is strictly used to allow Keplr extension to communicate with the front-ends, and all sensitive data remain locally on your device._

### Step 1: Set up Keplr Wallet

Install the Keplr Browser Extension for Chrome from the [Keplr's website](https://www.keplr.app/) or [its release page](https://github.com/chainapsis/keplr-extension/releases). Once it is installed, you can open the extension and choose one of the options that best suit your preferences. Since we are using a ledger device for this tutorial, you can select the last option “Import ledger”.

![](assets/keplr\_wallet/s1-1.png)

Following the next window, you can input an account name and password for your Ledger account then “Next”. The “Advanced'' option will allow the user to input another HD Derivation Path, which is for deriving multiple accounts from the same mnemonic seed. For the first-time user, you can ignore the “Advanced” option.

If you have more than one account associated with the mnemonic and prefer to set up a custom account derivation path, you can set your custom HD wallet derivation path here and increase the numbers in the blank field under \[HD Derivation Path] to create a new address with the same mnemonic seed. Typically, accounts start from 0 then 1 then 2, and so on. Please note that by Keplr’s default setting, the coin type is 118 (Cosmos Hub) with Ledger. Given that, if you would like to do recovery in other wallets later or use Ledger, you may need to provide the HD path with 118 or use the Cosmos app. For more information about Keplr’s advanced setting, it is available [here](https://faq.keplr.app/).

In this tutorial, we can skip the advanced option.

![](assets/keplr\_wallet/s1-2.png)

It is time to connect your Ledger device to Keplr now! After plugging in your Ledger Device, you can open the Crypto.org Chain App on it and click “Next” in the pop-up window.

![](assets/keplr\_wallet/s1-3.png)

Upon this step, your Ledger device should be successfully connected to Keplr!

![](assets/keplr\_wallet/s1-4.png)

### Step 2: Connect to Crypto.org Chain on Keplr

At this step, we are going to connect to the Crypto.org Chain on Keplr.

Now you can open the Keplr extension and make the network change on the top bar, and you will find Crypto.org in the drop-down list. After the network is set, you should be able to view your account name, address, and CRO balance info.

Copy your account address which is below your account name and send some CROs to this address, so you can get ready to stake with Keplr!

![](assets/keplr\_wallet/s2-1.png) ![](assets/keplr\_wallet/s2-2.png) ![](assets/keplr\_wallet/s2-3.png)

### Step 3: Stake CROs on the Crypto.org Chain via Keplr

_Please note: you can always choose to redelegate or undelegate, while in case you are undelegating, your tokens will remain locked for 28 days (due to a security mechanism stipulated by the Cosmos protocol)._

Open the Extension and click "Stake". This will take you to the validator overview within the Keplr Web Wallet.

![](assets/keplr\_wallet/s3-1.png) ![](assets/keplr\_wallet/s3-2.png) ![](assets/keplr\_wallet/s3-3.png)

Then you can view a list of all the validators in the Keplr Web Wallet. It is important to review the validator’s information and commission rate before selecting a validator to stake with. After you confirm a validator that you would like to stake, click “Manage” next to its name and “Delegate” (Here we take #1 validator as an example).

![](assets/keplr\_wallet/s3-4.png)

Choose the number of CROs you want to stake and click “Delegate”. Please do not stake all of your available funds and leave a small amount of CROs for future transaction fees. In this demo, we will go with "Average". In the following window, the details will be displayed and at the bottom, it will say “Waiting for Ledger to Confirm” at the bottom.

Now you can check the information displayed on your ledger, make sure the information is correct, then you can click “Sign Transaction” on your Ledger device. Please always double-check on your ledger what you are signing!

After a bit, you can open the Keplr Browser Extension again and should be able to see the updated staking amount in the extension dashboard.

![](assets/keplr\_wallet/s3-5.png)

By now, you have successfully completed your stake!

### Step 4: Claim your Staking Rewards via Keplr

_Please note: claiming always incurs a transaction fee._

It is ideal that you claim the staking rewards regularly in that you can either redelegate these rewards for a compound effect or do something else with it.

To claim your CRO staking rewards, open the Keplr Browser Extension and click “Claim”. In this demo, we will go with “Average”. Now you can plug in your Ledger and open the Crypto.org Chain app on it, then click “Next” in the Browser Extension pop-up. The details will show and it will say “Waiting for Leder to Confirm'' at the bottom.

![](assets/keplr\_wallet/s4-1.png) ![](assets/keplr\_wallet/s4-2.png)

After reviewing the transaction on your ledger and ensuring the information is correct, you can click “Sign Transaction” on your Ledger device.

![](assets/keplr\_wallet/s4-3.png)

You are all set! We hope you can stake and claim your rewards successfully with this guide. In the future, if you would like to make changes and manage your delegate or undelegate operations, you can always do so via our wallet or Keplr.
