# Protocol Documentation

## Table of Contents

* [cosmos/crypto/multisig/v1beta1/multisig.proto](broken-reference)
  * [CompactBitArray](broken-reference)
  * [MultiSignature](broken-reference)
* [cosmos/crypto/multisig/keys.proto](broken-reference)
  * [LegacyAminoPubKey](broken-reference)
* [cosmos/crypto/secp256k1/keys.proto](broken-reference)
  * [PrivKey](broken-reference)
  * [PubKey](broken-reference)
* [cosmos/crypto/ed25519/keys.proto](broken-reference)
  * [PrivKey](broken-reference)
  * [PubKey](broken-reference)
* [cosmos/upgrade/v1beta1/upgrade.proto](broken-reference)
  * [CancelSoftwareUpgradeProposal](broken-reference)
  * [Plan](broken-reference)
  * [SoftwareUpgradeProposal](broken-reference)
* [cosmos/upgrade/v1beta1/query.proto](broken-reference)
  * [QueryAppliedPlanRequest](broken-reference)
  * [QueryAppliedPlanResponse](broken-reference)
  * [QueryCurrentPlanRequest](broken-reference)
  * [QueryCurrentPlanResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/mint/v1beta1/query.proto](broken-reference)
  * [QueryAnnualProvisionsRequest](broken-reference)
  * [QueryAnnualProvisionsResponse](broken-reference)
  * [QueryInflationRequest](broken-reference)
  * [QueryInflationResponse](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/mint/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [cosmos/mint/v1beta1/mint.proto](broken-reference)
  * [Minter](broken-reference)
  * [Params](broken-reference)
* [cosmos/evidence/v1beta1/tx.proto](broken-reference)
  * [MsgSubmitEvidence](broken-reference)
  * [MsgSubmitEvidenceResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/evidence/v1beta1/evidence.proto](broken-reference)
  * [Equivocation](broken-reference)
* [cosmos/evidence/v1beta1/query.proto](broken-reference)
  * [QueryAllEvidenceRequest](broken-reference)
  * [QueryAllEvidenceResponse](broken-reference)
  * [QueryEvidenceRequest](broken-reference)
  * [QueryEvidenceResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/evidence/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [cosmos/auth/v1beta1/query.proto](broken-reference)
  * [QueryAccountRequest](broken-reference)
  * [QueryAccountResponse](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/auth/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [cosmos/auth/v1beta1/auth.proto](broken-reference)
  * [BaseAccount](broken-reference)
  * [ModuleAccount](broken-reference)
  * [Params](broken-reference)
* [cosmos/bank/v1beta1/tx.proto](broken-reference)
  * [MsgMultiSend](broken-reference)
  * [MsgMultiSendResponse](broken-reference)
  * [MsgSend](broken-reference)
  * [MsgSendResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/bank/v1beta1/bank.proto](broken-reference)
  * [DenomUnit](broken-reference)
  * [Input](broken-reference)
  * [Metadata](broken-reference)
  * [Output](broken-reference)
  * [Params](broken-reference)
  * [SendEnabled](broken-reference)
  * [Supply](broken-reference)
* [cosmos/bank/v1beta1/query.proto](broken-reference)
  * [QueryAllBalancesRequest](broken-reference)
  * [QueryAllBalancesResponse](broken-reference)
  * [QueryBalanceRequest](broken-reference)
  * [QueryBalanceResponse](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [QuerySupplyOfRequest](broken-reference)
  * [QuerySupplyOfResponse](broken-reference)
  * [QueryTotalSupplyRequest](broken-reference)
  * [QueryTotalSupplyResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/bank/v1beta1/genesis.proto](broken-reference)
  * [Balance](broken-reference)
  * [GenesisState](broken-reference)
* [cosmos/capability/v1beta1/capability.proto](broken-reference)
  * [Capability](broken-reference)
  * [CapabilityOwners](broken-reference)
  * [Owner](broken-reference)
* [cosmos/capability/v1beta1/genesis.proto](broken-reference)
  * [GenesisOwners](broken-reference)
  * [GenesisState](broken-reference)
* [cosmos/distribution/v1beta1/tx.proto](broken-reference)
  * [MsgFundCommunityPool](broken-reference)
  * [MsgFundCommunityPoolResponse](broken-reference)
  * [MsgSetWithdrawAddress](broken-reference)
  * [MsgSetWithdrawAddressResponse](broken-reference)
  * [MsgWithdrawDelegatorReward](broken-reference)
  * [MsgWithdrawDelegatorRewardResponse](broken-reference)
  * [MsgWithdrawValidatorCommission](broken-reference)
  * [MsgWithdrawValidatorCommissionResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/distribution/v1beta1/distribution.proto](broken-reference)
  * [CommunityPoolSpendProposal](broken-reference)
  * [CommunityPoolSpendProposalWithDeposit](broken-reference)
  * [DelegationDelegatorReward](broken-reference)
  * [DelegatorStartingInfo](broken-reference)
  * [FeePool](broken-reference)
  * [Params](broken-reference)
  * [ValidatorAccumulatedCommission](broken-reference)
  * [ValidatorCurrentRewards](broken-reference)
  * [ValidatorHistoricalRewards](broken-reference)
  * [ValidatorOutstandingRewards](broken-reference)
  * [ValidatorSlashEvent](broken-reference)
  * [ValidatorSlashEvents](broken-reference)
* [cosmos/distribution/v1beta1/query.proto](broken-reference)
  * [QueryCommunityPoolRequest](broken-reference)
  * [QueryCommunityPoolResponse](broken-reference)
  * [QueryDelegationRewardsRequest](broken-reference)
  * [QueryDelegationRewardsResponse](broken-reference)
  * [QueryDelegationTotalRewardsRequest](broken-reference)
  * [QueryDelegationTotalRewardsResponse](broken-reference)
  * [QueryDelegatorValidatorsRequest](broken-reference)
  * [QueryDelegatorValidatorsResponse](broken-reference)
  * [QueryDelegatorWithdrawAddressRequest](broken-reference)
  * [QueryDelegatorWithdrawAddressResponse](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [QueryValidatorCommissionRequest](broken-reference)
  * [QueryValidatorCommissionResponse](broken-reference)
  * [QueryValidatorOutstandingRewardsRequest](broken-reference)
  * [QueryValidatorOutstandingRewardsResponse](broken-reference)
  * [QueryValidatorSlashesRequest](broken-reference)
  * [QueryValidatorSlashesResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/distribution/v1beta1/genesis.proto](broken-reference)
  * [DelegatorStartingInfoRecord](broken-reference)
  * [DelegatorWithdrawInfo](broken-reference)
  * [GenesisState](broken-reference)
  * [ValidatorAccumulatedCommissionRecord](broken-reference)
  * [ValidatorCurrentRewardsRecord](broken-reference)
  * [ValidatorHistoricalRewardsRecord](broken-reference)
  * [ValidatorOutstandingRewardsRecord](broken-reference)
  * [ValidatorSlashEventRecord](broken-reference)
* [cosmos/crisis/v1beta1/tx.proto](broken-reference)
  * [MsgVerifyInvariant](broken-reference)
  * [MsgVerifyInvariantResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/crisis/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [cosmos/tx/signing/v1beta1/signing.proto](broken-reference)
  * [SignatureDescriptor](broken-reference)
  * [SignatureDescriptor.Data](broken-reference)
  * [SignatureDescriptor.Data.Multi](broken-reference)
  * [SignatureDescriptor.Data.Single](broken-reference)
  * [SignatureDescriptors](broken-reference)
  * [SignMode](broken-reference)
* [cosmos/tx/v1beta1/tx.proto](broken-reference)
  * [AuthInfo](broken-reference)
  * [Fee](broken-reference)
  * [ModeInfo](broken-reference)
  * [ModeInfo.Multi](broken-reference)
  * [ModeInfo.Single](broken-reference)
  * [SignDoc](broken-reference)
  * [SignerInfo](broken-reference)
  * [Tx](broken-reference)
  * [TxBody](broken-reference)
  * [TxRaw](broken-reference)
* [cosmos/vesting/v1beta1/tx.proto](broken-reference)
  * [MsgCreateVestingAccount](broken-reference)
  * [MsgCreateVestingAccountResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/vesting/v1beta1/vesting.proto](broken-reference)
  * [BaseVestingAccount](broken-reference)
  * [ContinuousVestingAccount](broken-reference)
  * [DelayedVestingAccount](broken-reference)
  * [Period](broken-reference)
  * [PeriodicVestingAccount](broken-reference)
* [cosmos/staking/v1beta1/tx.proto](broken-reference)
  * [MsgBeginRedelegate](broken-reference)
  * [MsgBeginRedelegateResponse](broken-reference)
  * [MsgCreateValidator](broken-reference)
  * [MsgCreateValidatorResponse](broken-reference)
  * [MsgDelegate](broken-reference)
  * [MsgDelegateResponse](broken-reference)
  * [MsgEditValidator](broken-reference)
  * [MsgEditValidatorResponse](broken-reference)
  * [MsgUndelegate](broken-reference)
  * [MsgUndelegateResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/staking/v1beta1/query.proto](broken-reference)
  * [QueryDelegationRequest](broken-reference)
  * [QueryDelegationResponse](broken-reference)
  * [QueryDelegatorDelegationsRequest](broken-reference)
  * [QueryDelegatorDelegationsResponse](broken-reference)
  * [QueryDelegatorUnbondingDelegationsRequest](broken-reference)
  * [QueryDelegatorUnbondingDelegationsResponse](broken-reference)
  * [QueryDelegatorValidatorRequest](broken-reference)
  * [QueryDelegatorValidatorResponse](broken-reference)
  * [QueryDelegatorValidatorsRequest](broken-reference)
  * [QueryDelegatorValidatorsResponse](broken-reference)
  * [QueryHistoricalInfoRequest](broken-reference)
  * [QueryHistoricalInfoResponse](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [QueryPoolRequest](broken-reference)
  * [QueryPoolResponse](broken-reference)
  * [QueryRedelegationsRequest](broken-reference)
  * [QueryRedelegationsResponse](broken-reference)
  * [QueryUnbondingDelegationRequest](broken-reference)
  * [QueryUnbondingDelegationResponse](broken-reference)
  * [QueryValidatorDelegationsRequest](broken-reference)
  * [QueryValidatorDelegationsResponse](broken-reference)
  * [QueryValidatorRequest](broken-reference)
  * [QueryValidatorResponse](broken-reference)
  * [QueryValidatorUnbondingDelegationsRequest](broken-reference)
  * [QueryValidatorUnbondingDelegationsResponse](broken-reference)
  * [QueryValidatorsRequest](broken-reference)
  * [QueryValidatorsResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/staking/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
  * [LastValidatorPower](broken-reference)
* [cosmos/staking/v1beta1/staking.proto](broken-reference)
  * [Commission](broken-reference)
  * [CommissionRates](broken-reference)
  * [DVPair](broken-reference)
  * [DVPairs](broken-reference)
  * [DVVTriplet](broken-reference)
  * [DVVTriplets](broken-reference)
  * [Delegation](broken-reference)
  * [DelegationResponse](broken-reference)
  * [Description](broken-reference)
  * [HistoricalInfo](broken-reference)
  * [Params](broken-reference)
  * [Pool](broken-reference)
  * [Redelegation](broken-reference)
  * [RedelegationEntry](broken-reference)
  * [RedelegationEntryResponse](broken-reference)
  * [RedelegationResponse](broken-reference)
  * [UnbondingDelegation](broken-reference)
  * [UnbondingDelegationEntry](broken-reference)
  * [ValAddresses](broken-reference)
  * [Validator](broken-reference)
  * [BondStatus](broken-reference)
* [cosmos/genutil/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [cosmos/params/v1beta1/query.proto](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/params/v1beta1/params.proto](broken-reference)
  * [ParamChange](broken-reference)
  * [ParameterChangeProposal](broken-reference)
* [cosmos/slashing/v1beta1/tx.proto](broken-reference)
  * [MsgUnjail](broken-reference)
  * [MsgUnjailResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/slashing/v1beta1/slashing.proto](broken-reference)
  * [Params](broken-reference)
  * [ValidatorSigningInfo](broken-reference)
* [cosmos/slashing/v1beta1/query.proto](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [QuerySigningInfoRequest](broken-reference)
  * [QuerySigningInfoResponse](broken-reference)
  * [QuerySigningInfosRequest](broken-reference)
  * [QuerySigningInfosResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/slashing/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
  * [MissedBlock](broken-reference)
  * [SigningInfo](broken-reference)
  * [ValidatorMissedBlocks](broken-reference)
* [cosmos/base/abci/v1beta1/abci.proto](broken-reference)
  * [ABCIMessageLog](broken-reference)
  * [Attribute](broken-reference)
  * [GasInfo](broken-reference)
  * [MsgData](broken-reference)
  * [Result](broken-reference)
  * [SearchTxsResult](broken-reference)
  * [SimulationResponse](broken-reference)
  * [StringEvent](broken-reference)
  * [TxMsgData](broken-reference)
  * [TxResponse](broken-reference)
* [cosmos/base/kv/v1beta1/kv.proto](broken-reference)
  * [Pair](broken-reference)
  * [Pairs](broken-reference)
* [cosmos/base/snapshots/v1beta1/snapshot.proto](broken-reference)
  * [Metadata](broken-reference)
  * [Snapshot](broken-reference)
* [cosmos/base/simulate/v1beta1/simulate.proto](broken-reference)
  * [SimulateRequest](broken-reference)
  * [SimulateResponse](broken-reference)
  * [SimulateService](broken-reference)
* [cosmos/base/v1beta1/coin.proto](broken-reference)
  * [Coin](broken-reference)
  * [DecCoin](broken-reference)
  * [DecProto](broken-reference)
  * [IntProto](broken-reference)
* [cosmos/base/query/v1beta1/pagination.proto](broken-reference)
  * [PageRequest](broken-reference)
  * [PageResponse](broken-reference)
* [cosmos/base/store/v1beta1/commit\_info.proto](broken-reference)
  * [CommitID](broken-reference)
  * [CommitInfo](broken-reference)
  * [StoreInfo](broken-reference)
* [cosmos/base/store/v1beta1/snapshot.proto](broken-reference)
  * [SnapshotIAVLItem](broken-reference)
  * [SnapshotItem](broken-reference)
  * [SnapshotStoreItem](broken-reference)
* [cosmos/base/reflection/v1beta1/reflection.proto](broken-reference)
  * [ListAllInterfacesRequest](broken-reference)
  * [ListAllInterfacesResponse](broken-reference)
  * [ListImplementationsRequest](broken-reference)
  * [ListImplementationsResponse](broken-reference)
  * [ReflectionService](broken-reference)
* [cosmos/gov/v1beta1/tx.proto](broken-reference)
  * [MsgDeposit](broken-reference)
  * [MsgDepositResponse](broken-reference)
  * [MsgSubmitProposal](broken-reference)
  * [MsgSubmitProposalResponse](broken-reference)
  * [MsgVote](broken-reference)
  * [MsgVoteResponse](broken-reference)
  * [Msg](broken-reference)
* [cosmos/gov/v1beta1/gov.proto](broken-reference)
  * [Deposit](broken-reference)
  * [DepositParams](broken-reference)
  * [Proposal](broken-reference)
  * [TallyParams](broken-reference)
  * [TallyResult](broken-reference)
  * [TextProposal](broken-reference)
  * [Vote](broken-reference)
  * [VotingParams](broken-reference)
  * [ProposalStatus](broken-reference)
  * [VoteOption](broken-reference)
* [cosmos/gov/v1beta1/query.proto](broken-reference)
  * [QueryDepositRequest](broken-reference)
  * [QueryDepositResponse](broken-reference)
  * [QueryDepositsRequest](broken-reference)
  * [QueryDepositsResponse](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [QueryProposalRequest](broken-reference)
  * [QueryProposalResponse](broken-reference)
  * [QueryProposalsRequest](broken-reference)
  * [QueryProposalsResponse](broken-reference)
  * [QueryTallyResultRequest](broken-reference)
  * [QueryTallyResultResponse](broken-reference)
  * [QueryVoteRequest](broken-reference)
  * [QueryVoteResponse](broken-reference)
  * [QueryVotesRequest](broken-reference)
  * [QueryVotesResponse](broken-reference)
  * [Query](broken-reference)
* [cosmos/gov/v1beta1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [ibc/core/types/v1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [ibc/core/connection/v1/query.proto](broken-reference)
  * [QueryClientConnectionsRequest](broken-reference)
  * [QueryClientConnectionsResponse](broken-reference)
  * [QueryConnectionClientStateRequest](broken-reference)
  * [QueryConnectionClientStateResponse](broken-reference)
  * [QueryConnectionConsensusStateRequest](broken-reference)
  * [QueryConnectionConsensusStateResponse](broken-reference)
  * [QueryConnectionRequest](broken-reference)
  * [QueryConnectionResponse](broken-reference)
  * [QueryConnectionsRequest](broken-reference)
  * [QueryConnectionsResponse](broken-reference)
  * [Query](broken-reference)
* [ibc/core/connection/v1/connection.proto](broken-reference)
  * [ClientPaths](broken-reference)
  * [ConnectionEnd](broken-reference)
  * [ConnectionPaths](broken-reference)
  * [Counterparty](broken-reference)
  * [IdentifiedConnection](broken-reference)
  * [MsgConnectionOpenAck](broken-reference)
  * [MsgConnectionOpenAckResponse](broken-reference)
  * [MsgConnectionOpenConfirm](broken-reference)
  * [MsgConnectionOpenConfirmResponse](broken-reference)
  * [MsgConnectionOpenInit](broken-reference)
  * [MsgConnectionOpenInitResponse](broken-reference)
  * [MsgConnectionOpenTry](broken-reference)
  * [MsgConnectionOpenTryResponse](broken-reference)
  * [Version](broken-reference)
  * [State](broken-reference)
  * [Msg](broken-reference)
* [ibc/core/connection/v1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [ibc/core/commitment/v1/commitment.proto](broken-reference)
  * [Key](broken-reference)
  * [KeyPath](broken-reference)
  * [MerklePath](broken-reference)
  * [MerklePrefix](broken-reference)
  * [MerkleProof](broken-reference)
  * [MerkleRoot](broken-reference)
  * [KeyEncoding](broken-reference)
* [ibc/core/channel/v1/query.proto](broken-reference)
  * [QueryChannelClientStateRequest](broken-reference)
  * [QueryChannelClientStateResponse](broken-reference)
  * [QueryChannelConsensusStateRequest](broken-reference)
  * [QueryChannelConsensusStateResponse](broken-reference)
  * [QueryChannelRequest](broken-reference)
  * [QueryChannelResponse](broken-reference)
  * [QueryChannelsRequest](broken-reference)
  * [QueryChannelsResponse](broken-reference)
  * [QueryConnectionChannelsRequest](broken-reference)
  * [QueryConnectionChannelsResponse](broken-reference)
  * [QueryNextSequenceReceiveRequest](broken-reference)
  * [QueryNextSequenceReceiveResponse](broken-reference)
  * [QueryPacketAcknowledgementRequest](broken-reference)
  * [QueryPacketAcknowledgementResponse](broken-reference)
  * [QueryPacketCommitmentRequest](broken-reference)
  * [QueryPacketCommitmentResponse](broken-reference)
  * [QueryPacketCommitmentsRequest](broken-reference)
  * [QueryPacketCommitmentsResponse](broken-reference)
  * [QueryUnreceivedPacketsRequest](broken-reference)
  * [QueryUnreceivedPacketsResponse](broken-reference)
  * [QueryUnrelayedAcksRequest](broken-reference)
  * [QueryUnrelayedAcksResponse](broken-reference)
  * [Query](broken-reference)
* [ibc/core/channel/v1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
  * [PacketSequence](broken-reference)
* [ibc/core/channel/v1/channel.proto](broken-reference)
  * [Acknowledgement](broken-reference)
  * [Channel](broken-reference)
  * [Counterparty](broken-reference)
  * [IdentifiedChannel](broken-reference)
  * [MsgAcknowledgement](broken-reference)
  * [MsgAcknowledgementResponse](broken-reference)
  * [MsgChannelCloseConfirm](broken-reference)
  * [MsgChannelCloseConfirmResponse](broken-reference)
  * [MsgChannelCloseInit](broken-reference)
  * [MsgChannelCloseInitResponse](broken-reference)
  * [MsgChannelOpenAck](broken-reference)
  * [MsgChannelOpenAckResponse](broken-reference)
  * [MsgChannelOpenConfirm](broken-reference)
  * [MsgChannelOpenConfirmResponse](broken-reference)
  * [MsgChannelOpenInit](broken-reference)
  * [MsgChannelOpenInitResponse](broken-reference)
  * [MsgChannelOpenTry](broken-reference)
  * [MsgChannelOpenTryResponse](broken-reference)
  * [MsgRecvPacket](broken-reference)
  * [MsgRecvPacketResponse](broken-reference)
  * [MsgTimeout](broken-reference)
  * [MsgTimeoutOnClose](broken-reference)
  * [MsgTimeoutOnCloseResponse](broken-reference)
  * [MsgTimeoutResponse](broken-reference)
  * [Packet](broken-reference)
  * [PacketAckCommitment](broken-reference)
  * [Order](broken-reference)
  * [State](broken-reference)
  * [Msg](broken-reference)
* [ibc/core/client/v1/client.proto](broken-reference)
  * [ClientConsensusStates](broken-reference)
  * [ClientUpdateProposal](broken-reference)
  * [ConsensusStateWithHeight](broken-reference)
  * [Height](broken-reference)
  * [IdentifiedClientState](broken-reference)
  * [MsgCreateClient](broken-reference)
  * [MsgCreateClientResponse](broken-reference)
  * [MsgSubmitMisbehaviour](broken-reference)
  * [MsgSubmitMisbehaviourResponse](broken-reference)
  * [MsgUpdateClient](broken-reference)
  * [MsgUpdateClientResponse](broken-reference)
  * [MsgUpgradeClient](broken-reference)
  * [MsgUpgradeClientResponse](broken-reference)
  * [Msg](broken-reference)
* [ibc/core/client/v1/query.proto](broken-reference)
  * [QueryClientStateRequest](broken-reference)
  * [QueryClientStateResponse](broken-reference)
  * [QueryClientStatesRequest](broken-reference)
  * [QueryClientStatesResponse](broken-reference)
  * [QueryConsensusStateRequest](broken-reference)
  * [QueryConsensusStateResponse](broken-reference)
  * [QueryConsensusStatesRequest](broken-reference)
  * [QueryConsensusStatesResponse](broken-reference)
  * [Query](broken-reference)
* [ibc/core/client/v1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [ibc/lightclients/solomachine/v1/solomachine.proto](broken-reference)
  * [ChannelStateData](broken-reference)
  * [ClientState](broken-reference)
  * [ClientStateData](broken-reference)
  * [ConnectionStateData](broken-reference)
  * [ConsensusState](broken-reference)
  * [ConsensusStateData](broken-reference)
  * [Header](broken-reference)
  * [HeaderData](broken-reference)
  * [Misbehaviour](broken-reference)
  * [NextSequenceRecvData](broken-reference)
  * [PacketAcknowledgementData](broken-reference)
  * [PacketCommitmentData](broken-reference)
  * [PacketReceiptAbsenceData](broken-reference)
  * [SignBytes](broken-reference)
  * [SignatureAndData](broken-reference)
  * [TimestampedSignatureData](broken-reference)
  * [DataType](broken-reference)
* [ibc/lightclients/tendermint/v1/tendermint.proto](broken-reference)
  * [ClientState](broken-reference)
  * [ConsensusState](broken-reference)
  * [Fraction](broken-reference)
  * [Header](broken-reference)
  * [Misbehaviour](broken-reference)
* [ibc/lightclients/localhost/v1/localhost.proto](broken-reference)
  * [ClientState](broken-reference)
* [ibc/applications/transfer/v1/transfer.proto](broken-reference)
  * [DenomTrace](broken-reference)
  * [FungibleTokenPacketData](broken-reference)
  * [MsgTransfer](broken-reference)
  * [MsgTransferResponse](broken-reference)
  * [Params](broken-reference)
  * [Msg](broken-reference)
* [ibc/applications/transfer/v1/query.proto](broken-reference)
  * [QueryDenomTraceRequest](broken-reference)
  * [QueryDenomTraceResponse](broken-reference)
  * [QueryDenomTracesRequest](broken-reference)
  * [QueryDenomTracesResponse](broken-reference)
  * [QueryParamsRequest](broken-reference)
  * [QueryParamsResponse](broken-reference)
  * [Query](broken-reference)
* [ibc/applications/transfer/v1/genesis.proto](broken-reference)
  * [GenesisState](broken-reference)
* [Scalar Value Types](broken-reference)

[Top](broken-reference)

## cosmos/crypto/multisig/v1beta1/multisig.proto

### CompactBitArray

CompactBitArray is an implementation of a space efficient bit array. This is used to ensure that the encoded data takes up a minimal amount of space after proto encoding. This is not thread safe, and is not intended for concurrent usage.

| Field               | Type                       | Label | Description |
| ------------------- | -------------------------- | ----- | ----------- |
| extra\_bits\_stored | [uint32](broken-reference) |       |             |
| elems               | [bytes](broken-reference)  |       |             |

### MultiSignature

MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey. See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers signed and with which modes.

| Field      | Type                      | Label    | Description |
| ---------- | ------------------------- | -------- | ----------- |
| signatures | [bytes](broken-reference) | repeated |             |

[Top](broken-reference)

## cosmos/crypto/multisig/keys.proto

### LegacyAminoPubKey

LegacyAminoPubKey specifies a public key type which nests multiple public keys and a threshold, it uses legacy amino address rules.

| Field        | Type                                    | Label    | Description |
| ------------ | --------------------------------------- | -------- | ----------- |
| threshold    | [uint32](broken-reference)              |          |             |
| public\_keys | [google.protobuf.Any](broken-reference) | repeated |             |

[Top](broken-reference)

## cosmos/crypto/secp256k1/keys.proto

### PrivKey

PrivKey defines a secp256k1 private key.

| Field | Type                      | Label | Description |
| ----- | ------------------------- | ----- | ----------- |
| key   | [bytes](broken-reference) |       |             |

### PubKey

PubKey defines a secp256k1 public key Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte if the y-coordinate is the lexicographically largest of the two associated with the x-coordinate. Otherwise the first byte is a 0x03. This prefix is followed with the x-coordinate.

| Field | Type                      | Label | Description |
| ----- | ------------------------- | ----- | ----------- |
| key   | [bytes](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/crypto/ed25519/keys.proto

### PrivKey

PrivKey defines a ed25519 private key.

| Field | Type                      | Label | Description |
| ----- | ------------------------- | ----- | ----------- |
| key   | [bytes](broken-reference) |       |             |

### PubKey

PubKey defines a ed25519 public key Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte if the y-coordinate is the lexicographically largest of the two associated with the x-coordinate. Otherwise the first byte is a 0x03. This prefix is followed with the x-coordinate.

| Field | Type                      | Label | Description |
| ----- | ------------------------- | ----- | ----------- |
| key   | [bytes](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/upgrade/v1beta1/upgrade.proto

### CancelSoftwareUpgradeProposal

CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software upgrade.

| Field       | Type                       | Label | Description |
| ----------- | -------------------------- | ----- | ----------- |
| title       | [string](broken-reference) |       |             |
| description | [string](broken-reference) |       |             |

### Plan

Plan specifies information about a planned upgrade and when it should occur.

| Field                   | Type                                          | Label | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | --------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                    | [string](broken-reference)                    |       | Sets the name for the upgrade. This name will be used by the upgraded version of the software to apply any special "on-upgrade" commands during the first BeginBlock method after the upgrade is applied. It is also used to detect whether a software version can handle a given upgrade. If no upgrade handler with this name has been set in the software, it will be assumed that the software is out-of-date when the upgrade Time or Height is reached and the software will exit. |
| time                    | [google.protobuf.Timestamp](broken-reference) |       | The time after which the upgrade must be performed. Leave set to its zero value to use a pre-defined Height instead.                                                                                                                                                                                                                                                                                                                                                                     |
| height                  | [int64](broken-reference)                     |       | The height at which the upgrade must be performed. Only used if Time is not set.                                                                                                                                                                                                                                                                                                                                                                                                         |
| info                    | [string](broken-reference)                    |       | Any application specific upgrade info to be included on-chain such as a git commit that validators could automatically upgrade to                                                                                                                                                                                                                                                                                                                                                        |
| upgraded\_client\_state | [google.protobuf.Any](broken-reference)       |       | IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs, so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the previous version of the chain. This will allow IBC connections to persist smoothly across planned chain upgrades                                                                  |

### SoftwareUpgradeProposal

SoftwareUpgradeProposal is a gov Content type for initiating a software upgrade.

| Field       | Type                       | Label | Description |
| ----------- | -------------------------- | ----- | ----------- |
| title       | [string](broken-reference) |       |             |
| description | [string](broken-reference) |       |             |
| plan        | [Plan](broken-reference)   |       |             |

[Top](broken-reference)

## cosmos/upgrade/v1beta1/query.proto

### QueryAppliedPlanRequest

QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC method.

| Field | Type                       | Label | Description                                        |
| ----- | -------------------------- | ----- | -------------------------------------------------- |
| name  | [string](broken-reference) |       | name is the name of the applied plan to query for. |

### QueryAppliedPlanResponse

QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC method.

| Field  | Type                      | Label | Description                                               |
| ------ | ------------------------- | ----- | --------------------------------------------------------- |
| height | [int64](broken-reference) |       | height is the block height at which the plan was applied. |

### QueryCurrentPlanRequest

QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC method.

### QueryCurrentPlanResponse

QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC method.

| Field | Type                     | Label | Description                       |
| ----- | ------------------------ | ----- | --------------------------------- |
| plan  | [Plan](broken-reference) |       | plan is the current upgrade plan. |

### Query

Query defines the gRPC upgrade querier service.

| Method Name | Request Type                                | Response Type                                | Description                                                        |
| ----------- | ------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------ |
| CurrentPlan | [QueryCurrentPlanRequest](broken-reference) | [QueryCurrentPlanResponse](broken-reference) | CurrentPlan queries the current upgrade plan.                      |
| AppliedPlan | [QueryAppliedPlanRequest](broken-reference) | [QueryAppliedPlanResponse](broken-reference) | AppliedPlan queries a previously applied upgrade plan by its name. |

[Top](broken-reference)

## cosmos/mint/v1beta1/query.proto

### QueryAnnualProvisionsRequest

QueryAnnualProvisionsRequest is the request type for the Query/AnnualProvisions RPC method.

### QueryAnnualProvisionsResponse

QueryAnnualProvisionsResponse is the response type for the Query/AnnualProvisions RPC method.

| Field              | Type                      | Label | Description                                                        |
| ------------------ | ------------------------- | ----- | ------------------------------------------------------------------ |
| annual\_provisions | [bytes](broken-reference) |       | annual\_provisions is the current minting annual provisions value. |

### QueryInflationRequest

QueryInflationRequest is the request type for the Query/Inflation RPC method.

### QueryInflationResponse

QueryInflationResponse is the response type for the Query/Inflation RPC method.

| Field     | Type                      | Label | Description                                       |
| --------- | ------------------------- | ----- | ------------------------------------------------- |
| inflation | [bytes](broken-reference) |       | inflation is the current minting inflation value. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                       | Label | Description                                  |
| ------ | -------------------------- | ----- | -------------------------------------------- |
| params | [Params](broken-reference) |       | params defines the parameters of the module. |

### Query

Query provides defines the gRPC querier service.

| Method Name      | Request Type                                     | Response Type                                     | Description                                               |
| ---------------- | ------------------------------------------------ | ------------------------------------------------- | --------------------------------------------------------- |
| Params           | [QueryParamsRequest](broken-reference)           | [QueryParamsResponse](broken-reference)           | Params returns the total set of minting parameters.       |
| Inflation        | [QueryInflationRequest](broken-reference)        | [QueryInflationResponse](broken-reference)        | Inflation returns the current minting inflation value.    |
| AnnualProvisions | [QueryAnnualProvisionsRequest](broken-reference) | [QueryAnnualProvisionsResponse](broken-reference) | AnnualProvisions current minting annual provisions value. |

[Top](broken-reference)

## cosmos/mint/v1beta1/genesis.proto

### GenesisState

GenesisState defines the mint module's genesis state.

| Field  | Type                       | Label | Description                                                  |
| ------ | -------------------------- | ----- | ------------------------------------------------------------ |
| minter | [Minter](broken-reference) |       | minter is a space for holding current inflation information. |
| params | [Params](broken-reference) |       | params defines all the paramaters of the module.             |

[Top](broken-reference)

## cosmos/mint/v1beta1/mint.proto

### Minter

Minter represents the minting state.

| Field              | Type                       | Label | Description                        |
| ------------------ | -------------------------- | ----- | ---------------------------------- |
| inflation          | [string](broken-reference) |       | current annual inflation rate      |
| annual\_provisions | [string](broken-reference) |       | current annual expected provisions |

### Params

Params holds parameters for the mint module.

| Field                   | Type                       | Label | Description                             |
| ----------------------- | -------------------------- | ----- | --------------------------------------- |
| mint\_denom             | [string](broken-reference) |       | type of coin to mint                    |
| inflation\_rate\_change | [string](broken-reference) |       | maximum annual change in inflation rate |
| inflation\_max          | [string](broken-reference) |       | maximum inflation rate                  |
| inflation\_min          | [string](broken-reference) |       | minimum inflation rate                  |
| goal\_bonded            | [string](broken-reference) |       | goal of percent bonded atoms            |
| blocks\_per\_year       | [uint64](broken-reference) |       | expected blocks per year                |

[Top](broken-reference)

## cosmos/evidence/v1beta1/tx.proto

### MsgSubmitEvidence

MsgSubmitEvidence represents a message that supports submitting arbitrary Evidence of misbehavior such as equivocation or counterfactual signing.

| Field     | Type                                    | Label | Description |
| --------- | --------------------------------------- | ----- | ----------- |
| submitter | [string](broken-reference)              |       |             |
| evidence  | [google.protobuf.Any](broken-reference) |       |             |

### MsgSubmitEvidenceResponse

MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.

| Field | Type                      | Label | Description                            |
| ----- | ------------------------- | ----- | -------------------------------------- |
| hash  | [bytes](broken-reference) |       | hash defines the hash of the evidence. |

### Msg

Msg defines the evidence Msg service.

| Method Name    | Request Type                          | Response Type                                 | Description                                                                                                 |
| -------------- | ------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SubmitEvidence | [MsgSubmitEvidence](broken-reference) | [MsgSubmitEvidenceResponse](broken-reference) | SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or counterfactual signing. |

[Top](broken-reference)

## cosmos/evidence/v1beta1/evidence.proto

### Equivocation

Equivocation implements the Evidence interface and defines evidence of double signing misbehavior.

| Field              | Type                                          | Label | Description |
| ------------------ | --------------------------------------------- | ----- | ----------- |
| height             | [int64](broken-reference)                     |       |             |
| time               | [google.protobuf.Timestamp](broken-reference) |       |             |
| power              | [int64](broken-reference)                     |       |             |
| consensus\_address | [string](broken-reference)                    |       |             |

[Top](broken-reference)

## cosmos/evidence/v1beta1/query.proto

### QueryAllEvidenceRequest

QueryEvidenceRequest is the request type for the Query/AllEvidence RPC method.

| Field      | Type                                                      | Label | Description                                                |
| ---------- | --------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request. |

### QueryAllEvidenceResponse

QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC method.

| Field      | Type                                                       | Label    | Description                                        |
| ---------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| evidence   | [google.protobuf.Any](broken-reference)                    | repeated | evidence returns all evidences.                    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryEvidenceRequest

QueryEvidenceRequest is the request type for the Query/Evidence RPC method.

| Field          | Type                      | Label | Description                                                |
| -------------- | ------------------------- | ----- | ---------------------------------------------------------- |
| evidence\_hash | [bytes](broken-reference) |       | evidence\_hash defines the hash of the requested evidence. |

### QueryEvidenceResponse

QueryEvidenceResponse is the response type for the Query/Evidence RPC method.

| Field    | Type                                    | Label | Description                              |
| -------- | --------------------------------------- | ----- | ---------------------------------------- |
| evidence | [google.protobuf.Any](broken-reference) |       | evidence returns the requested evidence. |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                                | Response Type                                | Description                                       |
| ----------- | ------------------------------------------- | -------------------------------------------- | ------------------------------------------------- |
| Evidence    | [QueryEvidenceRequest](broken-reference)    | [QueryEvidenceResponse](broken-reference)    | Evidence queries evidence based on evidence hash. |
| AllEvidence | [QueryAllEvidenceRequest](broken-reference) | [QueryAllEvidenceResponse](broken-reference) | AllEvidence queries all evidence.                 |

[Top](broken-reference)

## cosmos/evidence/v1beta1/genesis.proto

### GenesisState

GenesisState defines the evidence module's genesis state.

| Field    | Type                                    | Label    | Description                                   |
| -------- | --------------------------------------- | -------- | --------------------------------------------- |
| evidence | [google.protobuf.Any](broken-reference) | repeated | evidence defines all the evidence at genesis. |

[Top](broken-reference)

## cosmos/auth/v1beta1/query.proto

### QueryAccountRequest

QueryAccountRequest is the request type for the Query/Account RPC method.

| Field   | Type                       | Label | Description                               |
| ------- | -------------------------- | ----- | ----------------------------------------- |
| address | [string](broken-reference) |       | address defines the address to query for. |

### QueryAccountResponse

QueryAccountResponse is the response type for the Query/Account RPC method.

| Field   | Type                                    | Label | Description                                               |
| ------- | --------------------------------------- | ----- | --------------------------------------------------------- |
| account | [google.protobuf.Any](broken-reference) |       | account defines the account of the corresponding address. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                       | Label | Description                                  |
| ------ | -------------------------- | ----- | -------------------------------------------- |
| params | [Params](broken-reference) |       | params defines the parameters of the module. |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                            | Response Type                            | Description                                       |
| ----------- | --------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| Account     | [QueryAccountRequest](broken-reference) | [QueryAccountResponse](broken-reference) | Account returns account details based on address. |
| Params      | [QueryParamsRequest](broken-reference)  | [QueryParamsResponse](broken-reference)  | Params queries all parameters.                    |

[Top](broken-reference)

## cosmos/auth/v1beta1/genesis.proto

### GenesisState

GenesisState defines the auth module's genesis state.

| Field    | Type                                    | Label    | Description                                      |
| -------- | --------------------------------------- | -------- | ------------------------------------------------ |
| params   | [Params](broken-reference)              |          | params defines all the paramaters of the module. |
| accounts | [google.protobuf.Any](broken-reference) | repeated | accounts are the accounts present at genesis.    |

[Top](broken-reference)

## cosmos/auth/v1beta1/auth.proto

### BaseAccount

BaseAccount defines a base account type. It contains all the necessary fields for basic account functionality. Any custom account type should extend this type for additional functionality (e.g. vesting).

| Field           | Type                                    | Label | Description |
| --------------- | --------------------------------------- | ----- | ----------- |
| address         | [string](broken-reference)              |       |             |
| pub\_key        | [google.protobuf.Any](broken-reference) |       |             |
| account\_number | [uint64](broken-reference)              |       |             |
| sequence        | [uint64](broken-reference)              |       |             |

### ModuleAccount

ModuleAccount defines an account for modules that holds coins on a pool.

| Field         | Type                            | Label    | Description |
| ------------- | ------------------------------- | -------- | ----------- |
| base\_account | [BaseAccount](broken-reference) |          |             |
| name          | [string](broken-reference)      |          |             |
| permissions   | [string](broken-reference)      | repeated |             |

### Params

Params defines the parameters for the auth module.

| Field                        | Type                       | Label | Description |
| ---------------------------- | -------------------------- | ----- | ----------- |
| max\_memo\_characters        | [uint64](broken-reference) |       |             |
| tx\_sig\_limit               | [uint64](broken-reference) |       |             |
| tx\_size\_cost\_per\_byte    | [uint64](broken-reference) |       |             |
| sig\_verify\_cost\_ed25519   | [uint64](broken-reference) |       |             |
| sig\_verify\_cost\_secp256k1 | [uint64](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/bank/v1beta1/tx.proto

### MsgMultiSend

MsgMultiSend represents an arbitrary multi-in, multi-out send message.

| Field   | Type                       | Label    | Description |
| ------- | -------------------------- | -------- | ----------- |
| inputs  | [Input](broken-reference)  | repeated |             |
| outputs | [Output](broken-reference) | repeated |             |

### MsgMultiSendResponse

MsgMultiSendResponse defines the Msg/MultiSend response type.

### MsgSend

MsgSend represents a message to send coins from one account to another.

| Field         | Type                                         | Label    | Description |
| ------------- | -------------------------------------------- | -------- | ----------- |
| from\_address | [string](broken-reference)                   |          |             |
| to\_address   | [string](broken-reference)                   |          |             |
| amount        | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

### MsgSendResponse

MsgSendResponse defines the Msg/Send response type.

### Msg

Msg defines the bank Msg service.

| Method Name | Request Type                     | Response Type                            | Description                                                                        |
| ----------- | -------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| Send        | [MsgSend](broken-reference)      | [MsgSendResponse](broken-reference)      | Send defines a method for sending coins from one account to another account.       |
| MultiSend   | [MsgMultiSend](broken-reference) | [MsgMultiSendResponse](broken-reference) | MultiSend defines a method for sending coins from some accounts to other accounts. |

[Top](broken-reference)

## cosmos/bank/v1beta1/bank.proto

### DenomUnit

DenomUnit represents a struct that describes a given denomination unit of the basic token.

| Field    | Type                       | Label    | Description                                                                                                                                                                                                                                                                           |
| -------- | -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| denom    | [string](broken-reference) |          | denom represents the string name of the given denom unit (e.g uatom).                                                                                                                                                                                                                 |
| exponent | [uint32](broken-reference) |          | exponent represents power of 10 exponent that one must raise the base\_denom to in order to equal the given DenomUnit's denom 1 denom = 1^exponent base\_denom (e.g. with a base\_denom of uatom, one can create a DenomUnit of 'atom' with exponent = 6, thus: 1 atom = 10^6 uatom). |
| aliases  | [string](broken-reference) | repeated | aliases is a list of string aliases for the given denom                                                                                                                                                                                                                               |

### Input

Input models transaction input.

| Field   | Type                                         | Label    | Description |
| ------- | -------------------------------------------- | -------- | ----------- |
| address | [string](broken-reference)                   |          |             |
| coins   | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

### Metadata

Metadata represents a struct that describes a basic token.

| Field        | Type                          | Label    | Description                                                                 |
| ------------ | ----------------------------- | -------- | --------------------------------------------------------------------------- |
| description  | [string](broken-reference)    |          |                                                                             |
| denom\_units | [DenomUnit](broken-reference) | repeated | denom\_units represents the list of DenomUnit's for a given coin            |
| base         | [string](broken-reference)    |          | base represents the base denom (should be the DenomUnit with exponent = 0). |
| display      | [string](broken-reference)    |          | display indicates the suggested denom that should be displayed in clients.  |

### Output

Output models transaction outputs.

| Field   | Type                                         | Label    | Description |
| ------- | -------------------------------------------- | -------- | ----------- |
| address | [string](broken-reference)                   |          |             |
| coins   | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

### Params

Params defines the parameters for the bank module.

| Field                  | Type                            | Label    | Description |
| ---------------------- | ------------------------------- | -------- | ----------- |
| send\_enabled          | [SendEnabled](broken-reference) | repeated |             |
| default\_send\_enabled | [bool](broken-reference)        |          |             |

### SendEnabled

SendEnabled maps coin denom to a send\_enabled status (whether a denom is sendable).

| Field   | Type                       | Label | Description |
| ------- | -------------------------- | ----- | ----------- |
| denom   | [string](broken-reference) |       |             |
| enabled | [bool](broken-reference)   |       |             |

### Supply

Supply represents a struct that passively keeps track of the total supply amounts in the network.

| Field | Type                                         | Label    | Description |
| ----- | -------------------------------------------- | -------- | ----------- |
| total | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

[Top](broken-reference)

## cosmos/bank/v1beta1/query.proto

### QueryAllBalancesRequest

QueryBalanceRequest is the request type for the Query/AllBalances RPC method.

| Field      | Type                                                      | Label | Description                                                |
| ---------- | --------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| address    | [string](broken-reference)                                |       | address is the address to query balances for.              |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request. |

### QueryAllBalancesResponse

QueryAllBalancesResponse is the response type for the Query/AllBalances RPC method.

| Field      | Type                                                       | Label    | Description                                        |
| ---------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| balances   | [cosmos.base.v1beta1.Coin](broken-reference)               | repeated | balances is the balances of all the coins.         |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryBalanceRequest

QueryBalanceRequest is the request type for the Query/Balance RPC method.

| Field   | Type                       | Label | Description                                    |
| ------- | -------------------------- | ----- | ---------------------------------------------- |
| address | [string](broken-reference) |       | address is the address to query balances for.  |
| denom   | [string](broken-reference) |       | denom is the coin denom to query balances for. |

### QueryBalanceResponse

QueryBalanceResponse is the response type for the Query/Balance RPC method.

| Field   | Type                                         | Label | Description                         |
| ------- | -------------------------------------------- | ----- | ----------------------------------- |
| balance | [cosmos.base.v1beta1.Coin](broken-reference) |       | balance is the balance of the coin. |

### QueryParamsRequest

QueryParamsRequest defines the request type for querying x/bank parameters.

### QueryParamsResponse

QueryParamsResponse defines the response type for querying x/bank parameters.

| Field  | Type                       | Label | Description |
| ------ | -------------------------- | ----- | ----------- |
| params | [Params](broken-reference) |       |             |

### QuerySupplyOfRequest

QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.

| Field | Type                       | Label | Description                                    |
| ----- | -------------------------- | ----- | ---------------------------------------------- |
| denom | [string](broken-reference) |       | denom is the coin denom to query balances for. |

### QuerySupplyOfResponse

QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.

| Field  | Type                                         | Label | Description                       |
| ------ | -------------------------------------------- | ----- | --------------------------------- |
| amount | [cosmos.base.v1beta1.Coin](broken-reference) |       | amount is the supply of the coin. |

### QueryTotalSupplyRequest

QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC method.

### QueryTotalSupplyResponse

QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC method

| Field  | Type                                         | Label    | Description                       |
| ------ | -------------------------------------------- | -------- | --------------------------------- |
| supply | [cosmos.base.v1beta1.Coin](broken-reference) | repeated | supply is the supply of the coins |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                                | Response Type                                | Description                                                        |
| ----------- | ------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------ |
| Balance     | [QueryBalanceRequest](broken-reference)     | [QueryBalanceResponse](broken-reference)     | Balance queries the balance of a single coin for a single account. |
| AllBalances | [QueryAllBalancesRequest](broken-reference) | [QueryAllBalancesResponse](broken-reference) | AllBalances queries the balance of all coins for a single account. |
| TotalSupply | [QueryTotalSupplyRequest](broken-reference) | [QueryTotalSupplyResponse](broken-reference) | TotalSupply queries the total supply of all coins.                 |
| SupplyOf    | [QuerySupplyOfRequest](broken-reference)    | [QuerySupplyOfResponse](broken-reference)    | SupplyOf queries the supply of a single coin.                      |
| Params      | [QueryParamsRequest](broken-reference)      | [QueryParamsResponse](broken-reference)      | Params queries the parameters of x/bank module.                    |

[Top](broken-reference)

## cosmos/bank/v1beta1/genesis.proto

### Balance

Balance defines an account address and balance pair used in the bank module's genesis state.

| Field   | Type                                         | Label    | Description                                           |
| ------- | -------------------------------------------- | -------- | ----------------------------------------------------- |
| address | [string](broken-reference)                   |          | address is the address of the balance holder.         |
| coins   | [cosmos.base.v1beta1.Coin](broken-reference) | repeated | coins defines the different coins this balance holds. |

### GenesisState

GenesisState defines the bank module's genesis state.

| Field           | Type                                         | Label    | Description                                                       |
| --------------- | -------------------------------------------- | -------- | ----------------------------------------------------------------- |
| params          | [Params](broken-reference)                   |          | params defines all the paramaters of the module.                  |
| balances        | [Balance](broken-reference)                  | repeated | balances is an array containing the balances of all the accounts. |
| supply          | [cosmos.base.v1beta1.Coin](broken-reference) | repeated | supply represents the total supply.                               |
| denom\_metadata | [Metadata](broken-reference)                 | repeated | denom\_metadata defines the metadata of the differents coins.     |

[Top](broken-reference)

## cosmos/capability/v1beta1/capability.proto

### Capability

Capability defines an implementation of an object capability. The index provided to a Capability must be globally unique.

| Field | Type                       | Label | Description |
| ----- | -------------------------- | ----- | ----------- |
| index | [uint64](broken-reference) |       |             |

### CapabilityOwners

CapabilityOwners defines a set of owners of a single Capability. The set of owners must be unique.

| Field  | Type                      | Label    | Description |
| ------ | ------------------------- | -------- | ----------- |
| owners | [Owner](broken-reference) | repeated |             |

### Owner

Owner defines a single capability owner. An owner is defined by the name of capability and the module name.

| Field  | Type                       | Label | Description |
| ------ | -------------------------- | ----- | ----------- |
| module | [string](broken-reference) |       |             |
| name   | [string](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/capability/v1beta1/genesis.proto

### GenesisOwners

GenesisOwners defines the capability owners with their corresponding index.

| Field         | Type                                 | Label | Description                                      |
| ------------- | ------------------------------------ | ----- | ------------------------------------------------ |
| index         | [uint64](broken-reference)           |       | index is the index of the capability owner.      |
| index\_owners | [CapabilityOwners](broken-reference) |       | index\_owners are the owners at the given index. |

### GenesisState

GenesisState defines the capability module's genesis state.

| Field  | Type                              | Label    | Description                                                                                                          |
| ------ | --------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| index  | [uint64](broken-reference)        |          | index is the capability global index.                                                                                |
| owners | [GenesisOwners](broken-reference) | repeated | owners represents a map from index to owners of the capability index index key is string to allow amino marshalling. |

[Top](broken-reference)

## cosmos/distribution/v1beta1/tx.proto

### MsgFundCommunityPool

MsgFundCommunityPool allows an account to directly fund the community pool.

| Field     | Type                                         | Label    | Description |
| --------- | -------------------------------------------- | -------- | ----------- |
| amount    | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |
| depositor | [string](broken-reference)                   |          |             |

### MsgFundCommunityPoolResponse

MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.

### MsgSetWithdrawAddress

MsgSetWithdrawAddress sets the withdraw address for a delegator (or validator self-delegation).

| Field              | Type                       | Label | Description |
| ------------------ | -------------------------- | ----- | ----------- |
| delegator\_address | [string](broken-reference) |       |             |
| withdraw\_address  | [string](broken-reference) |       |             |

### MsgSetWithdrawAddressResponse

MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type.

### MsgWithdrawDelegatorReward

MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator from a single validator.

| Field              | Type                       | Label | Description |
| ------------------ | -------------------------- | ----- | ----------- |
| delegator\_address | [string](broken-reference) |       |             |
| validator\_address | [string](broken-reference) |       |             |

### MsgWithdrawDelegatorRewardResponse

MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type.

### MsgWithdrawValidatorCommission

MsgWithdrawValidatorCommission withdraws the full commission to the validator address.

| Field              | Type                       | Label | Description |
| ------------------ | -------------------------- | ----- | ----------- |
| validator\_address | [string](broken-reference) |       |             |

### MsgWithdrawValidatorCommissionResponse

MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type.

### Msg

Msg defines the distribution Msg service.

| Method Name                 | Request Type                                       | Response Type                                              | Description                                                                                                        |
| --------------------------- | -------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| SetWithdrawAddress          | [MsgSetWithdrawAddress](broken-reference)          | [MsgSetWithdrawAddressResponse](broken-reference)          | SetWithdrawAddress defines a method to change the withdraw address for a delegator (or validator self-delegation). |
| WithdrawDelegatorReward     | [MsgWithdrawDelegatorReward](broken-reference)     | [MsgWithdrawDelegatorRewardResponse](broken-reference)     | WithdrawDelegatorReward defines a method to withdraw rewards of delegator from a single validator.                 |
| WithdrawValidatorCommission | [MsgWithdrawValidatorCommission](broken-reference) | [MsgWithdrawValidatorCommissionResponse](broken-reference) | WithdrawValidatorCommission defines a method to withdraw the full commission to the validator address.             |
| FundCommunityPool           | [MsgFundCommunityPool](broken-reference)           | [MsgFundCommunityPoolResponse](broken-reference)           | FundCommunityPool defines a method to allow an account to directly fund the community pool.                        |

[Top](broken-reference)

## cosmos/distribution/v1beta1/distribution.proto

### CommunityPoolSpendProposal

CommunityPoolSpendProposal details a proposal for use of community funds, together with how many coins are proposed to be spent, and to which recipient account.

| Field       | Type                                         | Label    | Description |
| ----------- | -------------------------------------------- | -------- | ----------- |
| title       | [string](broken-reference)                   |          |             |
| description | [string](broken-reference)                   |          |             |
| recipient   | [string](broken-reference)                   |          |             |
| amount      | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

### CommunityPoolSpendProposalWithDeposit

CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal with a deposit

| Field       | Type                       | Label | Description |
| ----------- | -------------------------- | ----- | ----------- |
| title       | [string](broken-reference) |       |             |
| description | [string](broken-reference) |       |             |
| recipient   | [string](broken-reference) |       |             |
| amount      | [string](broken-reference) |       |             |
| deposit     | [string](broken-reference) |       |             |

### DelegationDelegatorReward

DelegationDelegatorReward represents the properties of a delegator's delegation reward.

| Field              | Type                                            | Label    | Description |
| ------------------ | ----------------------------------------------- | -------- | ----------- |
| validator\_address | [string](broken-reference)                      |          |             |
| reward             | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated |             |

### DelegatorStartingInfo

DelegatorStartingInfo represents the starting info for a delegator reward period. It tracks the previous validator period, the delegation's amount of staking token, and the creation height (to check later on if any slashes have occurred). NOTE: Even though validators are slashed to whole staking tokens, the delegators within the validator may be left with less than a full token, thus sdk.Dec is used.

| Field            | Type                       | Label | Description |
| ---------------- | -------------------------- | ----- | ----------- |
| previous\_period | [uint64](broken-reference) |       |             |
| stake            | [string](broken-reference) |       |             |
| height           | [uint64](broken-reference) |       |             |

### FeePool

FeePool is the global fee pool for distribution.

| Field           | Type                                            | Label    | Description |
| --------------- | ----------------------------------------------- | -------- | ----------- |
| community\_pool | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated |             |

### Params

Params defines the set of params for the distribution module.

| Field                   | Type                       | Label | Description |
| ----------------------- | -------------------------- | ----- | ----------- |
| community\_tax          | [string](broken-reference) |       |             |
| base\_proposer\_reward  | [string](broken-reference) |       |             |
| bonus\_proposer\_reward | [string](broken-reference) |       |             |
| withdraw\_addr\_enabled | [bool](broken-reference)   |       |             |

### ValidatorAccumulatedCommission

ValidatorAccumulatedCommission represents accumulated commission for a validator kept as a running counter, can be withdrawn at any time.

| Field      | Type                                            | Label    | Description |
| ---------- | ----------------------------------------------- | -------- | ----------- |
| commission | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated |             |

### ValidatorCurrentRewards

ValidatorCurrentRewards represents current rewards and current period for a validator kept as a running counter and incremented each block as long as the validator's tokens remain constant.

| Field   | Type                                            | Label    | Description |
| ------- | ----------------------------------------------- | -------- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated |             |
| period  | [uint64](broken-reference)                      |          |             |

### ValidatorHistoricalRewards

ValidatorHistoricalRewards represents historical rewards for a validator. Height is implicit within the store key. Cumulative reward ratio is the sum from the zeroeth period until this period of rewards / tokens, per the spec. The reference count indicates the number of objects which might need to reference this historical entry at any point. ReferenceCount = number of outstanding delegations which ended the associated period (and might need to read that record) + number of slashes which ended the associated period (and might need to read that record) + one per validator for the zeroeth period, set on initialization

| Field                     | Type                                            | Label    | Description |
| ------------------------- | ----------------------------------------------- | -------- | ----------- |
| cumulative\_reward\_ratio | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated |             |
| reference\_count          | [uint32](broken-reference)                      |          |             |

### ValidatorOutstandingRewards

ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards for a validator inexpensive to track, allows simple sanity checks.

| Field   | Type                                            | Label    | Description |
| ------- | ----------------------------------------------- | -------- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated |             |

### ValidatorSlashEvent

ValidatorSlashEvent represents a validator slash event. Height is implicit within the store key. This is needed to calculate appropriate amount of staking tokens for delegations which are withdrawn after a slash has occurred.

| Field             | Type                       | Label | Description |
| ----------------- | -------------------------- | ----- | ----------- |
| validator\_period | [uint64](broken-reference) |       |             |
| fraction          | [string](broken-reference) |       |             |

### ValidatorSlashEvents

ValidatorSlashEvents is a collection of ValidatorSlashEvent messages.

| Field                    | Type                                    | Label    | Description |
| ------------------------ | --------------------------------------- | -------- | ----------- |
| validator\_slash\_events | [ValidatorSlashEvent](broken-reference) | repeated |             |

[Top](broken-reference)

## cosmos/distribution/v1beta1/query.proto

### QueryCommunityPoolRequest

QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC method.

### QueryCommunityPoolResponse

QueryCommunityPoolResponse is the response type for the Query/CommunityPool RPC method.

| Field | Type                                            | Label    | Description                          |
| ----- | ----------------------------------------------- | -------- | ------------------------------------ |
| pool  | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated | pool defines community pool's coins. |

### QueryDelegationRewardsRequest

QueryDelegationRewardsRequest is the request type for the Query/DelegationRewards RPC method.

| Field              | Type                       | Label | Description                                                    |
| ------------------ | -------------------------- | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](broken-reference) |       | delegator\_address defines the delegator address to query for. |
| validator\_address | [string](broken-reference) |       | validator\_address defines the validator address to query for. |

### QueryDelegationRewardsResponse

QueryDelegationRewardsResponse is the response type for the Query/DelegationRewards RPC method.

| Field   | Type                                            | Label    | Description                                          |
| ------- | ----------------------------------------------- | -------- | ---------------------------------------------------- |
| rewards | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated | rewards defines the rewards accrued by a delegation. |

### QueryDelegationTotalRewardsRequest

QueryDelegationTotalRewardsRequest is the request type for the Query/DelegationTotalRewards RPC method.

| Field              | Type                       | Label | Description                                                    |
| ------------------ | -------------------------- | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](broken-reference) |       | delegator\_address defines the delegator address to query for. |

### QueryDelegationTotalRewardsResponse

QueryDelegationTotalRewardsResponse is the response type for the Query/DelegationTotalRewards RPC method.

| Field   | Type                                            | Label    | Description                                             |
| ------- | ----------------------------------------------- | -------- | ------------------------------------------------------- |
| rewards | [DelegationDelegatorReward](broken-reference)   | repeated | rewards defines all the rewards accrued by a delegator. |
| total   | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated | total defines the sum of all the rewards.               |

### QueryDelegatorValidatorsRequest

QueryDelegatorValidatorsRequest is the request type for the Query/DelegatorValidators RPC method.

| Field              | Type                       | Label | Description                                                    |
| ------------------ | -------------------------- | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](broken-reference) |       | delegator\_address defines the delegator address to query for. |

### QueryDelegatorValidatorsResponse

QueryDelegatorValidatorsResponse is the response type for the Query/DelegatorValidators RPC method.

| Field      | Type                       | Label    | Description                                                      |
| ---------- | -------------------------- | -------- | ---------------------------------------------------------------- |
| validators | [string](broken-reference) | repeated | validators defines the validators a delegator is delegating for. |

### QueryDelegatorWithdrawAddressRequest

QueryDelegatorWithdrawAddressRequest is the request type for the Query/DelegatorWithdrawAddress RPC method.

| Field              | Type                       | Label | Description                                                    |
| ------------------ | -------------------------- | ----- | -------------------------------------------------------------- |
| delegator\_address | [string](broken-reference) |       | delegator\_address defines the delegator address to query for. |

### QueryDelegatorWithdrawAddressResponse

QueryDelegatorWithdrawAddressResponse is the response type for the Query/DelegatorWithdrawAddress RPC method.

| Field             | Type                       | Label | Description                                                   |
| ----------------- | -------------------------- | ----- | ------------------------------------------------------------- |
| withdraw\_address | [string](broken-reference) |       | withdraw\_address defines the delegator address to query for. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                       | Label | Description                                  |
| ------ | -------------------------- | ----- | -------------------------------------------- |
| params | [Params](broken-reference) |       | params defines the parameters of the module. |

### QueryValidatorCommissionRequest

QueryValidatorCommissionRequest is the request type for the Query/ValidatorCommission RPC method

| Field              | Type                       | Label | Description                                                    |
| ------------------ | -------------------------- | ----- | -------------------------------------------------------------- |
| validator\_address | [string](broken-reference) |       | validator\_address defines the validator address to query for. |

### QueryValidatorCommissionResponse

QueryValidatorCommissionResponse is the response type for the Query/ValidatorCommission RPC method

| Field      | Type                                               | Label | Description                                              |
| ---------- | -------------------------------------------------- | ----- | -------------------------------------------------------- |
| commission | [ValidatorAccumulatedCommission](broken-reference) |       | commission defines the commision the validator received. |

### QueryValidatorOutstandingRewardsRequest

QueryValidatorOutstandingRewardsRequest is the request type for the Query/ValidatorOutstandingRewards RPC method.

| Field              | Type                       | Label | Description                                                    |
| ------------------ | -------------------------- | ----- | -------------------------------------------------------------- |
| validator\_address | [string](broken-reference) |       | validator\_address defines the validator address to query for. |

### QueryValidatorOutstandingRewardsResponse

QueryValidatorOutstandingRewardsResponse is the response type for the Query/ValidatorOutstandingRewards RPC method.

| Field   | Type                                            | Label | Description |
| ------- | ----------------------------------------------- | ----- | ----------- |
| rewards | [ValidatorOutstandingRewards](broken-reference) |       |             |

### QueryValidatorSlashesRequest

QueryValidatorSlashesRequest is the request type for the Query/ValidatorSlashes RPC method

| Field              | Type                                                      | Label | Description                                                                 |
| ------------------ | --------------------------------------------------------- | ----- | --------------------------------------------------------------------------- |
| validator\_address | [string](broken-reference)                                |       | validator\_address defines the validator address to query for.              |
| starting\_height   | [uint64](broken-reference)                                |       | starting\_height defines the optional starting height to query the slashes. |
| ending\_height     | [uint64](broken-reference)                                |       | starting\_height defines the optional ending height to query the slashes.   |
| pagination         | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.                  |

### QueryValidatorSlashesResponse

QueryValidatorSlashesResponse is the response type for the Query/ValidatorSlashes RPC method.

| Field      | Type                                                       | Label    | Description                                         |
| ---------- | ---------------------------------------------------------- | -------- | --------------------------------------------------- |
| slashes    | [ValidatorSlashEvent](broken-reference)                    | repeated | slashes defines the slashes the validator received. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response.  |

### Query

Query defines the gRPC querier service for distribution module.

| Method Name                 | Request Type                                                | Response Type                                                | Description                                                                   |
| --------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Params                      | [QueryParamsRequest](broken-reference)                      | [QueryParamsResponse](broken-reference)                      | Params queries params of the distribution module.                             |
| ValidatorOutstandingRewards | [QueryValidatorOutstandingRewardsRequest](broken-reference) | [QueryValidatorOutstandingRewardsResponse](broken-reference) | ValidatorOutstandingRewards queries rewards of a validator address.           |
| ValidatorCommission         | [QueryValidatorCommissionRequest](broken-reference)         | [QueryValidatorCommissionResponse](broken-reference)         | ValidatorCommission queries accumulated commission for a validator.           |
| ValidatorSlashes            | [QueryValidatorSlashesRequest](broken-reference)            | [QueryValidatorSlashesResponse](broken-reference)            | ValidatorSlashes queries slash events of a validator.                         |
| DelegationRewards           | [QueryDelegationRewardsRequest](broken-reference)           | [QueryDelegationRewardsResponse](broken-reference)           | DelegationRewards queries the total rewards accrued by a delegation.          |
| DelegationTotalRewards      | [QueryDelegationTotalRewardsRequest](broken-reference)      | [QueryDelegationTotalRewardsResponse](broken-reference)      | DelegationTotalRewards queries the total rewards accrued by a each validator. |
| DelegatorValidators         | [QueryDelegatorValidatorsRequest](broken-reference)         | [QueryDelegatorValidatorsResponse](broken-reference)         | DelegatorValidators queries the validators of a delegator.                    |
| DelegatorWithdrawAddress    | [QueryDelegatorWithdrawAddressRequest](broken-reference)    | [QueryDelegatorWithdrawAddressResponse](broken-reference)    | DelegatorWithdrawAddress queries withdraw address of a delegator.             |
| CommunityPool               | [QueryCommunityPoolRequest](broken-reference)               | [QueryCommunityPoolResponse](broken-reference)               | CommunityPool queries the community pool coins.                               |

[Top](broken-reference)

## cosmos/distribution/v1beta1/genesis.proto

### DelegatorStartingInfoRecord

DelegatorStartingInfoRecord used for import / export via genesis json.

| Field              | Type                                      | Label | Description                                              |
| ------------------ | ----------------------------------------- | ----- | -------------------------------------------------------- |
| delegator\_address | [string](broken-reference)                |       | delegator\_address is the address of the delegator.      |
| validator\_address | [string](broken-reference)                |       | validator\_address is the address of the validator.      |
| starting\_info     | [DelegatorStartingInfo](broken-reference) |       | starting\_info defines the starting info of a delegator. |

### DelegatorWithdrawInfo

DelegatorWithdrawInfo is the address for where distributions rewards are withdrawn to by default this struct is only used at genesis to feed in default withdraw addresses.

| Field              | Type                       | Label | Description                                                             |
| ------------------ | -------------------------- | ----- | ----------------------------------------------------------------------- |
| delegator\_address | [string](broken-reference) |       | delegator\_address is the address of the delegator.                     |
| withdraw\_address  | [string](broken-reference) |       | withdraw\_address is the address to withdraw the delegation rewards to. |

### GenesisState

GenesisState defines the distribution module's genesis state.

| Field                               | Type                                                     | Label    | Description                                                                |
| ----------------------------------- | -------------------------------------------------------- | -------- | -------------------------------------------------------------------------- |
| params                              | [Params](broken-reference)                               |          | params defines all the paramaters of the module.                           |
| fee\_pool                           | [FeePool](broken-reference)                              |          | fee\_pool defines the fee pool at genesis.                                 |
| delegator\_withdraw\_infos          | [DelegatorWithdrawInfo](broken-reference)                | repeated | fee\_pool defines the delegator withdraw infos at genesis.                 |
| previous\_proposer                  | [string](broken-reference)                               |          | fee\_pool defines the previous proposer at genesis.                        |
| outstanding\_rewards                | [ValidatorOutstandingRewardsRecord](broken-reference)    | repeated | fee\_pool defines the outstanding rewards of all validators at genesis.    |
| validator\_accumulated\_commissions | [ValidatorAccumulatedCommissionRecord](broken-reference) | repeated | fee\_pool defines the accumulated commisions of all validators at genesis. |
| validator\_historical\_rewards      | [ValidatorHistoricalRewardsRecord](broken-reference)     | repeated | fee\_pool defines the historical rewards of all validators at genesis.     |
| validator\_current\_rewards         | [ValidatorCurrentRewardsRecord](broken-reference)        | repeated | fee\_pool defines the current rewards of all validators at genesis.        |
| delegator\_starting\_infos          | [DelegatorStartingInfoRecord](broken-reference)          | repeated | fee\_pool defines the delegator starting infos at genesis.                 |
| validator\_slash\_events            | [ValidatorSlashEventRecord](broken-reference)            | repeated | fee\_pool defines the validator slash events at genesis.                   |

### ValidatorAccumulatedCommissionRecord

ValidatorAccumulatedCommissionRecord is used for import / export via genesis json.

| Field              | Type                                               | Label | Description                                               |
| ------------------ | -------------------------------------------------- | ----- | --------------------------------------------------------- |
| validator\_address | [string](broken-reference)                         |       | validator\_address is the address of the validator.       |
| accumulated        | [ValidatorAccumulatedCommission](broken-reference) |       | accumulated is the accumulated commission of a validator. |

### ValidatorCurrentRewardsRecord

ValidatorCurrentRewardsRecord is used for import / export via genesis json.

| Field              | Type                                        | Label | Description                                         |
| ------------------ | ------------------------------------------- | ----- | --------------------------------------------------- |
| validator\_address | [string](broken-reference)                  |       | validator\_address is the address of the validator. |
| rewards            | [ValidatorCurrentRewards](broken-reference) |       | rewards defines the current rewards of a validator. |

### ValidatorHistoricalRewardsRecord

ValidatorHistoricalRewardsRecord is used for import / export via genesis json.

| Field              | Type                                           | Label | Description                                                |
| ------------------ | ---------------------------------------------- | ----- | ---------------------------------------------------------- |
| validator\_address | [string](broken-reference)                     |       | validator\_address is the address of the validator.        |
| period             | [uint64](broken-reference)                     |       | period defines the period the historical rewards apply to. |
| rewards            | [ValidatorHistoricalRewards](broken-reference) |       | rewards defines the historical rewards of a validator.     |

### ValidatorOutstandingRewardsRecord

ValidatorOutstandingRewardsRecord is used for import/export via genesis json.

| Field                | Type                                            | Label    | Description                                                            |
| -------------------- | ----------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| validator\_address   | [string](broken-reference)                      |          | validator\_address is the address of the validator.                    |
| outstanding\_rewards | [cosmos.base.v1beta1.DecCoin](broken-reference) | repeated | outstanding\_rewards represents the oustanding rewards of a validator. |

### ValidatorSlashEventRecord

ValidatorSlashEventRecord is used for import / export via genesis json.

| Field                   | Type                                    | Label | Description                                                       |
| ----------------------- | --------------------------------------- | ----- | ----------------------------------------------------------------- |
| validator\_address      | [string](broken-reference)              |       | validator\_address is the address of the validator.               |
| height                  | [uint64](broken-reference)              |       | height defines the block height at which the slash event occured. |
| period                  | [uint64](broken-reference)              |       | period is the period of the slash event.                          |
| validator\_slash\_event | [ValidatorSlashEvent](broken-reference) |       | validator\_slash\_event describes the slash event.                |

[Top](broken-reference)

## cosmos/crisis/v1beta1/tx.proto

### MsgVerifyInvariant

MsgVerifyInvariant represents a message to verify a particular invariance.

| Field                   | Type                       | Label | Description |
| ----------------------- | -------------------------- | ----- | ----------- |
| sender                  | [string](broken-reference) |       |             |
| invariant\_module\_name | [string](broken-reference) |       |             |
| invariant\_route        | [string](broken-reference) |       |             |

### MsgVerifyInvariantResponse

MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.

### Msg

Msg defines the bank Msg service.

| Method Name     | Request Type                           | Response Type                                  | Description                                                         |
| --------------- | -------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------- |
| VerifyInvariant | [MsgVerifyInvariant](broken-reference) | [MsgVerifyInvariantResponse](broken-reference) | VerifyInvariant defines a method to verify a particular invariance. |

[Top](broken-reference)

## cosmos/crisis/v1beta1/genesis.proto

### GenesisState

GenesisState defines the crisis module's genesis state.

| Field         | Type                                         | Label | Description                                                                 |
| ------------- | -------------------------------------------- | ----- | --------------------------------------------------------------------------- |
| constant\_fee | [cosmos.base.v1beta1.Coin](broken-reference) |       | constant\_fee is the fee used to verify the invariant in the crisis module. |

[Top](broken-reference)

## cosmos/tx/signing/v1beta1/signing.proto

### SignatureDescriptor

SignatureDescriptor is a convenience type which represents the full data for a signature including the public key of the signer, signing modes and the signature itself. It is primarily used for coordinating signatures between clients.

| Field       | Type                                         | Label | Description                                                                                                                                                    |
| ----------- | -------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public\_key | [google.protobuf.Any](broken-reference)      |       | public\_key is the public key of the signer                                                                                                                    |
| data        | [SignatureDescriptor.Data](broken-reference) |       |                                                                                                                                                                |
| sequence    | [uint64](broken-reference)                   |       | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks. |

### SignatureDescriptor.Data

Data represents signature data

| Field  | Type                                                | Label | Description                        |
| ------ | --------------------------------------------------- | ----- | ---------------------------------- |
| single | [SignatureDescriptor.Data.Single](broken-reference) |       | single represents a single signer  |
| multi  | [SignatureDescriptor.Data.Multi](broken-reference)  |       | multi represents a multisig signer |

### SignatureDescriptor.Data.Multi

Multi is the signature data for a multisig public key

| Field      | Type                                                               | Label    | Description                                                   |
| ---------- | ------------------------------------------------------------------ | -------- | ------------------------------------------------------------- |
| bitarray   | [cosmos.crypto.multisig.v1beta1.CompactBitArray](broken-reference) |          | bitarray specifies which keys within the multisig are signing |
| signatures | [SignatureDescriptor.Data](broken-reference)                       | repeated | signatures is the signatures of the multi-signature           |

### SignatureDescriptor.Data.Single

Single is the signature data for a single signer

| Field     | Type                         | Label | Description                                   |
| --------- | ---------------------------- | ----- | --------------------------------------------- |
| mode      | [SignMode](broken-reference) |       | mode is the signing mode of the single signer |
| signature | [bytes](broken-reference)    |       | signature is the raw signature bytes          |

### SignatureDescriptors

SignatureDescriptors wraps multiple SignatureDescriptor's.

| Field      | Type                                    | Label    | Description                              |
| ---------- | --------------------------------------- | -------- | ---------------------------------------- |
| signatures | [SignatureDescriptor](broken-reference) | repeated | signatures are the signature descriptors |

### SignMode

SignMode represents a signing mode with its own security guarantees.

| Name                            | Number | Description                                                                                                                                                          |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SIGN\_MODE\_UNSPECIFIED         | 0      | SIGN\_MODE\_UNSPECIFIED specifies an unknown signing mode and will be rejected                                                                                       |
| SIGN\_MODE\_DIRECT              | 1      | SIGN\_MODE\_DIRECT specifies a signing mode which uses SignDoc and is verified with raw bytes from Tx                                                                |
| SIGN\_MODE\_TEXTUAL             | 2      | SIGN\_MODE\_TEXTUAL is a future signing mode that will verify some human-readable textual representation on top of the binary representation from SIGN\_MODE\_DIRECT |
| SIGN\_MODE\_LEGACY\_AMINO\_JSON | 127    | SIGN\_MODE\_LEGACY\_AMINO\_JSON is a backwards compatibility mode which uses Amino JSON and will be removed in the future                                            |

[Top](broken-reference)

## cosmos/tx/v1beta1/tx.proto

### AuthInfo

AuthInfo describes the fee and signer modes that are used to sign a transaction.

| Field         | Type                           | Label    | Description                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| signer\_infos | [SignerInfo](broken-reference) | repeated | signer\_infos defines the signing modes for the required signers. The number and order of elements must match the required signers from TxBody's messages. The first element is the primary signer and the one which pays the fee.                                                 |
| fee           | [Fee](broken-reference)        |          | Fee is the fee and gas limit for the transaction. The first signer is the primary signer and the one which pays the fee. The fee can be calculated based on the cost of evaluating the body and doing signature verification of the signers. This can be estimated via simulation. |

### Fee

Fee includes the amount of coins paid in fees and the maximum gas to be used by the transaction. The ratio yields an effective "gasprice", which must be above some miminum to be accepted into the mempool.

| Field      | Type                                         | Label    | Description                                                                                                                                                                                                                                                                             |
| ---------- | -------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount     | [cosmos.base.v1beta1.Coin](broken-reference) | repeated | amount is the amount of coins to be paid as a fee                                                                                                                                                                                                                                       |
| gas\_limit | [uint64](broken-reference)                   |          | gas\_limit is the maximum gas that can be used in transaction processing before an out of gas error occurs                                                                                                                                                                              |
| payer      | [string](broken-reference)                   |          | if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees. the payer must be a tx signer (and thus have signed this field in AuthInfo). setting this field does _not_ change the ordering of required signers for the transaction. |
| granter    | [string](broken-reference)                   |          | if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does not support fee grants, this will fail               |

### ModeInfo

ModeInfo describes the signing mode of a single or nested multisig signer.

| Field  | Type                                | Label | Description                               |
| ------ | ----------------------------------- | ----- | ----------------------------------------- |
| single | [ModeInfo.Single](broken-reference) |       | single represents a single signer         |
| multi  | [ModeInfo.Multi](broken-reference)  |       | multi represents a nested multisig signer |

### ModeInfo.Multi

Multi is the mode info for a multisig public key

| Field       | Type                                                               | Label    | Description                                                                                                           |
| ----------- | ------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------- |
| bitarray    | [cosmos.crypto.multisig.v1beta1.CompactBitArray](broken-reference) |          | bitarray specifies which keys within the multisig are signing                                                         |
| mode\_infos | [ModeInfo](broken-reference)                                       | repeated | mode\_infos is the corresponding modes of the signers of the multisig which could include nested multisig public keys |

### ModeInfo.Single

Single is the mode info for a single signer. It is structured as a message to allow for additional fields such as locale for SIGN\_MODE\_TEXTUAL in the future

| Field | Type                                                   | Label | Description                                   |
| ----- | ------------------------------------------------------ | ----- | --------------------------------------------- |
| mode  | [cosmos.tx.signing.v1beta1.SignMode](broken-reference) |       | mode is the signing mode of the single signer |

### SignDoc

SignDoc is the type used for generating sign bytes for SIGN\_MODE\_DIRECT.

| Field             | Type                       | Label | Description                                                                                                                                               |
| ----------------- | -------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body\_bytes       | [bytes](broken-reference)  |       | body\_bytes is protobuf serialization of a TxBody that matches the representation in TxRaw.                                                               |
| auth\_info\_bytes | [bytes](broken-reference)  |       | auth\_info\_bytes is a protobuf serialization of an AuthInfo that matches the representation in TxRaw.                                                    |
| chain\_id         | [string](broken-reference) |       | chain\_id is the unique identifier of the chain this transaction targets. It prevents signed transactions from being used on another chain by an attacker |
| account\_number   | [uint64](broken-reference) |       | account\_number is the account number of the account in state                                                                                             |

### SignerInfo

SignerInfo describes the public key and signing mode of a single top-level signer.

| Field       | Type                                    | Label | Description                                                                                                                                                                                                     |
| ----------- | --------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public\_key | [google.protobuf.Any](broken-reference) |       | public\_key is the public key of the signer. It is optional for accounts that already exist in state. If unset, the verifier can use the required \ signer address for this position and lookup the public key. |
| mode\_info  | [ModeInfo](broken-reference)            |       | mode\_info describes the signing mode of the signer and is a nested structure to support nested multisig pubkey's                                                                                               |
| sequence    | [uint64](broken-reference)              |       | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks.                                                  |

### Tx

Tx is the standard type used for broadcasting transactions.

| Field      | Type                         | Label    | Description                                                                                                                                                                                   |
| ---------- | ---------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body       | [TxBody](broken-reference)   |          | body is the processable content of the transaction                                                                                                                                            |
| auth\_info | [AuthInfo](broken-reference) |          | auth\_info is the authorization related content of the transaction, specifically signers, signer modes and fee                                                                                |
| signatures | [bytes](broken-reference)    | repeated | signatures is a list of signatures that matches the length and order of AuthInfo's signer\_infos to allow connecting signature meta information like public key and signing mode by position. |

### TxBody

TxBody is the body of a transaction that all signers sign over.

| Field    | Type                                    | Label    | Description                                                                                                                                                                                                                                                     |
| -------- | --------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| messages | [google.protobuf.Any](broken-reference) | repeated | messages is a list of messages to be executed. The required signers of those messages define the number and order of elements in AuthInfo's signer\_infos and Tx's signatures. Each required signer address is added to the list only the first time it occurs. |

By convention, the first required signer (usually from the first message) is referred to as the primary signer and pays the fee for the whole transaction. | | memo | [string](broken-reference) | | memo is any arbitrary memo to be added to the transaction | | timeout\_height | [uint64](broken-reference) | | timeout is the block height after which this transaction will not be processed by the chain | | extension\_options | [google.protobuf.Any](broken-reference) | repeated | extension\_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can't be handled, the transaction will be rejected | | non\_critical\_extension\_options | [google.protobuf.Any](broken-reference) | repeated | extension\_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can't be handled, they will be ignored |

### TxRaw

TxRaw is a variant of Tx that pins the signer's exact binary representation of body and auth\_info. This is used for signing, broadcasting and verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used as the transaction ID.

| Field             | Type                      | Label    | Description                                                                                                                                                                                   |
| ----------------- | ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body\_bytes       | [bytes](broken-reference) |          | body\_bytes is a protobuf serialization of a TxBody that matches the representation in SignDoc.                                                                                               |
| auth\_info\_bytes | [bytes](broken-reference) |          | auth\_info\_bytes is a protobuf serialization of an AuthInfo that matches the representation in SignDoc.                                                                                      |
| signatures        | [bytes](broken-reference) | repeated | signatures is a list of signatures that matches the length and order of AuthInfo's signer\_infos to allow connecting signature meta information like public key and signing mode by position. |

[Top](broken-reference)

## cosmos/vesting/v1beta1/tx.proto

### MsgCreateVestingAccount

MsgCreateVestingAccount defines a message that enables creating a vesting account.

| Field         | Type                                         | Label    | Description |
| ------------- | -------------------------------------------- | -------- | ----------- |
| from\_address | [string](broken-reference)                   |          |             |
| to\_address   | [string](broken-reference)                   |          |             |
| amount        | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |
| end\_time     | [int64](broken-reference)                    |          |             |
| delayed       | [bool](broken-reference)                     |          |             |

### MsgCreateVestingAccountResponse

MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.

### Msg

Msg defines the bank Msg service.

| Method Name          | Request Type                                | Response Type                                       | Description                                                                    |
| -------------------- | ------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------ |
| CreateVestingAccount | [MsgCreateVestingAccount](broken-reference) | [MsgCreateVestingAccountResponse](broken-reference) | CreateVestingAccount defines a method that enables creating a vesting account. |

[Top](broken-reference)

## cosmos/vesting/v1beta1/vesting.proto

### BaseVestingAccount

BaseVestingAccount implements the VestingAccount interface. It contains all the necessary fields needed for any vesting account implementation.

| Field              | Type                                                | Label    | Description |
| ------------------ | --------------------------------------------------- | -------- | ----------- |
| base\_account      | [cosmos.auth.v1beta1.BaseAccount](broken-reference) |          |             |
| original\_vesting  | [cosmos.base.v1beta1.Coin](broken-reference)        | repeated |             |
| delegated\_free    | [cosmos.base.v1beta1.Coin](broken-reference)        | repeated |             |
| delegated\_vesting | [cosmos.base.v1beta1.Coin](broken-reference)        | repeated |             |
| end\_time          | [int64](broken-reference)                           |          |             |

### ContinuousVestingAccount

ContinuousVestingAccount implements the VestingAccount interface. It continuously vests by unlocking coins linearly with respect to time.

| Field                  | Type                                   | Label | Description |
| ---------------------- | -------------------------------------- | ----- | ----------- |
| base\_vesting\_account | [BaseVestingAccount](broken-reference) |       |             |
| start\_time            | [int64](broken-reference)              |       |             |

### DelayedVestingAccount

DelayedVestingAccount implements the VestingAccount interface. It vests all coins after a specific time, but non prior. In other words, it keeps them locked until a specified time.

| Field                  | Type                                   | Label | Description |
| ---------------------- | -------------------------------------- | ----- | ----------- |
| base\_vesting\_account | [BaseVestingAccount](broken-reference) |       |             |

### Period

Period defines a length of time and amount of coins that will vest.

| Field  | Type                                         | Label    | Description |
| ------ | -------------------------------------------- | -------- | ----------- |
| length | [int64](broken-reference)                    |          |             |
| amount | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

### PeriodicVestingAccount

PeriodicVestingAccount implements the VestingAccount interface. It periodically vests by unlocking coins during each specified period.

| Field                  | Type                                   | Label    | Description |
| ---------------------- | -------------------------------------- | -------- | ----------- |
| base\_vesting\_account | [BaseVestingAccount](broken-reference) |          |             |
| start\_time            | [int64](broken-reference)              |          |             |
| vesting\_periods       | [Period](broken-reference)             | repeated |             |

[Top](broken-reference)

## cosmos/staking/v1beta1/tx.proto

### MsgBeginRedelegate

MsgBeginRedelegate defines a SDK message for performing a redelegation of coins from a delegator and source validator to a destination validator.

| Field                   | Type                                         | Label | Description |
| ----------------------- | -------------------------------------------- | ----- | ----------- |
| delegator\_address      | [string](broken-reference)                   |       |             |
| validator\_src\_address | [string](broken-reference)                   |       |             |
| validator\_dst\_address | [string](broken-reference)                   |       |             |
| amount                  | [cosmos.base.v1beta1.Coin](broken-reference) |       |             |

### MsgBeginRedelegateResponse

MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.

| Field            | Type                                          | Label | Description |
| ---------------- | --------------------------------------------- | ----- | ----------- |
| completion\_time | [google.protobuf.Timestamp](broken-reference) |       |             |

### MsgCreateValidator

MsgCreateValidator defines a SDK message for creating a new validator.

| Field                 | Type                                         | Label | Description |
| --------------------- | -------------------------------------------- | ----- | ----------- |
| description           | [Description](broken-reference)              |       |             |
| commission            | [CommissionRates](broken-reference)          |       |             |
| min\_self\_delegation | [string](broken-reference)                   |       |             |
| delegator\_address    | [string](broken-reference)                   |       |             |
| validator\_address    | [string](broken-reference)                   |       |             |
| pubkey                | [string](broken-reference)                   |       |             |
| value                 | [cosmos.base.v1beta1.Coin](broken-reference) |       |             |

### MsgCreateValidatorResponse

MsgCreateValidatorResponse defines the Msg/CreateValidator response type.

### MsgDelegate

MsgDelegate defines a SDK message for performing a delegation of coins from a delegator to a validator.

| Field              | Type                                         | Label | Description |
| ------------------ | -------------------------------------------- | ----- | ----------- |
| delegator\_address | [string](broken-reference)                   |       |             |
| validator\_address | [string](broken-reference)                   |       |             |
| amount             | [cosmos.base.v1beta1.Coin](broken-reference) |       |             |

### MsgDelegateResponse

MsgDelegateResponse defines the Msg/Delegate response type.

### MsgEditValidator

MsgEditValidator defines a SDK message for editing an existing validator.

| Field              | Type                            | Label | Description                                                                                                                                                                                                      |
| ------------------ | ------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description        | [Description](broken-reference) |       |                                                                                                                                                                                                                  |
| validator\_address | [string](broken-reference)      |       |                                                                                                                                                                                                                  |
| commission\_rate   | [string](broken-reference)      |       | We pass a reference to the new commission rate and min self delegation as it's not mandatory to update. If not updated, the deserialized rate will be zero with no way to distinguish if an update was intended. |

REF: #2373 | | min\_self\_delegation | [string](broken-reference) | | |

### MsgEditValidatorResponse

MsgEditValidatorResponse defines the Msg/EditValidator response type.

### MsgUndelegate

MsgUndelegate defines a SDK message for performing an undelegation from a delegate and a validator.

| Field              | Type                                         | Label | Description |
| ------------------ | -------------------------------------------- | ----- | ----------- |
| delegator\_address | [string](broken-reference)                   |       |             |
| validator\_address | [string](broken-reference)                   |       |             |
| amount             | [cosmos.base.v1beta1.Coin](broken-reference) |       |             |

### MsgUndelegateResponse

MsgUndelegateResponse defines the Msg/Undelegate response type.

| Field            | Type                                          | Label | Description |
| ---------------- | --------------------------------------------- | ----- | ----------- |
| completion\_time | [google.protobuf.Timestamp](broken-reference) |       |             |

### Msg

Msg defines the staking Msg service.

| Method Name     | Request Type                           | Response Type                                  | Description                                                                                                                               |
| --------------- | -------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| CreateValidator | [MsgCreateValidator](broken-reference) | [MsgCreateValidatorResponse](broken-reference) | CreateValidator defines a method for creating a new validator.                                                                            |
| EditValidator   | [MsgEditValidator](broken-reference)   | [MsgEditValidatorResponse](broken-reference)   | EditValidator defines a method for editing an existing validator.                                                                         |
| Delegate        | [MsgDelegate](broken-reference)        | [MsgDelegateResponse](broken-reference)        | Delegate defines a method for performing a delegation of coins from a delegator to a validator.                                           |
| BeginRedelegate | [MsgBeginRedelegate](broken-reference) | [MsgBeginRedelegateResponse](broken-reference) | BeginRedelegate defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator. |
| Undelegate      | [MsgUndelegate](broken-reference)      | [MsgUndelegateResponse](broken-reference)      | Undelegate defines a method for performing an undelegation from a delegate and a validator.                                               |

[Top](broken-reference)

## cosmos/staking/v1beta1/query.proto

### QueryDelegationRequest

QueryDelegationRequest is request type for the Query/Delegation RPC method.

| Field           | Type                       | Label | Description                                                 |
| --------------- | -------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](broken-reference) |       | delegator\_addr defines the delegator address to query for. |
| validator\_addr | [string](broken-reference) |       | validator\_addr defines the validator address to query for. |

### QueryDelegationResponse

QueryDelegationResponse is response type for the Query/Delegation RPC method.

| Field                | Type                                   | Label | Description                                                        |
| -------------------- | -------------------------------------- | ----- | ------------------------------------------------------------------ |
| delegation\_response | [DelegationResponse](broken-reference) |       | delegation\_responses defines the delegation info of a delegation. |

### QueryDelegatorDelegationsRequest

QueryDelegatorDelegationsRequest is request type for the Query/DelegatorDelegations RPC method.

| Field           | Type                                                      | Label | Description                                                 |
| --------------- | --------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](broken-reference)                                |       | delegator\_addr defines the delegator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.  |

### QueryDelegatorDelegationsResponse

QueryDelegatorDelegationsResponse is response type for the Query/DelegatorDelegations RPC method.

| Field                 | Type                                                       | Label    | Description                                                             |
| --------------------- | ---------------------------------------------------------- | -------- | ----------------------------------------------------------------------- |
| delegation\_responses | [DelegationResponse](broken-reference)                     | repeated | delegation\_responses defines all the delegations' info of a delegator. |
| pagination            | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response.                      |

### QueryDelegatorUnbondingDelegationsRequest

QueryDelegatorUnbondingDelegationsRequest is request type for the Query/DelegatorUnbondingDelegations RPC method.

| Field           | Type                                                      | Label | Description                                                 |
| --------------- | --------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](broken-reference)                                |       | delegator\_addr defines the delegator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.  |

### QueryDelegatorUnbondingDelegationsResponse

QueryUnbondingDelegatorDelegationsResponse is response type for the Query/UnbondingDelegatorDelegations RPC method.

| Field                | Type                                                       | Label    | Description                                        |
| -------------------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| unbonding\_responses | [UnbondingDelegation](broken-reference)                    | repeated |                                                    |
| pagination           | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryDelegatorValidatorRequest

QueryDelegatorValidatorRequest is request type for the Query/DelegatorValidator RPC method.

| Field           | Type                       | Label | Description                                                 |
| --------------- | -------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](broken-reference) |       | delegator\_addr defines the delegator address to query for. |
| validator\_addr | [string](broken-reference) |       | validator\_addr defines the validator address to query for. |

### QueryDelegatorValidatorResponse

QueryDelegatorValidatorResponse response type for the Query/DelegatorValidator RPC method.

| Field     | Type                          | Label | Description                               |
| --------- | ----------------------------- | ----- | ----------------------------------------- |
| validator | [Validator](broken-reference) |       | validator defines the the validator info. |

### QueryDelegatorValidatorsRequest

QueryDelegatorValidatorsRequest is request type for the Query/DelegatorValidators RPC method.

| Field           | Type                                                      | Label | Description                                                 |
| --------------- | --------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](broken-reference)                                |       | delegator\_addr defines the delegator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.  |

### QueryDelegatorValidatorsResponse

QueryDelegatorValidatorsResponse is response type for the Query/DelegatorValidators RPC method.

| Field      | Type                                                       | Label    | Description                                                 |
| ---------- | ---------------------------------------------------------- | -------- | ----------------------------------------------------------- |
| validators | [Validator](broken-reference)                              | repeated | validators defines the the validators' info of a delegator. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response.          |

### QueryHistoricalInfoRequest

QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC method.

| Field  | Type                      | Label | Description                                                  |
| ------ | ------------------------- | ----- | ------------------------------------------------------------ |
| height | [int64](broken-reference) |       | height defines at which height to query the historical info. |

### QueryHistoricalInfoResponse

QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC method.

| Field | Type                               | Label | Description                                           |
| ----- | ---------------------------------- | ----- | ----------------------------------------------------- |
| hist  | [HistoricalInfo](broken-reference) |       | hist defines the historical info at the given height. |

### QueryParamsRequest

QueryParamsRequest is request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is response type for the Query/Params RPC method.

| Field  | Type                       | Label | Description                                     |
| ------ | -------------------------- | ----- | ----------------------------------------------- |
| params | [Params](broken-reference) |       | params holds all the parameters of this module. |

### QueryPoolRequest

QueryPoolRequest is request type for the Query/Pool RPC method.

### QueryPoolResponse

QueryPoolResponse is response type for the Query/Pool RPC method.

| Field | Type                     | Label | Description                 |
| ----- | ------------------------ | ----- | --------------------------- |
| pool  | [Pool](broken-reference) |       | pool defines the pool info. |

### QueryRedelegationsRequest

QueryRedelegationsRequest is request type for the Query/Redelegations RPC method.

| Field                | Type                                                      | Label | Description                                                            |
| -------------------- | --------------------------------------------------------- | ----- | ---------------------------------------------------------------------- |
| delegator\_addr      | [string](broken-reference)                                |       | delegator\_addr defines the delegator address to query for.            |
| src\_validator\_addr | [string](broken-reference)                                |       | src\_validator\_addr defines the validator address to redelegate from. |
| dst\_validator\_addr | [string](broken-reference)                                |       | dst\_validator\_addr defines the validator address to redelegate to.   |
| pagination           | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.             |

### QueryRedelegationsResponse

QueryRedelegationsResponse is response type for the Query/Redelegations RPC method.

| Field                   | Type                                                       | Label    | Description                                        |
| ----------------------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| redelegation\_responses | [RedelegationResponse](broken-reference)                   | repeated |                                                    |
| pagination              | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryUnbondingDelegationRequest

QueryUnbondingDelegationRequest is request type for the Query/UnbondingDelegation RPC method.

| Field           | Type                       | Label | Description                                                 |
| --------------- | -------------------------- | ----- | ----------------------------------------------------------- |
| delegator\_addr | [string](broken-reference) |       | delegator\_addr defines the delegator address to query for. |
| validator\_addr | [string](broken-reference) |       | validator\_addr defines the validator address to query for. |

### QueryUnbondingDelegationResponse

QueryDelegationResponse is response type for the Query/UnbondingDelegation RPC method.

| Field  | Type                                    | Label | Description                                               |
| ------ | --------------------------------------- | ----- | --------------------------------------------------------- |
| unbond | [UnbondingDelegation](broken-reference) |       | unbond defines the unbonding information of a delegation. |

### QueryValidatorDelegationsRequest

QueryValidatorDelegationsRequest is request type for the Query/ValidatorDelegations RPC method

| Field           | Type                                                      | Label | Description                                                 |
| --------------- | --------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| validator\_addr | [string](broken-reference)                                |       | validator\_addr defines the validator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.  |

### QueryValidatorDelegationsResponse

QueryValidatorDelegationsResponse is response type for the Query/ValidatorDelegations RPC method

| Field                 | Type                                                       | Label    | Description                                        |
| --------------------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| delegation\_responses | [DelegationResponse](broken-reference)                     | repeated |                                                    |
| pagination            | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryValidatorRequest

QueryValidatorRequest is response type for the Query/Validator RPC method

| Field           | Type                       | Label | Description                                                 |
| --------------- | -------------------------- | ----- | ----------------------------------------------------------- |
| validator\_addr | [string](broken-reference) |       | validator\_addr defines the validator address to query for. |

### QueryValidatorResponse

QueryValidatorResponse is response type for the Query/Validator RPC method

| Field     | Type                          | Label | Description                               |
| --------- | ----------------------------- | ----- | ----------------------------------------- |
| validator | [Validator](broken-reference) |       | validator defines the the validator info. |

### QueryValidatorUnbondingDelegationsRequest

QueryValidatorUnbondingDelegationsRequest is required type for the Query/ValidatorUnbondingDelegations RPC method

| Field           | Type                                                      | Label | Description                                                 |
| --------------- | --------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| validator\_addr | [string](broken-reference)                                |       | validator\_addr defines the validator address to query for. |
| pagination      | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.  |

### QueryValidatorUnbondingDelegationsResponse

QueryValidatorUnbondingDelegationsResponse is response type for the Query/ValidatorUnbondingDelegations RPC method.

| Field                | Type                                                       | Label    | Description                                        |
| -------------------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| unbonding\_responses | [UnbondingDelegation](broken-reference)                    | repeated |                                                    |
| pagination           | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryValidatorsRequest

QueryValidatorsRequest is request type for Query/Validators RPC method.

| Field      | Type                                                      | Label | Description                                                     |
| ---------- | --------------------------------------------------------- | ----- | --------------------------------------------------------------- |
| status     | [string](broken-reference)                                |       | status enables to query for validators matching a given status. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.      |

### QueryValidatorsResponse

QueryValidatorsResponse is response type for the Query/Validators RPC method

| Field      | Type                                                       | Label    | Description                                        |
| ---------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| validators | [Validator](broken-reference)                              | repeated | validators contains all the queried validators.    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### Query

Query defines the gRPC querier service.

| Method Name                   | Request Type                                                  | Response Type                                                  | Description                                                                                   |
| ----------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Validators                    | [QueryValidatorsRequest](broken-reference)                    | [QueryValidatorsResponse](broken-reference)                    | Validators queries all validators that match the given status.                                |
| Validator                     | [QueryValidatorRequest](broken-reference)                     | [QueryValidatorResponse](broken-reference)                     | Validator queries validator info for given validator address.                                 |
| ValidatorDelegations          | [QueryValidatorDelegationsRequest](broken-reference)          | [QueryValidatorDelegationsResponse](broken-reference)          | ValidatorDelegations queries delegate info for given validator.                               |
| ValidatorUnbondingDelegations | [QueryValidatorUnbondingDelegationsRequest](broken-reference) | [QueryValidatorUnbondingDelegationsResponse](broken-reference) | ValidatorUnbondingDelegations queries unbonding delegations of a validator.                   |
| Delegation                    | [QueryDelegationRequest](broken-reference)                    | [QueryDelegationResponse](broken-reference)                    | Delegation queries delegate info for given validator delegator pair.                          |
| UnbondingDelegation           | [QueryUnbondingDelegationRequest](broken-reference)           | [QueryUnbondingDelegationResponse](broken-reference)           | UnbondingDelegation queries unbonding info for given validator delegator pair.                |
| DelegatorDelegations          | [QueryDelegatorDelegationsRequest](broken-reference)          | [QueryDelegatorDelegationsResponse](broken-reference)          | DelegatorDelegations queries all delegations of a given delegator address.                    |
| DelegatorUnbondingDelegations | [QueryDelegatorUnbondingDelegationsRequest](broken-reference) | [QueryDelegatorUnbondingDelegationsResponse](broken-reference) | DelegatorUnbondingDelegations queries all unbonding delegations of a given delegator address. |
| Redelegations                 | [QueryRedelegationsRequest](broken-reference)                 | [QueryRedelegationsResponse](broken-reference)                 | Redelegations queries redelegations of given address.                                         |
| DelegatorValidators           | [QueryDelegatorValidatorsRequest](broken-reference)           | [QueryDelegatorValidatorsResponse](broken-reference)           | DelegatorValidators queries all validators info for given delegator address.                  |
| DelegatorValidator            | [QueryDelegatorValidatorRequest](broken-reference)            | [QueryDelegatorValidatorResponse](broken-reference)            | DelegatorValidator queries validator info for given delegator validator pair.                 |
| HistoricalInfo                | [QueryHistoricalInfoRequest](broken-reference)                | [QueryHistoricalInfoResponse](broken-reference)                | HistoricalInfo queries the historical info for given height.                                  |
| Pool                          | [QueryPoolRequest](broken-reference)                          | [QueryPoolResponse](broken-reference)                          | Pool queries the pool info.                                                                   |
| Params                        | [QueryParamsRequest](broken-reference)                        | [QueryParamsResponse](broken-reference)                        | Parameters queries the staking parameters.                                                    |

[Top](broken-reference)

## cosmos/staking/v1beta1/genesis.proto

### GenesisState

GenesisState defines the staking module's genesis state.

| Field                   | Type                                    | Label    | Description                                                                                                       |
| ----------------------- | --------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| params                  | [Params](broken-reference)              |          | params defines all the paramaters of related to deposit.                                                          |
| last\_total\_power      | [bytes](broken-reference)               |          | last\_total\_power tracks the total amounts of bonded tokens recorded during the previous end block.              |
| last\_validator\_powers | [LastValidatorPower](broken-reference)  | repeated | last\_validator\_powers is a special index that provides a historical list of the last-block's bonded validators. |
| validators              | [Validator](broken-reference)           | repeated | delegations defines the validator set at genesis.                                                                 |
| delegations             | [Delegation](broken-reference)          | repeated | delegations defines the delegations active at genesis.                                                            |
| unbonding\_delegations  | [UnbondingDelegation](broken-reference) | repeated | unbonding\_delegations defines the unbonding delegations active at genesis.                                       |
| redelegations           | [Redelegation](broken-reference)        | repeated | redelegations defines the redelegations active at genesis.                                                        |
| exported                | [bool](broken-reference)                |          |                                                                                                                   |

### LastValidatorPower

LastValidatorPower required for validator set update logic.

| Field   | Type                       | Label | Description                               |
| ------- | -------------------------- | ----- | ----------------------------------------- |
| address | [string](broken-reference) |       | address is the address of the validator.  |
| power   | [int64](broken-reference)  |       | power defines the power of the validator. |

[Top](broken-reference)

## cosmos/staking/v1beta1/staking.proto

### Commission

Commission defines commission parameters for a given validator.

| Field             | Type                                          | Label | Description |
| ----------------- | --------------------------------------------- | ----- | ----------- |
| commission\_rates | [CommissionRates](broken-reference)           |       |             |
| update\_time      | [google.protobuf.Timestamp](broken-reference) |       |             |

### CommissionRates

CommissionRates defines the initial commission rates to be used for creating a validator.

| Field             | Type                       | Label | Description |
| ----------------- | -------------------------- | ----- | ----------- |
| rate              | [string](broken-reference) |       |             |
| max\_rate         | [string](broken-reference) |       |             |
| max\_change\_rate | [string](broken-reference) |       |             |

### DVPair

DVPair is struct that just has a delegator-validator pair with no other data. It is intended to be used as a marshalable pointer. For example, a DVPair can be used to construct the key to getting an UnbondingDelegation from state.

| Field              | Type                       | Label | Description |
| ------------------ | -------------------------- | ----- | ----------- |
| delegator\_address | [string](broken-reference) |       |             |
| validator\_address | [string](broken-reference) |       |             |

### DVPairs

DVPairs defines an array of DVPair objects.

| Field | Type                       | Label    | Description |
| ----- | -------------------------- | -------- | ----------- |
| pairs | [DVPair](broken-reference) | repeated |             |

### DVVTriplet

DVVTriplet is struct that just has a delegator-validator-validator triplet with no other data. It is intended to be used as a marshalable pointer. For example, a DVVTriplet can be used to construct the key to getting a Redelegation from state.

| Field                   | Type                       | Label | Description |
| ----------------------- | -------------------------- | ----- | ----------- |
| delegator\_address      | [string](broken-reference) |       |             |
| validator\_src\_address | [string](broken-reference) |       |             |
| validator\_dst\_address | [string](broken-reference) |       |             |

### DVVTriplets

DVVTriplets defines an array of DVVTriplet objects.

| Field    | Type                           | Label    | Description |
| -------- | ------------------------------ | -------- | ----------- |
| triplets | [DVVTriplet](broken-reference) | repeated |             |

### Delegation

Delegation represents the bond with tokens held by an account. It is owned by one delegator, and is associated with the voting power of one validator.

| Field              | Type                       | Label | Description |
| ------------------ | -------------------------- | ----- | ----------- |
| delegator\_address | [string](broken-reference) |       |             |
| validator\_address | [string](broken-reference) |       |             |
| shares             | [string](broken-reference) |       |             |

### DelegationResponse

DelegationResponse is equivalent to Delegation except that it contains a balance in addition to shares which is more suitable for client responses.

| Field      | Type                                         | Label | Description |
| ---------- | -------------------------------------------- | ----- | ----------- |
| delegation | [Delegation](broken-reference)               |       |             |
| balance    | [cosmos.base.v1beta1.Coin](broken-reference) |       |             |

### Description

Description defines a validator description.

| Field             | Type                       | Label | Description |
| ----------------- | -------------------------- | ----- | ----------- |
| moniker           | [string](broken-reference) |       |             |
| identity          | [string](broken-reference) |       |             |
| website           | [string](broken-reference) |       |             |
| security\_contact | [string](broken-reference) |       |             |
| details           | [string](broken-reference) |       |             |

### HistoricalInfo

HistoricalInfo contains header and validator information for a given block. It is stored as part of staking module's state, which persists the `n` most recent HistoricalInfo (`n` is set by the staking module's `historical_entries` parameter).

| Field  | Type                                        | Label    | Description |
| ------ | ------------------------------------------- | -------- | ----------- |
| header | [tendermint.types.Header](broken-reference) |          |             |
| valset | [Validator](broken-reference)               | repeated |             |

### Params

Params defines the parameters for the staking module.

| Field               | Type                                         | Label | Description |
| ------------------- | -------------------------------------------- | ----- | ----------- |
| unbonding\_time     | [google.protobuf.Duration](broken-reference) |       |             |
| max\_validators     | [uint32](broken-reference)                   |       |             |
| max\_entries        | [uint32](broken-reference)                   |       |             |
| historical\_entries | [uint32](broken-reference)                   |       |             |
| bond\_denom         | [string](broken-reference)                   |       |             |

### Pool

Pool is used for tracking bonded and not-bonded token supply of the bond denomination.

| Field               | Type                       | Label | Description |
| ------------------- | -------------------------- | ----- | ----------- |
| not\_bonded\_tokens | [string](broken-reference) |       |             |
| bonded\_tokens      | [string](broken-reference) |       |             |

### Redelegation

Redelegation contains the list of a particular delegator's redelegating bonds from a particular source validator to a particular destination validator.

| Field                   | Type                                  | Label    | Description          |
| ----------------------- | ------------------------------------- | -------- | -------------------- |
| delegator\_address      | [string](broken-reference)            |          |                      |
| validator\_src\_address | [string](broken-reference)            |          |                      |
| validator\_dst\_address | [string](broken-reference)            |          |                      |
| entries                 | [RedelegationEntry](broken-reference) | repeated | redelegation entries |

### RedelegationEntry

RedelegationEntry defines a redelegation object with relevant metadata.

| Field            | Type                                          | Label | Description |
| ---------------- | --------------------------------------------- | ----- | ----------- |
| creation\_height | [int64](broken-reference)                     |       |             |
| completion\_time | [google.protobuf.Timestamp](broken-reference) |       |             |
| initial\_balance | [string](broken-reference)                    |       |             |
| shares\_dst      | [string](broken-reference)                    |       |             |

### RedelegationEntryResponse

RedelegationEntryResponse is equivalent to a RedelegationEntry except that it contains a balance in addition to shares which is more suitable for client responses.

| Field               | Type                                  | Label | Description |
| ------------------- | ------------------------------------- | ----- | ----------- |
| redelegation\_entry | [RedelegationEntry](broken-reference) |       |             |
| balance             | [string](broken-reference)            |       |             |

### RedelegationResponse

RedelegationResponse is equivalent to a Redelegation except that its entries contain a balance in addition to shares which is more suitable for client responses.

| Field        | Type                                          | Label    | Description |
| ------------ | --------------------------------------------- | -------- | ----------- |
| redelegation | [Redelegation](broken-reference)              |          |             |
| entries      | [RedelegationEntryResponse](broken-reference) | repeated |             |

### UnbondingDelegation

UnbondingDelegation stores all of a single delegator's unbonding bonds for a single validator in an time-ordered list.

| Field              | Type                                         | Label    | Description                  |
| ------------------ | -------------------------------------------- | -------- | ---------------------------- |
| delegator\_address | [string](broken-reference)                   |          |                              |
| validator\_address | [string](broken-reference)                   |          |                              |
| entries            | [UnbondingDelegationEntry](broken-reference) | repeated | unbonding delegation entries |

### UnbondingDelegationEntry

UnbondingDelegationEntry defines an unbonding object with relevant metadata.

| Field            | Type                                          | Label | Description |
| ---------------- | --------------------------------------------- | ----- | ----------- |
| creation\_height | [int64](broken-reference)                     |       |             |
| completion\_time | [google.protobuf.Timestamp](broken-reference) |       |             |
| initial\_balance | [string](broken-reference)                    |       |             |
| balance          | [string](broken-reference)                    |       |             |

### ValAddresses

ValAddresses defines a repeated set of validator addresses.

| Field     | Type                       | Label    | Description |
| --------- | -------------------------- | -------- | ----------- |
| addresses | [string](broken-reference) | repeated |             |

### Validator

Validator defines a validator, together with the total amount of the Validator's bond shares and their exchange rate to coins. Slashing results in a decrease in the exchange rate, allowing correct calculation of future undelegations without iterating over delegators. When coins are delegated to this validator, the validator is credited with a delegation whose number of bond shares is based on the amount of coins delegated divided by the current exchange rate. Voting power can be calculated as total bonded shares multiplied by exchange rate.

| Field                 | Type                                          | Label | Description |
| --------------------- | --------------------------------------------- | ----- | ----------- |
| operator\_address     | [string](broken-reference)                    |       |             |
| consensus\_pubkey     | [string](broken-reference)                    |       |             |
| jailed                | [bool](broken-reference)                      |       |             |
| status                | [BondStatus](broken-reference)                |       |             |
| tokens                | [string](broken-reference)                    |       |             |
| delegator\_shares     | [string](broken-reference)                    |       |             |
| description           | [Description](broken-reference)               |       |             |
| unbonding\_height     | [int64](broken-reference)                     |       |             |
| unbonding\_time       | [google.protobuf.Timestamp](broken-reference) |       |             |
| commission            | [Commission](broken-reference)                |       |             |
| min\_self\_delegation | [string](broken-reference)                    |       |             |

### BondStatus

BondStatus is the status of a validator.

| Name                      | Number | Description                                      |
| ------------------------- | ------ | ------------------------------------------------ |
| BOND\_STATUS\_UNSPECIFIED | 0      | UNSPECIFIED defines an invalid validator status. |
| BOND\_STATUS\_UNBONDED    | 1      | UNBONDED defines a validator that is not bonded. |
| BOND\_STATUS\_UNBONDING   | 2      | UNBONDING defines a validator that is unbonding. |
| BOND\_STATUS\_BONDED      | 3      | BONDED defines a validator that is bonded.       |

[Top](broken-reference)

## cosmos/genutil/v1beta1/genesis.proto

### GenesisState

GenesisState defines the raw genesis transaction in JSON.

| Field    | Type                      | Label    | Description                                |
| -------- | ------------------------- | -------- | ------------------------------------------ |
| gen\_txs | [bytes](broken-reference) | repeated | gen\_txs defines the genesis transactions. |

[Top](broken-reference)

## cosmos/params/v1beta1/query.proto

### QueryParamsRequest

QueryParamsRequest is request type for the Query/Params RPC method.

| Field    | Type                       | Label | Description                                             |
| -------- | -------------------------- | ----- | ------------------------------------------------------- |
| subspace | [string](broken-reference) |       | subspace defines the module to query the parameter for. |
| key      | [string](broken-reference) |       | key defines the key of the parameter in the subspace.   |

### QueryParamsResponse

QueryParamsResponse is response type for the Query/Params RPC method.

| Field | Type                            | Label | Description                          |
| ----- | ------------------------------- | ----- | ------------------------------------ |
| param | [ParamChange](broken-reference) |       | param defines the queried parameter. |

### Query

Query defines the gRPC querier service.

| Method Name | Request Type                           | Response Type                           | Description                                                                  |
| ----------- | -------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| Params      | [QueryParamsRequest](broken-reference) | [QueryParamsResponse](broken-reference) | Params queries a specific parameter of a module, given its subspace and key. |

[Top](broken-reference)

## cosmos/params/v1beta1/params.proto

### ParamChange

ParamChange defines an individual parameter change, for use in ParameterChangeProposal.

| Field    | Type                       | Label | Description |
| -------- | -------------------------- | ----- | ----------- |
| subspace | [string](broken-reference) |       |             |
| key      | [string](broken-reference) |       |             |
| value    | [string](broken-reference) |       |             |

### ParameterChangeProposal

ParameterChangeProposal defines a proposal to change one or more parameters.

| Field       | Type                            | Label    | Description |
| ----------- | ------------------------------- | -------- | ----------- |
| title       | [string](broken-reference)      |          |             |
| description | [string](broken-reference)      |          |             |
| changes     | [ParamChange](broken-reference) | repeated |             |

[Top](broken-reference)

## cosmos/slashing/v1beta1/tx.proto

### MsgUnjail

MsgUnjail defines the Msg/Unjail request type

| Field           | Type                       | Label | Description |
| --------------- | -------------------------- | ----- | ----------- |
| validator\_addr | [string](broken-reference) |       |             |

### MsgUnjailResponse

MsgUnjailResponse defines the Msg/Unjail response type

### Msg

Msg defines the slashing Msg service.

| Method Name | Request Type                  | Response Type                         | Description                                                                                                                                                            |
| ----------- | ----------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unjail      | [MsgUnjail](broken-reference) | [MsgUnjailResponse](broken-reference) | Unjail defines a method for unjailing a jailed validator, thus returning them into the bonded validator set, so they can begin receiving provisions and rewards again. |

[Top](broken-reference)

## cosmos/slashing/v1beta1/slashing.proto

### Params

Params represents the parameters used for by the slashing module.

| Field                         | Type                                         | Label | Description |
| ----------------------------- | -------------------------------------------- | ----- | ----------- |
| signed\_blocks\_window        | [int64](broken-reference)                    |       |             |
| min\_signed\_per\_window      | [bytes](broken-reference)                    |       |             |
| downtime\_jail\_duration      | [google.protobuf.Duration](broken-reference) |       |             |
| slash\_fraction\_double\_sign | [bytes](broken-reference)                    |       |             |
| slash\_fraction\_downtime     | [bytes](broken-reference)                    |       |             |

### ValidatorSigningInfo

ValidatorSigningInfo defines a validator's signing info for monitoring their liveness activity.

| Field                   | Type                                          | Label | Description                                                                  |
| ----------------------- | --------------------------------------------- | ----- | ---------------------------------------------------------------------------- |
| address                 | [string](broken-reference)                    |       |                                                                              |
| start\_height           | [int64](broken-reference)                     |       | height at which validator was first a candidate OR was unjailed              |
| index\_offset           | [int64](broken-reference)                     |       | index offset into signed block bit array                                     |
| jailed\_until           | [google.protobuf.Timestamp](broken-reference) |       | timestamp validator cannot be unjailed until                                 |
| tombstoned              | [bool](broken-reference)                      |       | whether or not a validator has been tombstoned (killed out of validator set) |
| missed\_blocks\_counter | [int64](broken-reference)                     |       | missed blocks counter (to avoid scanning the array every time)               |

[Top](broken-reference)

## cosmos/slashing/v1beta1/query.proto

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method

| Field  | Type                       | Label | Description |
| ------ | -------------------------- | ----- | ----------- |
| params | [Params](broken-reference) |       |             |

### QuerySigningInfoRequest

QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC method

| Field         | Type                       | Label | Description                                           |
| ------------- | -------------------------- | ----- | ----------------------------------------------------- |
| cons\_address | [string](broken-reference) |       | cons\_address is the address to query signing info of |

### QuerySigningInfoResponse

QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC method

| Field              | Type                                     | Label | Description                                                          |
| ------------------ | ---------------------------------------- | ----- | -------------------------------------------------------------------- |
| val\_signing\_info | [ValidatorSigningInfo](broken-reference) |       | val\_signing\_info is the signing info of requested val cons address |

### QuerySigningInfosRequest

QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC method

| Field      | Type                                                      | Label | Description |
| ---------- | --------------------------------------------------------- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       |             |

### QuerySigningInfosResponse

QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC method

| Field      | Type                                                       | Label    | Description                                |
| ---------- | ---------------------------------------------------------- | -------- | ------------------------------------------ |
| info       | [ValidatorSigningInfo](broken-reference)                   | repeated | info is the signing info of all validators |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          |                                            |

### Query

Query provides defines the gRPC querier service

| Method Name  | Request Type                                 | Response Type                                 | Description                                                |
| ------------ | -------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------- |
| Params       | [QueryParamsRequest](broken-reference)       | [QueryParamsResponse](broken-reference)       | Params queries the parameters of slashing module           |
| SigningInfo  | [QuerySigningInfoRequest](broken-reference)  | [QuerySigningInfoResponse](broken-reference)  | SigningInfo queries the signing info of given cons address |
| SigningInfos | [QuerySigningInfosRequest](broken-reference) | [QuerySigningInfosResponse](broken-reference) | SigningInfos queries signing info of all validators        |

[Top](broken-reference)

## cosmos/slashing/v1beta1/genesis.proto

### GenesisState

GenesisState defines the slashing module's genesis state.

| Field          | Type                                      | Label    | Description                                                                          |
| -------------- | ----------------------------------------- | -------- | ------------------------------------------------------------------------------------ |
| params         | [Params](broken-reference)                |          | params defines all the paramaters of related to deposit.                             |
| signing\_infos | [SigningInfo](broken-reference)           | repeated | signing\_infos represents a map between validator addresses and their signing infos. |
| missed\_blocks | [ValidatorMissedBlocks](broken-reference) | repeated | signing\_infos represents a map between validator addresses and their missed blocks. |

### MissedBlock

MissedBlock contains height and missed status as boolean.

| Field  | Type                      | Label | Description                                        |
| ------ | ------------------------- | ----- | -------------------------------------------------- |
| index  | [int64](broken-reference) |       | index is the height at which the block was missed. |
| missed | [bool](broken-reference)  |       | missed is the missed status.                       |

### SigningInfo

SigningInfo stores validator signing info of corresponding address.

| Field                    | Type                                     | Label | Description                                                             |
| ------------------------ | ---------------------------------------- | ----- | ----------------------------------------------------------------------- |
| address                  | [string](broken-reference)               |       | address is the validator address.                                       |
| validator\_signing\_info | [ValidatorSigningInfo](broken-reference) |       | validator\_signing\_info represents the signing info of this validator. |

### ValidatorMissedBlocks

ValidatorMissedBlocks contains array of missed blocks of corresponding address.

| Field          | Type                            | Label    | Description                                                   |
| -------------- | ------------------------------- | -------- | ------------------------------------------------------------- |
| address        | [string](broken-reference)      |          | address is the validator address.                             |
| missed\_blocks | [MissedBlock](broken-reference) | repeated | missed\_blocks is an array of missed blocks by the validator. |

[Top](broken-reference)

## cosmos/base/abci/v1beta1/abci.proto

### ABCIMessageLog

ABCIMessageLog defines a structure containing an indexed tx ABCI message log.

| Field      | Type                            | Label    | Description                                                                       |
| ---------- | ------------------------------- | -------- | --------------------------------------------------------------------------------- |
| msg\_index | [uint32](broken-reference)      |          |                                                                                   |
| log        | [string](broken-reference)      |          |                                                                                   |
| events     | [StringEvent](broken-reference) | repeated | Events contains a slice of Event objects that were emitted during some execution. |

### Attribute

Attribute defines an attribute wrapper where the key and value are strings instead of raw bytes.

| Field | Type                       | Label | Description |
| ----- | -------------------------- | ----- | ----------- |
| key   | [string](broken-reference) |       |             |
| value | [string](broken-reference) |       |             |

### GasInfo

GasInfo defines tx execution gas context.

| Field       | Type                       | Label | Description                                                         |
| ----------- | -------------------------- | ----- | ------------------------------------------------------------------- |
| gas\_wanted | [uint64](broken-reference) |       | GasWanted is the maximum units of work we allow this tx to perform. |
| gas\_used   | [uint64](broken-reference) |       | GasUsed is the amount of gas actually consumed.                     |

### MsgData

MsgData defines the data returned in a Result object during message execution.

| Field     | Type                       | Label | Description |
| --------- | -------------------------- | ----- | ----------- |
| msg\_type | [string](broken-reference) |       |             |
| data      | [bytes](broken-reference)  |       |             |

### Result

Result is the union of ResponseFormat and ResponseCheckTx.

| Field  | Type                                      | Label    | Description                                                                                                                                         |
| ------ | ----------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| data   | [bytes](broken-reference)                 |          | Data is any data returned from message or handler execution. It MUST be length prefixed in order to separate data from multiple message executions. |
| log    | [string](broken-reference)                |          | Log contains the log information from message or handler execution.                                                                                 |
| events | [tendermint.abci.Event](broken-reference) | repeated | Events contains a slice of Event objects that were emitted during message or handler execution.                                                     |

### SearchTxsResult

SearchTxsResult defines a structure for querying txs pageable

| Field        | Type                           | Label    | Description                         |
| ------------ | ------------------------------ | -------- | ----------------------------------- |
| total\_count | [uint64](broken-reference)     |          | Count of all txs                    |
| count        | [uint64](broken-reference)     |          | Count of txs in current page        |
| page\_number | [uint64](broken-reference)     |          | Index of current page, start from 1 |
| page\_total  | [uint64](broken-reference)     |          | Count of total pages                |
| limit        | [uint64](broken-reference)     |          | Max count txs per page              |
| txs          | [TxResponse](broken-reference) | repeated | List of txs in current page         |

### SimulationResponse

SimulationResponse defines the response generated when a transaction is successfully simulated.

| Field     | Type                        | Label | Description |
| --------- | --------------------------- | ----- | ----------- |
| gas\_info | [GasInfo](broken-reference) |       |             |
| result    | [Result](broken-reference)  |       |             |

### StringEvent

StringEvent defines en Event object wrapper where all the attributes contain key/value pairs that are strings instead of raw bytes.

| Field      | Type                          | Label    | Description |
| ---------- | ----------------------------- | -------- | ----------- |
| type       | [string](broken-reference)    |          |             |
| attributes | [Attribute](broken-reference) | repeated |             |

### TxMsgData

TxMsgData defines a list of MsgData. A transaction will have a MsgData object for each message.

| Field | Type                        | Label    | Description |
| ----- | --------------------------- | -------- | ----------- |
| data  | [MsgData](broken-reference) | repeated |             |

### TxResponse

TxResponse defines a structure containing relevant tx data and metadata. The tags are stringified and the log is JSON decoded.

| Field       | Type                                    | Label    | Description                                                                                                                                                             |
| ----------- | --------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| height      | [int64](broken-reference)               |          | The block height                                                                                                                                                        |
| txhash      | [string](broken-reference)              |          | The transaction hash.                                                                                                                                                   |
| codespace   | [string](broken-reference)              |          | Namespace for the Code                                                                                                                                                  |
| code        | [uint32](broken-reference)              |          | Response code.                                                                                                                                                          |
| data        | [string](broken-reference)              |          | Result bytes, if any.                                                                                                                                                   |
| raw\_log    | [string](broken-reference)              |          | The output of the application's logger (raw string). May be non-deterministic.                                                                                          |
| logs        | [ABCIMessageLog](broken-reference)      | repeated | The output of the application's logger (typed). May be non-deterministic.                                                                                               |
| info        | [string](broken-reference)              |          | Additional information. May be non-deterministic.                                                                                                                       |
| gas\_wanted | [int64](broken-reference)               |          | Amount of gas requested for transaction.                                                                                                                                |
| gas\_used   | [int64](broken-reference)               |          | Amount of gas consumed by transaction.                                                                                                                                  |
| tx          | [google.protobuf.Any](broken-reference) |          | The request transaction bytes.                                                                                                                                          |
| timestamp   | [string](broken-reference)              |          | Time of the previous block. For heights > 1, it's the weighted median of the timestamps of the valid votes in the block.LastCommit. For height == 1, it's genesis time. |

[Top](broken-reference)

## cosmos/base/kv/v1beta1/kv.proto

### Pair

Pair defines a key/value bytes tuple.

| Field | Type                      | Label | Description |
| ----- | ------------------------- | ----- | ----------- |
| key   | [bytes](broken-reference) |       |             |
| value | [bytes](broken-reference) |       |             |

### Pairs

Pairs defines a repeated slice of Pair objects.

| Field | Type                     | Label    | Description |
| ----- | ------------------------ | -------- | ----------- |
| pairs | [Pair](broken-reference) | repeated |             |

[Top](broken-reference)

## cosmos/base/snapshots/v1beta1/snapshot.proto

### Metadata

Metadata contains SDK-specific snapshot metadata.

| Field         | Type                      | Label    | Description          |
| ------------- | ------------------------- | -------- | -------------------- |
| chunk\_hashes | [bytes](broken-reference) | repeated | SHA-256 chunk hashes |

### Snapshot

Snapshot contains Tendermint state sync snapshot info.

| Field    | Type                         | Label | Description |
| -------- | ---------------------------- | ----- | ----------- |
| height   | [uint64](broken-reference)   |       |             |
| format   | [uint32](broken-reference)   |       |             |
| chunks   | [uint32](broken-reference)   |       |             |
| hash     | [bytes](broken-reference)    |       |             |
| metadata | [Metadata](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/base/simulate/v1beta1/simulate.proto

### SimulateRequest

SimulateRequest is the request type for the SimulateServiceService.Simulate RPC method.

| Field | Type                                     | Label | Description                        |
| ----- | ---------------------------------------- | ----- | ---------------------------------- |
| tx    | [cosmos.tx.v1beta1.Tx](broken-reference) |       | tx is the transaction to simulate. |

### SimulateResponse

SimulateResponse is the response type for the SimulateServiceService.SimulateRPC method.

| Field     | Type                                                 | Label | Description                                                    |
| --------- | ---------------------------------------------------- | ----- | -------------------------------------------------------------- |
| gas\_info | [cosmos.base.abci.v1beta1.GasInfo](broken-reference) |       | gas\_info is the information about gas used in the simulation. |
| result    | [cosmos.base.abci.v1beta1.Result](broken-reference)  |       | result is the result of the simulation.                        |

### SimulateService

SimulateService defines a gRPC service for simulating transactions. It may also support querying and broadcasting in the future.

| Method Name | Request Type                        | Response Type                        | Description                                                          |
| ----------- | ----------------------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Simulate    | [SimulateRequest](broken-reference) | [SimulateResponse](broken-reference) | Simulate simulates executing a transaction for estimating gas usage. |

[Top](broken-reference)

## cosmos/base/v1beta1/coin.proto

### Coin

Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method signatures required by gogoproto.

| Field  | Type                       | Label | Description |
| ------ | -------------------------- | ----- | ----------- |
| denom  | [string](broken-reference) |       |             |
| amount | [string](broken-reference) |       |             |

### DecCoin

DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method signatures required by gogoproto.

| Field  | Type                       | Label | Description |
| ------ | -------------------------- | ----- | ----------- |
| denom  | [string](broken-reference) |       |             |
| amount | [string](broken-reference) |       |             |

### DecProto

DecProto defines a Protobuf wrapper around a Dec object.

| Field | Type                       | Label | Description |
| ----- | -------------------------- | ----- | ----------- |
| dec   | [string](broken-reference) |       |             |

### IntProto

IntProto defines a Protobuf wrapper around an Int object.

| Field | Type                       | Label | Description |
| ----- | -------------------------- | ----- | ----------- |
| int   | [string](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/base/query/v1beta1/pagination.proto

### PageRequest

PageRequest is to be embedded in gRPC request messages for efficient pagination. Ex:

message SomeRequest { Foo some\_parameter = 1; PageRequest pagination = 2; }

| Field        | Type                       | Label | Description                                                                                                                                                                                                                         |
| ------------ | -------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key          | [bytes](broken-reference)  |       | key is a value returned in PageResponse.next\_key to begin querying the next page most efficiently. Only one of offset or key should be set.                                                                                        |
| offset       | [uint64](broken-reference) |       | offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set.                                                                                  |
| limit        | [uint64](broken-reference) |       | limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app.                                                                                             |
| count\_total | [bool](broken-reference)   |       | count\_total is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. count\_total is only respected when offset is used. It is ignored when key is set. |

### PageResponse

PageResponse is to be embedded in gRPC response messages where the corresponding request message has used PageRequest.

message SomeResponse { repeated Bar results = 1; PageResponse page = 2; }

| Field     | Type                       | Label | Description                                                                                                      |
| --------- | -------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| next\_key | [bytes](broken-reference)  |       | next\_key is the key to be passed to PageRequest.key to query the next page most efficiently                     |
| total     | [uint64](broken-reference) |       | total is total number of results available if PageRequest.count\_total was set, its value is undefined otherwise |

[Top](broken-reference)

## cosmos/base/store/v1beta1/commit\_info.proto

### CommitID

CommitID defines the committment information when a specific store is committed.

| Field   | Type                      | Label | Description |
| ------- | ------------------------- | ----- | ----------- |
| version | [int64](broken-reference) |       |             |
| hash    | [bytes](broken-reference) |       |             |

### CommitInfo

CommitInfo defines commit information used by the multi-store when committing a version/height.

| Field        | Type                          | Label    | Description |
| ------------ | ----------------------------- | -------- | ----------- |
| version      | [int64](broken-reference)     |          |             |
| store\_infos | [StoreInfo](broken-reference) | repeated |             |

### StoreInfo

StoreInfo defines store-specific commit information. It contains a reference between a store name and the commit ID.

| Field      | Type                         | Label | Description |
| ---------- | ---------------------------- | ----- | ----------- |
| name       | [string](broken-reference)   |       |             |
| commit\_id | [CommitID](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/base/store/v1beta1/snapshot.proto

### SnapshotIAVLItem

SnapshotIAVLItem is an exported IAVL node.

| Field   | Type                      | Label | Description |
| ------- | ------------------------- | ----- | ----------- |
| key     | [bytes](broken-reference) |       |             |
| value   | [bytes](broken-reference) |       |             |
| version | [int64](broken-reference) |       |             |
| height  | [int32](broken-reference) |       |             |

### SnapshotItem

SnapshotItem is an item contained in a rootmulti.Store snapshot.

| Field | Type                                  | Label | Description |
| ----- | ------------------------------------- | ----- | ----------- |
| store | [SnapshotStoreItem](broken-reference) |       |             |
| iavl  | [SnapshotIAVLItem](broken-reference)  |       |             |

### SnapshotStoreItem

SnapshotStoreItem contains metadata about a snapshotted store.

| Field | Type                       | Label | Description |
| ----- | -------------------------- | ----- | ----------- |
| name  | [string](broken-reference) |       |             |

[Top](broken-reference)

## cosmos/base/reflection/v1beta1/reflection.proto

### ListAllInterfacesRequest

ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.

### ListAllInterfacesResponse

ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.

| Field            | Type                       | Label    | Description                                                    |
| ---------------- | -------------------------- | -------- | -------------------------------------------------------------- |
| interface\_names | [string](broken-reference) | repeated | interface\_names is an array of all the registered interfaces. |

### ListImplementationsRequest

ListImplementationsRequest is the request type of the ListImplementations RPC.

| Field           | Type                       | Label | Description                                                             |
| --------------- | -------------------------- | ----- | ----------------------------------------------------------------------- |
| interface\_name | [string](broken-reference) |       | interface\_name defines the interface to query the implementations for. |

### ListImplementationsResponse

ListImplementationsResponse is the response type of the ListImplementations RPC.

| Field                          | Type                       | Label    | Description |
| ------------------------------ | -------------------------- | -------- | ----------- |
| implementation\_message\_names | [string](broken-reference) | repeated |             |

### ReflectionService

ReflectionService defines a service for interface reflection.

| Method Name         | Request Type                                   | Response Type                                   | Description                                                                       |
| ------------------- | ---------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| ListAllInterfaces   | [ListAllInterfacesRequest](broken-reference)   | [ListAllInterfacesResponse](broken-reference)   | ListAllInterfaces lists all the interfaces registered in the interface registry.  |
| ListImplementations | [ListImplementationsRequest](broken-reference) | [ListImplementationsResponse](broken-reference) | ListImplementations list all the concrete types that implement a given interface. |

[Top](broken-reference)

## cosmos/gov/v1beta1/tx.proto

### MsgDeposit

MsgDeposit defines a message to submit a deposit to an existing proposal.

| Field        | Type                                         | Label    | Description |
| ------------ | -------------------------------------------- | -------- | ----------- |
| proposal\_id | [uint64](broken-reference)                   |          |             |
| depositor    | [string](broken-reference)                   |          |             |
| amount       | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

### MsgDepositResponse

MsgDepositResponse defines the Msg/Deposit response type.

### MsgSubmitProposal

MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary proposal Content.

| Field            | Type                                         | Label    | Description |
| ---------------- | -------------------------------------------- | -------- | ----------- |
| content          | [google.protobuf.Any](broken-reference)      |          |             |
| initial\_deposit | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |
| proposer         | [string](broken-reference)                   |          |             |

### MsgSubmitProposalResponse

MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.

| Field        | Type                       | Label | Description |
| ------------ | -------------------------- | ----- | ----------- |
| proposal\_id | [uint64](broken-reference) |       |             |

### MsgVote

MsgVote defines a message to cast a vote.

| Field        | Type                           | Label | Description |
| ------------ | ------------------------------ | ----- | ----------- |
| proposal\_id | [uint64](broken-reference)     |       |             |
| voter        | [string](broken-reference)     |       |             |
| option       | [VoteOption](broken-reference) |       |             |

### MsgVoteResponse

MsgVoteResponse defines the Msg/Vote response type.

### Msg

Msg defines the bank Msg service.

| Method Name    | Request Type                          | Response Type                                 | Description                                                             |
| -------------- | ------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| SubmitProposal | [MsgSubmitProposal](broken-reference) | [MsgSubmitProposalResponse](broken-reference) | SubmitProposal defines a method to create new proposal given a content. |
| Vote           | [MsgVote](broken-reference)           | [MsgVoteResponse](broken-reference)           | Vote defines a method to add a vote on a specific proposal.             |
| Deposit        | [MsgDeposit](broken-reference)        | [MsgDepositResponse](broken-reference)        | Deposit defines a method to add deposit on a specific proposal.         |

[Top](broken-reference)

## cosmos/gov/v1beta1/gov.proto

### Deposit

Deposit defines an amount deposited by an account address to an active proposal.

| Field        | Type                                         | Label    | Description |
| ------------ | -------------------------------------------- | -------- | ----------- |
| proposal\_id | [uint64](broken-reference)                   |          |             |
| depositor    | [string](broken-reference)                   |          |             |
| amount       | [cosmos.base.v1beta1.Coin](broken-reference) | repeated |             |

### DepositParams

DepositParams defines the params for deposits on governance proposals.

| Field                | Type                                         | Label    | Description                                                                        |
| -------------------- | -------------------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| min\_deposit         | [cosmos.base.v1beta1.Coin](broken-reference) | repeated | Minimum deposit for a proposal to enter voting period.                             |
| max\_deposit\_period | [google.protobuf.Duration](broken-reference) |          | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |

### Proposal

Proposal defines the core field members of a governance proposal.

| Field                | Type                                          | Label    | Description |
| -------------------- | --------------------------------------------- | -------- | ----------- |
| proposal\_id         | [uint64](broken-reference)                    |          |             |
| content              | [google.protobuf.Any](broken-reference)       |          |             |
| status               | [ProposalStatus](broken-reference)            |          |             |
| final\_tally\_result | [TallyResult](broken-reference)               |          |             |
| submit\_time         | [google.protobuf.Timestamp](broken-reference) |          |             |
| deposit\_end\_time   | [google.protobuf.Timestamp](broken-reference) |          |             |
| total\_deposit       | [cosmos.base.v1beta1.Coin](broken-reference)  | repeated |             |
| voting\_start\_time  | [google.protobuf.Timestamp](broken-reference) |          |             |
| voting\_end\_time    | [google.protobuf.Timestamp](broken-reference) |          |             |

### TallyParams

TallyParams defines the params for tallying votes on governance proposals.

| Field           | Type                      | Label | Description                                                                                     |
| --------------- | ------------------------- | ----- | ----------------------------------------------------------------------------------------------- |
| quorum          | [bytes](broken-reference) |       | Minimum percentage of total stake needed to vote for a result to be considered valid.           |
| threshold       | [bytes](broken-reference) |       | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.                       |
| veto\_threshold | [bytes](broken-reference) |       | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |

### TallyResult

TallyResult defines a standard tally for a governance proposal.

| Field          | Type                       | Label | Description |
| -------------- | -------------------------- | ----- | ----------- |
| yes            | [string](broken-reference) |       |             |
| abstain        | [string](broken-reference) |       |             |
| no             | [string](broken-reference) |       |             |
| no\_with\_veto | [string](broken-reference) |       |             |

### TextProposal

TextProposal defines a standard text proposal whose changes need to be manually updated in case of approval.

| Field       | Type                       | Label | Description |
| ----------- | -------------------------- | ----- | ----------- |
| title       | [string](broken-reference) |       |             |
| description | [string](broken-reference) |       |             |

### Vote

Vote defines a vote on a governance proposal. A Vote consists of a proposal ID, the voter, and the vote option.

| Field        | Type                           | Label | Description |
| ------------ | ------------------------------ | ----- | ----------- |
| proposal\_id | [uint64](broken-reference)     |       |             |
| voter        | [string](broken-reference)     |       |             |
| option       | [VoteOption](broken-reference) |       |             |

### VotingParams

VotingParams defines the params for voting on governance proposals.

| Field          | Type                                         | Label | Description                  |
| -------------- | -------------------------------------------- | ----- | ---------------------------- |
| voting\_period | [google.protobuf.Duration](broken-reference) |       | Length of the voting period. |

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

[Top](broken-reference)

## cosmos/gov/v1beta1/query.proto

### QueryDepositRequest

QueryDepositRequest is the request type for the Query/Deposit RPC method.

| Field        | Type                       | Label | Description                                                 |
| ------------ | -------------------------- | ----- | ----------------------------------------------------------- |
| proposal\_id | [uint64](broken-reference) |       | proposal\_id defines the unique id of the proposal.         |
| depositor    | [string](broken-reference) |       | depositor defines the deposit addresses from the proposals. |

### QueryDepositResponse

QueryDepositResponse is the response type for the Query/Deposit RPC method.

| Field   | Type                        | Label | Description                            |
| ------- | --------------------------- | ----- | -------------------------------------- |
| deposit | [Deposit](broken-reference) |       | deposit defines the requested deposit. |

### QueryDepositsRequest

QueryDepositsRequest is the request type for the Query/Deposits RPC method.

| Field        | Type                                                      | Label | Description                                                |
| ------------ | --------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| proposal\_id | [uint64](broken-reference)                                |       | proposal\_id defines the unique id of the proposal.        |
| pagination   | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request. |

### QueryDepositsResponse

QueryDepositsResponse is the response type for the Query/Deposits RPC method.

| Field      | Type                                                       | Label    | Description                                        |
| ---------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| deposits   | [Deposit](broken-reference)                                | repeated |                                                    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

| Field        | Type                       | Label | Description                                                                                          |
| ------------ | -------------------------- | ----- | ---------------------------------------------------------------------------------------------------- |
| params\_type | [string](broken-reference) |       | params\_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit". |

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field           | Type                              | Label | Description                                                |
| --------------- | --------------------------------- | ----- | ---------------------------------------------------------- |
| voting\_params  | [VotingParams](broken-reference)  |       | voting\_params defines the parameters related to voting.   |
| deposit\_params | [DepositParams](broken-reference) |       | deposit\_params defines the parameters related to deposit. |
| tally\_params   | [TallyParams](broken-reference)   |       | tally\_params defines the parameters related to tally.     |

### QueryProposalRequest

QueryProposalRequest is the request type for the Query/Proposal RPC method.

| Field        | Type                       | Label | Description                                         |
| ------------ | -------------------------- | ----- | --------------------------------------------------- |
| proposal\_id | [uint64](broken-reference) |       | proposal\_id defines the unique id of the proposal. |

### QueryProposalResponse

QueryProposalResponse is the response type for the Query/Proposal RPC method.

| Field    | Type                         | Label | Description |
| -------- | ---------------------------- | ----- | ----------- |
| proposal | [Proposal](broken-reference) |       |             |

### QueryProposalsRequest

QueryProposalsRequest is the request type for the Query/Proposals RPC method.

| Field            | Type                                                      | Label | Description                                                 |
| ---------------- | --------------------------------------------------------- | ----- | ----------------------------------------------------------- |
| proposal\_status | [ProposalStatus](broken-reference)                        |       | proposal\_status defines the status of the proposals.       |
| voter            | [string](broken-reference)                                |       | voter defines the voter address for the proposals.          |
| depositor        | [string](broken-reference)                                |       | depositor defines the deposit addresses from the proposals. |
| pagination       | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request.  |

### QueryProposalsResponse

QueryProposalsResponse is the response type for the Query/Proposals RPC method.

| Field      | Type                                                       | Label    | Description                                        |
| ---------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| proposals  | [Proposal](broken-reference)                               | repeated |                                                    |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### QueryTallyResultRequest

QueryTallyResultRequest is the request type for the Query/Tally RPC method.

| Field        | Type                       | Label | Description                                         |
| ------------ | -------------------------- | ----- | --------------------------------------------------- |
| proposal\_id | [uint64](broken-reference) |       | proposal\_id defines the unique id of the proposal. |

### QueryTallyResultResponse

QueryTallyResultResponse is the response type for the Query/Tally RPC method.

| Field | Type                            | Label | Description                        |
| ----- | ------------------------------- | ----- | ---------------------------------- |
| tally | [TallyResult](broken-reference) |       | tally defines the requested tally. |

### QueryVoteRequest

QueryVoteRequest is the request type for the Query/Vote RPC method.

| Field        | Type                       | Label | Description                                         |
| ------------ | -------------------------- | ----- | --------------------------------------------------- |
| proposal\_id | [uint64](broken-reference) |       | proposal\_id defines the unique id of the proposal. |
| voter        | [string](broken-reference) |       | voter defines the oter address for the proposals.   |

### QueryVoteResponse

QueryVoteResponse is the response type for the Query/Vote RPC method.

| Field | Type                     | Label | Description                    |
| ----- | ------------------------ | ----- | ------------------------------ |
| vote  | [Vote](broken-reference) |       | vote defined the queried vote. |

### QueryVotesRequest

QueryVotesRequest is the request type for the Query/Votes RPC method.

| Field        | Type                                                      | Label | Description                                                |
| ------------ | --------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| proposal\_id | [uint64](broken-reference)                                |       | proposal\_id defines the unique id of the proposal.        |
| pagination   | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request. |

### QueryVotesResponse

QueryVotesResponse is the response type for the Query/Votes RPC method.

| Field      | Type                                                       | Label    | Description                                        |
| ---------- | ---------------------------------------------------------- | -------- | -------------------------------------------------- |
| votes      | [Vote](broken-reference)                                   | repeated | votes defined the queried votes.                   |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response. |

### Query

Query defines the gRPC querier service for gov module

| Method Name | Request Type                                | Response Type                                | Description                                                               |
| ----------- | ------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------- |
| Proposal    | [QueryProposalRequest](broken-reference)    | [QueryProposalResponse](broken-reference)    | Proposal queries proposal details based on ProposalID.                    |
| Proposals   | [QueryProposalsRequest](broken-reference)   | [QueryProposalsResponse](broken-reference)   | Proposals queries all proposals based on given status.                    |
| Vote        | [QueryVoteRequest](broken-reference)        | [QueryVoteResponse](broken-reference)        | Vote queries voted information based on proposalID, voterAddr.            |
| Votes       | [QueryVotesRequest](broken-reference)       | [QueryVotesResponse](broken-reference)       | Votes queries votes of a given proposal.                                  |
| Params      | [QueryParamsRequest](broken-reference)      | [QueryParamsResponse](broken-reference)      | Params queries all parameters of the gov module.                          |
| Deposit     | [QueryDepositRequest](broken-reference)     | [QueryDepositResponse](broken-reference)     | Deposit queries single deposit information based proposalID, depositAddr. |
| Deposits    | [QueryDepositsRequest](broken-reference)    | [QueryDepositsResponse](broken-reference)    | Deposits queries all deposits of a single proposal.                       |
| TallyResult | [QueryTallyResultRequest](broken-reference) | [QueryTallyResultResponse](broken-reference) | TallyResult queries the tally of a proposal vote.                         |

[Top](broken-reference)

## cosmos/gov/v1beta1/genesis.proto

### GenesisState

GenesisState defines the gov module's genesis state.

| Field                  | Type                              | Label    | Description                                                |
| ---------------------- | --------------------------------- | -------- | ---------------------------------------------------------- |
| starting\_proposal\_id | [uint64](broken-reference)        |          | starting\_proposal\_id is the ID of the starting proposal. |
| deposits               | [Deposit](broken-reference)       | repeated | deposits defines all the deposits present at genesis.      |
| votes                  | [Vote](broken-reference)          | repeated | votes defines all the votes present at genesis.            |
| proposals              | [Proposal](broken-reference)      | repeated | proposals defines all the proposals present at genesis.    |
| deposit\_params        | [DepositParams](broken-reference) |          | params defines all the paramaters of related to deposit.   |
| voting\_params         | [VotingParams](broken-reference)  |          | params defines all the paramaters of related to voting.    |
| tally\_params          | [TallyParams](broken-reference)   |          | params defines all the paramaters of related to tally.     |

[Top](broken-reference)

## ibc/core/types/v1/genesis.proto

### GenesisState

GenesisState defines the ibc module's genesis state.

| Field               | Type                                                    | Label | Description                        |
| ------------------- | ------------------------------------------------------- | ----- | ---------------------------------- |
| client\_genesis     | [ibc.core.client.v1.GenesisState](broken-reference)     |       | ICS002 - Clients genesis state     |
| connection\_genesis | [ibc.core.connection.v1.GenesisState](broken-reference) |       | ICS003 - Connections genesis state |
| channel\_genesis    | [ibc.core.channel.v1.GenesisState](broken-reference)    |       | ICS004 - Channel genesis state     |

[Top](broken-reference)

## ibc/core/connection/v1/query.proto

### QueryClientConnectionsRequest

QueryClientConnectionsRequest is the request type for the Query/ClientConnections RPC method

| Field      | Type                       | Label | Description                                    |
| ---------- | -------------------------- | ----- | ---------------------------------------------- |
| client\_id | [string](broken-reference) |       | client identifier associated with a connection |

### QueryClientConnectionsResponse

QueryClientConnectionsResponse is the response type for the Query/ClientConnections RPC method

| Field             | Type                                          | Label    | Description                                                 |
| ----------------- | --------------------------------------------- | -------- | ----------------------------------------------------------- |
| connection\_paths | [string](broken-reference)                    | repeated | slice of all the connection paths associated with a client. |
| proof             | [bytes](broken-reference)                     |          | merkle proof of existence                                   |
| proof\_path       | [string](broken-reference)                    |          | merkle proof path                                           |
| proof\_height     | [ibc.core.client.v1.Height](broken-reference) |          | height at which the proof was generated                     |

### QueryConnectionClientStateRequest

QueryConnectionClientStateRequest is the request type for the Query/ConnectionClientState RPC method

| Field          | Type                       | Label | Description           |
| -------------- | -------------------------- | ----- | --------------------- |
| connection\_id | [string](broken-reference) |       | connection identifier |

### QueryConnectionClientStateResponse

QueryConnectionClientStateResponse is the response type for the Query/ConnectionClientState RPC method

| Field                     | Type                                                         | Label | Description                              |
| ------------------------- | ------------------------------------------------------------ | ----- | ---------------------------------------- |
| identified\_client\_state | [ibc.core.client.v1.IdentifiedClientState](broken-reference) |       | client state associated with the channel |
| proof                     | [bytes](broken-reference)                                    |       | merkle proof of existence                |
| proof\_path               | [string](broken-reference)                                   |       | merkle proof path                        |
| proof\_height             | [ibc.core.client.v1.Height](broken-reference)                |       | height at which the proof was retrieved  |

### QueryConnectionConsensusStateRequest

QueryConnectionConsensusStateRequest is the request type for the Query/ConnectionConsensusState RPC method

| Field           | Type                       | Label | Description           |
| --------------- | -------------------------- | ----- | --------------------- |
| connection\_id  | [string](broken-reference) |       | connection identifier |
| version\_number | [uint64](broken-reference) |       |                       |
| version\_height | [uint64](broken-reference) |       |                       |

### QueryConnectionConsensusStateResponse

QueryConnectionConsensusStateResponse is the response type for the Query/ConnectionConsensusState RPC method

| Field            | Type                                          | Label | Description                                   |
| ---------------- | --------------------------------------------- | ----- | --------------------------------------------- |
| consensus\_state | [google.protobuf.Any](broken-reference)       |       | consensus state associated with the channel   |
| client\_id       | [string](broken-reference)                    |       | client ID associated with the consensus state |
| proof            | [bytes](broken-reference)                     |       | merkle proof of existence                     |
| proof\_path      | [string](broken-reference)                    |       | merkle proof path                             |
| proof\_height    | [ibc.core.client.v1.Height](broken-reference) |       | height at which the proof was retrieved       |

### QueryConnectionRequest

QueryConnectionRequest is the request type for the Query/Connection RPC method

| Field          | Type                       | Label | Description                  |
| -------------- | -------------------------- | ----- | ---------------------------- |
| connection\_id | [string](broken-reference) |       | connection unique identifier |

### QueryConnectionResponse

QueryConnectionResponse is the response type for the Query/Connection RPC method. Besides the connection end, it includes a proof and the height from which the proof was retrieved.

| Field         | Type                                          | Label | Description                                       |
| ------------- | --------------------------------------------- | ----- | ------------------------------------------------- |
| connection    | [ConnectionEnd](broken-reference)             |       | connection associated with the request identifier |
| proof         | [bytes](broken-reference)                     |       | merkle proof of existence                         |
| proof\_path   | [string](broken-reference)                    |       | merkle proof path                                 |
| proof\_height | [ibc.core.client.v1.Height](broken-reference) |       | height at which the proof was retrieved           |

### QueryConnectionsRequest

QueryConnectionsRequest is the request type for the Query/Connections RPC method

| Field      | Type                                                      | Label | Description |
| ---------- | --------------------------------------------------------- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       |             |

### QueryConnectionsResponse

QueryConnectionsResponse is the response type for the Query/Connections RPC method.

| Field       | Type                                                       | Label    | Description                              |
| ----------- | ---------------------------------------------------------- | -------- | ---------------------------------------- |
| connections | [IdentifiedConnection](broken-reference)                   | repeated | list of stored connections of the chain. |
| pagination  | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination response                      |
| height      | [ibc.core.client.v1.Height](broken-reference)              |          | query block height                       |

### Query

Query provides defines the gRPC querier service

| Method Name              | Request Type                                             | Response Type                                             | Description                                                                          |
| ------------------------ | -------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Connection               | [QueryConnectionRequest](broken-reference)               | [QueryConnectionResponse](broken-reference)               | Connection queries an IBC connection end.                                            |
| Connections              | [QueryConnectionsRequest](broken-reference)              | [QueryConnectionsResponse](broken-reference)              | Connections queries all the IBC connections of a chain.                              |
| ClientConnections        | [QueryClientConnectionsRequest](broken-reference)        | [QueryClientConnectionsResponse](broken-reference)        | ClientConnections queries the connection paths associated with a client state.       |
| ConnectionClientState    | [QueryConnectionClientStateRequest](broken-reference)    | [QueryConnectionClientStateResponse](broken-reference)    | ConnectionClientState queries the client state associated with the connection.       |
| ConnectionConsensusState | [QueryConnectionConsensusStateRequest](broken-reference) | [QueryConnectionConsensusStateResponse](broken-reference) | ConnectionConsensusState queries the consensus state associated with the connection. |

[Top](broken-reference)

## ibc/core/connection/v1/connection.proto

### ClientPaths

ClientPaths define all the connection paths for a client state.

| Field | Type                       | Label    | Description              |
| ----- | -------------------------- | -------- | ------------------------ |
| paths | [string](broken-reference) | repeated | list of connection paths |

### ConnectionEnd

ConnectionEnd defines a stateful object on a chain connected to another separate one. NOTE: there must only be 2 defined ConnectionEnds to establish a connection between two chains.

| Field        | Type                             | Label    | Description                                                                                                             |
| ------------ | -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| client\_id   | [string](broken-reference)       |          | client associated with this connection.                                                                                 |
| versions     | [string](broken-reference)       | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection |
| state        | [State](broken-reference)        |          | current state of the connection end.                                                                                    |
| counterparty | [Counterparty](broken-reference) |          | counterparty chain associated with this connection.                                                                     |

### ConnectionPaths

ConnectionPaths define all the connection paths for a given client state.

| Field      | Type                       | Label    | Description                    |
| ---------- | -------------------------- | -------- | ------------------------------ |
| client\_id | [string](broken-reference) |          | client state unique identifier |
| paths      | [string](broken-reference) | repeated | list of connection paths       |

### Counterparty

Counterparty defines the counterparty chain associated with a connection end.

| Field          | Type                                                    | Label | Description                                                                                 |
| -------------- | ------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------- |
| client\_id     | [string](broken-reference)                              |       | identifies the client on the counterparty chain associated with a given connection.         |
| connection\_id | [string](broken-reference)                              |       | identifies the connection end on the counterparty chain associated with a given connection. |
| prefix         | [ibc.core.commitment.v1.MerklePrefix](broken-reference) |       | commitment merkle prefix of the counterparty chain                                          |

### IdentifiedConnection

IdentifiedConnection defines a connection with additional connection identifier field.

| Field        | Type                             | Label    | Description                                                                                                             |
| ------------ | -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| id           | [string](broken-reference)       |          | connection identifier.                                                                                                  |
| client\_id   | [string](broken-reference)       |          | client associated with this connection.                                                                                 |
| versions     | [string](broken-reference)       | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection |
| state        | [State](broken-reference)        |          | current state of the connection end.                                                                                    |
| counterparty | [Counterparty](broken-reference) |          | counterparty chain associated with this connection.                                                                     |

### MsgConnectionOpenAck

MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of connection state to TRYOPEN on Chain B.

| Field                        | Type                                          | Label | Description                                                                        |
| ---------------------------- | --------------------------------------------- | ----- | ---------------------------------------------------------------------------------- |
| connection\_id               | [string](broken-reference)                    |       |                                                                                    |
| counterparty\_connection\_id | [string](broken-reference)                    |       |                                                                                    |
| version                      | [string](broken-reference)                    |       |                                                                                    |
| client\_state                | [google.protobuf.Any](broken-reference)       |       |                                                                                    |
| proof\_height                | [ibc.core.client.v1.Height](broken-reference) |       |                                                                                    |
| proof\_try                   | [bytes](broken-reference)                     |       | proof of the initialization the connection on Chain B: `UNITIALIZED -&gt; TRYOPEN` |
| proof\_client                | [bytes](broken-reference)                     |       | proof of client state included in message                                          |
| proof\_consensus             | [bytes](broken-reference)                     |       | proof of client consensus state                                                    |
| consensus\_height            | [ibc.core.client.v1.Height](broken-reference) |       |                                                                                    |
| signer                       | [string](broken-reference)                    |       |                                                                                    |

### MsgConnectionOpenAckResponse

MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type.

### MsgConnectionOpenConfirm

MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of connection state to OPEN on Chain A.

| Field          | Type                                          | Label | Description                                                                |
| -------------- | --------------------------------------------- | ----- | -------------------------------------------------------------------------- |
| connection\_id | [string](broken-reference)                    |       |                                                                            |
| proof\_ack     | [bytes](broken-reference)                     |       | proof for the change of the connection state on Chain A: `INIT -&gt; OPEN` |
| proof\_height  | [ibc.core.client.v1.Height](broken-reference) |       |                                                                            |
| signer         | [string](broken-reference)                    |       |                                                                            |

### MsgConnectionOpenConfirmResponse

MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm response type.

### MsgConnectionOpenInit

MsgConnectionOpenInit defines the msg sent by an account on Chain A to initialize a connection with Chain B.

| Field          | Type                             | Label | Description |
| -------------- | -------------------------------- | ----- | ----------- |
| client\_id     | [string](broken-reference)       |       |             |
| connection\_id | [string](broken-reference)       |       |             |
| counterparty   | [Counterparty](broken-reference) |       |             |
| version        | [string](broken-reference)       |       |             |
| signer         | [string](broken-reference)       |       |             |

### MsgConnectionOpenInitResponse

MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response type.

### MsgConnectionOpenTry

MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a connection on Chain B.

| Field                                | Type                                          | Label    | Description                                                                     |
| ------------------------------------ | --------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| client\_id                           | [string](broken-reference)                    |          |                                                                                 |
| desired\_connection\_id              | [string](broken-reference)                    |          |                                                                                 |
| counterparty\_chosen\_connection\_id | [string](broken-reference)                    |          |                                                                                 |
| client\_state                        | [google.protobuf.Any](broken-reference)       |          |                                                                                 |
| counterparty                         | [Counterparty](broken-reference)              |          |                                                                                 |
| counterparty\_versions               | [string](broken-reference)                    | repeated |                                                                                 |
| proof\_height                        | [ibc.core.client.v1.Height](broken-reference) |          |                                                                                 |
| proof\_init                          | [bytes](broken-reference)                     |          | proof of the initialization the connection on Chain A: `UNITIALIZED -&gt; INIT` |
| proof\_client                        | [bytes](broken-reference)                     |          | proof of client state included in message                                       |
| proof\_consensus                     | [bytes](broken-reference)                     |          | proof of client consensus state                                                 |
| consensus\_height                    | [ibc.core.client.v1.Height](broken-reference) |          |                                                                                 |
| signer                               | [string](broken-reference)                    |          |                                                                                 |

### MsgConnectionOpenTryResponse

MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type.

### Version

Version defines the versioning scheme used to negotiate the IBC verison in the connection handshake.

| Field      | Type                       | Label    | Description                                               |
| ---------- | -------------------------- | -------- | --------------------------------------------------------- |
| identifier | [string](broken-reference) |          | unique version identifier                                 |
| features   | [string](broken-reference) | repeated | list of features compatible with the specified identifier |

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

| Method Name           | Request Type                                 | Response Type                                        | Description                                                                      |
| --------------------- | -------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| ConnectionOpenInit    | [MsgConnectionOpenInit](broken-reference)    | [MsgConnectionOpenInitResponse](broken-reference)    | ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.       |
| ConnectionOpenTry     | [MsgConnectionOpenTry](broken-reference)     | [MsgConnectionOpenTryResponse](broken-reference)     | ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.         |
| ConnectionOpenAck     | [MsgConnectionOpenAck](broken-reference)     | [MsgConnectionOpenAckResponse](broken-reference)     | ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.         |
| ConnectionOpenConfirm | [MsgConnectionOpenConfirm](broken-reference) | [MsgConnectionOpenConfirmResponse](broken-reference) | ConnectionOpenConfirm defines a rpc handler method for MsgConnectionOpenConfirm. |

[Top](broken-reference)

## ibc/core/connection/v1/genesis.proto

### GenesisState

GenesisState defines the ibc connection submodule's genesis state.

| Field                     | Type                                     | Label    | Description |
| ------------------------- | ---------------------------------------- | -------- | ----------- |
| connections               | [IdentifiedConnection](broken-reference) | repeated |             |
| client\_connection\_paths | [ConnectionPaths](broken-reference)      | repeated |             |

[Top](broken-reference)

## ibc/core/commitment/v1/commitment.proto

### Key

Key defines a proof Key

| Field | Type                            | Label | Description |
| ----- | ------------------------------- | ----- | ----------- |
| name  | [bytes](broken-reference)       |       |             |
| enc   | [KeyEncoding](broken-reference) |       |             |

### KeyPath

KeyPath defines a slice of keys

| Field | Type                    | Label    | Description |
| ----- | ----------------------- | -------- | ----------- |
| keys  | [Key](broken-reference) | repeated |             |

### MerklePath

MerklePath is the path used to verify commitment proofs, which can be an arbitrary structured object (defined by a commitment type).

| Field     | Type                        | Label | Description |
| --------- | --------------------------- | ----- | ----------- |
| key\_path | [KeyPath](broken-reference) |       |             |

### MerklePrefix

MerklePrefix is merkle path prefixed to the key. The constructed key from the Path and the key will be append(Path.KeyPath, append(Path.KeyPrefix, key...))

| Field       | Type                      | Label | Description |
| ----------- | ------------------------- | ----- | ----------- |
| key\_prefix | [bytes](broken-reference) |       |             |

### MerkleProof

MerkleProof is a wrapper type that contains a merkle proof. It demonstrates membership or non-membership for an element or set of elements, verifiable in conjunction with a known commitment root. Proofs should be succinct.

| Field | Type                                           | Label | Description |
| ----- | ---------------------------------------------- | ----- | ----------- |
| proof | [tendermint.crypto.ProofOps](broken-reference) |       |             |

### MerkleRoot

MerkleRoot defines a merkle root hash. In the Cosmos SDK, the AppHash of a block header becomes the root.

| Field | Type                      | Label | Description |
| ----- | ------------------------- | ----- | ----------- |
| hash  | [bytes](broken-reference) |       |             |

### KeyEncoding

KeyEncoding defines the encoding format of a key's bytes.

| Name                            | Number | Description  |
| ------------------------------- | ------ | ------------ |
| KEY\_ENCODING\_URL\_UNSPECIFIED | 0      | URL encoding |
| KEY\_ENCODING\_HEX              | 1      | Hex encoding |

[Top](broken-reference)

## ibc/core/channel/v1/query.proto

### QueryChannelClientStateRequest

QueryChannelClientStateRequest is the request type for the Query/ClientState RPC method

| Field       | Type                       | Label | Description               |
| ----------- | -------------------------- | ----- | ------------------------- |
| port\_id    | [string](broken-reference) |       | port unique identifier    |
| channel\_id | [string](broken-reference) |       | channel unique identifier |

### QueryChannelClientStateResponse

QueryChannelClientStateResponse is the Response type for the Query/QueryChannelClientState RPC method

| Field                     | Type                                                         | Label | Description                              |
| ------------------------- | ------------------------------------------------------------ | ----- | ---------------------------------------- |
| identified\_client\_state | [ibc.core.client.v1.IdentifiedClientState](broken-reference) |       | client state associated with the channel |
| proof                     | [bytes](broken-reference)                                    |       | merkle proof of existence                |
| proof\_path               | [string](broken-reference)                                   |       | merkle proof path                        |
| proof\_height             | [ibc.core.client.v1.Height](broken-reference)                |       | height at which the proof was retrieved  |

### QueryChannelConsensusStateRequest

QueryChannelConsensusStateRequest is the request type for the Query/ConsensusState RPC method

| Field           | Type                       | Label | Description                           |
| --------------- | -------------------------- | ----- | ------------------------------------- |
| port\_id        | [string](broken-reference) |       | port unique identifier                |
| channel\_id     | [string](broken-reference) |       | channel unique identifier             |
| version\_number | [uint64](broken-reference) |       | version number of the consensus state |
| version\_height | [uint64](broken-reference) |       | version height of the consensus state |

### QueryChannelConsensusStateResponse

QueryChannelClientStateResponse is the Response type for the Query/QueryChannelClientState RPC method

| Field            | Type                                          | Label | Description                                   |
| ---------------- | --------------------------------------------- | ----- | --------------------------------------------- |
| consensus\_state | [google.protobuf.Any](broken-reference)       |       | consensus state associated with the channel   |
| client\_id       | [string](broken-reference)                    |       | client ID associated with the consensus state |
| proof            | [bytes](broken-reference)                     |       | merkle proof of existence                     |
| proof\_path      | [string](broken-reference)                    |       | merkle proof path                             |
| proof\_height    | [ibc.core.client.v1.Height](broken-reference) |       | height at which the proof was retrieved       |

### QueryChannelRequest

QueryChannelRequest is the request type for the Query/Channel RPC method

| Field       | Type                       | Label | Description               |
| ----------- | -------------------------- | ----- | ------------------------- |
| port\_id    | [string](broken-reference) |       | port unique identifier    |
| channel\_id | [string](broken-reference) |       | channel unique identifier |

### QueryChannelResponse

QueryChannelResponse is the response type for the Query/Channel RPC method. Besides the Channel end, it includes a proof and the height from which the proof was retrieved.

| Field         | Type                                          | Label | Description                                     |
| ------------- | --------------------------------------------- | ----- | ----------------------------------------------- |
| channel       | [Channel](broken-reference)                   |       | channel associated with the request identifiers |
| proof         | [bytes](broken-reference)                     |       | merkle proof of existence                       |
| proof\_path   | [string](broken-reference)                    |       | merkle proof path                               |
| proof\_height | [ibc.core.client.v1.Height](broken-reference) |       | height at which the proof was retrieved         |

### QueryChannelsRequest

QueryChannelsRequest is the request type for the Query/Channels RPC method

| Field      | Type                                                      | Label | Description        |
| ---------- | --------------------------------------------------------- | ----- | ------------------ |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination request |

### QueryChannelsResponse

QueryChannelsResponse is the response type for the Query/Channels RPC method.

| Field      | Type                                                       | Label    | Description                           |
| ---------- | ---------------------------------------------------------- | -------- | ------------------------------------- |
| channels   | [IdentifiedChannel](broken-reference)                      | repeated | list of stored channels of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination response                   |
| height     | [ibc.core.client.v1.Height](broken-reference)              |          | query block height                    |

### QueryConnectionChannelsRequest

QueryConnectionChannelsRequest is the request type for the Query/QueryConnectionChannels RPC method

| Field      | Type                                                      | Label | Description                  |
| ---------- | --------------------------------------------------------- | ----- | ---------------------------- |
| connection | [string](broken-reference)                                |       | connection unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination request           |

### QueryConnectionChannelsResponse

QueryConnectionChannelsResponse is the Response type for the Query/QueryConnectionChannels RPC method

| Field      | Type                                                       | Label    | Description                                    |
| ---------- | ---------------------------------------------------------- | -------- | ---------------------------------------------- |
| channels   | [IdentifiedChannel](broken-reference)                      | repeated | list of channels associated with a connection. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination response                            |
| height     | [ibc.core.client.v1.Height](broken-reference)              |          | query block height                             |

### QueryNextSequenceReceiveRequest

QueryNextSequenceReceiveRequest is the request type for the Query/QueryNextSequenceReceiveRequest RPC method

| Field       | Type                       | Label | Description               |
| ----------- | -------------------------- | ----- | ------------------------- |
| port\_id    | [string](broken-reference) |       | port unique identifier    |
| channel\_id | [string](broken-reference) |       | channel unique identifier |

### QueryNextSequenceReceiveResponse

QuerySequenceResponse is the request type for the Query/QueryNextSequenceReceiveResponse RPC method

| Field                   | Type                                          | Label | Description                             |
| ----------------------- | --------------------------------------------- | ----- | --------------------------------------- |
| next\_sequence\_receive | [uint64](broken-reference)                    |       | next sequence receive number            |
| proof                   | [bytes](broken-reference)                     |       | merkle proof of existence               |
| proof\_path             | [string](broken-reference)                    |       | merkle proof path                       |
| proof\_height           | [ibc.core.client.v1.Height](broken-reference) |       | height at which the proof was retrieved |

### QueryPacketAcknowledgementRequest

QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method

| Field       | Type                       | Label | Description               |
| ----------- | -------------------------- | ----- | ------------------------- |
| port\_id    | [string](broken-reference) |       | port unique identifier    |
| channel\_id | [string](broken-reference) |       | channel unique identifier |
| sequence    | [uint64](broken-reference) |       | packet sequence           |

### QueryPacketAcknowledgementResponse

QueryPacketAcknowledgementResponse defines the client query response for a packet which also includes a proof, its path and the height form which the proof was retrieved

| Field           | Type                                          | Label | Description                               |
| --------------- | --------------------------------------------- | ----- | ----------------------------------------- |
| acknowledgement | [bytes](broken-reference)                     |       | packet associated with the request fields |
| proof           | [bytes](broken-reference)                     |       | merkle proof of existence                 |
| proof\_path     | [string](broken-reference)                    |       | merkle proof path                         |
| proof\_height   | [ibc.core.client.v1.Height](broken-reference) |       | height at which the proof was retrieved   |

### QueryPacketCommitmentRequest

QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method

| Field       | Type                       | Label | Description               |
| ----------- | -------------------------- | ----- | ------------------------- |
| port\_id    | [string](broken-reference) |       | port unique identifier    |
| channel\_id | [string](broken-reference) |       | channel unique identifier |
| sequence    | [uint64](broken-reference) |       | packet sequence           |

### QueryPacketCommitmentResponse

QueryPacketCommitmentResponse defines the client query response for a packet which also includes a proof, its path and the height form which the proof was retrieved

| Field         | Type                                          | Label | Description                               |
| ------------- | --------------------------------------------- | ----- | ----------------------------------------- |
| commitment    | [bytes](broken-reference)                     |       | packet associated with the request fields |
| proof         | [bytes](broken-reference)                     |       | merkle proof of existence                 |
| proof\_path   | [string](broken-reference)                    |       | merkle proof path                         |
| proof\_height | [ibc.core.client.v1.Height](broken-reference) |       | height at which the proof was retrieved   |

### QueryPacketCommitmentsRequest

QueryPacketCommitmentsRequest is the request type for the Query/QueryPacketCommitments RPC method

| Field       | Type                                                      | Label | Description               |
| ----------- | --------------------------------------------------------- | ----- | ------------------------- |
| port\_id    | [string](broken-reference)                                |       | port unique identifier    |
| channel\_id | [string](broken-reference)                                |       | channel unique identifier |
| pagination  | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination request        |

### QueryPacketCommitmentsResponse

QueryPacketCommitmentsResponse is the request type for the Query/QueryPacketCommitments RPC method

| Field       | Type                                                       | Label    | Description         |
| ----------- | ---------------------------------------------------------- | -------- | ------------------- |
| commitments | [PacketAckCommitment](broken-reference)                    | repeated |                     |
| pagination  | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination response |
| height      | [ibc.core.client.v1.Height](broken-reference)              |          | query block height  |

### QueryUnreceivedPacketsRequest

QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method

| Field                         | Type                       | Label    | Description               |
| ----------------------------- | -------------------------- | -------- | ------------------------- |
| port\_id                      | [string](broken-reference) |          | port unique identifier    |
| channel\_id                   | [string](broken-reference) |          | channel unique identifier |
| packet\_commitment\_sequences | [uint64](broken-reference) | repeated | list of packet sequences  |

### QueryUnreceivedPacketsResponse

QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method

| Field     | Type                                          | Label    | Description                         |
| --------- | --------------------------------------------- | -------- | ----------------------------------- |
| sequences | [uint64](broken-reference)                    | repeated | list of unreceived packet sequences |
| height    | [ibc.core.client.v1.Height](broken-reference) |          | query block height                  |

### QueryUnrelayedAcksRequest

QueryUnrelayedAcksRequest is the request type for the Query/UnrelayedAcks RPC method

| Field                         | Type                       | Label    | Description                  |
| ----------------------------- | -------------------------- | -------- | ---------------------------- |
| port\_id                      | [string](broken-reference) |          | port unique identifier       |
| channel\_id                   | [string](broken-reference) |          | channel unique identifier    |
| packet\_commitment\_sequences | [uint64](broken-reference) | repeated | list of commitment sequences |

### QueryUnrelayedAcksResponse

QueryUnrelayedAcksResponse is the response type for the Query/UnrelayedAcks RPC method

| Field     | Type                                          | Label    | Description                                 |
| --------- | --------------------------------------------- | -------- | ------------------------------------------- |
| sequences | [uint64](broken-reference)                    | repeated | list of unrelayed acknowledgement sequences |
| height    | [ibc.core.client.v1.Height](broken-reference) |          | query block height                          |

### Query

Query provides defines the gRPC querier service

| Method Name           | Request Type                                          | Response Type                                          | Description                                                                                                             |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Channel               | [QueryChannelRequest](broken-reference)               | [QueryChannelResponse](broken-reference)               | Channel queries an IBC Channel.                                                                                         |
| Channels              | [QueryChannelsRequest](broken-reference)              | [QueryChannelsResponse](broken-reference)              | Channels queries all the IBC channels of a chain.                                                                       |
| ConnectionChannels    | [QueryConnectionChannelsRequest](broken-reference)    | [QueryConnectionChannelsResponse](broken-reference)    | ConnectionChannels queries all the channels associated with a connection end.                                           |
| ChannelClientState    | [QueryChannelClientStateRequest](broken-reference)    | [QueryChannelClientStateResponse](broken-reference)    | ChannelClientState queries for the client state for the channel associated with the provided channel identifiers.       |
| ChannelConsensusState | [QueryChannelConsensusStateRequest](broken-reference) | [QueryChannelConsensusStateResponse](broken-reference) | ChannelConsensusState queries for the consensus state for the channel associated with the provided channel identifiers. |
| PacketCommitment      | [QueryPacketCommitmentRequest](broken-reference)      | [QueryPacketCommitmentResponse](broken-reference)      | PacketCommitment queries a stored packet commitment hash.                                                               |
| PacketCommitments     | [QueryPacketCommitmentsRequest](broken-reference)     | [QueryPacketCommitmentsResponse](broken-reference)     | PacketCommitments returns the all the packet commitments hashes associated with a channel.                              |
| PacketAcknowledgement | [QueryPacketAcknowledgementRequest](broken-reference) | [QueryPacketAcknowledgementResponse](broken-reference) | PacketAcknowledgement queries a stored packet acknowledgement hash.                                                     |
| UnreceivedPackets     | [QueryUnreceivedPacketsRequest](broken-reference)     | [QueryUnreceivedPacketsResponse](broken-reference)     | UnreceivedPackets returns all the unrelayed IBC packets associated with a channel and sequences.                        |
| UnrelayedAcks         | [QueryUnrelayedAcksRequest](broken-reference)         | [QueryUnrelayedAcksResponse](broken-reference)         | UnrelayedAcks returns all the unrelayed IBC acknowledgements associated with a channel and sequences.                   |
| NextSequenceReceive   | [QueryNextSequenceReceiveRequest](broken-reference)   | [QueryNextSequenceReceiveResponse](broken-reference)   | NextSequenceReceive returns the next receive sequence for a given channel.                                              |

[Top](broken-reference)

## ibc/core/channel/v1/genesis.proto

### GenesisState

GenesisState defines the ibc channel submodule's genesis state.

| Field            | Type                                    | Label    | Description |
| ---------------- | --------------------------------------- | -------- | ----------- |
| channels         | [IdentifiedChannel](broken-reference)   | repeated |             |
| acknowledgements | [PacketAckCommitment](broken-reference) | repeated |             |
| commitments      | [PacketAckCommitment](broken-reference) | repeated |             |
| send\_sequences  | [PacketSequence](broken-reference)      | repeated |             |
| recv\_sequences  | [PacketSequence](broken-reference)      | repeated |             |
| ack\_sequences   | [PacketSequence](broken-reference)      | repeated |             |

### PacketSequence

PacketSequence defines the genesis type necessary to retrieve and store next send and receive sequences.

| Field       | Type                       | Label | Description |
| ----------- | -------------------------- | ----- | ----------- |
| port\_id    | [string](broken-reference) |       |             |
| channel\_id | [string](broken-reference) |       |             |
| sequence    | [uint64](broken-reference) |       |             |

[Top](broken-reference)

## ibc/core/channel/v1/channel.proto

### Acknowledgement

Acknowledgement is the recommended acknowledgement format to be used by app-specific protocols. NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental conflicts with other protobuf message formats used for acknowledgements. The first byte of any message with this format will be the non-ASCII values `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS: https://github.com/cosmos/ics/tree/master/spec/ics-004-channel-and-packet-semantics#acknowledgement-envelope

| Field  | Type                       | Label | Description |
| ------ | -------------------------- | ----- | ----------- |
| result | [bytes](broken-reference)  |       |             |
| error  | [string](broken-reference) |       |             |

### Channel

Channel defines pipeline for exactly-once packet delivery between specific modules on separate blockchains, which has at least one end capable of sending packets and one end capable of receiving packets.

| Field            | Type                             | Label    | Description                                                                                    |
| ---------------- | -------------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| state            | [State](broken-reference)        |          | current state of the channel end                                                               |
| ordering         | [Order](broken-reference)        |          | whether the channel is ordered or unordered                                                    |
| counterparty     | [Counterparty](broken-reference) |          | counterparty channel end                                                                       |
| connection\_hops | [string](broken-reference)       | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version          | [string](broken-reference)       |          | opaque channel version, which is agreed upon during the handshake                              |

### Counterparty

Counterparty defines a channel end counterparty

| Field       | Type                       | Label | Description                                                             |
| ----------- | -------------------------- | ----- | ----------------------------------------------------------------------- |
| port\_id    | [string](broken-reference) |       | port on the counterparty chain which owns the other end of the channel. |
| channel\_id | [string](broken-reference) |       | channel end on the counterparty chain                                   |

### IdentifiedChannel

IdentifiedChannel defines a channel with additional port and channel identifier fields.

| Field            | Type                             | Label    | Description                                                                                    |
| ---------------- | -------------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| state            | [State](broken-reference)        |          | current state of the channel end                                                               |
| ordering         | [Order](broken-reference)        |          | whether the channel is ordered or unordered                                                    |
| counterparty     | [Counterparty](broken-reference) |          | counterparty channel end                                                                       |
| connection\_hops | [string](broken-reference)       | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version          | [string](broken-reference)       |          | opaque channel version, which is agreed upon during the handshake                              |
| port\_id         | [string](broken-reference)       |          | port identifier                                                                                |
| channel\_id      | [string](broken-reference)       |          | channel identifier                                                                             |

### MsgAcknowledgement

MsgAcknowledgement receives incoming IBC acknowledgement

| Field           | Type                                          | Label | Description |
| --------------- | --------------------------------------------- | ----- | ----------- |
| packet          | [Packet](broken-reference)                    |       |             |
| acknowledgement | [bytes](broken-reference)                     |       |             |
| proof           | [bytes](broken-reference)                     |       |             |
| proof\_height   | [ibc.core.client.v1.Height](broken-reference) |       |             |
| signer          | [string](broken-reference)                    |       |             |

### MsgAcknowledgementResponse

MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.

### MsgChannelCloseConfirm

MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to CLOSED on Chain A.

| Field         | Type                                          | Label | Description |
| ------------- | --------------------------------------------- | ----- | ----------- |
| port\_id      | [string](broken-reference)                    |       |             |
| channel\_id   | [string](broken-reference)                    |       |             |
| proof\_init   | [bytes](broken-reference)                     |       |             |
| proof\_height | [ibc.core.client.v1.Height](broken-reference) |       |             |
| signer        | [string](broken-reference)                    |       |             |

### MsgChannelCloseConfirmResponse

MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response type.

### MsgChannelCloseInit

MsgChannelCloseInit defines a msg sent by a Relayer to Chain A to close a channel with Chain B.

| Field       | Type                       | Label | Description |
| ----------- | -------------------------- | ----- | ----------- |
| port\_id    | [string](broken-reference) |       |             |
| channel\_id | [string](broken-reference) |       |             |
| signer      | [string](broken-reference) |       |             |

### MsgChannelCloseInitResponse

MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.

### MsgChannelOpenAck

MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of channel state to TRYOPEN on Chain B.

| Field                     | Type                                          | Label | Description |
| ------------------------- | --------------------------------------------- | ----- | ----------- |
| port\_id                  | [string](broken-reference)                    |       |             |
| channel\_id               | [string](broken-reference)                    |       |             |
| counterparty\_channel\_id | [string](broken-reference)                    |       |             |
| counterparty\_version     | [string](broken-reference)                    |       |             |
| proof\_try                | [bytes](broken-reference)                     |       |             |
| proof\_height             | [ibc.core.client.v1.Height](broken-reference) |       |             |
| signer                    | [string](broken-reference)                    |       |             |

### MsgChannelOpenAckResponse

MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.

### MsgChannelOpenConfirm

MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to OPEN on Chain A.

| Field         | Type                                          | Label | Description |
| ------------- | --------------------------------------------- | ----- | ----------- |
| port\_id      | [string](broken-reference)                    |       |             |
| channel\_id   | [string](broken-reference)                    |       |             |
| proof\_ack    | [bytes](broken-reference)                     |       |             |
| proof\_height | [ibc.core.client.v1.Height](broken-reference) |       |             |
| signer        | [string](broken-reference)                    |       |             |

### MsgChannelOpenConfirmResponse

MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response type.

### MsgChannelOpenInit

MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It is called by a relayer on Chain A.

| Field       | Type                        | Label | Description |
| ----------- | --------------------------- | ----- | ----------- |
| port\_id    | [string](broken-reference)  |       |             |
| channel\_id | [string](broken-reference)  |       |             |
| channel     | [Channel](broken-reference) |       |             |
| signer      | [string](broken-reference)  |       |             |

### MsgChannelOpenInitResponse

MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.

### MsgChannelOpenTry

MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel on Chain B.

| Field                             | Type                                          | Label | Description |
| --------------------------------- | --------------------------------------------- | ----- | ----------- |
| port\_id                          | [string](broken-reference)                    |       |             |
| desired\_channel\_id              | [string](broken-reference)                    |       |             |
| counterparty\_chosen\_channel\_id | [string](broken-reference)                    |       |             |
| channel                           | [Channel](broken-reference)                   |       |             |
| counterparty\_version             | [string](broken-reference)                    |       |             |
| proof\_init                       | [bytes](broken-reference)                     |       |             |
| proof\_height                     | [ibc.core.client.v1.Height](broken-reference) |       |             |
| signer                            | [string](broken-reference)                    |       |             |

### MsgChannelOpenTryResponse

MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.

### MsgRecvPacket

MsgRecvPacket receives incoming IBC packet

| Field         | Type                                          | Label | Description |
| ------------- | --------------------------------------------- | ----- | ----------- |
| packet        | [Packet](broken-reference)                    |       |             |
| proof         | [bytes](broken-reference)                     |       |             |
| proof\_height | [ibc.core.client.v1.Height](broken-reference) |       |             |
| signer        | [string](broken-reference)                    |       |             |

### MsgRecvPacketResponse

MsgRecvPacketResponse defines the Msg/RecvPacket response type.

### MsgTimeout

MsgTimeout receives timed-out packet

| Field                | Type                                          | Label | Description |
| -------------------- | --------------------------------------------- | ----- | ----------- |
| packet               | [Packet](broken-reference)                    |       |             |
| proof                | [bytes](broken-reference)                     |       |             |
| proof\_height        | [ibc.core.client.v1.Height](broken-reference) |       |             |
| next\_sequence\_recv | [uint64](broken-reference)                    |       |             |
| signer               | [string](broken-reference)                    |       |             |

### MsgTimeoutOnClose

MsgTimeoutOnClose timed-out packet upon counterparty channel closure.

| Field                | Type                                          | Label | Description |
| -------------------- | --------------------------------------------- | ----- | ----------- |
| packet               | [Packet](broken-reference)                    |       |             |
| proof                | [bytes](broken-reference)                     |       |             |
| proof\_close         | [bytes](broken-reference)                     |       |             |
| proof\_height        | [ibc.core.client.v1.Height](broken-reference) |       |             |
| next\_sequence\_recv | [uint64](broken-reference)                    |       |             |
| signer               | [string](broken-reference)                    |       |             |

### MsgTimeoutOnCloseResponse

MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.

### MsgTimeoutResponse

MsgTimeoutResponse defines the Msg/Timeout response type.

### Packet

Packet defines a type that carries data across different chains through IBC

| Field                | Type                                          | Label | Description                                                                                                                                                                   |
| -------------------- | --------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence             | [uint64](broken-reference)                    |       | number corresponds to the order of sends and receives, where a Packet with an earlier sequence number must be sent and received before a Packet with a later sequence number. |
| source\_port         | [string](broken-reference)                    |       | identifies the port on the sending chain.                                                                                                                                     |
| source\_channel      | [string](broken-reference)                    |       | identifies the channel end on the sending chain.                                                                                                                              |
| destination\_port    | [string](broken-reference)                    |       | identifies the port on the receiving chain.                                                                                                                                   |
| destination\_channel | [string](broken-reference)                    |       | identifies the channel end on the receiving chain.                                                                                                                            |
| data                 | [bytes](broken-reference)                     |       | actual opaque bytes transferred directly to the application module                                                                                                            |
| timeout\_height      | [ibc.core.client.v1.Height](broken-reference) |       | block height after which the packet times out                                                                                                                                 |
| timeout\_timestamp   | [uint64](broken-reference)                    |       | block timestamp (in nanoseconds) after which the packet times out                                                                                                             |

### PacketAckCommitment

PacketAckCommitment defines the genesis type necessary to retrieve and store acknowlegements.

| Field       | Type                       | Label | Description                |
| ----------- | -------------------------- | ----- | -------------------------- |
| port\_id    | [string](broken-reference) |       | channel port identifier.   |
| channel\_id | [string](broken-reference) |       | channel unique identifier. |
| sequence    | [uint64](broken-reference) |       | packet sequence.           |
| hash        | [bytes](broken-reference)  |       | packet commitment hash.    |

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

| Method Name         | Request Type                               | Response Type                                      | Description                                                                  |
| ------------------- | ------------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------------------------- |
| ChannelOpenInit     | [MsgChannelOpenInit](broken-reference)     | [MsgChannelOpenInitResponse](broken-reference)     | ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.         |
| ChannelOpenTry      | [MsgChannelOpenTry](broken-reference)      | [MsgChannelOpenTryResponse](broken-reference)      | ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.           |
| ChannelOpenAck      | [MsgChannelOpenAck](broken-reference)      | [MsgChannelOpenAckResponse](broken-reference)      | ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.           |
| ChannelOpenConfirm  | [MsgChannelOpenConfirm](broken-reference)  | [MsgChannelOpenConfirmResponse](broken-reference)  | ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.   |
| ChannelCloseInit    | [MsgChannelCloseInit](broken-reference)    | [MsgChannelCloseInitResponse](broken-reference)    | ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.       |
| ChannelCloseConfirm | [MsgChannelCloseConfirm](broken-reference) | [MsgChannelCloseConfirmResponse](broken-reference) | ChannelCloseConfirm defines a rpc handler method for MsgChannelCloseConfirm. |
| RecvPacket          | [MsgRecvPacket](broken-reference)          | [MsgRecvPacketResponse](broken-reference)          | RecvPacket defines a rpc handler method for MsgRecvPacket.                   |
| Timeout             | [MsgTimeout](broken-reference)             | [MsgTimeoutResponse](broken-reference)             | Timeout defines a rpc handler method for MsgTimeout.                         |
| TimeoutOnClose      | [MsgTimeoutOnClose](broken-reference)      | [MsgTimeoutOnCloseResponse](broken-reference)      | TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.           |
| Acknowledgement     | [MsgAcknowledgement](broken-reference)     | [MsgAcknowledgementResponse](broken-reference)     | Acknowledgement defines a rpc handler method for MsgAcknowledgement.         |

[Top](broken-reference)

## ibc/core/client/v1/client.proto

### ClientConsensusStates

ClientConsensusStates defines all the stored consensus states for a given client.

| Field             | Type                                         | Label    | Description                                                   |
| ----------------- | -------------------------------------------- | -------- | ------------------------------------------------------------- |
| client\_id        | [string](broken-reference)                   |          | client identifier                                             |
| consensus\_states | [ConsensusStateWithHeight](broken-reference) | repeated | consensus states and their heights associated with the client |

### ClientUpdateProposal

ClientUpdateProposal is a governance proposal. If it passes, the client is updated with the provided header. The update may fail if the header is not valid given certain conditions specified by the client implementation.

| Field       | Type                                    | Label | Description                                                               |
| ----------- | --------------------------------------- | ----- | ------------------------------------------------------------------------- |
| title       | [string](broken-reference)              |       | the title of the update proposal                                          |
| description | [string](broken-reference)              |       | the description of the proposal                                           |
| client\_id  | [string](broken-reference)              |       | the client identifier for the client to be updated if the proposal passes |
| header      | [google.protobuf.Any](broken-reference) |       | the header used to update the client if the proposal passes               |

### ConsensusStateWithHeight

ConsensusStateWithHeight defines a consensus state with an additional height field.

| Field            | Type                                    | Label | Description            |
| ---------------- | --------------------------------------- | ----- | ---------------------- |
| height           | [Height](broken-reference)              |       | consensus state height |
| consensus\_state | [google.protobuf.Any](broken-reference) |       | consensus state        |

### Height

Height is a monotonically increasing data type that can be compared against another Height for the purposes of updating and freezing clients

Normally the VersionHeight is incremented at each height while keeping version number the same However some consensus algorithms may choose to reset the height in certain conditions e.g. hard forks, state-machine breaking changes In these cases, the version number is incremented so that height continues to be monitonically increasing even as the VersionHeight gets reset

| Field           | Type                       | Label | Description                                 |
| --------------- | -------------------------- | ----- | ------------------------------------------- |
| version\_number | [uint64](broken-reference) |       | the version that the client is currently on |
| version\_height | [uint64](broken-reference) |       | the height within the given version         |

### IdentifiedClientState

IdentifiedClientState defines a client state with an additional client identifier field.

| Field         | Type                                    | Label | Description       |
| ------------- | --------------------------------------- | ----- | ----------------- |
| client\_id    | [string](broken-reference)              |       | client identifier |
| client\_state | [google.protobuf.Any](broken-reference) |       | client state      |

### MsgCreateClient

MsgCreateClient defines a message to create an IBC client

| Field            | Type                                    | Label | Description                                                                    |
| ---------------- | --------------------------------------- | ----- | ------------------------------------------------------------------------------ |
| client\_id       | [string](broken-reference)              |       | client unique identifier                                                       |
| client\_state    | [google.protobuf.Any](broken-reference) |       | light client state                                                             |
| consensus\_state | [google.protobuf.Any](broken-reference) |       | consensus state associated with the client that corresponds to a given height. |
| signer           | [string](broken-reference)              |       | signer address                                                                 |

### MsgCreateClientResponse

MsgCreateClientResponse defines the Msg/CreateClient response type.

### MsgSubmitMisbehaviour

MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for light client misbehaviour.

| Field        | Type                                    | Label | Description                                     |
| ------------ | --------------------------------------- | ----- | ----------------------------------------------- |
| client\_id   | [string](broken-reference)              |       | client unique identifier                        |
| misbehaviour | [google.protobuf.Any](broken-reference) |       | misbehaviour used for freezing the light client |
| signer       | [string](broken-reference)              |       | signer address                                  |

### MsgSubmitMisbehaviourResponse

MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response type.

### MsgUpdateClient

MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header.

| Field      | Type                                    | Label | Description                       |
| ---------- | --------------------------------------- | ----- | --------------------------------- |
| client\_id | [string](broken-reference)              |       | client unique identifier          |
| header     | [google.protobuf.Any](broken-reference) |       | header to update the light client |
| signer     | [string](broken-reference)              |       | signer address                    |

### MsgUpdateClientResponse

MsgUpdateClientResponse defines the Msg/UpdateClient response type.

### MsgUpgradeClient

MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client state

| Field           | Type                                    | Label | Description                                                            |
| --------------- | --------------------------------------- | ----- | ---------------------------------------------------------------------- |
| client\_id      | [string](broken-reference)              |       | client unique identifier                                               |
| client\_state   | [google.protobuf.Any](broken-reference) |       | upgraded client state                                                  |
| upgrade\_height | [Height](broken-reference)              |       | height at which old chain halts and upgrades (i.e last block executed) |
| proof\_upgrade  | [bytes](broken-reference)               |       | proof that old chain committed to new client                           |
| signer          | [string](broken-reference)              |       | signer address                                                         |

### MsgUpgradeClientResponse

MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.

### Msg

Msg defines the ibc/client Msg service.

| Method Name        | Request Type                              | Response Type                                     | Description                                                                |
| ------------------ | ----------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| CreateClient       | [MsgCreateClient](broken-reference)       | [MsgCreateClientResponse](broken-reference)       | CreateClient defines a rpc handler method for MsgCreateClient.             |
| UpdateClient       | [MsgUpdateClient](broken-reference)       | [MsgUpdateClientResponse](broken-reference)       | UpdateClient defines a rpc handler method for MsgUpdateClient.             |
| UpgradeClient      | [MsgUpgradeClient](broken-reference)      | [MsgUpgradeClientResponse](broken-reference)      | UpgradeClient defines a rpc handler method for MsgUpgradeClient.           |
| SubmitMisbehaviour | [MsgSubmitMisbehaviour](broken-reference) | [MsgSubmitMisbehaviourResponse](broken-reference) | SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. |

[Top](broken-reference)

## ibc/core/client/v1/query.proto

### QueryClientStateRequest

QueryClientStateRequest is the request type for the Query/ClientState RPC method

| Field      | Type                       | Label | Description                    |
| ---------- | -------------------------- | ----- | ------------------------------ |
| client\_id | [string](broken-reference) |       | client state unique identifier |

### QueryClientStateResponse

QueryClientStateResponse is the response type for the Query/ClientState RPC method. Besides the client state, it includes a proof and the height from which the proof was retrieved.

| Field         | Type                                    | Label | Description                                         |
| ------------- | --------------------------------------- | ----- | --------------------------------------------------- |
| client\_state | [google.protobuf.Any](broken-reference) |       | client state associated with the request identifier |
| proof         | [bytes](broken-reference)               |       | merkle proof of existence                           |
| proof\_path   | [string](broken-reference)              |       | merkle proof path                                   |
| proof\_height | [Height](broken-reference)              |       | height at which the proof was retrieved             |

### QueryClientStatesRequest

QueryClientStatesRequest is the request type for the Query/ClientStates RPC method

| Field      | Type                                                      | Label | Description        |
| ---------- | --------------------------------------------------------- | ----- | ------------------ |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination request |

### QueryClientStatesResponse

QueryClientStatesResponse is the response type for the Query/ClientStates RPC method.

| Field          | Type                                                       | Label    | Description                               |
| -------------- | ---------------------------------------------------------- | -------- | ----------------------------------------- |
| client\_states | [IdentifiedClientState](broken-reference)                  | repeated | list of stored ClientStates of the chain. |
| pagination     | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination response                       |

### QueryConsensusStateRequest

QueryConsensusStateRequest is the request type for the Query/ConsensusState RPC method. Besides the consensus state, it includes a proof and the height from which the proof was retrieved.

| Field           | Type                       | Label | Description                                                                             |
| --------------- | -------------------------- | ----- | --------------------------------------------------------------------------------------- |
| client\_id      | [string](broken-reference) |       | client identifier                                                                       |
| version\_number | [uint64](broken-reference) |       | consensus state version number                                                          |
| version\_height | [uint64](broken-reference) |       | consensus state version height                                                          |
| latest\_height  | [bool](broken-reference)   |       | latest\_height overrrides the height field and queries the latest stored ConsensusState |

### QueryConsensusStateResponse

QueryConsensusStateResponse is the response type for the Query/ConsensusState RPC method

| Field            | Type                                    | Label | Description                                                               |
| ---------------- | --------------------------------------- | ----- | ------------------------------------------------------------------------- |
| consensus\_state | [google.protobuf.Any](broken-reference) |       | consensus state associated with the client identifier at the given height |
| proof            | [bytes](broken-reference)               |       | merkle proof of existence                                                 |
| proof\_path      | [string](broken-reference)              |       | merkle proof path                                                         |
| proof\_height    | [Height](broken-reference)              |       | height at which the proof was retrieved                                   |

### QueryConsensusStatesRequest

QueryConsensusStatesRequest is the request type for the Query/ConsensusStates RPC method.

| Field      | Type                                                      | Label | Description        |
| ---------- | --------------------------------------------------------- | ----- | ------------------ |
| client\_id | [string](broken-reference)                                |       | client identifier  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination request |

### QueryConsensusStatesResponse

QueryConsensusStatesResponse is the response type for the Query/ConsensusStates RPC method

| Field             | Type                                                       | Label    | Description                                     |
| ----------------- | ---------------------------------------------------------- | -------- | ----------------------------------------------- |
| consensus\_states | [ConsensusStateWithHeight](broken-reference)               | repeated | consensus states associated with the identifier |
| pagination        | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination response                             |

### Query

Query provides defines the gRPC querier service

| Method Name     | Request Type                                    | Response Type                                    | Description                                                                                |
| --------------- | ----------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ClientState     | [QueryClientStateRequest](broken-reference)     | [QueryClientStateResponse](broken-reference)     | ClientState queries an IBC light client.                                                   |
| ClientStates    | [QueryClientStatesRequest](broken-reference)    | [QueryClientStatesResponse](broken-reference)    | ClientStates queries all the IBC light clients of a chain.                                 |
| ConsensusState  | [QueryConsensusStateRequest](broken-reference)  | [QueryConsensusStateResponse](broken-reference)  | ConsensusState queries a consensus state associated with a client state at a given height. |
| ConsensusStates | [QueryConsensusStatesRequest](broken-reference) | [QueryConsensusStatesResponse](broken-reference) | ConsensusStates queries all the consensus state associated with a given client.            |

[Top](broken-reference)

## ibc/core/client/v1/genesis.proto

### GenesisState

GenesisState defines the ibc client submodule's genesis state.

| Field              | Type                                      | Label    | Description                                        |
| ------------------ | ----------------------------------------- | -------- | -------------------------------------------------- |
| clients            | [IdentifiedClientState](broken-reference) | repeated | client states with their corresponding identifiers |
| clients\_consensus | [ClientConsensusStates](broken-reference) | repeated | consensus states from each client                  |
| create\_localhost  | [bool](broken-reference)                  |          | create localhost on initialization                 |

[Top](broken-reference)

## ibc/lightclients/solomachine/v1/solomachine.proto

### ChannelStateData

ChannelStateData returns the SignBytes data for channel state verification.

| Field   | Type                                            | Label | Description |
| ------- | ----------------------------------------------- | ----- | ----------- |
| path    | [bytes](broken-reference)                       |       |             |
| channel | [ibc.core.channel.v1.Channel](broken-reference) |       |             |

### ClientState

ClientState defines a solo machine client that tracks the current consensus state and if the client is frozen.

| Field                          | Type                               | Label | Description                                                                                                           |
| ------------------------------ | ---------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------- |
| sequence                       | [uint64](broken-reference)         |       | latest sequence of the client state                                                                                   |
| frozen\_sequence               | [uint64](broken-reference)         |       | frozen sequence of the solo machine                                                                                   |
| consensus\_state               | [ConsensusState](broken-reference) |       |                                                                                                                       |
| allow\_update\_after\_proposal | [bool](broken-reference)           |       | when set to true, will allow governance to update a solo machine client. The client will be unfrozen if it is frozen. |

### ClientStateData

ClientStateData returns the SignBytes data for client state verification.

| Field         | Type                                    | Label | Description |
| ------------- | --------------------------------------- | ----- | ----------- |
| path          | [bytes](broken-reference)               |       |             |
| client\_state | [google.protobuf.Any](broken-reference) |       |             |

### ConnectionStateData

ConnectionStateData returns the SignBytes data for connection state verification.

| Field      | Type                                                     | Label | Description |
| ---------- | -------------------------------------------------------- | ----- | ----------- |
| path       | [bytes](broken-reference)                                |       |             |
| connection | [ibc.core.connection.v1.ConnectionEnd](broken-reference) |       |             |

### ConsensusState

ConsensusState defines a solo machine consensus state. The sequence of a consensus state is contained in the "height" key used in storing the consensus state.

| Field       | Type                                    | Label | Description                                                                                                                                                         |
| ----------- | --------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public\_key | [google.protobuf.Any](broken-reference) |       | public key of the solo machine                                                                                                                                      |
| diversifier | [string](broken-reference)              |       | diversifier allows the same public key to be re-used across different solo machine clients (potentially on different chains) without being considered misbehaviour. |
| timestamp   | [uint64](broken-reference)              |       |                                                                                                                                                                     |

### ConsensusStateData

ConsensusStateData returns the SignBytes data for consensus state verification.

| Field            | Type                                    | Label | Description |
| ---------------- | --------------------------------------- | ----- | ----------- |
| path             | [bytes](broken-reference)               |       |             |
| consensus\_state | [google.protobuf.Any](broken-reference) |       |             |

### Header

Header defines a solo machine consensus header

| Field            | Type                                    | Label | Description                                   |
| ---------------- | --------------------------------------- | ----- | --------------------------------------------- |
| sequence         | [uint64](broken-reference)              |       | sequence to update solo machine public key at |
| timestamp        | [uint64](broken-reference)              |       |                                               |
| signature        | [bytes](broken-reference)               |       |                                               |
| new\_public\_key | [google.protobuf.Any](broken-reference) |       |                                               |
| new\_diversifier | [string](broken-reference)              |       |                                               |

### HeaderData

HeaderData returns the SignBytes data for update verification.

| Field            | Type                                    | Label | Description        |
| ---------------- | --------------------------------------- | ----- | ------------------ |
| new\_pub\_key    | [google.protobuf.Any](broken-reference) |       | header public key  |
| new\_diversifier | [string](broken-reference)              |       | header diversifier |

### Misbehaviour

Misbehaviour defines misbehaviour for a solo machine which consists of a sequence and two signatures over different messages at that sequence.

| Field          | Type                                 | Label | Description |
| -------------- | ------------------------------------ | ----- | ----------- |
| client\_id     | [string](broken-reference)           |       |             |
| sequence       | [uint64](broken-reference)           |       |             |
| signature\_one | [SignatureAndData](broken-reference) |       |             |
| signature\_two | [SignatureAndData](broken-reference) |       |             |

### NextSequenceRecvData

NextSequenceRecvData returns the SignBytes data for verification of the next sequence to be received.

| Field           | Type                       | Label | Description |
| --------------- | -------------------------- | ----- | ----------- |
| path            | [bytes](broken-reference)  |       |             |
| next\_seq\_recv | [uint64](broken-reference) |       |             |

### PacketAcknowledgementData

PacketAcknowledgementData returns the SignBytes data for acknowledgement verification.

| Field           | Type                      | Label | Description |
| --------------- | ------------------------- | ----- | ----------- |
| path            | [bytes](broken-reference) |       |             |
| acknowledgement | [bytes](broken-reference) |       |             |

### PacketCommitmentData

PacketCommitmentData returns the SignBytes data for packet commitment verification.

| Field      | Type                      | Label | Description |
| ---------- | ------------------------- | ----- | ----------- |
| path       | [bytes](broken-reference) |       |             |
| commitment | [bytes](broken-reference) |       |             |

### PacketReceiptAbsenceData

PacketReceiptAbsenceData returns the SignBytes data for packet receipt absence verification.

| Field | Type                      | Label | Description |
| ----- | ------------------------- | ----- | ----------- |
| path  | [bytes](broken-reference) |       |             |

### SignBytes

SignBytes defines the signed bytes used for signature verification.

| Field       | Type                         | Label | Description           |
| ----------- | ---------------------------- | ----- | --------------------- |
| sequence    | [uint64](broken-reference)   |       |                       |
| timestamp   | [uint64](broken-reference)   |       |                       |
| diversifier | [string](broken-reference)   |       |                       |
| data\_type  | [DataType](broken-reference) |       | type of the data used |
| data        | [bytes](broken-reference)    |       | marshaled data        |

### SignatureAndData

SignatureAndData contains a signature and the data signed over to create that signature.

| Field      | Type                         | Label | Description |
| ---------- | ---------------------------- | ----- | ----------- |
| signature  | [bytes](broken-reference)    |       |             |
| data\_type | [DataType](broken-reference) |       |             |
| data       | [bytes](broken-reference)    |       |             |
| timestamp  | [uint64](broken-reference)   |       |             |

### TimestampedSignatureData

TimestampedSignatureData contains the signature data and the timestamp of the signature.

| Field           | Type                       | Label | Description |
| --------------- | -------------------------- | ----- | ----------- |
| signature\_data | [bytes](broken-reference)  |       |             |
| timestamp       | [uint64](broken-reference) |       |             |

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

[Top](broken-reference)

## ibc/lightclients/tendermint/v1/tendermint.proto

### ClientState

ClientState from Tendermint tracks the current validator set, latest height, and a possible frozen height.

| Field                              | Type                                                | Label    | Description                                                                                                              |
| ---------------------------------- | --------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| chain\_id                          | [string](broken-reference)                          |          |                                                                                                                          |
| trust\_level                       | [Fraction](broken-reference)                        |          |                                                                                                                          |
| trusting\_period                   | [google.protobuf.Duration](broken-reference)        |          | duration of the period since the LatestTimestamp during which the submitted headers are valid for upgrade                |
| unbonding\_period                  | [google.protobuf.Duration](broken-reference)        |          | duration of the staking unbonding period                                                                                 |
| max\_clock\_drift                  | [google.protobuf.Duration](broken-reference)        |          | defines how much new (untrusted) header's Time can drift into the future.                                                |
| frozen\_height                     | [ibc.core.client.v1.Height](broken-reference)       |          | Block height when the client was frozen due to a misbehaviour                                                            |
| latest\_height                     | [ibc.core.client.v1.Height](broken-reference)       |          | Latest height the client was updated to                                                                                  |
| consensus\_params                  | [tendermint.abci.ConsensusParams](broken-reference) |          | Consensus params of the chain                                                                                            |
| proof\_specs                       | [ics23.ProofSpec](broken-reference)                 | repeated | Proof specifications used in verifying counterparty state                                                                |
| upgrade\_path                      | [string](broken-reference)                          |          | Path at which next upgraded client will be committed                                                                     |
| allow\_update\_after\_expiry       | [bool](broken-reference)                            |          | This flag, when set to true, will allow governance to recover a client which has expired                                 |
| allow\_update\_after\_misbehaviour | [bool](broken-reference)                            |          | This flag, when set to true, will allow governance to unfreeze a client whose chain has experienced a misbehaviour event |

### ConsensusState

ConsensusState defines the consensus state from Tendermint.

| Field                  | Type                                                  | Label | Description                                                                            |
| ---------------------- | ----------------------------------------------------- | ----- | -------------------------------------------------------------------------------------- |
| timestamp              | [google.protobuf.Timestamp](broken-reference)         |       | timestamp that corresponds to the block height in which the ConsensusState was stored. |
| root                   | [ibc.core.commitment.v1.MerkleRoot](broken-reference) |       | commitment root (i.e app hash)                                                         |
| next\_validators\_hash | [bytes](broken-reference)                             |       |                                                                                        |

### Fraction

Fraction defines the protobuf message type for tmmath.Fraction

| Field       | Type                      | Label | Description |
| ----------- | ------------------------- | ----- | ----------- |
| numerator   | [int64](broken-reference) |       |             |
| denominator | [int64](broken-reference) |       |             |

### Header

Header defines the Tendermint client consensus Header. It encapsulates all the information necessary to update from a trusted Tendermint ConsensusState. The inclusion of TrustedHeight and TrustedValidators allows this update to process correctly, so long as the ConsensusState for the TrustedHeight exists, this removes race conditions among relayers The SignedHeader and ValidatorSet are the new untrusted update fields for the client. The TrustedHeight is the height of a stored ConsensusState on the client that will be used to verify the new untrusted header. The Trusted ConsensusState must be within the unbonding period of current time in order to correctly verify, and the TrustedValidators must hash to TrustedConsensusState.NextValidatorsHash since that is the last trusted validator set at the TrustedHeight.

| Field               | Type                                              | Label | Description |
| ------------------- | ------------------------------------------------- | ----- | ----------- |
| signed\_header      | [tendermint.types.SignedHeader](broken-reference) |       |             |
| validator\_set      | [tendermint.types.ValidatorSet](broken-reference) |       |             |
| trusted\_height     | [ibc.core.client.v1.Height](broken-reference)     |       |             |
| trusted\_validators | [tendermint.types.ValidatorSet](broken-reference) |       |             |

### Misbehaviour

Misbehaviour is a wrapper over two conflicting Headers that implements Misbehaviour interface expected by ICS-02

| Field      | Type                       | Label | Description |
| ---------- | -------------------------- | ----- | ----------- |
| client\_id | [string](broken-reference) |       |             |
| chain\_id  | [string](broken-reference) |       |             |
| header\_1  | [Header](broken-reference) |       |             |
| header\_2  | [Header](broken-reference) |       |             |

[Top](broken-reference)

## ibc/lightclients/localhost/v1/localhost.proto

### ClientState

ClientState defines a loopback (localhost) client. It requires (read-only) access to keys outside the client prefix.

| Field     | Type                                          | Label | Description              |
| --------- | --------------------------------------------- | ----- | ------------------------ |
| chain\_id | [string](broken-reference)                    |       | self chain ID            |
| height    | [ibc.core.client.v1.Height](broken-reference) |       | self latest block height |

[Top](broken-reference)

## ibc/applications/transfer/v1/transfer.proto

### DenomTrace

DenomTrace contains the base denomination for ICS20 fungible tokens and the source tracing information path.

| Field       | Type                       | Label | Description                                                                                           |
| ----------- | -------------------------- | ----- | ----------------------------------------------------------------------------------------------------- |
| path        | [string](broken-reference) |       | path defines the chain of port/channel identifiers used for tracing the source of the fungible token. |
| base\_denom | [string](broken-reference) |       | base denomination of the relayed fungible token.                                                      |

### FungibleTokenPacketData

FungibleTokenPacketData defines a struct for the packet payload See FungibleTokenPacketData spec: https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures

| Field    | Type                       | Label | Description                                    |
| -------- | -------------------------- | ----- | ---------------------------------------------- |
| denom    | [string](broken-reference) |       | the token denomination to be transferred       |
| amount   | [uint64](broken-reference) |       | the token amount to be transferred             |
| sender   | [string](broken-reference) |       | the sender address                             |
| receiver | [string](broken-reference) |       | the recipient address on the destination chain |

### MsgTransfer

MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between ICS20 enabled chains. See ICS Spec here: https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures

| Field              | Type                                          | Label | Description                                                                                                        |
| ------------------ | --------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------ |
| source\_port       | [string](broken-reference)                    |       | the port on which the packet will be sent                                                                          |
| source\_channel    | [string](broken-reference)                    |       | the channel by which the packet will be sent                                                                       |
| token              | [cosmos.base.v1beta1.Coin](broken-reference)  |       | the tokens to be transferred                                                                                       |
| sender             | [string](broken-reference)                    |       | the sender address                                                                                                 |
| receiver           | [string](broken-reference)                    |       | the recipient address on the destination chain                                                                     |
| timeout\_height    | [ibc.core.client.v1.Height](broken-reference) |       | Timeout height relative to the current block height. The timeout is disabled when set to 0.                        |
| timeout\_timestamp | [uint64](broken-reference)                    |       | Timeout timestamp (in nanoseconds) relative to the current block timestamp. The timeout is disabled when set to 0. |

### MsgTransferResponse

MsgTransferResponse defines the Msg/Transfer response type.

### Params

Params defines the set of IBC transfer parameters. NOTE: To prevent a single token from being transferred, set the TransfersEnabled parameter to true and then set the bank module's SendEnabled parameter for the denomination to false.

| Field            | Type                     | Label | Description                                                                         |
| ---------------- | ------------------------ | ----- | ----------------------------------------------------------------------------------- |
| send\_enabled    | [bool](broken-reference) |       | send\_enabled enables or disables all cross-chain token transfers from this chain.  |
| receive\_enabled | [bool](broken-reference) |       | receive\_enabled enables or disables all cross-chain token transfers to this chain. |

### Msg

Msg defines the ibc/transfer Msg service.

| Method Name | Request Type                    | Response Type                           | Description                                            |
| ----------- | ------------------------------- | --------------------------------------- | ------------------------------------------------------ |
| Transfer    | [MsgTransfer](broken-reference) | [MsgTransferResponse](broken-reference) | Transfer defines a rpc handler method for MsgTransfer. |

[Top](broken-reference)

## ibc/applications/transfer/v1/query.proto

### QueryDenomTraceRequest

QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC method

| Field | Type                       | Label | Description                                                 |
| ----- | -------------------------- | ----- | ----------------------------------------------------------- |
| hash  | [string](broken-reference) |       | hash (in hex format) of the denomination trace information. |

### QueryDenomTraceResponse

QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC method.

| Field        | Type                           | Label | Description                                                        |
| ------------ | ------------------------------ | ----- | ------------------------------------------------------------------ |
| denom\_trace | [DenomTrace](broken-reference) |       | denom\_trace returns the requested denomination trace information. |

### QueryDenomTracesRequest

QueryConnectionsRequest is the request type for the Query/DenomTraces RPC method

| Field      | Type                                                      | Label | Description                                                |
| ---------- | --------------------------------------------------------- | ----- | ---------------------------------------------------------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](broken-reference) |       | pagination defines an optional pagination for the request. |

### QueryDenomTracesResponse

QueryConnectionsResponse is the response type for the Query/DenomTraces RPC method.

| Field         | Type                                                       | Label    | Description                                                |
| ------------- | ---------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| denom\_traces | [DenomTrace](broken-reference)                             | repeated | denom\_traces returns all denominations trace information. |
| pagination    | [cosmos.base.query.v1beta1.PageResponse](broken-reference) |          | pagination defines the pagination in the response.         |

### QueryParamsRequest

QueryParamsRequest is the request type for the Query/Params RPC method.

### QueryParamsResponse

QueryParamsResponse is the response type for the Query/Params RPC method.

| Field  | Type                       | Label | Description                                  |
| ------ | -------------------------- | ----- | -------------------------------------------- |
| params | [Params](broken-reference) |       | params defines the parameters of the module. |

### Query

Query provides defines the gRPC querier service.

| Method Name | Request Type                                | Response Type                                | Description                                               |
| ----------- | ------------------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| DenomTrace  | [QueryDenomTraceRequest](broken-reference)  | [QueryDenomTraceResponse](broken-reference)  | DenomTrace queries a denomination trace information.      |
| DenomTraces | [QueryDenomTracesRequest](broken-reference) | [QueryDenomTracesResponse](broken-reference) | DenomTraces queries all denomination traces.              |
| Params      | [QueryParamsRequest](broken-reference)      | [QueryParamsResponse](broken-reference)      | Params queries all parameters of the ibc-transfer module. |

[Top](broken-reference)

## ibc/applications/transfer/v1/genesis.proto

### GenesisState

GenesisState defines the ibc-transfer genesis state

| Field         | Type                           | Label    | Description |
| ------------- | ------------------------------ | -------- | ----------- |
| port\_id      | [string](broken-reference)     |          |             |
| denom\_traces | [DenomTrace](broken-reference) | repeated |             |
| params        | [Params](broken-reference)     |          |             |

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
