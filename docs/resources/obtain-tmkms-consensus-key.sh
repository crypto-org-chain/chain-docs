#!/usr/bin/env bash

if ! [ -x "$(command -v tmkms)" ]; then
  echo 'Error: tmkms is not installed.' >&2
  exit 1
fi

SIGN_KEY_PATH=./signing.key
if [[ ! -f "$SIGN_KEY_PATH" ]] ; then
    read -p 'What is the PATH of the unencrypted signing key?: ' SIGN_KEY_PATH
fi

tmkms start -c <(cat << EOF
[[chain]]
id = "id"
key_format = { type = "bech32", account_key_prefix = "tcropub", consensus_key_prefix = "tcrocnclconspub" }
state_file = "/tmp/priv_validator_state.json"
[[validator]]
addr = "unix:///tmp/validator.socket"
chain_id = "id"
protocol_version = "v0.34"
reconnect = true
[[providers.softsign]]
chain_ids = ["id"]
key_type = "consensus"
path = "${SIGN_KEY_PATH}"
EOF
) | grep "consensus Ed25519 key" | awk '{print $NF}' &
sleep 1
kill $(jobs -p)
exit 0
