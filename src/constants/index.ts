import { ChainId } from '../enums/ChainId'

export * from './addresses'
export * from './natives'
export * from './numbers'
export * from './tokens'

import JSBI from 'jsbi'
import { AddressMap } from 'types/AddressMap'

export const INIT_CODE_HASH: AddressMap = {
  [ChainId.MAINNET]: '0xd56c41afae4622ccce0d01f31c6837f59840ab1b102b7a97103a5d99671acd81',
  [ChainId.MATIC]: '0x6d5fdaab3371d5d158f62abbc39e801a20feab6444a5750398a310ff3730c659',
  [ChainId.MATIC_TESTNET]: '0x6d5fdaab3371d5d158f62abbc39e801a20feab6444a5750398a310ff3730c659',
  [ChainId.BSC_TESTNET]: '0x6d5fdaab3371d5d158f62abbc39e801a20feab6444a5750398a310ff3730c659'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

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
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
