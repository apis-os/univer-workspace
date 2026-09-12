import type { IChartDataAggregation } from '../../chart-data-aggregation';
import type { ChartStyle, IChartContext, IChartDataSeries } from '../../types';
import type { ChartPendingConfig, IChartCreateConfig, IChartDescription } from '../chart-types';
import { ChartTypeBits } from '../../enum';
interface IChartConfigConversionOptions {
    series?: IChartDataSeries[];
    currentChartType?: ChartTypeBits;
    currentStyle?: ChartStyle;
    currentContext?: IChartContext;
    currentDataAggregation?: IChartDataAggregation;
}
interface IChartModelConfigUpdate {
    chartType?: ChartTypeBits;
    style?: ChartStyle;
    context?: IChartContext;
    dataAggregation?: Partial<IChartDataAggregation>;
}
export interface IChartModelUpdate {
    chartType?: ChartTypeBits;
    style?: ChartStyle;
    context?: IChartContext;
    dataAggregation?: Partial<IChartDataAggregation>;
}
export declare function toChartModelConfig(config: ChartPendingConfig | IChartDescription, options?: IChartConfigConversionOptions): IChartModelConfigUpdate;
/** Replaces the complete public semantic configuration while preserving engine-owned style fields. */
export declare function toChartModelConfigReplacement(config: IChartCreateConfig, options?: IChartConfigConversionOptions): Required<IChartModelUpdate>;
interface IChartModelApplicationState {
    chartType?: ChartTypeBits;
    chartTypeChanged?: boolean;
    style?: ChartStyle;
    styleChanged?: boolean;
    context?: IChartContext;
    contextChanged?: boolean;
    dataAggregation?: IChartDataAggregation;
    dataAggregationChanged?: boolean;
    series?: IChartDataSeries[];
}
interface IChartPendingApplicationState {
    description: IChartDescription;
    model?: IChartModelApplicationState;
}
export declare const chartPendingPatchInterpreter: import("../internal/patch-interpreter").IPatchInterpreter<IChartPendingApplicationState, ChartPendingConfig>;
export declare function toChartModelUpdate(configChange: ChartPendingConfig, options?: IChartConfigConversionOptions): IChartModelUpdate;
export {};
