import type { IHistoryComparison, IHistoryVersion } from '@univerjs-pro/edit-history';
import type { IHistoryRenderAdapter } from '@univerjs-pro/edit-history-ui';
import { SnapshotService } from '@univerjs-pro/collaboration';
import { HistoryCanvasHighlightService, HistoryRenderAdapterRegistryService } from '@univerjs-pro/edit-history-ui';
import { SlidesHistoryDiffService } from '@univerjs-pro/slides-history';
import { Disposable, ILogService, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
export declare class SlidesHistoryRenderAdapterService extends Disposable implements IHistoryRenderAdapter {
    private readonly _diffService;
    private readonly _snapshotService;
    private readonly _univerInstanceService;
    private readonly _logService;
    private readonly _highlightService;
    readonly type = UniverInstanceType.UNIVER_SLIDE;
    private readonly _changes;
    private _changesGeneration;
    private _loadGeneration;
    private _loadQueue;
    private _unitId;
    private _activeSlideSubscription;
    constructor(_diffService: SlidesHistoryDiffService, registry: HistoryRenderAdapterRegistryService, _snapshotService: SnapshotService, _univerInstanceService: IUniverInstanceService, _logService: ILogService, _highlightService: HistoryCanvasHighlightService);
    loadRevision(unitId: string, version: IHistoryVersion): Promise<void>;
    loadChanges(unitId: string, comparison: IHistoryComparison): Promise<void>;
    close(): void;
    private _getSlide;
    private _bindActiveSlide;
    private _clearActiveSlideSubscription;
    private _renderHighlights;
    dispose(): void;
}
