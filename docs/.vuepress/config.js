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
          // {
          //   text: "Testnet Explorer",
          //   link: "https://chain.crypto.com/explorer"
          // },
          {
            text: "Testnet Faucet",
            link: "https://chain.crypto.com/faucet"
          }
        ]
      },
      {
        text: "Design & Specifications",
        items: [
          {
            text: "Introduction",
            link: "/chain-details/introduction.md"
          },
          {
            text: "Design Goals",
            link: "/chain-details/architecture.md"
          },
          {
            text: "Modules",
            link: "/chain-details/module_overview.md"
          }
        ]
      },      
      {
        text: "Wallet Management",
        items: [
          {
            text: "chain-maind",
            link: "/wallets/cli.html#chain-maind"
          },
          {
            text: "Ledger Hardware Wallets",
            link: "/wallets/ledger.html#ledger-hardware-wallets"
          }
        ]
      },
      // {
      //   text: "Download",
      //   link: "https://crypto-com.github.io/Crypto.com_Chain.pdf"
      // }

        {
            text: "Resources",
            items: [
                {
                    text: "gRPC API",
                    link: "/resources/cosmos-grpc-docs"
                },

            ]
        }
    ],
    sidebar: {
      "/getting-started/": [
        "",
        "croeseid-testnet",
        "testnet-azure-1click",
        "local-devnet",
//        "notes-on-production-deployment",
//        "notes-on-performance"
      ],
      "/chain-details/": [
        "introduction",
        "architecture",
        "chain-id",
        "genesis_file",
        "module_overview",
        "parameters"
      ],
      "/wallets/": [
        "cli",
        "ledger",
//        "rpc"
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
