---
description: >-
  This guide is designed to provide you with clear instructions for managing
  your CRO stakes across different platforms, including Crypto.com Onchain
  Wallet and Crypto.com Defi Desktop Wallet.
---

# Delegation Guide

## [Crypto.com Onchain Wallet](https://crypto.com/eea/defi-wallet)

Crypto.com Onchain Wallet provides intuitive user interface through Earn simplifies the process for staking, claiming rewards, claim to restake, unstaking, and redelegation. The Onchain Wallet App offers the ability to select from a list of approved validators for both staking and changing your delegation from one validator to another.

### Delegate CRO on Crypto.com Onchain Wallet&#x20;

1. Tap \[Earn] on the bottom navigation of your Onchain Wallet app
2. Tap \[Start Earning] or \[Earn More] to see the list of tokens supported for earning
3. Select CRO and enter the stake amount to see the projected annual earning based on the latest estimated annual reward %
4. Tap on the “To Validator” dropdown to choose another validator from our whitelisted validator list (we recommend not to stake to a validator with an existing voting power of >15%)
5. Review and confirm the staking by tapping \[Confirm Stake]
6. Authorize the staking request with your passcode (and 2FA if enabled)
7. Wait for the on-chain confirmation of your staking request
8. Once confirmed, you will see the refreshed CRO staking assets on your Earn screen

{% hint style="info" %}
Please note that every time when you increase your stake with the same validator, your reward balance will be automatically claimed into your wallet and your CRO reward balance will start to accrue every block after the staking request is confirmed on-chain.
{% endhint %}



### Undelegrate CRO on Crypto.com Onchain Wallet&#x20;

You can unstake your CRO delegation anytime by following the below steps.

1. Tap \[Earn] on the bottom navigation of your Onchain Wallet app
2. Tap on your CRO assets to navigate to Cronos POS Chain Staking details screen
3. Tap \[...] > \[Unstake] for the corresponding Validator’s delegation
4. Enter the unstake amount
5. Review and confirm the unstake request by tapping \[Confirm Unstake]
6. Authorize the unstake request with your passcode (and 2FA if enabled)
7. Wait for the on-chain confirmation of your unstake request
8. Once confirmed, you will see the refreshed CRO staking assets on your Earn screen and your unstaked balance will be moved into the “Unbonding Balance” and undergo the 28-day unbonding period
9. You can view your unbonding countdown via \[...] > \[View Unbonding Details] for when your unstaked amount is available in your CRO wallet for usage
10. After completing the 28-day unbonding period, the CRO balance will be added back into your CRO wallet automatically.

Once you unstake your CRO, all unreceived rewards will be deposited into your wallet automatically.&#x20;

### &#x20;Redelegate CRO on Crypto.com Onchain Wallet&#x20;

You can redelegate your existing delegations - change stake from one validator to another without undergoing the 28-day unbonding period

1. Tap \[Earn] on the bottom navigation of your Cronos POS Chain Staking details screen
2. Tap \[...] > \[Switch Validator] CTA
3. Enter the amount that you want to switch from the existing validator to another validator
4. Tap on the “To Validator” dropdown to choose another validator from our whitelisted validator list (we recommend not to stake to a validator with an existing voting power of >15%)
5. Review and confirm the switch validator (redelegate) request by tapping \[Confirm Switch Validator] Please note that you cannot redelegate any CROs on the receiving validator for 28 days afterward as enforced by the Cronos POS Chain to prevent “redelegation hopping” within a short period of time
6. Authorize the switch validator (redelegate) request with your passcode (and 2FA if enabled)
7. Wait for the on-chain confirmation of your request
8. Once confirmed, you will see the staking delegation change to the new validator

{% hint style="info" %}
Please note that every time when you redelegate your CRO from the existing validator to another validator, your reward balance with the existing validator will be automatically claimed into your wallet.
{% endhint %}

### &#x20;Restrictions on Re-Delegation

When managing your CRO delegation, be aware of the following restrictions:

{% hint style="warning" %}
* Re-Delegation Limit: There is a limit on the number of re-staking/undelegation operations you can perform in a row, which is typically capped at 7 consecutive actions.
* Cooling Period: Undelegating your CRO will initiate a cooling period during which your tokens will not be accessible or redelegable. This is a security measure to prevent rapid switching and to stabilize the network.
* Your unstaked CRO will be available to you after a 28-day unbonding period, as enforced by the Cronos POS Chain. This is to protect against a Validator attacking the Cronos POS Chain and then immediately withdrawing the stake amount.
{% endhint %}



## [Crypto.com Defi Desktop Wallet](https://github.com/crypto-com/chain-desktop-wallet)

The Crypto.com Defi Desktop Wallet supports basic sending and CRO staking operations on Mainnet and Croeseid Testnet, including the option to choose any CRO validators for staking and redelegation.

### Delegate CRO to a validator

Step 1 - To begin staking, go to the "Staking" page and direct to the second tab, "Delegate Funds." You can select your preferred validators with the delegation amount.

<img src="https://lh7-us.googleusercontent.com/xLyx-RAuaAFM-37SQz7ujyl3Db_WquFZJuBZ_WZ7Qg3d-za6SsTLJfv2G1AmHN_dcWeRxzGyWVvZZ8mEpYjCQRJf6rNEhoqmPz3DuGEKcd56-hxb_0pERzP2SI0XpoRJoRr8s9CBSdLZs6cKPw8N24M" alt="" data-size="original">

You can input the validator’s information either by:

* Clicking the list button under "Validator address" and selecting your preferred validators.

![](https://lh7-us.googleusercontent.com/O4ZPhVUwXCOITDLkpgOHfEiJwOfhOKAVfc0VAyFWv-Lz4hnY-1b7txQsjlszLLol5q-04VWq-olCQKgm7C34Lp3eIZW-DGXHkmub3Z3uUryONSPGvS8pFv0VbXICvsYfjnTeUnvi8eQxsDH-uFbkjvc)

* Copying the complete address of your preferred validator, and pasting the validator’s "Operator Address" (begin with tcrocncl... for testnet) under "Validator address." Then specify the amount that you would like to delegate.

{% hint style="warning" %}
**Remark**\
To support the decentralization of the network, we suggest all users delegate your funds to validators with fewer shares, but please make sure you've done research into the validators you selected before the delegation to minimize your risk of unnecessary fund loss.
{% endhint %}

Step 2 - Similar to sending a transaction, you can review and confirm the transaction details on the Desktop Wallet first shown below, click "Review" and enter your app password.

![](https://lh7-us.googleusercontent.com/sRD64WKtpSad0-2_-5atKTQ0htjpM8nzoVv0ebVrG5jtIuEZyr2-Vda6QbSFcGZtPnlcDPL-MA8VoBaWSA3ARd9K2-2Xu_zYSTqpP55E1t4iyp9OU5FptETv5aVi-Dai9nTq24-SKoHKJ_Aj81DZdNQ)

Step 3 - Now you will proceed to the confirmation section. Make sure you input the correct information of your wallet and then hit "Confirm".

| ![](https://lh7-us.googleusercontent.com/y0tLmFNYMi2G1S9jAPxXR0eSonP39Ne5pmXM2bTdaOUI5iDclukPL0ZeCwZx0frlz14krcAgf4n2aK9cy9gLd8ScdX6MrYmqmWeNOkleV0cqlKzmjQUlEwShJ0vy3_tp8mAd1h_pyDXtb9yYpKdqljU) | ![](https://lh7-us.googleusercontent.com/qMs9GCNypNM7HipsXhZKP5cRr9QsB_hHYWZCmK1DCXz6uWaVUMTCKBKj7e2bYc4F4xOpbthc026O0kCCVDO_YjKlZXJxjgP6YKVPyWuxxMDWHEHNUKcJ5hROZrjy6TjV92EmDE4sUqhgLWygbzjtKOo) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Now you’ve successfully staked the desired amount to your selected validator!



### Withdraw the reward from a validator

Step 1 - Under "Staking Rewards" on the "Staking" page, your staking reward amount from different validators will be displayed as below:

![](https://lh7-us.googleusercontent.com/DvqByyewyVUj4PUka4rp3IrxqBiSY4ous622UJhTiW9FrMKkub1dI6L2Jf4oqXFJvWtpI2NEWTMv5Ct3ik-eg6mvjx6MCfdU1qMd4p9Nkvei7So93AiofAhwU986rz8wWLw2pdHh3m5k4UXhk-k6q4k)

Step 2 - Click the "Withdraw Reward" under "Action," and input your app password. Similar to other transaction operations, you should review and double-check the transaction details "Confirm" before processing "Confirm"

![](https://lh7-us.googleusercontent.com/rx0PdUztpW_KfxOVZABZWMjzSqwNuK7D-yHO4Wqj9hnZzvCzJTmjo01EiT5uGnS-coKYMhoXIh0YG0Otr9XyhZO_QM5pIoyThcx4yI93F5ACQWRQqwmqWS6tTVGCG9FvRtVtK5i6BFO3bnO-LRGOwOI)

{% hint style="info" %}
Please note that all of your available rewards from a validator will be withdrawn in the transaction.
{% endhint %}

Now you should see a success message on the Desktop Wallet, and your rewards withdrawal transaction was broadcasted successfully!



### Redelegate the staking from a validator

Step 1 - In the case that you plan to redelegate your staked funds from a validator, you can go to Delegation Management under the "Staking" page. The "Redelegate Stake" option is highlighted in green color.

![](https://lh7-us.googleusercontent.com/TxgMRDPB-BRpSkV3avdmj5B-Hxs9UzTH9Z4DdNy6p2tdjc6tc8Kb1KK_L3o0z42rJxMt6zO2_47zP8tQXX1iYLgKBLYwBIT_c8F8n0BIzIJ5dMGd0UkHYikLZRcHPJcpwr3KlHh93_-3g3Vpafu6t5E)

Step 2 - You can click "Redelegate Stake" to redelegate your staked tokens from a validator now. On the popup window, likewise to[ delegating to a validator](https://crypto.org/docs/wallets/desktop_wallet.html#_3-staking-operations), you will be required to fill in the validator’s address (you can either choose your preferred validator from the validator list or input its complete address), and the amount that you would like to redelegate from a validator, review and confirm the transaction details on the Desktop Wallet, input your app password again, then click "Confirm" to process.

| ![](https://lh7-us.googleusercontent.com/tABDJ8nN_oWzMPxUFsVVpnuae4MYw7mBSrzZ4X2pRhCtZHAFUtcbALbqx6HN5nhJEdCcoH_Cp-oB4zQhTEBz62jYMjJ39rxr0i0fBnfLtMzTvKOM5WXWf6GBo3_vdq3Ler3cROQ6DgfNEDZaTumSYU4) | ![](https://lh7-us.googleusercontent.com/1guh9A2vkbHd2LY2IjYjzXaR0RpB9YCbd-DmYkIAfT62DBZZIzq3GUXBt7PmTs33jNZZ8FTy6ocOfNbSCuTesfbrCCCMv4EeTAZPZu61d0b7k8MSBiLYN-7VTeeEIH2-hyk4x-y6y12TzEvkmzbCbmE) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Now you should see a success message on the Desktop Wallet, and your funds are redelegated to another preferred validator!

### &#x20;Undelegate the staking from a validator

Step 1 - If you plan to undelegate your staked funds from a validator, you can go to Delegation Management under the "Staking" page. "Undelegate Stake" option is highlighted in red color.

![](https://lh7-us.googleusercontent.com/BjF-IB3kHy_rlpHZoQQhE_q1V7UKJj8uHkVN-w1B_2ZQ2pVMdmQUOBlZYWE7CN-Oww-cNKWNNXGkz9HNY-NhvAYheO9USFvlPhvkP9CULkEmIsBgU_C5zbm42XVsC0S6cMSoYmT-7Ig43J09Rm5b9nA)

Step 2 - You can undelegate your staked tokens from a validator by clicking "Undelegate Stake". Afterwards, you can specify the amount of token that you would like to undelegate from a validator, review and confirm the transaction details on the Desktop Wallet, input your app password again, then click "Confirm" to process.

| ![](https://lh7-us.googleusercontent.com/vp9jRLaUzzCCdHntdYwkwvCfaI73NC97xqHV5WRjr3o-bWJy6qM91Y6EX-HIcWOnJUcFXVRkYo7FSwrW85ZByuXuX9zkdjCpTiJEtNTq_TID-kYiTAh1Voc7PMQC7Qxnk1jYiuH8cD7F9Y7KNZSP_1Q) | ![](https://lh7-us.googleusercontent.com/XEAga-J19nZIhbaiQXoU4-zvIXlGUwBpr8a4nFmwOn1LYeGAASQBepUTivlz4Zwe5SgaqdmB9hSHa04zb_RXB6VnYLTQ0NsdjXCl6Ck8TrcXJe5aniUs_lsNKOkkBNzUBCehxJreLPrndyiBiGqqd-U) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Now you should see a success message on the Desktop Wallet, and your undelegation transaction was successfully processed!

{% hint style="info" %}
Please note that you can review your undelegation process by clicking "View Unbonding Delegation" at the top right corner in the "Delegation Management" section.

![](https://lh7-us.googleusercontent.com/ONDri7RCSzdfF3296hOyHGoe7wMUHe4mH3Xf0DPATrCE8OT8VZZIxbrm37JfdRua1JDBZZ8AiBRAOWH2YRjuf-HgJYpNJVtoau-heXPLueTCZXQUKxnaSPuB2htBH_IHF4CJXcxNAQ5y-viPTu7YQeU)
{% endhint %}



### &#x20;
