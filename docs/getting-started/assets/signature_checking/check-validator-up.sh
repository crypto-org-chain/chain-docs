#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
RET_VALUE=0
TENDERMINT_URL=127.0.0.1:26657
echoerr() { echo "$@" 1>&2; }
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
check_curl
if [[ "${RET_VALUE}" != 0 ]]; then
    echoerr "curl is not installed. Please install it first."
    exit 1
fi
check_jq
if [[ "${RET_VALUE}" != 0 ]]; then
    echoerr "jq is not installed. Please install it first."
    exit 1
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
        *)
            echoerr "Unknown argument: $1"
            exit 1
        ;;
    esac
done
set +u
if [[ -z "${PUBKEY}" ]]; then
	echoerr "Missing --pubkey {base64 encoded Tendermint public key}"
	exit 1
fi
set -u
ADDRESS=$(curl --max-time 10 -sSL "${TENDERMINT_URL}/validators?per_page=300" | jq -r --arg PUBKEY "${PUBKEY}" '.result.validators[] | select(.pub_key.value == $PUBKEY) | .address')
if [[ -z "${ADDRESS}" ]]; then
	echo "The validator is not active ❌"
	exit 1
else
	echo "The validator is in the council nodes set under the address ${ADDRESS}"
fi
HEIGHT=$(curl --max-time 10 -sSL "${TENDERMINT_URL}/block" | jq -r --arg ADDRESS "${ADDRESS}" '.result as $result | .result.block.last_commit.signatures[] | select(.validator_address | . != null and . != "" and . == $ADDRESS) | $result.block.header.height')
if [[ -z "${HEIGHT}" ]]; then
	echo "Not Signing ❌"
	exit 1
else
	echo "The validator is signing @ Block#${HEIGHT} 👍"
fi