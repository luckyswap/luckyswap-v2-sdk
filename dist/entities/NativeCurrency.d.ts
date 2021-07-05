import { AbstractCurrency } from './AbstractCurrency';
import { Currency } from './Currency';
import { Token } from './Token';
/**
 * Represents the native currency of the chain on which it resides, e.g.
 */
export declare abstract class NativeCurrency extends AbstractCurrency {
    readonly isNative: true;
    readonly isToken: false;
    get wrapped(): Token;
    equals(other: Currency): boolean;
}
