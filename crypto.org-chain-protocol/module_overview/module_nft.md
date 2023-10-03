# module\_nft

#### `nft` module

#### Introduction

NFT provides the ability to digitize assets. The NFT Module described here is meant to be used as a module across chains for managing non-fungible token that represents individual assets with unique features. This standard was developed on Ethereum within the ERC-721 and the subsequent ERC-1155 standard addressed some of the restrictions of Ethereum regarding storage costs and semi-fungible assets. The NFT on the chain is identified by an ID, and the transaction process will also be publicly recorded. NFT metadata is based on a specific JSON schema - it can be stored directly on the chain or the URI of its storage source outside the chain can be stored on the chain.



Fungible tokens are mutually interchangeable, and one most common example of fungible tokens is fiat currencies. Specifically, the $100.50 US dollars in my bank account is equally valuable as the $100.50 US dollars in someone else's bank account. Another example of fungible tokens would be the native cryptocurrency of **Ethereum**, one of the most popular blockchain networks, i.e. **Ether**. Ethers are totally fungible, meaning that one ether is equal to one ether, and it's equal to any other ether as well. Particularly, ethers are also highly divisible up to one **wei**, or 0.000000000000000001 (10-18) ether.

In contrast, non-fungible tokens (NFTs) are special tokens that are unique in the sense that they cannot be split or equally interchanged for other NFTs of the same type. **CryptoKitties** on **Ethereum** or **Loaded Lions** on **Crypto.org Chain** are both examples of NFTs: each **CryptoKitty** or **Loaded Lion** is unique and non-divisible, unlike **Bitcoin**. Generally speaking, NFTs are unique, non-interchangeable, and non-divisible.

On-chain NFT standards were first developed on **Ethereum** within the **ERC-721** standard and its subsequent **Ethereum Improvement Proposals**. The subsequent **ERC-1155** standard aims to address some restrictions of **Ethereum** such as storage costs and semi-fungible assets. NFTs on application specific blockchains share some but not all features as their **Ethereum** brethren, since application specific blockchains are more flexible in how their resources are utilized, such as the ability to use strings as IDs.

The `nft` module here facilitates managing non-fungible tokens that represent individual assets with unique features on **Crypto.org Chain**.

You can find the [NFT specification doc](https://github.com/crypto-org-chain/chain-main/tree/master/x/nft/spec) here.

####

#### Overview

Below are key concepts and properties for NFTs on **Crypto.org Chain**:

*   **Denom**

    A denom represents a collection of NFTs. It is the globally unique nft category name. Denom ID is the globally unique nft category identifier of Denom. For example, I could issue a denom named "CryptoPuppies" under which my collection of 100 CryptoPuppies NFTs get minted. Each denom has a `denom ID` and a `denom name`, both are unique on chain. A `denom schema` should generally be set when a denom gets issued, which indicates the format of NFT metadata under this denom.
*   **Token**

    An NFT, or simply "token", is a specific instance of NFT minted under a denom. Each token has a `token ID`, which is unique under a specific denom. Generally, a token also has its `token name` (name of the NFT), `token URI` (off-chain information or storage location of the NFT), and `token metadata` (on-chain data that provides information about the NFT).
*   **Metadata**

    The structure containing the specific data of the nft
*   **Metadata Specification**

    The JSON Schema that nft metadata should follow
*   **Metadata URI**

    The URI indicates its storage location when metadata is stored off-chain

::: tip Specifications `denom ID`: a string of lowercase alphanumeric characters with length between 3 and 64 that begins with a letter, unique over the chain;

`denom name`: a non-empty string, unique over the chain;

`denom schema`: a JSON metadata format for NFTs under this denom;

`token ID`: a string that is unique under the denom;

`token name`: a string;

`token URI`: a string that directs to the off-chain information or storage location of the NFT;

`token metadata`: a JSON object that matches the denom schema and represents the on-chain data that provides information about the NFT. :::

Just as each user is uniquely identified by its address, each NFT is uniquely identified by the combination of its **denom ID** and its **token ID** (like a UID for the NFT), showing its uniqueness, non-interchangeability, and non-divisibility.



#### Transactions and Queries

#### Transactions

In general,

1. any user may `issue` a denom as long as neither the **denom ID** nor the **denom name** has been taken;
2. the creator of a denom, also know as the owner of the denom, is the only user who may `mint` an NFT under such denom;
3. a user may `edit` or `burn` an NFT only if he/she is both the creator and the owner of that NFT;
4. a user may `transfer` an NFT as long as he/she is the owner of that NFT.



#### `issue`:

Every NFT needs to "live" under a denom: an NFT collection. Therefore, the first step is to issue a denom before one can mint NFTs:

**`tx nft issue [denom_id] --name [denom_name] --schema [denom_schema] --from [user_address]`- Issue a denom**

::: details Example: Issue a new denom with specified name and schema

```bash
$ chain-maind tx nft issue fftb2050 --name "Fortune Favours the Brave 2050" --schema '{ "Name": "string", "Description": "string" }' --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgIssueDenom",
    "id": "fftb2050",
    "name": "Fortune Favours the Brave 2050",
    "schema": "{ \"Name\": \"string\", \"Description\": \"string\" }",
    "sender": "cro18..."
}
```

:::

::: tip NOTE Even though the denom schema is not a compulsory field, it is generally recommended to illustrate the format of NFT metadata as an informative summary of such denom. Moreover, a denom is non-transferable, non-editable, and non-deletable, so be mindful when issuing a denom. :::



#### `mint`:

The specific nft of this type can be created after the nft is issued. The denom ID, token ID, recipient address and URI need to be specified.

**`tx nft mint [denom_id] [token_id] --name [token_name] --uri [token_uri] --data [token_metadata] --recipient [recipient_address] --from [user_address]`- Mint an NFT**

::: details Example: Mint an NFT with specified name, URI, data, and recipient

```bash
$ chain-maind tx nft mint fftb2050 v1ed1 --name "Version 1 Edition 1" --uri "https://crypto.com/fftb" --data '{ "Name": "v1", "Description": "ed1"}' --recipient <recipient_address> --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgMintNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "name": "Version 1 Edition 1",
    "uri": "https://crypto.com/fftb",
    "data": "{ \"Name\": \"v1\", \"Description\": \"ed1\"}",
    "sender": "cro18...",
    "recipient": "cro18..."
}
```

:::

::: tip NOTE The token name, URI, and metadata fields are optional but highly recommended fields during the minting process, even though they might also be edited later through `edit`. In addition, the minter may specify a recipient of the new NFT, where it defaults to be just the minter if not specified. :::



#### `edit`:

Unlike NFTs minted on **Ethereum**, an NFT minted on **Crypto.org Chain** may easily be edited, provided that the user editing it is both the owner and creator of such NFT.

**`tx nft edit [denom_id] [token_id] --name [new_name] --uri [new_uri] --data [new_metadata] --from [user_address]`- Edit an NFT**

::: details Example: Edit an NFT to change its URI

```bash
$ chain-maind tx nft edit fftb2050 v1ed1 --uri "https://crypto.com/nft" --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgEditNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "name": "[do-not-modify]",
    "uri": "https://crypto.com/nft",
    "data": "[do-not-modify]",
    "sender": "cro18..."
}
```

:::

::: tip NOTE There are 3 fields available for NFT editing: name, URI, and the metadata. Any field that is not specified will remain unchanged. :::



#### `burn`:

A user may burn an existing NFT as long as he/she is both the owner and creator of such NFT, similar to editing the NFT.

**`tx nft burn [denom_id] [token_id] --from [user_address]`- Burn an NFT**

::: details Example: Burn an NFT

```bash
$ chain-maind tx nft burn fftb2050 v1ed1 --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgBurnNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "sender": "cro18..."
}
```

:::

::: tip NOTE A token ID is unique under a specific denom, meaning no two existing NFTs can share the same token ID under the same denom. However, when an NFT gets burnt, its token ID is freed and is available for mint again. :::



#### `transfer`:

Transferring an NFT is easy: one only needs to be the owner of the NFT.

**`tx nft transfer [recipient_address] [denom_id] [token_id] --from [granter_address]` - Transfer an NFT**

::: details Example: Transfer an NFT to a recipient

```bash
$ chain-maind tx nft transfer <recipient_address> fftb2050 v1ed1 --from <user_address> --chain-id <chain-id>

## Illustrative partial transaction payload ##
{
    "@type": "/chainmain.nft.v1.MsgTransferNFT",
    "id": "v1ed1",
    "denom_id": "fftb2050",
    "sender": "cro18...",
    "recipient": "cro1j..."
}
```

:::



#### Queries

In the NFT module, queries can be divided into 3 main categories:

* denom information;
* token information;
* owner information.



* **query denom information:**

**`query nft denom [denom_id]` - Query information of a denom by its denom ID**

::: details Example: Query information of a denom by its denom ID

```bash
$ chain-maind query nft denom fftb2050 --output json | jq
{
  "id": "fftb2050",
  "name": "Fortune Favours the Brave 2050",
  "schema": "{ \"Name\": \"string\", \"Description\": \"string\" }",
  "creator": "cro18..."
}
```

:::

Effectively, one may also query information of a denom by its denom name instead of denom id:

**`query nft denom-by-name [denom_name]` - Query information of a denom by its denom name**



To check the number of existing NFTs in a denom:

**`query nft supply [denom_id]` - Query the number of existing NFTs in a denom**

::: details Example: Query the number of existing NFTs in a denom

```bash
$ chain-maind query nft supply fftb2050
amount: "3"
```

:::

In addition, one may query the number of existing NFTs in a denom of a specific owner through the `--owner` flag:

**`query nft supply [denom_id] --owner [owner_address]` - Query the number of existing NFTs in a denom of a specific owner**

::: details Example: Query the number of existing NFTs in a denom of a specific owner

```bash
$ chain-maind query nft supply fftb2050 --owner <owner_address>
amount: "2"
```

:::



* **query token information:**

One may query information of a specific NFT with its UID (denom ID and token ID):

**`query nft token [denom_id] [token_id]` - Query information of an NFT**

::: details Example: Query information of an NFT

```bash
$ chain-maind query nft token fftb2050 v1ed1 --output json | jq
{
  "id": "v1ed1",
  "name": "Version 1 Edition 1",
  "uri": "https://crypto.com/fftb",
  "data": "{ \"Name\": \"v1\", \"Description\": \"ed1\"}",
  "owner": "cro1j..."
}
```

:::

One may also query information of all NFTs under a specific denom:

**`query nft collection [denom_id]` - Query information of all NFTs under a specific denom**

::: details Example: Query information of all NFTs under a specific denom

```bash
$ chain-maind query nft collection fftb2050 --output json | jq
{
  "collection": {
    "denom": {
      "id": "fftb2050",
      "name": "Fortune Favours the Brave 2050",
      "schema": "{ \"Name\": \"string\", \"Description\": \"string\" }",
      "creator": "cro18..."
    },
    "nfts": [
      {
        "id": "v1ed1",
        "name": "Version 1 Edition 1",
        "uri": "https://crypto.com/fftb",
        "data": "{ \"Name\": \"v1\", \"Description\": \"ed1\"}",
        "owner": "cro1j..."
      },
      {
        "id": "v1ed2",
        "name": "Version 1 Edition 2",
        "uri": "https://crypto.com/fftb",
        "data": "{ \"Name\": \"v1\", \"Description\": \"ed2\"}",
        "owner": "cro1j..."
      },
      {
        "id": "v1ed3",
        "name": "Version 1 Edition 3",
        "uri": "https://crypto.com/fftb",
        "data": "{ \"Name\": \"v1\", \"Description\": \"ed3\"}",
        "owner": "cro18..."
      }
    ]
  },
  "pagination": {
    "next_key": null,
    "total": "0"
  }
}
```

:::



* **query owner information:**

Last but not least, information about a specific NFT owner may also be queried.

**`query nft owner [owner_address]` - Query information of all NFTs owned by a specific owner**

::: details Example: Query information of all NFTs owned by a specific owner

```bash
$ chain-maind query nft owner <owner_address> --output json | jq
{
  "owner": {
    "address": "cro1j...",
    "id_collections": [
      {
        "denom_id": "fftb2022",
        "token_ids": [
          "fftb1"
        ]
      },
      {
        "denom_id": "fftb2050",
        "token_ids": [
          "v1ed1",
          "v1ed2"
        ]
      }
    ]
  },
  "pagination": {
    "next_key": null,
    "total": "0"
  }
}
```

:::

One may also use the `--denom-id` flag to query owner NFT information under a specific denom:

**`query nft owner [owner_address] --denom-id [denom_id]` - Query information of all NFTs owned by a specific owner under specified denom**

::: details Example: Query information of all NFTs owned by a specific owner under specified denom

```bash
$ chain-maind query nft owner <owner_address> --denom-id fftb2050 --output json | jq
{
  "owner": {
    "address": "cro1j...",
    "id_collections": [
      {
        "denom_id": "fftb2050",
        "token_ids": [
          "v1ed1",
          "v1ed2"
        ]
      }
    ]
  },
  "pagination": {
    "next_key": null,
    "total": "0"
  }
}
```

:::
