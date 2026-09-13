import type { IHistoryComparison, IHistoryVersion } from '@univerjs-pro/edit-history';
import type { IHistoryRenderAdapter } from '@univerjs-pro/edit-history-ui';
import { BasesHistoryDiffService } from '@univerjs-pro/bases-history';
import { IBaseUIStateService } from '@univerjs-pro/bases-ui';
import { SnapshotService } from '@univerjs-pro/collaboration';
import { HistoryRenderAdapterRegistryService } from '@univerjs-pro/edit-history-ui';
import { Disposable, ICommandService, ILogService, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
import { BasesHistoryHighlightService } from './bases-history-highlight.service';
export declare class BasesHistoryRenderAdapterService extends Disposable implements IHistoryRenderAdapter {
    private readonly _diffService;
    private readonly _snapshotService;
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _baseUIStateService;
    private readonly _logService;
    private readonly _highlightService;
    readonly type = UniverInstanceType.UNIVER_BASE;
    private _changesGeneration;
    private _loadGeneration;
    private _loadQueue;
    private _unitId;
    private _changes;
    constructor(_diffService: BasesHistoryDiffService, registry: HistoryRenderAdapterRegistryService, _snapshotService: SnapshotService, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _baseUIStateService: IBaseUIStateService, _logService: ILogService, _highlightService: BasesHistoryHighlightService);
    loadRevision(unitId: string, version: IHistoryVersion): Promise<void>;
    loadChanges(unitId: string, comparison: IHistoryComparison): Promise<void>;
    close(): void;
    private _getBase;
    private _activateRevisionLocation;
}
