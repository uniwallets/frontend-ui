import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PIZZA',
    lpAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '0x4375eA687330A95D42383Ef18AD3ea8C4Db7224d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PIZZA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8405Be915Af56589756A275d4894FA9f0Ff6CA0F',
    },
    tokenSymbol: 'PIZZA',
    tokenAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'PIZZA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8cC2f287195F3a1c7736cFE6348DA80e390622f6',
    },
    tokenSymbol: 'PIZZA',
    tokenAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },
  {
   pid: 11,
   lpSymbol: 'PIZZA-USDT LP',
   lpAddresses: {
     97: '',
     56: '0x31295b81D5c9388fb3AfDd22bCA517AAF52840f8',
   },
   tokenSymbol: 'PIZZA',
   tokenAddresses: {
     97: '',
     56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
   },
   quoteTokenSymbol: QuoteToken.USDT,
   quoteTokenAdresses: contracts.usdt,
   isCommunity: false,
 },
  {
    pid: 3,
    lpSymbol: 'PIZZA-CHS LP',
    lpAddresses: {
      97: '',
      56: '0x1E90d3C88A3E830983b70E6EF9799Ff1c0deCE62',
    },
    tokenSymbol: 'PIZZA',
    tokenAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    quoteTokenSymbol: QuoteToken.CHS,
    quoteTokenAdresses: contracts.chs,
  },
  {
   pid: 5,
   lpSymbol: 'BNB-BUSD LP',
   lpAddresses: {
     97: '',
     56: '0xF455f6f7988B752F75488E2CCcC030346d0Cac72',
   },
   tokenSymbol: 'BNB',
   tokenAddresses: {
     97: '',
     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
   },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
   isCommunity: false,
 },
  {
    pid: 7,
    lpSymbol: 'ETH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7d1a03b432c5f04A426F4Eaf41037fe8Dd695b89',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 {
   pid: 6,
   lpSymbol: 'USDT-BNB LP',
   lpAddresses: {
     97: '',
     56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
   },
   tokenSymbol: 'USDT',
   tokenAddresses: {
     97: '',
     56: '0x55d398326f99059fF775485246999027B3197955',
   },
   quoteTokenSymbol: QuoteToken.BNB,
   quoteTokenAdresses: contracts.wbnb,
   isCommunity: false,
 },
 {
  pid: 8,
  lpSymbol: 'DAI-BNB LP',
  lpAddresses: {
    97: '',
    56: '0x89D20Dcda1DC49F47BcDA00C3b84Fe30AC3d127b',
  },
  tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',
    56: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
  isCommunity: false,
},
{
 pid: 9,
 lpSymbol: 'USDC-BNB LP',
 lpAddresses: {
   97: '',
   56: '0x578e8CEc62666D2750D92EcC70bE0961FF3Ab269',
 },
 tokenSymbol: 'USDC',
 tokenAddresses: {
   97: '',
   56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
 },
 quoteTokenSymbol: QuoteToken.BNB,
 quoteTokenAdresses: contracts.wbnb,
 isCommunity: false,
},
  {
    pid: 4,
    lpSymbol: 'CHS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x51A162dd678d75C269Ef6680193C019e0B4Bda7E',
    },
    tokenSymbol: 'CHS',
    tokenAddresses: {
      97: '',
      56: '0xaDD8A06fd58761A5047426e160B2B88AD3B9D464',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'KP3RB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2113bA4000d8a0B201C3e916E63Fe0DCDfBe476a',
    },
    tokenSymbol: 'KP3RB',
    tokenAddresses: {
      97: '',
      56: '0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
