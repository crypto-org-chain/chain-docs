# Conducting IBC Transfer with Keplr Wallet

The Inter-Blockchain Communication protocol (IBC) is an inter-module communication protocol that bridges different blockchains to facilitate communication and feature exchanges between networks with different infrastructure designs and consensus algorithms. IBC transfer works among the IBC-enabled chains, and it has been enabled in Crypto.org Chain.

In the following step-by-step guide, you will learn how to make IBC transfers with Keplr, and IBC transfers between Crypto.org Chain and Cosmos are demonstrated as an example in this guide.  

*Please note: we recommend using this Keplr’s feature only after careful research and awareness of the risks associated with its improper use, and Crypto.org does not take any liability related to the potential loss of funds due to the IBC Transfers service.*

### Pre-requisites
- Make sure you have CRO under Crypto.org Chain and ATOM under the Cosmos network in Keplr. 
- You will need your Crypto.org Chain and Cosmos addresses in Keplr, please copy-and-paste somewhere and make them handy for later use.

### Step 1: Transferring ATOM under Cosmos to Crypto.org Chain
Open your Keplr Extension, select “Cosmos” in the network drop-down bar.
You will find “IBC Transfer” at the bottom and click “Transfer”. 

Under “Destination Chain”, select “New IBC Transfer Channel”.
Under the “Add IBC Channel” pop-up window, select “Crypto.org”, fill the “Channel ID” with **channel-109** (*Incorrect Channel ID will lead to the failure of this transaction*), and hit “Save”.

<img src="./assets/keplr_wallet/IBC-s1-1.png" />
<img src="./assets/keplr_wallet/IBC-s1-2.png" />
<img src="./assets/keplr_wallet/IBC-s1-3.png" />

Now you can fill up your Keplr Crypto.org Chain address under “Recipient”. No need to worry about the memo here (*You will need to provide a memo when sending to an exchange*). Then click “Next”.

Under “Token”, select ATOM, then enter the amount of ATOM you’d like to send to your Crypto.org address in Keplr (*We encourage you to do a small amount for the first try*). Then select the preferred transaction fee then click “Submit”.

Now on the transaction confirmation page, you can review the details, and click on “Approve” to confirm this transaction. 

<img src="./assets/keplr_wallet/IBC-s1-4.png" />
<img src="./assets/keplr_wallet/IBC-s1-5.png" />

Now wait a bit for the transfer processing (usually takes less than 1 mins), then select “Crypto.org” in the network drop-down bar, and you should see the amount of ATOM you just transferred here!

<img src="./assets/keplr_wallet/IBC-s1-6.png" />

Your first IBC transfer to Crypto.org Chain on Keplr is completed! 



### Step 2: Transferring ATOM under Crypto.org Chain to Cosmos Network

Select “Crypto.org” in the network drop-down bar in your Keplr extension app. 

Go to “IBC Transfer” at the bottom, and click “Transfer” (**Important: Please make sure you select IBC Transfer here instead of hitting another transfer button or the token itself**).

Under “Destination Chain”, select “Cosmos”.
(*There is no need to enter new channel information for Cosmos here, as Keplr can recognize the channel needed to send the tokens back automatically*)

Now fill up your Keplr Cosmos address under “Recipient”. Memo is also optional here. Then hit “Next”.

<img src="./assets/keplr_wallet/IBC-s2-1.png" />
<img src="./assets/keplr_wallet/IBC-s2-2.png" />
<img src="./assets/keplr_wallet/IBC-s2-3.png" />

Under “Token”, make sure it is ATOM, enter the amount of ATOM to send back to your Cosmos address in Keplr, and select the preferred transaction fee, then click “Submit”.

<img src="./assets/keplr_wallet/IBC-s2-4.png" />
<img src="./assets/keplr_wallet/IBC-s2-5.png" />

Now on the transaction confirmation page, you can double-check the details and click on “Approve” to confirm this transaction. 

After a minute, go back to the Cosmos in Keplr, and you should see the amount of ATOM you just transferred back. 
(In this example, our origin ATOM total balance was $28.4 before the initial IBC transfer, and it is $28 now after ATOM transferred back to Cosmos account, due to the token price fluctuation and transfer fee)

<img src="./assets/keplr_wallet/IBC-s2-6.png" />

*Congratulations! You’ve done the cross-chain IBC transfer! Hope this tutorial has helped you in conducting IBC transfers! In case you need more assistance, you can always check the [Keplr FAQ list](https://faq.keplr.app/) or find us on the Crypto.org Chain [Discord Channel](https://discord.com/invite/pahqHz26q4).*
