# Conducting IBC Transfer with Keplr Wallet

The Inter-Blockchain Communication protocol (IBC) is an inter-module communication protocol that bridges different blockchains to facilitate communication and feature exchanges between networks with different infrastructure designs and consensus algorithms. IBC transfer works among the IBC-enabled chains, and it has been enabled in Cronos POS Chain.

In the following step-by-step guide, you will learn how to make IBC transfers with Keplr, and IBC transfers between Cronos POS Chain and Cosmos are demonstrated as an example in this guide.

### Pre-requisites

* Make sure you have CRO under Cronos POS Chain and ATOM under the Cosmos network in Keplr.
* You will need your Cronos POS Chain and Cosmos addresses in Keplr, please copy-and-paste somewhere and make them handy for later use.

### Transfer ATOM under Cosmos to Cronos POS Chain

1. Open your Keplr Extension and select "Send".                          ![](<../../.gitbook/assets/image (8) (1).png>)
2. Search ATOM or Cosmos under "Asset", select "IBC Send" then click Cronos POS.                     ![](<../../.gitbook/assets/image (13) (1).png>)
3. Enter your Keplr Cronos POS Chain address under “Wallet Address or ICNS”. Keplr will auto-fill your selected account’s address. but you can manually adjust or click the person icon to select from your Address book if needed.  \
   ![](<../../.gitbook/assets/image (6) (1).png>)
4. Input the desired ATOM desired amount to your Cronos POS Chain address in Keplr (we recommend testing with a small amount for the first try). And Optionally, customize the transaction fee.                                                                                ![](<../../.gitbook/assets/image (5) (1).png>)
5. Leave the memo field blank (you will need to provide a memo when sending it to an exchange). Then click “Next”.
6. On the transaction confirmation screen, you can view the details of your transaction. Select "Approve" to confirm the transaction.                                      ![](<../../.gitbook/assets/image (4) (1).png>) &#x20;
7. Now wait a bit for the transfer processing (usually takes less than 1 min). Keplr extension will show the progress of the transfer and a success message.\
   ![](<../../.gitbook/assets/Screenshot 2024-05-29 at 11.02.21 PM.png>)



### Transfer ATOM under Cronos POS Chain to Cosmos Network

1. Open your Keplr Extension and select "Send".                         ![](<../../.gitbook/assets/Screenshot 2024-05-30 at 10.55.10 PM.png>)
2. Search ATOM on Cronos POS under "Asset", select "IBC Send" and Cosmos Hub.   ![](<../../.gitbook/assets/Screenshot 2024-05-29 at 11.10.27 PM.png>)
3. Input your Keplr Cosmos address in “Wallet Address or ICNS”. Keplr will auto-fill your selected account’s address, but you can manually adjust or select from your Address book if needed.                        ![](<../../.gitbook/assets/image (7) (1).png>)
4. Enter the desired ATOM amount you’d like to send to your Cronos POS Chain address in Keplr (we recommend testing with a small amount for the first try) and and optionally customize the transaction fee.                                                                                 ![](<../../.gitbook/assets/Screenshot 2024-05-30 at 10.59.18 PM.png>)
5. Memo is also optional here (you will need to provide a memo when sending it to an exchange). Then click “Next”.
6. On the transaction confirmation screen, you can view the details of your transaction. Select "Approve" to confirm the transaction.                                      ![](<../../.gitbook/assets/Screenshot 2024-05-30 at 10.59.55 PM.png>)
7. After a minute, navigate back to account page in Keplr, and you should see the amount of ATOM you just transferred back.                                                            ![](<../../.gitbook/assets/image (9) (1).png>)

&#x20;

### (Optional) Advanced Transfer Mode in Keplr Wallet &#x20;

{% hint style="danger" %}
**Warning** \
Before using Keplr's Developer Mode for IBC Transfers, make sure research its associated risks and manually verify if the IBC channel is active prior to performing the IBC transactions on [Mintscan's Cronos POS Chain relayer page](https://www.mintscan.io/crypto-org/relayers). These active channels are subject to change. Incorrect Channel ID will lead to the failure of this transaction, or your transaction could get stuck in an inactive channel. Cronos team does not take any liability related to the loss of funds due to improper use of the IBC Transfers service.
{% endhint %}

\
The default IBC Send option remains pre-configured. Keplr Wallet's developer transfer mode provides an alternative for situations where direct IBC send isn't available, requiring manual channel verification and addition.  The developer mode can be enabled by accessing Settings and turning on "Developer Mode" under "Advanced." &#x20;

![](<../../.gitbook/assets/Screenshot 2024-05-30 at 11.49.35 PM.png>)

Navigate back to the wallet account page, scroll down to the bottom and hit "Transfer" for Advanced IBC Transfer.&#x20;

<img src="../../.gitbook/assets/Screenshot 2024-05-30 at 11.49.57 PM.png" alt="" data-size="original">



### Transfer ATOM under Cosmos to Cronos POS Chain

Click on ATOM Cosmos Hub and select "New IBC Transfer Channel" under Destination chain.&#x20;

Choose "Cronos POS" from the Destination Chain dropdown menu, and enter "channel-187" or "187" in the field of Source Channel ID. Again, make sure you've **verified the** [**active channels** on Mintscan](https://www.mintscan.io/cosmos/relayers/channel-187/crypto-org/channel-27), as these channels are subject to change. Then hit “Save”.  &#x20;

![](<../../.gitbook/assets/image (11) (1).png>)

Then proceed to input the necessary details and finalize the transaction.\


### Transfer ATOM under Cronos POS Chain to Cosmos Network

Click ATOM on Cronos POS and select "New IBC Transfer Channel" under Destination chain.&#x20;

Choose "Cosmos Hub" from the Destination Chain dropdown menu, and enter "channel-27" or "27" in the field of Source Channel ID. Hit “Save”.&#x20;

![](<../../.gitbook/assets/image (12) (1).png>)

Then proceed to input the necessary details and finalize the transaction.



For further assistance, refer to the [Keplr FAQ list or reach out to their HelpDesk](https://help.keplr.app/faq) (located at the bottom corner). You can also join [Cronos Discord](https://discord.gg/cronos) for community support and resources.
