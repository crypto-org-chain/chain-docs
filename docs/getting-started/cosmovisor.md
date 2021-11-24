# Running "Canis Major" network upgrade with cosmovisor

:::warning

It is recommended that cosmovisor is better to be used on full nodes rather than validators as currently there's a potential race condition: [cosmos/cosmos-sdk#9384](https://github.com/cosmos/cosmos-sdk/pull/9384)

:::

## Step 0 - Install cosmosviosr

One can follow this [link](https://docs.cosmos.network/master/run-node/cosmovisor.html#installation) to install.

Alternatively, run the below commands instead
```
$ git clone https://github.com/cosmos/cosmos-sdk.git
$ cd cosmos-sdk/cosmovisor
$ make cosmovisor
```

## Step 1 - Set up Environment Variables

Set your [Environment Variables](https://docs.cosmos.network/master/run-node/cosmovisor.html#command-line-arguments-and-environment-variables) for cosmovisor to run

```
export DAEMON_NAME=chain-maind
export DAEMON_HOME=/home/ubuntu/.chain-maind
export DAEMON_RESTART_AFTER_UPGRADE=true
export DAEMON_ALLOW_DOWNLOAD_BINARIES=true
export DAEMON_LOG_BUFFER_SIZE=512
```


### Step 1.1 - Create cosmovisor folder structure

One can follow this [folder structure](https://docs.cosmos.network/master/run-node/cosmovisor.html#data-folder-layout)
```
.chain-maind/
├── config
│ 
├── cosmovisor
│   ├── current -> genesis or upgrades/v3.3.0
│   ├── genesis
│   │   └── bin
│   │       └── chain-maind
│   └── upgrades
│       └── v3.3.0
│           └── bin
│               └── chain-maind
└── data
```

For `.chain-maind/cosmovisor/genesis/bin/chain-maind`, it is the binary before the upgrade proceeds. In our case of the "DRACO II" upgrade, it should be chain-maind with version `2.*`. Kindly have this binary ready before running cosmovisor.

## Step 2. - Run everything

- Start `cosmovisor`, e.g.:

```bash
$ ./cosmovisor start
```

Since we enable `DAEMON_ALLOW_DOWNLOAD_BINARIES=true`, cosmovisor will automatically download binary with `3.3.1` in `./cosmovisor/upgrades/v2.0.0/bin/chain-maind` and update `./cosmovisor/current` directory symlink to `upgrades/v3.3.0` instead when proposed upgrade log is found. cosmovisor will create `./cosmovisor/upgrades/v3.3.0/bin/chain-maind` for you.

:::warning Important:
If one doesn't want to enable `DAEMON_ALLOW_DOWNLOAD_BINARIES`, one should prepare `./cosmovisor/upgrades/v3.3.0/bin/chain-maind` manually before upgrade time.
[Linux](https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.0/chain-main_3.3.0_Linux_x86_64.tar.gz), [Mac](https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.0/chain-main_3.3.0_Darwin_x86_64.tar.gz) and [Windows](https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.0/chain-main_3.3.0_Windows_x86_64.zip) are also available. 
:::

:::tip Tip:
Example of running cosmovisor with systemd
```toml
# /lib/systemd/system/chain-maind.service
[Unit]
Description=Chain-maind
ConditionPathExists=/chain/bin/cosmovisor
After=network.target

[Service]
Type=simple
User=crypto
Group=crypto
LimitNOFILE=12288

Restart=always
RestartSec=10

Environment="DAEMON_NAME=chain-maind"
Environment="DAEMON_HOME=/chain/.chain-maind"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"
Environment="DAEMON_LOG_BUFFER_SIZE=512"

WorkingDirectory=/chain/bin
ExecStart=/chain/bin/cosmovisor start --home /chain/.chain-maind

# make sure log directory exists and owned by syslog
PermissionsStartOnly=true

StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=chain-maind

TimeoutStartSec=3min

[Install]
WantedBy=multi-user.target
```
:::

