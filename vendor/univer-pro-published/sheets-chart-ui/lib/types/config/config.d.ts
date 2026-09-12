export declare const SHEETS_CHART_UI_PLUGIN_CONFIG_KEY = "sheets-chart-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsChartUIConfig {
    /**
     * Enables chart element edit overlays and floating menus for supported chart types.
     * @default true
     */
    enableChartElementFloatMenu?: boolean;
}
export declare const defaultPluginConfig: IUniverSheetsChartUIConfig;
