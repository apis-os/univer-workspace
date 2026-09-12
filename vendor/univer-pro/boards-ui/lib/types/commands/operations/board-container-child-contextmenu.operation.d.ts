import type { BoardModel, IBoardContainerElement, IBoardPageElement } from '@univerjs-pro/boards';
import type { IAccessor, ICommand } from '@univerjs/core';
import type { IBoardSelectionContext } from '../../services/board-element-state.service';
export interface IBoardContainerChildContext {
    boardModel: BoardModel;
    selectionContext: IBoardSelectionContext;
    child: IBoardPageElement;
    parentContainer: IBoardContainerElement;
    selectedIds: string[];
    focusedId: string;
    canMoveOut: boolean;
    canFitParent: boolean;
}
export declare function resolveBoardContainerChildContext(accessor: IAccessor): IBoardContainerChildContext | null;
export declare const BoardContainerChildContextMenuMoveOutOperation: ICommand;
export declare const BoardContainerChildContextMenuSelectParentOperation: ICommand;
export declare const BoardContainerChildContextMenuFitParentOperation: ICommand;
export declare const BOARD_CONTAINER_CHILD_CONTEXT_MENU_OPERATIONS: ICommand<object, boolean>[];
