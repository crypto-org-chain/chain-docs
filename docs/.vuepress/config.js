module.exports = {
  title: "Crypto.com Chain",
  description: "Welcome to Crypto.com Chain's documentation!",
  themeConfig: {
    navbar: true,
    logo: '/chain_doc_nav_logo.svg',
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Getting Started",
        link: "/getting-started/"
      },

      {
        text: "Croeseid Testnet",
        items: [{
            text: "Setup Tutorial",
            link: "/getting-started/croeseid-testnet"
          },
          {
            text: "Testnet Explorer",
            link: "https://chain.crypto.com/explorer"
          },
          {
            text: "Testnet Faucet",
            link: "https://chain.crypto.com/faucet"
          }
        ]
      },
      {
        text: "Wallet Management",
        items: [{
            text: "Overview",
            link: "/wallets/#client-cli"
          },
          {
            text: "chain-maind",
            link: "/wallets/client-cli.html#client-cli"
          },
          {
            text: "Client RPC",
            link: "/wallets/client-rpc.html#client-rpc"
          }
        ]
      },
      // {
      //   text: "Download",
      //   link: "https://crypto-com.github.io/Crypto.com_Chain.pdf"
      // }
    ],
    sidebar: {
      "/getting-started/": [
        "",
        "croeseid-testnet",
        "local-devnet",
//        "notes-on-production-deployment",
//        "notes-on-performance"
      ],
      "/protocol/": [
        "transaction-privacy",
        "genesis",
        "chain-id-and-network-id",
        "consensus",
        "transaction-accounting-model",
        "transaction",
        "staking",
        "reward-and-punishments",
        "serialization",
        "signature-schemes",
        "client-flow",
        "network-parameters",
        "technical-glossary"
      ],
      "/wallets/": [
        "",
        "client-cli",
        "sample-chain-wallet",
        "client-rpc"
      ],
      "/api/" : "auto"
    },
    displayAllHeaders: true
  },
  base: "/docs/",
  plugins: [
    [
      "vuepress-plugin-export",
      {
        page: {
          format: 'A4',
          printBackground: true,
          margin: {
            top: 60,
            left: 20,
            right: 20,
            bottom: 60
          }
        },
        sorter: function (a, b) {
          var ordering = {
            Home: 0,
            "Getting Started": 1,
            "Croeseid Testnet": 2,
            "Devnet": 3,
            "Send Your First Transaction": 4,
            Consensus: 5,
            Genesis: 7,
            "Transaction Accounting Model": 7,
            Transaction: 8,
            Serialization: 9,
            "Signature Schemes": 10,
            "Transaction Flow": 11,
            "Enclave Architecture": 12,
            "Transaction Privacy": 13,
            "node-joining": 14,
            Staking: 15,
            "reward-and-punishments": 16,
            "network-parameters": 17,
            "Notes on Performance": 18,
            "Notes on Production Deployment": 19,
            "Threat Model": 20,
            "technical_glossary": 21
          };
          return ordering[a["title"]] - ordering[b["title"]];
        }
      }
    ]
  ]
};
