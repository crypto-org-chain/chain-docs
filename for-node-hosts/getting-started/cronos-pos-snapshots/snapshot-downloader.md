# Snapshot Downloader

The Snapshot Downloader is a Rust-based automation tool that downloads a blockchain binary, snapshot (single or multi-part), and address book, then automatically extracts the binary and snapshot, initializes the node, merges custom settings into <mark style="color:orange;">`app.toml`</mark> and <mark style="color:orange;">`config.toml`</mark>, and starts the chain. \
It also provides lifecycle hooks to execute commands at different stages (post-download, post-extraction, post-start).

This guide walks you through the installation, setup, and configuration of the Snapshot Downloader for running a Cronos node. Follow the steps in order, adapting to your hardware setup (e.g. number of disks).

### Environment Setup&#x20;

The tool works best on Linux with Btrfs, as the tool leverages Btrfs subvolumes for efficient snapshot handling. On Linux, users can manually create snapshots of subvolumes and roll back to previous states if needed.

On macOS and Windows, the downloader still supports snapshot download, extraction, and node start, but Btrfs-specific snapshot and rollback features are unavailable.&#x20;

**Note:** \
On Windows, it requires a Unix-compatible shell (e.g., Git Bash) to run the tool.

<details>

<summary><strong>Linux Only – Btrfs Setup</strong></summary>

#### Install `btrfs-progs`

```sh
sudo apt install -y btrfs-progs
```

#### Format and Mount Disk(s)

Choose one of the below according to the number of additional disk(s) mounted.

**Format and Mount 2 Disks**

```sh
sudo parted /dev/nvme0n2 -- mklabel gpt
sudo parted /dev/nvme0n2 -- mkpart downloads btrfs 0% 100%
sudo mkfs.btrfs /dev/nvme0n2p1
sudo parted /dev/nvme0n3 -- mklabel gpt
sudo parted /dev/nvme0n3 -- mkpart chain-data btrfs 0% 100%
sudo mkfs.btrfs /dev/nvme0n3p1
mkdir -p ~/test
sudo mount /dev/nvme0n3p1 ~/test
sudo btrfs sub create ~/test/data
sudo btrfs sub create ~/test/data/.snapshots
```

```sh
mkdir -p ~/.snapshot-downloader/downloads
mkdir -p ~/.snapshot-downloader/workspace/home/data
```

```sh
sudo mount /dev/nvme0n2p1 ~/.snapshot-downloader/downloads
sudo mount -osubvol=data /dev/nvme0n3p1 ~/.snapshot-downloader/workspace/home/data
sudo chown -R $USER ~/.snapshot-downloader/downloads
sudo chown -R 1001:1002 ~/.snapshot-downloader/workspace/home/data
```

**Format and Mount 1 Disk**

```sh
sudo parted /dev/nvme0n2 -- mklabel gpt
sudo parted /dev/nvme0n2 -- mkpart downloads btrfs 0% 100%
sudo mkfs.btrfs /dev/nvme0n2p1
```

```sh
mkdir -p ~/.snapshot-downloader
```

```sh
sudo mount /dev/nvme0n2p1 ~/.snapshot-downloader
sudo chown -R $USER ~/.snapshot-downloader
```

#### Resize Disk (Optional)

```sh
sudo growpart /dev/nvme0n3 1
sudo btrfs filesystem resize max ~/.snapshot-downloader/workspace/home/data
```

</details>

### Dependencies Installation

Install Rust using the official installer.

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
. "$HOME/.cargo/env"
```

Install other dependencies needed for building Rust projects.

```sh
sudo apt install -y gcc libssl-dev pkg-config
```

### Build Snapshot Downloader

```sh
git clone https://github.com/whs-dot-hk/snapshot-downloader2.git
cd snapshot-downloader2
cargo build
```

### Configure Snapshot Downloader `config.yaml`

The tool supports single-file or multi-part snapshots, custom lifecycle hooks, and TOML overrides for node configuration.

Below is the example of `snapshot-downloader2/config.yaml` for Cronos POS. Update URLs, chain IDs, and settings as needed for the latest snapshots and binaries.

#### Cronos POS Mainnet Example&#x20;

This example uses a single file snapshot for the Cronos EVM chain.

```sh
# Snapshot Downloader Configuration

# URL for the snapshot to download (for single file snapshots)
snapshot_url: "https://snapshots.publicnode.com/cronos-pos-pruned-24836847-24836857.tar.lz4"

# URLs for multi-part snapshots (alternative to snapshot_url)
# If snapshot_urls is provided, it will be used instead of snapshot_url
# snapshot_urls:
#   - "https://example.com/cosmos-snapshot.part001.tar.gz"
#   - "https://example.com/cosmos-snapshot.part002.tar.gz"
#   - "https://example.com/cosmos-snapshot.part003.tar.gz"

# Final filename for multi-part snapshots (REQUIRED when using snapshot_urls)
# This specifies what the final concatenated file should be called
# snapshot_filename: "cosmos-snapshot.tar.gz"

# URL for the binary to download
binary_url: "https://github.com/crypto-org-chain/chain-main/releases/download/v6.0.0-2/chain-main_6.0.0-2_Linux_arm64.tar.gz"

# Relative path to the binary within the workspace directory
# This is used to locate the binary after extraction
binary_relative_path: "bin/chain-maind"

# Chain ID for the Cosmos network
chain_id: "crypto-org-chain-mainnet-1"

# Moniker (node name) to use when initializing
moniker: "my-cosmos-node"

# Custom home directory for the chain (optional)
# If not specified, defaults to ~/.snapshot-downloader/workspace/home
# chain_home_dir: "/mnt/data/cosmos-home"

# URL for the addrbook.json file (optional)
# If specified, this file will be downloaded and placed in the config directory
# addrbook_url: "https://example.com/addrbook.json"

# Command to execute after snapshot extraction (optional)
# This will only run if a snapshot is successfully extracted
post_snapshot_command: "echo 'Snapshot extraction completed'"

# Command to execute after cosmos node starts and specific pattern is detected (optional)
# This will run after the node starts and the post_start_pattern is found in the output
# post_start_command: "echo 'Node started and pattern detected'"

# Pattern to search for in cosmos node output (optional)
# When this pattern is found in the node output, the post_start_command will be executed
# Can be any message you want to wait for after node startup
# post_start_pattern: "committed state"

# Whether to stop the cosmos node and exit the program after executing post_start_command (optional)
# If true, the cosmos node will be terminated and the program will exit after post_start_command completes
# stop_after_post_start: false

# Configuration overrides for app.toml
# These values will be merged with the existing app.toml file
app_yaml:
  minimum-gas-prices: "0.025basecro"
  pruning: "nothing"

# Configuration overrides for config.toml
# These values will be merged with the existing config.toml file
config_yaml:
  p2p:
    persistent_peers: "986a5ab3f6c397de5984c6b5e5bb87997dcbc4cf@3.0.132.213:26656"
```

### Running the Tool

Once configured, run the tool with:

```sh
cargo run
```

Monitor the output for progress. The tool will handle downloads, extractions, initialization, and startup. Use lifecycle hooks ( `post_snapshot_download_command` `post_snapshot_extract_command` and `post_start_command` ) for custom automation.

For troubleshooting, check logs in the workspace directory or adjust retry settings in the config. Always verify snapshot and binary URLs from official sources for the latest versions.
