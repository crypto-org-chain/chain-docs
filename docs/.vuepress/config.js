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
          'Consensus': 3,
          'Genesis': 4,
          'Transaction Accounting Model': 5,
          'Transaction': 6,
          'Serialization': 7,
          'Signature Schemes': 8,
          'Transaction Flow': 9,
          'Enclave Architecture': 10,
          'Transaction Privacy': 11,
          'Staking': 12,
          'Notes on Performance': 13,
          'Notes on Production Deployment': 14,
          'Threat Model': 15
        };
        return (ordering[a["title"]] - ordering[b["title"]]);
      }
    }
    ]
  ]
}
