### `intertx` module

### Introduction

The Interchain Accounts Transaction module, or the `intertx` module, facilitates cross-chain account management built upon 
the Inter‐Blockchain Communication protocol (IBC). 
Chains that support the `intertx` module can programmatically create interchain accounts (ICAs) on other supporting chains 
and control these accounts via IBC transactions.
With ICAs, complex and multi-step interactions can be replaced with a single click, 
enhancing the composability and usability of the interchain ecosystem.

### Overview

There are some key concepts defined as the following in the `intertx` module:

- `Host Chain`: The chain where the interchain accounts are registered. The host chain listens for IBC packets from a controller chain which should contain instructions on what the interchain accounts will execute.

- `Controller Chain`: The chain registering and controlling interchain accounts on a host chain. The controller chain sends IBC packets to the host chain to control the interchain accounts.

- `Host-Controller Connection`: For any given chain, there is a preset host-controller connection (with a connection ID) for each host-controller pair that this chain supports.

[//]: # (A controller chain must have at least one interchain accounts authentication module in order to act as a controller chain.)

[//]: # (`Authentication Module`: A custom IBC application module on the controller chain that uses the Interchain Accounts module API to build custom logic for the creation & management of interchain accounts. For a controller chain to utilize the interchain accounts module functionality, an authentication module is required.)

- `Interchain Account`: A special account on a host chain that has all the capabilities of a normal account. However, rather than signing transactions with a private key, a controller chain will send IBC packets to the host chain which signals what transactions the interchain accounts should execute.

- `Interchain Account Owner`: A normal account on the controller chain. Each interchain account on a host chain has one corresponding owner account on the controller chain.

::: tip NOTE
- A chain can utilize one or both parts of the interchain accounts protocol, _i.e._ controlling and hosting. 
Therefore, a controller chain that registers accounts on other host chains does not necessarily have to support other controller chains to register accounts on its chain, and vice versa.
- A host chain can choose to support only certain interchain accounts transactions like sending tokens and delegating, but not minting NFTs, depending on the implementation.
- The table of supported host and controller chains with connection IDs and supported interchain accounts transactions will be updated.
:::


### Transactions and Queries

### Transactions
An account on the controller chain needs to first `register` an ICA on the host chain.

After the registration, the ICA owner may `submit` an ICA transaction through IBC to control the ICA for a desired transaction on the host chain.

### `register`:
The first step is to `register` an ICA on the host chain (with a preset connection ID).

#### `tx intertx register --connection-id [connection_id] --from [owner_address]`- **Register an interchain account on the host chain**

::: details Example: Register an interchain account on the host chain with a preset connection ID

```bash
$ chain-maind tx intertx register --connection-id <connection_id> --from <owner_address> --chain-id <controller-chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/intertx.MsgRegisterAccount",
    "owner": "cro1c...",
    "connection_id": "connection-0"
}
```
:::

### `submit`:
The `submit` transaction composes of 2 transactions:
- the `host chain execution transaction`: the transaction to be executed by the ICA on the host chain; and
- the `controller chain submission transaction`: the transaction that contains the above `host chain execution transaction` and itself gets executed by the ICA owner on the controller chain.

With an ICA registered on the host chain, the ICA owner needs to first prepare the `host chain execution transaction`, in JSON format, to indicate what the ICA should execute on the host chain.
For instance, when the ICA owner wants to send `10 TOKEN` from the ICA to a `recipient` on the host chain,
one easy way to generate such `host chain execution transaction` and saves it to a file named `tx.json` is to use the `--generate-only` flag by running:

::: details Example: Prepare a host chain execution transaction to send 10 TOKEN to a recipient on the host chain in JSON format and save it to tx.json

```bash
$ chain-maind tx bank send <ica_address> <recipient_address> 10token --chain-id <host-chain-id> --generate-only > tx.json

## Illustrative transaction payload in tx.json ##
{
    "@type": "/cosmos.bank.v1beta1.MsgSend",
    "amount": [
        {
            "amount": "10",
            "denom": "token"
        }
    ],
    "from_address": "cosmos1h...",
    "to_address": "cosmos1a..."
}
```
:::

After the `host chain execution transaction` is properly prepared for the host chain side, 
the ICA owner needs to issue a `controller chain submission transaction` on the controller chain side:

#### `tx intertx submit [tx_json] --connection-id [connection_id] --from [owner_address]` - **Submit an ICA transaction**

::: details Example: Submit an ICA transaction to the host chain with a preset connection ID

```bash
$ chain-maind tx intertx submit tx.json --connection-id <connection_id> --from <owner_address> --chain-id <controller-chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/intertx.MsgSubmitTx",
    "owner": "cro1c...",
    "connection_id": "connection-0",
    "msg": {
        "@type": "/cosmos.bank.v1beta1.MsgSend",
        "from_address": "cosmos1h...",
        "to_address": "cosmos1a...",
        "amount": [
            {
                "denom": "token",
                "amount": "10"
            }
        ]
    }
}
```
:::

Likewise, all supported ICA transactions can be submitted with proper `host chain execution transaction` and `controller chain submission transaction`.


### Queries

#### `query intertx interchainaccounts [connection_id] [owner_address]` - Query the ICA address on the host chain

::: details Example: Query the ICA address on the host chain for the owner on the controller chain
```bash
$ chain-maind query intertx interchainaccounts <connection_id> <owner_address> --output json | jq
{
    "interchain_account_address": "cosmos1h..."
}
```
:::
