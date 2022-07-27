# The Proposal Process

*The governance process is divided into a few steps that are outlined below*:
 
### 1. The Idea
Governance proposals potentially impact many stakeholders. It is suggested to introduce your idea with known community members before investing resources into drafting a proposal to get the very initial feedback. If you know someone who is very experienced in the topic, you may try to communicate with them about a concise overview of what you think will result from proposed changes.

### 2. Begin your drafted proposal 
After you confirm the idea, you may start to draft and describe some potential elements of the proposal. It is recommended to also consider the anticipated questions that the community will likely ask. 

Please ensure to include the following information in your proposal: 
- Overview of this proposal
- Introduction of team member(s)
- The problem/issue this project solve/The reason for creating this proposal
- The details of the solution 
- The impact brings to the chain of the proposal
- Timeline, if applicable
- How can the quality of the deliverables be assessed, if applicable.


Proposal Types:
You may choose to put your proposal in any of the following formats:
- Parameter Change Proposal<br/>
Creating a parameter-change governance proposal involves two kinds of risk: losing proposal deposit amounts and potentially altering the function of the network in an undesirable way. Some of the examples are:
  - SoftwareUpgradeProposal: for breaking changes and binary updates
  - CancelSoftwareUpgradeProposal: for revoking the planned upgraded proposal 
- Community Pool Spend Proposal<br/>
It unlocks the potential for token-holders to vote to approve spending from the Community Pool. Engaging publicly with the community is the opportunity to develop relationships with stakeholders and to educate them about the importance of your work. If the proposal passes, your account will be credited the supported amount of your proposal request.
- Text Proposal  
You can also choose to submit the proposal in plaintext format.

### 3. Collect feedback from the community 
After the proposal is ready, you can post a thread to begin a discussion on the [Crypto.org Chain Github Discussions page](https://github.com/crypto-org-chain/chain-main/discussions) to gain initial feedback.
Engagement is critical to the success of a proposal. The ideal strategy is to engage with experienced people in the community about your idea, to confirm the key points, such as if it makes sense, or if critical flaws exist, etc. You may also plan for a few stages of engagement to get as much as feedback possible before and after submitting a proposal on-chain. Let people in the [Discord community](https://discord.gg/5JTk2ppsY3) know about your draft proposal.

### 4. Revise your proposal
Depending on the collected feedback, you can revise the proposal accordingly.

### 5. Submit your proposal
- (Recommend) Submit the Proposal to the Testnet first
You may want to push your proposal live to the testnet first before pushing to the mainnet. Once your proposal is on-chain, you will not be able to change it. By submitting it to testnet, you will gain a good sense of what the proposal description will look like and know how your proposal will be on the mainnet.
Submitting your proposal to the testnet also increases the likelihood that you will discover a flaw before deploying your proposal on the mainnet. 
For testnet submission, please note: you'll need testnet tokens TCRO for your proposal, and the parameters for testnet proposals are different (eg. voting period timing, deposit amount, deposit denomination)

- Submit Your On-chain Proposal with Initial Deposit 
After everything is set and you are confident about the proposal, you can now submit the final proposal with chain-maind. You should have reasonable confidence that your proposal will pass before risking deposit contributions. Part of the voting community members should probably be aware of the proposal and if they see the proposal, they probably have considered it already before the proposal goes live on-chain. 

### 6. Deposit tokens and fund an active proposal
The deposit period lasts either 14 days or until the proposal deposit totals 10,000 CROs, whichever happens first. Prior to a governance proposal entering the voting period (ie. for the proposal to be voted upon), a minimum number of CROs are deposited. 
Once the decision for the proposal is made - either passed or failed, the deposit will be returned to the contributors. People have considered contributions amounts differently and anyone can contribute to this deposit, while please note that the contributed CROs are potentially at risk of being burned*.

*Deposits are burned when proposals:
- Expire - deposits will be burned if the deposit period ends before reaching the minimum 10,000 of CROs 
- Fail to reach quorum - deposits will be burned for proposals that do not reach voting power level ie. more than 33.4% of all staked CROs must vote
- Being vetoed - deposits for proposals with 33.4% of voting power backing the 'no-with-veto' option are also burned

### 7. Vote for an active proposal  
The voting period is currently 14 days, and the vote can be changed anytime before the period ends. During the voting period, participants may select a vote of either 'yes', 'no', 'abstain', or 'no-with-veto'. Only bonded CROs count towards the voting power for a governance proposal, so the liquid CROs will not count toward a vote.


### 8. Criteria to determine whether a governance proposal passes
- A minimum deposit - 10,000 CRO is required for the proposal to enter the voting period, and the deposit must be reached within 14 days (this is the deposit period)
- A minimum of 33.4% of the network's voting power is required to participate to make the proposal valid
- A majority (greater than 50%) of the participating voting power must back the 'yes' vote during the required voting period
- Less than 33.4% of participating voting power votes 'no-with-veto'

&nbsp;

Please note that it is a WIP. The governance will further be explored down the line and some parts in this documentation are in development, so please use this document as a reference and seek feedback when using this information.

For more details about governance transaction, queries, and relevant network parameters, please visit the [gov section](https://crypto.org/docs/chain-details/module_overview.html#gov).
