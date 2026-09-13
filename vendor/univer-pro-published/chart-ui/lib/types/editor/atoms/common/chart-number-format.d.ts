export declare enum ChartNumberFormatKind {
    General = "general",
    Accounting = "accounting",
    Currency = "currency",
    Date = "date",
    Thousands = "thousands"
}
export declare const CHART_NUMBER_FORMAT_MAX_DECIMAL_PLACES = 20;
export declare const CHART_NUMBER_FORMAT_MIN_DECIMAL_PLACES = 0;
export declare const CHART_DATE_FORMAT_OPTIONS: {
    label: string;
    value: "yyyy-MM-dd" | "yyyy/MM/dd" | "yyyy\"年\"MM\"月\"dd\"日\"" | "MM-dd" | "M\"月\"d\"日\"" | "h:mm:ss" | "h:mm" | "A/P hh:mm" | "A/P h:mm" | "A/P h:mm:ss" | "MM-dd A/P hh:mm";
}[];
export declare const CHART_THOUSANDS_FORMAT_OPTIONS: {
    color: string | undefined;
    label: string;
    value: "#,##0_);(#,##0)" | "#,##0_);[Red](#,##0)" | "#,##0.00_);#,##0.00" | "#,##0.00_);[Red]#,##0.00" | "#,##0.00_);-#,##0.00" | "#,##0.00_);[Red]-#,##0.00";
}[];
export declare function getChartCurrencyFormatOptions(symbol: string): {
    color: string | undefined;
    label: string;
    value: string;
}[];
export declare function getChartNumberFormatCurrency(pattern: string): string;
export declare function getChartNumberFormatDecimalPlaces(pattern: string, fallback?: number): number;
export declare function setChartNumberFormatDecimalPlaces(patterns: string, decimalPlaces: number): string;
export declare function buildChartAccountingFormat(symbol: string, decimalPlaces: number): string;
export declare function resolveChartNumberFormatKind(pattern: string | null | undefined): ChartNumberFormatKind;
