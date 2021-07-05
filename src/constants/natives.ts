import { Binance, Matic } from '../entities/natives'

import { ChainId } from '../enums'
import { NativeCurrency } from 'entities/NativeCurrency'

export const NATIVE: { [chainId in ChainId]: NativeCurrency } = {
  [ChainId.MAINNET]: Binance.onChain(ChainId.MAINNET),
  [ChainId.BSCTESTNET]: Binance.onChain(ChainId.BSCTESTNET),
  [ChainId.MATIC]: Matic.onChain(ChainId.MATIC),
  [ChainId.MATIC_TESTNET]: Matic.onChain(ChainId.MATIC_TESTNET)
}
