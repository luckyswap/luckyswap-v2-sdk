import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  RINKEBY = 4,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  MAINNET = 56,
  BSCTESTNET = 97,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

/// MAINET
// export const FACTORY_ADDRESS = '0x86325Af801Eb418eCE6Ff2Bb8F4C6322543858E4'
// export const INIT_CODE_HASH = '0xd56c41afae4622ccce0d01f31c6837f59840ab1b102b7a97103a5d99671acd81'

/// TESTNET
export const FACTORY_ADDRESS = '0x2156bc3cC75a1Bfcad49f4f1Af19235c3a8A41F2'
export const INIT_CODE_HASH = '0x528371067e59e1ba4fd03d0c036996a3e88e2f6c45254b91f7154746a289a5c7'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
