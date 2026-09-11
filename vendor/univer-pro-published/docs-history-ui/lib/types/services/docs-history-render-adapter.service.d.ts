import type { IHistoryComparison, IHistoryVersion } from '@univerjs-pro/edit-history';
import type { IHistoryRenderAdapter } from '@univerjs-pro/edit-history-ui';
import { SnapshotService } from '@univerjs-pro/collaboration';
import { DocsHistoryDiffService } from '@univerjs-pro/docs-history';
import { HistoryHighlightService, HistoryRenderAdapterRegistryService } from '@univerjs-pro/edit-history-ui';
import { Disposable, IResourceLoaderService, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
export declare class DocsHistoryRenderAdapterService extends Disposable implements IHistoryRenderAdapter {
    private readonly _diffService;
    private readonly _snapshotService;
    private readonly _resourceLoaderService;
    private readonly _univerInstanceService;
    private readonly _highlightService;
    readonly type = UniverInstanceType.UNIVER_DOC;
    private _changesGeneration;
    private _loadGeneration;
    private _loadQueue;
    constructor(_diffService: DocsHistoryDiffService, registry: HistoryRenderAdapterRegistryService, _snapshotService: SnapshotService, _resourceLoaderService: IResourceLoaderService, _univerInstanceService: IUniverInstanceService, _highlightService: HistoryHighlightService);
    loadRevision(unitId: string, version: IHistoryVersion): Promise<void>;
    loadChanges(unitId: string, comparison: IHistoryComparison): Promise<void>;
    close(): void;
    private _getDocument;
}
