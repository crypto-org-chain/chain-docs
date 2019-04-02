# Transaction

Basic (unencrypted / non-shielded) Types (note that all these types should also contain metadata, such as network ID):

* TransferTx: UTXO-based transfer of funds, takes UTXO inputs, creates UTXO outputs
* DepositStakeTx: takes UTXOs inputs, deposits them in the specified account's bonded amount
* UnbondStakeTx: takes nonce, amount, account and moves in the same account tokens from bonded to unbonded with timelock
* WithdrawUnbondedTx: takes nonce, account and creates UTXOs

Advanced Types:
* AddCouncilNodeTx: takes council node data, staking address; co-signed by 2/3 current nodes
* EditCouncilNodeTx: takes council node data, signed by that node
* RemoveCouncilNodeTx: takes council node id; co-signed by 2/3 current nodes
* ChangeNetworkParamTX?
* UnjailTx: takes nonce, account, signed by the account's corresponding key
* AddWhitelistServiceNodeTx: takes node data, whitelist type (customer acquirer, merchant acquirer, settlement agent), staking address;  co-signed by 2/3 current nodes
* EditWhitelistServiceNodeTx: takes node data, signed by that node
* RemoveWhitelistServiceNodeTx: takes whitelisted node id; co-signed by 2/3 current nodes
* AddMerchantIdTx: takes merchant data (certificate + cert-signed pk or some payment gateway point?), signed by merchant acquirer
* RemoveMerchantIdTx: takes merchant id, signed by merchant acquirer