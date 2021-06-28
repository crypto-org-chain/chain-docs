# Node Setup and RPC note

## Node minimum setup

Here I will be using a local `chain-maind` folder as the home directory. By default chain data are stored in your home directory `~/.chain-maind`. For example, when joining the testnet `testnet-croeseid-3`: 

```bash
./chain-maind init mynode --chain-id testnet-croeseid-3 --home ./chain-maind

sed -i.bak -E 's#^(persistent_peers[[:space:]]+=[[:space:]]+).*$#\1"b2a4c8db43b815e1ed83ab4723a6af84ccb8e3e4@13.213.110.242:26656,c76d7d28141daf037bec919268d0f38e64fd8389@3.1.240.30:26656"#' ~/.chain-maind/config/config.toml
sed -i.bak -E 's#^(create_empty_blocks_interval[[:space:]]+=[[:space:]]+).*$#\1"5s"#' ~/.chain-maind/config/config.toml
sed -i.bak -E 's#^(timeout_commit[[:space:]]+=[[:space:]]+).*$#\1"2s"#' ~/.chain-maind/config/config.toml  
```


### Enable API and gRPC server

Edit `./chain-main/config/app.toml` and update the following section
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

### Start the node

Afterward, you should be able to start you node by running 
```bash
./chain-maind start --home ./chain-maind/
````
where the blockchain data, keys will be stored at the folder `<current_path>/chain-maind/`

## Access RPC server

### Tendermint (Local access only)

You can access Tendermint Swagger UI here:
https://docs.tendermint.com/master/rpc/#/

Switch the servers to localhost in the dropdown and you can interact with the Swagger UI.

### gRPC

There are few clients our team has used before

#### BloomRPC

- https://github.com/uw-labs/bloomrpc

- GUI client for GRPC services

#### grpcurl

- https://github.com/fullstorydev/grpcurl

- Like curl, but for gRPC

- Install grpcurl (Mac)

  ```bash
  brew install grpcurl
  ```

  for other OSs please refer to GitHub

- Query gRPC API

    ```bash
    grpcurl -plaintext localhost:9090 list

    cd grpc/proto
    grpcurl -proto ./cosmos/staking/v1beta1/query.proto -plaintext localhost:9090 cosmos.staking.v1beta1.Query.Validators
    ```

    The reason we have to go to the `grpc/proto` directory is that gRPC will look for proto files dependency, and they expect that to be under the path you are currently at. To avoid this limitation, we can specify the proto import path.

    ```bash
    grpcurl -import-path ./grpc/proto -proto ./grpc/proto/cosmos/staking/v1beta1/query.proto -plaintext localhost:9090 cosmos.staking.v1beta1.Query.Validators
    ```

- More query examples

    ```bash
    grpcurl -d ' {"validator_addr": "tcrocncl1l74wnswzx4zsmv674tl99h3h3fgj3al2tdzne7"}' -import-path ./grpc/proto -proto ./grpc/proto/cosmos/staking/v1beta1/query.proto -plaintext localhost:9090 cosmos.staking.v1beta1.Query.Validator
    ```

## Tricks on creating a validator on testnet

1. Make sure your node is fully sync before you join as validator

2. Gas price error

    As discussed in the metting, sometimes the `create-valiator` may fail because of the gas. You can use the following command instead (notice we have provide `--gas` and `--gas-price`) 

    ```bash
    $ ./chain-maind tx staking create-validator \
    --from=[name_of_your_key] \
    --amount=500000tcro \
    --pubkey=[tcrocnclconspub...]  \
    --moniker="[The_id_of_your_node]" \
    --security-contact="[security contact email/contact method]" \
    --chain-id="testnet-croeseid-3" \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="1" \
    --gas="auto" \
    --gas-price="0.1basetcro"
    ```
