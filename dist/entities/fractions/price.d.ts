import { Rounding } from '../../enums';
import { BigintIsh } from '../../types';
import { Currency } from '../Currency';
import { Route } from '../route';
import { CurrencyAmount } from './currencyAmount';
import { Fraction } from './fraction';
export declare class Price extends Fraction {
    readonly baseCurrency: Currency;
    readonly quoteCurrency: Currency;
    readonly scalar: Fraction;
    static fromRoute(route: Route): Price;
    constructor(baseCurrency: Currency, quoteCurrency: Currency, denominator: BigintIsh, numerator: BigintIsh);
    get raw(): Fraction;
    get adjusted(): Fraction;
    invert(): Price;
    multiply(other: Price): Price;
    quote(currencyAmount: CurrencyAmount): CurrencyAmount;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}
