import { DocChartModelService } from '@univerjs-pro/docs-chart';
import { Disposable } from '@univerjs/core';
import { DocChartSnapshotRenderService } from '../services/doc-chart-snapshot-render.service';
export declare class DocChartSnapshotRefreshController extends Disposable {
    private readonly _snapshotService;
    private readonly _modelService;
    private readonly _runtimeStateSubscriptions;
    constructor(_snapshotService: DocChartSnapshotRenderService, _modelService: DocChartModelService);
    private _listenRuntimeData;
    private _bindRuntimeState;
    private _releaseRuntimeState;
}
