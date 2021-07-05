import { NativeCurrency } from '../NativeCurrency'

export class Matic extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'MATIC', 'Matic')
  }
  private static _cache: { [chainId: number]: Matic } = {}

  public static onChain(chainId: number): Matic {
    return this._cache[chainId] ?? (this._cache[chainId] = new Matic(chainId))
  }
}
