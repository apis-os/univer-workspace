import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { BoardCanvasPopManagerService, BoardInteractionSurfaceService, BoardTextEditingService, IBoardElementStateService } from '@univerjs-pro/boards-ui';
import { RxDisposable } from '@univerjs/core';
export declare class BoardMindMapFloatingToolbarRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _boardCanvasPopManagerService;
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _boardTextEditingService;
    private readonly _interactionSurfaceService;
    private _popupDisposable;
    private _popupSelectionKey;
    constructor(_renderContext: IRenderContext<UnitModel>, _boardCanvasPopManagerService: BoardCanvasPopManagerService, _boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _boardTextEditingService: BoardTextEditingService, _interactionSurfaceService: BoardInteractionSurfaceService);
    dispose(): void;
    private _init;
    private _clearPopup;
    private _clearPopupIfSelectionChanged;
    private _isPopupSelectionStillActive;
    private _buildPopupSelectionKey;
    private _resolveIncomingConnectorStyle;
    private _showPopupForSelection;
    private _resolveSelectedMindMapEntryFromState;
    private _resolveSelectedEntry;
}
