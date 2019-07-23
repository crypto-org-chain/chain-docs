## Getting Started
prepare ubuntu 18.0.x  
and intel cpu    
~/bin  is the main folder for binaries

## how it works
chain-tx-enclave (use intel sgx)  -> working as docker
chain-abci     (connects to enclave)   
tendermint   (connects to chain-abic)  

## prepare os ✍
apt update    
apt install curl git gcc gettext pkg-config cmake vim wget  
apt install libsnappy-dev libtool build-essential autoconf    

## install golang
cd ~  
wget https://dl.google.com/go/go1.12.7.linux-amd64.tar.gz  
tar xvf go1.12.7.linux-amd64.tar.gz   
mv go /usr/local  
mkdir ~/go  
vi .profile  
mkdir ~/bin
```
export PATH="$HOME/.cargo/bin:$PATH"
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:/usr/local/go/bin:$PATH
export PATH=$HOME/bin:$PATH
export SGX_MODE=SW
export NETWORK_ID=ab
export RUST_LOG=info
```

## install rust
cd ~  
curl https://sh.rustup.rs -sSf | sh     
source $HOME/.cargo/env    
rustup default nightly-2019-05-22

## get source code
git clone https://github.com/zeromq/libzmq.git  
git clone https://github.com/crypto-com/chain.git    
git clone https://github.com/crypto-com/chain-tx-enclave.git  
git clone https://github.com/tendermint/tendermint.git

## compile zeromq
cd libzmq  
autogen.sh  
./configure  
make  
make install  
cd ..  
cd chain  

## compile chain-abci
vi ~/.cargo/config
```
[build]
rustflags = ["-Ctarget-feature=+aes,+ssse3"]
```
:wq  
cargo build --release
cp ./target/release/chain-abci ~/bin

## compile tendermint  
cd ~
cd tendermint  
make get_tools
make build  
cp ./build/tendermint ~/bin

## compile enclave
cd ~  
cd chain-tx-enclave  
docker build -t chain-tx .   
docker run -ti --rm -p 25933:25933 -v ~/chain-tx-enclave/:/root/sgx -it chain-tx /bin/bash  
mkdir ~/bin
cd sgx
export SGX_MODE=SW  
export NETWORK_ID=ab  
cd ~/sgx.app  
cargo build   
for hw 
```
docker run -ti --device /dev/isgx -v ~/chain-tx-enclave/:/root/sgx -it chain-tx /bin/bash

root@docker:/# LD_LIBRARY_PATH=/opt/intel/libsgx-enclave-common/aesm /opt/intel/libsgx-enclave-common/aesm/aesm_service &

```
cd ~/sgx
make
cd ~/sgx/app
cp libEnclave_u.a /usr/local/lib
cargo build --release
cp ./target/release/tx-validation-app  ~/bin


## run the program
### enclave
docker run -ti --rm  -p 25933:25933 -v ~/chain-tx-enclave:/root/sgx -it linux  /bin/bash     
export SGX_MODE=SW  
export NETWORK_ID=ab  
export RUST_LOG=info  
cd ~/sgx/bin  
./tx-validation-app tcp://0.0.0.0:25933  

### abci
cargo run --bin chain-abci -- --host 0.0.0.0 --port 26658 --chain_id test-chain-y3m1e6-AB --genesis_app_hash FAF9E47D07382ADEC643BA24561F8E1C6D61FE575D184265C443B2637355CA25  --enclave_server tcp://127.0.0.1:25933

### tendermint  
tendermint init
tendermint genesis.json
```
{
"genesis_time": "2019-03-21T02:26:51.366017Z",
"chain_id": "test-chain-y3m1e6-AB",
  "consensus_params": {
    "block": {
      "max_bytes": "22020096",
      "max_gas": "-1",
      "time_iota_ms": "1000"
    },
    "evidence": {
      "max_age": "100000"
    },
    "validator": {
      "pub_key_types": [
        "ed25519"
      ]
    }
  },
  "validators": [
    {
      "address": "2962FC8AAE279DB2D2AB583926A89D8738EB8B28",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "DHGjayKp5xt0BBvZI0EMC6fr+OLgAsHFs+97bz7lShg="
      },
      "power": "10",
      "name": ""
    }
  ],

"app_hash": "FAF9E47D07382ADEC643BA24561F8E1C6D61FE575D184265C443B2637355CA25",
"app_state": {"distribution":{"0x0db221c4f57d5d38b968139c06e9132aaf84e8df":["2500000000000000000","ExternallyOwnedAccount"],"0x20a0bee429d6907e556205ef9d48ab6fe6a55531":["2500000000000000000","ExternallyOwnedAccount"],"0x35f517cab9a37bc31091c2f155d965af84e0bc85":["2500000000000000000","ExternallyOwnedAccount"],"0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de":["1250000000000000000","ExternallyOwnedAccount"],"0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07":["1250000000000000000","ExternallyOwnedAccount"]},"launch_incentive_from":"0x35f517cab9a37bc31091c2f155d965af84e0bc85","launch_incentive_to":"0x20a0bee429d6907e556205ef9d48ab6fe6a55531","long_term_incentive":"0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07","network_params":{"initial_fee_policy":{"constant":1001,"coefficient":1025},"required_council_node_stake":"1250000000000000000","unbonding_period":60},"council_nodes":[{"staking_account_address":"0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de","consensus_pubkey_type":"Ed25519","consensus_pubkey_b64":"EIosObgfONUsnWCBGRpFlRFq5lSxjGIChRlVrVWVkcE="}]}
}

```
tendermint node


### client rpc
cargo run --bin client-rpc -- --chain-id AB --port 3000 --storage-dir ./my --tendermint-url http://localhost:26657/

### check working
```
curl 'http://localhost:26657/abci_query?path=0x6163636f756e74&data=0x0db221c4f57d5d38b968139c06e9132aaf84e8df'
```



## other information  
github.com/crypto-com/chain/blob/master/README.md