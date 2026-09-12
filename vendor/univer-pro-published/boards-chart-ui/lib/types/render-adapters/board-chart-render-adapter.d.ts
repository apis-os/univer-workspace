import type { IBoardElementRenderAdapter, IBoardElementRenderAdapterContext } from '@univerjs-pro/boards-ui';
import type { BaseObject } from '@univerjs/engine-render';
import { BoardChartResourceService } from '@univerjs-pro/boards-chart';
import { ThemeService } from '@univerjs/core';
import { BoardChartImageRect } from '../render-objects/board-chart-image-rect';
import { BoardChartRenderService } from '../services/board-chart-render.service';
import { BoardChartSnapshotRenderService } from '../services/board-chart-snapshot-render.service';
export declare class BoardChartRenderAdapter implements IBoardElementRenderAdapter {
    private readonly _themeService;
    private readonly _snapshotService;
    private readonly _resourceService;
    private readonly _renderService;
    readonly name = "chart";
    private readonly _snapshotRefreshers;
    constructor(_themeService: ThemeService, _snapshotService: BoardChartSnapshotRenderService, _resourceService: BoardChartResourceService, _renderService: BoardChartRenderService);
    createObject(context: IBoardElementRenderAdapterContext): BoardChartImageRect | null;
    syncObject(object: BaseObject, context: IBoardElementRenderAdapterContext & {
        preserveTransform?: boolean;
    }): boolean;
    private _watchSnapshotUpdates;
    private _requestSnapshotForObject;
    private _updateFrameStyle;
    private _resolveFrameStyle;
}
