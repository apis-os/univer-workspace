import type { ChartBuilder, ChartTypeString, IChartInfo } from '@univerjs-pro/engine-chart';
import type { IChartBuilderTypeMap } from './chart-builder-type-map';
import type { FChartBuilderBase } from './f-chart-builder-base';
import type { IChartBuilderFacadeContext } from './internal/chart-builder-facade-context';
export type ChartBuilderConstructor<T extends FChartBuilderBase = FChartBuilderBase> = new (context: IChartBuilderFacadeContext<ChartBuilder>) => T;
export declare function registerChartBuilder<T extends ChartTypeString>(type: T, Constructor: ChartBuilderConstructor<IChartBuilderTypeMap[T]>): void;
export declare function getChartBuilderConstructor<T extends ChartTypeString, TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>>(type: T): new (context: IChartBuilderFacadeContext<ChartBuilder, TSource, TDataSource, TInfo>) => IChartBuilderTypeMap<TSource, TDataSource, TInfo>[T];
export declare function getChartBuilderRegistryKeys(): ChartTypeString[];
