import type { IChartHostRect } from '@univerjs-pro/engine-chart';
import { ChartRenderMode } from '@univerjs-pro/engine-chart';
export declare const SHEETS_CHART_PLUGIN_CONFIG_KEY = "sheets-chart.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsChartConfig {
    chartRenderMode?: ChartRenderMode;
    defaultChartSize?: IChartHostRect;
}
export declare const defaultPluginConfig: IUniverSheetsChartConfig;
