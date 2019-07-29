# Notes on Production Deployment

* See [Tendermint notes on running in production](https://tendermint.com/docs/tendermint-core/running-in-production.html#database)
* Validators shouldn't be exposed directly to the internet
* RPC shouldn't be exposed directly to the internet (as it currently doesn't support rate-limiting, authentication...)
* Validator block signing should be via [kms](https://github.com/tendermint/kms#tendermint-kms-)