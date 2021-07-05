import { NativeCurrency } from '../NativeCurrency';
export declare class Binance extends NativeCurrency {
    protected constructor(chainId: number);
    private static _cache;
    static onChain(chainId: number): Binance;
}
