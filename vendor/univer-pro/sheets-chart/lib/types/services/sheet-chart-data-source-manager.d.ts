import type { IDisposable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { ISheetChartDataSource, ISheetChartSourceRanges } from '../models/types';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetChartRangeWatcherManager } from './sheet-chart-range-watcher-manager';
export interface ISheetChartDataSourceHandle extends IDisposable {
    readonly dataSource: ISheetChartDataSource;
    readonly dataSource$: Observable<ISheetChartDataSource>;
    readonly dataChanged$: Observable<void>;
}
export declare class SheetChartDataSourceManager extends Disposable {
    private readonly _univerInstanceService;
    private readonly _rangeWatcherManager;
    private readonly _entries;
    private readonly _handles;
    private _isDisposed;
    constructor(_univerInstanceService: IUniverInstanceService, _rangeWatcherManager: SheetChartRangeWatcherManager);
    acquire(rangeInfo: ISheetChartSourceRanges): ISheetChartDataSourceHandle;
    refreshAll(): void;
    private _getOrCreateEntry;
    private _refreshEntry;
    private _replaceEntryRange;
    private _moveHandle;
    private _releaseHandle;
    private _disposeEntryWithoutHandles;
    private _normalizeSourceSpec;
    dispose(): void;
}
