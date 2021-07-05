import { ChainId } from '../enums';
import { NativeCurrency } from 'entities/NativeCurrency';
export declare const NATIVE: {
    [chainId in ChainId]: NativeCurrency;
};
