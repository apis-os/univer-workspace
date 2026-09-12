import type { IChartHostRect } from '@univerjs-pro/engine-chart';
export declare const BOARDS_CHART_PLUGIN_CONFIG_KEY = "boards-chart.config";
export declare const configSymbol: unique symbol;
export interface IUniverBoardsChartConfig {
    defaultChartSize?: IChartHostRect;
}
export declare const defaultPluginConfig: IUniverBoardsChartConfig;
