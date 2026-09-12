import type { EChartsOption } from 'echarts';
import type { IChartModelInitParams } from '../chart-render/converter/mode-converter';
export declare function echartToChartModelInit(echartOption: EChartsOption): IChartModelInitParams;
export declare function isChartModelInit(option: any): option is IChartModelInitParams;
