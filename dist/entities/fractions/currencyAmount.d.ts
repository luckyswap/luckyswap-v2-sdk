import { Currency } from '../Currency';
import JSBI from 'jsbi';
import { Fraction } from './fraction';
import { Rounding } from '../../enums/Rounding';
import { BigintIsh } from '../../types';
import { ChainId } from '../../enums/ChainId';
export declare class CurrencyAmount extends Fraction {
    readonly currency: Currency;
    /**
     * Helper that calls the constructor with the NATIVE currency respected with chainId
     * @param amount ether amount in wei
     */
    static native(amount: BigintIsh, chainId: ChainId): CurrencyAmount;
    /**
     * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
     * @param currency the currency in the amount
     * @param rawAmount the raw token or ether amount
     */
    static fromRawAmount(currency: Currency, rawAmount: BigintIsh): CurrencyAmount;
    protected constructor(currency: Currency, amount: BigintIsh);
    get raw(): JSBI;
    add(other: CurrencyAmount): CurrencyAmount;
    subtract(other: CurrencyAmount): CurrencyAmount;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
    toExact(format?: object): string;
}
