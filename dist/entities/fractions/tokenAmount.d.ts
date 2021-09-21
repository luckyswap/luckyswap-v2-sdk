import { BigintIsh } from '../../types';
import { Token } from '../Token';
import { CurrencyAmount } from './currencyAmount';
export declare class TokenAmount extends CurrencyAmount {
    readonly token: Token;
    constructor(token: Token, numerator: BigintIsh, denominator?: BigintIsh);
    add(other: TokenAmount): TokenAmount;
    subtract(other: TokenAmount): TokenAmount;
}
