import invariant from 'tiny-invariant'

import { AbstractCurrency } from './AbstractCurrency'
import { Currency } from './Currency'
import { Token, WNATIVE } from './Token'

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */
export abstract class NativeCurrency extends AbstractCurrency {
  public readonly isNative: true = true
  public readonly isToken: false = false

  public get wrapped(): Token {
    const wnative = WNATIVE[this.chainId]
    invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
