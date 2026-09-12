type BaseSeparatorStyle = 'local' | 'commaPeriod' | 'periodComma' | 'spaceComma' | 'spacePeriod';
type BaseNumberAbbreviation = 'none' | 'K' | 'M' | 'B';
export interface IBaseNumberFormatConfig {
    decimalPlaces?: number;
    separatorStyle?: BaseSeparatorStyle | string;
    locale?: string;
    useThousands?: boolean;
    abbreviation?: BaseNumberAbbreviation | string;
    allowNegative?: boolean;
    currencySymbol?: string;
}
export declare function buildBaseNumberFormatPattern(config: IBaseNumberFormatConfig): string;
export declare function formatBaseNumberValue(value: number, config: IBaseNumberFormatConfig): string;
export declare function inferBaseSeparatorStyle(locale?: string): Exclude<BaseSeparatorStyle, 'local'>;
export {};
