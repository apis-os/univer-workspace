import type { IHistoryComparison, IHistoryVersion } from '@univerjs-pro/edit-history';
import type { IHistoryRenderAdapter } from '@univerjs-pro/edit-history-ui';
import { BoardsHistoryDiffService } from '@univerjs-pro/boards-history';
import { SnapshotService } from '@univerjs-pro/collaboration';
import { HistoryCanvasHighlightService, HistoryRenderAdapterRegistryService } from '@univerjs-pro/edit-history-ui';
import { Disposable, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
export declare class BoardsHistoryRenderAdapterService extends Disposable implements IHistoryRenderAdapter {
    private readonly _diffService;
    private readonly _snapshotService;
    private readonly _univerInstanceService;
    private readonly _highlightService;
    readonly type = UniverInstanceType.UNIVER_BOARD;
    private readonly _changes;
    private _changesGeneration;
    private _loadGeneration;
    private _loadQueue;
    private _unitId;
    constructor(_diffService: BoardsHistoryDiffService, registry: HistoryRenderAdapterRegistryService, _snapshotService: SnapshotService, _univerInstanceService: IUniverInstanceService, _highlightService: HistoryCanvasHighlightService);
    loadRevision(unitId: string, version: IHistoryVersion): Promise<void>;
    loadChanges(unitId: string, comparison: IHistoryComparison): Promise<void>;
    close(): void;
    private _getBoard;
    private _renderHighlights;
}
