import type { IDisposable } from '@univerjs/core';
import type { ISheetChartSourceRanges } from '../models/types';
import { Disposable, ICommandService } from '@univerjs/core';
import { RefRangeService } from '@univerjs/sheets';
export interface ISheetChartRangeWatcherCallbacks {
    onDataChanged(): void;
    onRangeChanged(rangeInfo: ISheetChartSourceRanges): void;
}
export declare class SheetChartRangeWatcherManager extends Disposable {
    private readonly _commandService;
    private readonly _refRangeService;
    private readonly _entries;
    constructor(_commandService: ICommandService, _refRangeService: RefRangeService);
    watch(rangeInfo: ISheetChartSourceRanges, callbacks: ISheetChartRangeWatcherCallbacks): IDisposable;
    private _publishDataChanged;
    private _publishRangeChanged;
    private _watchRange;
    private _watchSingleRange;
    private _watchMultiRange;
    private _watchSourceCommands;
    private _emptyRange;
    dispose(): void;
}
