---
description: >-
  This guide is designed to provide you with clear instructions for managing
  your CRO stakes across different platforms, including Crypto.com Onchain
  Wallet.
---

# 🗄️ Base Delegation Guide

## [Crypto.com Onchain Wallet](https://crypto.com/eea/defi-wallet)

Crypto.com Onchain Wallet provides intuitive user interface through Earn simplifies the process for staking, claiming rewards, claim to restake, unstaking, and redelegation. The Onchain Wallet App offers the ability to select from a list of approved validators for both staking and changing your delegation from one validator to another.

### Delegate CRO on Crypto.com Onchain Wallet

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

### Undelegrate CRO on Crypto.com Onchain Wallet

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

### Redelegate CRO on Crypto.com Onchain Wallet

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

### Restrictions on Re-Delegation

When managing your CRO delegation, be aware of the following restrictions:

{% hint style="warning" %}
* Re-Delegation Limit: There is a limit on the number of re-staking/undelegation operations you can perform in a row, which is typically capped at 7 consecutive actions.
* Cooling Period: Undelegating your CRO will initiate a cooling period during which your tokens will not be accessible or redelegable. This is a security measure to prevent rapid switching and to stabilize the network.
* Your unstaked CRO will be available to you after a 28-day unbonding period, as enforced by the Cronos POS Chain. This is to protect against a Validator attacking the Cronos POS Chain and then immediately withdrawing the stake amount.
{% endhint %}
