# 💡 Tiered Staking

Tiered staking is a new staking mechanism introduced in Cronos POS Chain v7 (via the `x/tieredrewards` module). CRO holders can lock their stake for a defined exit commitment period in exchange for a higher APY on top of standard staking rewards.

There are two components to staking rewards under the new model:

<table><thead><tr><th width="200.984375">Reward Type</th><th>Source</th><th>Condition</th></tr></thead><tbody><tr><td><strong>Base rewards</strong></td><td>The inflation + transaction fee + reserve top up</td><td>Must be delegated to a bonded validator</td></tr><tr><td><strong>Bonus rewards</strong></td><td>Tier Rewards Pool</td><td>Must be in a tier position AND delegated to a bonded validator</td></tr></tbody></table>

The base reward floor (\~3% APY) is guaranteed by the module - if block fees fall below the target rate, the rewards pool automatically tops up the shortfall. Bonus rewards are a fixed APY on top of the base rate, determined by the tier you choose.

**Key things to know:**

* **Voting rights preserved** \
  Tier-locked positions count toward governance voting power for the full duration of the lock.
* **Slashing applies** \
  Locked positions are subject to standard validator slashing rules.
* **Rewards are not automatic**\
  Rewards do not arrive in your wallet automatically. They are paid out when settlement runs inside a transaction or via hooks. Besides `claim-tier-rewards`, several other scenarios can implicitly **claim outstanding rewards** too (see Claim base and bonus rewards).
* **Change validator freely**  \
  You can move your position to a different validator at any time without triggering exit.

***

### Tier Structure

| Tier | Exit Commitment | Bonus APY | Total APY (approx.) | Min. Lock |
| ---- | --------------- | --------- | ------------------- | --------- |
| Base | —               | —         | \~3%                | —         |
| 1    | 1 year          | +2%       | \~5%                | 100 CRO   |
| 2    | 2 years         | +4%       | \~7%                | 100 CRO   |
| 3    | 4 years         | +7%       | \~10%               | 100 CRO   |

{% hint style="info" %}
APY values are illustrative. Actual rates depend on governance decisions and available protocol revenue. All tier parameters are governance-adjustable.
{% endhint %}

{% hint style="info" %}
**For integration:** Always fetch live tier values from the chain. Parameters can change via governance. \
Use `GET /chainmain/tieredrewards/v1/tiers` or `chain-maind query tieredrewards tiers`. \
The on-chain `Tier` struct fields are: `Id`, `ExitDuration`, `BonusApy` (decimal, e.g. `0.02` = 2%), `MinLockAmount`, `CloseOnly`.
{% endhint %}

The **exit commitment** is the waiting period that begins when you _choose_ to exit - not when you originally locked your stake. You continue earning full base and bonus rewards throughout this waiting period.

When governance sets a tier to **close-only** (`CloseOnly = true`), no new positions can be opened in that tier. Existing positions continue earning rewards and can exit normally. This is how a tier is retired over time.

***

### Testnet vs Mainnet Parameters

Testnet uses shorter durations and lower minimums so full lifecycle flows can be tested in minutes.

| Parameter                   | Mainnet | Testnet   |
| --------------------------- | ------- | --------- |
| Tier 1 exit commitment      | 1 year  | 1 minute  |
| Tier 2 exit commitment      | 2 years | 2 minutes |
| Tier 3 exit commitment      | 4 years | 4 minutes |
| Min lock amount (all tiers) | 100 CRO | 1 CRO     |

**Endpoints:**

<table><thead><tr><th width="105.81640625">Network</th><th width="402.29296875">REST</th><th>Chain ID</th></tr></thead><tbody><tr><td>Mainnet</td><td><code>https://rest.mainnet.crypto.org</code></td><td><code>crypto-org-chain-mainnet-1</code></td></tr><tr><td>Testnet</td><td><code>https://rest.testnet-croeseid-4.cronos-pos.org</code></td><td><code>testnet-croeseid-4</code></td></tr></tbody></table>

***

### Position Lifecycle

```
Enter a tier
  ├── Lock fresh CRO            → lock-tier
  └── Commit existing stake     → commit-delegation-to-tier
            │
            ▼
     Active position
     Earning base + bonus rewards
     [can: add tokens, redelegate, claim rewards]
            │
            ▼
     Trigger exit               → trigger-exit
     Exit commitment countdown begins
     Still earning full rewards
     [can: redelegate, claim rewards, cancel exit]
            │
     Exit commitment elapses — bonus stops
            │
            ├── Instant exit    → exit-tier-with-delegation
            │   Stake returns to your wallet on the same validator. No unbonding wait.
            │   Partial exits supported.
            │
            └── Standard exit   → tier-undelegate
                Wait 28 days (unbonding period)
                                → withdraw-from-tier
                Tokens available for transfer
```

{% hint style="info" %}
You can cancel exit at any time using `clear-position`. The exit timer resets and bonus rewards resume immediately.
{% endhint %}

***

### Transaction Commands

Replace `[YOUR_KEY]` and `[CHAIN_ID]` with your key name and the appropriate chain ID.

**Common flags:**

```bash
--from [YOUR_KEY]        # Signing key
--chain-id [CHAIN_ID]    # e.g. crypto-org-chain-mainnet-1 or testnet-croeseid-4
--gas auto               # Recommended: auto-estimate gas
--fees [amount]basecro   # e.g. 20000basecro
```

#### Entering a Tier

**Option A - Lock fresh CRO into a tier:**

```bash
chain-maind tx tieredrewards lock-tier [tier-id] [amount] [validator-address] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

| Argument            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `tier-id`           | `1`, `2`, or `3`                                      |
| `amount`            | In basecro (1 CRO = 100,000,000 basecro)              |
| `validator-address` | Validator operator address (starts with `crocncl...`) |

Optional flag: `--trigger-exit-immediately` - starts the exit countdown immediately at lock time.

Example:

```bash
chain-maind tx tieredrewards lock-tier 1 10000000000basecro crocncl1abc...xyz \
  --from mykey --chain-id crypto-org-chain-mainnet-1 --gas auto
```

**Option B - Lock an existing delegation (no unbonding required):**

```bash
chain-maind tx tieredrewards commit-delegation-to-tier [validator-address] [amount] [tier-id] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

* Converts your existing stake on that validator into a tier position in one step
* Partial commits are supported — you can commit a portion of your delegation
* Optional flag: `--trigger-exit-immediately`

Example:

```bash
chain-maind tx tieredrewards commit-delegation-to-tier crocncl1abc...xyz 10000000000basecro 2 \
  --from mykey --chain-id crypto-org-chain-mainnet-1 --gas auto
```

#### Managing a Position

Query the positions by owner:

```bash
chain-maind query tieredrewards positions-by-owner [THE_ADDRESS_OF_YOUR_KEY] 
```

* here is [the explanation of fields in response](tiered-staking.md#key-fields-in-position-responses)

Add more CRO to an existing position:

```bash
chain-maind tx tieredrewards add-to-tier-position [position-id] [amount] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

{% hint style="warning" %}
Cannot add tokens while an exit is in progress. Cancel the exit with `clear-position` first.
{% endhint %}

Move your position (redelegate) to a different validator (does not trigger exit):

```bash
chain-maind tx tieredrewards tier-redelegate [position-id] [dst-validator-address] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

Claim base and bonus rewards (explicit):

```bash
chain-maind tx tieredrewards claim-tier-rewards [position-id ...] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

Multiple position IDs can be claimed in a single transaction (space-separated):

```bash
chain-maind tx tieredrewards claim-tier-rewards 313 314 315 \
  --from mykey --chain-id crypto-org-chain-mainnet-1 --gas auto
```

**Other user transactions that settle rewards first**

The keeper runs the same base + bonus settlement **before** the main execution of these messages: `tier-undelegate`, `tier-redelegate`, `add-to-tier-position`, `exit-tier-with-delegation`, and `clear-position`.

**Slashing a position**

When the staking module slashes an **active redelegation** that is mapped to your position, any **outstanding rewards** on the position will also be claimed.

{% hint style="warning" %}
Rewards are **not** distributed automatically. `claim-tier-rewards` is the dedicated explicit claim, and **other messages and hook settlements** may initiate claims too.
{% endhint %}

#### Exiting a Tier

**Step 1 - Trigger exit (starts the commitment countdown):**

```bash
chain-maind tx tieredrewards trigger-exit [position-id] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

Your position continues earning full base and bonus rewards during the commitment period.

**Cancel exit at any time:**

```bash
chain-maind tx tieredrewards clear-position [position-id] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

**Step 2 - After exit commitment elapses, choose one route:**

**Option A - Instant exit (no unbonding):**

```bash
chain-maind tx tieredrewards exit-tier-with-delegation [position-id] [amount] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

Your stake transfers back to your wallet on the same validator immediately. Partial exits are supported that the remaining position must still meet the tier minimum (100 CRO on mainnet).

**Option B - Standard unbonding (28-day wait):**

```bash
# Step 1: Start unbonding
chain-maind tx tieredrewards tier-undelegate [position-id] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto

# Step 2: After 28 days, withdraw tokens
chain-maind tx tieredrewards withdraw-from-tier [position-id] \
  --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```

**Option C - Renew your commitment with `clearPosition`**&#x20;

After exit commitment elapses, you can use clear-position to cancel the exit instead of withdrawing. This resets the exit timer and resumes bonus rewards, effectively renewing your commitment without needing to re-lock.&#x20;

```shellscript
 chain-maind tx tieredrewards clear-position [position-id] \                                
    --from [YOUR_KEY] --chain-id [CHAIN_ID] --gas auto
```



### Query Commands

```bash
# List all available tiers and their parameters
chain-maind query tieredrewards tiers

# View all positions for an address
chain-maind query tieredrewards positions-by-owner [address]

# View a specific position by ID
chain-maind query tieredrewards position [position-id]

# Estimate pending base + bonus rewards for a position
chain-maind query tieredrewards estimate-position-rewards [position-id]

# Check the rewards pool balance
chain-maind query tieredrewards rewards-pool-balance

# Check module parameters (TargetBaseRewardsRate)
chain-maind query tieredrewards params

# Check governance voting power from tier positions
chain-maind query tieredrewards voting-power [address]

# Check validator reward data
chain-maind query tieredrewards validator-data [validator-address]

# Query inflation parameters (max supply, decay rate)
chain-maind query inflation params
```

***

### REST API Reference

No authentication required. Standard HTTP GET requests.

| Network | Base URL                                         |
| ------- | ------------------------------------------------ |
| Mainnet | `https://rest.mainnet.crypto.org`                |
| Testnet | `https://rest.testnet-croeseid-4.cronos-pos.org` |

#### x/tieredrewards Endpoints

<table><thead><tr><th width="528.37109375">Endpoint</th><th>Description</th></tr></thead><tbody><tr><td><code>GET /chainmain/tieredrewards/v1/tiers</code></td><td>All tier definitions</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/params</code></td><td>Module parameters</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/position/{position_id}</code></td><td>Single position by ID</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/positions/{owner_address}</code></td><td>All positions for an owner</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/positions</code></td><td>All positions (paginated)</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/estimate_rewards/{position_id}</code></td><td>Estimated pending rewards</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/rewards_pool_balances</code></td><td>Rewards pool balance</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/voting_power/{owner}</code></td><td>Voting power by owner</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/total_delegated_voting_power</code></td><td>Total voting power</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/validator_data/{validator}</code></td><td>Validator reward data</td></tr><tr><td><code>GET /chainmain/tieredrewards/v1/position_mappings/{position_id}</code></td><td>Unbonding/redelegation mappings</td></tr></tbody></table>

#### x/inflation Endpoints

| Endpoint                             | Description                                                        |
| ------------------------------------ | ------------------------------------------------------------------ |
| `GET /chainmain/inflation/v1/params` | Inflation parameters (max\_supply, decay\_rate, burned\_addresses) |

#### Pagination

List endpoints that support pagination via query parameters:

```
?pagination.limit=50&pagination.offset=0
```

***

### Integration

Tier positions are queryable via standard public REST endpoints.

#### Recommended queries for balance and position tracking

```bash
# All positions for a user
GET https://rest.mainnet.crypto.org/chainmain/tieredrewards/v1/positions/{owner_address}

# Estimated current rewards for a position
GET https://rest.mainnet.crypto.org/chainmain/tieredrewards/v1/estimate_rewards/{position_id}

# Current tier definitions
GET https://rest.mainnet.crypto.org/chainmain/tieredrewards/v1/tiers
```

#### Key fields in position responses

<table><thead><tr><th width="283.0234375">Field</th><th>Notes</th></tr></thead><tbody><tr><td><code>tier_id</code></td><td>Which tier: 1, 2, or 3</td></tr><tr><td><code>amount</code></td><td>Amount of tokens stored in the position</td></tr><tr><td><code>delegated_shares</code></td><td>Shares held by the tier module on behalf of this position</td></tr><tr><td><code>validator</code></td><td>Current validator operator address</td></tr><tr><td><code>exit_triggered_at</code></td><td>Zero value = not exiting</td></tr><tr><td><code>exit_unlock_at</code></td><td>When exit commitment elapses and tokens become withdrawable</td></tr><tr><td><code>last_bonus_accrual</code></td><td>Timestamp of last bonus settlement</td></tr></tbody></table>

Partners signing and submitting transactions use standard Cosmos SDK transaction signing - the same flow as regular staking transactions. No new signing logic is required.

***

### Key Rules and Gotchas

<table><thead><tr><th width="279.046875">Topic</th><th>Rule</th></tr></thead><tbody><tr><td>Rewards settlement</td><td>Rewards do not distribute automatically. Users either claim directly <code>claim-tier-rewards</code> or through other messages that will initiate an claim.</td></tr><tr><td>Exit commitment timing</td><td>The commitment period starts when you <em>trigger</em> exit, not when you entered the tier.</td></tr><tr><td>Bonus stops at exit unlock</td><td>Bonus stops accruing once the exit commitment elapses. Base rewards continue.</td></tr><tr><td>No auto-rollover</td><td>When exit commitment elapses, the position stays active until the user submits an exit transaction.</td></tr><tr><td>Add to position</td><td>Cannot add tokens while an exit is in progress. Cancel with <code>clear-position</code> first.</td></tr><tr><td>Redelegate freely</td><td>Moving to a different validator does not trigger exit or affect tier status.</td></tr><tr><td>Partial exits</td><td>Instant exit supports partial amounts. Remaining balance must still meet the tier minimum.</td></tr><tr><td>Pool can be empty</td><td>If the rewards pool has insufficient balance, the claim transaction fails. Retry after replenishment.</td></tr><tr><td>Slashing applies</td><td>Tier-locked positions are subject to standard validator slashing rules.</td></tr><tr><td>Voting rights retained</td><td>Tier-locked positions count toward governance voting power throughout the lock.</td></tr><tr><td>Validator jailed or removed</td><td>Position stays valid. User can redelegate to another validator without triggering exit.</td></tr></tbody></table>

***

### Quick Reference

<table><thead><tr><th width="228.08984375">Action</th><th>Command</th></tr></thead><tbody><tr><td>Lock fresh CRO</td><td><code>tx tieredrewards lock-tier [tier-id] [amount] [validator]</code></td></tr><tr><td>Commit existing stake</td><td><code>tx tieredrewards commit-delegation-to-tier [validator] [amount] [tier-id]</code></td></tr><tr><td>Add to position</td><td><code>tx tieredrewards add-to-tier-position [position-id] [amount]</code></td></tr><tr><td>Redelegate</td><td><code>tx tieredrewards tier-redelegate [position-id] [dst-validator]</code></td></tr><tr><td>Claim rewards</td><td><code>tx tieredrewards claim-tier-rewards [position-id ...]</code></td></tr><tr><td>Trigger exit</td><td><code>tx tieredrewards trigger-exit [position-id]</code></td></tr><tr><td>Cancel exit</td><td><code>tx tieredrewards clear-position [position-id]</code></td></tr><tr><td>Instant exit</td><td><code>tx tieredrewards exit-tier-with-delegation [position-id] [amount]</code></td></tr><tr><td>Start unbonding</td><td><code>tx tieredrewards tier-undelegate [position-id]</code></td></tr><tr><td>Withdraw after unbonding</td><td><code>tx tieredrewards withdraw-from-tier [position-id]</code></td></tr><tr><td>View my positions</td><td><code>query tieredrewards positions-by-owner [address]</code></td></tr><tr><td>Estimate rewards</td><td><code>query tieredrewards estimate-position-rewards [position-id]</code></td></tr><tr><td>View tiers</td><td><code>query tieredrewards tiers</code></td></tr><tr><td>Inflation params</td><td><code>query inflation params</code></td></tr></tbody></table>
