# Send Your First Transaction

 Before doing any transaction, It is noted that, the genesis fund is **staked** at the beginning. To move funds freely around, we first have to withdraw it to UTXO:

- Create an address in type `Transfer` to receive funds by:

  ```bash
  $ ./target/debug/client-cli address new --name Default --type Transfer
  Enter passphrase:
  New address: dcro1pe7qg5gshrdl99m9q3ecpzvfr8zuk4h5qqgjyv6y24n80zye42as88x8tg
  ```

- Withdrawal the bonded funds.

  **Staking address**: Previously [generated address](https://crypto-com.github.io/getting-started/local_full_node_development.html#step-1-generate-genesis) in your wallet to receive genesis funds

  **Transfer address**: Wallet Transfer address we just generated

  ```bash
  $ ./target/debug/client-cli transaction new --chain-id AB --name Default --type Withdraw
  Enter passphrase:
  Enter staking address: 0xbdb46d64ed9da69093490a578158b1a20d96370b
  Enter transfer address: dcro1pe7qg5gshrdl99m9q3ecpzvfr8zuk4h5qqgjyv6y24n80zye42as88x8tg
  ```

Transfer CRO to another address:

- Once we have withdrawn the genesis funds, we can run the subcommand `sync` to sync our wallet:

    ```bash
    ./target/debug/client-cli sync --name Default
    ```

- Then we can show the current (transferable) balance by:

    ```bash
    $ ./target/debug/client-cli balance --name Default
    Enter passphrase:
    Wallet balance: 24999999999.99999774
    ```

- Lastly, we can transfer our tokens to another address by:

    ```bash
    $./target/debug/client-cli transaction new  --chain-id AB --name Default --type Transfer
    Enter passphrase:
    Enter output address: <Receiver_Address>
    Enter amount: <Transfer_Amount>
    ```

## Types of transaction and address

There are various kinds of transactions between different types of addresses. For example, we can check the bonded and unbounded balances of a *Staking* address by:

```bash
$./target/debug/client-cli state --name Default --address 0xbdb46d64ed9da69093490a578158b1a20d96370b
Enter passphrase:
+---------------+----------------------------+
| Nonce         | <Number_of_Transactions>   |
| Bonded        |      <Bonded_Balance>      |
| Unbonded      |     <Unbonded_Balance>     |
| Unbonded From |      <Unbonded_Time>       |
+---------------+----------------------------+
```

The following is the transaction flow between *Staking* address A, *Transfer* addresses B and C with transaction types `Deposit`, `Withdraw`, `Deposit`, `Unbond` and `Transfer`:

```bash
│  Staking    │       │     Transfer     │                │     Transfer     │
│ address A   │       │    address  B    │                │    address  C    │
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
+-------------+
│             │    Withdraw
│  Unbonded   +----------------+
│   Balance   │                │
│             │                │
+------+------+                v
       ^              +--------+--------+                 +-----------------+
       │              │   Transferable  │     Transfer    │   Transferable  │
Unbond │              │                 + <=============> +                 │
       │              │     Balance     │                 │     Balance     │
       │              +--------+--------+                 +-----------------+
+------+------+                │
│             │                │
│   Bonded    │                │
│   Balance   + <--------------+
│             │    Deposit
+-------------+

```