export declare function getFormulaBindingCurrencyType(pattern: string): string | undefined;
export declare function getFormulaBindingDecimalFromPattern(pattern: string, defaultValue?: number): number;
export declare function setFormulaBindingPatternDecimal(patterns: string, decimalLength: number): string;
export declare function getFormulaBindingCurrencyFormatOptions(symbol: string): {
    label: string;
    value: string;
    color: string | undefined;
}[];
export declare function getFormulaBindingDateFormatOptions(): {
    label: string;
    value: string;
}[];
export declare function getFormulaBindingNumberFormatOptions(): {
    label: string;
    value: string;
    color: string | undefined;
}[];
