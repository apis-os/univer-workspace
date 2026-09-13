import type { IChartHostRect } from '@univerjs-pro/engine-chart';
export declare const DOCS_CHART_PLUGIN_CONFIG_KEY = "docs-chart.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsChartConfig {
    defaultChartSize?: IChartHostRect;
}
export declare const defaultPluginConfig: IUniverDocsChartConfig;
