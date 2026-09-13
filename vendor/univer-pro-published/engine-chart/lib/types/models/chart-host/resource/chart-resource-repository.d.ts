import type { Observable } from 'rxjs';
import type { IChartDataAggregation } from '../../../chart-data-aggregation';
import type { ChartTypeBits } from '../../../enum';
import type { ChartStyle, IChartContext } from '../../../types';
import type { ChartDataSourceValue } from './inline-chart-table';
import type { IResourceRefChartDataSourceReference } from './resource-ref-chart-data-source.adapter';
import { Disposable } from '@univerjs/core';
export declare const CHART_RESOURCE_VERSION = 2;
export interface IInlineChartDataSource<TCell extends ChartDataSourceValue = ChartDataSourceValue> {
    id: string;
    name?: string;
    values: TCell[][];
}
export interface IReferencedChartDataSource {
    id: string;
    name?: string;
    source: IResourceRefChartDataSourceReference;
}
export type IChartResourceDataSource = IInlineChartDataSource | IReferencedChartDataSource;
export type IChartDataSourceInput = {
    values: ChartDataSourceValue[][];
    source?: never;
} | {
    source: IResourceRefChartDataSourceReference;
    values?: never;
};
interface IChartDataSourceCandidate {
    values?: ChartDataSourceValue[][];
    source?: IResourceRefChartDataSourceReference;
}
export declare const DEFAULT_CHART_RESOURCE_HEADER_ROW = 0;
export declare function isInlineChartDataSource<T extends IChartDataSourceCandidate>(dataSource: T | null | undefined): dataSource is T & {
    values: ChartDataSourceValue[][];
    source?: never;
};
export declare function isReferencedChartDataSource<T extends IChartDataSourceCandidate>(dataSource: T | null | undefined): dataSource is T & {
    source: IResourceRefChartDataSourceReference;
    values?: never;
};
export interface IChartResourceContext {
    /**
     * Zero-based physical row offset in the source table.
     * Historical snapshots may omit it and are interpreted as using row zero.
     */
    headerRow?: number;
    orient?: 'row' | 'column';
    chartContext?: Partial<IChartContext>;
}
export interface IChartResourceState {
    legendSelected?: Record<string, boolean>;
    activePage?: number;
    relationNodePositions?: Record<string, {
        x: number;
        y: number;
    }>;
}
export interface IChartResourceSnapshot<TContext = IChartResourceContext, TState = IChartResourceState> {
    id: string;
    dataSourceId: string;
    chartType: ChartTypeBits;
    style?: ChartStyle;
    context?: TContext;
    state?: TState;
    dataAggregation?: IChartDataAggregation;
}
export interface IChartResource<TDataSource extends IChartResourceDataSource = IChartResourceDataSource, TChart extends IChartResourceSnapshot<unknown, unknown> = IChartResourceSnapshot> {
    version: typeof CHART_RESOURCE_VERSION;
    dataSources: Record<string, TDataSource>;
    charts: Record<string, TChart>;
}
export type ICreateChartDataSourceOptions<TDataSource extends IChartResourceDataSource = IChartResourceDataSource> = TDataSource extends IChartResourceDataSource ? Omit<TDataSource, 'id'> & {
    id?: string;
} : never;
export type ICreateChartSnapshotOptions<TChart extends IChartResourceSnapshot<unknown, unknown>> = Omit<TChart, 'id'> & {
    id?: string;
};
export type IUpdateChartSnapshotPatch<TChart extends IChartResourceSnapshot<unknown, unknown>> = Partial<Omit<TChart, 'id'>>;
interface IChartDataSourceRemovedEvent {
    unitId: string;
    dataSourceId: string;
}
export declare const ChartResourceChangeKind: {
    readonly DataSourceSet: "data-source-set";
    readonly DataSourceRemoved: "data-source-removed";
    readonly ChartSet: "chart-set";
    readonly ChartRemoved: "chart-removed";
    readonly UnitLoaded: "unit-loaded";
    readonly UnitUnloaded: "unit-unloaded";
};
export type IChartResourceChangeEvent = {
    kind: typeof ChartResourceChangeKind.DataSourceSet;
    unitId: string;
    dataSourceId: string;
} | {
    kind: typeof ChartResourceChangeKind.DataSourceRemoved;
    unitId: string;
    dataSourceId: string;
} | {
    kind: typeof ChartResourceChangeKind.ChartSet;
    unitId: string;
    chartId: string;
} | {
    kind: typeof ChartResourceChangeKind.ChartRemoved;
    unitId: string;
    chartId: string;
} | {
    kind: typeof ChartResourceChangeKind.UnitLoaded;
    unitId: string;
} | {
    kind: typeof ChartResourceChangeKind.UnitUnloaded;
    unitId: string;
};
export declare class ChartResourceRepository<TDataSource extends IChartResourceDataSource = IChartResourceDataSource, TChart extends IChartResourceSnapshot<unknown, unknown> = IChartResourceSnapshot, TResource extends IChartResource<TDataSource, TChart> = IChartResource<TDataSource, TChart>> extends Disposable {
    private readonly _resources;
    private readonly _dataSourceRemoved$;
    private readonly _resourceChanged$;
    readonly dataSourceRemoved$: Observable<IChartDataSourceRemovedEvent>;
    readonly resourceChanged$: Observable<IChartResourceChangeEvent>;
    ensureUnitResource(unitId: string): TResource;
    loadUnit(unitId: string, resource: unknown): TResource;
    unloadUnit(unitId: string): void;
    serializeUnit(unitId: string): string;
    getResource(unitId: string): TResource;
    getDataSource(unitId: string, dataSourceId: string): TDataSource | undefined;
    getChart(unitId: string, chartId: string): TChart | undefined;
    createDataSource(unitId: string, options: ICreateChartDataSourceOptions<TDataSource>): TDataSource;
    setDataSource(unitId: string, dataSource: TDataSource): TDataSource;
    updateDataSource(unitId: string, dataSourceId: string, values: ChartDataSourceValue[][], patch?: Partial<Pick<TDataSource, 'name'>>): TDataSource | undefined;
    removeDataSource(unitId: string, dataSourceId: string): boolean;
    createChart(unitId: string, options: ICreateChartSnapshotOptions<TChart>): TChart;
    setChart(unitId: string, chart: TChart): TChart;
    updateChart(unitId: string, chartId: string, patch: IUpdateChartSnapshotPatch<TChart>): TChart | undefined;
    removeChart(unitId: string, chartId: string, options?: {
        cleanupDataSource?: boolean;
    }): TChart | undefined;
    getChartIdsByDataSource(unitId: string, dataSourceId: string): string[];
    getDataSourceSharingCount(unitId: string, dataSourceId: string): number;
    isDataSourceShared(unitId: string, dataSourceId: string): boolean;
    duplicateDataSourceForChart(unitId: string, chartId: string, duplicateDataSourceId?: string): TDataSource | undefined;
    cleanupOrphanedResources(unitId: string): void;
    dispose(): void;
    private _decodeResource;
    private _decodeDataSource;
    private _cloneDataSource;
    private _isResourceEnvelope;
    private _isValues;
    private _normalizeReference;
    private _invalidDataSource;
}
export {};
