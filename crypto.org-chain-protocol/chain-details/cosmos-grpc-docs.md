# Protocol Documentation

## Table of Contents

* [cosmos/crypto/multisig/v1beta1/multisig.proto](cosmos-grpc-docs.md#cosmos/crypto/multisig/v1beta1/multisig.proto)
  * [CompactBitArray](cosmos-grpc-docs.md#cosmos.crypto.multisig.v1beta1.CompactBitArray)
  * [MultiSignature](cosmos-grpc-docs.md#cosmos.crypto.multisig.v1beta1.MultiSignature)
* [cosmos/crypto/multisig/keys.proto](cosmos-grpc-docs.md#cosmos/crypto/multisig/keys.proto)
  * [LegacyAminoPubKey](cosmos-grpc-docs.md#cosmos.crypto.multisig.LegacyAminoPubKey)
* [cosmos/crypto/secp256k1/keys.proto](cosmos-grpc-docs.md#cosmos/crypto/secp256k1/keys.proto)
  * [PrivKey](cosmos-grpc-docs.md#cosmos.crypto.secp256k1.PrivKey)
  * [PubKey](cosmos-grpc-docs.md#cosmos.crypto.secp256k1.PubKey)
* [cosmos/crypto/ed25519/keys.proto](cosmos-grpc-docs.md#cosmos/crypto/ed25519/keys.proto)
  * [PrivKey](cosmos-grpc-docs.md#cosmos.crypto.ed25519.PrivKey)
  * [PubKey](cosmos-grpc-docs.md#cosmos.crypto.ed25519.PubKey)
* [cosmos/upgrade/v1beta1/upgrade.proto](cosmos-grpc-docs.md#cosmos/upgrade/v1beta1/upgrade.proto)
  * [CancelSoftwareUpgradeProposal](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal)
  * [Plan](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.Plan)
  * [SoftwareUpgradeProposal](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.SoftwareUpgradeProposal)
* [cosmos/upgrade/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/upgrade/v1beta1/query.proto)
  * [QueryAppliedPlanRequest](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryAppliedPlanRequest)
  * [QueryAppliedPlanResponse](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryAppliedPlanResponse)
  * [QueryCurrentPlanRequest](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryCurrentPlanRequest)
  * [QueryCurrentPlanResponse](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryCurrentPlanResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.Query)
* [cosmos/mint/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/mint/v1beta1/query.proto)
  * [QueryAnnualProvisionsRequest](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryAnnualProvisionsRequest)
  * [QueryAnnualProvisionsResponse](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryAnnualProvisionsResponse)
  * [QueryInflationRequest](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryInflationRequest)
  * [QueryInflationResponse](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryInflationResponse)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryParamsResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.mint.v1beta1.Query)
* [cosmos/mint/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/mint/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.mint.v1beta1.GenesisState)
* [cosmos/mint/v1beta1/mint.proto](cosmos-grpc-docs.md#cosmos/mint/v1beta1/mint.proto)
  * [Minter](cosmos-grpc-docs.md#cosmos.mint.v1beta1.Minter)
  * [Params](cosmos-grpc-docs.md#cosmos.mint.v1beta1.Params)
* [cosmos/evidence/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/evidence/v1beta1/tx.proto)
  * [MsgSubmitEvidence](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.MsgSubmitEvidence)
  * [MsgSubmitEvidenceResponse](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.Msg)
* [cosmos/evidence/v1beta1/evidence.proto](cosmos-grpc-docs.md#cosmos/evidence/v1beta1/evidence.proto)
  * [Equivocation](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.Equivocation)
* [cosmos/evidence/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/evidence/v1beta1/query.proto)
  * [QueryAllEvidenceRequest](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryAllEvidenceRequest)
  * [QueryAllEvidenceResponse](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryAllEvidenceResponse)
  * [QueryEvidenceRequest](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryEvidenceRequest)
  * [QueryEvidenceResponse](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryEvidenceResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.Query)
* [cosmos/evidence/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/evidence/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.GenesisState)
* [cosmos/auth/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/auth/v1beta1/query.proto)
  * [QueryAccountRequest](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryAccountRequest)
  * [QueryAccountResponse](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryAccountResponse)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryParamsResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.auth.v1beta1.Query)
* [cosmos/auth/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/auth/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.auth.v1beta1.GenesisState)
* [cosmos/auth/v1beta1/auth.proto](cosmos-grpc-docs.md#cosmos/auth/v1beta1/auth.proto)
  * [BaseAccount](cosmos-grpc-docs.md#cosmos.auth.v1beta1.BaseAccount)
  * [ModuleAccount](cosmos-grpc-docs.md#cosmos.auth.v1beta1.ModuleAccount)
  * [Params](cosmos-grpc-docs.md#cosmos.auth.v1beta1.Params)
* [cosmos/bank/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/bank/v1beta1/tx.proto)
  * [MsgMultiSend](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgMultiSend)
  * [MsgMultiSendResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgMultiSendResponse)
  * [MsgSend](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgSend)
  * [MsgSendResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgSendResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Msg)
* [cosmos/bank/v1beta1/bank.proto](cosmos-grpc-docs.md#cosmos/bank/v1beta1/bank.proto)
  * [DenomUnit](cosmos-grpc-docs.md#cosmos.bank.v1beta1.DenomUnit)
  * [Input](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Input)
  * [Metadata](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Metadata)
  * [Output](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Output)
  * [Params](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Params)
  * [SendEnabled](cosmos-grpc-docs.md#cosmos.bank.v1beta1.SendEnabled)
  * [Supply](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Supply)
* [cosmos/bank/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/bank/v1beta1/query.proto)
  * [QueryAllBalancesRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryAllBalancesRequest)
  * [QueryAllBalancesResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryAllBalancesResponse)
  * [QueryBalanceRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryBalanceRequest)
  * [QueryBalanceResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryBalanceResponse)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryParamsResponse)
  * [QuerySupplyOfRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QuerySupplyOfRequest)
  * [QuerySupplyOfResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QuerySupplyOfResponse)
  * [QueryTotalSupplyRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryTotalSupplyRequest)
  * [QueryTotalSupplyResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryTotalSupplyResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Query)
* [cosmos/bank/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/bank/v1beta1/genesis.proto)
  * [Balance](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Balance)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.bank.v1beta1.GenesisState)
* [cosmos/capability/v1beta1/capability.proto](cosmos-grpc-docs.md#cosmos/capability/v1beta1/capability.proto)
  * [Capability](cosmos-grpc-docs.md#cosmos.capability.v1beta1.Capability)
  * [CapabilityOwners](cosmos-grpc-docs.md#cosmos.capability.v1beta1.CapabilityOwners)
  * [Owner](cosmos-grpc-docs.md#cosmos.capability.v1beta1.Owner)
* [cosmos/capability/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/capability/v1beta1/genesis.proto)
  * [GenesisOwners](cosmos-grpc-docs.md#cosmos.capability.v1beta1.GenesisOwners)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.capability.v1beta1.GenesisState)
* [cosmos/distribution/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/distribution/v1beta1/tx.proto)
  * [MsgFundCommunityPool](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgFundCommunityPool)
  * [MsgFundCommunityPoolResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse)
  * [MsgSetWithdrawAddress](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgSetWithdrawAddress)
  * [MsgSetWithdrawAddressResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse)
  * [MsgWithdrawDelegatorReward](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward)
  * [MsgWithdrawDelegatorRewardResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse)
  * [MsgWithdrawValidatorCommission](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission)
  * [MsgWithdrawValidatorCommissionResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.Msg)
* [cosmos/distribution/v1beta1/distribution.proto](cosmos-grpc-docs.md#cosmos/distribution/v1beta1/distribution.proto)
  * [CommunityPoolSpendProposal](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.CommunityPoolSpendProposal)
  * [CommunityPoolSpendProposalWithDeposit](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit)
  * [DelegationDelegatorReward](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegationDelegatorReward)
  * [DelegatorStartingInfo](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegatorStartingInfo)
  * [FeePool](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.FeePool)
  * [Params](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.Params)
  * [ValidatorAccumulatedCommission](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorAccumulatedCommission)
  * [ValidatorCurrentRewards](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorCurrentRewards)
  * [ValidatorHistoricalRewards](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorHistoricalRewards)
  * [ValidatorOutstandingRewards](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorOutstandingRewards)
  * [ValidatorSlashEvent](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorSlashEvent)
  * [ValidatorSlashEvents](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorSlashEvents)
* [cosmos/distribution/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/distribution/v1beta1/query.proto)
  * [QueryCommunityPoolRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryCommunityPoolRequest)
  * [QueryCommunityPoolResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryCommunityPoolResponse)
  * [QueryDelegationRewardsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationRewardsRequest)
  * [QueryDelegationRewardsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationRewardsResponse)
  * [QueryDelegationTotalRewardsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest)
  * [QueryDelegationTotalRewardsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse)
  * [QueryDelegatorValidatorsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest)
  * [QueryDelegatorValidatorsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse)
  * [QueryDelegatorWithdrawAddressRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest)
  * [QueryDelegatorWithdrawAddressResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryParamsResponse)
  * [QueryValidatorCommissionRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorCommissionRequest)
  * [QueryValidatorCommissionResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorCommissionResponse)
  * [QueryValidatorOutstandingRewardsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest)
  * [QueryValidatorOutstandingRewardsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse)
  * [QueryValidatorSlashesRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorSlashesRequest)
  * [QueryValidatorSlashesResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorSlashesResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.Query)
* [cosmos/distribution/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/distribution/v1beta1/genesis.proto)
  * [DelegatorStartingInfoRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegatorStartingInfoRecord)
  * [DelegatorWithdrawInfo](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegatorWithdrawInfo)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.GenesisState)
  * [ValidatorAccumulatedCommissionRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord)
  * [ValidatorCurrentRewardsRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord)
  * [ValidatorHistoricalRewardsRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord)
  * [ValidatorOutstandingRewardsRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord)
  * [ValidatorSlashEventRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorSlashEventRecord)
* [cosmos/crisis/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/crisis/v1beta1/tx.proto)
  * [MsgVerifyInvariant](cosmos-grpc-docs.md#cosmos.crisis.v1beta1.MsgVerifyInvariant)
  * [MsgVerifyInvariantResponse](cosmos-grpc-docs.md#cosmos.crisis.v1beta1.MsgVerifyInvariantResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.crisis.v1beta1.Msg)
* [cosmos/crisis/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/crisis/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.crisis.v1beta1.GenesisState)
* [cosmos/tx/signing/v1beta1/signing.proto](cosmos-grpc-docs.md#cosmos/tx/signing/v1beta1/signing.proto)
  * [SignatureDescriptor](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor)
  * [SignatureDescriptor.Data](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor.Data)
  * [SignatureDescriptor.Data.Multi](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi)
  * [SignatureDescriptor.Data.Single](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single)
  * [SignatureDescriptors](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptors)
  * [SignMode](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignMode)
* [cosmos/tx/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/tx/v1beta1/tx.proto)
  * [AuthInfo](cosmos-grpc-docs.md#cosmos.tx.v1beta1.AuthInfo)
  * [Fee](cosmos-grpc-docs.md#cosmos.tx.v1beta1.Fee)
  * [ModeInfo](cosmos-grpc-docs.md#cosmos.tx.v1beta1.ModeInfo)
  * [ModeInfo.Multi](cosmos-grpc-docs.md#cosmos.tx.v1beta1.ModeInfo.Multi)
  * [ModeInfo.Single](cosmos-grpc-docs.md#cosmos.tx.v1beta1.ModeInfo.Single)
  * [SignDoc](cosmos-grpc-docs.md#cosmos.tx.v1beta1.SignDoc)
  * [SignerInfo](cosmos-grpc-docs.md#cosmos.tx.v1beta1.SignerInfo)
  * [Tx](cosmos-grpc-docs.md#cosmos.tx.v1beta1.Tx)
  * [TxBody](cosmos-grpc-docs.md#cosmos.tx.v1beta1.TxBody)
  * [TxRaw](cosmos-grpc-docs.md#cosmos.tx.v1beta1.TxRaw)
* [cosmos/vesting/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/vesting/v1beta1/tx.proto)
  * [MsgCreateVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.MsgCreateVestingAccount)
  * [MsgCreateVestingAccountResponse](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.Msg)
* [cosmos/vesting/v1beta1/vesting.proto](cosmos-grpc-docs.md#cosmos/vesting/v1beta1/vesting.proto)
  * [BaseVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.BaseVestingAccount)
  * [ContinuousVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.ContinuousVestingAccount)
  * [DelayedVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.DelayedVestingAccount)
  * [Period](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.Period)
  * [PeriodicVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.PeriodicVestingAccount)
* [cosmos/staking/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/staking/v1beta1/tx.proto)
  * [MsgBeginRedelegate](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgBeginRedelegate)
  * [MsgBeginRedelegateResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgBeginRedelegateResponse)
  * [MsgCreateValidator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgCreateValidator)
  * [MsgCreateValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgCreateValidatorResponse)
  * [MsgDelegate](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgDelegate)
  * [MsgDelegateResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgDelegateResponse)
  * [MsgEditValidator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgEditValidator)
  * [MsgEditValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgEditValidatorResponse)
  * [MsgUndelegate](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgUndelegate)
  * [MsgUndelegateResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgUndelegateResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Msg)
* [cosmos/staking/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/staking/v1beta1/query.proto)
  * [QueryDelegationRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegationRequest)
  * [QueryDelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegationResponse)
  * [QueryDelegatorDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest)
  * [QueryDelegatorDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse)
  * [QueryDelegatorUnbondingDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest)
  * [QueryDelegatorUnbondingDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse)
  * [QueryDelegatorValidatorRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorRequest)
  * [QueryDelegatorValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorResponse)
  * [QueryDelegatorValidatorsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest)
  * [QueryDelegatorValidatorsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse)
  * [QueryHistoricalInfoRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryHistoricalInfoRequest)
  * [QueryHistoricalInfoResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryHistoricalInfoResponse)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryParamsResponse)
  * [QueryPoolRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryPoolRequest)
  * [QueryPoolResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryPoolResponse)
  * [QueryRedelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryRedelegationsRequest)
  * [QueryRedelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryRedelegationsResponse)
  * [QueryUnbondingDelegationRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryUnbondingDelegationRequest)
  * [QueryUnbondingDelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryUnbondingDelegationResponse)
  * [QueryValidatorDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorDelegationsRequest)
  * [QueryValidatorDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorDelegationsResponse)
  * [QueryValidatorRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorRequest)
  * [QueryValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorResponse)
  * [QueryValidatorUnbondingDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest)
  * [QueryValidatorUnbondingDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse)
  * [QueryValidatorsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorsRequest)
  * [QueryValidatorsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorsResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Query)
* [cosmos/staking/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/staking/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.staking.v1beta1.GenesisState)
  * [LastValidatorPower](cosmos-grpc-docs.md#cosmos.staking.v1beta1.LastValidatorPower)
* [cosmos/staking/v1beta1/staking.proto](cosmos-grpc-docs.md#cosmos/staking/v1beta1/staking.proto)
  * [Commission](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Commission)
  * [CommissionRates](cosmos-grpc-docs.md#cosmos.staking.v1beta1.CommissionRates)
  * [DVPair](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DVPair)
  * [DVPairs](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DVPairs)
  * [DVVTriplet](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DVVTriplet)
  * [DVVTriplets](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DVVTriplets)
  * [Delegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Delegation)
  * [DelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DelegationResponse)
  * [Description](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Description)
  * [HistoricalInfo](cosmos-grpc-docs.md#cosmos.staking.v1beta1.HistoricalInfo)
  * [Params](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Params)
  * [Pool](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Pool)
  * [Redelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Redelegation)
  * [RedelegationEntry](cosmos-grpc-docs.md#cosmos.staking.v1beta1.RedelegationEntry)
  * [RedelegationEntryResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.RedelegationEntryResponse)
  * [RedelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.RedelegationResponse)
  * [UnbondingDelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.UnbondingDelegation)
  * [UnbondingDelegationEntry](cosmos-grpc-docs.md#cosmos.staking.v1beta1.UnbondingDelegationEntry)
  * [ValAddresses](cosmos-grpc-docs.md#cosmos.staking.v1beta1.ValAddresses)
  * [Validator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Validator)
  * [BondStatus](cosmos-grpc-docs.md#cosmos.staking.v1beta1.BondStatus)
* [cosmos/genutil/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/genutil/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.genutil.v1beta1.GenesisState)
* [cosmos/params/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/params/v1beta1/query.proto)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.params.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.params.v1beta1.QueryParamsResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.params.v1beta1.Query)
* [cosmos/params/v1beta1/params.proto](cosmos-grpc-docs.md#cosmos/params/v1beta1/params.proto)
  * [ParamChange](cosmos-grpc-docs.md#cosmos.params.v1beta1.ParamChange)
  * [ParameterChangeProposal](cosmos-grpc-docs.md#cosmos.params.v1beta1.ParameterChangeProposal)
* [cosmos/slashing/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/slashing/v1beta1/tx.proto)
  * [MsgUnjail](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.MsgUnjail)
  * [MsgUnjailResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.MsgUnjailResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.Msg)
* [cosmos/slashing/v1beta1/slashing.proto](cosmos-grpc-docs.md#cosmos/slashing/v1beta1/slashing.proto)
  * [Params](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.Params)
  * [ValidatorSigningInfo](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.ValidatorSigningInfo)
* [cosmos/slashing/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/slashing/v1beta1/query.proto)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QueryParamsResponse)
  * [QuerySigningInfoRequest](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfoRequest)
  * [QuerySigningInfoResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfoResponse)
  * [QuerySigningInfosRequest](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfosRequest)
  * [QuerySigningInfosResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfosResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.Query)
* [cosmos/slashing/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/slashing/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.GenesisState)
  * [MissedBlock](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.MissedBlock)
  * [SigningInfo](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.SigningInfo)
  * [ValidatorMissedBlocks](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.ValidatorMissedBlocks)
* [cosmos/base/abci/v1beta1/abci.proto](cosmos-grpc-docs.md#cosmos/base/abci/v1beta1/abci.proto)
  * [ABCIMessageLog](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.ABCIMessageLog)
  * [Attribute](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.Attribute)
  * [GasInfo](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.GasInfo)
  * [MsgData](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.MsgData)
  * [Result](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.Result)
  * [SearchTxsResult](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.SearchTxsResult)
  * [SimulationResponse](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.SimulationResponse)
  * [StringEvent](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.StringEvent)
  * [TxMsgData](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.TxMsgData)
  * [TxResponse](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.TxResponse)
* [cosmos/base/kv/v1beta1/kv.proto](cosmos-grpc-docs.md#cosmos/base/kv/v1beta1/kv.proto)
  * [Pair](cosmos-grpc-docs.md#cosmos.base.kv.v1beta1.Pair)
  * [Pairs](cosmos-grpc-docs.md#cosmos.base.kv.v1beta1.Pairs)
* [cosmos/base/snapshots/v1beta1/snapshot.proto](cosmos-grpc-docs.md#cosmos/base/snapshots/v1beta1/snapshot.proto)
  * [Metadata](cosmos-grpc-docs.md#cosmos.base.snapshots.v1beta1.Metadata)
  * [Snapshot](cosmos-grpc-docs.md#cosmos.base.snapshots.v1beta1.Snapshot)
* [cosmos/base/simulate/v1beta1/simulate.proto](cosmos-grpc-docs.md#cosmos/base/simulate/v1beta1/simulate.proto)
  * [SimulateRequest](cosmos-grpc-docs.md#cosmos.base.simulate.v1beta1.SimulateRequest)
  * [SimulateResponse](cosmos-grpc-docs.md#cosmos.base.simulate.v1beta1.SimulateResponse)
  * [SimulateService](cosmos-grpc-docs.md#cosmos.base.simulate.v1beta1.SimulateService)
* [cosmos/base/v1beta1/coin.proto](cosmos-grpc-docs.md#cosmos/base/v1beta1/coin.proto)
  * [Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)
  * [DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin)
  * [DecProto](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecProto)
  * [IntProto](cosmos-grpc-docs.md#cosmos.base.v1beta1.IntProto)
* [cosmos/base/query/v1beta1/pagination.proto](cosmos-grpc-docs.md#cosmos/base/query/v1beta1/pagination.proto)
  * [PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest)
  * [PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse)
* [cosmos/base/store/v1beta1/commit\_info.proto](cosmos-grpc-docs.md#cosmos/base/store/v1beta1/commit\_info.proto)
  * [CommitID](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.CommitID)
  * [CommitInfo](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.CommitInfo)
  * [StoreInfo](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.StoreInfo)
* [cosmos/base/store/v1beta1/snapshot.proto](cosmos-grpc-docs.md#cosmos/base/store/v1beta1/snapshot.proto)
  * [SnapshotIAVLItem](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.SnapshotIAVLItem)
  * [SnapshotItem](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.SnapshotItem)
  * [SnapshotStoreItem](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.SnapshotStoreItem)
* [cosmos/base/reflection/v1beta1/reflection.proto](cosmos-grpc-docs.md#cosmos/base/reflection/v1beta1/reflection.proto)
  * [ListAllInterfacesRequest](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListAllInterfacesRequest)
  * [ListAllInterfacesResponse](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListAllInterfacesResponse)
  * [ListImplementationsRequest](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListImplementationsRequest)
  * [ListImplementationsResponse](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListImplementationsResponse)
  * [ReflectionService](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ReflectionService)
* [cosmos/gov/v1beta1/tx.proto](cosmos-grpc-docs.md#cosmos/gov/v1beta1/tx.proto)
  * [MsgDeposit](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgDeposit)
  * [MsgDepositResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgDepositResponse)
  * [MsgSubmitProposal](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgSubmitProposal)
  * [MsgSubmitProposalResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgSubmitProposalResponse)
  * [MsgVote](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgVote)
  * [MsgVoteResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgVoteResponse)
  * [Msg](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Msg)
* [cosmos/gov/v1beta1/gov.proto](cosmos-grpc-docs.md#cosmos/gov/v1beta1/gov.proto)
  * [Deposit](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Deposit)
  * [DepositParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.DepositParams)
  * [Proposal](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Proposal)
  * [TallyParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.TallyParams)
  * [TallyResult](cosmos-grpc-docs.md#cosmos.gov.v1beta1.TallyResult)
  * [TextProposal](cosmos-grpc-docs.md#cosmos.gov.v1beta1.TextProposal)
  * [Vote](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Vote)
  * [VotingParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.VotingParams)
  * [ProposalStatus](cosmos-grpc-docs.md#cosmos.gov.v1beta1.ProposalStatus)
  * [VoteOption](cosmos-grpc-docs.md#cosmos.gov.v1beta1.VoteOption)
* [cosmos/gov/v1beta1/query.proto](cosmos-grpc-docs.md#cosmos/gov/v1beta1/query.proto)
  * [QueryDepositRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositRequest)
  * [QueryDepositResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositResponse)
  * [QueryDepositsRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositsRequest)
  * [QueryDepositsResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositsResponse)
  * [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryParamsResponse)
  * [QueryProposalRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalRequest)
  * [QueryProposalResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalResponse)
  * [QueryProposalsRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalsRequest)
  * [QueryProposalsResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalsResponse)
  * [QueryTallyResultRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryTallyResultRequest)
  * [QueryTallyResultResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryTallyResultResponse)
  * [QueryVoteRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVoteRequest)
  * [QueryVoteResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVoteResponse)
  * [QueryVotesRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVotesRequest)
  * [QueryVotesResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVotesResponse)
  * [Query](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Query)
* [cosmos/gov/v1beta1/genesis.proto](cosmos-grpc-docs.md#cosmos/gov/v1beta1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#cosmos.gov.v1beta1.GenesisState)
* [ibc/core/types/v1/genesis.proto](cosmos-grpc-docs.md#ibc/core/types/v1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#ibc.core.types.v1.GenesisState)
* [ibc/core/connection/v1/query.proto](cosmos-grpc-docs.md#ibc/core/connection/v1/query.proto)
  * [QueryClientConnectionsRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryClientConnectionsRequest)
  * [QueryClientConnectionsResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryClientConnectionsResponse)
  * [QueryConnectionClientStateRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionClientStateRequest)
  * [QueryConnectionClientStateResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionClientStateResponse)
  * [QueryConnectionConsensusStateRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionConsensusStateRequest)
  * [QueryConnectionConsensusStateResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionConsensusStateResponse)
  * [QueryConnectionRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionRequest)
  * [QueryConnectionResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionResponse)
  * [QueryConnectionsRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionsRequest)
  * [QueryConnectionsResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionsResponse)
  * [Query](cosmos-grpc-docs.md#ibc.core.connection.v1.Query)
* [ibc/core/connection/v1/connection.proto](cosmos-grpc-docs.md#ibc/core/connection/v1/connection.proto)
  * [ClientPaths](cosmos-grpc-docs.md#ibc.core.connection.v1.ClientPaths)
  * [ConnectionEnd](cosmos-grpc-docs.md#ibc.core.connection.v1.ConnectionEnd)
  * [ConnectionPaths](cosmos-grpc-docs.md#ibc.core.connection.v1.ConnectionPaths)
  * [Counterparty](cosmos-grpc-docs.md#ibc.core.connection.v1.Counterparty)
  * [IdentifiedConnection](cosmos-grpc-docs.md#ibc.core.connection.v1.IdentifiedConnection)
  * [MsgConnectionOpenAck](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenAck)
  * [MsgConnectionOpenAckResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenAckResponse)
  * [MsgConnectionOpenConfirm](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenConfirm)
  * [MsgConnectionOpenConfirmResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenConfirmResponse)
  * [MsgConnectionOpenInit](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenInit)
  * [MsgConnectionOpenInitResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenInitResponse)
  * [MsgConnectionOpenTry](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenTry)
  * [MsgConnectionOpenTryResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenTryResponse)
  * [Version](cosmos-grpc-docs.md#ibc.core.connection.v1.Version)
  * [State](cosmos-grpc-docs.md#ibc.core.connection.v1.State)
  * [Msg](cosmos-grpc-docs.md#ibc.core.connection.v1.Msg)
* [ibc/core/connection/v1/genesis.proto](cosmos-grpc-docs.md#ibc/core/connection/v1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#ibc.core.connection.v1.GenesisState)
* [ibc/core/commitment/v1/commitment.proto](cosmos-grpc-docs.md#ibc/core/commitment/v1/commitment.proto)
  * [Key](cosmos-grpc-docs.md#ibc.core.commitment.v1.Key)
  * [KeyPath](cosmos-grpc-docs.md#ibc.core.commitment.v1.KeyPath)
  * [MerklePath](cosmos-grpc-docs.md#ibc.core.commitment.v1.MerklePath)
  * [MerklePrefix](cosmos-grpc-docs.md#ibc.core.commitment.v1.MerklePrefix)
  * [MerkleProof](cosmos-grpc-docs.md#ibc.core.commitment.v1.MerkleProof)
  * [MerkleRoot](cosmos-grpc-docs.md#ibc.core.commitment.v1.MerkleRoot)
  * [KeyEncoding](cosmos-grpc-docs.md#ibc.core.commitment.v1.KeyEncoding)
* [ibc/core/channel/v1/query.proto](cosmos-grpc-docs.md#ibc/core/channel/v1/query.proto)
  * [QueryChannelClientStateRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelClientStateRequest)
  * [QueryChannelClientStateResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelClientStateResponse)
  * [QueryChannelConsensusStateRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelConsensusStateRequest)
  * [QueryChannelConsensusStateResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelConsensusStateResponse)
  * [QueryChannelRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelRequest)
  * [QueryChannelResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelResponse)
  * [QueryChannelsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelsRequest)
  * [QueryChannelsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelsResponse)
  * [QueryConnectionChannelsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryConnectionChannelsRequest)
  * [QueryConnectionChannelsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryConnectionChannelsResponse)
  * [QueryNextSequenceReceiveRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryNextSequenceReceiveRequest)
  * [QueryNextSequenceReceiveResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryNextSequenceReceiveResponse)
  * [QueryPacketAcknowledgementRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketAcknowledgementRequest)
  * [QueryPacketAcknowledgementResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketAcknowledgementResponse)
  * [QueryPacketCommitmentRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentRequest)
  * [QueryPacketCommitmentResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentResponse)
  * [QueryPacketCommitmentsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentsRequest)
  * [QueryPacketCommitmentsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentsResponse)
  * [QueryUnreceivedPacketsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnreceivedPacketsRequest)
  * [QueryUnreceivedPacketsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnreceivedPacketsResponse)
  * [QueryUnrelayedAcksRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnrelayedAcksRequest)
  * [QueryUnrelayedAcksResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnrelayedAcksResponse)
  * [Query](cosmos-grpc-docs.md#ibc.core.channel.v1.Query)
* [ibc/core/channel/v1/genesis.proto](cosmos-grpc-docs.md#ibc/core/channel/v1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#ibc.core.channel.v1.GenesisState)
  * [PacketSequence](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketSequence)
* [ibc/core/channel/v1/channel.proto](cosmos-grpc-docs.md#ibc/core/channel/v1/channel.proto)
  * [Acknowledgement](cosmos-grpc-docs.md#ibc.core.channel.v1.Acknowledgement)
  * [Channel](cosmos-grpc-docs.md#ibc.core.channel.v1.Channel)
  * [Counterparty](cosmos-grpc-docs.md#ibc.core.channel.v1.Counterparty)
  * [IdentifiedChannel](cosmos-grpc-docs.md#ibc.core.channel.v1.IdentifiedChannel)
  * [MsgAcknowledgement](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgAcknowledgement)
  * [MsgAcknowledgementResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgAcknowledgementResponse)
  * [MsgChannelCloseConfirm](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseConfirm)
  * [MsgChannelCloseConfirmResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseConfirmResponse)
  * [MsgChannelCloseInit](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseInit)
  * [MsgChannelCloseInitResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseInitResponse)
  * [MsgChannelOpenAck](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenAck)
  * [MsgChannelOpenAckResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenAckResponse)
  * [MsgChannelOpenConfirm](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenConfirm)
  * [MsgChannelOpenConfirmResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenConfirmResponse)
  * [MsgChannelOpenInit](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenInit)
  * [MsgChannelOpenInitResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenInitResponse)
  * [MsgChannelOpenTry](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenTry)
  * [MsgChannelOpenTryResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenTryResponse)
  * [MsgRecvPacket](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgRecvPacket)
  * [MsgRecvPacketResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgRecvPacketResponse)
  * [MsgTimeout](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeout)
  * [MsgTimeoutOnClose](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeoutOnClose)
  * [MsgTimeoutOnCloseResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeoutOnCloseResponse)
  * [MsgTimeoutResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeoutResponse)
  * [Packet](cosmos-grpc-docs.md#ibc.core.channel.v1.Packet)
  * [PacketAckCommitment](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketAckCommitment)
  * [Order](cosmos-grpc-docs.md#ibc.core.channel.v1.Order)
  * [State](cosmos-grpc-docs.md#ibc.core.channel.v1.State)
  * [Msg](cosmos-grpc-docs.md#ibc.core.channel.v1.Msg)
* [ibc/core/client/v1/client.proto](cosmos-grpc-docs.md#ibc/core/client/v1/client.proto)
  * [ClientConsensusStates](cosmos-grpc-docs.md#ibc.core.client.v1.ClientConsensusStates)
  * [ClientUpdateProposal](cosmos-grpc-docs.md#ibc.core.client.v1.ClientUpdateProposal)
  * [ConsensusStateWithHeight](cosmos-grpc-docs.md#ibc.core.client.v1.ConsensusStateWithHeight)
  * [Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)
  * [IdentifiedClientState](cosmos-grpc-docs.md#ibc.core.client.v1.IdentifiedClientState)
  * [MsgCreateClient](cosmos-grpc-docs.md#ibc.core.client.v1.MsgCreateClient)
  * [MsgCreateClientResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgCreateClientResponse)
  * [MsgSubmitMisbehaviour](cosmos-grpc-docs.md#ibc.core.client.v1.MsgSubmitMisbehaviour)
  * [MsgSubmitMisbehaviourResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgSubmitMisbehaviourResponse)
  * [MsgUpdateClient](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpdateClient)
  * [MsgUpdateClientResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpdateClientResponse)
  * [MsgUpgradeClient](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpgradeClient)
  * [MsgUpgradeClientResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpgradeClientResponse)
  * [Msg](cosmos-grpc-docs.md#ibc.core.client.v1.Msg)
* [ibc/core/client/v1/query.proto](cosmos-grpc-docs.md#ibc/core/client/v1/query.proto)
  * [QueryClientStateRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStateRequest)
  * [QueryClientStateResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStateResponse)
  * [QueryClientStatesRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStatesRequest)
  * [QueryClientStatesResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStatesResponse)
  * [QueryConsensusStateRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStateRequest)
  * [QueryConsensusStateResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStateResponse)
  * [QueryConsensusStatesRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStatesRequest)
  * [QueryConsensusStatesResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStatesResponse)
  * [Query](cosmos-grpc-docs.md#ibc.core.client.v1.Query)
* [ibc/core/client/v1/genesis.proto](cosmos-grpc-docs.md#ibc/core/client/v1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#ibc.core.client.v1.GenesisState)
* [ibc/lightclients/solomachine/v1/solomachine.proto](cosmos-grpc-docs.md#ibc/lightclients/solomachine/v1/solomachine.proto)
  * [ChannelStateData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.ChannelStateData)
  * [ClientState](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.ClientState)
  * [ClientStateData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.ClientStateData)
  * [ConnectionStateData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.ConnectionStateData)
  * [ConsensusState](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.ConsensusState)
  * [ConsensusStateData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.ConsensusStateData)
  * [Header](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.Header)
  * [HeaderData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.HeaderData)
  * [Misbehaviour](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.Misbehaviour)
  * [NextSequenceRecvData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.NextSequenceRecvData)
  * [PacketAcknowledgementData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.PacketAcknowledgementData)
  * [PacketCommitmentData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.PacketCommitmentData)
  * [PacketReceiptAbsenceData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData)
  * [SignBytes](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.SignBytes)
  * [SignatureAndData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.SignatureAndData)
  * [TimestampedSignatureData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.TimestampedSignatureData)
  * [DataType](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.DataType)
* [ibc/lightclients/tendermint/v1/tendermint.proto](cosmos-grpc-docs.md#ibc/lightclients/tendermint/v1/tendermint.proto)
  * [ClientState](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.ClientState)
  * [ConsensusState](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.ConsensusState)
  * [Fraction](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.Fraction)
  * [Header](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.Header)
  * [Misbehaviour](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.Misbehaviour)
* [ibc/lightclients/localhost/v1/localhost.proto](cosmos-grpc-docs.md#ibc/lightclients/localhost/v1/localhost.proto)
  * [ClientState](cosmos-grpc-docs.md#ibc.lightclients.localhost.v1.ClientState)
* [ibc/applications/transfer/v1/transfer.proto](cosmos-grpc-docs.md#ibc/applications/transfer/v1/transfer.proto)
  * [DenomTrace](cosmos-grpc-docs.md#ibc.applications.transfer.v1.DenomTrace)
  * [FungibleTokenPacketData](cosmos-grpc-docs.md#ibc.applications.transfer.v1.FungibleTokenPacketData)
  * [MsgTransfer](cosmos-grpc-docs.md#ibc.applications.transfer.v1.MsgTransfer)
  * [MsgTransferResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.MsgTransferResponse)
  * [Params](cosmos-grpc-docs.md#ibc.applications.transfer.v1.Params)
  * [Msg](cosmos-grpc-docs.md#ibc.applications.transfer.v1.Msg)
* [ibc/applications/transfer/v1/query.proto](cosmos-grpc-docs.md#ibc/applications/transfer/v1/query.proto)
  * [QueryDenomTraceRequest](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTraceRequest)
  * [QueryDenomTraceResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTraceResponse)
  * [QueryDenomTracesRequest](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTracesRequest)
  * [QueryDenomTracesResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTracesResponse)
  * [QueryParamsRequest](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryParamsRequest)
  * [QueryParamsResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryParamsResponse)
  * [Query](cosmos-grpc-docs.md#ibc.applications.transfer.v1.Query)
* [ibc/applications/transfer/v1/genesis.proto](cosmos-grpc-docs.md#ibc/applications/transfer/v1/genesis.proto)
  * [GenesisState](cosmos-grpc-docs.md#ibc.applications.transfer.v1.GenesisState)
* [Scalar Value Types](cosmos-grpc-docs.md#scalar-value-types)

[Top](cosmos-grpc-docs.md#top)

## cosmos/crypto/multisig/v1beta1/multisig.proto

### CompactBitArray

CompactBitArray is an implementation of a space efficient bit array. This is used to ensure that the encoded data takes up a minimal amount of space after proto encoding. This is not thread safe, and is not intended for concurrent usage.

| Field               | Type                                 | Label | Description |
| ------------------- | ------------------------------------ | ----- | ----------- |
| extra\_bits\_stored | [uint32](cosmos-grpc-docs.md#uint32) |       |             |
| elems               | [bytes](cosmos-grpc-docs.md#bytes)   |       |             |

### MultiSignature

MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey. See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers signed and with which modes.

| Field      | Type                               | Label    | Description |
| ---------- | ---------------------------------- | -------- | ----------- |
| signatures | [bytes](cosmos-grpc-docs.md#bytes) | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/crypto/multisig/keys.proto

### LegacyAminoPubKey

LegacyAminoPubKey specifies a public key type which nests multiple public keys and a threshold, it uses legacy amino address rules.

| Field        | Type                                                           | Label    | Description |
| ------------ | -------------------------------------------------------------- | -------- | ----------- |
| threshold    | [uint32](cosmos-grpc-docs.md#uint32)                           |          |             |
| public\_keys | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/crypto/secp256k1/keys.proto

### PrivKey

PrivKey defines a secp256k1 private key.

| Field | Type                               | Label | Description |
| ----- | ---------------------------------- | ----- | ----------- |
| key   | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### PubKey

PubKey defines a secp256k1 public key Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte if the y-coordinate is the lexicographically largest of the two associated with the x-coordinate. Otherwise the first byte is a 0x03. This prefix is followed with the x-coordinate.

| Field | Type                               | Label | Description |
| ----- | ---------------------------------- | ----- | ----------- |
| key   | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/crypto/ed25519/keys.proto

### PrivKey

PrivKey defines a ed25519 private key.

| Field | Type                               | Label | Description |
| ----- | ---------------------------------- | ----- | ----------- |
| key   | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### PubKey

PubKey defines a ed25519 public key Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte if the y-coordinate is the lexicographically largest of the two associated with the x-coordinate. Otherwise the first byte is a 0x03. This prefix is followed with the x-coordinate.

| Field | Type                               | Label | Description |
| ----- | ---------------------------------- | ----- | ----------- |
| key   | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/upgrade/v1beta1/upgrade.proto

### CancelSoftwareUpgradeProposal

CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software upgrade.

| Field       | Type                                 | Label | Description |
| ----------- | ------------------------------------ | ----- | ----------- |
| title       | [string](cosmos-grpc-docs.md#string) |       |             |
| description | [string](cosmos-grpc-docs.md#string) |       |             |

### Plan

Plan specifies information about a planned upgrade and when it should occur.

| Field                   | Type                                                                       | Label | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                    | [string](cosmos-grpc-docs.md#string)                                       |       | Sets the name for the upgrade. This name will be used by the upgraded version of the software to apply any special "on-upgrade" commands during the first BeginBlock method after the upgrade is applied. It is also used to detect whether a software version can handle a given upgrade. If no upgrade handler with this name has been set in the software, it will be assumed that the software is out-of-date when the upgrade Time or Height is reached and the software will exit. |
| time                    | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       | The time after which the upgrade must be performed. Leave set to its zero value to use a pre-defined Height instead.                                                                                                                                                                                                                                                                                                                                                                     |
| height                  | [int64](cosmos-grpc-docs.md#int64)                                         |       | The height at which the upgrade must be performed. Only used if Time is not set.                                                                                                                                                                                                                                                                                                                                                                                                         |
| info                    | [string](cosmos-grpc-docs.md#string)                                       |       | Any application specific upgrade info to be included on-chain such as a git commit that validators could automatically upgrade to                                                                                                                                                                                                                                                                                                                                                        |
| upgraded\_client\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)             |       | IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs, so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the previous version of the chain. This will allow IBC connections to persist smoothly across planned chain upgrades                                                                  |

### SoftwareUpgradeProposal

SoftwareUpgradeProposal is a gov Content type for initiating a software upgrade.

| Field       | Type                                                    | Label | Description |
| ----------- | ------------------------------------------------------- | ----- | ----------- |
| title       | [string](cosmos-grpc-docs.md#string)                    |       |             |
| description | [string](cosmos-grpc-docs.md#string)                    |       |             |
| plan        | [Plan](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.Plan) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/upgrade/v1beta1/query.proto

### QueryAppliedPlanRequest

QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC method.

| Field | Type                                 | Label | Description                                        |
| ----- | ------------------------------------ | ----- | -------------------------------------------------- |
| name  | [string](cosmos-grpc-docs.md#string) |       | name is the name of the applied plan to query for. |

### QueryAppliedPlanResponse

QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC method.

| Field  | Type                               | Label | Description                                               |
| ------ | ---------------------------------- | ----- | --------------------------------------------------------- |
| height | [int64](cosmos-grpc-docs.md#int64) |       | height is the block height at which the plan was applied. |

### QueryCurrentPlanRequest

QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC method.

### QueryCurrentPlanResponse

QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC method.

| Field | Type                                                    | Label | Description                       |
| ----- | ------------------------------------------------------- | ----- | --------------------------------- |
| plan  | [Plan](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.Plan) |       | plan is the current upgrade plan. |

### Query

Query defines the gRPC upgrade querier service.

| Method Name | Request Type                                                                                  | Response Type                                                                                   | Description                                                        |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| CurrentPlan | [QueryCurrentPlanRequest](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryCurrentPlanRequest) | [QueryCurrentPlanResponse](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryCurrentPlanResponse) | CurrentPlan queries the current upgrade plan.                      |
| AppliedPlan | [QueryAppliedPlanRequest](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryAppliedPlanRequest) | [QueryAppliedPlanResponse](cosmos-grpc-docs.md#cosmos.upgrade.v1beta1.QueryAppliedPlanResponse) | AppliedPlan queries a previously applied upgrade plan by its name. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/mint/v1beta1/query.proto

### QueryAnnualProvisionsRequest

QueryAnnualProvisionsRequest is the request type for the Query/AnnualProvisions RPC method.

### QueryAnnualProvisionsResponse

QueryAnnualProvisionsResponse is the response type for the Query/AnnualProvisions RPC method.

| Field              | Type                               | Label | Description                                                        |
| ------------------ | ---------------------------------- | ----- | ------------------------------------------------------------------ |
| annual\_provisions | [bytes](cosmos-grpc-docs.md#bytes) |       | annual\_provisions is the current minting annual provisions value. |

### QueryInflationRequest

QueryInflationRequest is the request type for the Query/Inflation RPC method.

### QueryInflationResponse

QueryInflationResponse is the response type for the Query/Inflation RPC method.

| Field     | Type                               | Label | Description                                       |
| --------- | ---------------------------------- | ----- | ------------------------------------------------- |
| inflation | [bytes](cosmos-grpc-docs.md#bytes) |       | inflation is the current minting inflation value. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                                                     | Label | Description                                  |
| ------ | -------------------------------------------------------- | ----- | -------------------------------------------- |
| params | [Params](cosmos-grpc-docs.md#cosmos.mint.v1beta1.Params) |       | params defines the parameters of the module. |

### Query

Query provides defines the gRPC querier service.

| Method Name      | Request Type                                                                                         | Response Type                                                                                          | Description                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Params           | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryParamsRequest)                     | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryParamsResponse)                     | Params returns the total set of minting parameters.       |
| Inflation        | [QueryInflationRequest](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryInflationRequest)               | [QueryInflationResponse](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryInflationResponse)               | Inflation returns the current minting inflation value.    |
| AnnualProvisions | [QueryAnnualProvisionsRequest](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryAnnualProvisionsRequest) | [QueryAnnualProvisionsResponse](cosmos-grpc-docs.md#cosmos.mint.v1beta1.QueryAnnualProvisionsResponse) | AnnualProvisions current minting annual provisions value. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/mint/v1beta1/genesis.proto

### GenesisState

GenesisState defines the mint module's genesis state.

| Field  | Type                                                     | Label | Description                                                  |
| ------ | -------------------------------------------------------- | ----- | ------------------------------------------------------------ |
| minter | [Minter](cosmos-grpc-docs.md#cosmos.mint.v1beta1.Minter) |       | minter is a space for holding current inflation information. |
| params | [Params](cosmos-grpc-docs.md#cosmos.mint.v1beta1.Params) |       | params defines all the paramaters of the module.             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/mint/v1beta1/mint.proto

### Minter

Minter represents the minting state.

| Field              | Type                                 | Label | Description                        |
| ------------------ | ------------------------------------ | ----- | ---------------------------------- |
| inflation          | [string](cosmos-grpc-docs.md#string) |       | current annual inflation rate      |
| annual\_provisions | [string](cosmos-grpc-docs.md#string) |       | current annual expected provisions |

### Params

Params holds parameters for the mint module.

| Field                   | Type                                 | Label | Description                             |
| ----------------------- | ------------------------------------ | ----- | --------------------------------------- |
| mint\_denom             | [string](cosmos-grpc-docs.md#string) |       | type of coin to mint                    |
| inflation\_rate\_change | [string](cosmos-grpc-docs.md#string) |       | maximum annual change in inflation rate |
| inflation\_max          | [string](cosmos-grpc-docs.md#string) |       | maximum inflation rate                  |
| inflation\_min          | [string](cosmos-grpc-docs.md#string) |       | minimum inflation rate                  |
| goal\_bonded            | [string](cosmos-grpc-docs.md#string) |       | goal of percent bonded atoms            |
| blocks\_per\_year       | [uint64](cosmos-grpc-docs.md#uint64) |       | expected blocks per year                |

[Top](cosmos-grpc-docs.md#top)

## cosmos/evidence/v1beta1/tx.proto

### MsgSubmitEvidence

MsgSubmitEvidence represents a message that supports submitting arbitrary Evidence of misbehavior such as equivocation or counterfactual signing.

| Field     | Type                                                           | Label | Description |
| --------- | -------------------------------------------------------------- | ----- | ----------- |
| submitter | [string](cosmos-grpc-docs.md#string)                           |       |             |
| evidence  | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       |             |

### MsgSubmitEvidenceResponse

MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.

| Field | Type                               | Label | Description                            |
| ----- | ---------------------------------- | ----- | -------------------------------------- |
| hash  | [bytes](cosmos-grpc-docs.md#bytes) |       | hash defines the hash of the evidence. |

### Msg

Msg defines the evidence Msg service.

| Method Name    | Request Type                                                                       | Response Type                                                                                      | Description                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SubmitEvidence | [MsgSubmitEvidence](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.MsgSubmitEvidence) | [MsgSubmitEvidenceResponse](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse) | SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or counterfactual signing. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/evidence/v1beta1/evidence.proto

### Equivocation

Equivocation implements the Evidence interface and defines evidence of double signing misbehavior.

| Field              | Type                                                                       | Label | Description |
| ------------------ | -------------------------------------------------------------------------- | ----- | ----------- |
| height             | [int64](cosmos-grpc-docs.md#int64)                                         |       |             |
| time               | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       |             |
| power              | [int64](cosmos-grpc-docs.md#int64)                                         |       |             |
| consensus\_address | [string](cosmos-grpc-docs.md#string)                                       |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/evidence/v1beta1/query.proto

### QueryAllEvidenceRequest

QueryEvidenceRequest is the request type for the Query/AllEvidence RPC method.

| Field      | Type                                                                                               | Label | Description                                                |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request. |

### QueryAllEvidenceResponse

QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC method.

| Field      | Type                                                                                                 | Label    | Description                                        |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| evidence   | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)                                       | repeated | evidence returns all evidences.                    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryEvidenceRequest

QueryEvidenceRequest is the request type for the Query/Evidence RPC method.

| Field          | Type                               | Label | Description                                                |
| -------------- | ---------------------------------- | ----- | ---------------------------------------------------------- |
| evidence\_hash | [bytes](cosmos-grpc-docs.md#bytes) |       | evidence\_hash defines the hash of the requested evidence. |

### QueryEvidenceResponse

QueryEvidenceResponse is the response type for the Query/Evidence RPC method.

| Field    | Type                                                           | Label | Description                              |
| -------- | -------------------------------------------------------------- | ----- | ---------------------------------------- |
| evidence | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | evidence returns the requested evidence. |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                                                                                   | Response Type                                                                                    | Description                                       |
| ----------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| Evidence    | [QueryEvidenceRequest](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryEvidenceRequest)       | [QueryEvidenceResponse](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryEvidenceResponse)       | Evidence queries evidence based on evidence hash. |
| AllEvidence | [QueryAllEvidenceRequest](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryAllEvidenceRequest) | [QueryAllEvidenceResponse](cosmos-grpc-docs.md#cosmos.evidence.v1beta1.QueryAllEvidenceResponse) | AllEvidence queries all evidence.                 |

[Top](cosmos-grpc-docs.md#top)

## cosmos/evidence/v1beta1/genesis.proto

### GenesisState

GenesisState defines the evidence module's genesis state.

| Field    | Type                                                           | Label    | Description                                   |
| -------- | -------------------------------------------------------------- | -------- | --------------------------------------------- |
| evidence | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) | repeated | evidence defines all the evidence at genesis. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/auth/v1beta1/query.proto

### QueryAccountRequest

QueryAccountRequest is the request type for the Query/Account RPC method.

| Field   | Type                                 | Label | Description                               |
| ------- | ------------------------------------ | ----- | ----------------------------------------- |
| address | [string](cosmos-grpc-docs.md#string) |       | address defines the address to query for. |

### QueryAccountResponse

QueryAccountResponse is the response type for the Query/Account RPC method.

| Field   | Type                                                           | Label | Description                                               |
| ------- | -------------------------------------------------------------- | ----- | --------------------------------------------------------- |
| account | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | account defines the account of the corresponding address. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                                                     | Label | Description                                  |
| ------ | -------------------------------------------------------- | ----- | -------------------------------------------- |
| params | [Params](cosmos-grpc-docs.md#cosmos.auth.v1beta1.Params) |       | params defines the parameters of the module. |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                                                                       | Response Type                                                                        | Description                                       |
| ----------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------- |
| Account     | [QueryAccountRequest](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryAccountRequest) | [QueryAccountResponse](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryAccountResponse) | Account returns account details based on address. |
| Params      | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryParamsRequest)   | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.auth.v1beta1.QueryParamsResponse)   | Params queries all parameters.                    |

[Top](cosmos-grpc-docs.md#top)

## cosmos/auth/v1beta1/genesis.proto

### GenesisState

GenesisState defines the auth module's genesis state.

| Field    | Type                                                           | Label    | Description                                      |
| -------- | -------------------------------------------------------------- | -------- | ------------------------------------------------ |
| params   | [Params](cosmos-grpc-docs.md#cosmos.auth.v1beta1.Params)       |          | params defines all the paramaters of the module. |
| accounts | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) | repeated | accounts are the accounts present at genesis.    |

[Top](cosmos-grpc-docs.md#top)

## cosmos/auth/v1beta1/auth.proto

### BaseAccount

BaseAccount defines a base account type. It contains all the necessary fields for basic account functionality. Any custom account type should extend this type for additional functionality (e.g. vesting).

| Field           | Type                                                           | Label | Description |
| --------------- | -------------------------------------------------------------- | ----- | ----------- |
| address         | [string](cosmos-grpc-docs.md#string)                           |       |             |
| pub\_key        | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       |             |
| account\_number | [uint64](cosmos-grpc-docs.md#uint64)                           |       |             |
| sequence        | [uint64](cosmos-grpc-docs.md#uint64)                           |       |             |

### ModuleAccount

ModuleAccount defines an account for modules that holds coins on a pool.

| Field         | Type                                                               | Label    | Description |
| ------------- | ------------------------------------------------------------------ | -------- | ----------- |
| base\_account | [BaseAccount](cosmos-grpc-docs.md#cosmos.auth.v1beta1.BaseAccount) |          |             |
| name          | [string](cosmos-grpc-docs.md#string)                               |          |             |
| permissions   | [string](cosmos-grpc-docs.md#string)                               | repeated |             |

### Params

Params defines the parameters for the auth module.

| Field                        | Type                                 | Label | Description |
| ---------------------------- | ------------------------------------ | ----- | ----------- |
| max\_memo\_characters        | [uint64](cosmos-grpc-docs.md#uint64) |       |             |
| tx\_sig\_limit               | [uint64](cosmos-grpc-docs.md#uint64) |       |             |
| tx\_size\_cost\_per\_byte    | [uint64](cosmos-grpc-docs.md#uint64) |       |             |
| sig\_verify\_cost\_ed25519   | [uint64](cosmos-grpc-docs.md#uint64) |       |             |
| sig\_verify\_cost\_secp256k1 | [uint64](cosmos-grpc-docs.md#uint64) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/bank/v1beta1/tx.proto

### MsgMultiSend

MsgMultiSend represents an arbitrary multi-in, multi-out send message.

| Field   | Type                                                     | Label    | Description |
| ------- | -------------------------------------------------------- | -------- | ----------- |
| inputs  | [Input](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Input)   | repeated |             |
| outputs | [Output](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Output) | repeated |             |

### MsgMultiSendResponse

MsgMultiSendResponse defines the Msg/MultiSend response type.

### MsgSend

MsgSend represents a message to send coins from one account to another.

| Field         | Type                                                                     | Label    | Description |
| ------------- | ------------------------------------------------------------------------ | -------- | ----------- |
| from\_address | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| to\_address   | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| amount        | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

### MsgSendResponse

MsgSendResponse defines the Msg/Send response type.

### Msg

Msg defines the bank Msg service.

| Method Name | Request Type                                                         | Response Type                                                                        | Description                                                                        |
| ----------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Send        | [MsgSend](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgSend)           | [MsgSendResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgSendResponse)           | Send defines a method for sending coins from one account to another account.       |
| MultiSend   | [MsgMultiSend](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgMultiSend) | [MsgMultiSendResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.MsgMultiSendResponse) | MultiSend defines a method for sending coins from some accounts to other accounts. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/bank/v1beta1/bank.proto

### DenomUnit

DenomUnit represents a struct that describes a given denomination unit of the basic token.

| Field    | Type                                 | Label    | Description                                                                                                                                                                                                                                                                           |
| -------- | ------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| denom    | [string](cosmos-grpc-docs.md#string) |          | denom represents the string name of the given denom unit (e.g uatom).                                                                                                                                                                                                                 |
| exponent | [uint32](cosmos-grpc-docs.md#uint32) |          | exponent represents power of 10 exponent that one must raise the base\_denom to in order to equal the given DenomUnit's denom 1 denom = 1^exponent base\_denom (e.g. with a base\_denom of uatom, one can create a DenomUnit of 'atom' with exponent = 6, thus: 1 atom = 10^6 uatom). |
| aliases  | [string](cosmos-grpc-docs.md#string) | repeated | aliases is a list of string aliases for the given denom                                                                                                                                                                                                                               |

### Input

Input models transaction input.

| Field   | Type                                                                     | Label    | Description |
| ------- | ------------------------------------------------------------------------ | -------- | ----------- |
| address | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| coins   | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

### Metadata

Metadata represents a struct that describes a basic token.

| Field        | Type                                                           | Label    | Description                                                                 |
| ------------ | -------------------------------------------------------------- | -------- | --------------------------------------------------------------------------- |
| description  | [string](cosmos-grpc-docs.md#string)                           |          |                                                                             |
| denom\_units | [DenomUnit](cosmos-grpc-docs.md#cosmos.bank.v1beta1.DenomUnit) | repeated | denom\_units represents the list of DenomUnit's for a given coin            |
| base         | [string](cosmos-grpc-docs.md#string)                           |          | base represents the base denom (should be the DenomUnit with exponent = 0). |
| display      | [string](cosmos-grpc-docs.md#string)                           |          | display indicates the suggested denom that should be displayed in clients.  |

### Output

Output models transaction outputs.

| Field   | Type                                                                     | Label    | Description |
| ------- | ------------------------------------------------------------------------ | -------- | ----------- |
| address | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| coins   | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

### Params

Params defines the parameters for the bank module.

| Field                  | Type                                                               | Label    | Description |
| ---------------------- | ------------------------------------------------------------------ | -------- | ----------- |
| send\_enabled          | [SendEnabled](cosmos-grpc-docs.md#cosmos.bank.v1beta1.SendEnabled) | repeated |             |
| default\_send\_enabled | [bool](cosmos-grpc-docs.md#bool)                                   |          |             |

### SendEnabled

SendEnabled maps coin denom to a send\_enabled status (whether a denom is sendable).

| Field   | Type                                 | Label | Description |
| ------- | ------------------------------------ | ----- | ----------- |
| denom   | [string](cosmos-grpc-docs.md#string) |       |             |
| enabled | [bool](cosmos-grpc-docs.md#bool)     |       |             |

### Supply

Supply represents a struct that passively keeps track of the total supply amounts in the network.

| Field | Type                                                                     | Label    | Description |
| ----- | ------------------------------------------------------------------------ | -------- | ----------- |
| total | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/bank/v1beta1/query.proto

### QueryAllBalancesRequest

QueryBalanceRequest is the request type for the Query/AllBalances RPC method.

| Field      | Type                                                                                               | Label | Description                                                |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| address    | [string](cosmos-grpc-docs.md#string)                                                               |       | address is the address to query balances for.              |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request. |

### QueryAllBalancesResponse

QueryAllBalancesResponse is the response type for the Query/AllBalances RPC method.

| Field      | Type                                                                                                 | Label    | Description                                        |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| balances   | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)                             | repeated | balances is the balances of all the coins.         |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryBalanceRequest

QueryBalanceRequest is the request type for the Query/Balance RPC method.

| Field   | Type                                 | Label | Description                                    |
| ------- | ------------------------------------ | ----- | ---------------------------------------------- |
| address | [string](cosmos-grpc-docs.md#string) |       | address is the address to query balances for.  |
| denom   | [string](cosmos-grpc-docs.md#string) |       | denom is the coin denom to query balances for. |

### QueryBalanceResponse

QueryBalanceResponse is the response type for the Query/Balance RPC method.

| Field   | Type                                                                     | Label | Description                         |
| ------- | ------------------------------------------------------------------------ | ----- | ----------------------------------- |
| balance | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) |       | balance is the balance of the coin. |

### QueryParamsRequest

QueryParamsRequest defines the request type for querying x/bank parameters.

### QueryParamsResponse

QueryParamsResponse defines the response type for querying x/bank parameters.

| Field  | Type                                                     | Label | Description |
| ------ | -------------------------------------------------------- | ----- | ----------- |
| params | [Params](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Params) |       |             |

### QuerySupplyOfRequest

QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.

| Field | Type                                 | Label | Description                                    |
| ----- | ------------------------------------ | ----- | ---------------------------------------------- |
| denom | [string](cosmos-grpc-docs.md#string) |       | denom is the coin denom to query balances for. |

### QuerySupplyOfResponse

QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.

| Field  | Type                                                                     | Label | Description                       |
| ------ | ------------------------------------------------------------------------ | ----- | --------------------------------- |
| amount | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) |       | amount is the supply of the coin. |

### QueryTotalSupplyRequest

QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC method.

### QueryTotalSupplyResponse

QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC method

| Field  | Type                                                                     | Label    | Description                       |
| ------ | ------------------------------------------------------------------------ | -------- | --------------------------------- |
| supply | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated | supply is the supply of the coins |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                                                                               | Response Type                                                                                | Description                                                        |
| ----------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Balance     | [QueryBalanceRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryBalanceRequest)         | [QueryBalanceResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryBalanceResponse)         | Balance queries the balance of a single coin for a single account. |
| AllBalances | [QueryAllBalancesRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryAllBalancesRequest) | [QueryAllBalancesResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryAllBalancesResponse) | AllBalances queries the balance of all coins for a single account. |
| TotalSupply | [QueryTotalSupplyRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryTotalSupplyRequest) | [QueryTotalSupplyResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryTotalSupplyResponse) | TotalSupply queries the total supply of all coins.                 |
| SupplyOf    | [QuerySupplyOfRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QuerySupplyOfRequest)       | [QuerySupplyOfResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QuerySupplyOfResponse)       | SupplyOf queries the supply of a single coin.                      |
| Params      | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryParamsRequest)           | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.bank.v1beta1.QueryParamsResponse)           | Params queries the parameters of x/bank module.                    |

[Top](cosmos-grpc-docs.md#top)

## cosmos/bank/v1beta1/genesis.proto

### Balance

Balance defines an account address and balance pair used in the bank module's genesis state.

| Field   | Type                                                                     | Label    | Description                                           |
| ------- | ------------------------------------------------------------------------ | -------- | ----------------------------------------------------- |
| address | [string](cosmos-grpc-docs.md#string)                                     |          | address is the address of the balance holder.         |
| coins   | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated | coins defines the different coins this balance holds. |

### GenesisState

GenesisState defines the bank module's genesis state.

| Field           | Type                                                                     | Label    | Description                                                       |
| --------------- | ------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------- |
| params          | [Params](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Params)                 |          | params defines all the paramaters of the module.                  |
| balances        | [Balance](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Balance)               | repeated | balances is an array containing the balances of all the accounts. |
| supply          | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated | supply represents the total supply.                               |
| denom\_metadata | [Metadata](cosmos-grpc-docs.md#cosmos.bank.v1beta1.Metadata)             | repeated | denom\_metadata defines the metadata of the differents coins.     |

[Top](cosmos-grpc-docs.md#top)

## cosmos/capability/v1beta1/capability.proto

### Capability

Capability defines an implementation of an object capability. The index provided to a Capability must be globally unique.

| Field | Type                                 | Label | Description |
| ----- | ------------------------------------ | ----- | ----------- |
| index | [uint64](cosmos-grpc-docs.md#uint64) |       |             |

### CapabilityOwners

CapabilityOwners defines a set of owners of a single Capability. The set of owners must be unique.

| Field  | Type                                                         | Label    | Description |
| ------ | ------------------------------------------------------------ | -------- | ----------- |
| owners | [Owner](cosmos-grpc-docs.md#cosmos.capability.v1beta1.Owner) | repeated |             |

### Owner

Owner defines a single capability owner. An owner is defined by the name of capability and the module name.

| Field  | Type                                 | Label | Description |
| ------ | ------------------------------------ | ----- | ----------- |
| module | [string](cosmos-grpc-docs.md#string) |       |             |
| name   | [string](cosmos-grpc-docs.md#string) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/capability/v1beta1/genesis.proto

### GenesisOwners

GenesisOwners defines the capability owners with their corresponding index.

| Field         | Type                                                                               | Label | Description                                      |
| ------------- | ---------------------------------------------------------------------------------- | ----- | ------------------------------------------------ |
| index         | [uint64](cosmos-grpc-docs.md#uint64)                                               |       | index is the index of the capability owner.      |
| index\_owners | [CapabilityOwners](cosmos-grpc-docs.md#cosmos.capability.v1beta1.CapabilityOwners) |       | index\_owners are the owners at the given index. |

### GenesisState

GenesisState defines the capability module's genesis state.

| Field  | Type                                                                         | Label    | Description                                                                                                          |
| ------ | ---------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| index  | [uint64](cosmos-grpc-docs.md#uint64)                                         |          | index is the capability global index.                                                                                |
| owners | [GenesisOwners](cosmos-grpc-docs.md#cosmos.capability.v1beta1.GenesisOwners) | repeated | owners represents a map from index to owners of the capability index index key is string to allow amino marshalling. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/distribution/v1beta1/tx.proto

### MsgFundCommunityPool

MsgFundCommunityPool allows an account to directly fund the community pool.

| Field     | Type                                                                     | Label    | Description |
| --------- | ------------------------------------------------------------------------ | -------- | ----------- |
| amount    | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |
| depositor | [string](cosmos-grpc-docs.md#string)                                     |          |             |

### MsgFundCommunityPoolResponse

MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.

### MsgSetWithdrawAddress

MsgSetWithdrawAddress sets the withdraw address for a delegator (or validator self-delegation).

| Field              | Type                                 | Label | Description |
| ------------------ | ------------------------------------ | ----- | ----------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       |             |
| withdraw\_address  | [string](cosmos-grpc-docs.md#string) |       |             |

### MsgSetWithdrawAddressResponse

MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type.

### MsgWithdrawDelegatorReward

MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator from a single validator.

| Field              | Type                                 | Label | Description |
| ------------------ | ------------------------------------ | ----- | ----------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       |             |
| validator\_address | [string](cosmos-grpc-docs.md#string) |       |             |

### MsgWithdrawDelegatorRewardResponse

MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type.

### MsgWithdrawValidatorCommission

MsgWithdrawValidatorCommission withdraws the full commission to the validator address.

| Field              | Type                                 | Label | Description |
| ------------------ | ------------------------------------ | ----- | ----------- |
| validator\_address | [string](cosmos-grpc-docs.md#string) |       |             |

### MsgWithdrawValidatorCommissionResponse

MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type.

### Msg

Msg defines the distribution Msg service.

| Method Name                 | Request Type                                                                                                     | Response Type                                                                                                                    | Description                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| SetWithdrawAddress          | [MsgSetWithdrawAddress](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgSetWithdrawAddress)                   | [MsgSetWithdrawAddressResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse)                   | SetWithdrawAddress defines a method to change the withdraw address for a delegator (or validator self-delegation). |
| WithdrawDelegatorReward     | [MsgWithdrawDelegatorReward](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward)         | [MsgWithdrawDelegatorRewardResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse)         | WithdrawDelegatorReward defines a method to withdraw rewards of delegator from a single validator.                 |
| WithdrawValidatorCommission | [MsgWithdrawValidatorCommission](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission) | [MsgWithdrawValidatorCommissionResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse) | WithdrawValidatorCommission defines a method to withdraw the full commission to the validator address.             |
| FundCommunityPool           | [MsgFundCommunityPool](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgFundCommunityPool)                     | [MsgFundCommunityPoolResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse)                     | FundCommunityPool defines a method to allow an account to directly fund the community pool.                        |

[Top](cosmos-grpc-docs.md#top)

## cosmos/distribution/v1beta1/distribution.proto

### CommunityPoolSpendProposal

CommunityPoolSpendProposal details a proposal for use of community funds, together with how many coins are proposed to be spent, and to which recipient account.

| Field       | Type                                                                     | Label    | Description |
| ----------- | ------------------------------------------------------------------------ | -------- | ----------- |
| title       | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| description | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| recipient   | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| amount      | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

### CommunityPoolSpendProposalWithDeposit

CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal with a deposit

| Field       | Type                                 | Label | Description |
| ----------- | ------------------------------------ | ----- | ----------- |
| title       | [string](cosmos-grpc-docs.md#string) |       |             |
| description | [string](cosmos-grpc-docs.md#string) |       |             |
| recipient   | [string](cosmos-grpc-docs.md#string) |       |             |
| amount      | [string](cosmos-grpc-docs.md#string) |       |             |
| deposit     | [string](cosmos-grpc-docs.md#string) |       |             |

### DelegationDelegatorReward

DelegationDelegatorReward represents the properties of a delegator's delegation reward.

| Field              | Type                                                                           | Label    | Description |
| ------------------ | ------------------------------------------------------------------------------ | -------- | ----------- |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                           |          |             |
| reward             | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated |             |

### DelegatorStartingInfo

DelegatorStartingInfo represents the starting info for a delegator reward period. It tracks the previous validator period, the delegation's amount of staking token, and the creation height (to check later on if any slashes have occurred). NOTE: Even though validators are slashed to whole staking tokens, the delegators within the validator may be left with less than a full token, thus sdk.Dec is used.

| Field            | Type                                 | Label | Description |
| ---------------- | ------------------------------------ | ----- | ----------- |
| previous\_period | [uint64](cosmos-grpc-docs.md#uint64) |       |             |
| stake            | [string](cosmos-grpc-docs.md#string) |       |             |
| height           | [uint64](cosmos-grpc-docs.md#uint64) |       |             |

### FeePool

FeePool is the global fee pool for distribution.

| Field           | Type                                                                           | Label    | Description |
| --------------- | ------------------------------------------------------------------------------ | -------- | ----------- |
| community\_pool | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated |             |

### Params

Params defines the set of params for the distribution module.

| Field                   | Type                                 | Label | Description |
| ----------------------- | ------------------------------------ | ----- | ----------- |
| community\_tax          | [string](cosmos-grpc-docs.md#string) |       |             |
| base\_proposer\_reward  | [string](cosmos-grpc-docs.md#string) |       |             |
| bonus\_proposer\_reward | [string](cosmos-grpc-docs.md#string) |       |             |
| withdraw\_addr\_enabled | [bool](cosmos-grpc-docs.md#bool)     |       |             |

### ValidatorAccumulatedCommission

ValidatorAccumulatedCommission represents accumulated commission for a validator kept as a running counter, can be withdrawn at any time.

| Field      | Type                                                                           | Label    | Description |
| ---------- | ------------------------------------------------------------------------------ | -------- | ----------- |
| commission | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated |             |

### ValidatorCurrentRewards

ValidatorCurrentRewards represents current rewards and current period for a validator kept as a running counter and incremented each block as long as the validator's tokens remain constant.

| Field   | Type                                                                           | Label    | Description |
| ------- | ------------------------------------------------------------------------------ | -------- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated |             |
| period  | [uint64](cosmos-grpc-docs.md#uint64)                                           |          |             |

### ValidatorHistoricalRewards

ValidatorHistoricalRewards represents historical rewards for a validator. Height is implicit within the store key. Cumulative reward ratio is the sum from the zeroeth period until this period of rewards / tokens, per the spec. The reference count indicates the number of objects which might need to reference this historical entry at any point. ReferenceCount = number of outstanding delegations which ended the associated period (and might need to read that record) + number of slashes which ended the associated period (and might need to read that record) + one per validator for the zeroeth period, set on initialization

| Field                     | Type                                                                           | Label    | Description |
| ------------------------- | ------------------------------------------------------------------------------ | -------- | ----------- |
| cumulative\_reward\_ratio | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated |             |
| reference\_count          | [uint32](cosmos-grpc-docs.md#uint32)                                           |          |             |

### ValidatorOutstandingRewards

ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards for a validator inexpensive to track, allows simple sanity checks.

| Field   | Type                                                                           | Label    | Description |
| ------- | ------------------------------------------------------------------------------ | -------- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated |             |

### ValidatorSlashEvent

ValidatorSlashEvent represents a validator slash event. Height is implicit within the store key. This is needed to calculate appropriate amount of staking tokens for delegations which are withdrawn after a slash has occurred.

| Field             | Type                                 | Label | Description |
| ----------------- | ------------------------------------ | ----- | ----------- |
| validator\_period | [uint64](cosmos-grpc-docs.md#uint64) |       |             |
| fraction          | [string](cosmos-grpc-docs.md#string) |       |             |

### ValidatorSlashEvents

ValidatorSlashEvents is a collection of ValidatorSlashEvent messages.

| Field                    | Type                                                                                       | Label    | Description |
| ------------------------ | ------------------------------------------------------------------------------------------ | -------- | ----------- |
| validator\_slash\_events | [ValidatorSlashEvent](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorSlashEvent) | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/distribution/v1beta1/query.proto

### QueryCommunityPoolRequest

QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC method.

### QueryCommunityPoolResponse

QueryCommunityPoolResponse is the response type for the Query/CommunityPool RPC method.

| Field | Type                                                                           | Label    | Description                          |
| ----- | ------------------------------------------------------------------------------ | -------- | ------------------------------------ |
| pool  | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated | pool defines community pool's coins. |

### QueryDelegationRewardsRequest

QueryDelegationRewardsRequest is the request type for the Query/DelegationRewards RPC method.

| Field              | Type                                 | Label | Description                                                    |
| ------------------ | ------------------------------------ | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       | delegator\_address defines the delegator address to query for. |
| validator\_address | [string](cosmos-grpc-docs.md#string) |       | validator\_address defines the validator address to query for. |

### QueryDelegationRewardsResponse

QueryDelegationRewardsResponse is the response type for the Query/DelegationRewards RPC method.

| Field   | Type                                                                           | Label    | Description                                          |
| ------- | ------------------------------------------------------------------------------ | -------- | ---------------------------------------------------- |
| rewards | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated | rewards defines the rewards accrued by a delegation. |

### QueryDelegationTotalRewardsRequest

QueryDelegationTotalRewardsRequest is the request type for the Query/DelegationTotalRewards RPC method.

| Field              | Type                                 | Label | Description                                                    |
| ------------------ | ------------------------------------ | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       | delegator\_address defines the delegator address to query for. |

### QueryDelegationTotalRewardsResponse

QueryDelegationTotalRewardsResponse is the response type for the Query/DelegationTotalRewards RPC method.

| Field   | Type                                                                                                   | Label    | Description                                             |
| ------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------- |
| rewards | [DelegationDelegatorReward](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegationDelegatorReward) | repeated | rewards defines all the rewards accrued by a delegator. |
| total   | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin)                         | repeated | total defines the sum of all the rewards.               |

### QueryDelegatorValidatorsRequest

QueryDelegatorValidatorsRequest is the request type for the Query/DelegatorValidators RPC method.

| Field              | Type                                 | Label | Description                                                    |
| ------------------ | ------------------------------------ | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       | delegator\_address defines the delegator address to query for. |

### QueryDelegatorValidatorsResponse

QueryDelegatorValidatorsResponse is the response type for the Query/DelegatorValidators RPC method.

| Field      | Type                                 | Label    | Description                                                      |
| ---------- | ------------------------------------ | -------- | ---------------------------------------------------------------- |
| validators | [string](cosmos-grpc-docs.md#string) | repeated | validators defines the validators a delegator is delegating for. |

### QueryDelegatorWithdrawAddressRequest

QueryDelegatorWithdrawAddressRequest is the request type for the Query/DelegatorWithdrawAddress RPC method.

| Field              | Type                                 | Label | Description                                                    |
| ------------------ | ------------------------------------ | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       | delegator\_address defines the delegator address to query for. |

### QueryDelegatorWithdrawAddressResponse

QueryDelegatorWithdrawAddressResponse is the response type for the Query/DelegatorWithdrawAddress RPC method.

| Field             | Type                                 | Label | Description                                                   |
| ----------------- | ------------------------------------ | ----- | ------------------------------------------------------------- |
| withdraw\_address | [string](cosmos-grpc-docs.md#string) |       | withdraw\_address defines the delegator address to query for. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                                                             | Label | Description                                  |
| ------ | ---------------------------------------------------------------- | ----- | -------------------------------------------- |
| params | [Params](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.Params) |       | params defines the parameters of the module. |

### QueryValidatorCommissionRequest

QueryValidatorCommissionRequest is the request type for the Query/ValidatorCommission RPC method

| Field              | Type                                 | Label | Description                                                    |
| ------------------ | ------------------------------------ | ----- | -------------------------------------------------------------- |
| validator\_address | [string](cosmos-grpc-docs.md#string) |       | validator\_address defines the validator address to query for. |

### QueryValidatorCommissionResponse

QueryValidatorCommissionResponse is the response type for the Query/ValidatorCommission RPC method

| Field      | Type                                                                                                             | Label | Description                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------- |
| commission | [ValidatorAccumulatedCommission](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorAccumulatedCommission) |       | commission defines the commision the validator received. |

### QueryValidatorOutstandingRewardsRequest

QueryValidatorOutstandingRewardsRequest is the request type for the Query/ValidatorOutstandingRewards RPC method.

| Field              | Type                                 | Label | Description                                                    |
| ------------------ | ------------------------------------ | ----- | -------------------------------------------------------------- |
| validator\_address | [string](cosmos-grpc-docs.md#string) |       | validator\_address defines the validator address to query for. |

### QueryValidatorOutstandingRewardsResponse

QueryValidatorOutstandingRewardsResponse is the response type for the Query/ValidatorOutstandingRewards RPC method.

| Field   | Type                                                                                                       | Label | Description |
| ------- | ---------------------------------------------------------------------------------------------------------- | ----- | ----------- |
| rewards | [ValidatorOutstandingRewards](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorOutstandingRewards) |       |             |

### QueryValidatorSlashesRequest

QueryValidatorSlashesRequest is the request type for the Query/ValidatorSlashes RPC method

| Field              | Type                                                                                               | Label | Description                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------- | ----- | --------------------------------------------------------------------------- |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                                               |       | validator\_address defines the validator address to query for.              |
| starting\_height   | [uint64](cosmos-grpc-docs.md#uint64)                                                               |       | starting\_height defines the optional starting height to query the slashes. |
| ending\_height     | [uint64](cosmos-grpc-docs.md#uint64)                                                               |       | starting\_height defines the optional ending height to query the slashes.   |
| pagination         | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.                  |

### QueryValidatorSlashesResponse

QueryValidatorSlashesResponse is the response type for the Query/ValidatorSlashes RPC method.

| Field      | Type                                                                                                 | Label    | Description                                         |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- |
| slashes    | [ValidatorSlashEvent](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorSlashEvent)           | repeated | slashes defines the slashes the validator received. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response.  |

### Query

Query defines the gRPC querier service for distribution module.

| Method Name                 | Request Type                                                                                                                       | Response Type                                                                                                                        | Description                                                                   |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Params                      | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryParamsRequest)                                           | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryParamsResponse)                                           | Params queries params of the distribution module.                             |
| ValidatorOutstandingRewards | [QueryValidatorOutstandingRewardsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest) | [QueryValidatorOutstandingRewardsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse) | ValidatorOutstandingRewards queries rewards of a validator address.           |
| ValidatorCommission         | [QueryValidatorCommissionRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorCommissionRequest)                 | [QueryValidatorCommissionResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorCommissionResponse)                 | ValidatorCommission queries accumulated commission for a validator.           |
| ValidatorSlashes            | [QueryValidatorSlashesRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorSlashesRequest)                       | [QueryValidatorSlashesResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryValidatorSlashesResponse)                       | ValidatorSlashes queries slash events of a validator.                         |
| DelegationRewards           | [QueryDelegationRewardsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationRewardsRequest)                     | [QueryDelegationRewardsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationRewardsResponse)                     | DelegationRewards queries the total rewards accrued by a delegation.          |
| DelegationTotalRewards      | [QueryDelegationTotalRewardsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest)           | [QueryDelegationTotalRewardsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse)           | DelegationTotalRewards queries the total rewards accrued by a each validator. |
| DelegatorValidators         | [QueryDelegatorValidatorsRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest)                 | [QueryDelegatorValidatorsResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse)                 | DelegatorValidators queries the validators of a delegator.                    |
| DelegatorWithdrawAddress    | [QueryDelegatorWithdrawAddressRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest)       | [QueryDelegatorWithdrawAddressResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse)       | DelegatorWithdrawAddress queries withdraw address of a delegator.             |
| CommunityPool               | [QueryCommunityPoolRequest](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryCommunityPoolRequest)                             | [QueryCommunityPoolResponse](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.QueryCommunityPoolResponse)                             | CommunityPool queries the community pool coins.                               |

[Top](cosmos-grpc-docs.md#top)

## cosmos/distribution/v1beta1/genesis.proto

### DelegatorStartingInfoRecord

DelegatorStartingInfoRecord used for import / export via genesis json.

| Field              | Type                                                                                           | Label | Description                                              |
| ------------------ | ---------------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string)                                                           |       | delegator\_address is the address of the delegator.      |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                                           |       | validator\_address is the address of the validator.      |
| starting\_info     | [DelegatorStartingInfo](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegatorStartingInfo) |       | starting\_info defines the starting info of a delegator. |

### DelegatorWithdrawInfo

DelegatorWithdrawInfo is the address for where distributions rewards are withdrawn to by default this struct is only used at genesis to feed in default withdraw addresses.

| Field              | Type                                 | Label | Description                                                             |
| ------------------ | ------------------------------------ | ----- | ----------------------------------------------------------------------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       | delegator\_address is the address of the delegator.                     |
| withdraw\_address  | [string](cosmos-grpc-docs.md#string) |       | withdraw\_address is the address to withdraw the delegation rewards to. |

### GenesisState

GenesisState defines the distribution module's genesis state.

| Field                               | Type                                                                                                                         | Label    | Description                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- |
| params                              | [Params](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.Params)                                                             |          | params defines all the paramaters of the module.                           |
| fee\_pool                           | [FeePool](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.FeePool)                                                           |          | fee\_pool defines the fee pool at genesis.                                 |
| delegator\_withdraw\_infos          | [DelegatorWithdrawInfo](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegatorWithdrawInfo)                               | repeated | fee\_pool defines the delegator withdraw infos at genesis.                 |
| previous\_proposer                  | [string](cosmos-grpc-docs.md#string)                                                                                         |          | fee\_pool defines the previous proposer at genesis.                        |
| outstanding\_rewards                | [ValidatorOutstandingRewardsRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord)       | repeated | fee\_pool defines the outstanding rewards of all validators at genesis.    |
| validator\_accumulated\_commissions | [ValidatorAccumulatedCommissionRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord) | repeated | fee\_pool defines the accumulated commisions of all validators at genesis. |
| validator\_historical\_rewards      | [ValidatorHistoricalRewardsRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord)         | repeated | fee\_pool defines the historical rewards of all validators at genesis.     |
| validator\_current\_rewards         | [ValidatorCurrentRewardsRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord)               | repeated | fee\_pool defines the current rewards of all validators at genesis.        |
| delegator\_starting\_infos          | [DelegatorStartingInfoRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.DelegatorStartingInfoRecord)                   | repeated | fee\_pool defines the delegator starting infos at genesis.                 |
| validator\_slash\_events            | [ValidatorSlashEventRecord](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorSlashEventRecord)                       | repeated | fee\_pool defines the validator slash events at genesis.                   |

### ValidatorAccumulatedCommissionRecord

ValidatorAccumulatedCommissionRecord is used for import / export via genesis json.

| Field              | Type                                                                                                             | Label | Description                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | ----- | --------------------------------------------------------- |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                                                             |       | validator\_address is the address of the validator.       |
| accumulated        | [ValidatorAccumulatedCommission](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorAccumulatedCommission) |       | accumulated is the accumulated commission of a validator. |

### ValidatorCurrentRewardsRecord

ValidatorCurrentRewardsRecord is used for import / export via genesis json.

| Field              | Type                                                                                               | Label | Description                                         |
| ------------------ | -------------------------------------------------------------------------------------------------- | ----- | --------------------------------------------------- |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                                               |       | validator\_address is the address of the validator. |
| rewards            | [ValidatorCurrentRewards](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorCurrentRewards) |       | rewards defines the current rewards of a validator. |

### ValidatorHistoricalRewardsRecord

ValidatorHistoricalRewardsRecord is used for import / export via genesis json.

| Field              | Type                                                                                                     | Label | Description                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                                                     |       | validator\_address is the address of the validator.        |
| period             | [uint64](cosmos-grpc-docs.md#uint64)                                                                     |       | period defines the period the historical rewards apply to. |
| rewards            | [ValidatorHistoricalRewards](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorHistoricalRewards) |       | rewards defines the historical rewards of a validator.     |

### ValidatorOutstandingRewardsRecord

ValidatorOutstandingRewardsRecord is used for import/export via genesis json.

| Field                | Type                                                                           | Label    | Description                                                            |
| -------------------- | ------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------- |
| validator\_address   | [string](cosmos-grpc-docs.md#string)                                           |          | validator\_address is the address of the validator.                    |
| outstanding\_rewards | [cosmos.base.v1beta1.DecCoin](cosmos-grpc-docs.md#cosmos.base.v1beta1.DecCoin) | repeated | outstanding\_rewards represents the oustanding rewards of a validator. |

### ValidatorSlashEventRecord

ValidatorSlashEventRecord is used for import / export via genesis json.

| Field                   | Type                                                                                       | Label | Description                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------ | ----- | ----------------------------------------------------------------- |
| validator\_address      | [string](cosmos-grpc-docs.md#string)                                                       |       | validator\_address is the address of the validator.               |
| height                  | [uint64](cosmos-grpc-docs.md#uint64)                                                       |       | height defines the block height at which the slash event occured. |
| period                  | [uint64](cosmos-grpc-docs.md#uint64)                                                       |       | period is the period of the slash event.                          |
| validator\_slash\_event | [ValidatorSlashEvent](cosmos-grpc-docs.md#cosmos.distribution.v1beta1.ValidatorSlashEvent) |       | validator\_slash\_event describes the slash event.                |

[Top](cosmos-grpc-docs.md#top)

## cosmos/crisis/v1beta1/tx.proto

### MsgVerifyInvariant

MsgVerifyInvariant represents a message to verify a particular invariance.

| Field                   | Type                                 | Label | Description |
| ----------------------- | ------------------------------------ | ----- | ----------- |
| sender                  | [string](cosmos-grpc-docs.md#string) |       |             |
| invariant\_module\_name | [string](cosmos-grpc-docs.md#string) |       |             |
| invariant\_route        | [string](cosmos-grpc-docs.md#string) |       |             |

### MsgVerifyInvariantResponse

MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.

### Msg

Msg defines the bank Msg service.

| Method Name     | Request Type                                                                       | Response Type                                                                                      | Description                                                         |
| --------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| VerifyInvariant | [MsgVerifyInvariant](cosmos-grpc-docs.md#cosmos.crisis.v1beta1.MsgVerifyInvariant) | [MsgVerifyInvariantResponse](cosmos-grpc-docs.md#cosmos.crisis.v1beta1.MsgVerifyInvariantResponse) | VerifyInvariant defines a method to verify a particular invariance. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/crisis/v1beta1/genesis.proto

### GenesisState

GenesisState defines the crisis module's genesis state.

| Field         | Type                                                                     | Label | Description                                                                 |
| ------------- | ------------------------------------------------------------------------ | ----- | --------------------------------------------------------------------------- |
| constant\_fee | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) |       | constant\_fee is the fee used to verify the invariant in the crisis module. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/tx/signing/v1beta1/signing.proto

### SignatureDescriptor

SignatureDescriptor is a convenience type which represents the full data for a signature including the public key of the signer, signing modes and the signature itself. It is primarily used for coordinating signatures between clients.

| Field       | Type                                                                                               | Label | Description                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public\_key | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)                                     |       | public\_key is the public key of the signer                                                                                                                    |
| data        | [SignatureDescriptor.Data](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor.Data) |       |                                                                                                                                                                |
| sequence    | [uint64](cosmos-grpc-docs.md#uint64)                                                               |       | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks. |

### SignatureDescriptor.Data

Data represents signature data

| Field  | Type                                                                                                             | Label | Description                        |
| ------ | ---------------------------------------------------------------------------------------------------------------- | ----- | ---------------------------------- |
| single | [SignatureDescriptor.Data.Single](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single) |       | single represents a single signer  |
| multi  | [SignatureDescriptor.Data.Multi](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi)   |       | multi represents a multisig signer |

### SignatureDescriptor.Data.Multi

Multi is the signature data for a multisig public key

| Field      | Type                                                                                                                 | Label    | Description                                                   |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------- |
| bitarray   | [cosmos.crypto.multisig.v1beta1.CompactBitArray](cosmos-grpc-docs.md#cosmos.crypto.multisig.v1beta1.CompactBitArray) |          | bitarray specifies which keys within the multisig are signing |
| signatures | [SignatureDescriptor.Data](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor.Data)                   | repeated | signatures is the signatures of the multi-signature           |

### SignatureDescriptor.Data.Single

Single is the signature data for a single signer

| Field     | Type                                                               | Label | Description                                   |
| --------- | ------------------------------------------------------------------ | ----- | --------------------------------------------- |
| mode      | [SignMode](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignMode) |       | mode is the signing mode of the single signer |
| signature | [bytes](cosmos-grpc-docs.md#bytes)                                 |       | signature is the raw signature bytes          |

### SignatureDescriptors

SignatureDescriptors wraps multiple SignatureDescriptor's.

| Field      | Type                                                                                     | Label    | Description                              |
| ---------- | ---------------------------------------------------------------------------------------- | -------- | ---------------------------------------- |
| signatures | [SignatureDescriptor](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignatureDescriptor) | repeated | signatures are the signature descriptors |

### SignMode

SignMode represents a signing mode with its own security guarantees.

| Name                            | Number | Description                                                                                                                                                          |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SIGN\_MODE\_UNSPECIFIED         | 0      | SIGN\_MODE\_UNSPECIFIED specifies an unknown signing mode and will be rejected                                                                                       |
| SIGN\_MODE\_DIRECT              | 1      | SIGN\_MODE\_DIRECT specifies a signing mode which uses SignDoc and is verified with raw bytes from Tx                                                                |
| SIGN\_MODE\_TEXTUAL             | 2      | SIGN\_MODE\_TEXTUAL is a future signing mode that will verify some human-readable textual representation on top of the binary representation from SIGN\_MODE\_DIRECT |
| SIGN\_MODE\_LEGACY\_AMINO\_JSON | 127    | SIGN\_MODE\_LEGACY\_AMINO\_JSON is a backwards compatibility mode which uses Amino JSON and will be removed in the future                                            |

[Top](cosmos-grpc-docs.md#top)

## cosmos/tx/v1beta1/tx.proto

### AuthInfo

AuthInfo describes the fee and signer modes that are used to sign a transaction.

| Field         | Type                                                           | Label    | Description                                                                                                                                                                                                                                                                        |
| ------------- | -------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| signer\_infos | [SignerInfo](cosmos-grpc-docs.md#cosmos.tx.v1beta1.SignerInfo) | repeated | signer\_infos defines the signing modes for the required signers. The number and order of elements must match the required signers from TxBody's messages. The first element is the primary signer and the one which pays the fee.                                                 |
| fee           | [Fee](cosmos-grpc-docs.md#cosmos.tx.v1beta1.Fee)               |          | Fee is the fee and gas limit for the transaction. The first signer is the primary signer and the one which pays the fee. The fee can be calculated based on the cost of evaluating the body and doing signature verification of the signers. This can be estimated via simulation. |

### Fee

Fee includes the amount of coins paid in fees and the maximum gas to be used by the transaction. The ratio yields an effective "gasprice", which must be above some miminum to be accepted into the mempool.

| Field      | Type                                                                     | Label    | Description                                                                                                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount     | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated | amount is the amount of coins to be paid as a fee                                                                                                                                                                                                                                       |
| gas\_limit | [uint64](cosmos-grpc-docs.md#uint64)                                     |          | gas\_limit is the maximum gas that can be used in transaction processing before an out of gas error occurs                                                                                                                                                                              |
| payer      | [string](cosmos-grpc-docs.md#string)                                     |          | if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees. the payer must be a tx signer (and thus have signed this field in AuthInfo). setting this field does _not_ change the ordering of required signers for the transaction. |
| granter    | [string](cosmos-grpc-docs.md#string)                                     |          | if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does not support fee grants, this will fail               |

### ModeInfo

ModeInfo describes the signing mode of a single or nested multisig signer.

| Field  | Type                                                                     | Label | Description                               |
| ------ | ------------------------------------------------------------------------ | ----- | ----------------------------------------- |
| single | [ModeInfo.Single](cosmos-grpc-docs.md#cosmos.tx.v1beta1.ModeInfo.Single) |       | single represents a single signer         |
| multi  | [ModeInfo.Multi](cosmos-grpc-docs.md#cosmos.tx.v1beta1.ModeInfo.Multi)   |       | multi represents a nested multisig signer |

### ModeInfo.Multi

Multi is the mode info for a multisig public key

| Field       | Type                                                                                                                 | Label    | Description                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| bitarray    | [cosmos.crypto.multisig.v1beta1.CompactBitArray](cosmos-grpc-docs.md#cosmos.crypto.multisig.v1beta1.CompactBitArray) |          | bitarray specifies which keys within the multisig are signing                                                         |
| mode\_infos | [ModeInfo](cosmos-grpc-docs.md#cosmos.tx.v1beta1.ModeInfo)                                                           | repeated | mode\_infos is the corresponding modes of the signers of the multisig which could include nested multisig public keys |

### ModeInfo.Single

Single is the mode info for a single signer. It is structured as a message to allow for additional fields such as locale for SIGN\_MODE\_TEXTUAL in the future

| Field | Type                                                                                         | Label | Description                                   |
| ----- | -------------------------------------------------------------------------------------------- | ----- | --------------------------------------------- |
| mode  | [cosmos.tx.signing.v1beta1.SignMode](cosmos-grpc-docs.md#cosmos.tx.signing.v1beta1.SignMode) |       | mode is the signing mode of the single signer |

### SignDoc

SignDoc is the type used for generating sign bytes for SIGN\_MODE\_DIRECT.

| Field             | Type                                 | Label | Description                                                                                                                                               |
| ----------------- | ------------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body\_bytes       | [bytes](cosmos-grpc-docs.md#bytes)   |       | body\_bytes is protobuf serialization of a TxBody that matches the representation in TxRaw.                                                               |
| auth\_info\_bytes | [bytes](cosmos-grpc-docs.md#bytes)   |       | auth\_info\_bytes is a protobuf serialization of an AuthInfo that matches the representation in TxRaw.                                                    |
| chain\_id         | [string](cosmos-grpc-docs.md#string) |       | chain\_id is the unique identifier of the chain this transaction targets. It prevents signed transactions from being used on another chain by an attacker |
| account\_number   | [uint64](cosmos-grpc-docs.md#uint64) |       | account\_number is the account number of the account in state                                                                                             |

### SignerInfo

SignerInfo describes the public key and signing mode of a single top-level signer.

| Field       | Type                                                           | Label | Description                                                                                                                                                                                                     |
| ----------- | -------------------------------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public\_key | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | public\_key is the public key of the signer. It is optional for accounts that already exist in state. If unset, the verifier can use the required \ signer address for this position and lookup the public key. |
| mode\_info  | [ModeInfo](cosmos-grpc-docs.md#cosmos.tx.v1beta1.ModeInfo)     |       | mode\_info describes the signing mode of the signer and is a nested structure to support nested multisig pubkey's                                                                                               |
| sequence    | [uint64](cosmos-grpc-docs.md#uint64)                           |       | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks.                                                  |

### Tx

Tx is the standard type used for broadcasting transactions.

| Field      | Type                                                       | Label    | Description                                                                                                                                                                                   |
| ---------- | ---------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body       | [TxBody](cosmos-grpc-docs.md#cosmos.tx.v1beta1.TxBody)     |          | body is the processable content of the transaction                                                                                                                                            |
| auth\_info | [AuthInfo](cosmos-grpc-docs.md#cosmos.tx.v1beta1.AuthInfo) |          | auth\_info is the authorization related content of the transaction, specifically signers, signer modes and fee                                                                                |
| signatures | [bytes](cosmos-grpc-docs.md#bytes)                         | repeated | signatures is a list of signatures that matches the length and order of AuthInfo's signer\_infos to allow connecting signature meta information like public key and signing mode by position. |

### TxBody

TxBody is the body of a transaction that all signers sign over.

| Field    | Type                                                           | Label    | Description                                                                                                                                                                                                                                                     |
| -------- | -------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| messages | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) | repeated | messages is a list of messages to be executed. The required signers of those messages define the number and order of elements in AuthInfo's signer\_infos and Tx's signatures. Each required signer address is added to the list only the first time it occurs. |

By convention, the first required signer (usually from the first message) is referred to as the primary signer and pays the fee for the whole transaction. | | memo | [string](cosmos-grpc-docs.md#string) | | memo is any arbitrary memo to be added to the transaction | | timeout\_height | [uint64](cosmos-grpc-docs.md#uint64) | | timeout is the block height after which this transaction will not be processed by the chain | | extension\_options | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) | repeated | extension\_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can't be handled, the transaction will be rejected | | non\_critical\_extension\_options | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) | repeated | extension\_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can't be handled, they will be ignored |

### TxRaw

TxRaw is a variant of Tx that pins the signer's exact binary representation of body and auth\_info. This is used for signing, broadcasting and verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used as the transaction ID.

| Field             | Type                               | Label    | Description                                                                                                                                                                                   |
| ----------------- | ---------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body\_bytes       | [bytes](cosmos-grpc-docs.md#bytes) |          | body\_bytes is a protobuf serialization of a TxBody that matches the representation in SignDoc.                                                                                               |
| auth\_info\_bytes | [bytes](cosmos-grpc-docs.md#bytes) |          | auth\_info\_bytes is a protobuf serialization of an AuthInfo that matches the representation in SignDoc.                                                                                      |
| signatures        | [bytes](cosmos-grpc-docs.md#bytes) | repeated | signatures is a list of signatures that matches the length and order of AuthInfo's signer\_infos to allow connecting signature meta information like public key and signing mode by position. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/vesting/v1beta1/tx.proto

### MsgCreateVestingAccount

MsgCreateVestingAccount defines a message that enables creating a vesting account.

| Field         | Type                                                                     | Label    | Description |
| ------------- | ------------------------------------------------------------------------ | -------- | ----------- |
| from\_address | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| to\_address   | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| amount        | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |
| end\_time     | [int64](cosmos-grpc-docs.md#int64)                                       |          |             |
| delayed       | [bool](cosmos-grpc-docs.md#bool)                                         |          |             |

### MsgCreateVestingAccountResponse

MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.

### Msg

Msg defines the bank Msg service.

| Method Name          | Request Type                                                                                  | Response Type                                                                                                 | Description                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| CreateVestingAccount | [MsgCreateVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.MsgCreateVestingAccount) | [MsgCreateVestingAccountResponse](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse) | CreateVestingAccount defines a method that enables creating a vesting account. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/vesting/v1beta1/vesting.proto

### BaseVestingAccount

BaseVestingAccount implements the VestingAccount interface. It contains all the necessary fields needed for any vesting account implementation.

| Field              | Type                                                                                   | Label    | Description |
| ------------------ | -------------------------------------------------------------------------------------- | -------- | ----------- |
| base\_account      | [cosmos.auth.v1beta1.BaseAccount](cosmos-grpc-docs.md#cosmos.auth.v1beta1.BaseAccount) |          |             |
| original\_vesting  | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)               | repeated |             |
| delegated\_free    | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)               | repeated |             |
| delegated\_vesting | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)               | repeated |             |
| end\_time          | [int64](cosmos-grpc-docs.md#int64)                                                     |          |             |

### ContinuousVestingAccount

ContinuousVestingAccount implements the VestingAccount interface. It continuously vests by unlocking coins linearly with respect to time.

| Field                  | Type                                                                                | Label | Description |
| ---------------------- | ----------------------------------------------------------------------------------- | ----- | ----------- |
| base\_vesting\_account | [BaseVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.BaseVestingAccount) |       |             |
| start\_time            | [int64](cosmos-grpc-docs.md#int64)                                                  |       |             |

### DelayedVestingAccount

DelayedVestingAccount implements the VestingAccount interface. It vests all coins after a specific time, but non prior. In other words, it keeps them locked until a specified time.

| Field                  | Type                                                                                | Label | Description |
| ---------------------- | ----------------------------------------------------------------------------------- | ----- | ----------- |
| base\_vesting\_account | [BaseVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.BaseVestingAccount) |       |             |

### Period

Period defines a length of time and amount of coins that will vest.

| Field  | Type                                                                     | Label    | Description |
| ------ | ------------------------------------------------------------------------ | -------- | ----------- |
| length | [int64](cosmos-grpc-docs.md#int64)                                       |          |             |
| amount | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

### PeriodicVestingAccount

PeriodicVestingAccount implements the VestingAccount interface. It periodically vests by unlocking coins during each specified period.

| Field                  | Type                                                                                | Label    | Description |
| ---------------------- | ----------------------------------------------------------------------------------- | -------- | ----------- |
| base\_vesting\_account | [BaseVestingAccount](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.BaseVestingAccount) |          |             |
| start\_time            | [int64](cosmos-grpc-docs.md#int64)                                                  |          |             |
| vesting\_periods       | [Period](cosmos-grpc-docs.md#cosmos.vesting.v1beta1.Period)                         | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/staking/v1beta1/tx.proto

### MsgBeginRedelegate

MsgBeginRedelegate defines a SDK message for performing a redelegation of coins from a delegator and source validator to a destination validator.

| Field                   | Type                                                                     | Label | Description |
| ----------------------- | ------------------------------------------------------------------------ | ----- | ----------- |
| delegator\_address      | [string](cosmos-grpc-docs.md#string)                                     |       |             |
| validator\_src\_address | [string](cosmos-grpc-docs.md#string)                                     |       |             |
| validator\_dst\_address | [string](cosmos-grpc-docs.md#string)                                     |       |             |
| amount                  | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) |       |             |

### MsgBeginRedelegateResponse

MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.

| Field            | Type                                                                       | Label | Description |
| ---------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| completion\_time | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       |             |

### MsgCreateValidator

MsgCreateValidator defines a SDK message for creating a new validator.

| Field                 | Type                                                                          | Label | Description |
| --------------------- | ----------------------------------------------------------------------------- | ----- | ----------- |
| description           | [Description](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Description)         |       |             |
| commission            | [CommissionRates](cosmos-grpc-docs.md#cosmos.staking.v1beta1.CommissionRates) |       |             |
| min\_self\_delegation | [string](cosmos-grpc-docs.md#string)                                          |       |             |
| delegator\_address    | [string](cosmos-grpc-docs.md#string)                                          |       |             |
| validator\_address    | [string](cosmos-grpc-docs.md#string)                                          |       |             |
| pubkey                | [string](cosmos-grpc-docs.md#string)                                          |       |             |
| value                 | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)      |       |             |

### MsgCreateValidatorResponse

MsgCreateValidatorResponse defines the Msg/CreateValidator response type.

### MsgDelegate

MsgDelegate defines a SDK message for performing a delegation of coins from a delegator to a validator.

| Field              | Type                                                                     | Label | Description |
| ------------------ | ------------------------------------------------------------------------ | ----- | ----------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string)                                     |       |             |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                     |       |             |
| amount             | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) |       |             |

### MsgDelegateResponse

MsgDelegateResponse defines the Msg/Delegate response type.

### MsgEditValidator

MsgEditValidator defines a SDK message for editing an existing validator.

| Field              | Type                                                                  | Label | Description                                                                                                                                                                                                      |
| ------------------ | --------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description        | [Description](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Description) |       |                                                                                                                                                                                                                  |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                  |       |                                                                                                                                                                                                                  |
| commission\_rate   | [string](cosmos-grpc-docs.md#string)                                  |       | We pass a reference to the new commission rate and min self delegation as it's not mandatory to update. If not updated, the deserialized rate will be zero with no way to distinguish if an update was intended. |

REF: #2373 | | min\_self\_delegation | [string](cosmos-grpc-docs.md#string) | | |

### MsgEditValidatorResponse

MsgEditValidatorResponse defines the Msg/EditValidator response type.

### MsgUndelegate

MsgUndelegate defines a SDK message for performing an undelegation from a delegate and a validator.

| Field              | Type                                                                     | Label | Description |
| ------------------ | ------------------------------------------------------------------------ | ----- | ----------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string)                                     |       |             |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                     |       |             |
| amount             | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) |       |             |

### MsgUndelegateResponse

MsgUndelegateResponse defines the Msg/Undelegate response type.

| Field            | Type                                                                       | Label | Description |
| ---------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| completion\_time | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       |             |

### Msg

Msg defines the staking Msg service.

| Method Name     | Request Type                                                                        | Response Type                                                                                       | Description                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| CreateValidator | [MsgCreateValidator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgCreateValidator) | [MsgCreateValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgCreateValidatorResponse) | CreateValidator defines a method for creating a new validator.                                                                            |
| EditValidator   | [MsgEditValidator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgEditValidator)     | [MsgEditValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgEditValidatorResponse)     | EditValidator defines a method for editing an existing validator.                                                                         |
| Delegate        | [MsgDelegate](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgDelegate)               | [MsgDelegateResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgDelegateResponse)               | Delegate defines a method for performing a delegation of coins from a delegator to a validator.                                           |
| BeginRedelegate | [MsgBeginRedelegate](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgBeginRedelegate) | [MsgBeginRedelegateResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgBeginRedelegateResponse) | BeginRedelegate defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator. |
| Undelegate      | [MsgUndelegate](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgUndelegate)           | [MsgUndelegateResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.MsgUndelegateResponse)           | Undelegate defines a method for performing an undelegation from a delegate and a validator.                                               |

[Top](cosmos-grpc-docs.md#top)

## cosmos/staking/v1beta1/query.proto

### QueryDelegationRequest

QueryDelegationRequest is request type for the Query/Delegation RPC method.

| Field           | Type                                 | Label | Description                                                 |
| --------------- | ------------------------------------ | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](cosmos-grpc-docs.md#string) |       | delegator\_addr defines the delegator address to query for. |
| validator\_addr | [string](cosmos-grpc-docs.md#string) |       | validator\_addr defines the validator address to query for. |

### QueryDelegationResponse

QueryDelegationResponse is response type for the Query/Delegation RPC method.

| Field                | Type                                                                                | Label | Description                                                        |
| -------------------- | ----------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------ |
| delegation\_response | [DelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DelegationResponse) |       | delegation\_responses defines the delegation info of a delegation. |

### QueryDelegatorDelegationsRequest

QueryDelegatorDelegationsRequest is request type for the Query/DelegatorDelegations RPC method.

| Field           | Type                                                                                               | Label | Description                                                 |
| --------------- | -------------------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](cosmos-grpc-docs.md#string)                                                               |       | delegator\_addr defines the delegator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.  |

### QueryDelegatorDelegationsResponse

QueryDelegatorDelegationsResponse is response type for the Query/DelegatorDelegations RPC method.

| Field                 | Type                                                                                                 | Label    | Description                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- |
| delegation\_responses | [DelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DelegationResponse)                  | repeated | delegation\_responses defines all the delegations' info of a delegator. |
| pagination            | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response.                      |

### QueryDelegatorUnbondingDelegationsRequest

QueryDelegatorUnbondingDelegationsRequest is request type for the Query/DelegatorUnbondingDelegations RPC method.

| Field           | Type                                                                                               | Label | Description                                                 |
| --------------- | -------------------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](cosmos-grpc-docs.md#string)                                                               |       | delegator\_addr defines the delegator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.  |

### QueryDelegatorUnbondingDelegationsResponse

QueryUnbondingDelegatorDelegationsResponse is response type for the Query/UnbondingDelegatorDelegations RPC method.

| Field                | Type                                                                                                 | Label    | Description                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| unbonding\_responses | [UnbondingDelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.UnbondingDelegation)                | repeated |                                                    |
| pagination           | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryDelegatorValidatorRequest

QueryDelegatorValidatorRequest is request type for the Query/DelegatorValidator RPC method.

| Field           | Type                                 | Label | Description                                                 |
| --------------- | ------------------------------------ | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](cosmos-grpc-docs.md#string) |       | delegator\_addr defines the delegator address to query for. |
| validator\_addr | [string](cosmos-grpc-docs.md#string) |       | validator\_addr defines the validator address to query for. |

### QueryDelegatorValidatorResponse

QueryDelegatorValidatorResponse response type for the Query/DelegatorValidator RPC method.

| Field     | Type                                                              | Label | Description                               |
| --------- | ----------------------------------------------------------------- | ----- | ----------------------------------------- |
| validator | [Validator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Validator) |       | validator defines the the validator info. |

### QueryDelegatorValidatorsRequest

QueryDelegatorValidatorsRequest is request type for the Query/DelegatorValidators RPC method.

| Field           | Type                                                                                               | Label | Description                                                 |
| --------------- | -------------------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](cosmos-grpc-docs.md#string)                                                               |       | delegator\_addr defines the delegator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.  |

### QueryDelegatorValidatorsResponse

QueryDelegatorValidatorsResponse is response type for the Query/DelegatorValidators RPC method.

| Field      | Type                                                                                                 | Label    | Description                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- |
| validators | [Validator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Validator)                                    | repeated | validators defines the the validators' info of a delegator. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response.          |

### QueryHistoricalInfoRequest

QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC method.

| Field  | Type                               | Label | Description                                                  |
| ------ | ---------------------------------- | ----- | ------------------------------------------------------------ |
| height | [int64](cosmos-grpc-docs.md#int64) |       | height defines at which height to query the historical info. |

### QueryHistoricalInfoResponse

QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC method.

| Field | Type                                                                        | Label | Description                                           |
| ----- | --------------------------------------------------------------------------- | ----- | ----------------------------------------------------- |
| hist  | [HistoricalInfo](cosmos-grpc-docs.md#cosmos.staking.v1beta1.HistoricalInfo) |       | hist defines the historical info at the given height. |

### QueryParamsRequest

QueryParamsRequest is request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is response type for the Query/Params RPC method.

| Field  | Type                                                        | Label | Description                                     |
| ------ | ----------------------------------------------------------- | ----- | ----------------------------------------------- |
| params | [Params](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Params) |       | params holds all the parameters of this module. |

### QueryPoolRequest

QueryPoolRequest is request type for the Query/Pool RPC method.

### QueryPoolResponse

QueryPoolResponse is response type for the Query/Pool RPC method.

| Field | Type                                                    | Label | Description                 |
| ----- | ------------------------------------------------------- | ----- | --------------------------- |
| pool  | [Pool](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Pool) |       | pool defines the pool info. |

### QueryRedelegationsRequest

QueryRedelegationsRequest is request type for the Query/Redelegations RPC method.

| Field                | Type                                                                                               | Label | Description                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------- |
| delegator\_addr      | [string](cosmos-grpc-docs.md#string)                                                               |       | delegator\_addr defines the delegator address to query for.            |
| src\_validator\_addr | [string](cosmos-grpc-docs.md#string)                                                               |       | src\_validator\_addr defines the validator address to redelegate from. |
| dst\_validator\_addr | [string](cosmos-grpc-docs.md#string)                                                               |       | dst\_validator\_addr defines the validator address to redelegate to.   |
| pagination           | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.             |

### QueryRedelegationsResponse

QueryRedelegationsResponse is response type for the Query/Redelegations RPC method.

| Field                   | Type                                                                                                 | Label    | Description                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| redelegation\_responses | [RedelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.RedelegationResponse)              | repeated |                                                    |
| pagination              | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryUnbondingDelegationRequest

QueryUnbondingDelegationRequest is request type for the Query/UnbondingDelegation RPC method.

| Field           | Type                                 | Label | Description                                                 |
| --------------- | ------------------------------------ | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](cosmos-grpc-docs.md#string) |       | delegator\_addr defines the delegator address to query for. |
| validator\_addr | [string](cosmos-grpc-docs.md#string) |       | validator\_addr defines the validator address to query for. |

### QueryUnbondingDelegationResponse

QueryDelegationResponse is response type for the Query/UnbondingDelegation RPC method.

| Field  | Type                                                                                  | Label | Description                                               |
| ------ | ------------------------------------------------------------------------------------- | ----- | --------------------------------------------------------- |
| unbond | [UnbondingDelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.UnbondingDelegation) |       | unbond defines the unbonding information of a delegation. |

### QueryValidatorDelegationsRequest

QueryValidatorDelegationsRequest is request type for the Query/ValidatorDelegations RPC method

| Field           | Type                                                                                               | Label | Description                                                 |
| --------------- | -------------------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| validator\_addr | [string](cosmos-grpc-docs.md#string)                                                               |       | validator\_addr defines the validator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.  |

### QueryValidatorDelegationsResponse

QueryValidatorDelegationsResponse is response type for the Query/ValidatorDelegations RPC method

| Field                 | Type                                                                                                 | Label    | Description                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| delegation\_responses | [DelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DelegationResponse)                  | repeated |                                                    |
| pagination            | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryValidatorRequest

QueryValidatorRequest is response type for the Query/Validator RPC method

| Field           | Type                                 | Label | Description                                                 |
| --------------- | ------------------------------------ | ----- | ----------------------------------------------------------- |
| validator\_addr | [string](cosmos-grpc-docs.md#string) |       | validator\_addr defines the validator address to query for. |

### QueryValidatorResponse

QueryValidatorResponse is response type for the Query/Validator RPC method

| Field     | Type                                                              | Label | Description                               |
| --------- | ----------------------------------------------------------------- | ----- | ----------------------------------------- |
| validator | [Validator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Validator) |       | validator defines the the validator info. |

### QueryValidatorUnbondingDelegationsRequest

QueryValidatorUnbondingDelegationsRequest is required type for the Query/ValidatorUnbondingDelegations RPC method

| Field           | Type                                                                                               | Label | Description                                                 |
| --------------- | -------------------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| validator\_addr | [string](cosmos-grpc-docs.md#string)                                                               |       | validator\_addr defines the validator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.  |

### QueryValidatorUnbondingDelegationsResponse

QueryValidatorUnbondingDelegationsResponse is response type for the Query/ValidatorUnbondingDelegations RPC method.

| Field                | Type                                                                                                 | Label    | Description                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| unbonding\_responses | [UnbondingDelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.UnbondingDelegation)                | repeated |                                                    |
| pagination           | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryValidatorsRequest

QueryValidatorsRequest is request type for Query/Validators RPC method.

| Field      | Type                                                                                               | Label | Description                                                     |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | --------------------------------------------------------------- |
| status     | [string](cosmos-grpc-docs.md#string)                                                               |       | status enables to query for validators matching a given status. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.      |

### QueryValidatorsResponse

QueryValidatorsResponse is response type for the Query/Validators RPC method

| Field      | Type                                                                                                 | Label    | Description                                        |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| validators | [Validator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Validator)                                    | repeated | validators contains all the queried validators.    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### Query

Query defines the gRPC querier service.

| Method Name                   | Request Type                                                                                                                      | Response Type                                                                                                                       | Description                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Validators                    | [QueryValidatorsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorsRequest)                                       | [QueryValidatorsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorsResponse)                                       | Validators queries all validators that match the given status.                                |
| Validator                     | [QueryValidatorRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorRequest)                                         | [QueryValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorResponse)                                         | Validator queries validator info for given validator address.                                 |
| ValidatorDelegations          | [QueryValidatorDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorDelegationsRequest)                   | [QueryValidatorDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorDelegationsResponse)                   | ValidatorDelegations queries delegate info for given validator.                               |
| ValidatorUnbondingDelegations | [QueryValidatorUnbondingDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest) | [QueryValidatorUnbondingDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse) | ValidatorUnbondingDelegations queries unbonding delegations of a validator.                   |
| Delegation                    | [QueryDelegationRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegationRequest)                                       | [QueryDelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegationResponse)                                       | Delegation queries delegate info for given validator delegator pair.                          |
| UnbondingDelegation           | [QueryUnbondingDelegationRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryUnbondingDelegationRequest)                     | [QueryUnbondingDelegationResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryUnbondingDelegationResponse)                     | UnbondingDelegation queries unbonding info for given validator delegator pair.                |
| DelegatorDelegations          | [QueryDelegatorDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest)                   | [QueryDelegatorDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse)                   | DelegatorDelegations queries all delegations of a given delegator address.                    |
| DelegatorUnbondingDelegations | [QueryDelegatorUnbondingDelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest) | [QueryDelegatorUnbondingDelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse) | DelegatorUnbondingDelegations queries all unbonding delegations of a given delegator address. |
| Redelegations                 | [QueryRedelegationsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryRedelegationsRequest)                                 | [QueryRedelegationsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryRedelegationsResponse)                                 | Redelegations queries redelegations of given address.                                         |
| DelegatorValidators           | [QueryDelegatorValidatorsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest)                     | [QueryDelegatorValidatorsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse)                     | DelegatorValidators queries all validators info for given delegator address.                  |
| DelegatorValidator            | [QueryDelegatorValidatorRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorRequest)                       | [QueryDelegatorValidatorResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryDelegatorValidatorResponse)                       | DelegatorValidator queries validator info for given delegator validator pair.                 |
| HistoricalInfo                | [QueryHistoricalInfoRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryHistoricalInfoRequest)                               | [QueryHistoricalInfoResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryHistoricalInfoResponse)                               | HistoricalInfo queries the historical info for given height.                                  |
| Pool                          | [QueryPoolRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryPoolRequest)                                                   | [QueryPoolResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryPoolResponse)                                                   | Pool queries the pool info.                                                                   |
| Params                        | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryParamsRequest)                                               | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.QueryParamsResponse)                                               | Parameters queries the staking parameters.                                                    |

[Top](cosmos-grpc-docs.md#top)

## cosmos/staking/v1beta1/genesis.proto

### GenesisState

GenesisState defines the staking module's genesis state.

| Field                   | Type                                                                                  | Label    | Description                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| params                  | [Params](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Params)                           |          | params defines all the paramaters of related to deposit.                                                          |
| last\_total\_power      | [bytes](cosmos-grpc-docs.md#bytes)                                                    |          | last\_total\_power tracks the total amounts of bonded tokens recorded during the previous end block.              |
| last\_validator\_powers | [LastValidatorPower](cosmos-grpc-docs.md#cosmos.staking.v1beta1.LastValidatorPower)   | repeated | last\_validator\_powers is a special index that provides a historical list of the last-block's bonded validators. |
| validators              | [Validator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Validator)                     | repeated | delegations defines the validator set at genesis.                                                                 |
| delegations             | [Delegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Delegation)                   | repeated | delegations defines the delegations active at genesis.                                                            |
| unbonding\_delegations  | [UnbondingDelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.UnbondingDelegation) | repeated | unbonding\_delegations defines the unbonding delegations active at genesis.                                       |
| redelegations           | [Redelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Redelegation)               | repeated | redelegations defines the redelegations active at genesis.                                                        |
| exported                | [bool](cosmos-grpc-docs.md#bool)                                                      |          |                                                                                                                   |

### LastValidatorPower

LastValidatorPower required for validator set update logic.

| Field   | Type                                 | Label | Description                               |
| ------- | ------------------------------------ | ----- | ----------------------------------------- |
| address | [string](cosmos-grpc-docs.md#string) |       | address is the address of the validator.  |
| power   | [int64](cosmos-grpc-docs.md#int64)   |       | power defines the power of the validator. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/staking/v1beta1/staking.proto

### Commission

Commission defines commission parameters for a given validator.

| Field             | Type                                                                          | Label | Description |
| ----------------- | ----------------------------------------------------------------------------- | ----- | ----------- |
| commission\_rates | [CommissionRates](cosmos-grpc-docs.md#cosmos.staking.v1beta1.CommissionRates) |       |             |
| update\_time      | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp)    |       |             |

### CommissionRates

CommissionRates defines the initial commission rates to be used for creating a validator.

| Field             | Type                                 | Label | Description |
| ----------------- | ------------------------------------ | ----- | ----------- |
| rate              | [string](cosmos-grpc-docs.md#string) |       |             |
| max\_rate         | [string](cosmos-grpc-docs.md#string) |       |             |
| max\_change\_rate | [string](cosmos-grpc-docs.md#string) |       |             |

### DVPair

DVPair is struct that just has a delegator-validator pair with no other data. It is intended to be used as a marshalable pointer. For example, a DVPair can be used to construct the key to getting an UnbondingDelegation from state.

| Field              | Type                                 | Label | Description |
| ------------------ | ------------------------------------ | ----- | ----------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       |             |
| validator\_address | [string](cosmos-grpc-docs.md#string) |       |             |

### DVPairs

DVPairs defines an array of DVPair objects.

| Field | Type                                                        | Label    | Description |
| ----- | ----------------------------------------------------------- | -------- | ----------- |
| pairs | [DVPair](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DVPair) | repeated |             |

### DVVTriplet

DVVTriplet is struct that just has a delegator-validator-validator triplet with no other data. It is intended to be used as a marshalable pointer. For example, a DVVTriplet can be used to construct the key to getting a Redelegation from state.

| Field                   | Type                                 | Label | Description |
| ----------------------- | ------------------------------------ | ----- | ----------- |
| delegator\_address      | [string](cosmos-grpc-docs.md#string) |       |             |
| validator\_src\_address | [string](cosmos-grpc-docs.md#string) |       |             |
| validator\_dst\_address | [string](cosmos-grpc-docs.md#string) |       |             |

### DVVTriplets

DVVTriplets defines an array of DVVTriplet objects.

| Field    | Type                                                                | Label    | Description |
| -------- | ------------------------------------------------------------------- | -------- | ----------- |
| triplets | [DVVTriplet](cosmos-grpc-docs.md#cosmos.staking.v1beta1.DVVTriplet) | repeated |             |

### Delegation

Delegation represents the bond with tokens held by an account. It is owned by one delegator, and is associated with the voting power of one validator.

| Field              | Type                                 | Label | Description |
| ------------------ | ------------------------------------ | ----- | ----------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string) |       |             |
| validator\_address | [string](cosmos-grpc-docs.md#string) |       |             |
| shares             | [string](cosmos-grpc-docs.md#string) |       |             |

### DelegationResponse

DelegationResponse is equivalent to Delegation except that it contains a balance in addition to shares which is more suitable for client responses.

| Field      | Type                                                                     | Label | Description |
| ---------- | ------------------------------------------------------------------------ | ----- | ----------- |
| delegation | [Delegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Delegation)      |       |             |
| balance    | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) |       |             |

### Description

Description defines a validator description.

| Field             | Type                                 | Label | Description |
| ----------------- | ------------------------------------ | ----- | ----------- |
| moniker           | [string](cosmos-grpc-docs.md#string) |       |             |
| identity          | [string](cosmos-grpc-docs.md#string) |       |             |
| website           | [string](cosmos-grpc-docs.md#string) |       |             |
| security\_contact | [string](cosmos-grpc-docs.md#string) |       |             |
| details           | [string](cosmos-grpc-docs.md#string) |       |             |

### HistoricalInfo

HistoricalInfo contains header and validator information for a given block. It is stored as part of staking module's state, which persists the `n` most recent HistoricalInfo (`n` is set by the staking module's `historical_entries` parameter).

| Field  | Type                                                                   | Label    | Description |
| ------ | ---------------------------------------------------------------------- | -------- | ----------- |
| header | [tendermint.types.Header](cosmos-grpc-docs.md#tendermint.types.Header) |          |             |
| valset | [Validator](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Validator)      | repeated |             |

### Params

Params defines the parameters for the staking module.

| Field               | Type                                                                     | Label | Description |
| ------------------- | ------------------------------------------------------------------------ | ----- | ----------- |
| unbonding\_time     | [google.protobuf.Duration](cosmos-grpc-docs.md#google.protobuf.Duration) |       |             |
| max\_validators     | [uint32](cosmos-grpc-docs.md#uint32)                                     |       |             |
| max\_entries        | [uint32](cosmos-grpc-docs.md#uint32)                                     |       |             |
| historical\_entries | [uint32](cosmos-grpc-docs.md#uint32)                                     |       |             |
| bond\_denom         | [string](cosmos-grpc-docs.md#string)                                     |       |             |

### Pool

Pool is used for tracking bonded and not-bonded token supply of the bond denomination.

| Field               | Type                                 | Label | Description |
| ------------------- | ------------------------------------ | ----- | ----------- |
| not\_bonded\_tokens | [string](cosmos-grpc-docs.md#string) |       |             |
| bonded\_tokens      | [string](cosmos-grpc-docs.md#string) |       |             |

### Redelegation

Redelegation contains the list of a particular delegator's redelegating bonds from a particular source validator to a particular destination validator.

| Field                   | Type                                                                              | Label    | Description          |
| ----------------------- | --------------------------------------------------------------------------------- | -------- | -------------------- |
| delegator\_address      | [string](cosmos-grpc-docs.md#string)                                              |          |                      |
| validator\_src\_address | [string](cosmos-grpc-docs.md#string)                                              |          |                      |
| validator\_dst\_address | [string](cosmos-grpc-docs.md#string)                                              |          |                      |
| entries                 | [RedelegationEntry](cosmos-grpc-docs.md#cosmos.staking.v1beta1.RedelegationEntry) | repeated | redelegation entries |

### RedelegationEntry

RedelegationEntry defines a redelegation object with relevant metadata.

| Field            | Type                                                                       | Label | Description |
| ---------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| creation\_height | [int64](cosmos-grpc-docs.md#int64)                                         |       |             |
| completion\_time | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       |             |
| initial\_balance | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| shares\_dst      | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### RedelegationEntryResponse

RedelegationEntryResponse is equivalent to a RedelegationEntry except that it contains a balance in addition to shares which is more suitable for client responses.

| Field               | Type                                                                              | Label | Description |
| ------------------- | --------------------------------------------------------------------------------- | ----- | ----------- |
| redelegation\_entry | [RedelegationEntry](cosmos-grpc-docs.md#cosmos.staking.v1beta1.RedelegationEntry) |       |             |
| balance             | [string](cosmos-grpc-docs.md#string)                                              |       |             |

### RedelegationResponse

RedelegationResponse is equivalent to a Redelegation except that its entries contain a balance in addition to shares which is more suitable for client responses.

| Field        | Type                                                                                              | Label    | Description |
| ------------ | ------------------------------------------------------------------------------------------------- | -------- | ----------- |
| redelegation | [Redelegation](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Redelegation)                           |          |             |
| entries      | [RedelegationEntryResponse](cosmos-grpc-docs.md#cosmos.staking.v1beta1.RedelegationEntryResponse) | repeated |             |

### UnbondingDelegation

UnbondingDelegation stores all of a single delegator's unbonding bonds for a single validator in an time-ordered list.

| Field              | Type                                                                                            | Label    | Description                  |
| ------------------ | ----------------------------------------------------------------------------------------------- | -------- | ---------------------------- |
| delegator\_address | [string](cosmos-grpc-docs.md#string)                                                            |          |                              |
| validator\_address | [string](cosmos-grpc-docs.md#string)                                                            |          |                              |
| entries            | [UnbondingDelegationEntry](cosmos-grpc-docs.md#cosmos.staking.v1beta1.UnbondingDelegationEntry) | repeated | unbonding delegation entries |

### UnbondingDelegationEntry

UnbondingDelegationEntry defines an unbonding object with relevant metadata.

| Field            | Type                                                                       | Label | Description |
| ---------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| creation\_height | [int64](cosmos-grpc-docs.md#int64)                                         |       |             |
| completion\_time | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       |             |
| initial\_balance | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| balance          | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### ValAddresses

ValAddresses defines a repeated set of validator addresses.

| Field     | Type                                 | Label    | Description |
| --------- | ------------------------------------ | -------- | ----------- |
| addresses | [string](cosmos-grpc-docs.md#string) | repeated |             |

### Validator

Validator defines a validator, together with the total amount of the Validator's bond shares and their exchange rate to coins. Slashing results in a decrease in the exchange rate, allowing correct calculation of future undelegations without iterating over delegators. When coins are delegated to this validator, the validator is credited with a delegation whose number of bond shares is based on the amount of coins delegated divided by the current exchange rate. Voting power can be calculated as total bonded shares multiplied by exchange rate.

| Field                 | Type                                                                       | Label | Description |
| --------------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| operator\_address     | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| consensus\_pubkey     | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| jailed                | [bool](cosmos-grpc-docs.md#bool)                                           |       |             |
| status                | [BondStatus](cosmos-grpc-docs.md#cosmos.staking.v1beta1.BondStatus)        |       |             |
| tokens                | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| delegator\_shares     | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| description           | [Description](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Description)      |       |             |
| unbonding\_height     | [int64](cosmos-grpc-docs.md#int64)                                         |       |             |
| unbonding\_time       | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       |             |
| commission            | [Commission](cosmos-grpc-docs.md#cosmos.staking.v1beta1.Commission)        |       |             |
| min\_self\_delegation | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### BondStatus

BondStatus is the status of a validator.

| Name                      | Number | Description                                      |
| ------------------------- | ------ | ------------------------------------------------ |
| BOND\_STATUS\_UNSPECIFIED | 0      | UNSPECIFIED defines an invalid validator status. |
| BOND\_STATUS\_UNBONDED    | 1      | UNBONDED defines a validator that is not bonded. |
| BOND\_STATUS\_UNBONDING   | 2      | UNBONDING defines a validator that is unbonding. |
| BOND\_STATUS\_BONDED      | 3      | BONDED defines a validator that is bonded.       |

[Top](cosmos-grpc-docs.md#top)

## cosmos/genutil/v1beta1/genesis.proto

### GenesisState

GenesisState defines the raw genesis transaction in JSON.

| Field    | Type                               | Label    | Description                                |
| -------- | ---------------------------------- | -------- | ------------------------------------------ |
| gen\_txs | [bytes](cosmos-grpc-docs.md#bytes) | repeated | gen\_txs defines the genesis transactions. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/params/v1beta1/query.proto

### QueryParamsRequest

QueryParamsRequest is request type for the Query/Params RPC method.

| Field    | Type                                 | Label | Description                                             |
| -------- | ------------------------------------ | ----- | ------------------------------------------------------- |
| subspace | [string](cosmos-grpc-docs.md#string) |       | subspace defines the module to query the parameter for. |
| key      | [string](cosmos-grpc-docs.md#string) |       | key defines the key of the parameter in the subspace.   |

### QueryParamsResponse

QueryParamsResponse is response type for the Query/Params RPC method.

| Field | Type                                                                 | Label | Description                          |
| ----- | -------------------------------------------------------------------- | ----- | ------------------------------------ |
| param | [ParamChange](cosmos-grpc-docs.md#cosmos.params.v1beta1.ParamChange) |       | param defines the queried parameter. |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                                                                       | Response Type                                                                        | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Params      | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.params.v1beta1.QueryParamsRequest) | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.params.v1beta1.QueryParamsResponse) | Params queries a specific parameter of a module, given its subspace and key. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/params/v1beta1/params.proto

### ParamChange

ParamChange defines an individual parameter change, for use in ParameterChangeProposal.

| Field    | Type                                 | Label | Description |
| -------- | ------------------------------------ | ----- | ----------- |
| subspace | [string](cosmos-grpc-docs.md#string) |       |             |
| key      | [string](cosmos-grpc-docs.md#string) |       |             |
| value    | [string](cosmos-grpc-docs.md#string) |       |             |

### ParameterChangeProposal

ParameterChangeProposal defines a proposal to change one or more parameters.

| Field       | Type                                                                 | Label    | Description |
| ----------- | -------------------------------------------------------------------- | -------- | ----------- |
| title       | [string](cosmos-grpc-docs.md#string)                                 |          |             |
| description | [string](cosmos-grpc-docs.md#string)                                 |          |             |
| changes     | [ParamChange](cosmos-grpc-docs.md#cosmos.params.v1beta1.ParamChange) | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/slashing/v1beta1/tx.proto

### MsgUnjail

MsgUnjail defines the Msg/Unjail request type

| Field           | Type                                 | Label | Description |
| --------------- | ------------------------------------ | ----- | ----------- |
| validator\_addr | [string](cosmos-grpc-docs.md#string) |       |             |

### MsgUnjailResponse

MsgUnjailResponse defines the Msg/Unjail response type

### Msg

Msg defines the slashing Msg service.

| Method Name | Request Type                                                       | Response Type                                                                      | Description                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unjail      | [MsgUnjail](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.MsgUnjail) | [MsgUnjailResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.MsgUnjailResponse) | Unjail defines a method for unjailing a jailed validator, thus returning them into the bonded validator set, so they can begin receiving provisions and rewards again. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/slashing/v1beta1/slashing.proto

### Params

Params represents the parameters used for by the slashing module.

| Field                         | Type                                                                     | Label | Description |
| ----------------------------- | ------------------------------------------------------------------------ | ----- | ----------- |
| signed\_blocks\_window        | [int64](cosmos-grpc-docs.md#int64)                                       |       |             |
| min\_signed\_per\_window      | [bytes](cosmos-grpc-docs.md#bytes)                                       |       |             |
| downtime\_jail\_duration      | [google.protobuf.Duration](cosmos-grpc-docs.md#google.protobuf.Duration) |       |             |
| slash\_fraction\_double\_sign | [bytes](cosmos-grpc-docs.md#bytes)                                       |       |             |
| slash\_fraction\_downtime     | [bytes](cosmos-grpc-docs.md#bytes)                                       |       |             |

### ValidatorSigningInfo

ValidatorSigningInfo defines a validator's signing info for monitoring their liveness activity.

| Field                   | Type                                                                       | Label | Description                                                                  |
| ----------------------- | -------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------- |
| address                 | [string](cosmos-grpc-docs.md#string)                                       |       |                                                                              |
| start\_height           | [int64](cosmos-grpc-docs.md#int64)                                         |       | height at which validator was first a candidate OR was unjailed              |
| index\_offset           | [int64](cosmos-grpc-docs.md#int64)                                         |       | index offset into signed block bit array                                     |
| jailed\_until           | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |       | timestamp validator cannot be unjailed until                                 |
| tombstoned              | [bool](cosmos-grpc-docs.md#bool)                                           |       | whether or not a validator has been tombstoned (killed out of validator set) |
| missed\_blocks\_counter | [int64](cosmos-grpc-docs.md#int64)                                         |       | missed blocks counter (to avoid scanning the array every time)               |

[Top](cosmos-grpc-docs.md#top)

## cosmos/slashing/v1beta1/query.proto

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method

| Field  | Type                                                         | Label | Description |
| ------ | ------------------------------------------------------------ | ----- | ----------- |
| params | [Params](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.Params) |       |             |

### QuerySigningInfoRequest

QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC method

| Field         | Type                                 | Label | Description                                           |
| ------------- | ------------------------------------ | ----- | ----------------------------------------------------- |
| cons\_address | [string](cosmos-grpc-docs.md#string) |       | cons\_address is the address to query signing info of |

### QuerySigningInfoResponse

QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC method

| Field              | Type                                                                                     | Label | Description                                                          |
| ------------------ | ---------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------- |
| val\_signing\_info | [ValidatorSigningInfo](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.ValidatorSigningInfo) |       | val\_signing\_info is the signing info of requested val cons address |

### QuerySigningInfosRequest

QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC method

| Field      | Type                                                                                               | Label | Description |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       |             |

### QuerySigningInfosResponse

QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC method

| Field      | Type                                                                                                 | Label    | Description                                |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------ |
| info       | [ValidatorSigningInfo](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.ValidatorSigningInfo)             | repeated | info is the signing info of all validators |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          |                                            |

### Query

Query provides defines the gRPC querier service

| Method Name  | Request Type                                                                                     | Response Type                                                                                      | Description                                                |
| ------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Params       | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QueryParamsRequest)             | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QueryParamsResponse)             | Params queries the parameters of slashing module           |
| SigningInfo  | [QuerySigningInfoRequest](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfoRequest)   | [QuerySigningInfoResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfoResponse)   | SigningInfo queries the signing info of given cons address |
| SigningInfos | [QuerySigningInfosRequest](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfosRequest) | [QuerySigningInfosResponse](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.QuerySigningInfosResponse) | SigningInfos queries signing info of all validators        |

[Top](cosmos-grpc-docs.md#top)

## cosmos/slashing/v1beta1/genesis.proto

### GenesisState

GenesisState defines the slashing module's genesis state.

| Field          | Type                                                                                       | Label    | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------ |
| params         | [Params](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.Params)                               |          | params defines all the paramaters of related to deposit.                             |
| signing\_infos | [SigningInfo](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.SigningInfo)                     | repeated | signing\_infos represents a map between validator addresses and their signing infos. |
| missed\_blocks | [ValidatorMissedBlocks](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.ValidatorMissedBlocks) | repeated | signing\_infos represents a map between validator addresses and their missed blocks. |

### MissedBlock

MissedBlock contains height and missed status as boolean.

| Field  | Type                               | Label | Description                                        |
| ------ | ---------------------------------- | ----- | -------------------------------------------------- |
| index  | [int64](cosmos-grpc-docs.md#int64) |       | index is the height at which the block was missed. |
| missed | [bool](cosmos-grpc-docs.md#bool)   |       | missed is the missed status.                       |

### SigningInfo

SigningInfo stores validator signing info of corresponding address.

| Field                    | Type                                                                                     | Label | Description                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------------------- |
| address                  | [string](cosmos-grpc-docs.md#string)                                                     |       | address is the validator address.                                       |
| validator\_signing\_info | [ValidatorSigningInfo](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.ValidatorSigningInfo) |       | validator\_signing\_info represents the signing info of this validator. |

### ValidatorMissedBlocks

ValidatorMissedBlocks contains array of missed blocks of corresponding address.

| Field          | Type                                                                   | Label    | Description                                                   |
| -------------- | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------- |
| address        | [string](cosmos-grpc-docs.md#string)                                   |          | address is the validator address.                             |
| missed\_blocks | [MissedBlock](cosmos-grpc-docs.md#cosmos.slashing.v1beta1.MissedBlock) | repeated | missed\_blocks is an array of missed blocks by the validator. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/abci/v1beta1/abci.proto

### ABCIMessageLog

ABCIMessageLog defines a structure containing an indexed tx ABCI message log.

| Field      | Type                                                                    | Label    | Description                                                                       |
| ---------- | ----------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------- |
| msg\_index | [uint32](cosmos-grpc-docs.md#uint32)                                    |          |                                                                                   |
| log        | [string](cosmos-grpc-docs.md#string)                                    |          |                                                                                   |
| events     | [StringEvent](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.StringEvent) | repeated | Events contains a slice of Event objects that were emitted during some execution. |

### Attribute

Attribute defines an attribute wrapper where the key and value are strings instead of raw bytes.

| Field | Type                                 | Label | Description |
| ----- | ------------------------------------ | ----- | ----------- |
| key   | [string](cosmos-grpc-docs.md#string) |       |             |
| value | [string](cosmos-grpc-docs.md#string) |       |             |

### GasInfo

GasInfo defines tx execution gas context.

| Field       | Type                                 | Label | Description                                                         |
| ----------- | ------------------------------------ | ----- | ------------------------------------------------------------------- |
| gas\_wanted | [uint64](cosmos-grpc-docs.md#uint64) |       | GasWanted is the maximum units of work we allow this tx to perform. |
| gas\_used   | [uint64](cosmos-grpc-docs.md#uint64) |       | GasUsed is the amount of gas actually consumed.                     |

### MsgData

MsgData defines the data returned in a Result object during message execution.

| Field     | Type                                 | Label | Description |
| --------- | ------------------------------------ | ----- | ----------- |
| msg\_type | [string](cosmos-grpc-docs.md#string) |       |             |
| data      | [bytes](cosmos-grpc-docs.md#bytes)   |       |             |

### Result

Result is the union of ResponseFormat and ResponseCheckTx.

| Field  | Type                                                               | Label    | Description                                                                                                                                         |
| ------ | ------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| data   | [bytes](cosmos-grpc-docs.md#bytes)                                 |          | Data is any data returned from message or handler execution. It MUST be length prefixed in order to separate data from multiple message executions. |
| log    | [string](cosmos-grpc-docs.md#string)                               |          | Log contains the log information from message or handler execution.                                                                                 |
| events | [tendermint.abci.Event](cosmos-grpc-docs.md#tendermint.abci.Event) | repeated | Events contains a slice of Event objects that were emitted during message or handler execution.                                                     |

### SearchTxsResult

SearchTxsResult defines a structure for querying txs pageable

| Field        | Type                                                                  | Label    | Description                         |
| ------------ | --------------------------------------------------------------------- | -------- | ----------------------------------- |
| total\_count | [uint64](cosmos-grpc-docs.md#uint64)                                  |          | Count of all txs                    |
| count        | [uint64](cosmos-grpc-docs.md#uint64)                                  |          | Count of txs in current page        |
| page\_number | [uint64](cosmos-grpc-docs.md#uint64)                                  |          | Index of current page, start from 1 |
| page\_total  | [uint64](cosmos-grpc-docs.md#uint64)                                  |          | Count of total pages                |
| limit        | [uint64](cosmos-grpc-docs.md#uint64)                                  |          | Max count txs per page              |
| txs          | [TxResponse](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.TxResponse) | repeated | List of txs in current page         |

### SimulationResponse

SimulationResponse defines the response generated when a transaction is successfully simulated.

| Field     | Type                                                            | Label | Description |
| --------- | --------------------------------------------------------------- | ----- | ----------- |
| gas\_info | [GasInfo](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.GasInfo) |       |             |
| result    | [Result](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.Result)   |       |             |

### StringEvent

StringEvent defines en Event object wrapper where all the attributes contain key/value pairs that are strings instead of raw bytes.

| Field      | Type                                                                | Label    | Description |
| ---------- | ------------------------------------------------------------------- | -------- | ----------- |
| type       | [string](cosmos-grpc-docs.md#string)                                |          |             |
| attributes | [Attribute](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.Attribute) | repeated |             |

### TxMsgData

TxMsgData defines a list of MsgData. A transaction will have a MsgData object for each message.

| Field | Type                                                            | Label    | Description |
| ----- | --------------------------------------------------------------- | -------- | ----------- |
| data  | [MsgData](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.MsgData) | repeated |             |

### TxResponse

TxResponse defines a structure containing relevant tx data and metadata. The tags are stringified and the log is JSON decoded.

| Field       | Type                                                                          | Label    | Description                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| height      | [int64](cosmos-grpc-docs.md#int64)                                            |          | The block height                                                                                                                                                        |
| txhash      | [string](cosmos-grpc-docs.md#string)                                          |          | The transaction hash.                                                                                                                                                   |
| codespace   | [string](cosmos-grpc-docs.md#string)                                          |          | Namespace for the Code                                                                                                                                                  |
| code        | [uint32](cosmos-grpc-docs.md#uint32)                                          |          | Response code.                                                                                                                                                          |
| data        | [string](cosmos-grpc-docs.md#string)                                          |          | Result bytes, if any.                                                                                                                                                   |
| raw\_log    | [string](cosmos-grpc-docs.md#string)                                          |          | The output of the application's logger (raw string). May be non-deterministic.                                                                                          |
| logs        | [ABCIMessageLog](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.ABCIMessageLog) | repeated | The output of the application's logger (typed). May be non-deterministic.                                                                                               |
| info        | [string](cosmos-grpc-docs.md#string)                                          |          | Additional information. May be non-deterministic.                                                                                                                       |
| gas\_wanted | [int64](cosmos-grpc-docs.md#int64)                                            |          | Amount of gas requested for transaction.                                                                                                                                |
| gas\_used   | [int64](cosmos-grpc-docs.md#int64)                                            |          | Amount of gas consumed by transaction.                                                                                                                                  |
| tx          | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)                |          | The request transaction bytes.                                                                                                                                          |
| timestamp   | [string](cosmos-grpc-docs.md#string)                                          |          | Time of the previous block. For heights > 1, it's the weighted median of the timestamps of the valid votes in the block.LastCommit. For height == 1, it's genesis time. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/kv/v1beta1/kv.proto

### Pair

Pair defines a key/value bytes tuple.

| Field | Type                               | Label | Description |
| ----- | ---------------------------------- | ----- | ----------- |
| key   | [bytes](cosmos-grpc-docs.md#bytes) |       |             |
| value | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### Pairs

Pairs defines a repeated slice of Pair objects.

| Field | Type                                                    | Label    | Description |
| ----- | ------------------------------------------------------- | -------- | ----------- |
| pairs | [Pair](cosmos-grpc-docs.md#cosmos.base.kv.v1beta1.Pair) | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/snapshots/v1beta1/snapshot.proto

### Metadata

Metadata contains SDK-specific snapshot metadata.

| Field         | Type                               | Label    | Description          |
| ------------- | ---------------------------------- | -------- | -------------------- |
| chunk\_hashes | [bytes](cosmos-grpc-docs.md#bytes) | repeated | SHA-256 chunk hashes |

### Snapshot

Snapshot contains Tendermint state sync snapshot info.

| Field    | Type                                                                   | Label | Description |
| -------- | ---------------------------------------------------------------------- | ----- | ----------- |
| height   | [uint64](cosmos-grpc-docs.md#uint64)                                   |       |             |
| format   | [uint32](cosmos-grpc-docs.md#uint32)                                   |       |             |
| chunks   | [uint32](cosmos-grpc-docs.md#uint32)                                   |       |             |
| hash     | [bytes](cosmos-grpc-docs.md#bytes)                                     |       |             |
| metadata | [Metadata](cosmos-grpc-docs.md#cosmos.base.snapshots.v1beta1.Metadata) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/simulate/v1beta1/simulate.proto

### SimulateRequest

SimulateRequest is the request type for the SimulateServiceService.Simulate RPC method.

| Field | Type                                                             | Label | Description                        |
| ----- | ---------------------------------------------------------------- | ----- | ---------------------------------- |
| tx    | [cosmos.tx.v1beta1.Tx](cosmos-grpc-docs.md#cosmos.tx.v1beta1.Tx) |       | tx is the transaction to simulate. |

### SimulateResponse

SimulateResponse is the response type for the SimulateServiceService.SimulateRPC method.

| Field     | Type                                                                                     | Label | Description                                                    |
| --------- | ---------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------------- |
| gas\_info | [cosmos.base.abci.v1beta1.GasInfo](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.GasInfo) |       | gas\_info is the information about gas used in the simulation. |
| result    | [cosmos.base.abci.v1beta1.Result](cosmos-grpc-docs.md#cosmos.base.abci.v1beta1.Result)   |       | result is the result of the simulation.                        |

### SimulateService

SimulateService defines a gRPC service for simulating transactions. It may also support querying and broadcasting in the future.

| Method Name | Request Type                                                                        | Response Type                                                                         | Description                                                          |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Simulate    | [SimulateRequest](cosmos-grpc-docs.md#cosmos.base.simulate.v1beta1.SimulateRequest) | [SimulateResponse](cosmos-grpc-docs.md#cosmos.base.simulate.v1beta1.SimulateResponse) | Simulate simulates executing a transaction for estimating gas usage. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/v1beta1/coin.proto

### Coin

Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.

| Field  | Type                                 | Label | Description |
| ------ | ------------------------------------ | ----- | ----------- |
| denom  | [string](cosmos-grpc-docs.md#string) |       |             |
| amount | [string](cosmos-grpc-docs.md#string) |       |             |

### DecCoin

DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method signatures required by gogoproto.

| Field  | Type                                 | Label | Description |
| ------ | ------------------------------------ | ----- | ----------- |
| denom  | [string](cosmos-grpc-docs.md#string) |       |             |
| amount | [string](cosmos-grpc-docs.md#string) |       |             |

### DecProto

DecProto defines a Protobuf wrapper around a Dec object.

| Field | Type                                 | Label | Description |
| ----- | ------------------------------------ | ----- | ----------- |
| dec   | [string](cosmos-grpc-docs.md#string) |       |             |

### IntProto

IntProto defines a Protobuf wrapper around an Int object.

| Field | Type                                 | Label | Description |
| ----- | ------------------------------------ | ----- | ----------- |
| int   | [string](cosmos-grpc-docs.md#string) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/query/v1beta1/pagination.proto

### PageRequest

PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:

message SomeRequest { Foo some\_parameter = 1; PageRequest pagination = 2; }

| Field        | Type                                 | Label | Description                                                                                                                                                                                                                         |
| ------------ | ------------------------------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key          | [bytes](cosmos-grpc-docs.md#bytes)   |       | key is a value returned in PageResponse.next\_key to begin querying the next page most efficiently. Only one of offset or key should be set.                                                                                        |
| offset       | [uint64](cosmos-grpc-docs.md#uint64) |       | offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.                                                                                  |
| limit        | [uint64](cosmos-grpc-docs.md#uint64) |       | limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.                                                                                             |
| count\_total | [bool](cosmos-grpc-docs.md#bool)     |       | count\_total is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. count\_total is only respected when offset is used. It is ignored when key is set. |

### PageResponse

PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.

message SomeResponse { repeated Bar results = 1; PageResponse page = 2; }

| Field     | Type                                 | Label | Description                                                                                                      |
| --------- | ------------------------------------ | ----- | ---------------------------------------------------------------------------------------------------------------- |
| next\_key | [bytes](cosmos-grpc-docs.md#bytes)   |       | next\_key is the key to be passed to PageRequest.key to query the next page most efficiently                     |
| total     | [uint64](cosmos-grpc-docs.md#uint64) |       | total is total number of results available if PageRequest.count\_total was set, its value is undefined otherwise |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/store/v1beta1/commit\_info.proto

### CommitID

CommitID defines the committment information when a specific store is committed.

| Field   | Type                               | Label | Description |
| ------- | ---------------------------------- | ----- | ----------- |
| version | [int64](cosmos-grpc-docs.md#int64) |       |             |
| hash    | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### CommitInfo

CommitInfo defines commit information used by the multi-store when committing a version/height.

| Field        | Type                                                                 | Label    | Description |
| ------------ | -------------------------------------------------------------------- | -------- | ----------- |
| version      | [int64](cosmos-grpc-docs.md#int64)                                   |          |             |
| store\_infos | [StoreInfo](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.StoreInfo) | repeated |             |

### StoreInfo

StoreInfo defines store-specific commit information. It contains a reference between a store name and the commit ID.

| Field      | Type                                                               | Label | Description |
| ---------- | ------------------------------------------------------------------ | ----- | ----------- |
| name       | [string](cosmos-grpc-docs.md#string)                               |       |             |
| commit\_id | [CommitID](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.CommitID) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/store/v1beta1/snapshot.proto

### SnapshotIAVLItem

SnapshotIAVLItem is an exported IAVL node.

| Field   | Type                               | Label | Description |
| ------- | ---------------------------------- | ----- | ----------- |
| key     | [bytes](cosmos-grpc-docs.md#bytes) |       |             |
| value   | [bytes](cosmos-grpc-docs.md#bytes) |       |             |
| version | [int64](cosmos-grpc-docs.md#int64) |       |             |
| height  | [int32](cosmos-grpc-docs.md#int32) |       |             |

### SnapshotItem

SnapshotItem is an item contained in a rootmulti.Store snapshot.

| Field | Type                                                                                 | Label | Description |
| ----- | ------------------------------------------------------------------------------------ | ----- | ----------- |
| store | [SnapshotStoreItem](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.SnapshotStoreItem) |       |             |
| iavl  | [SnapshotIAVLItem](cosmos-grpc-docs.md#cosmos.base.store.v1beta1.SnapshotIAVLItem)   |       |             |

### SnapshotStoreItem

SnapshotStoreItem contains metadata about a snapshotted store.

| Field | Type                                 | Label | Description |
| ----- | ------------------------------------ | ----- | ----------- |
| name  | [string](cosmos-grpc-docs.md#string) |       |             |

[Top](cosmos-grpc-docs.md#top)

## cosmos/base/reflection/v1beta1/reflection.proto

### ListAllInterfacesRequest

ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.

### ListAllInterfacesResponse

ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.

| Field            | Type                                 | Label    | Description                                                    |
| ---------------- | ------------------------------------ | -------- | -------------------------------------------------------------- |
| interface\_names | [string](cosmos-grpc-docs.md#string) | repeated | interface\_names is an array of all the registered interfaces. |

### ListImplementationsRequest

ListImplementationsRequest is the request type of the ListImplementations RPC.

| Field           | Type                                 | Label | Description                                                             |
| --------------- | ------------------------------------ | ----- | ----------------------------------------------------------------------- |
| interface\_name | [string](cosmos-grpc-docs.md#string) |       | interface\_name defines the interface to query the implementations for. |

### ListImplementationsResponse

ListImplementationsResponse is the response type of the ListImplementations RPC.

| Field                          | Type                                 | Label    | Description |
| ------------------------------ | ------------------------------------ | -------- | ----------- |
| implementation\_message\_names | [string](cosmos-grpc-docs.md#string) | repeated |             |

### ReflectionService

ReflectionService defines a service for interface reflection.

| Method Name         | Request Type                                                                                                | Response Type                                                                                                 | Description                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ListAllInterfaces   | [ListAllInterfacesRequest](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListAllInterfacesRequest)     | [ListAllInterfacesResponse](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListAllInterfacesResponse)     | ListAllInterfaces lists all the interfaces registered in the interface registry.  |
| ListImplementations | [ListImplementationsRequest](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListImplementationsRequest) | [ListImplementationsResponse](cosmos-grpc-docs.md#cosmos.base.reflection.v1beta1.ListImplementationsResponse) | ListImplementations list all the concrete types that implement a given interface. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/gov/v1beta1/tx.proto

### MsgDeposit

MsgDeposit defines a message to submit a deposit to an existing proposal.

| Field        | Type                                                                     | Label    | Description |
| ------------ | ------------------------------------------------------------------------ | -------- | ----------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64)                                     |          |             |
| depositor    | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| amount       | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

### MsgDepositResponse

MsgDepositResponse defines the Msg/Deposit response type.

### MsgSubmitProposal

MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary proposal Content.

| Field            | Type                                                                     | Label    | Description |
| ---------------- | ------------------------------------------------------------------------ | -------- | ----------- |
| content          | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)           |          |             |
| initial\_deposit | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |
| proposer         | [string](cosmos-grpc-docs.md#string)                                     |          |             |

### MsgSubmitProposalResponse

MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.

| Field        | Type                                 | Label | Description |
| ------------ | ------------------------------------ | ----- | ----------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64) |       |             |

### MsgVote

MsgVote defines a message to cast a vote.

| Field        | Type                                                            | Label | Description |
| ------------ | --------------------------------------------------------------- | ----- | ----------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64)                            |       |             |
| voter        | [string](cosmos-grpc-docs.md#string)                            |       |             |
| option       | [VoteOption](cosmos-grpc-docs.md#cosmos.gov.v1beta1.VoteOption) |       |             |

### MsgVoteResponse

MsgVoteResponse defines the Msg/Vote response type.

### Msg

Msg defines the bank Msg service.

| Method Name    | Request Type                                                                  | Response Type                                                                                 | Description                                                             |
| -------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| SubmitProposal | [MsgSubmitProposal](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgSubmitProposal) | [MsgSubmitProposalResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgSubmitProposalResponse) | SubmitProposal defines a method to create new proposal given a content. |
| Vote           | [MsgVote](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgVote)                     | [MsgVoteResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgVoteResponse)                     | Vote defines a method to add a vote on a specific proposal.             |
| Deposit        | [MsgDeposit](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgDeposit)               | [MsgDepositResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.MsgDepositResponse)               | Deposit defines a method to add deposit on a specific proposal.         |

[Top](cosmos-grpc-docs.md#top)

## cosmos/gov/v1beta1/gov.proto

### Deposit

Deposit defines an amount deposited by an account address to an active proposal.

| Field        | Type                                                                     | Label    | Description |
| ------------ | ------------------------------------------------------------------------ | -------- | ----------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64)                                     |          |             |
| depositor    | [string](cosmos-grpc-docs.md#string)                                     |          |             |
| amount       | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated |             |

### DepositParams

DepositParams defines the params for deposits on governance proposals.

| Field                | Type                                                                     | Label    | Description                                                                        |
| -------------------- | ------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------- |
| min\_deposit         | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin) | repeated | Minimum deposit for a proposal to enter voting period.                             |
| max\_deposit\_period | [google.protobuf.Duration](cosmos-grpc-docs.md#google.protobuf.Duration) |          | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |

### Proposal

Proposal defines the core field members of a governance proposal.

| Field                | Type                                                                       | Label    | Description |
| -------------------- | -------------------------------------------------------------------------- | -------- | ----------- |
| proposal\_id         | [uint64](cosmos-grpc-docs.md#uint64)                                       |          |             |
| content              | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)             |          |             |
| status               | [ProposalStatus](cosmos-grpc-docs.md#cosmos.gov.v1beta1.ProposalStatus)    |          |             |
| final\_tally\_result | [TallyResult](cosmos-grpc-docs.md#cosmos.gov.v1beta1.TallyResult)          |          |             |
| submit\_time         | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |          |             |
| deposit\_end\_time   | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |          |             |
| total\_deposit       | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)   | repeated |             |
| voting\_start\_time  | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |          |             |
| voting\_end\_time    | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp) |          |             |

### TallyParams

TallyParams defines the params for tallying votes on governance proposals.

| Field           | Type                               | Label | Description                                                                                     |
| --------------- | ---------------------------------- | ----- | ----------------------------------------------------------------------------------------------- |
| quorum          | [bytes](cosmos-grpc-docs.md#bytes) |       | Minimum percentage of total stake needed to vote for a result to be considered valid.           |
| threshold       | [bytes](cosmos-grpc-docs.md#bytes) |       | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.                       |
| veto\_threshold | [bytes](cosmos-grpc-docs.md#bytes) |       | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |

### TallyResult

TallyResult defines a standard tally for a governance proposal.

| Field          | Type                                 | Label | Description |
| -------------- | ------------------------------------ | ----- | ----------- |
| yes            | [string](cosmos-grpc-docs.md#string) |       |             |
| abstain        | [string](cosmos-grpc-docs.md#string) |       |             |
| no             | [string](cosmos-grpc-docs.md#string) |       |             |
| no\_with\_veto | [string](cosmos-grpc-docs.md#string) |       |             |

### TextProposal

TextProposal defines a standard text proposal whose changes need to be manually updated in case of approval.

| Field       | Type                                 | Label | Description |
| ----------- | ------------------------------------ | ----- | ----------- |
| title       | [string](cosmos-grpc-docs.md#string) |       |             |
| description | [string](cosmos-grpc-docs.md#string) |       |             |

### Vote

Vote defines a vote on a governance proposal. A Vote consists of a proposal ID, the voter, and the vote option.

| Field        | Type                                                            | Label | Description |
| ------------ | --------------------------------------------------------------- | ----- | ----------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64)                            |       |             |
| voter        | [string](cosmos-grpc-docs.md#string)                            |       |             |
| option       | [VoteOption](cosmos-grpc-docs.md#cosmos.gov.v1beta1.VoteOption) |       |             |

### VotingParams

VotingParams defines the params for voting on governance proposals.

| Field          | Type                                                                     | Label | Description                  |
| -------------- | ------------------------------------------------------------------------ | ----- | ---------------------------- |
| voting\_period | [google.protobuf.Duration](cosmos-grpc-docs.md#google.protobuf.Duration) |       | Length of the voting period. |

### ProposalStatus

ProposalStatus enumerates the valid statuses of a proposal.

| Name                              | Number | Description                                                                                |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| PROPOSAL\_STATUS\_UNSPECIFIED     | 0      | PROPOSAL\_STATUS\_UNSPECIFIED defines the default propopsal status.                        |
| PROPOSAL\_STATUS\_DEPOSIT\_PERIOD | 1      | PROPOSAL\_STATUS\_DEPOSIT\_PERIOD defines a proposal status during the deposit period.     |
| PROPOSAL\_STATUS\_VOTING\_PERIOD  | 2      | PROPOSAL\_STATUS\_VOTING\_PERIOD defines a proposal status during the voting period.       |
| PROPOSAL\_STATUS\_PASSED          | 3      | PROPOSAL\_STATUS\_PASSED defines a proposal status of a proposal that has passed.          |
| PROPOSAL\_STATUS\_REJECTED        | 4      | PROPOSAL\_STATUS\_REJECTED defines a proposal status of a proposal that has been rejected. |
| PROPOSAL\_STATUS\_FAILED          | 5      | PROPOSAL\_STATUS\_FAILED defines a proposal status of a proposal that has failed.          |

### VoteOption

VoteOption enumerates the valid vote options for a given governance proposal.

| Name                         | Number | Description                                                      |
| ---------------------------- | ------ | ---------------------------------------------------------------- |
| VOTE\_OPTION\_UNSPECIFIED    | 0      | VOTE\_OPTION\_UNSPECIFIED defines a no-op vote option.           |
| VOTE\_OPTION\_YES            | 1      | VOTE\_OPTION\_YES defines a yes vote option.                     |
| VOTE\_OPTION\_ABSTAIN        | 2      | VOTE\_OPTION\_ABSTAIN defines an abstain vote option.            |
| VOTE\_OPTION\_NO             | 3      | VOTE\_OPTION\_NO defines a no vote option.                       |
| VOTE\_OPTION\_NO\_WITH\_VETO | 4      | VOTE\_OPTION\_NO\_WITH\_VETO defines a no with veto vote option. |

[Top](cosmos-grpc-docs.md#top)

## cosmos/gov/v1beta1/query.proto

### QueryDepositRequest

QueryDepositRequest is the request type for the Query/Deposit RPC method.

| Field        | Type                                 | Label | Description                                                 |
| ------------ | ------------------------------------ | ----- | ----------------------------------------------------------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64) |       | proposal\_id defines the unique id of the proposal.         |
| depositor    | [string](cosmos-grpc-docs.md#string) |       | depositor defines the deposit addresses from the proposals. |

### QueryDepositResponse

QueryDepositResponse is the response type for the Query/Deposit RPC method.

| Field   | Type                                                      | Label | Description                            |
| ------- | --------------------------------------------------------- | ----- | -------------------------------------- |
| deposit | [Deposit](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Deposit) |       | deposit defines the requested deposit. |

### QueryDepositsRequest

QueryDepositsRequest is the request type for the Query/Deposits RPC method.

| Field        | Type                                                                                               | Label | Description                                                |
| ------------ | -------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64)                                                               |       | proposal\_id defines the unique id of the proposal.        |
| pagination   | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request. |

### QueryDepositsResponse

QueryDepositsResponse is the response type for the Query/Deposits RPC method.

| Field      | Type                                                                                                 | Label    | Description                                        |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| deposits   | [Deposit](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Deposit)                                            | repeated |                                                    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

| Field        | Type                                 | Label | Description                                                                                          |
| ------------ | ------------------------------------ | ----- | ---------------------------------------------------------------------------------------------------- |
| params\_type | [string](cosmos-grpc-docs.md#string) |       | params\_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit". |

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field           | Type                                                                  | Label | Description                                                |
| --------------- | --------------------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| voting\_params  | [VotingParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.VotingParams)   |       | voting\_params defines the parameters related to voting.   |
| deposit\_params | [DepositParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.DepositParams) |       | deposit\_params defines the parameters related to deposit. |
| tally\_params   | [TallyParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.TallyParams)     |       | tally\_params defines the parameters related to tally.     |

### QueryProposalRequest

QueryProposalRequest is the request type for the Query/Proposal RPC method.

| Field        | Type                                 | Label | Description                                         |
| ------------ | ------------------------------------ | ----- | --------------------------------------------------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64) |       | proposal\_id defines the unique id of the proposal. |

### QueryProposalResponse

QueryProposalResponse is the response type for the Query/Proposal RPC method.

| Field    | Type                                                        | Label | Description |
| -------- | ----------------------------------------------------------- | ----- | ----------- |
| proposal | [Proposal](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Proposal) |       |             |

### QueryProposalsRequest

QueryProposalsRequest is the request type for the Query/Proposals RPC method.

| Field            | Type                                                                                               | Label | Description                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| proposal\_status | [ProposalStatus](cosmos-grpc-docs.md#cosmos.gov.v1beta1.ProposalStatus)                            |       | proposal\_status defines the status of the proposals.       |
| voter            | [string](cosmos-grpc-docs.md#string)                                                               |       | voter defines the voter address for the proposals.          |
| depositor        | [string](cosmos-grpc-docs.md#string)                                                               |       | depositor defines the deposit addresses from the proposals. |
| pagination       | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request.  |

### QueryProposalsResponse

QueryProposalsResponse is the response type for the Query/Proposals RPC method.

| Field      | Type                                                                                                 | Label    | Description                                        |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| proposals  | [Proposal](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Proposal)                                          | repeated |                                                    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### QueryTallyResultRequest

QueryTallyResultRequest is the request type for the Query/Tally RPC method.

| Field        | Type                                 | Label | Description                                         |
| ------------ | ------------------------------------ | ----- | --------------------------------------------------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64) |       | proposal\_id defines the unique id of the proposal. |

### QueryTallyResultResponse

QueryTallyResultResponse is the response type for the Query/Tally RPC method.

| Field | Type                                                              | Label | Description                        |
| ----- | ----------------------------------------------------------------- | ----- | ---------------------------------- |
| tally | [TallyResult](cosmos-grpc-docs.md#cosmos.gov.v1beta1.TallyResult) |       | tally defines the requested tally. |

### QueryVoteRequest

QueryVoteRequest is the request type for the Query/Vote RPC method.

| Field        | Type                                 | Label | Description                                         |
| ------------ | ------------------------------------ | ----- | --------------------------------------------------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64) |       | proposal\_id defines the unique id of the proposal. |
| voter        | [string](cosmos-grpc-docs.md#string) |       | voter defines the oter address for the proposals.   |

### QueryVoteResponse

QueryVoteResponse is the response type for the Query/Vote RPC method.

| Field | Type                                                | Label | Description                    |
| ----- | --------------------------------------------------- | ----- | ------------------------------ |
| vote  | [Vote](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Vote) |       | vote defined the queried vote. |

### QueryVotesRequest

QueryVotesRequest is the request type for the Query/Votes RPC method.

| Field        | Type                                                                                               | Label | Description                                                |
| ------------ | -------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| proposal\_id | [uint64](cosmos-grpc-docs.md#uint64)                                                               |       | proposal\_id defines the unique id of the proposal.        |
| pagination   | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request. |

### QueryVotesResponse

QueryVotesResponse is the response type for the Query/Votes RPC method.

| Field      | Type                                                                                                 | Label    | Description                                        |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| votes      | [Vote](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Vote)                                                  | repeated | votes defined the queried votes.                   |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response. |

### Query

Query defines the gRPC querier service for gov module

| Method Name | Request Type                                                                              | Response Type                                                                               | Description                                                               |
| ----------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Proposal    | [QueryProposalRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalRequest)       | [QueryProposalResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalResponse)       | Proposal queries proposal details based on ProposalID.                    |
| Proposals   | [QueryProposalsRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalsRequest)     | [QueryProposalsResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryProposalsResponse)     | Proposals queries all proposals based on given status.                    |
| Vote        | [QueryVoteRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVoteRequest)               | [QueryVoteResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVoteResponse)               | Vote queries voted information based on proposalID, voterAddr.            |
| Votes       | [QueryVotesRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVotesRequest)             | [QueryVotesResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryVotesResponse)             | Votes queries votes of a given proposal.                                  |
| Params      | [QueryParamsRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryParamsRequest)           | [QueryParamsResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryParamsResponse)           | Params queries all parameters of the gov module.                          |
| Deposit     | [QueryDepositRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositRequest)         | [QueryDepositResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositResponse)         | Deposit queries single deposit information based proposalID, depositAddr. |
| Deposits    | [QueryDepositsRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositsRequest)       | [QueryDepositsResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryDepositsResponse)       | Deposits queries all deposits of a single proposal.                       |
| TallyResult | [QueryTallyResultRequest](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryTallyResultRequest) | [QueryTallyResultResponse](cosmos-grpc-docs.md#cosmos.gov.v1beta1.QueryTallyResultResponse) | TallyResult queries the tally of a proposal vote.                         |

[Top](cosmos-grpc-docs.md#top)

## cosmos/gov/v1beta1/genesis.proto

### GenesisState

GenesisState defines the gov module's genesis state.

| Field                  | Type                                                                  | Label    | Description                                                |
| ---------------------- | --------------------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| starting\_proposal\_id | [uint64](cosmos-grpc-docs.md#uint64)                                  |          | starting\_proposal\_id is the ID of the starting proposal. |
| deposits               | [Deposit](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Deposit)             | repeated | deposits defines all the deposits present at genesis.      |
| votes                  | [Vote](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Vote)                   | repeated | votes defines all the votes present at genesis.            |
| proposals              | [Proposal](cosmos-grpc-docs.md#cosmos.gov.v1beta1.Proposal)           | repeated | proposals defines all the proposals present at genesis.    |
| deposit\_params        | [DepositParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.DepositParams) |          | params defines all the paramaters of related to deposit.   |
| voting\_params         | [VotingParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.VotingParams)   |          | params defines all the paramaters of related to voting.    |
| tally\_params          | [TallyParams](cosmos-grpc-docs.md#cosmos.gov.v1beta1.TallyParams)     |          | params defines all the paramaters of related to tally.     |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/types/v1/genesis.proto

### GenesisState

GenesisState defines the ibc module's genesis state.

| Field               | Type                                                                                           | Label | Description                        |
| ------------------- | ---------------------------------------------------------------------------------------------- | ----- | ---------------------------------- |
| client\_genesis     | [ibc.core.client.v1.GenesisState](cosmos-grpc-docs.md#ibc.core.client.v1.GenesisState)         |       | ICS002 - Clients genesis state     |
| connection\_genesis | [ibc.core.connection.v1.GenesisState](cosmos-grpc-docs.md#ibc.core.connection.v1.GenesisState) |       | ICS003 - Connections genesis state |
| channel\_genesis    | [ibc.core.channel.v1.GenesisState](cosmos-grpc-docs.md#ibc.core.channel.v1.GenesisState)       |       | ICS004 - Channel genesis state     |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/connection/v1/query.proto

### QueryClientConnectionsRequest

QueryClientConnectionsRequest is the request type for the Query/ClientConnections RPC method

| Field      | Type                                 | Label | Description                                    |
| ---------- | ------------------------------------ | ----- | ---------------------------------------------- |
| client\_id | [string](cosmos-grpc-docs.md#string) |       | client identifier associated with a connection |

### QueryClientConnectionsResponse

QueryClientConnectionsResponse is the response type for the Query/ClientConnections RPC method

| Field             | Type                                                                       | Label    | Description                                                 |
| ----------------- | -------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- |
| connection\_paths | [string](cosmos-grpc-docs.md#string)                                       | repeated | slice of all the connection paths associated with a client. |
| proof             | [bytes](cosmos-grpc-docs.md#bytes)                                         |          | merkle proof of existence                                   |
| proof\_path       | [string](cosmos-grpc-docs.md#string)                                       |          | merkle proof path                                           |
| proof\_height     | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |          | height at which the proof was generated                     |

### QueryConnectionClientStateRequest

QueryConnectionClientStateRequest is the request type for the Query/ConnectionClientState RPC method

| Field          | Type                                 | Label | Description           |
| -------------- | ------------------------------------ | ----- | --------------------- |
| connection\_id | [string](cosmos-grpc-docs.md#string) |       | connection identifier |

### QueryConnectionClientStateResponse

QueryConnectionClientStateResponse is the response type for the Query/ConnectionClientState RPC method

| Field                     | Type                                                                                                     | Label | Description                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------- |
| identified\_client\_state | [ibc.core.client.v1.IdentifiedClientState](cosmos-grpc-docs.md#ibc.core.client.v1.IdentifiedClientState) |       | client state associated with the channel |
| proof                     | [bytes](cosmos-grpc-docs.md#bytes)                                                                       |       | merkle proof of existence                |
| proof\_path               | [string](cosmos-grpc-docs.md#string)                                                                     |       | merkle proof path                        |
| proof\_height             | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)                               |       | height at which the proof was retrieved  |

### QueryConnectionConsensusStateRequest

QueryConnectionConsensusStateRequest is the request type for the Query/ConnectionConsensusState RPC method

| Field           | Type                                 | Label | Description           |
| --------------- | ------------------------------------ | ----- | --------------------- |
| connection\_id  | [string](cosmos-grpc-docs.md#string) |       | connection identifier |
| version\_number | [uint64](cosmos-grpc-docs.md#uint64) |       |                       |
| version\_height | [uint64](cosmos-grpc-docs.md#uint64) |       |                       |

### QueryConnectionConsensusStateResponse

QueryConnectionConsensusStateResponse is the response type for the Query/ConnectionConsensusState RPC method

| Field            | Type                                                                       | Label | Description                                   |
| ---------------- | -------------------------------------------------------------------------- | ----- | --------------------------------------------- |
| consensus\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)             |       | consensus state associated with the channel   |
| client\_id       | [string](cosmos-grpc-docs.md#string)                                       |       | client ID associated with the consensus state |
| proof            | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | merkle proof of existence                     |
| proof\_path      | [string](cosmos-grpc-docs.md#string)                                       |       | merkle proof path                             |
| proof\_height    | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | height at which the proof was retrieved       |

### QueryConnectionRequest

QueryConnectionRequest is the request type for the Query/Connection RPC method

| Field          | Type                                 | Label | Description                  |
| -------------- | ------------------------------------ | ----- | ---------------------------- |
| connection\_id | [string](cosmos-grpc-docs.md#string) |       | connection unique identifier |

### QueryConnectionResponse

QueryConnectionResponse is the response type for the Query/Connection RPC method. Besides the connection end, it includes a proof and the height from which the proof was retrieved.

| Field         | Type                                                                       | Label | Description                                       |
| ------------- | -------------------------------------------------------------------------- | ----- | ------------------------------------------------- |
| connection    | [ConnectionEnd](cosmos-grpc-docs.md#ibc.core.connection.v1.ConnectionEnd)  |       | connection associated with the request identifier |
| proof         | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | merkle proof of existence                         |
| proof\_path   | [string](cosmos-grpc-docs.md#string)                                       |       | merkle proof path                                 |
| proof\_height | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | height at which the proof was retrieved           |

### QueryConnectionsRequest

QueryConnectionsRequest is the request type for the Query/Connections RPC method

| Field      | Type                                                                                               | Label | Description |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       |             |

### QueryConnectionsResponse

QueryConnectionsResponse is the response type for the Query/Connections RPC method.

| Field       | Type                                                                                                 | Label    | Description                              |
| ----------- | ---------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------- |
| connections | [IdentifiedConnection](cosmos-grpc-docs.md#ibc.core.connection.v1.IdentifiedConnection)              | repeated | list of stored connections of the chain. |
| pagination  | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination response                      |
| height      | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)                           |          | query block height                       |

### Query

Query provides defines the gRPC querier service

| Method Name              | Request Type                                                                                                            | Response Type                                                                                                             | Description                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Connection               | [QueryConnectionRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionRequest)                             | [QueryConnectionResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionResponse)                             | Connection queries an IBC connection end.                                            |
| Connections              | [QueryConnectionsRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionsRequest)                           | [QueryConnectionsResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionsResponse)                           | Connections queries all the IBC connections of a chain.                              |
| ClientConnections        | [QueryClientConnectionsRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryClientConnectionsRequest)               | [QueryClientConnectionsResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryClientConnectionsResponse)               | ClientConnections queries the connection paths associated with a client state.       |
| ConnectionClientState    | [QueryConnectionClientStateRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionClientStateRequest)       | [QueryConnectionClientStateResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionClientStateResponse)       | ConnectionClientState queries the client state associated with the connection.       |
| ConnectionConsensusState | [QueryConnectionConsensusStateRequest](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionConsensusStateRequest) | [QueryConnectionConsensusStateResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.QueryConnectionConsensusStateResponse) | ConnectionConsensusState queries the consensus state associated with the connection. |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/connection/v1/connection.proto

### ClientPaths

ClientPaths define all the connection paths for a client state.

| Field | Type                                 | Label    | Description              |
| ----- | ------------------------------------ | -------- | ------------------------ |
| paths | [string](cosmos-grpc-docs.md#string) | repeated | list of connection paths |

### ConnectionEnd

ConnectionEnd defines a stateful object on a chain connected to another separate one. NOTE: there must only be 2 defined ConnectionEnds to establish a connection between two chains.

| Field        | Type                                                                    | Label    | Description                                                                                                             |
| ------------ | ----------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| client\_id   | [string](cosmos-grpc-docs.md#string)                                    |          | client associated with this connection.                                                                                 |
| versions     | [string](cosmos-grpc-docs.md#string)                                    | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection |
| state        | [State](cosmos-grpc-docs.md#ibc.core.connection.v1.State)               |          | current state of the connection end.                                                                                    |
| counterparty | [Counterparty](cosmos-grpc-docs.md#ibc.core.connection.v1.Counterparty) |          | counterparty chain associated with this connection.                                                                     |

### ConnectionPaths

ConnectionPaths define all the connection paths for a given client state.

| Field      | Type                                 | Label    | Description                    |
| ---------- | ------------------------------------ | -------- | ------------------------------ |
| client\_id | [string](cosmos-grpc-docs.md#string) |          | client state unique identifier |
| paths      | [string](cosmos-grpc-docs.md#string) | repeated | list of connection paths       |

### Counterparty

Counterparty defines the counterparty chain associated with a connection end.

| Field          | Type                                                                                           | Label | Description                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------- |
| client\_id     | [string](cosmos-grpc-docs.md#string)                                                           |       | identifies the client on the counterparty chain associated with a given connection.         |
| connection\_id | [string](cosmos-grpc-docs.md#string)                                                           |       | identifies the connection end on the counterparty chain associated with a given connection. |
| prefix         | [ibc.core.commitment.v1.MerklePrefix](cosmos-grpc-docs.md#ibc.core.commitment.v1.MerklePrefix) |       | commitment merkle prefix of the counterparty chain                                          |

### IdentifiedConnection

IdentifiedConnection defines a connection with additional connection identifier field.

| Field        | Type                                                                    | Label    | Description                                                                                                             |
| ------------ | ----------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| id           | [string](cosmos-grpc-docs.md#string)                                    |          | connection identifier.                                                                                                  |
| client\_id   | [string](cosmos-grpc-docs.md#string)                                    |          | client associated with this connection.                                                                                 |
| versions     | [string](cosmos-grpc-docs.md#string)                                    | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection |
| state        | [State](cosmos-grpc-docs.md#ibc.core.connection.v1.State)               |          | current state of the connection end.                                                                                    |
| counterparty | [Counterparty](cosmos-grpc-docs.md#ibc.core.connection.v1.Counterparty) |          | counterparty chain associated with this connection.                                                                     |

### MsgConnectionOpenAck

MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of connection state to TRYOPEN on Chain B.

| Field                        | Type                                                                       | Label | Description                                                                        |
| ---------------------------- | -------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------- |
| connection\_id               | [string](cosmos-grpc-docs.md#string)                                       |       |                                                                                    |
| counterparty\_connection\_id | [string](cosmos-grpc-docs.md#string)                                       |       |                                                                                    |
| version                      | [string](cosmos-grpc-docs.md#string)                                       |       |                                                                                    |
| client\_state                | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)             |       |                                                                                    |
| proof\_height                | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |                                                                                    |
| proof\_try                   | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | proof of the initialization the connection on Chain B: `UNITIALIZED -&gt; TRYOPEN` |
| proof\_client                | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | proof of client state included in message                                          |
| proof\_consensus             | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | proof of client consensus state                                                    |
| consensus\_height            | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |                                                                                    |
| signer                       | [string](cosmos-grpc-docs.md#string)                                       |       |                                                                                    |

### MsgConnectionOpenAckResponse

MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type.

### MsgConnectionOpenConfirm

MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of connection state to OPEN on Chain A.

| Field          | Type                                                                       | Label | Description                                                                |
| -------------- | -------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------- |
| connection\_id | [string](cosmos-grpc-docs.md#string)                                       |       |                                                                            |
| proof\_ack     | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | proof for the change of the connection state on Chain A: `INIT -&gt; OPEN` |
| proof\_height  | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |                                                                            |
| signer         | [string](cosmos-grpc-docs.md#string)                                       |       |                                                                            |

### MsgConnectionOpenConfirmResponse

MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm response type.

### MsgConnectionOpenInit

MsgConnectionOpenInit defines the msg sent by an account on Chain A to initialize a connection with Chain B.

| Field          | Type                                                                    | Label | Description |
| -------------- | ----------------------------------------------------------------------- | ----- | ----------- |
| client\_id     | [string](cosmos-grpc-docs.md#string)                                    |       |             |
| connection\_id | [string](cosmos-grpc-docs.md#string)                                    |       |             |
| counterparty   | [Counterparty](cosmos-grpc-docs.md#ibc.core.connection.v1.Counterparty) |       |             |
| version        | [string](cosmos-grpc-docs.md#string)                                    |       |             |
| signer         | [string](cosmos-grpc-docs.md#string)                                    |       |             |

### MsgConnectionOpenInitResponse

MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response type.

### MsgConnectionOpenTry

MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a connection on Chain B.

| Field                                | Type                                                                       | Label    | Description                                                                     |
| ------------------------------------ | -------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| client\_id                           | [string](cosmos-grpc-docs.md#string)                                       |          |                                                                                 |
| desired\_connection\_id              | [string](cosmos-grpc-docs.md#string)                                       |          |                                                                                 |
| counterparty\_chosen\_connection\_id | [string](cosmos-grpc-docs.md#string)                                       |          |                                                                                 |
| client\_state                        | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)             |          |                                                                                 |
| counterparty                         | [Counterparty](cosmos-grpc-docs.md#ibc.core.connection.v1.Counterparty)    |          |                                                                                 |
| counterparty\_versions               | [string](cosmos-grpc-docs.md#string)                                       | repeated |                                                                                 |
| proof\_height                        | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |          |                                                                                 |
| proof\_init                          | [bytes](cosmos-grpc-docs.md#bytes)                                         |          | proof of the initialization the connection on Chain A: `UNITIALIZED -&gt; INIT` |
| proof\_client                        | [bytes](cosmos-grpc-docs.md#bytes)                                         |          | proof of client state included in message                                       |
| proof\_consensus                     | [bytes](cosmos-grpc-docs.md#bytes)                                         |          | proof of client consensus state                                                 |
| consensus\_height                    | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |          |                                                                                 |
| signer                               | [string](cosmos-grpc-docs.md#string)                                       |          |                                                                                 |

### MsgConnectionOpenTryResponse

MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type.

### Version

Version defines the versioning scheme used to negotiate the IBC verison in the connection handshake.

| Field      | Type                                 | Label    | Description                                               |
| ---------- | ------------------------------------ | -------- | --------------------------------------------------------- |
| identifier | [string](cosmos-grpc-docs.md#string) |          | unique version identifier                                 |
| features   | [string](cosmos-grpc-docs.md#string) | repeated | list of features compatible with the specified identifier |

### State

State defines if a connection is in one of the following states: INIT, TRYOPEN, OPEN or UNINITIALIZED.

| Name                              | Number | Description                                                                     |
| --------------------------------- | ------ | ------------------------------------------------------------------------------- |
| STATE\_UNINITIALIZED\_UNSPECIFIED | 0      | Default State                                                                   |
| STATE\_INIT                       | 1      | A connection end has just started the opening handshake.                        |
| STATE\_TRYOPEN                    | 2      | A connection end has acknowledged the handshake step on the counterparty chain. |
| STATE\_OPEN                       | 3      | A connection end has completed the handshake.                                   |

### Msg

Msg defines the ibc/connection Msg service.

| Method Name           | Request Type                                                                                    | Response Type                                                                                                   | Description                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ConnectionOpenInit    | [MsgConnectionOpenInit](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenInit)       | [MsgConnectionOpenInitResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenInitResponse)       | ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.       |
| ConnectionOpenTry     | [MsgConnectionOpenTry](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenTry)         | [MsgConnectionOpenTryResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenTryResponse)         | ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.         |
| ConnectionOpenAck     | [MsgConnectionOpenAck](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenAck)         | [MsgConnectionOpenAckResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenAckResponse)         | ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.         |
| ConnectionOpenConfirm | [MsgConnectionOpenConfirm](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenConfirm) | [MsgConnectionOpenConfirmResponse](cosmos-grpc-docs.md#ibc.core.connection.v1.MsgConnectionOpenConfirmResponse) | ConnectionOpenConfirm defines a rpc handler method for MsgConnectionOpenConfirm. |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/connection/v1/genesis.proto

### GenesisState

GenesisState defines the ibc connection submodule's genesis state.

| Field                     | Type                                                                                    | Label    | Description |
| ------------------------- | --------------------------------------------------------------------------------------- | -------- | ----------- |
| connections               | [IdentifiedConnection](cosmos-grpc-docs.md#ibc.core.connection.v1.IdentifiedConnection) | repeated |             |
| client\_connection\_paths | [ConnectionPaths](cosmos-grpc-docs.md#ibc.core.connection.v1.ConnectionPaths)           | repeated |             |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/commitment/v1/commitment.proto

### Key

Key defines a proof Key

| Field | Type                                                                  | Label | Description |
| ----- | --------------------------------------------------------------------- | ----- | ----------- |
| name  | [bytes](cosmos-grpc-docs.md#bytes)                                    |       |             |
| enc   | [KeyEncoding](cosmos-grpc-docs.md#ibc.core.commitment.v1.KeyEncoding) |       |             |

### KeyPath

KeyPath defines a slice of keys

| Field | Type                                                  | Label    | Description |
| ----- | ----------------------------------------------------- | -------- | ----------- |
| keys  | [Key](cosmos-grpc-docs.md#ibc.core.commitment.v1.Key) | repeated |             |

### MerklePath

MerklePath is the path used to verify commitment proofs, which can be an arbitrary structured object (defined by a commitment type).

| Field     | Type                                                          | Label | Description |
| --------- | ------------------------------------------------------------- | ----- | ----------- |
| key\_path | [KeyPath](cosmos-grpc-docs.md#ibc.core.commitment.v1.KeyPath) |       |             |

### MerklePrefix

MerklePrefix is merkle path prefixed to the key. The constructed key from the Path and the key will be append(Path.KeyPath, append(Path.KeyPrefix, key...))

| Field       | Type                               | Label | Description |
| ----------- | ---------------------------------- | ----- | ----------- |
| key\_prefix | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### MerkleProof

MerkleProof is a wrapper type that contains a merkle proof. It demonstrates membership or non-membership for an element or set of elements, verifiable in conjunction with a known commitment root. Proofs should be succinct.

| Field | Type                                                                         | Label | Description |
| ----- | ---------------------------------------------------------------------------- | ----- | ----------- |
| proof | [tendermint.crypto.ProofOps](cosmos-grpc-docs.md#tendermint.crypto.ProofOps) |       |             |

### MerkleRoot

MerkleRoot defines a merkle root hash. In the Cosmos SDK, the AppHash of a block header becomes the root.

| Field | Type                               | Label | Description |
| ----- | ---------------------------------- | ----- | ----------- |
| hash  | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### KeyEncoding

KeyEncoding defines the encoding format of a key's bytes.

| Name                            | Number | Description  |
| ------------------------------- | ------ | ------------ |
| KEY\_ENCODING\_URL\_UNSPECIFIED | 0      | URL encoding |
| KEY\_ENCODING\_HEX              | 1      | Hex encoding |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/channel/v1/query.proto

### QueryChannelClientStateRequest

QueryChannelClientStateRequest is the request type for the Query/ClientState RPC method

| Field       | Type                                 | Label | Description               |
| ----------- | ------------------------------------ | ----- | ------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       | port unique identifier    |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       | channel unique identifier |

### QueryChannelClientStateResponse

QueryChannelClientStateResponse is the Response type for the Query/QueryChannelClientState RPC method

| Field                     | Type                                                                                                     | Label | Description                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------- |
| identified\_client\_state | [ibc.core.client.v1.IdentifiedClientState](cosmos-grpc-docs.md#ibc.core.client.v1.IdentifiedClientState) |       | client state associated with the channel |
| proof                     | [bytes](cosmos-grpc-docs.md#bytes)                                                                       |       | merkle proof of existence                |
| proof\_path               | [string](cosmos-grpc-docs.md#string)                                                                     |       | merkle proof path                        |
| proof\_height             | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)                               |       | height at which the proof was retrieved  |

### QueryChannelConsensusStateRequest

QueryChannelConsensusStateRequest is the request type for the Query/ConsensusState RPC method

| Field           | Type                                 | Label | Description                           |
| --------------- | ------------------------------------ | ----- | ------------------------------------- |
| port\_id        | [string](cosmos-grpc-docs.md#string) |       | port unique identifier                |
| channel\_id     | [string](cosmos-grpc-docs.md#string) |       | channel unique identifier             |
| version\_number | [uint64](cosmos-grpc-docs.md#uint64) |       | version number of the consensus state |
| version\_height | [uint64](cosmos-grpc-docs.md#uint64) |       | version height of the consensus state |

### QueryChannelConsensusStateResponse

QueryChannelClientStateResponse is the Response type for the Query/QueryChannelClientState RPC method

| Field            | Type                                                                       | Label | Description                                   |
| ---------------- | -------------------------------------------------------------------------- | ----- | --------------------------------------------- |
| consensus\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any)             |       | consensus state associated with the channel   |
| client\_id       | [string](cosmos-grpc-docs.md#string)                                       |       | client ID associated with the consensus state |
| proof            | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | merkle proof of existence                     |
| proof\_path      | [string](cosmos-grpc-docs.md#string)                                       |       | merkle proof path                             |
| proof\_height    | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | height at which the proof was retrieved       |

### QueryChannelRequest

QueryChannelRequest is the request type for the Query/Channel RPC method

| Field       | Type                                 | Label | Description               |
| ----------- | ------------------------------------ | ----- | ------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       | port unique identifier    |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       | channel unique identifier |

### QueryChannelResponse

QueryChannelResponse is the response type for the Query/Channel RPC method. Besides the Channel end, it includes a proof and the height from which the proof was retrieved.

| Field         | Type                                                                       | Label | Description                                     |
| ------------- | -------------------------------------------------------------------------- | ----- | ----------------------------------------------- |
| channel       | [Channel](cosmos-grpc-docs.md#ibc.core.channel.v1.Channel)                 |       | channel associated with the request identifiers |
| proof         | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | merkle proof of existence                       |
| proof\_path   | [string](cosmos-grpc-docs.md#string)                                       |       | merkle proof path                               |
| proof\_height | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | height at which the proof was retrieved         |

### QueryChannelsRequest

QueryChannelsRequest is the request type for the Query/Channels RPC method

| Field      | Type                                                                                               | Label | Description        |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ------------------ |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination request |

### QueryChannelsResponse

QueryChannelsResponse is the response type for the Query/Channels RPC method.

| Field      | Type                                                                                                 | Label    | Description                           |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------------------------------- |
| channels   | [IdentifiedChannel](cosmos-grpc-docs.md#ibc.core.channel.v1.IdentifiedChannel)                       | repeated | list of stored channels of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination response                   |
| height     | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)                           |          | query block height                    |

### QueryConnectionChannelsRequest

QueryConnectionChannelsRequest is the request type for the Query/QueryConnectionChannels RPC method

| Field      | Type                                                                                               | Label | Description                  |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ---------------------------- |
| connection | [string](cosmos-grpc-docs.md#string)                                                               |       | connection unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination request           |

### QueryConnectionChannelsResponse

QueryConnectionChannelsResponse is the Response type for the Query/QueryConnectionChannels RPC method

| Field      | Type                                                                                                 | Label    | Description                                    |
| ---------- | ---------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------- |
| channels   | [IdentifiedChannel](cosmos-grpc-docs.md#ibc.core.channel.v1.IdentifiedChannel)                       | repeated | list of channels associated with a connection. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination response                            |
| height     | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)                           |          | query block height                             |

### QueryNextSequenceReceiveRequest

QueryNextSequenceReceiveRequest is the request type for the Query/QueryNextSequenceReceiveRequest RPC method

| Field       | Type                                 | Label | Description               |
| ----------- | ------------------------------------ | ----- | ------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       | port unique identifier    |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       | channel unique identifier |

### QueryNextSequenceReceiveResponse

QuerySequenceResponse is the request type for the Query/QueryNextSequenceReceiveResponse RPC method

| Field                   | Type                                                                       | Label | Description                             |
| ----------------------- | -------------------------------------------------------------------------- | ----- | --------------------------------------- |
| next\_sequence\_receive | [uint64](cosmos-grpc-docs.md#uint64)                                       |       | next sequence receive number            |
| proof                   | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | merkle proof of existence               |
| proof\_path             | [string](cosmos-grpc-docs.md#string)                                       |       | merkle proof path                       |
| proof\_height           | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | height at which the proof was retrieved |

### QueryPacketAcknowledgementRequest

QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method

| Field       | Type                                 | Label | Description               |
| ----------- | ------------------------------------ | ----- | ------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       | port unique identifier    |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       | channel unique identifier |
| sequence    | [uint64](cosmos-grpc-docs.md#uint64) |       | packet sequence           |

### QueryPacketAcknowledgementResponse

QueryPacketAcknowledgementResponse defines the client query response for a packet which also includes a proof, its path and the height form which the proof was retrieved

| Field           | Type                                                                       | Label | Description                               |
| --------------- | -------------------------------------------------------------------------- | ----- | ----------------------------------------- |
| acknowledgement | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | packet associated with the request fields |
| proof           | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | merkle proof of existence                 |
| proof\_path     | [string](cosmos-grpc-docs.md#string)                                       |       | merkle proof path                         |
| proof\_height   | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | height at which the proof was retrieved   |

### QueryPacketCommitmentRequest

QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method

| Field       | Type                                 | Label | Description               |
| ----------- | ------------------------------------ | ----- | ------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       | port unique identifier    |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       | channel unique identifier |
| sequence    | [uint64](cosmos-grpc-docs.md#uint64) |       | packet sequence           |

### QueryPacketCommitmentResponse

QueryPacketCommitmentResponse defines the client query response for a packet which also includes a proof, its path and the height form which the proof was retrieved

| Field         | Type                                                                       | Label | Description                               |
| ------------- | -------------------------------------------------------------------------- | ----- | ----------------------------------------- |
| commitment    | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | packet associated with the request fields |
| proof         | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | merkle proof of existence                 |
| proof\_path   | [string](cosmos-grpc-docs.md#string)                                       |       | merkle proof path                         |
| proof\_height | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | height at which the proof was retrieved   |

### QueryPacketCommitmentsRequest

QueryPacketCommitmentsRequest is the request type for the Query/QueryPacketCommitments RPC method

| Field       | Type                                                                                               | Label | Description               |
| ----------- | -------------------------------------------------------------------------------------------------- | ----- | ------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string)                                                               |       | port unique identifier    |
| channel\_id | [string](cosmos-grpc-docs.md#string)                                                               |       | channel unique identifier |
| pagination  | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination request        |

### QueryPacketCommitmentsResponse

QueryPacketCommitmentsResponse is the request type for the Query/QueryPacketCommitments RPC method

| Field       | Type                                                                                                 | Label    | Description         |
| ----------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------------- |
| commitments | [PacketAckCommitment](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketAckCommitment)                   | repeated |                     |
| pagination  | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination response |
| height      | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)                           |          | query block height  |

### QueryUnreceivedPacketsRequest

QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method

| Field                         | Type                                 | Label    | Description               |
| ----------------------------- | ------------------------------------ | -------- | ------------------------- |
| port\_id                      | [string](cosmos-grpc-docs.md#string) |          | port unique identifier    |
| channel\_id                   | [string](cosmos-grpc-docs.md#string) |          | channel unique identifier |
| packet\_commitment\_sequences | [uint64](cosmos-grpc-docs.md#uint64) | repeated | list of packet sequences  |

### QueryUnreceivedPacketsResponse

QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method

| Field     | Type                                                                       | Label    | Description                         |
| --------- | -------------------------------------------------------------------------- | -------- | ----------------------------------- |
| sequences | [uint64](cosmos-grpc-docs.md#uint64)                                       | repeated | list of unreceived packet sequences |
| height    | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |          | query block height                  |

### QueryUnrelayedAcksRequest

QueryUnrelayedAcksRequest is the request type for the Query/UnrelayedAcks RPC method

| Field                         | Type                                 | Label    | Description                  |
| ----------------------------- | ------------------------------------ | -------- | ---------------------------- |
| port\_id                      | [string](cosmos-grpc-docs.md#string) |          | port unique identifier       |
| channel\_id                   | [string](cosmos-grpc-docs.md#string) |          | channel unique identifier    |
| packet\_commitment\_sequences | [uint64](cosmos-grpc-docs.md#uint64) | repeated | list of commitment sequences |

### QueryUnrelayedAcksResponse

QueryUnrelayedAcksResponse is the response type for the Query/UnrelayedAcks RPC method

| Field     | Type                                                                       | Label    | Description                                 |
| --------- | -------------------------------------------------------------------------- | -------- | ------------------------------------------- |
| sequences | [uint64](cosmos-grpc-docs.md#uint64)                                       | repeated | list of unrelayed acknowledgement sequences |
| height    | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |          | query block height                          |

### Query

Query provides defines the gRPC querier service

| Method Name           | Request Type                                                                                                   | Response Type                                                                                                    | Description                                                                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Channel               | [QueryChannelRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelRequest)                             | [QueryChannelResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelResponse)                             | Channel queries an IBC Channel.                                                                                         |
| Channels              | [QueryChannelsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelsRequest)                           | [QueryChannelsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelsResponse)                           | Channels queries all the IBC channels of a chain.                                                                       |
| ConnectionChannels    | [QueryConnectionChannelsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryConnectionChannelsRequest)       | [QueryConnectionChannelsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryConnectionChannelsResponse)       | ConnectionChannels queries all the channels associated with a connection end.                                           |
| ChannelClientState    | [QueryChannelClientStateRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelClientStateRequest)       | [QueryChannelClientStateResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelClientStateResponse)       | ChannelClientState queries for the client state for the channel associated with the provided channel identifiers.       |
| ChannelConsensusState | [QueryChannelConsensusStateRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelConsensusStateRequest) | [QueryChannelConsensusStateResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryChannelConsensusStateResponse) | ChannelConsensusState queries for the consensus state for the channel associated with the provided channel identifiers. |
| PacketCommitment      | [QueryPacketCommitmentRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentRequest)           | [QueryPacketCommitmentResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentResponse)           | PacketCommitment queries a stored packet commitment hash.                                                               |
| PacketCommitments     | [QueryPacketCommitmentsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentsRequest)         | [QueryPacketCommitmentsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketCommitmentsResponse)         | PacketCommitments returns the all the packet commitments hashes associated with a channel.                              |
| PacketAcknowledgement | [QueryPacketAcknowledgementRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketAcknowledgementRequest) | [QueryPacketAcknowledgementResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryPacketAcknowledgementResponse) | PacketAcknowledgement queries a stored packet acknowledgement hash.                                                     |
| UnreceivedPackets     | [QueryUnreceivedPacketsRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnreceivedPacketsRequest)         | [QueryUnreceivedPacketsResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnreceivedPacketsResponse)         | UnreceivedPackets returns all the unrelayed IBC packets associated with a channel and sequences.                        |
| UnrelayedAcks         | [QueryUnrelayedAcksRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnrelayedAcksRequest)                 | [QueryUnrelayedAcksResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryUnrelayedAcksResponse)                 | UnrelayedAcks returns all the unrelayed IBC acknowledgements associated with a channel and sequences.                   |
| NextSequenceReceive   | [QueryNextSequenceReceiveRequest](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryNextSequenceReceiveRequest)     | [QueryNextSequenceReceiveResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.QueryNextSequenceReceiveResponse)     | NextSequenceReceive returns the next receive sequence for a given channel.                                              |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/channel/v1/genesis.proto

### GenesisState

GenesisState defines the ibc channel submodule's genesis state.

| Field            | Type                                                                               | Label    | Description |
| ---------------- | ---------------------------------------------------------------------------------- | -------- | ----------- |
| channels         | [IdentifiedChannel](cosmos-grpc-docs.md#ibc.core.channel.v1.IdentifiedChannel)     | repeated |             |
| acknowledgements | [PacketAckCommitment](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketAckCommitment) | repeated |             |
| commitments      | [PacketAckCommitment](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketAckCommitment) | repeated |             |
| send\_sequences  | [PacketSequence](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketSequence)           | repeated |             |
| recv\_sequences  | [PacketSequence](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketSequence)           | repeated |             |
| ack\_sequences   | [PacketSequence](cosmos-grpc-docs.md#ibc.core.channel.v1.PacketSequence)           | repeated |             |

### PacketSequence

PacketSequence defines the genesis type necessary to retrieve and store next send and receive sequences.

| Field       | Type                                 | Label | Description |
| ----------- | ------------------------------------ | ----- | ----------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       |             |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       |             |
| sequence    | [uint64](cosmos-grpc-docs.md#uint64) |       |             |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/channel/v1/channel.proto

### Acknowledgement

Acknowledgement is the recommended acknowledgement format to be used by app-specific protocols. NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental conflicts with other protobuf message formats used for acknowledgements. The first byte of any message with this format will be the non-ASCII values `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS: https://github.com/cosmos/ics/tree/master/spec/ics-004-channel-and-packet-semantics#acknowledgement-envelope

| Field  | Type                                 | Label | Description |
| ------ | ------------------------------------ | ----- | ----------- |
| result | [bytes](cosmos-grpc-docs.md#bytes)   |       |             |
| error  | [string](cosmos-grpc-docs.md#string) |       |             |

### Channel

Channel defines pipeline for exactly-once packet delivery between specific modules on separate blockchains, which has at least one end capable of sending packets and one end capable of receiving packets.

| Field            | Type                                                                 | Label    | Description                                                                                    |
| ---------------- | -------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| state            | [State](cosmos-grpc-docs.md#ibc.core.channel.v1.State)               |          | current state of the channel end                                                               |
| ordering         | [Order](cosmos-grpc-docs.md#ibc.core.channel.v1.Order)               |          | whether the channel is ordered or unordered                                                    |
| counterparty     | [Counterparty](cosmos-grpc-docs.md#ibc.core.channel.v1.Counterparty) |          | counterparty channel end                                                                       |
| connection\_hops | [string](cosmos-grpc-docs.md#string)                                 | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version          | [string](cosmos-grpc-docs.md#string)                                 |          | opaque channel version, which is agreed upon during the handshake                              |

### Counterparty

Counterparty defines a channel end counterparty

| Field       | Type                                 | Label | Description                                                             |
| ----------- | ------------------------------------ | ----- | ----------------------------------------------------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       | port on the counterparty chain which owns the other end of the channel. |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       | channel end on the counterparty chain                                   |

### IdentifiedChannel

IdentifiedChannel defines a channel with additional port and channel identifier fields.

| Field            | Type                                                                 | Label    | Description                                                                                    |
| ---------------- | -------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| state            | [State](cosmos-grpc-docs.md#ibc.core.channel.v1.State)               |          | current state of the channel end                                                               |
| ordering         | [Order](cosmos-grpc-docs.md#ibc.core.channel.v1.Order)               |          | whether the channel is ordered or unordered                                                    |
| counterparty     | [Counterparty](cosmos-grpc-docs.md#ibc.core.channel.v1.Counterparty) |          | counterparty channel end                                                                       |
| connection\_hops | [string](cosmos-grpc-docs.md#string)                                 | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version          | [string](cosmos-grpc-docs.md#string)                                 |          | opaque channel version, which is agreed upon during the handshake                              |
| port\_id         | [string](cosmos-grpc-docs.md#string)                                 |          | port identifier                                                                                |
| channel\_id      | [string](cosmos-grpc-docs.md#string)                                 |          | channel identifier                                                                             |

### MsgAcknowledgement

MsgAcknowledgement receives incoming IBC acknowledgement

| Field           | Type                                                                       | Label | Description |
| --------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| packet          | [Packet](cosmos-grpc-docs.md#ibc.core.channel.v1.Packet)                   |       |             |
| acknowledgement | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof           | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height   | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| signer          | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgAcknowledgementResponse

MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.

### MsgChannelCloseConfirm

MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to CLOSED on Chain A.

| Field         | Type                                                                       | Label | Description |
| ------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| port\_id      | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| channel\_id   | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| proof\_init   | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| signer        | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgChannelCloseConfirmResponse

MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response type.

### MsgChannelCloseInit

MsgChannelCloseInit defines a msg sent by a Relayer to Chain A to close a channel with Chain B.

| Field       | Type                                 | Label | Description |
| ----------- | ------------------------------------ | ----- | ----------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       |             |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       |             |
| signer      | [string](cosmos-grpc-docs.md#string) |       |             |

### MsgChannelCloseInitResponse

MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.

### MsgChannelOpenAck

MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of channel state to TRYOPEN on Chain B.

| Field                     | Type                                                                       | Label | Description |
| ------------------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| port\_id                  | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| channel\_id               | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| counterparty\_channel\_id | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| counterparty\_version     | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| proof\_try                | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height             | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| signer                    | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgChannelOpenAckResponse

MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.

### MsgChannelOpenConfirm

MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to OPEN on Chain A.

| Field         | Type                                                                       | Label | Description |
| ------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| port\_id      | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| channel\_id   | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| proof\_ack    | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| signer        | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgChannelOpenConfirmResponse

MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response type.

### MsgChannelOpenInit

MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It is called by a relayer on Chain A.

| Field       | Type                                                       | Label | Description |
| ----------- | ---------------------------------------------------------- | ----- | ----------- |
| port\_id    | [string](cosmos-grpc-docs.md#string)                       |       |             |
| channel\_id | [string](cosmos-grpc-docs.md#string)                       |       |             |
| channel     | [Channel](cosmos-grpc-docs.md#ibc.core.channel.v1.Channel) |       |             |
| signer      | [string](cosmos-grpc-docs.md#string)                       |       |             |

### MsgChannelOpenInitResponse

MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.

### MsgChannelOpenTry

MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel on Chain B.

| Field                             | Type                                                                       | Label | Description |
| --------------------------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| port\_id                          | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| desired\_channel\_id              | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| counterparty\_chosen\_channel\_id | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| channel                           | [Channel](cosmos-grpc-docs.md#ibc.core.channel.v1.Channel)                 |       |             |
| counterparty\_version             | [string](cosmos-grpc-docs.md#string)                                       |       |             |
| proof\_init                       | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height                     | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| signer                            | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgChannelOpenTryResponse

MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.

### MsgRecvPacket

MsgRecvPacket receives incoming IBC packet

| Field         | Type                                                                       | Label | Description |
| ------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| packet        | [Packet](cosmos-grpc-docs.md#ibc.core.channel.v1.Packet)                   |       |             |
| proof         | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| signer        | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgRecvPacketResponse

MsgRecvPacketResponse defines the Msg/RecvPacket response type.

### MsgTimeout

MsgTimeout receives timed-out packet

| Field                | Type                                                                       | Label | Description |
| -------------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| packet               | [Packet](cosmos-grpc-docs.md#ibc.core.channel.v1.Packet)                   |       |             |
| proof                | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height        | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| next\_sequence\_recv | [uint64](cosmos-grpc-docs.md#uint64)                                       |       |             |
| signer               | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgTimeoutOnClose

MsgTimeoutOnClose timed-out packet upon counterparty channel closure.

| Field                | Type                                                                       | Label | Description |
| -------------------- | -------------------------------------------------------------------------- | ----- | ----------- |
| packet               | [Packet](cosmos-grpc-docs.md#ibc.core.channel.v1.Packet)                   |       |             |
| proof                | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_close         | [bytes](cosmos-grpc-docs.md#bytes)                                         |       |             |
| proof\_height        | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       |             |
| next\_sequence\_recv | [uint64](cosmos-grpc-docs.md#uint64)                                       |       |             |
| signer               | [string](cosmos-grpc-docs.md#string)                                       |       |             |

### MsgTimeoutOnCloseResponse

MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.

### MsgTimeoutResponse

MsgTimeoutResponse defines the Msg/Timeout response type.

### Packet

Packet defines a type that carries data across different chains through IBC

| Field                | Type                                                                       | Label | Description                                                                                                                                                                   |
| -------------------- | -------------------------------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence             | [uint64](cosmos-grpc-docs.md#uint64)                                       |       | number corresponds to the order of sends and receives, where a Packet with an earlier sequence number must be sent and received before a Packet with a later sequence number. |
| source\_port         | [string](cosmos-grpc-docs.md#string)                                       |       | identifies the port on the sending chain.                                                                                                                                     |
| source\_channel      | [string](cosmos-grpc-docs.md#string)                                       |       | identifies the channel end on the sending chain.                                                                                                                              |
| destination\_port    | [string](cosmos-grpc-docs.md#string)                                       |       | identifies the port on the receiving chain.                                                                                                                                   |
| destination\_channel | [string](cosmos-grpc-docs.md#string)                                       |       | identifies the channel end on the receiving chain.                                                                                                                            |
| data                 | [bytes](cosmos-grpc-docs.md#bytes)                                         |       | actual opaque bytes transferred directly to the application module                                                                                                            |
| timeout\_height      | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | block height after which the packet times out                                                                                                                                 |
| timeout\_timestamp   | [uint64](cosmos-grpc-docs.md#uint64)                                       |       | block timestamp (in nanoseconds) after which the packet times out                                                                                                             |

### PacketAckCommitment

PacketAckCommitment defines the genesis type necessary to retrieve and store acknowlegements.

| Field       | Type                                 | Label | Description                |
| ----------- | ------------------------------------ | ----- | -------------------------- |
| port\_id    | [string](cosmos-grpc-docs.md#string) |       | channel port identifier.   |
| channel\_id | [string](cosmos-grpc-docs.md#string) |       | channel unique identifier. |
| sequence    | [uint64](cosmos-grpc-docs.md#uint64) |       | packet sequence.           |
| hash        | [bytes](cosmos-grpc-docs.md#bytes)   |       | packet commitment hash.    |

### Order

Order defines if a channel is ORDERED or UNORDERED

| Name                     | Number | Description                                                                                     |
| ------------------------ | ------ | ----------------------------------------------------------------------------------------------- |
| ORDER\_NONE\_UNSPECIFIED | 0      | zero-value for channel ordering                                                                 |
| ORDER\_UNORDERED         | 1      | packets can be delivered in any order, which may differ from the order in which they were sent. |
| ORDER\_ORDERED           | 2      | packets are delivered exactly in the order which they were sent                                 |

### State

State defines if a channel is in one of the following states: CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.

| Name                              | Number | Description                                                                                 |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| STATE\_UNINITIALIZED\_UNSPECIFIED | 0      | Default State                                                                               |
| STATE\_INIT                       | 1      | A channel has just started the opening handshake.                                           |
| STATE\_TRYOPEN                    | 2      | A channel has acknowledged the handshake step on the counterparty chain.                    |
| STATE\_OPEN                       | 3      | A channel has completed the handshake. Open channels are ready to send and receive packets. |
| STATE\_CLOSED                     | 4      | A channel has been closed and can no longer be used to send or receive packets.             |

### Msg

Msg defines the ibc/channel Msg service.

| Method Name         | Request Type                                                                             | Response Type                                                                                            | Description                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ChannelOpenInit     | [MsgChannelOpenInit](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenInit)         | [MsgChannelOpenInitResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenInitResponse)         | ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.         |
| ChannelOpenTry      | [MsgChannelOpenTry](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenTry)           | [MsgChannelOpenTryResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenTryResponse)           | ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.           |
| ChannelOpenAck      | [MsgChannelOpenAck](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenAck)           | [MsgChannelOpenAckResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenAckResponse)           | ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.           |
| ChannelOpenConfirm  | [MsgChannelOpenConfirm](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenConfirm)   | [MsgChannelOpenConfirmResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelOpenConfirmResponse)   | ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.   |
| ChannelCloseInit    | [MsgChannelCloseInit](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseInit)       | [MsgChannelCloseInitResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseInitResponse)       | ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.       |
| ChannelCloseConfirm | [MsgChannelCloseConfirm](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseConfirm) | [MsgChannelCloseConfirmResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgChannelCloseConfirmResponse) | ChannelCloseConfirm defines a rpc handler method for MsgChannelCloseConfirm. |
| RecvPacket          | [MsgRecvPacket](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgRecvPacket)                   | [MsgRecvPacketResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgRecvPacketResponse)                   | RecvPacket defines a rpc handler method for MsgRecvPacket.                   |
| Timeout             | [MsgTimeout](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeout)                         | [MsgTimeoutResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeoutResponse)                         | Timeout defines a rpc handler method for MsgTimeout.                         |
| TimeoutOnClose      | [MsgTimeoutOnClose](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeoutOnClose)           | [MsgTimeoutOnCloseResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgTimeoutOnCloseResponse)           | TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.           |
| Acknowledgement     | [MsgAcknowledgement](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgAcknowledgement)         | [MsgAcknowledgementResponse](cosmos-grpc-docs.md#ibc.core.channel.v1.MsgAcknowledgementResponse)         | Acknowledgement defines a rpc handler method for MsgAcknowledgement.         |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/client/v1/client.proto

### ClientConsensusStates

ClientConsensusStates defines all the stored consensus states for a given client.

| Field             | Type                                                                                        | Label    | Description                                                   |
| ----------------- | ------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------- |
| client\_id        | [string](cosmos-grpc-docs.md#string)                                                        |          | client identifier                                             |
| consensus\_states | [ConsensusStateWithHeight](cosmos-grpc-docs.md#ibc.core.client.v1.ConsensusStateWithHeight) | repeated | consensus states and their heights associated with the client |

### ClientUpdateProposal

ClientUpdateProposal is a governance proposal. If it passes, the client is updated with the provided header. The update may fail if the header is not valid given certain conditions specified by the client implementation.

| Field       | Type                                                           | Label | Description                                                               |
| ----------- | -------------------------------------------------------------- | ----- | ------------------------------------------------------------------------- |
| title       | [string](cosmos-grpc-docs.md#string)                           |       | the title of the update proposal                                          |
| description | [string](cosmos-grpc-docs.md#string)                           |       | the description of the proposal                                           |
| client\_id  | [string](cosmos-grpc-docs.md#string)                           |       | the client identifier for the client to be updated if the proposal passes |
| header      | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | the header used to update the client if the proposal passes               |

### ConsensusStateWithHeight

ConsensusStateWithHeight defines a consensus state with an additional height field.

| Field            | Type                                                           | Label | Description            |
| ---------------- | -------------------------------------------------------------- | ----- | ---------------------- |
| height           | [Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)        |       | consensus state height |
| consensus\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | consensus state        |

### Height

Height is a monotonically increasing data type that can be compared against another Height for the purposes of updating and freezing clients

Normally the VersionHeight is incremented at each height while keeping version number the same However some consensus algorithms may choose to reset the height in certain conditions e.g. hard forks, state-machine breaking changes In these cases, the version number is incremented so that height continues to be monitonically increasing even as the VersionHeight gets reset

| Field           | Type                                 | Label | Description                                 |
| --------------- | ------------------------------------ | ----- | ------------------------------------------- |
| version\_number | [uint64](cosmos-grpc-docs.md#uint64) |       | the version that the client is currently on |
| version\_height | [uint64](cosmos-grpc-docs.md#uint64) |       | the height within the given version         |

### IdentifiedClientState

IdentifiedClientState defines a client state with an additional client identifier field.

| Field         | Type                                                           | Label | Description       |
| ------------- | -------------------------------------------------------------- | ----- | ----------------- |
| client\_id    | [string](cosmos-grpc-docs.md#string)                           |       | client identifier |
| client\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | client state      |

### MsgCreateClient

MsgCreateClient defines a message to create an IBC client

| Field            | Type                                                           | Label | Description                                                                    |
| ---------------- | -------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------ |
| client\_id       | [string](cosmos-grpc-docs.md#string)                           |       | client unique identifier                                                       |
| client\_state    | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | light client state                                                             |
| consensus\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | consensus state associated with the client that corresponds to a given height. |
| signer           | [string](cosmos-grpc-docs.md#string)                           |       | signer address                                                                 |

### MsgCreateClientResponse

MsgCreateClientResponse defines the Msg/CreateClient response type.

### MsgSubmitMisbehaviour

MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for light client misbehaviour.

| Field        | Type                                                           | Label | Description                                     |
| ------------ | -------------------------------------------------------------- | ----- | ----------------------------------------------- |
| client\_id   | [string](cosmos-grpc-docs.md#string)                           |       | client unique identifier                        |
| misbehaviour | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | misbehaviour used for freezing the light client |
| signer       | [string](cosmos-grpc-docs.md#string)                           |       | signer address                                  |

### MsgSubmitMisbehaviourResponse

MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response type.

### MsgUpdateClient

MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header.

| Field      | Type                                                           | Label | Description                       |
| ---------- | -------------------------------------------------------------- | ----- | --------------------------------- |
| client\_id | [string](cosmos-grpc-docs.md#string)                           |       | client unique identifier          |
| header     | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | header to update the light client |
| signer     | [string](cosmos-grpc-docs.md#string)                           |       | signer address                    |

### MsgUpdateClientResponse

MsgUpdateClientResponse defines the Msg/UpdateClient response type.

### MsgUpgradeClient

MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client state

| Field           | Type                                                           | Label | Description                                                            |
| --------------- | -------------------------------------------------------------- | ----- | ---------------------------------------------------------------------- |
| client\_id      | [string](cosmos-grpc-docs.md#string)                           |       | client unique identifier                                               |
| client\_state   | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | upgraded client state                                                  |
| upgrade\_height | [Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)        |       | height at which old chain halts and upgrades (i.e last block executed) |
| proof\_upgrade  | [bytes](cosmos-grpc-docs.md#bytes)                             |       | proof that old chain committed to new client                           |
| signer          | [string](cosmos-grpc-docs.md#string)                           |       | signer address                                                         |

### MsgUpgradeClientResponse

MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.

### Msg

Msg defines the ibc/client Msg service.

| Method Name        | Request Type                                                                          | Response Type                                                                                         | Description                                                                |
| ------------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| CreateClient       | [MsgCreateClient](cosmos-grpc-docs.md#ibc.core.client.v1.MsgCreateClient)             | [MsgCreateClientResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgCreateClientResponse)             | CreateClient defines a rpc handler method for MsgCreateClient.             |
| UpdateClient       | [MsgUpdateClient](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpdateClient)             | [MsgUpdateClientResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpdateClientResponse)             | UpdateClient defines a rpc handler method for MsgUpdateClient.             |
| UpgradeClient      | [MsgUpgradeClient](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpgradeClient)           | [MsgUpgradeClientResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgUpgradeClientResponse)           | UpgradeClient defines a rpc handler method for MsgUpgradeClient.           |
| SubmitMisbehaviour | [MsgSubmitMisbehaviour](cosmos-grpc-docs.md#ibc.core.client.v1.MsgSubmitMisbehaviour) | [MsgSubmitMisbehaviourResponse](cosmos-grpc-docs.md#ibc.core.client.v1.MsgSubmitMisbehaviourResponse) | SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/client/v1/query.proto

### QueryClientStateRequest

QueryClientStateRequest is the request type for the Query/ClientState RPC method

| Field      | Type                                 | Label | Description                    |
| ---------- | ------------------------------------ | ----- | ------------------------------ |
| client\_id | [string](cosmos-grpc-docs.md#string) |       | client state unique identifier |

### QueryClientStateResponse

QueryClientStateResponse is the response type for the Query/ClientState RPC method. Besides the client state, it includes a proof and the height from which the proof was retrieved.

| Field         | Type                                                           | Label | Description                                         |
| ------------- | -------------------------------------------------------------- | ----- | --------------------------------------------------- |
| client\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | client state associated with the request identifier |
| proof         | [bytes](cosmos-grpc-docs.md#bytes)                             |       | merkle proof of existence                           |
| proof\_path   | [string](cosmos-grpc-docs.md#string)                           |       | merkle proof path                                   |
| proof\_height | [Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)        |       | height at which the proof was retrieved             |

### QueryClientStatesRequest

QueryClientStatesRequest is the request type for the Query/ClientStates RPC method

| Field      | Type                                                                                               | Label | Description        |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ------------------ |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination request |

### QueryClientStatesResponse

QueryClientStatesResponse is the response type for the Query/ClientStates RPC method.

| Field          | Type                                                                                                 | Label    | Description                               |
| -------------- | ---------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------- |
| client\_states | [IdentifiedClientState](cosmos-grpc-docs.md#ibc.core.client.v1.IdentifiedClientState)                | repeated | list of stored ClientStates of the chain. |
| pagination     | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination response                       |

### QueryConsensusStateRequest

QueryConsensusStateRequest is the request type for the Query/ConsensusState RPC method. Besides the consensus state, it includes a proof and the height from which the proof was retrieved.

| Field           | Type                                 | Label | Description                                                                             |
| --------------- | ------------------------------------ | ----- | --------------------------------------------------------------------------------------- |
| client\_id      | [string](cosmos-grpc-docs.md#string) |       | client identifier                                                                       |
| version\_number | [uint64](cosmos-grpc-docs.md#uint64) |       | consensus state version number                                                          |
| version\_height | [uint64](cosmos-grpc-docs.md#uint64) |       | consensus state version height                                                          |
| latest\_height  | [bool](cosmos-grpc-docs.md#bool)     |       | latest\_height overrrides the height field and queries the latest stored ConsensusState |

### QueryConsensusStateResponse

QueryConsensusStateResponse is the response type for the Query/ConsensusState RPC method

| Field            | Type                                                           | Label | Description                                                               |
| ---------------- | -------------------------------------------------------------- | ----- | ------------------------------------------------------------------------- |
| consensus\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | consensus state associated with the client identifier at the given height |
| proof            | [bytes](cosmos-grpc-docs.md#bytes)                             |       | merkle proof of existence                                                 |
| proof\_path      | [string](cosmos-grpc-docs.md#string)                           |       | merkle proof path                                                         |
| proof\_height    | [Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)        |       | height at which the proof was retrieved                                   |

### QueryConsensusStatesRequest

QueryConsensusStatesRequest is the request type for the Query/ConsensusStates RPC method.

| Field      | Type                                                                                               | Label | Description        |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ------------------ |
| client\_id | [string](cosmos-grpc-docs.md#string)                                                               |       | client identifier  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination request |

### QueryConsensusStatesResponse

QueryConsensusStatesResponse is the response type for the Query/ConsensusStates RPC method

| Field             | Type                                                                                                 | Label    | Description                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------- |
| consensus\_states | [ConsensusStateWithHeight](cosmos-grpc-docs.md#ibc.core.client.v1.ConsensusStateWithHeight)          | repeated | consensus states associated with the identifier |
| pagination        | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination response                             |

### Query

Query provides defines the gRPC querier service

| Method Name     | Request Type                                                                                      | Response Type                                                                                       | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ClientState     | [QueryClientStateRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStateRequest)         | [QueryClientStateResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStateResponse)         | ClientState queries an IBC light client.                                                   |
| ClientStates    | [QueryClientStatesRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStatesRequest)       | [QueryClientStatesResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryClientStatesResponse)       | ClientStates queries all the IBC light clients of a chain.                                 |
| ConsensusState  | [QueryConsensusStateRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStateRequest)   | [QueryConsensusStateResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStateResponse)   | ConsensusState queries a consensus state associated with a client state at a given height. |
| ConsensusStates | [QueryConsensusStatesRequest](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStatesRequest) | [QueryConsensusStatesResponse](cosmos-grpc-docs.md#ibc.core.client.v1.QueryConsensusStatesResponse) | ConsensusStates queries all the consensus state associated with a given client.            |

[Top](cosmos-grpc-docs.md#top)

## ibc/core/client/v1/genesis.proto

### GenesisState

GenesisState defines the ibc client submodule's genesis state.

| Field              | Type                                                                                  | Label    | Description                                        |
| ------------------ | ------------------------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| clients            | [IdentifiedClientState](cosmos-grpc-docs.md#ibc.core.client.v1.IdentifiedClientState) | repeated | client states with their corresponding identifiers |
| clients\_consensus | [ClientConsensusStates](cosmos-grpc-docs.md#ibc.core.client.v1.ClientConsensusStates) | repeated | consensus states from each client                  |
| create\_localhost  | [bool](cosmos-grpc-docs.md#bool)                                                      |          | create localhost on initialization                 |

[Top](cosmos-grpc-docs.md#top)

## ibc/lightclients/solomachine/v1/solomachine.proto

### ChannelStateData

ChannelStateData returns the SignBytes data for channel state verification.

| Field   | Type                                                                           | Label | Description |
| ------- | ------------------------------------------------------------------------------ | ----- | ----------- |
| path    | [bytes](cosmos-grpc-docs.md#bytes)                                             |       |             |
| channel | [ibc.core.channel.v1.Channel](cosmos-grpc-docs.md#ibc.core.channel.v1.Channel) |       |             |

### ClientState

ClientState defines a solo machine client that tracks the current consensus state and if the client is frozen.

| Field                          | Type                                                                                 | Label | Description                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------- |
| sequence                       | [uint64](cosmos-grpc-docs.md#uint64)                                                 |       | latest sequence of the client state                                                                                   |
| frozen\_sequence               | [uint64](cosmos-grpc-docs.md#uint64)                                                 |       | frozen sequence of the solo machine                                                                                   |
| consensus\_state               | [ConsensusState](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.ConsensusState) |       |                                                                                                                       |
| allow\_update\_after\_proposal | [bool](cosmos-grpc-docs.md#bool)                                                     |       | when set to true, will allow governance to update a solo machine client. The client will be unfrozen if it is frozen. |

### ClientStateData

ClientStateData returns the SignBytes data for client state verification.

| Field         | Type                                                           | Label | Description |
| ------------- | -------------------------------------------------------------- | ----- | ----------- |
| path          | [bytes](cosmos-grpc-docs.md#bytes)                             |       |             |
| client\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       |             |

### ConnectionStateData

ConnectionStateData returns the SignBytes data for connection state verification.

| Field      | Type                                                                                             | Label | Description |
| ---------- | ------------------------------------------------------------------------------------------------ | ----- | ----------- |
| path       | [bytes](cosmos-grpc-docs.md#bytes)                                                               |       |             |
| connection | [ibc.core.connection.v1.ConnectionEnd](cosmos-grpc-docs.md#ibc.core.connection.v1.ConnectionEnd) |       |             |

### ConsensusState

ConsensusState defines a solo machine consensus state. The sequence of a consensus state is contained in the "height" key used in storing the consensus state.

| Field       | Type                                                           | Label | Description                                                                                                                                                         |
| ----------- | -------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public\_key | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | public key of the solo machine                                                                                                                                      |
| diversifier | [string](cosmos-grpc-docs.md#string)                           |       | diversifier allows the same public key to be re-used across different solo machine clients (potentially on different chains) without being considered misbehaviour. |
| timestamp   | [uint64](cosmos-grpc-docs.md#uint64)                           |       |                                                                                                                                                                     |

### ConsensusStateData

ConsensusStateData returns the SignBytes data for consensus state verification.

| Field            | Type                                                           | Label | Description |
| ---------------- | -------------------------------------------------------------- | ----- | ----------- |
| path             | [bytes](cosmos-grpc-docs.md#bytes)                             |       |             |
| consensus\_state | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       |             |

### Header

Header defines a solo machine consensus header

| Field            | Type                                                           | Label | Description                                   |
| ---------------- | -------------------------------------------------------------- | ----- | --------------------------------------------- |
| sequence         | [uint64](cosmos-grpc-docs.md#uint64)                           |       | sequence to update solo machine public key at |
| timestamp        | [uint64](cosmos-grpc-docs.md#uint64)                           |       |                                               |
| signature        | [bytes](cosmos-grpc-docs.md#bytes)                             |       |                                               |
| new\_public\_key | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       |                                               |
| new\_diversifier | [string](cosmos-grpc-docs.md#string)                           |       |                                               |

### HeaderData

HeaderData returns the SignBytes data for update verification.

| Field            | Type                                                           | Label | Description        |
| ---------------- | -------------------------------------------------------------- | ----- | ------------------ |
| new\_pub\_key    | [google.protobuf.Any](cosmos-grpc-docs.md#google.protobuf.Any) |       | header public key  |
| new\_diversifier | [string](cosmos-grpc-docs.md#string)                           |       | header diversifier |

### Misbehaviour

Misbehaviour defines misbehaviour for a solo machine which consists of a sequence and two signatures over different messages at that sequence.

| Field          | Type                                                                                     | Label | Description |
| -------------- | ---------------------------------------------------------------------------------------- | ----- | ----------- |
| client\_id     | [string](cosmos-grpc-docs.md#string)                                                     |       |             |
| sequence       | [uint64](cosmos-grpc-docs.md#uint64)                                                     |       |             |
| signature\_one | [SignatureAndData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.SignatureAndData) |       |             |
| signature\_two | [SignatureAndData](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.SignatureAndData) |       |             |

### NextSequenceRecvData

NextSequenceRecvData returns the SignBytes data for verification of the next sequence to be received.

| Field           | Type                                 | Label | Description |
| --------------- | ------------------------------------ | ----- | ----------- |
| path            | [bytes](cosmos-grpc-docs.md#bytes)   |       |             |
| next\_seq\_recv | [uint64](cosmos-grpc-docs.md#uint64) |       |             |

### PacketAcknowledgementData

PacketAcknowledgementData returns the SignBytes data for acknowledgement verification.

| Field           | Type                               | Label | Description |
| --------------- | ---------------------------------- | ----- | ----------- |
| path            | [bytes](cosmos-grpc-docs.md#bytes) |       |             |
| acknowledgement | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### PacketCommitmentData

PacketCommitmentData returns the SignBytes data for packet commitment verification.

| Field      | Type                               | Label | Description |
| ---------- | ---------------------------------- | ----- | ----------- |
| path       | [bytes](cosmos-grpc-docs.md#bytes) |       |             |
| commitment | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### PacketReceiptAbsenceData

PacketReceiptAbsenceData returns the SignBytes data for packet receipt absence verification.

| Field | Type                               | Label | Description |
| ----- | ---------------------------------- | ----- | ----------- |
| path  | [bytes](cosmos-grpc-docs.md#bytes) |       |             |

### SignBytes

SignBytes defines the signed bytes used for signature verification.

| Field       | Type                                                                     | Label | Description           |
| ----------- | ------------------------------------------------------------------------ | ----- | --------------------- |
| sequence    | [uint64](cosmos-grpc-docs.md#uint64)                                     |       |                       |
| timestamp   | [uint64](cosmos-grpc-docs.md#uint64)                                     |       |                       |
| diversifier | [string](cosmos-grpc-docs.md#string)                                     |       |                       |
| data\_type  | [DataType](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.DataType) |       | type of the data used |
| data        | [bytes](cosmos-grpc-docs.md#bytes)                                       |       | marshaled data        |

### SignatureAndData

SignatureAndData contains a signature and the data signed over to create that signature.

| Field      | Type                                                                     | Label | Description |
| ---------- | ------------------------------------------------------------------------ | ----- | ----------- |
| signature  | [bytes](cosmos-grpc-docs.md#bytes)                                       |       |             |
| data\_type | [DataType](cosmos-grpc-docs.md#ibc.lightclients.solomachine.v1.DataType) |       |             |
| data       | [bytes](cosmos-grpc-docs.md#bytes)                                       |       |             |
| timestamp  | [uint64](cosmos-grpc-docs.md#uint64)                                     |       |             |

### TimestampedSignatureData

TimestampedSignatureData contains the signature data and the timestamp of the signature.

| Field           | Type                                 | Label | Description |
| --------------- | ------------------------------------ | ----- | ----------- |
| signature\_data | [bytes](cosmos-grpc-docs.md#bytes)   |       |             |
| timestamp       | [uint64](cosmos-grpc-docs.md#uint64) |       |             |

### DataType

DataType defines the type of solo machine proof being created. This is done to preserve uniqueness of different data sign byte encodings.

| Name                                   | Number | Description                                       |
| -------------------------------------- | ------ | ------------------------------------------------- |
| DATA\_TYPE\_UNINITIALIZED\_UNSPECIFIED | 0      | Default State                                     |
| DATA\_TYPE\_CLIENT\_STATE              | 1      | Data type for client state verification           |
| DATA\_TYPE\_CONSENSUS\_STATE           | 2      | Data type for consensus state verification        |
| DATA\_TYPE\_CONNECTION\_STATE          | 3      | Data type for connection state verification       |
| DATA\_TYPE\_CHANNEL\_STATE             | 4      | Data type for channel state verification          |
| DATA\_TYPE\_PACKET\_COMMITMENT         | 5      | Data type for packet commitment verification      |
| DATA\_TYPE\_PACKET\_ACKNOWLEDGEMENT    | 6      | Data type for packet acknowledgement verification |
| DATA\_TYPE\_PACKET\_RECEIPT\_ABSENCE   | 7      | Data type for packet receipt absence verification |
| DATA\_TYPE\_NEXT\_SEQUENCE\_RECV       | 8      | Data type for next sequence recv verification     |
| DATA\_TYPE\_HEADER                     | 9      | Data type for header verification                 |

[Top](cosmos-grpc-docs.md#top)

## ibc/lightclients/tendermint/v1/tendermint.proto

### ClientState

ClientState from Tendermint tracks the current validator set, latest height, and a possible frozen height.

| Field                              | Type                                                                                   | Label    | Description                                                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| chain\_id                          | [string](cosmos-grpc-docs.md#string)                                                   |          |                                                                                                                          |
| trust\_level                       | [Fraction](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.Fraction)                |          |                                                                                                                          |
| trusting\_period                   | [google.protobuf.Duration](cosmos-grpc-docs.md#google.protobuf.Duration)               |          | duration of the period since the LatestTimestamp during which the submitted headers are valid for upgrade                |
| unbonding\_period                  | [google.protobuf.Duration](cosmos-grpc-docs.md#google.protobuf.Duration)               |          | duration of the staking unbonding period                                                                                 |
| max\_clock\_drift                  | [google.protobuf.Duration](cosmos-grpc-docs.md#google.protobuf.Duration)               |          | defines how much new (untrusted) header's Time can drift into the future.                                                |
| frozen\_height                     | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)             |          | Block height when the client was frozen due to a misbehaviour                                                            |
| latest\_height                     | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)             |          | Latest height the client was updated to                                                                                  |
| consensus\_params                  | [tendermint.abci.ConsensusParams](cosmos-grpc-docs.md#tendermint.abci.ConsensusParams) |          | Consensus params of the chain                                                                                            |
| proof\_specs                       | [ics23.ProofSpec](cosmos-grpc-docs.md#ics23.ProofSpec)                                 | repeated | Proof specifications used in verifying counterparty state                                                                |
| upgrade\_path                      | [string](cosmos-grpc-docs.md#string)                                                   |          | Path at which next upgraded client will be committed                                                                     |
| allow\_update\_after\_expiry       | [bool](cosmos-grpc-docs.md#bool)                                                       |          | This flag, when set to true, will allow governance to recover a client which has expired                                 |
| allow\_update\_after\_misbehaviour | [bool](cosmos-grpc-docs.md#bool)                                                       |          | This flag, when set to true, will allow governance to unfreeze a client whose chain has experienced a misbehaviour event |

### ConsensusState

ConsensusState defines the consensus state from Tendermint.

| Field                  | Type                                                                                       | Label | Description                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------ | ----- | -------------------------------------------------------------------------------------- |
| timestamp              | [google.protobuf.Timestamp](cosmos-grpc-docs.md#google.protobuf.Timestamp)                 |       | timestamp that corresponds to the block height in which the ConsensusState was stored. |
| root                   | [ibc.core.commitment.v1.MerkleRoot](cosmos-grpc-docs.md#ibc.core.commitment.v1.MerkleRoot) |       | commitment root (i.e app hash)                                                         |
| next\_validators\_hash | [bytes](cosmos-grpc-docs.md#bytes)                                                         |       |                                                                                        |

### Fraction

Fraction defines the protobuf message type for tmmath.Fraction

| Field       | Type                               | Label | Description |
| ----------- | ---------------------------------- | ----- | ----------- |
| numerator   | [int64](cosmos-grpc-docs.md#int64) |       |             |
| denominator | [int64](cosmos-grpc-docs.md#int64) |       |             |

### Header

Header defines the Tendermint client consensus Header. It encapsulates all the information necessary to update from a trusted Tendermint ConsensusState. The inclusion of TrustedHeight and TrustedValidators allows this update to process correctly, so long as the ConsensusState for the TrustedHeight exists, this removes race conditions among relayers The SignedHeader and ValidatorSet are the new untrusted update fields for the client. The TrustedHeight is the height of a stored ConsensusState on the client that will be used to verify the new untrusted header. The Trusted ConsensusState must be within the unbonding period of current time in order to correctly verify, and the TrustedValidators must hash to TrustedConsensusState.NextValidatorsHash since that is the last trusted validator set at the TrustedHeight.

| Field               | Type                                                                               | Label | Description |
| ------------------- | ---------------------------------------------------------------------------------- | ----- | ----------- |
| signed\_header      | [tendermint.types.SignedHeader](cosmos-grpc-docs.md#tendermint.types.SignedHeader) |       |             |
| validator\_set      | [tendermint.types.ValidatorSet](cosmos-grpc-docs.md#tendermint.types.ValidatorSet) |       |             |
| trusted\_height     | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height)         |       |             |
| trusted\_validators | [tendermint.types.ValidatorSet](cosmos-grpc-docs.md#tendermint.types.ValidatorSet) |       |             |

### Misbehaviour

Misbehaviour is a wrapper over two conflicting Headers that implements Misbehaviour interface expected by ICS-02

| Field      | Type                                                                | Label | Description |
| ---------- | ------------------------------------------------------------------- | ----- | ----------- |
| client\_id | [string](cosmos-grpc-docs.md#string)                                |       |             |
| chain\_id  | [string](cosmos-grpc-docs.md#string)                                |       |             |
| header\_1  | [Header](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.Header) |       |             |
| header\_2  | [Header](cosmos-grpc-docs.md#ibc.lightclients.tendermint.v1.Header) |       |             |

[Top](cosmos-grpc-docs.md#top)

## ibc/lightclients/localhost/v1/localhost.proto

### ClientState

ClientState defines a loopback (localhost) client. It requires (read-only) access to keys outside the client prefix.

| Field     | Type                                                                       | Label | Description              |
| --------- | -------------------------------------------------------------------------- | ----- | ------------------------ |
| chain\_id | [string](cosmos-grpc-docs.md#string)                                       |       | self chain ID            |
| height    | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | self latest block height |

[Top](cosmos-grpc-docs.md#top)

## ibc/applications/transfer/v1/transfer.proto

### DenomTrace

DenomTrace contains the base denomination for ICS20 fungible tokens and the source tracing information path.

| Field       | Type                                 | Label | Description                                                                                           |
| ----------- | ------------------------------------ | ----- | ----------------------------------------------------------------------------------------------------- |
| path        | [string](cosmos-grpc-docs.md#string) |       | path defines the chain of port/channel identifiers used for tracing the source of the fungible token. |
| base\_denom | [string](cosmos-grpc-docs.md#string) |       | base denomination of the relayed fungible token.                                                      |

### FungibleTokenPacketData

FungibleTokenPacketData defines a struct for the packet payload See FungibleTokenPacketData spec: https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures

| Field    | Type                                 | Label | Description                                    |
| -------- | ------------------------------------ | ----- | ---------------------------------------------- |
| denom    | [string](cosmos-grpc-docs.md#string) |       | the token denomination to be transferred       |
| amount   | [uint64](cosmos-grpc-docs.md#uint64) |       | the token amount to be transferred             |
| sender   | [string](cosmos-grpc-docs.md#string) |       | the sender address                             |
| receiver | [string](cosmos-grpc-docs.md#string) |       | the recipient address on the destination chain |

### MsgTransfer

MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between ICS20 enabled chains. See ICS Spec here: https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures

| Field              | Type                                                                       | Label | Description                                                                                                        |
| ------------------ | -------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------ |
| source\_port       | [string](cosmos-grpc-docs.md#string)                                       |       | the port on which the packet will be sent                                                                          |
| source\_channel    | [string](cosmos-grpc-docs.md#string)                                       |       | the channel by which the packet will be sent                                                                       |
| token              | [cosmos.base.v1beta1.Coin](cosmos-grpc-docs.md#cosmos.base.v1beta1.Coin)   |       | the tokens to be transferred                                                                                       |
| sender             | [string](cosmos-grpc-docs.md#string)                                       |       | the sender address                                                                                                 |
| receiver           | [string](cosmos-grpc-docs.md#string)                                       |       | the recipient address on the destination chain                                                                     |
| timeout\_height    | [ibc.core.client.v1.Height](cosmos-grpc-docs.md#ibc.core.client.v1.Height) |       | Timeout height relative to the current block height. The timeout is disabled when set to 0.                        |
| timeout\_timestamp | [uint64](cosmos-grpc-docs.md#uint64)                                       |       | Timeout timestamp (in nanoseconds) relative to the current block timestamp. The timeout is disabled when set to 0. |

### MsgTransferResponse

MsgTransferResponse defines the Msg/Transfer response type.

### Params

Params defines the set of IBC transfer parameters. NOTE: To prevent a single token from being transferred, set the TransfersEnabled parameter to true and then set the bank module's SendEnabled parameter for the denomination to false.

| Field            | Type                             | Label | Description                                                                         |
| ---------------- | -------------------------------- | ----- | ----------------------------------------------------------------------------------- |
| send\_enabled    | [bool](cosmos-grpc-docs.md#bool) |       | send\_enabled enables or disables all cross-chain token transfers from this chain.  |
| receive\_enabled | [bool](cosmos-grpc-docs.md#bool) |       | receive\_enabled enables or disables all cross-chain token transfers to this chain. |

### Msg

Msg defines the ibc/transfer Msg service.

| Method Name | Request Type                                                                | Response Type                                                                               | Description                                            |
| ----------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Transfer    | [MsgTransfer](cosmos-grpc-docs.md#ibc.applications.transfer.v1.MsgTransfer) | [MsgTransferResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.MsgTransferResponse) | Transfer defines a rpc handler method for MsgTransfer. |

[Top](cosmos-grpc-docs.md#top)

## ibc/applications/transfer/v1/query.proto

### QueryDenomTraceRequest

QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC method

| Field | Type                                 | Label | Description                                                 |
| ----- | ------------------------------------ | ----- | ----------------------------------------------------------- |
| hash  | [string](cosmos-grpc-docs.md#string) |       | hash (in hex format) of the denomination trace information. |

### QueryDenomTraceResponse

QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC method.

| Field        | Type                                                                      | Label | Description                                                        |
| ------------ | ------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------ |
| denom\_trace | [DenomTrace](cosmos-grpc-docs.md#ibc.applications.transfer.v1.DenomTrace) |       | denom\_trace returns the requested denomination trace information. |

### QueryDenomTracesRequest

QueryConnectionsRequest is the request type for the Query/DenomTraces RPC method

| Field      | Type                                                                                               | Label | Description                                                |
| ---------- | -------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageRequest) |       | pagination defines an optional pagination for the request. |

### QueryDenomTracesResponse

QueryConnectionsResponse is the response type for the Query/DenomTraces RPC method.

| Field         | Type                                                                                                 | Label    | Description                                                |
| ------------- | ---------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| denom\_traces | [DenomTrace](cosmos-grpc-docs.md#ibc.applications.transfer.v1.DenomTrace)                            | repeated | denom\_traces returns all denominations trace information. |
| pagination    | [cosmos.base.query.v1beta1.PageResponse](cosmos-grpc-docs.md#cosmos.base.query.v1beta1.PageResponse) |          | pagination defines the pagination in the response.         |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                                                              | Label | Description                                  |
| ------ | ----------------------------------------------------------------- | ----- | -------------------------------------------- |
| params | [Params](cosmos-grpc-docs.md#ibc.applications.transfer.v1.Params) |       | params defines the parameters of the module. |

### Query

Query provides defines the gRPC querier service.

| Method Name | Request Type                                                                                        | Response Type                                                                                         | Description                                               |
| ----------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| DenomTrace  | [QueryDenomTraceRequest](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTraceRequest)   | [QueryDenomTraceResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTraceResponse)   | DenomTrace queries a denomination trace information.      |
| DenomTraces | [QueryDenomTracesRequest](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTracesRequest) | [QueryDenomTracesResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryDenomTracesResponse) | DenomTraces queries all denomination traces.              |
| Params      | [QueryParamsRequest](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryParamsRequest)           | [QueryParamsResponse](cosmos-grpc-docs.md#ibc.applications.transfer.v1.QueryParamsResponse)           | Params queries all parameters of the ibc-transfer module. |

[Top](cosmos-grpc-docs.md#top)

## ibc/applications/transfer/v1/genesis.proto

### GenesisState

GenesisState defines the ibc-transfer genesis state

| Field         | Type                                                                      | Label    | Description |
| ------------- | ------------------------------------------------------------------------- | -------- | ----------- |
| port\_id      | [string](cosmos-grpc-docs.md#string)                                      |          |             |
| denom\_traces | [DenomTrace](cosmos-grpc-docs.md#ibc.applications.transfer.v1.DenomTrace) | repeated |             |
| params        | [Params](cosmos-grpc-docs.md#ibc.applications.transfer.v1.Params)         |          |             |

## Scalar Value Types

| .proto Type | Notes                                                                                                                                           | C++    | Java       | Python      | Go      | C#         | PHP            | Ruby                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- | ----------- | ------- | ---------- | -------------- | ------------------------------ |
| double      |                                                                                                                                                 | double | double     | float       | float64 | double     | float          | Float                          |
| float       |                                                                                                                                                 | float  | float      | float       | float32 | float      | float          | Float                          |
| int32       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| int64       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| uint32      | Uses variable-length encoding.                                                                                                                  | uint32 | int        | int/long    | uint32  | uint       | integer        | Bignum or Fixnum (as required) |
| uint64      | Uses variable-length encoding.                                                                                                                  | uint64 | long       | int/long    | uint64  | ulong      | integer/string | Bignum or Fixnum (as required) |
| sint32      | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.                            | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| sint64      | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.                            | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| fixed32     | Always four bytes. More efficient than uint32 if values are often greater than 2^28.                                                            | uint32 | int        | int         | uint32  | uint       | integer        | Bignum or Fixnum (as required) |
| fixed64     | Always eight bytes. More efficient than uint64 if values are often greater than 2^56.                                                           | uint64 | long       | int/long    | uint64  | ulong      | integer/string | Bignum                         |
| sfixed32    | Always four bytes.                                                                                                                              | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| sfixed64    | Always eight bytes.                                                                                                                             | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| bool        |                                                                                                                                                 | bool   | boolean    | boolean     | bool    | bool       | boolean        | TrueClass/FalseClass           |
| string      | A string must always contain UTF-8 encoded or 7-bit ASCII text.                                                                                 | string | String     | str/unicode | string  | string     | string         | String (UTF-8)                 |
| bytes       | May contain any arbitrary sequence of bytes.                                                                                                    | string | ByteString | str         | \[]byte | ByteString | string         | String (ASCII-8BIT)            |
