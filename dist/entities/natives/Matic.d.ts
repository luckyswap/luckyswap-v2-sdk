import { NativeCurrency } from '../NativeCurrency';
export declare class Matic extends NativeCurrency {
    protected constructor(chainId: number);
    private static _cache;
    static onChain(chainId: number): Matic;
}
