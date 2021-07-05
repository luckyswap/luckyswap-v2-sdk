import { NativeCurrency } from '../NativeCurrency'

export class Binance extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'BNB', 'Binance Coin')
  }

  private static _cache: { [chainId: number]: Binance } = {}

  public static onChain(chainId: number): Binance {
    return this._cache[chainId] ?? (this._cache[chainId] = new Binance(chainId))
  }
}
