import type { BoardModel } from '@univerjs-pro/boards';
import type { IBoardSelectionPoint } from '../utils/board-selection-interaction.util';
import { IBoardElementService } from '@univerjs-pro/boards';
import { IPermissionService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IBoardElementStateService } from './board-element-state.service';
import { IBoardUIStateService } from './board-ui-state.service';
export interface IBoardPointerSelectionOptions {
    boardModel: BoardModel | null | undefined;
    start: IBoardSelectionPoint;
    end: IBoardSelectionPoint;
    dragSelection: boolean;
    preciseSelection: boolean;
    invertSelection?: boolean;
}
export declare class BoardSelectionService {
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _renderManagerService;
    private readonly _permissionService;
    private readonly _uiStateService;
    constructor(_boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _renderManagerService: Pick<IRenderManagerService, 'getRenderUnitById'>, _permissionService: IPermissionService, _uiStateService: IBoardUIStateService);
    selectByPointerGesture(options: IBoardPointerSelectionOptions): boolean;
    private _canEditElement;
    private _createRenderBoundsResolver;
    private _createRenderHitTester;
    private _resolveInvertedSelection;
}
