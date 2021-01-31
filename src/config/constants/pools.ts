import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'PIZZA',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    contractAddress: {
      97: '',
      56: '0xD3849bCefE2D032b7EA4e01aA18EA5D1797bdcc6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pizzafinance.app/',
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
   pastaId: 1,
   tokenName: 'CHS',
   stakingTokenName: QuoteToken.PIZZA,
   stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',    //
   contractAddress: {
     97: '',
     56: '0xc2053223971ce57Cb1B68E078Da7dfd8c4541bAa',
   },
   poolCategory: PoolCategory.CORE,
   projectLink: 'https://cheeseswap.app/',
   harvest: true,
   tokenPerBlock: '0.25',
   sortOrder: 2,
   isFinished: false,
   tokenDecimals: 18,
 },
]

export default pools
