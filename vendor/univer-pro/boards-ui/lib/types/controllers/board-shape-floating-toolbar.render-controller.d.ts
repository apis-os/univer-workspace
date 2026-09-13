import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { RxDisposable } from '@univerjs/core';
import { BoardCanvasPopManagerService } from '../services/board-canvas-pop-manager.service';
import { IBoardElementStateService } from '../services/board-element-state.service';
import { IBoardInkEditService } from '../services/board-ink-edit.service';
import { BoardInteractionSurfaceService } from '../services/board-interaction-surface.service';
import { BoardTextEditingService } from '../services/board-text-editing.service';
export declare class BoardShapeFloatingToolbarRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _boardCanvasPopManagerService;
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _boardTextEditingService;
    private readonly _inkEditService;
    private readonly _interactionSurfaceService;
    private _popupDisposable;
    private _popupSelectionKey;
    constructor(_renderContext: IRenderContext<UnitModel>, _boardCanvasPopManagerService: BoardCanvasPopManagerService, _boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _boardTextEditingService: BoardTextEditingService, _inkEditService: IBoardInkEditService, _interactionSurfaceService: BoardInteractionSurfaceService);
    dispose(): void;
    private _init;
    private _clearPopup;
    private _clearPopupIfSelectionChanged;
    private _isPopupSelectionStillActive;
    private _buildPopupSelectionKey;
    private _showPopupForSelection;
    private _resolveSelectedEntry;
}
