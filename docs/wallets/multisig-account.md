# Multisig account

A Multisig account is a Cronos PoS Chain account with a key that requires multiple signers in order to sign transactions. This is a useful feature to increase security as it requires the consent of more than 1 party in order to make a transaction.

This guide assumes that you have some CRO to make a transfer as well as a valid RCPC node with the `--node` argument against which you can broadcast transactions.

#### Step 1. Generate a Multisig key

First, make sure you have the public keys that will be used to create the multisig key. If not then make a public key through the command

```bash
$ ./chain-maind keys add test3
```

Once you have all the public keys, create the multisig account.

```bash
$ ./chain-maind keys add --multisig=test1,test2,test3[...] --multisig-threshold=2 multi
```

* With the `--multisig` flag, pass the names of the public keys to create a new multisig account called for example "multi".
* `--multisig-threshold` denotes the minimum number of private keys needed to sign a transaction, for example "2".
* By default the order does not matter in which you pass the existing keys to create a multisig account.

Check that this multisig account `multi` is succesfully created:

```bash
$ ./chain-maind keys show multi

- name: multi
  type: multi
  address: cro1klzn5esvee42swkj6y9sharx43gnsu9epy75jj
  pubkey: '{"@type":"/cosmos.crypto.multisig.LegacyAminoPubKey","threshold":2,"public_keys":[
    {"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A+MWcbaU4KISL5sCmxMIiiVnMDfyAR9j5i/AZ3jeByo0"},
    {"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5EYG0FaECx2ONp0mSIvn66cHmYwe40VPSCxHEm9zDi0"},
    {"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AzCHURcUtzNhozSkNNkrj5sSyJVjjNoVHHczvcax6eb0"}`]}'
  mnemonic: ""
```

Send some `cro` to this multisig account:

```bash
$ ./chain-maind tx bank send \
      cro19quuu2qxsfh0ryxu9dhufekepq6xdl7u5ncn34 \
      cro1klzn5esvee42swkj6y9sharx43gnsu9epy75jj \
      5cro \
      --chain-id=crypto-org-chain-mainnet-1 \
      --fees=5000basecro
```

#### Step 2. Create a multisig transaction

If we want to send for example 1 cro from the multisig account to another account, we first setup the unsigned transaction and store the output in `unsignedTx.json`

```bash
$ ./chain-maind tx bank send \
    cro1klzn5esvee42swkj6y9sharx43gnsu9epy75jj \
    cro1mcxedxf985g6rj54rxqluuzdssc0r8p0hydetv \
    1cro \
    --fees=5000basecro \
    --chain-id=crypto-org-chain-mainnet-1 \
    --generate-only > unsignedTx.json
```

The `unsignedTx.json` will now contain the unsigned version of the transaction, as can be seen by the empty list in signatures.

```json
{
  "body": {
    "messages": [
      {
        "@type": "/cosmos.bank.v1beta1.MsgSend",
        "from_address": "cro1klzn5esvee42swkj6y9sharx43gnsu9epy75jj",
        "to_address": "cro1mcxedxf985g6rj54rxqluuzdssc0r8p0hydetv",
        "amount": [
          {
            "denom": "basecro",
            "amount": "500000000"
          }
        ]
      }
    ],
    "memo": "",
    "timeout_height": "0",
    "extension_options": [],
    "non_critical_extension_options": []
  },
  "auth_info": {
    "signer_infos": [],
    "fee": {
      "amount": [
        {
          "denom": "basecro",
          "amount": "5000"
        }
      ],
      "gas_limit": "200000",
      "payer": "",
      "granter": ""
    }
  },
  "signatures": []
}
```

#### Step 3. Sign the transaction individually

Now we sign with at least 2 keys, for example `test1` and `test2` individually.

```bash
./chain-maind tx sign unsignedTx.json \
    --multisig=cro1klzn5esvee42swkj6y9sharx43gnsu9epy75jj \
    --from=test1 \
    --output-document=test1sig.json \
    --chain-id=crypto-org-chain-mainnet-1
```

```bash
./chain-maind tx sign unsignedTx.json \
    --multisig=cro1klzn5esvee42swkj6y9sharx43gnsu9epy75jj \
    --from=test2 \
    --output-document=test2sig.json \
    --chain-id=crypto-org-chain-mainnet-1
```

#### Step 4. Create the multisignature

With the signed transactions from step 3, we can sign a multisignature.

```bash
./chain-maind tx multisign \
    unsignedTx.json \
    multitest \
    test1sig.json \
    test2sig.json \
    --chain-id=crypto-org-chain-mainnet-1 > signedTx.json
```

Now we can see the public keys that have signed a valid new signature as indicated in the `signatures` field.

```json
{
  "body": {
    ...
  "auth_info": {
    "signer_infos": [
      {
        "public_key": {
          "@type": "/cosmos.crypto.multisig.LegacyAminoPubKey",
          "threshold": 2,
          "public_keys": [
            {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "A+MWcbaU4KISL5sCmxMIiiVnMDfyAR9j5i/AZ3jeByo4"
            },
            {
              "@type": "/cosmos.crypto.secp256k1.PubKey",
              "key": "A5EYG0FaECx2ONp0mSIvn66cHmYwe40VPSCxHEm9zDi5"
            }
          ]
        },
        "mode_info": {
          "multi": {
            "bitarray": {
              "extra_bits_stored": 3,
              "elems": "YA=="
            },
            "mode_infos": [
              {
                "single": {
                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"
                }
              },
              {
                "single": {
                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"
                }
              }
            ]
          }
        },
        "sequence": "2"
      }
    ],
    ...
  "signatures": [
    "CkD7Ive8bavDoKbPFJ+ZxlLcGp43JIZnUJ/iRh9mXX9S7QdeqR/JMsfke9MI+gEJJomcHCRu+TO0S+eaisraQh75CkCf4/B8GPukMeQU36E9BIgdHuOBoMqAbQNRzof7MkOWRVcK113OlVL5QWzdAZb4+WHjtssZZDTJSrHn51Umcj"
  ]
}
```

#### Step 5. Broadcast the transaction

The final step is to broadcast this multisigned transaction.

```bash
./chain-maind tx broadcast signedTx.json --chain-id=crypto-org-chain-mainnet-1

code: 0
codespace: ""
data: ""
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: 114B582155DAC1033293A00FE8B2142EEDE4E560AE756529AFB1066E25033627
```

Nice, that is it, now you should be able to create multisigned transactions. Verify that you received this transaction succesfully with

```bash
./chain-maind query bank balances cro1mcxedxf985g6rj54rxqluuzdssc0r8p0hydetv
```
