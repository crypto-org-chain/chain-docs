# Setup a RPC Node

On Cronos POS, every node runs the same `chain-maind` binary. A "full/archived node", a "validator node", and an "RPC node" are the **same software with different configuration** — an RPC node is simply a full node with its query servers turned on and exposed. Three API surfaces are available:

<table><thead><tr><th>Surface</th><th width="124.9921875">Default port</th><th width="148.3515625">Config section</th><th width="113.49609375">Eabled defaultly?</th><th>What it serves</th></tr></thead><tbody><tr><td>Tendermint/CometBFT RPC</td><td><code>26657</code></td><td><code>config.toml</code> <code>[rpc]</code></td><td>YES</td><td>Raw consensus data: <code>block</code>, <code>block_results</code>, <code>tx</code>, <code>status</code>, <code>broadcast_tx</code></td></tr><tr><td>REST API</td><td><code>1317</code></td><td><code>app.toml</code> <code>[api]</code></td><td>NO</td><td>Application-level REST + Swagger</td></tr><tr><td>gRPC</td><td><code>9090</code></td><td><code>app.toml</code> <code>[grpc]</code></td><td>NO</td><td>Processed chain state, used by indexers/SDKs</td></tr></tbody></table>

{% hint style="warning" %}
**Do not run a public RPC node on a validator node.** A validator holds block-signing keys and is a high value target; exposing RPC widens its attack surface and competes for resources, risking missed blocks and jailing. The standard topology is: validators stay private behind sentry nodes, and a **separate full node serves RPC** to the outside world. The rest of this guide assumes a non-validating RPC node.
{% endhint %}

### Enable API and gRPC server

Tendermint/CometBFT RPC is default enabled, and auto listens `rpc.laddr` in `config.toml` below. To expose it externally, change `[rpc].laddr` to `0.0.0.0` and place it behind a firewall/reverse proxy.

```toml
[rpc]
laddr = "tcp://127.0.0.1:26657"
```

To enable REST API and gRPC on application level,  kindly edit `./chain-maind/config/app.toml` and update the following section:

```toml
[api]

# Enable defines if the API server should be enabled.
enable = true

# Swagger defines if swagger documentation should automatically be registered.
swagger = true

# Address defines the API server to listen on.
address = "tcp://0.0.0.0:1317"

...

[grpc]

# Enable defines if the gRPC server should be enabled.
enable = true

# Address defines the gRPC server address to bind to.
address = "0.0.0.0:9090"
```

### Access RPC server

#### Tendermint RPC (Local access only)

You can access Tendermint Swagger UI here: [https://docs.tendermint.com/master/rpc/#/](https://docs.tendermint.com/master/rpc/#/)

Then switch the "servers" to "localhost" in the **dropdown** and you can interact with the Swagger UI.

#### gRPC

There are a few clients our team has used before:

**BloomRPC**

* [https://github.com/uw-labs/bloomrpc](https://github.com/uw-labs/bloomrpc)
* GUI client for GRPC services

**gRPCurl**

* [https://github.com/fullstorydev/grpcurl](https://github.com/fullstorydev/grpcurl)
* Like curl, but for gRPC
*   Install grpcurl (Mac)

    ```bash
    brew install grpcurl
    ```

    for other OSs please refer to GitHub
*   Query gRPC API

    ```bash
    grpcurl -plaintext localhost:9090 list

    cd grpc/proto
    grpcurl -proto ./cosmos/staking/v1beta1/query.proto -plaintext localhost:9090 cosmos.staking.v1beta1.Query.Validators
    ```

    The reason we have to go to the `grpc/proto` directory is that gRPC will look for proto files dependency, and they expect that to be under the path you are currently at. To avoid this limitation, we can specify the proto import path.

    ```bash
    grpcurl -import-path ./grpc/proto -proto ./grpc/proto/cosmos/staking/v1beta1/query.proto -plaintext localhost:9090 cosmos.staking.v1beta1.Query.Validators
    ```
*   More query examples

    ```bash
    grpcurl -d ' {"validator_addr": "tcrocncl1l74wnswzx4zsmv674tl99h3h3fgj3al2tdzne7"}' -import-path ./grpc/proto -proto ./grpc/proto/cosmos/staking/v1beta1/query.proto -plaintext localhost:9090 cosmos.staking.v1beta1.Query.Validator
    ```
