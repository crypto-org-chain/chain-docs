# Getting Started

::: warning Caution
This page is for the development environment set up only, and it is subject to changes.

For anyone interested in joining the Crypto.com chain testnet, 
please refer to our [testnet documentation](./thaler-testnet).
:::

By following this tutorial, you can compile and run Crypto.com chain from the scratch. 

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
- wget
  ```bash
  $ brew install wget
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

## Install Programs
1. [Rust and Cargo](https://rustup.rs) ( cargo version: 1.36 onwards )
```
curl https://sh.rustup.rs -sSf | sh
```
2. [Tendermint](https://docs.tendermint.com/master/introduction/install.html#from-binary)
```
cd ~/bin  
wget https://github.com/tendermint/tendermint/releases/download/v0.32.1/tendermint_v0.32.1_linux_amd64.zip
unzip ./tendermint_v0.32.1_linux_amd64.zip
```

## Setup path
1. Make a working folder, or you can use other folder, too.
```
mkdir ~/bin  
```
1. Edit path environment variable
```
cd ~   
vi .profile    
```
modify like this
```
export PATH="$HOME/.cargo/bin:$PATH"
export PATH=$HOME/bin:$PATH
```


## Compile chain
1. change folder    
```
cd ~
```
2. Clone the `crypto-com/chain` repository 
```
git clone https://github.com/crypto-com/chain.git
```
3. Modify rust compile flag
```
vi ~/.cargo/config
```
By adding the following rust flag:
```
[build]
rustflags = ["-Ctarget-feature=+aes,+ssse3"]
```
4. Now, change to working folder and begin to compile the binaries
```
cd ~/chain
cargo build --release 
```

5. Copy binaries to the working folder
```
cp ./target/release/* ~/bin
```
6. Congratulations , now all chain programs are ready


## Intialize chain
1. Prepare files and go to working folder
```
cd ~/bin
```

2. File are displayed as follows:
```
enclave.signed.so
tx-validation-app
tendermint
chain-abci
```


3. Run dev-utils init
```
./dev-utils init
```

4. Enter "cleakdisk" two times to remove the block date which includes `.cro_storage` and `.storage`

```
** DANGER **
will remove all storages including wallets and blocks please type cleardisk=
```
The current tendermint genesis info should be displayed.
:::tip NOTE
If you have come across the error message of *"Unable to read tendermint initial config (genesis)"*, It means that your tendermint is not yet initialized, thus the genesis file is not found. 
:::


   
5. You can now enter the [chain ID](./chain-id-and-network-id.md) to specify the chain. Note that, the chain ID must begin with `main`, `test` or `dev`, and the last two digis must be a hex string. For example, we can choose `dev-crypto-42` as our chain-ID: 
```
new chain id( main-ab )=dev-crypto-42
```

:::tip
In order to distinguish different types of blockchain, it is suggested to use `dev` for *local development*; `test` for *testnet* and `main` for *mainnet*. 
:::

6. Name and choose a passphrase for your new wallet (e.g."testwallet")
```
lease enter wallet name=testwallet
Enter passphrase:
```

addresses controlled by the wallet will be created:
```
Wallet created with name: testwallet
New address: 0x7d698bf1cbe49d852552dc7785aa931a3758550a
staking address=0x7d698bf1cbe49d852552dc7785aa931a3758550a
Other New address 1: 0x9f08bbf10aa5f763f1f22f998492d9187960a771
Other New address 2: 0x11b02601fabc295e3f7db50cbb7ace977d97e38b
Other New address 3: 0x3a9cbc08991db830020fcb5b27b0ecdbc42449bc
Other New address 4: 0xb5b875ecf31d824ce54426377e1c205035758351
Other New address 5: 0x6a5c5ae69efce789bcbba4b9dc932c2577b111b7
Other New address 6: 0x84ce86a3e99c76a7b92ed5c5e0f487f2dfa1adc1
```

8. Customize the distribute amount: A total amount of `100000000000` should be distributed (including the [reward pool](./staking#rewards) allocation). 
```
maximum coin to distribute = 100000000000.00000000
wallet 1(0x9f08bbf10aa5f763f1f22f998492d9187960a771) address=
wallet 1(12500000000) amount=
wallet 2(0x11b02601fabc295e3f7db50cbb7ace977d97e38b) address=
wallet 2(12500000000) amount=
wallet 3(0x3a9cbc08991db830020fcb5b27b0ecdbc42449bc) address=
wallet 3(12500000000) amount=
wallet 4(0xb5b875ecf31d824ce54426377e1c205035758351) address=
wallet 4(12500000000) amount=
wallet 5(0x6a5c5ae69efce789bcbba4b9dc932c2577b111b7) address=
wallet 5(12500000000) amount=
```

9. Enter the genesis time, it should end with "Z"    
 ```
 genesis_time( 2019-03-21T02:26:51.366017Z )=
 ```

10. The tendermint genesis file is now ready

```
ls ~/.tendermint/config/genesis.json
```

### Launch chain
1. Go to working folder and launch `dev-utils` by 
```
cd ~/bin
./dev-utils run
```

2. You should be able to see the blocks are being generated, here is an example of the launch result:
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

2. go to working folder
```
cd ~/bin
```

3. locate Procfile
```
enclave: ./tx-validation-app tcp://0.0.0.0:25933
abci: ./chain-abci --host 0.0.0.0 --port 26658 --chain_id main-ab  --genesis_app_hash F70EA237FAD1634215E55E63C9A46F0AD69DB9899DAA6FDCB17011827699B537     --enclave_server tcp://127.0.0.1:25933
tendermint: ./tendermint node
```

```
overmind s
```

4. overmind run
```
ystem      | Tmux socket name: overmind-bin-iDsgFKf6uZBYY3GxdlPdzp
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
