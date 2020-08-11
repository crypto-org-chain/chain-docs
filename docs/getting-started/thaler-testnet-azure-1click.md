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

| Configuration | Value |
| --- | --- |
| *Region* | DCsv2-series VMs for Azure is available in three regions (East US, Canada Central and UK South) |
| *Size* | Select either DC1s_v2, DC2s_v2(Recommended) or DC4s_v2 |
| *SSH public key source* | Choose "existing public key" |
| *SSH public key* | Copy and past your SSH public key |
| *Resource group* | We suggest to create a new and dedicated one so that you can easily manage resources attached to the instance |
| *Disk* | 

#### Step 2-2. Disk
* Follow default setting

#### Step 2-3. Networking
![](./assets/azure_1click_networking.png)

* *Virtual network*, *Subnet*, *Public IP* and *NIC*: "Create new" if you don't have any in that region

#### Step 2-4. Management
* Follow default setting
* *Boot diagnostics*: default On. Off if not required

#### Step 2-5. Advanced
* Follow default setting

#### Step 2-6. Tags
* Create Tag if needed

#### Step 2-7. Review + Create
* Click "create" to create your instance

### Step 3. Running a full node
TODO: SSH and run ./reconfig.sh

### Step 4. Running a council node
TODO: SSH and run ./reconfig.sh