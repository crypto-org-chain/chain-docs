
# Local Full Node Development

We will need the following to run a local full node:

- **[Genesis](https://crypto-com.github.io/getting-started/genesis.html#tendermint-extra-information):** Defining the initial state of the blockchain;
- **[Tendermint Node](https://crypto-com.github.io/getting-started/consensus.html#client-interacting-with-the-blockchain):** Performing consensus operations;
- **[Transaction Enclave](https://crypto-com.github.io/getting-started/enclave-architecture.html#transaction-validation):** Validating transactions;
- **[Application BlockChain Interface (_ABCI_)](https://tendermint.com/docs/spec/abci/)**: Connecting between Tendermint and applications.

## Step 1. Generate Genesis

Genesis describes the initial funding distributions as well as other configurations such as validators setup.
Firstly, we will need a wallet to receive the genesis funds.

<a id="wallet" />

### Step 1a) Create a Wallet

To create a wallet, currently, we have [client-rpc](https://github.com/crypto-com/chain/client-rpc) and [client-cli](https://github.com/crypto-com/chain/client-cli) available for this purpose. We will be using [client-cli](https://github.com/crypto-com/chain/client-cli) in this guide.

- Create a new wallet with the name "Default" by running

  ```bash
   ./target/debug/client-cli wallet new --name Default
  ```

  You will be prompted to enter a passphrase.
  
- Generate a staking address for the wallet to receive genesis funds. You will be prompted to enter the wallet passphrase again to verify.  

  ```bash
  $ ./target/debug/client-cli address new --name Default --type Staking
  Enter passphrase:
  New address: 0x3a102b53a12334e984ef51fda0baab1768116363
  ```

We will be distributing funds to our newly-created wallet address ``0x3a102...8116363``.

#### Step 1b)   Initialize Tendermint

- Initialise the Tendermint root directory by running:

``` bash
   tendermint init
```

  It initialises a fresh Tendermint Core data directory to be used by a full node. Specifically,  it creates  a new validator private key (`priv_validator.json`), and a genesis file (`genesis.json`).

- If you have previously initialized a Tendermint node, you may need to reset it by running:

  ```bash
  tendermint unsafe_reset_all
  ```

**Caution:** Only use this rest command in development as it removes the data directory, and all blockchain data will be lost.

Details and field definitions of `genesis.json` can be found  [here](https://tendermint.com/docs/tendermint-core/using-tendermint.html#fields).  Note that as in the [sample genesis](https://tendermint.com/docs/tendermint-core/using-tendermint.html#sample-genesis-json), `app_hash` is initially left as empty. The missing configuration will be completed in the next step.

#### Step 1c) Create a Genesis configuration

We  will use  the development tool  [dev-utils](https://github.com/crypto-com/chain/dev-utils) to generate the completed`genesis.json`:

- Create a  configuration file `dev-conf.json` in  ``~/chain/dev-utils/``
- Obtain the following information for generating the configuration of our Genesis file:
  - **Address to Receive Genesis Funds**: We have just created one in the [previous step](#wallet)
  - **Genesis Time**: Copy the `genesis_time` from `~/.tendermint/config/genesis.json`
  - **Validator Pub Key**: Copy the `pub_key.value` from `~/.tendermint/config/priv_validator_key.json`

- Replace `{WALLET_ADDRESS}`, `{PUB_KEY}` and `{GENESIS_TIME}` with the information obtained above.

	```json
	
	{
	    "distribution": {
	        "{WALLET_ADDRESS}": "2500000000000000000",
	        "0x20a0bee429d6907e556205ef9d48ab6fe6a55531": "2500000000000000000",
	        "0x35f517cab9a37bc31091c2f155d965af84e0bc85": "2500000000000000000",
	        "0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de": "1250000000000000000",
	        "0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07": "1250000000000000000"
	    },
	    "unbonding_period": 60,
	    "required_council_node_stake": "1250000000000000000",
	    "initial_fee_policy": {
	        "base_fee": "1.1",
	        "per_byte_fee": "1.25"
	    },
	    "council_nodes": [
	        {
	            "staking_account_address": "0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de",
	            "consensus_pubkey_type": "Ed25519",
	            "consensus_pubkey_b64": "{PUB_KEY}"
	        }
	    ],
	    "launch_incentive_from": "0x35f517cab9a37bc31091c2f155d965af84e0bc85",
	    "launch_incentive_to": "0x20a0bee429d6907e556205ef9d48ab6fe6a55531",
	    "long_term_incentive": "0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07",
	    "genesis_time": "{GENESIS_TIME}"
	}
	```

<a id="app-hash" />

- Next, we generate the Genesis configuration based on the above configuration file.

	```bash
	$ ./target/debug/dev-utils genesis generate --genesis-dev-config-path ./dev-utils/dev-conf.json
	"app_hash": "B3B873229A5FD2921801E592F3122B61C3CAE0C55FE0346369059F6643C751CC",
	"app_state": {"distribution":{"0x20a0bee429d6907e556205ef9d48ab6fe6a55531":["2500000000000000000","ExternallyOwnedAccount"],"0x35f517cab9a37bc31091c2f155d965af84e0bc85":["2500000000000000000","ExternallyOwnedAccount"],"0x3a102b53a12334e984ef51fda0baab1768116363":["2500000000000000000","ExternallyOwnedAccount"],"0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de":["1250000000000000000","ExternallyOwnedAccount"],"0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07":["1250000000000000000","ExternallyOwnedAccount"]},"launch_incentive_from":"0x35f517cab9a37bc31091c2f155d965af84e0bc85","launch_incentive_to":"0x20a0bee429d6907e556205ef9d48ab6fe6a55531","long_term_incentive":"0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07","network_params":{"initial_fee_policy":{"constant":1001,"coefficient":1025},"required_council_node_stake":"1250000000000000000","unbonding_period":60},"council_nodes":[{"staking_account_address":"0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de","consensus_pubkey_type":"Ed25519","consensus_pubkey_b64":"EIosObgfONUsnWCBGRpFlRFq5lSxjGIChRlVrVWVkcE="}]}
	```

We now have the initial `app_hash`and  `app_state`. In the above example, the App Hash is  `B3B87...751CC`.

#### Step 1d) Update Tendermint Genesis file

Copy the genesis configuration [prepared previously](#app-hash),  append it to `~/.tendermint/config/genesis.json` such that the ``genesis.json`` file looks similar to the following:

```diff
{
  "genesis_time": "2019-05-21T09:47:56.206264Z",
  "chain_id": "test-chain-y3m1e6-AB",
  "consensus_params": {
    "block": {
      "max_bytes": "22020096",
      "max_gas": "-1",
      "time_iota_ms": "1000"
    },
    "evidence": { "max_age": "100000" },
    "validator": { "pub_key_types": ["ed25519"] }
  },
  "validators": [
    {
      "address": "91A26F2D061827567FE1E2ADC1C22206D4AD0FEF",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "MFgW9OkoKufCrdAjk7Zx0LMWKA/0ixkmuBpO0flyRtU="
      },
      "power": "10",
      "name": ""
    }
  ],
+ "app_hash": "B3B873229A5FD2921801E592F3122B61C3CAE0C55FE0346369059F6643C751CC",
+  "app_state": {
+    "distribution": {
+      "0x20a0bee429d6907e556205ef9d48ab6fe6a55531": [
+        "2500000000000000000",
+        "ExternallyOwnedAccount"
+      ],
+      "0x35f517cab9a37bc31091c2f155d965af84e0bc85": [
+        "2500000000000000000",
+       "ExternallyOwnedAccount"
+      ],
+      "0x3a102b53a12334e984ef51fda0baab1768116363": [
+        "2500000000000000000",
+        "ExternallyOwnedAccount"
+      ],
+      "0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de": [
+        "1250000000000000000",
+        "ExternallyOwnedAccount"
+      ],
+      "0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07": [
+        "1250000000000000000",
+        "ExternallyOwnedAccount"
+      ]
+    },
+    "launch_incentive_from": "0x35f517cab9a37bc31091c2f155d965af84e0bc85",
+    "launch_incentive_to": "0x20a0bee429d6907e556205ef9d48ab6fe6a55531",
+    "long_term_incentive": "0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07",
+    "network_params": {
+      "initial_fee_policy": {
+        "constant": 1001,
+        "coefficient": 1025
+      },
+      "required_council_node_stake": "1250000000000000000",
+      "unbonding_period": 60
+    },
+    "council_nodes": [
+      {
+        "staking_account_address": "0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de",
+        "consensus_pubkey_type": "Ed25519",
+        "consensus_pubkey_b64": "EIosObgfONUsnWCBGRpFlRFq5lSxjGIChRlVrVWVkcE="
+      }
+    ]
+  }
+}
```

By adding the extra fields( `app_hash` and `app_state`), we obtained the complete `genesis.json` file.

## Step 2.  Start Transaction Enclaves

We also need the transaction enclave for validating transactions; it can run on the hardware platform or a virtual machine. Follow the instructions in [Crypto.com Chain Transaction Enclaves](https://github.com/crypto-com/chain-tx-enclave) to build and run the Chain Transaction Enclaves.

## Step 3. Start Chain ABCI

To start the Chain ABCI, we will need two pieces of data:

- **App Hash**: Prepared in the [Generate Genesis](#app-hash) step
- **Full Chain ID**: Copy the `chain_id` found in `~/.tendermint/config/genesis.json` (e.g. test-chain-y3m1e6-AB)

We can start the ABCI by running:

```bash
 chain-abci -g <APP_HASHx> -c <FULL_CHAIN_ID> --enclave_server tcp://127.0.0.1:25933
```

If you need backtraces or logging, you may set the environment variables before it:

```bash
$ RUST_BACKTRACE=1 RUST_LOG=info \
chain-abci \
-g <APP_HASH> \
-c <FULL_CHAIN_ID> \
--enclave_server tcp://127.0.0.1:25933
```

## Final Step: Start Tendermint Node

Once we have the **transaction enclave** and **chain-abci** running, we can start our tendermint node simply by : 

```bash
tendermint node
```

Or alternatively, we can start a basic [lite-client node](https://tendermint.com/docs/tendermint-core/light-client-protocol.html#light-client-protocol)
 by running

```bash
tendermint lite
```
