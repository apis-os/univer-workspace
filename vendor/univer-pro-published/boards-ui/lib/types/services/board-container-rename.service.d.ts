import { IBoardElementService } from '@univerjs-pro/boards';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { BoardDomLayerService } from './board-dom-layer.service';
import { BoardElementEditService } from './board-element-edit.service';
import { IBoardElementStateService } from './board-element-state.service';
import { BoardInteractionSurfaceService } from './board-interaction-surface.service';
export declare const BOARD_CONTAINER_DEFAULT_TITLE = "Container";
export declare class BoardContainerRenameService extends Disposable {
    private readonly _domLayerService;
    private readonly _editService;
    private readonly _elementStateService;
    private readonly _elementService;
    private readonly _instanceService;
    private readonly _interactionSurfaceService;
    private _popupDisposable;
    private _surfaceDisposable;
    constructor(_domLayerService: BoardDomLayerService, _editService: BoardElementEditService, _elementStateService: IBoardElementStateService, _elementService: IBoardElementService, _instanceService: IUniverInstanceService, _interactionSurfaceService: BoardInteractionSurfaceService);
    dispose(): void;
    close(): void;
    openFocusedContainerRenamePopup(): boolean;
    openContainerRenamePopup(unitId: string, subUnitId: string, containerId: string): boolean;
    private _resolveContainer;
}
