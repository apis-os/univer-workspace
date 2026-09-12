import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { BoardCanvasPopManagerService, BoardInteractionSurfaceService, IBoardElementStateService, IBoardUIStateService } from '@univerjs-pro/boards-ui';
import { RxDisposable } from '@univerjs/core';
import { BoardChartEditSessionService } from '../services/board-chart-edit-session.service';
export declare class BoardChartFloatingToolbarRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _boardCanvasPopManagerService;
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _uiStateService;
    private readonly _editSessionService;
    private readonly _interactionSurfaceService;
    private _popupDisposable;
    private _popupSelectionKey;
    constructor(_renderContext: IRenderContext<UnitModel>, _boardCanvasPopManagerService: BoardCanvasPopManagerService, _boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _uiStateService: IBoardUIStateService, _editSessionService: BoardChartEditSessionService, _interactionSurfaceService: BoardInteractionSurfaceService);
    dispose(): void;
    private _init;
    private _clearPopup;
    private _clearPopupIfSelectionChanged;
    private _isPopupSelectionStillActive;
    private _buildPopupSelectionKey;
    private _showPopupForSelection;
    private _resolveElementObject;
}
