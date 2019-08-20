module.exports = {
  title: 'Crypto.com Chain',
  description: 'Welcome to Crypto.com Chain\'s documentation!',
  themeConfig: {
    nav: [
      {text:'Home', link: '/'},
      {text:'Getting Started',link:'/getting-started/'},
      {text:'Client RPC',link:'https://github.com/crypto-com/chain/tree/master/client-rpc'},
      {text:'Download',link:'https://crypto-com.github.io/Crypto.com_Chain.pdf'}
    ],
    sidebar: {
      '/getting-started/': [
        '',
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
      ]
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
          'Local Full Node Development': 2,
          'Send Your First Transaction': 3,
          'Consensus': 4,
          'Genesis': 5,
          'Transaction Accounting Model': 6,
          'Transaction': 7,
          'Serialization': 8,
          'Signature Schemes': 9,
          'Transaction Flow': 10,
          'Enclave Architecture': 11,
          'Transaction Privacy': 12,
          'Staking': 13,
          'Notes on Performance': 14,
          'Notes on Production Deployment': 15,
          'Threat Model': 16
        };
        return (ordering[a["title"]] - ordering[b["title"]]);
      }
    }
    ]
  ]
}
