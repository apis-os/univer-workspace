import type { Injector } from '@univerjs/core';
import type { IChartDataAggregation } from '../../../chart-data-aggregation';
import type { ChartTypeBits } from '../../../enum';
import type { ChartStyle, IChartContext, IUniverDataSet } from '../../../types';
import { StaticChartSource } from '../../../source/static-chart-source';
import { ChartModel } from '../../chart-model/chart-model';
export interface IChartRuntime {
    model: ChartModel;
    source: StaticChartSource;
}
export interface IChartRuntimeConfig {
    chartType: ChartTypeBits;
    dataSet: IUniverDataSet;
    isRowDirection: boolean;
    style?: ChartStyle;
    context?: Partial<IChartContext>;
    dataAggregation?: IChartDataAggregation;
}
export interface ICreateChartRuntimeOptions extends Omit<IChartRuntimeConfig, 'dataSet'> {
    id: string;
    injector: Injector;
    dataSet?: IUniverDataSet;
}
/** Creates the canonical runtime pair used by hosts backed by an inline table. */
export declare function createChartRuntime(options: ICreateChartRuntimeOptions): IChartRuntime;
export declare function createChartRuntimeWithSource(source: StaticChartSource, options: ICreateChartRuntimeOptions): IChartRuntime;
/** Applies a persisted inline-table snapshot without duplicating chart semantics in each host. */
export declare function refreshChartRuntime(runtime: IChartRuntime, config: IChartRuntimeConfig): void;
export declare function refreshChartRuntimeMetadata(runtime: IChartRuntime, config: Omit<IChartRuntimeConfig, 'dataSet'>): void;
