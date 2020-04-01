# Notes on Production Deployment

- See [Tendermint notes on running in production](https://docs.tendermint.com/master/tendermint-core/running-in-production.html) and [notes on setting up a validator](https://docs.tendermint.com/master/tendermint-core/validators.html#setting-up-a-validator)
- Validators shouldn’t be exposed directly to the internet
- RPC shouldn’t be exposed directly to the internet (as it currently doesn’t support rate-limiting, authentication…)
- Validator block signing should be via [tmkms](https://github.com/iqlusioninc/tmkms)

## Setting up Tendermint KMS for signing blocks (only for validators / council nodes)
Currently (tmkms v0.7), the system is still a bit Cosmos-centric, so the setup is slightly quirky.

### Configuration
As per the [example](https://github.com/iqlusioninc/tmkms/blob/develop/tmkms.toml.example), create `~/.tmkms/tmkms.toml` (or any path) with something like:

```
[[chain]]
id = "<CHAIN_ID>"
key_format = { type = "hex" }

[[validator]]
addr = "unix:///<TMKMS_SOCKET_PATH>"
chain_id = "<CHAIN_ID>"

[[providers.<USED SIGNING PROVIDER>]]
chain_ids = ["<CHAIN_ID>"]
```

In `~/.tendermint/config/config.toml` (or wherever located), set the socket address to the same one as in `tmkms.toml`:

```
priv_validator_laddr = "unix:///<TMKMS_SOCKET_PATH>"
```

### Obtaining the consensus / validator public key

#### Step 0. generate / initialize the keypair or seed
Step 0 depends on the signing provider -- e.g. for Ledger devices, one may need to enable *developer mode* in Ledger Live settings and install the Tendermint validator app.

#### Step 1. obtain the public key in the correct encoding
Depending on the signing provider, there may be a command to print out the public key. One other option is to run `tmkms start -c .tmkms/tmkms.toml -v` where `-v` is for verbose logging; the log may then include a message `... added consensus key <KEY_HEX_PAYLOAD>`.

The public key hex payload is Amino-encoded -- for the use in Tendermint configurations, there are two steps that need to be done:

1. strip off the Amino prefix; in the case of Ed25519 public keys, it's 5 bytes: 0x16, 0x24, 0xDE, 0x64, 0x20.

2. convert the stripped-off `KEY_HEX_PAYLOAD` to base64.

#### Step 2. place / use the public key where needed
For example, generate the `genesis.json` with it if the corresponding node is one of the initial validators / council nodes.

#### Step 3. start up everything
As before, but along with `tendermint node`, `tmkms start -c .tmkms/tmkms.toml` should also be launched.