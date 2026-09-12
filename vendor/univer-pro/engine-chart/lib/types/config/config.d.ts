import type { IWordCloudRenderConfig } from '../wordcloud-chart/word-cloud-render-config';
export declare const ENGINE_CHART_PLUGIN_CONFIG_KEY = "engine-chart.config";
export declare const configSymbol: unique symbol;
export interface IUniverChartConfig {
    wordCloudRenderConfig?: IWordCloudRenderConfig;
}
export declare const defaultPluginConfig: IUniverChartConfig;
