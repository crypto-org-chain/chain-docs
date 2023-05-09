# Croeseid Testnet: Running Nodes With Nix

## Pre-requisites

Nix supports both Linux and Mac, for Windows user, you can follow the [manual instructions](croeseid-testnet.md).

## Install nix

Follow official instructions to install nix: https://nixos.org/download.html

> for Mac user, you might need to consult the [nix manual for macos installation](https://nixos.org/manual/nix/stable/#sect-macos-installation), simply put, if you have a recent Mac, you can install nix with `sh <(curl -L https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store-volume`

Install cachix and enable crypto-com binary cache:

```shell
$ nix-env -iA cachix -f https://cachix.org/api/v1/install
$ cachix use crypto-com
```

## Install chain utils for testnet

```shell
$ nix-env -iA chain-utils-testnet -f https://github.com/crypto-org-chain/chain-main/archive/v3.1.0-croeseid.tar.gz
```

After installation, you'll have these commands in your `PATH`:

* `chain-maind`, the chain binary for testnet
* `init-node`, the script to initialize the chain data directory with state sync enabled
* `print-systemd-config`, print a systemd config file to stdout

## Initialization

```shell
$ export CHAINHOME=/path/to/data # optional, default to $HOME/.chain-maind
$ MONIKER=testnode init-node
```

Change the value of `MONIKER` to your node's name.

state sync is initialized and enabled by `init-node` automatically, if you don't want that to happen, you can disable it by edit `$CHAINHOME/config/config.toml` manually, set `enable` field to `false` under section `[statesync]` like this:

```
[statesync]
enable = false
```

## Run

You can now run the chain node manually:

```shell
$ chain-maind start --home $CHAINHOME
```

Or setup systemd service on linux:

```
$ print-systemd-config | sudo tee /etc/systemd/system/chain-maind.service
$ sudo systemctl start chain-maind
```

Please refer to [Croeseid Testnet](croeseid-testnet.md#step-3-run-everything) for instructions to issue transactions and create validator.

## Isolated installation

One of the strengths of nix package manager is you can have multiple isolated installations, it would be important when you want to manage both testnet and mainnet chains or different versions of them on a single machine.

```shell
$ nix build -f https://github.com/crypto-org-chain/chain-main/archive/v3.1.0-croeseid.tar.gz chain-utils-testnet -o testnet
$ export CHAINHOME=$PWD/testnet_data
$ MONIKER=testnode ./testnet/bin/init-node
$ ./testnet/bin/chain-maind start --home $CHAINHOME
```
