import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { BoardDomLayerService } from '@univerjs-pro/boards-ui';
import { Disposable } from '@univerjs/core';
import { BoardChartEditSessionService } from '../services/board-chart-edit-session.service';
import { BoardChartSnapshotRenderService } from '../services/board-chart-snapshot-render.service';
export declare class BoardChartSelectionController extends Disposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _editSessionService;
    private readonly _boardElementService;
    private readonly _domLayerService;
    private readonly _snapshotService;
    private _activeLayerId;
    private _activeLayerDisposable;
    private _activeChart;
    constructor(_renderContext: IRenderContext<UnitModel>, _editSessionService: BoardChartEditSessionService, _boardElementService: IBoardElementService, _domLayerService: BoardDomLayerService, _snapshotService: BoardChartSnapshotRenderService);
    dispose(): void;
    private _syncActiveChart;
    private _clearActiveLayer;
}
