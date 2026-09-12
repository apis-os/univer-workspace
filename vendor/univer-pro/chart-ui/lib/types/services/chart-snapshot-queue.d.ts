import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import type { LocaleService } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
import { Subject } from 'rxjs';
export interface IChartSnapshotRequest {
    unitId: string;
    chartId: string;
    width: number;
    height: number;
    dpr?: number;
    mode?: string;
}
export interface IChartSnapshotEntry {
    key: string;
    status: 'pending' | 'ready' | 'error';
    dataUrl?: string;
    error?: unknown;
}
export interface IChartSnapshotInvalidation {
    unitId: string;
    chartId: string;
}
export interface IChartSnapshotRenderer<TRequest extends IChartSnapshotRequest, TRuntime extends IChartModelBinding = IChartModelBinding> {
    render(request: TRequest, runtime: TRuntime): Promise<string>;
}
export interface IChartSnapshotRuntimeProvider<TRuntime extends IChartModelBinding> {
    ensureChartModel(unitId: string, chartId: string): TRuntime | undefined;
    getChartModel(unitId: string, chartId: string): TRuntime | undefined;
}
export declare class ChartSnapshotQueue<TRequest extends IChartSnapshotRequest, TRuntime extends IChartModelBinding = IChartModelBinding> extends Disposable {
    private readonly _localeService;
    private readonly _modelService;
    private readonly _renderer;
    readonly snapshotUpdated$: Subject<IChartSnapshotEntry>;
    readonly chartInvalidated$: Subject<IChartSnapshotInvalidation>;
    private readonly _cache;
    private readonly _queue;
    private _rendering;
    private _activeDrain;
    constructor(_localeService: LocaleService, _modelService: IChartSnapshotRuntimeProvider<TRuntime>, _renderer: IChartSnapshotRenderer<TRequest, TRuntime>);
    requestSnapshot(request: TRequest): IChartSnapshotEntry;
    getSnapshot(request: TRequest): IChartSnapshotEntry | undefined;
    exportImage(request: TRequest): Promise<string | undefined>;
    invalidateChart(unitId: string, chartId: string): void;
    getCacheKey(request: TRequest): string;
    flushForTests(): Promise<void>;
    dispose(): void;
    private _drainQueue;
    private _invalidateSnapshotsForDirectionChange;
    private _runQueue;
    private _renderOne;
    private _waitForRuntimeConfig;
}
