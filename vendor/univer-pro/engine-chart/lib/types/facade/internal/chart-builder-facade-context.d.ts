import type { ChartBuilder, ChartTypeString, IChartCreateConfig, IChartInfo } from '@univerjs-pro/engine-chart';
import type { IChartBuilderTypeMap } from '../chart-builder-type-map';
export interface IChartBuilderFacadeContext<TBuilder extends ChartBuilder = ChartBuilder, TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> {
    readonly builder: TBuilder;
    readonly info: Partial<TInfo>;
    readonly normalizeSource: (source: TSource) => TDataSource;
    readonly createConfig: (builder: TBuilder) => IChartCreateConfig;
    readonly requireSource: boolean;
}
export type ChartFacadeBuilderConstructor<TFacade, TSource, TDataSource, TInfo extends IChartInfo<TDataSource>> = new (context: IChartBuilderFacadeContext<ChartBuilder, TSource, TDataSource, TInfo>) => TFacade;
export declare function wrapChartBuilder<TFacade, TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>>(builder: ChartBuilder, Constructor: ChartFacadeBuilderConstructor<TFacade, TSource, TDataSource, TInfo>, context?: Omit<IChartBuilderFacadeContext<ChartBuilder, TSource, TDataSource, TInfo>, 'builder'>): TFacade;
/** Wraps a core Builder with the concrete Facade selected by its fixed type. */
export declare function wrapTypedChartBuilder<T extends ChartTypeString, TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>>(builder: ChartBuilder, type: T, context?: Omit<IChartBuilderFacadeContext<ChartBuilder, TSource, TDataSource, TInfo>, 'builder'>): IChartBuilderTypeMap<TSource, TDataSource, TInfo>[T];
