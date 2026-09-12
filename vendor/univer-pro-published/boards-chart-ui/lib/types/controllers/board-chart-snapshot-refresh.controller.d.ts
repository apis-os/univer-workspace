import { BoardChartModelService } from '@univerjs-pro/boards-chart';
import { Disposable } from '@univerjs/core';
import { BoardChartSnapshotRenderService } from '../services/board-chart-snapshot-render.service';
export declare class BoardChartSnapshotRefreshController extends Disposable {
    private readonly _snapshotService;
    private readonly _modelService;
    private readonly _runtimeStateSubscriptions;
    constructor(_snapshotService: BoardChartSnapshotRenderService, _modelService: BoardChartModelService);
    private _listenRuntimeData;
    private _bindRuntimeState;
    private _releaseRuntimeState;
}
