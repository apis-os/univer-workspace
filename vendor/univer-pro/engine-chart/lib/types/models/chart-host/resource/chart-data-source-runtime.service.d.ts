import type { IDisposable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { ChartDataSourceValue } from './inline-chart-table';
import type { IResourceRefChartDataSourceReference } from './resource-ref-chart-data-source.adapter';
import { Disposable } from '@univerjs/core';
export declare enum ChartDataSourceRuntimeStatus {
    LOADING = "loading",
    READY = "ready",
    UNAVAILABLE = "unavailable",
    REFRESH_ERROR = "refresh-error"
}
export interface IChartDataSourceLoadResult {
    values: ReadonlyArray<ReadonlyArray<ChartDataSourceValue>>;
}
export interface IChartDataSourceProvider {
    readonly kind: IResourceRefChartDataSourceReference['kind'];
    getCacheKey(source: Readonly<IResourceRefChartDataSourceReference>): string;
    load(source: Readonly<IResourceRefChartDataSourceReference>, options: {
        signal: AbortSignal;
    }): Promise<IChartDataSourceLoadResult>;
    watch?(source: Readonly<IResourceRefChartDataSourceReference>, onChange: () => void): IDisposable;
}
export interface IChartDataSourceRuntimeState {
    status: ChartDataSourceRuntimeStatus;
    values?: ReadonlyArray<ReadonlyArray<ChartDataSourceValue>>;
    error?: unknown;
}
export interface IChartDataSourceHandle extends IDisposable {
    readonly state$: Observable<IChartDataSourceRuntimeState>;
    refresh(): Promise<void>;
}
export interface IChartDataSourceRuntimeService {
    registerProvider(provider: IChartDataSourceProvider): IDisposable;
    acquire(source: Readonly<IResourceRefChartDataSourceReference>): IChartDataSourceHandle;
}
export declare const IChartDataSourceRuntimeService: import("@wendellhu/redi").IdentifierDecorator<IChartDataSourceRuntimeService>;
export declare class ChartDataSourceRuntimeService extends Disposable implements IChartDataSourceRuntimeService {
    private readonly _providers;
    private readonly _entries;
    private readonly _handles;
    private _isDisposed;
    registerProvider(provider: IChartDataSourceProvider): IDisposable;
    acquire(source: Readonly<IResourceRefChartDataSourceReference>): IChartDataSourceHandle;
    dispose(): void;
    private _getOrCreateEntry;
    private _attachHandle;
    private _detachHandle;
    private _releaseHandle;
    private _refreshHandle;
    private _startLoad;
    private _requestRefresh;
    private _loadEntry;
    private _isCurrentGeneration;
    private _clearPending;
    private _publishEntry;
    private _invalidateProviderEntry;
    private _cancelEntry;
    private _snapshotState;
    private _unavailableState;
}
