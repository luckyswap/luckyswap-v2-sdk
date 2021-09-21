import invariant from 'tiny-invariant'
import { BigintIsh } from '../../types'
import { Token } from '../Token'
import { CurrencyAmount } from './currencyAmount'


export class TokenAmount extends CurrencyAmount {
  public readonly token: Token

  // amount _must_ be raw, i.e. in the native representation
  public constructor(token: Token, numerator: BigintIsh, denominator?: BigintIsh) {
    super(token, numerator, denominator)
    this.token = token
  }

  public add(other: TokenAmount): TokenAmount {
    invariant(this.token.equals(other.token), 'TOKEN')
    const added = super.add(other)
    return new TokenAmount(this.token, added.numerator, added.denominator)
  }

  public subtract(other: TokenAmount): TokenAmount {
    invariant(this.token.equals(other.token), 'TOKEN')
    const subtracted = super.subtract(other)
    return new TokenAmount(this.token, subtracted.numerator, subtracted.denominator)
  }
}
