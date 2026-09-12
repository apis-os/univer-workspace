import type { BoardModel, IBoardContainerElement } from '@univerjs-pro/boards';
import type { IAccessor, ICommand } from '@univerjs/core';
import type { IBoardSelectionContext } from '../../services/board-element-state.service';
export interface IBoardContainerContext {
    boardModel: BoardModel;
    selectionContext: IBoardSelectionContext;
    container: IBoardContainerElement;
    canMutate: boolean;
    hasContents: boolean;
}
export declare function resolveBoardContainerContext(accessor: IAccessor): IBoardContainerContext | null;
export declare const BoardContainerContextMenuRenameOperation: ICommand;
export declare const BoardContainerContextMenuFitOperation: ICommand;
export declare const BoardContainerContextMenuSelectContentsOperation: ICommand;
export declare const BoardContainerContextMenuToggleMembershipLockOperation: ICommand;
export declare const BoardContainerContextMenuToggleAutoResizeOperation: ICommand;
export declare const BoardContainerContextMenuDisbandOperation: ICommand;
export declare const BoardContainerContextMenuDeleteOperation: ICommand;
export declare const BOARD_CONTAINER_CONTEXT_MENU_OPERATIONS: ICommand<object, boolean>[];
