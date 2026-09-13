/** Canonical authored formats shared by chart editors and Facade consumers. */
export declare const CHART_VALUE_FORMAT_PRESETS: {
    readonly source: null;
    readonly number: "#,##0.00";
    readonly percentage: "0.00%";
    readonly currency: "$#,##0.00";
    readonly scientific: "0.00E+00";
};
/** Stable representative value used only for editor previews. */
export declare const CHART_VALUE_FORMAT_PREVIEW_VALUE = 1234.5;
/**
 * Formats one semantic chart value without exposing renderer formatter contracts.
 * Invalid authored patterns fall back to the source display text.
 */
export declare function formatChartValue(value: number, sourceFormattedValue: string, format?: string): string;
export declare function toPercentage(value: number, fractionDigits?: number): string;
