import { ChainId } from '../enums'
import invariant from 'tiny-invariant'

import { Currency } from './Currency'
import { Token } from './Token'
import { Pair } from './pair'
import { Price } from './fractions/price'

export class Route {
  public readonly pairs: Pair[]
  public readonly path: Token[]
  public readonly input: Currency
  public readonly output: Currency
  public readonly midPrice: Price

  public constructor(pairs: Pair[], input: Currency, output?: Currency) {
    invariant(pairs.length > 0, 'PAIRS')
    const chainId: number = pairs[0].chainId
    invariant(
      pairs.every(pair => pair.chainId === chainId),
      'CHAIN_IDS'
    )
    const wrappedInput = input.wrapped
    invariant(pairs[0].involvesToken(wrappedInput), 'INPUT')
    invariant(typeof output === 'undefined' || pairs[pairs.length - 1].involvesToken(output.wrapped), 'OUTPUT')

    const path: Token[] = [wrappedInput]
    for (const [i, pair] of pairs.entries()) {
      const currentInput = path[i]
      invariant(currentInput.equals(pair.token0) || currentInput.equals(pair.token1), 'PATH')
      const output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0
      path.push(output)
    }

    this.pairs = pairs
    this.path = path
    this.midPrice = Price.fromRoute(this)
    this.input = input
    this.output = output ?? path[path.length - 1]
  }

  public get chainId(): ChainId {
    return this.pairs[0].chainId
  }
}
