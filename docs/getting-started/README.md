# Getting Started

This is the beginner's tutorial to boot-strap Chain.  
By following this tutorial, you can compile and run cro-chain from the scratch.  

## Pre-requisites

Prepare ubuntu 18.0.x and Intel CPU

```bash
~/bin
```

bin folder is the main folder for binaries

- [Homebrew](https://brew.sh/)
- [Docker](https://docs.docker.com/install/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [cmake](https://cmake.org/install/)
  ```bash
  $ brew install cmake
  ```
- [ZeroMQ](https://zeromq.org/download/)
  ```bash
  $ brew install zmq
  ```
- pkg-config
  ```bash
  $ brew install pkg-config
  ```

## How it works

chain-tx-enclave (use intel sgx) -> working as dockerchain-abci (connects to enclave) tendermint (connects to chain-abci)

## Compile enclave

1. git clone [chain-tx-enclave](https://github.com/crypto-com/chain-tx-enclave), activate docker

```
cd ~  
git clone https://github.com/crypto-com/chain-tx-enclave.git
cd chain-tx-enclave  
docker build -t chain-tx .   
docker run -ti --rm -p 25933:25933 -v ~/chain-tx-enclave/:/root/sgx -it chain-tx /bin/bash
```

2. Inside docker, install necessary components

```
apt update      
apt install rsync curl git gcc unzip  libzmq3-dev  
apt install libsnappy-dev wget vim pkg-config
```

3. Install sdk. You can install intel-sgx-sdk, and compile the application.

```
mkdir ~/bin
cd sgx
export SGX_MODE=SW  
export NETWORK_ID=ab  
make
```

4. Build sgx application

```
cd ~/sgx/app  
cargo build  
```

For hw

```
docker run -ti --device /dev/isgx -v ~/chain-tx-enclave/:/root/sgx -it chain-tx /bin/bash

root@docker:/# LD_LIBRARY_PATH=/opt/intel/libsgx-enclave-common/aesm /opt/intel/libsgx-enclave-common/aesm/aesm_service &
```

5. Copy enclave lib file to the system, and `cargo build` it. If build fails, please copy libEnclave_u.a manually.

```
cd ~/sgx
make
cd ~/sgx/app
cp libEnclave_u.a /usr/local/lib
```

6. Compile the release binary

```
cargo build --release
cp ./target/release/tx-validation-app  ~/bin
cd ~/sgx
make
cp ~/sgx/bin/* ~/bin 
```
Congratulations! chain-tx-enclave is now ready to go!   
now you can conitnue inside docker and copy necessary files for next step .
the files are
```
tx-validation-app  
enclave.signed.so
```

## Setup path
1. make a working folder  
you can use other folder,too.
```
mkdir ~/bin  
```
1. edit path environment variable
```
cd ~   
vi .profile    
```
modify like this
```
export PATH="$HOME/.cargo/bin:$PATH"
export PATH=$HOME/bin:$PATH
```

## Install Programs
1. [Rust and Cargo](https://rustup.rs) ( cargo version: 1.36 onwards )
```
curl https://sh.rustup.rs -sSf | sh
```
2. [Tendermint](https://docs.tendermint.com/master/introduction/install.html#from-binary)
```
cd ~/bin  
wget https://github.com/tendermint/tendermint/releases/download/v0.32.1/tendermint_v0.32.1_linux_amd64.zipunzip ./tendermint_v0.32.1_linux_amd64.zip
```

## Compile chain
1. change folder    
```
cd ~
```
2. download source
```
git clone https://github.com/crypto-com/chain.git
```
3. modify rust compile flag
```
vi ~/.cargo/config
```
4. add rust flag like this  
```
[build]
rustflags = ["-Ctarget-feature=+aes,+ssse3"]
```
5. change to workin folder
```
cd ~/chain
```
6. initiate compiling
```
cargo build --release 
```
7. copy binaries to working folder
```
cp ./target/release/* ~/bin
```
8. congratulations , now all chain programs are ready


## Intialize chain
1. prepare files and go to working folder
```
cd ~/bin
```

2. file are displayed like these
```
enclave.signed.so
tx-validation-app
tendermint
chain-abci

```

3. run dev-utils init
```
./dev-utils init
```

4. clear disk
.cro_storage, .storage will be removed.  
enter cleakdisk two times
```
** DANGER **
will remove all storages including wallets and blocks please type cleardisk=
```

5. current tendermint genesis info displayed
```
current tendermint genesis={"app_hash":"4C33757A03DD809904331CBB8766FDEA898893D112D2EC4238675AD345E74900","app_state":{"council_nodes":[{"consensus_pubkey_b64":"ctjB+hMHPokJPmgVNqonwHgDd8M1xw0q4/abG40zXzk=","consensus_pubkey_type":"Ed25519","staking_account_address":"0xf7e026fb3bdc11995cfd271a8d85fad91532e088"}],"distribution":{"0x9b4597438fc9e72617232a7aed37567405cb80dd":["2500000000000000000","ExternallyOwnedAccount"],"0xc55139f8d416511020293dd3b121ee8beb3bd469":["2500000000000000000","ExternallyOwnedAccount"],"0xf75dc04a0a77c8178a6880c44c6d8a8ffb436093":["3750000000000000000","ExternallyOwnedAccount"],"0xf7e026fb3bdc11995cfd271a8d85fad91532e088":["1250000000000000000","ExternallyOwnedAccount"]},"launch_incentive_from":"0xc55139f8d416511020293dd3b121ee8beb3bd469","launch_incentive_to":"0x9b4597438fc9e72617232a7aed37567405cb80dd","long_term_incentive":"0xf75dc04a0a77c8178a6880c44c6d8a8ffb436093","network_params":{"initial_fee_policy":{"coefficient":1025,"constant":1001},"required_council_node_stake":"1250000000000000000","unbonding_period":60}},"chain_id":"main-ab","consensus_params":{"block":{"max_bytes":"22020096","max_gas":"-1","time_iota_ms":"1000"},"evidence":{"max_age":"100000"},"validator":{"pub_key_types":["ed25519"]}},"genesis_time":"2019-03-21T02:26:51.366017Z","validators":[{"address":"F2F46C8B8241F7364A727CE85DBACBBD0F00F43D","name":"","power":"10","pub_key":{"type":"tendermint/PubKeyEd25519","value":"ctjB+hMHPokJPmgVNqonwHgDd8M1xw0q4/abG40zXzk="}}]}
```
   
6. enter chain-id
it should be over 6 characters.   
last two digis should be hexa of 1 byte.  
```
new chain id( main-ab )=
```

7. create wallet    

enter wallet name    
```
lease enter wallet name=a
Enter passphrase:
```
wallet will be created
```
New address: 0xf3058b4714a914f58abf00fa5d0d6b82e0876f81
staking address=0xf3058b4714a914f58abf00fa5d0d6b82e0876f81
maximum coin to distribute=100000000000.00000000
```
8. distribute amount
100000000000.00000000 should be distributed  
unit is "cro"  
```
wallet 1(0xc55139f8d416511020293dd3b121ee8beb3bd469) address=
wallet 1(25000000000) amount=
wallet 2(0x9b4597438fc9e72617232a7aed37567405cb80dd) address=
wallet 2(25000000000) amount=
wallet 3(0xf75dc04a0a77c8178a6880c44c6d8a8ffb436093) address=
wallet 3(37500000000.00000000) amount=
```

9. enter genesis time   
 it should end with "Z"    
 ```
 genesis_time( 2019-03-21T02:26:51.366017Z )=
 ```
10. enter incentives
```
launch_incentive_from(0xc55139f8d416511020293dd3b121ee8beb3bd469)=
launch_incentive_to(0x9b4597438fc9e72617232a7aed37567405cb80dd)=
long_term_incentive(0xf75dc04a0a77c8178a6880c44c6d8a8ffb436093)=
```
11. app_hash, app_state will be generated
```
"app_hash": "DA9E22D89B9D44C5EB7D9E45113BD9FA8FE57A1B959FA72C8C701957AEB81B69",
"app_state": {"distribution":{"0x12a16b806648fd6f75317f44f77ffb1ba68a3318":["1250000000000000000
","ExternallyOwnedAccount"],"0x9b4597438fc9e72617232a7aed37567405cb80dd":["2500000000000000000",
"ExternallyOwnedAccount"],"0xc55139f8d416511020293dd3b121ee8beb3bd469":["2500000000000000000","E
xternallyOwnedAccount"],"0xf75dc04a0a77c8178a6880c44c6d8a8ffb436093":["3750000000000000000","Ext
ernallyOwnedAccount"]},"launch_incentive_from":"0xc55139f8d416511020293dd3b121ee8beb3bd469","lau
nch_incentive_to":"0x9b4597438fc9e72617232a7aed37567405cb80dd","long_term_incentive":"0xf75dc04a
0a77c8178a6880c44c6d8a8ffb436093","network_params":{"initial_fee_policy":{"constant":1001,"coeff
icient":1025},"required_council_node_stake":"1250000000000000000","unbonding_period":60},"counci
l_nodes":[{"staking_account_address":"0x12a16b806648fd6f75317f44f77ffb1ba68a3318","consensus_pub
key_type":"Ed25519","consensus_pubkey_b64":"ctjB+hMHPokJPmgVNqonwHgDd8M1xw0q4/abG40zXzk="}]}
```
now tendermint genesis file is ready.
```
ls ~/.tendermint/config/genesis.json
```

### Launch chain
1. go to working folder
```
cd ~/bin
```

2. launch
run with thise command
```
./dev-utils run
```

3. launch result
```
wait for booting abci
./tendermint launched!
./tendermint run ok
leejw51@8ca083141f69:~/bin$ InitConfig={"distribution":{"0x12a16b806648fd6f75317f44f77ffb1ba68a3
318":["1250000000000000000","ExternallyOwnedAccount"],"0x9b4597438fc9e72617232a7aed37567405cb80d
d":["2500000000000000000","ExternallyOwnedAccount"],"0xc55139f8d416511020293dd3b121ee8beb3bd469"
:["2500000000000000000","ExternallyOwnedAccount"],"0xf75dc04a0a77c8178a6880c44c6d8a8ffb436093":[
"3750000000000000000","ExternallyOwnedAccount"]},"launch_incentive_from":"0xc55139f8d41651102029
3dd3b121ee8beb3bd469","launch_incentive_to":"0x9b4597438fc9e72617232a7aed37567405cb80dd","long_t
erm_incentive":"0xf75dc04a0a77c8178a6880c44c6d8a8ffb436093","network_params":{"initial_fee_polic
y":{"constant":1001,"coefficient":1025},"required_council_node_stake":"1250000000000000000","unb
onding_period":60},"council_nodes":[{"staking_account_address":"0x12a16b806648fd6f75317f44f77ffb
1ba68a3318","consensus_pubkey_type":"Ed25519","consensus_pubkey_b64":"ctjB+hMHPokJPmgVNqonwHgDd8
M1xw0q4/abG40zXzk="}]}
I[2019-08-08|07:00:47.589] Version info                                 module=main soft[51/366]
2.2 block=10 p2p=7
I[2019-08-08|07:00:47.598] Starting Node                                module=main impl=Node
I[2019-08-08|07:00:47.603] Started node                                 module=main nodeInfo="{P
rotocolVersion:{P2P:7 Block:10 App:0} ID_:19fc54859d9442e82769373958b6adddb5851350 ListenAddr:tc
p://0.0.0.0:26656 Network:main-ab Version:0.32.2 Channels:4020212223303800 Moniker:e9c1451c90b6
Other:{TxIndex:on RPCAddress:tcp://127.0.0.1:26657}}"
I[2019-08-08|07:00:48.672] Executed block                               module=state height=1 va
lidTxs=0 invalidTxs=0
I[2019-08-08|07:00:48.723] Committed state                              module=state height=1 tx
s=0 appHash=DA9E22D89B9D44C5EB7D9E45113BD9FA8FE57A1B959FA72C8C701957AEB81B69
I[2019-08-08|07:00:49.692] Executed block                               module=state height=2 va
lidTxs=0 invalidTxs=0
I[2019-08-08|07:00:49.741] Committed state                              module=state height=2 tx
s=0 appHash=DA9E22D89B9D44C5EB7D9E45113BD9FA8FE57A1B959FA72C8C701957AEB81B69
```

## Query chain
1. copy staking address with above
```
curl 'http://localhost:26657/abci_query?path=0x6163636f756e74&data=0x4d886d9bc5aa6ba6f7bb9fdd99fb4bddf1d0c2a5'
```
it will be displayed like this
```
{
  "jsonrpc": "2.0",
  "id": "",
  "result": {
    "response": {
      "value": "AAAAAAAAAAAAAD2RYORYEQAAAAAAAAAAa/aSXAAAAAAATYhtm8Wqa6b3u5/dmftL3fHQwqU="
    }
  }
}
```
2. congratulations  
now the chain is fully working now.  

## Launch with overmind  
you can run the chain with process manager "overmind" simply.
1. install overmind
you can download here.  
download and locate in your path.   
```
wget https://github.com/DarthSim/overmind/releases/download/v2.0.3/overmind-v2.0.3-linux-arm64.gz
```

1. go to working folder
```
cd ~/bin
```

3. locate Procfile
```
enclave: ./tx-validation-app tcp://0.0.0.0:25933
abci: ./chain-abci --host 0.0.0.0 --port 26658 --chain_id main-ab  --genesis_app_hash F70EA237FAD1634215E55E63C9A46F0AD69DB9899DAA6FDCB17011827699B537     --enclave_server tcp://127.0.0.1:25933
tendermint: ./tendermint node
```

4. run overmind
```
overmind s
```

5. overmind run
```
ystem     | Tmux socket name: overmind-bin-iDsgFKf6uZBYY3GxdlPdzp
system     | Tmux session ID: bin
system     | Listening at /home/leejw51/bin/.overmind.sock
enclave    | Started with pid 787...
tendermint | Started with pid 785...
abci       | Started with pid 782...
tendermint | E[2019-08-08|07:08:11.401] abci.socketClient failed to connect to tcp://127.0.0.1:26658.  Retrying... module=abci-client connection=query err="dial tcp 127.0.0.1:26658: connect: connection refused"
^Cenclave    | Interrupting...
abci       | Interrupting...
tendermint | Interrupting...
enclave    | Exited
tendermint | Exited
abci       | Exited
```
