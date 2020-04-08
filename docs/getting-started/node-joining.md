# Join Crypto.com chain as a validator

Anyone who wishes to become a validator can submit a `NodeJoinTx`. This document will guide you through how to join Crypto.com chain as a validator by using the client-cli.

## Pre-requisites

- Fully functional validation node;
- Sufficient amount of CRO for staking;
- Wallet with transfer and staking addresses.

#### Querying the staking related parameters

First of all, we can query the current staking related parameters of Crypto.com chain by using the [tendermint rpc](https://docs.tendermint.com/master/rpc/). In particular, one would want to check the value of `required_council_node_stake`, which is the minimum staking amount required to become a validator:

```bash
curl -s 'http://localhost:26657/abci_info' | grep required_council_node_stake
```

:::tip Example

```json
"required_council_node_stake\":\"625000000000000000\"
```

implies that you would need at least `625000000000000000` basic unit of CRO to become a validator, which is equivalent to `6250000000` CRO.
:::
The minimum staking amount is the first requirement for being a validator. Besides this, note that only the top `MAX_VALIDATORS` with the most `bonded` amount would be considered as an _active_ validator (see [here](./staking.md#joining-the-network) for details). This network parameter can be found by:

```bash
curl -s 'http://localhost:26657/abci_info' | grep max_validators
```

#### Checking the current validators set

You can check the current validator set and their [voting power](./staking.md#joining-the-network) by

```bash
curl -s 'http://localhost:26657/validators'
```

#### Staking the funds

[Deposit](../wallets/client-cli.md#_3-staking-operations) required funds from your transfer address to your staking address.

## Sending a `NodeJoinTx`

Once the funds have been sent to the staking address, we can submit a `node-join` transaction and join as a validator by

```bash
 ./bin/client-cli transaction new --name <NAME_OF_YOUR_WALLET> --type node-join
```

You will be requested to unlock your wallet and fill in the following fields:

- Staking address with the required funds;
- Name for the validator node;
- base64 encoded public key of the validator. It can be found under `~/.tendermint/config/priv_validator_key.json`.

Once the transaction has been submitted, you can then check the [current validator set](#checking-the-current-validators-set) to confirm your validator is running.

#### Remarks

- Validators are responsible for signing or proposing block at each consensus round. It is important that they maintain excellent availability and network connectivity to perform these tasks. A penalty performed by the [slashing module](./staking.md#slashing) is imposed on validators' misbehaviour or unavailability to reinforce this.
- A `NodeJoinTx` is considered to be invalid if your staking amount is less then `required_council_node_stake`:

  ```bash
  Error: Tendermint RPC error: verification failed: staked state bonded amount is less than the minimal required stake
  ```

::: tip
As there could be multiple transaction IDs that you might need to input
during the staking process, It is suggested that one should create a separated wallet for this validator joining process.
:::
