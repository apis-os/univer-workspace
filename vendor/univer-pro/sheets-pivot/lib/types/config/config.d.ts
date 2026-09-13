import { PivotDateGroupFieldDateSystemEnum } from '@univerjs-pro/engine-pivot';
export declare const SHEETS_PIVOT_PLUGIN_CONFIG_KEY = "sheets-pivot.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsPivotConfig {
    notExecuteFormula?: boolean;
    defaultOverride?: boolean;
    /**
     * Define the maximum number of items that can be displayed in a single pivot table field. The default value is 1000.
     */
    maxLimitItemCount?: number;
    /**
     * Whether to create derived date group fields automatically when date fields are added to rows or columns.
     * The default value is true.
     */
    autoDateGroup?: boolean;
    /**
     * Define the date system used for pivot date grouping calculations. The default value is Date1900.
     */
    dateSystem?: PivotDateGroupFieldDateSystemEnum;
}
export declare const defaultPluginConfig: IUniverSheetsPivotConfig;
