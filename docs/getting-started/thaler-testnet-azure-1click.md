# Thaler Testnet: Running Nodes using Azure 1-click Deployment

The Crypto.com Chain Testnet has been named as **“Thaler”**.

This tutorial will use our Azure 1-click Deployment image to start and create the latest Thaler Testnet validator or full node.

## Azure Account Creation

You will first need to create an [Microsoft Azure](https://azure.microsoft.com/) account with a `pay-as-you-go` subscription. This will require providing your credit card information to `Microsoft Azure` and you may be subject to charges when you create a virtual machine.

Please read `Microsoft Azure` free trial introduction to see if you are eligible for the free-tier.

## Common Setup

### Step 1. Search for Crypto.com Chain on Marketplace

Sign in to your Microsoft Azure account and go to [Marketplace](https://portal.azure.com/#blade/Microsoft_Azure_Marketplace/MarketplaceOffersBlade/selectedMenuItemId/home). Search for "Crypto.com chain testnet node".

![](./assets/azure_marketplace.png)

### Step 2. Create Crypto.com Chain

Choose the image and click "Create" to start creating the Crypto.com testnet chain node.

#### Step 2-1. Basic

![](./assets/azure_1click_basics.png)

| Configuration           | Value                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| _Region_                | DCsv2-series VMs for Azure is available in three regions (East US, Canada Central and UK South)               |
| _Size_                  | Select either DC1s_v2, DC2s_v2 (Recommended) or DC4s_v2                                                        |
| _SSH public key source_ | Choose "existing public key"                                                                                  |
| _SSH public key_        | Copy and past your [SSH public key](https://docs.microsoft.com/azure/virtual-machines/linux/mac-create-ssh-keys).                                                                             |
| _Resource group_        | We suggest to create a new and dedicated one so that you can easily manage resources attached to the instance |

#### Step 2-2. Disk

- Follow default setting

#### Step 2-3. Networking

![](./assets/azure_1click_networking.png)

- _Virtual network_, _Subnet_, _Public IP_ and _NIC_: "Create new" if you don't have any in that region

#### Step 2-4. Management

- Follow default setting
- _Boot diagnostics_: default is "On". Set to "Off" if it is not required.

#### Step 2-5. Advanced

- Follow default setting

#### Step 2-6. Tags

- Create Tag if needed

#### Step 2-7. Review + Create

- Click "create" to create your instance

#### Step 3. Running the reconfiguration script

Once the deployment is completed, you can connect to your instance via SSH. Afterwards, go to the `chain` directory, and you will find all the essential binaries for setting up your node:

```bash
$ cd /chain/
$ ll
total 2344
drwxr-xr-x 10 root   root      4096 Aug 10 10:36 ./
drwxr-xr-x 27 root   root      4096 Aug 13 14:30 ../
drwxr-xr-x  2 crypto crypto    4096 Aug 10 10:35 .chain-abci/
drwxr-xr-x  4 crypto crypto    4096 Aug 10 10:36 .tendermint/
drwxr-xr-x  2 crypto crypto    4096 Aug 10 10:30 .tmkms/
drwxr-xr-x  2 crypto crypto    4096 Aug 10 10:33 .tx-query-enclave/
drwxr-xr-x  4 crypto crypto    4096 Aug 10 10:36 bin/
-rwxr-xr-x  1 crypto crypto 2334994 Aug 10 10:28 convert_to_pubkey*
drwx------  2 root   root     16384 Aug 10 10:20 lost+found/
-rwxr-xr-x  1 crypto crypto    7334 Aug 10 10:28 reconfig.sh*
drwxr-xr-x  4 root   root      4096 Aug 10 10:28 release_binary/
drwxr-xr-x  2 crypto crypto    4096 Aug 10 10:30 sockets/
```

Next, we use the reconfiguration script `reconfig.sh`, to clean up the old data(if any) and obtain a fresh validator keys. Futhermore, you can choose the node type that you would like to run:

#### Step 3-A. Running a council node

```bash
$ ./reconfig.sh
....
....
You want to run it as a validator or a fullnode? Enter V for validator or F for fullnode: V
```

To join the network as a validator, the validator public key is required. 
The reconfiguration script `reconfig.sh` will print public key after generating tmkms signing key
```bash
Waiting for tmkms to run

Please keep consensus key and public key for node join if it is validator or find it in /chain/log/tmkms/tmkms.log

consensus key: 1624DE64203F50XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

converting consensus key to public key for node join
public key: P1DxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxQfk=
```
The script will also ask you to fill in the `moniker` value which is the display name for tendermint p2p
```bash
Replace moniker in /chain/.tendermint/config/config.toml
Moniker is display name for tendermint p2p

moniker: YOUR_MONIKER_NAME
```

Tendermint and Chain-abci are running at the background. You can check their logs by the command `journalctl`, for example: 

```bash 
journalctl -u tendermint.service -f
journalctl -u chain-abci.service -f
```

Once the tendermint syncs to the latest block, you can node-join this council node.

Follow [this](./thaler-testnet.md#step-4-b-6-send-a-council-node-join-request-transaction)

#### Step 3-B. Running a full node

```bash
$ ./reconfig.sh
....
....
You want to run it as a validator or a fullnode? Enter V for validator or F for fullnode: F
```
Can ignore public key information this part for full node setup

The script will also ask you to fill in the `moniker` value which is the display name for tendermint p2p
```bash
Replace moniker in /chain/.tendermint/config/config.toml
Moniker is display name for tendermint p2p

moniker: YOUR_MONIKER_NAME
```

The script will also ask to provide `SPID` and `IAS_API_KEY`
```
Replace spid and ias_api_key in /lib/systemd/system/tx-query-enclave.service

SPID: XXXXXXXXXXXXXXXXXXXX
IAS_API_KEY: XXXXXXXXXXXXXXXXXXXX
Add public IP to external_address in tendermint config.toml for fullnode
```
::: details To create your own `SPID` and `IAS_API_KEY`

On the [Intel's developer portal](https://api.portal.trustedservices.intel.com/EPID-attestation), you can sign up for an _Intel® Developer Zone_ account; under _Development Access_, you can obtain credentials for the non-production _DEV Intel® Software Guard Extensions Attestation Service_ and choose _"unlinkable quotes"_.

Once you obtained the credentials in the portal, you can check the "_Subscription details_" in your profile page, then set the following environment variables:

- `SPID`: Set it to the "Service Provider ID (SPID)" value from the portal;
- `IAS_API_KEY`: Set it to the primary or secondary API key from the portal.

:::

Tendermint, Chain-abci and Tx-query-enclave are running at the background. You can check their logs by the command `journalctl`, for example: 

```bash 
journalctl -u tendermint.service -f
journalctl -u chain-abci.service -f
journalctl -u tx-query-enclave.service -f
```

Once the tendermint syncs to the latest block, you can perform transaction described in [cli](../wallets/client-cli.md).

#### Step 3-B-1 Allow port in azure

For remote access to the full node from cli or client-rpc, you need to open the port in [azure network security](https://docs.microsoft.com/en-us/azure/virtual-network/security-overview).

| Name | Port | Source |
| ----------------------- | ------------------------ | ------------------------ |
| _Tendermint-p2p_ | 26656 | any |
| _Tendermint-rpc_ | 26657 | YOUR_SOURCE_IP |
| _TQE_        | 3322  | YOUR_SOURCE_IP |