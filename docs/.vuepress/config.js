module.exports = {
  title: 'Crypto.com Chain',
  description: 'Welcome to Crypto.com Chain\'s documentation!',
  themeConfig: {
    nav: [
      {text:'Home', link: '/'},
      {text:'Getting Started',link:'/getting-started/'},
      {text:'Testnet Tutorial',link:'/getting-started/thaler-testnet'},
      {text:'Wallet Management',link:'/wallets/'},
      {text:'Download',link:'https://crypto-com.github.io/Crypto.com_Chain.pdf'}
    ],
    sidebar: {
      '/getting-started/': [
        '',
        'thaler-testnet',
        'local_full_node_development',
        'send_your_first_transaction',
        'consensus',
        'genesis',
        'transaction-accounting-model',
        'transaction',
        'serialization',
        'signature-schemes',
        'client-flow',
        'enclave-architecture',
        'transaction-privacy',
        'staking',
        'notes-on-production-deployment',
        'notes-on-performance',
        'threat-model'
      ],
      '/wallets/': [
        '',
        'client-cli',
        'sample-chain-wallet',
        'client-rpc'
      ],
    },
    displayAllHeaders: true
  },
  base: '/',
  plugins: [
    ['vuepress-plugin-export',
    {
      sorter: function(a,b){
        var ordering = {
          'Home': 0,
          'Getting Started': 1,
          'Thaler Testnet': 2,
          'Local Full Node Development': 3,
          'Send Your First Transaction': 4,
          'Consensus': 5,
          'Genesis': 6,
          'Transaction Accounting Model': 7,
          'Transaction': 8,
          'Serialization': 9,
          'Signature Schemes': 10,
          'Transaction Flow': 11,
          'Enclave Architecture': 12,
          'Transaction Privacy': 13,
          'Staking': 14,
          'Notes on Performance': 15,
          'Notes on Production Deployment': 16,
          'Threat Model': 17
        };
        return (ordering[a["title"]] - ordering[b["title"]]);
      }
    }
    ]
  ]
}
