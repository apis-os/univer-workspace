import type { ChartTypeString, IChartDescription, IChartInfo } from '@univerjs-pro/engine-chart';
import type { Injector } from '@univerjs/core';
import type { IChartBuilderTypeMap } from './chart-builder-type-map';
import type { HostComposedChartBuilder } from './chart-host-builder-types';
/** Host extension hooks used to add placement and ownership methods to a Chart Builder. */
export interface IChartBuilderExtensionContext<TInfo extends IChartInfo<TDataSource>, TDataSource> {
    /** Returns a cloned host-specific information field from the detached draft. */
    getInfo<K extends keyof TInfo>(key: K): TInfo[K] | undefined;
    /** Replaces a host-specific information field in the detached draft. */
    setInfo<K extends keyof TInfo>(key: K, value: TInfo[K]): void;
    /** Sets the common absolute position in the detached draft. */
    setAbsolutePosition(x: number, y: number): void;
    /** Sets the common size in the detached draft. */
    setSize(width: number, height: number): void;
}
/** A type-specific engine Builder composed with host-owned creation methods. */
export type FChartInfoBuilder<T extends ChartTypeString, TSource, TDataSource, TInfo extends IChartInfo<TDataSource>, TExtension extends object = object> = HostComposedChartBuilder<IChartBuilderTypeMap<TSource, TDataSource, TInfo>[T], TExtension>;
interface IChartBuilderExtensionOptions<T extends ChartTypeString, TSource, TDataSource, TInfo extends IChartInfo<TDataSource>, TExtension extends object> {
    extension: (context: IChartBuilderExtensionContext<TInfo, TDataSource>) => TExtension & ThisType<FChartInfoBuilder<T, TSource, TDataSource, TInfo, TExtension>>;
}
interface INewChartBuilderOptions<T extends ChartTypeString, TSource, TDataSource, TInfo extends IChartInfo<TDataSource>, TExtension extends object> extends IChartBuilderExtensionOptions<T, TSource, TDataSource, TInfo, TExtension> {
    type: T;
    injector: Injector;
    commitError: string;
    normalizeSource: (source: TSource) => TDataSource;
    createInfo: () => Omit<TInfo, 'config' | 'dataSource'>;
}
interface IExistingChartBuilderOptions<T extends ChartTypeString, TSource, TDataSource, TInfo extends IChartInfo<TDataSource>, TExtension extends object> extends IChartBuilderExtensionOptions<T, TSource, TDataSource, TInfo, TExtension> {
    type: T;
    info: TInfo;
    description: IChartDescription;
    normalizeSource: (source: TSource) => TDataSource;
}
/**
 * Creates a new detached Chart information Builder.
 * @param options The Chart type, source normalizer, host information factory, and host extension.
 * @returns A type-specific Builder that produces an insertable Chart information object.
 */
export declare function createChartBuilder<T extends ChartTypeString, TSource, TDataSource, TInfo extends IChartInfo<TDataSource>, TExtension extends object = object>(options: INewChartBuilderOptions<T, TSource, TDataSource, TInfo, TExtension>): FChartInfoBuilder<T, TSource, TDataSource, TInfo, TExtension>;
/**
 * Creates a detached Chart information Builder prefilled from an existing Chart snapshot.
 * @param options The existing information, semantic description, target type, source normalizer, and host extension.
 * @returns A type-specific Builder for creating a modified copy without updating the live Chart.
 */
export declare function createChartBuilder<T extends ChartTypeString, TSource, TDataSource, TInfo extends IChartInfo<TDataSource>, TExtension extends object = object>(options: IExistingChartBuilderOptions<T, TSource, TDataSource, TInfo, TExtension>): FChartInfoBuilder<T, TSource, TDataSource, TInfo, TExtension>;
export {};
