# List of network parameters

This section aims to collect and provide brief description of all the mentioned network parameters:

#### Staking-related parameters 

| Key   |      Description|    
|----|---|---|---|---|
|`COUNCIL_NODE_MIN_STAKE`           |Minimum staking requirement for council node|   |   
|`COMMUNITY_NODE_MIN_STAKE`         |Minimum staking requirement for community node|   |  
|`PER_MERCHANT_MIN_STAKE`           |Minimum staking requirement for merchant| 
|`CUSTOMER_ACQUIRER_NODE_MIN_STAKE` |Minimum staking requirement for customer accquirer node|   | 
|`UNBOUND_PERIOD`                   |The time duration of unbonding |
|`MAX_VALIDATORS`                   |The maximum number of validator |


#### Slashing parameters

| Key   |      Description|    
|----|---|---|---|---|
|`MAX_EVIDENCE_AGE`         |Maximum age of evidence|
|`BLOCK_SIGNING_WINDOW`     |Window to calculate validators's liveness| 
|`JAIL_DURATION`            |The time period for jailing|
|`MISSED_BLOCK_THRESHOLD`   |Threshold of total missed blocks| 
|`MAX_BYZANTINE_SLASH_RATIO`|Maximum percentage of stake reduction for byzantine validators |
|`MAX_LIVENESS_SLASH_RATIO` |Maximum percentage of stake reduction for validators with low availability|

#### Transaction fee parameters 

| Key   |      Description|    
|----|---|---|---|---|
|`BASE_AMOUNT`  |Basic transaction fee  |
|`PER_BYTE`     |Transaction fee per byte|





TODO: TX that can change them?