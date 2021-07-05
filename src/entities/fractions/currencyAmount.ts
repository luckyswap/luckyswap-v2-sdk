import { Currency } from '../Currency'
import invariant from 'tiny-invariant'
import JSBI from 'jsbi'
import _Big from 'big.js'
import toFormat from 'toformat'

import { TEN, SolidityType } from '../../constants'
import { parseBigintIsh, validateSolidityTypeInstance } from '../../utils'
import { Fraction } from './fraction'
import { Rounding } from '../../enums/Rounding'
import { BigintIsh } from '../../types'
import { NATIVE } from '../../constants'
import { ChainId } from 'enums/ChainId'

const Big = toFormat(_Big)

export class CurrencyAmount extends Fraction {
  public readonly currency: Currency

  /**
   * Helper that calls the constructor with the NATIVE currency respected with chainId
   * @param amount ether amount in wei
   */
  public static native(amount: BigintIsh, chainId: ChainId): CurrencyAmount {
    return new CurrencyAmount(NATIVE[chainId], amount)
  }

  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */
  public static fromRawAmount(currency: Currency, rawAmount: BigintIsh): CurrencyAmount {
    return new CurrencyAmount(currency, rawAmount)
  }

  // amount _must_ be raw, i.e. in the native representation
  protected constructor(currency: Currency, amount: BigintIsh) {
    const parsedAmount = parseBigintIsh(amount)
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256)

    super(parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals)))
    this.currency = currency
  }

  public get raw(): JSBI {
    return this.numerator
  }

  public add(other: CurrencyAmount): CurrencyAmount {
    invariant(this.currency.equals(other.currency), 'TOKEN')
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw))
  }

  public subtract(other: CurrencyAmount): CurrencyAmount {
    invariant(this.currency.equals(other.currency), 'TOKEN')
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw))
  }

  public toSignificant(
    significantDigits: number = 6,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    return super.toSignificant(significantDigits, format, rounding)
  }

  public toFixed(
    decimalPlaces: number = this.currency.decimals,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    invariant(decimalPlaces <= this.currency.decimals, 'DECIMALS')
    return super.toFixed(decimalPlaces, format, rounding)
  }

  public toExact(format: object = { groupSeparator: '' }): string {
    Big.DP = this.currency.decimals
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(format)
  }
}
