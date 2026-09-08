# ♾️ Tokenomics and Inflation

Cronos POS Chain uses a sustainable staking model designed to reward long-term holders while keeping inflation under control.

***

### How CRO Emissions Work

New CRO tokens are minted each block to reward stakers. The emission rate starts at 1% annually and decays by 6.8% each month - meaning early stakers benefit from higher rewards, while total supply stays well under the 100 billion CRO hard cap.

#### Inflation Decay Schedule

<table><thead><tr><th>Time from v7.0.0 Upgrade</th><th width="202.50390625">Inflation Rate</th><th>Approx. Annual CRO Minted</th></tr></thead><tbody><tr><td>Month 0 (launch)</td><td>1.000%</td><td>~985M CRO/yr</td></tr><tr><td>Month 6</td><td>0.656%</td><td>~646M CRO/yr</td></tr><tr><td>Month 12 (Year 1)</td><td>0.431%</td><td>~427M CRO/yr</td></tr><tr><td>Month 24 (Year 2)</td><td>0.186%</td><td>~184M CRO/yr</td></tr><tr><td>Month 36 (Year 3)</td><td>0.080%</td><td>~79M CRO/yr</td></tr><tr><td>Month 48 (Year 4)</td><td>0.035%</td><td>~34M CRO/yr</td></tr><tr><td>Month 60 (Year 5)</td><td>0.015%</td><td>~15M CRO/yr</td></tr></tbody></table>

_Illustrative estimates based on \~98.5B total supply at launch._

#### Supply Cap

The chain enforces a hard cap of 100 billion CRO. If circulating supply ever reaches this cap, no further tokens are minted. Balances held at designated burn addresses are excluded from the circulating supply calculation.

***

{% hint style="success" %}
Staking on the Cronos POS Chain now comes in two flavors. Every delegator starts with **Base Staking**. Since the v7 upgrade ([governance proposal #33](https://cronos-pos.org/explorer/proposal/33)), holders can also opt into **Tiered Staking**. The two are complementary rather than mutually exclusive, i.e., tiering doesn't replace normal delegation, it builds on it.
{% endhint %}

### Base Staking Rewards (\~3% APY)

All CRO delegated to a bonded validator earns base staking rewards. The protocol maintains a **\~3% APY floor**. If block fees are insufficient to meet this target, the Tier Rewards Pool automatically tops up the shortfall each block.

**Key points:**

* No action required - simply delegate CRO to any active validator
* Base rewards are distributed every block
* Validator commission applies to base rewards
* The 3% floor is a governance-adjustable parameter (`TargetBaseRewardsRate`)
* The Rewards Pool balance is publicly queryable on-chain at any time

This means your staked CRO earns a stable, predictable return regardless of network activity levels.

***

### Tiered Staking (Bonus APY)

For stakers who want higher returns, tiered staking offers bonus APY on top of the base rate in exchange for an exit commitment period.

#### Tier Structure

| Tier | Exit Commitment | Bonus APY | Total APY (approx.) | Min. Lock |
| ---- | --------------- | --------- | ------------------- | --------- |
| Base | —               | —         | \~3%                | —         |
| 1    | 1 year          | +2%       | \~5%                | 100 CRO   |
| 2    | 2 years         | +4%       | \~7%                | 100 CRO   |
| 3    | 4 years         | +7%       | \~10%               | 100 CRO   |

_APY values are illustrative. Actual rates depend on governance decisions and available protocol revenue. All tier parameters are governance-adjustable._

#### How It Works

1. **Choose a tier:** select your exit commitment period and delegate to any validator
2. **Earn rewards:** receive base + bonus APY while your position is active
3. **Exit when ready**: trigger exit at any time; the commitment countdown starts then (not when you entered)
4. **Keep earning during exit:** you continue earning full base + bonus rewards throughout the exit commitment period
5. **Choose your exit route**: after the commitment elapses, either keep CRO staked at base rate (instant exit) or unbond for liquid tokens (28-day wait)

#### Key Things to Know

* **Opt-in:** tiered staking is entirely optional. Regular staking continues as before.
* **Any validator:** you choose which validator to delegate to, and can redelegate anytime without triggering exit.&#x20;
* **Voting rights preserved**: tier-locked positions count toward governance voting power.
* **Slashing applies**: locked positions are subject to standard validator slashing rules.
* **Rewards are not automatic:** you need to claim rewards by submitting a transaction.
* **Cancel anytime:** you can cancel an exit and resume earning bonus rewards immediately.
* **Trigger exit immediately**: when entering a tier, you have the option to start the exit countdown right away.

#### How the Rewards Pool Is Funded

The Tier Rewards Pool backs both base and bonus rewards:

<table><thead><tr><th width="280.40625">Phase</th><th>Funding Source</th></tr></thead><tbody><tr><td>Phase 1 (launch)</td><td>CRO reserve</td></tr><tr><td>Phase 2 (transition)</td><td>Reserve + protocol revenue</td></tr><tr><td>Phase 3 (target state)</td><td>Protocol revenue</td></tr></tbody></table>

The pool balance is publicly queryable on-chain. &#x20;

***

### Staking Guide

#### Option 1: Base Staking (no lock)

Simply delegate CRO to any active validator using your wallet or CLI. You earn the base \~3% APY with no commitment period. You can undelegate at any time (subject to the standard 28-day unbonding period).

#### Option 2: Tiered Staking (higher APY with exit commitment)

To earn bonus APY, enter a tier by either:

* **Locking fresh CRO** into a tier position, or
* **Converting an existing delegation** into a tier position (no unbonding required)

You choose your tier, your validator, and when (or if) you trigger exit.

For full technical details, CLI commands, and REST API reference, see the Tiered Staking page.

***

### Summary

|                  | Base Staking     | Tiered Staking                                |
| ---------------- | ---------------- | --------------------------------------------- |
| APY              | \~3% (floor)     | \~5% / \~7% / \~10%                           |
| Lock required    | No               | Yes (exit commitment)                         |
| Validator choice | Any              | Any                                           |
| Voting rights    | Yes              | Yes                                           |
| Claim rewards    | Manual           | Manual                                        |
| Exit             | 28-day unbonding | Exit commitment + instant or 28-day unbonding |

***

### Useful Links

* [Base Delegation Guide](base-delegation-guide.md)
* [Tiered Staking](tiered-staking-rewards.md)
* Rewards Pool Balance: `GET /chainmain/tieredrewards/v1/rewards_pool_balances`
* Inflation Parameters: `GET /chainmain/inflation/v1/params`
* Tier Definitions: `GET /chainmain/tieredrewards/v1/tiers`
