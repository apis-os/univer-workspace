import type { BoardModel, IAddBoardElementOperationParams, IAddBoardElementsOperationParams, IBoardPageElement } from '@univerjs-pro/boards';
import type { IBoardInsertPoint, IBoardInsertRect } from '../utils/board-insert.util';
import type { IBoardPendingInsert } from './board-ui-state.service';
import { IBoardElementService } from '@univerjs-pro/boards';
import { ICommandService } from '@univerjs/core';
import { IBoardElementStateService } from './board-element-state.service';
import { BoardTextEditingService } from './board-text-editing.service';
import { IBoardUIStateService } from './board-ui-state.service';
export interface IBoardInsertPendingElementOptions {
    boardModel: BoardModel | null | undefined;
    pendingInsert: IBoardPendingInsert | null | undefined;
    point: IBoardInsertPoint;
    rect?: IBoardInsertRect | null;
}
export interface IBoardInsertElementsOptions {
    fitContainerId?: string;
    captureExistingElements?: boolean;
}
export interface IBoardInsertElementAtPointOptions {
    boardModel: BoardModel | null | undefined;
    element: IBoardPageElement | null | undefined;
    point: IBoardInsertPoint;
    insertIndex?: number;
}
export declare class BoardElementInsertService {
    private readonly _commandService;
    private readonly _elementStateService;
    private readonly _uiStateService;
    private readonly _boardElementService;
    private readonly _boardTextEditingService;
    constructor(_commandService: ICommandService, _elementStateService: IBoardElementStateService, _uiStateService: IBoardUIStateService, _boardElementService: IBoardElementService, _boardTextEditingService: BoardTextEditingService);
    insertElement(params: IAddBoardElementOperationParams): Promise<boolean>;
    insertElements(params: IAddBoardElementsOperationParams, options?: IBoardInsertElementsOptions): Promise<boolean>;
    insertElementAtPoint(options: IBoardInsertElementAtPointOptions): Promise<boolean>;
    insertPendingElement(options: IBoardInsertPendingElementOptions): Promise<boolean>;
    private _resolvePointInsertedElementContainerCapture;
    private _openTextEditingForInsertedElement;
    private _hasDuplicateInsertIds;
    private _hasBlockedParent;
    private _hasInvalidKnownFitContainer;
}
