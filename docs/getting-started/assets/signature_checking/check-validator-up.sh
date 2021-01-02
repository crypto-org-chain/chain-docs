#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
RET_VALUE=0
TENDERMINT_URL=127.0.0.1:26657
echoerr() { echo "$@" 1>&2; exit 1; }
check_curl() {
    set +e
    command -v curl > /dev/null
    RET_VALUE=$?
    set -e
}
check_jq() {
    set +e
    command -v jq > /dev/null
    RET_VALUE=$?
    set -e
}
check_chain_maind() {
    set +e
    command -v chain-maind > /dev/null
    RET_VALUE=$?
    set -e
}
helpFunction() {
    cat << EOF
Flags:
    --help                help for the script
    --tendermint-url      tendermint rpc interface for this chain (default "http://127.0.0.1:26657" if omitted)
    --pubkey              tendermint Ed25519 PubKey; can be found in ".chain-maind/config/priv_validator_key.json"
    --bechpubkey          bech32 consensus PubKey; converted to tendermint Ed25519 PubKey automatically; useful for node using tmkms.
EOF
    exit 1 # Exit script after printing help
}
check_curl
if [[ "${RET_VALUE}" != 0 ]]; then
    echoerr "curl is not installed. Please install it first."
fi
check_jq
if [[ "${RET_VALUE}" != 0 ]]; then
    echoerr "jq is not installed. Please install it first."
fi
while [[ $# > 0 ]]; do
    case "$1" in
        --tendermint-url)
            shift 1
            TENDERMINT_URL="$1"
            shift 1
        ;;
        --pubkey)
            shift 1
            PUBKEY="$1"
            shift 1
        ;;
        --bechpubkey)
            shift 1
            BECH_PUBKEY="$1"
            shift 1
        ;;
        --help)
            helpFunction
        ;;
        *)
            echo "Unknown argument: $1"
            helpFunction
        ;;
    esac
done
set +u
if [[ ! -z "${BECH_PUBKEY}" ]]; then
    check_chain_maind
    if [[ "${RET_VALUE}" != 0 ]]; then
        echoerr "chain-maind is not installed or not in PATH. Please install it first or check chain-maind is added to PATH for pubkey key conversion."
    fi
    PUBKEY=$(chain-maind debug pubkey ${BECH_PUBKEY} 2>&1 | grep "tendermint/PubKeyEd25519" | cut -d : -f2- | jq -r .value || echoerr "Decode Pubkey Failed ❌")
fi
if [[ -z "${PUBKEY}" ]]; then
	echoerr "Missing --pubkey {base64 encoded Tendermint public key}"
fi
set -u
NUM=1
while true; do
    ERR=$(curl -sSL "${TENDERMINT_URL}/validators?per_page=100&page=${NUM}" | jq -r .error)
    if [[ $ERR == "null" ]]; then 
        ADDRESS=$(curl --max-time 10 -sSL "${TENDERMINT_URL}/validators?per_page=100&page=${NUM}" | jq -r --arg PUBKEY "${PUBKEY}" '.result.validators[] | select(.pub_key.value == $PUBKEY) | .address')
        if [[ ! -z "${ADDRESS}" ]]; then
            break;
        fi
    else 
        break;
    fi;
    ((NUM=NUM+1))
done

if [[ -z "${ADDRESS}" ]]; then
	echoerr "The validator is not active ❌"
else
	echo "The validator is in the active validator set under the address ${ADDRESS}"
fi
HEIGHT=$(curl --max-time 10 -sSL "${TENDERMINT_URL}/block" | jq -r --arg ADDRESS "${ADDRESS}" '.result as $result | .result.block.last_commit.signatures[] | select(.validator_address | . != null and . != "" and . == $ADDRESS) | $result.block.header.height')
if [[ -z "${HEIGHT}" ]]; then
	echoerr "Not Signing ❌"
else
	echo "The validator is signing @ Block#${HEIGHT} 👍"
fi