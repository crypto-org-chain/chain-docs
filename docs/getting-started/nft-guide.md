# NFT 

NFT provides the ability to digitize assets. The NFT Module described here is meant to be used as a module across chains for managing non-fungible token that represents individual assets with unique features. This standard was developed on Ethereum within the ERC-721 and the subsequent ERC-1155 standard addressed some of the restrictions of Ethereum regarding storage costs and semi-fungible assets.
The NFT on the chain is identified by an ID, and the transaction process will also be publicly recorded. NFT metadata is based on a specific JSON schema - it can be stored directly on the chain or the URI of its storage source outside the chain can be stored on the chain. 

This is a description of the Crypto.org Chain NFT properties and transactions, and you can find the [NFT specification doc](https://github.com/crypto-org-chain/chain-main/tree/master/x/nft/spec) here.

## Properties

**Deno**

The category of the nft

**Denom**

The denomination of the NFT. It is the globally unique nft category name

**Denom ID** 

The globally unique nft category identifier of Denom

**ID**

The unique ID of the nft, which is unique in this nft Denom

**Metadata**

The structure containing the specific data of the nft

**Metadata Specification**

The JSON Schema that nft metadata should follow

**Metadata URI**

The URI indicates its storage location when metadata is stored off-chain



## Transactions

**issue**

Specify the nft denom and metadata JSON Schema to issue nft.

[`chain-maind tx nft issue <denom-id> --from=<key-name> --name=<denom-name> --schema=<schema-content or path/to/schema.json> --chain-id=<chain-id> --fees=<fee>`]
  
**mint**

The specific nft of this type can be created after the nft is issued. The denom ID, token ID, recipient address and URI need to be specified.

[`chain-maind tx nft mint <denom-id> <token-id> --uri=<uri> --recipient=<recipient> --from=<key-name> --chain-id=<chain-id> --fees=<fee>`]

**edit**
  
The metadata of the specified nft can be updated by the creator of a certain NFT. 
*Please note that the creator also needs to be the owner of the NFT at the same time in order to edit it.*

[`chain-maind tx nft edit <denom-id> <token-id> --uri=<uri> --from=<key-name> --chain-id=<chain-id> --fees=<fee>`]

**transfer**
  
Transfer the designated nft.

[`chain-maind tx nft transfer <recipient-address> <denom-id> <token-id> --from=<key-name> --chain-id=<chain-id> --fees=<fee>`]

**burn**
  
Burn the created nft.

[`chain-maind tx nft burn <denom-id> <token-id> --from=<key-name> --chain-id=<chain-id> --fees=<fee>`]


:::

*The following examples are based on the NFT previously been created: [canismajor1](https://crypto.org/explorer/nfts/tokens/canismajor1/beginning).*

:::

**check nft denom information**

Check all issued nft denom information.

[`chain-maind q nft denoms`]


::: details Example: 

  ```bash
$ ./chain-maind q nft denoms  --node https://mainnet.crypto.org:26657/
  .....
  creator: cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd
  id: canismajor1
  name: 'Crypto.org Chain Phase 1: Canis Major'
  schema: '{"name":"string","description":"string","image":"string","mimeType":"string"}'
  schema: '{"title":"string","blockHeight":"string"}'
  .....
```
:::

**check the nft detail**

Check the details of the nft by Denom ID.

[`chain-maind q nft denom <denom-id>`]

::: details Example: 

```bash
$ ./chain-maind q nft denom canismajor1  --node https://mainnet.crypto.org:26657/

creator: cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd
id: canismajor1
name: 'Crypto.org Chain Phase 1: Canis Major'
schema: '{"name":"string","description":"string","image":"string","mimeType":"string"}'

```
:::

**check nft amount in a specified denom**
  
Check the total supply of nft according to Denom ID. 
  
[`chain-maind q nft supply <denom-id> --owner=<owner>`]

::: details Example:  

```bash
$ ./chain-maind q nft supply  canismajor1  --node https://mainnet.crypto.org:26657/

amount: "1"
```
:::


**check all nft of a specified account**
  
Check all nft owned by an account, and you can specify the Denom ID parameter.
  
[`chain-maind q nft owner <address> --denom-id=<denom-id>`]

:::

**check all nft of a specified denom**
  
Check all nft according to Denom ID.
  
[`chain-maind q nft collection <denom-id>`]

::: details Example: 
  
``` bash 
$./chain-maind q nft collection  canismajor1  --node https://mainnet.crypto.org:26657/
  
collection:
  denom:
    creator: cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd
    id: canismajor1
    name: 'Crypto.org Chain Phase 1: Canis Major'
    schema: '{"name":"string","description":"string","image":"string","mimeType":"string"}'
  nfts:
  - data: '{"name":"Canis Major: The beginning","image":"https://ipfs.io/ipfs/QmUqmgx7axVihM3g29DpJRxvPHzEJLZQfWckHDM9qB5hTY","mimeType":"image/jpeg"}'
    id: beginning
    name: ""
    owner: cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd
    uri: ""
pagination:
  next_key: null
  total: "0"

```
:::

 
**check specified nft**
  
Check the specific nft based on Denom ID and Token ID.
  
[`chain-maind q nft token <denom-id> <token-id>`]

:::details Example: 
  
```bash
$ ./chain-maind q nft token canismajor1 beginning --node https://mainnet.crypto.org:26657/
  
data: '{"name":"Canis Major: The beginning","image":"https://ipfs.io/ipfs/QmUqmgx7axVihM3g29DpJRxvPHzEJLZQfWckHDM9qB5hTY","mimeType":"image/jpeg"}'
id: beginning
name: ""
owner: cro1nk4rq3q46ltgjghxz80hy385p9uj0tf58apkcd
uri: ""
```
:::
