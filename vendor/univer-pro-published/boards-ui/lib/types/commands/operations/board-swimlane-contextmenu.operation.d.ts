import type { BoardModel, IBoardContainerElement } from '@univerjs-pro/boards';
import type { IAccessor, ICommand } from '@univerjs/core';
import type { IBoardSelectionContext } from '../../services/board-element-state.service';
import { resolveBoardContainerToolbarSwimlaneLaneActions } from '../../utils/board-container-toolbar.util';
export interface IBoardSwimlaneLaneContext {
    boardModel: BoardModel;
    selectionContext: IBoardSelectionContext;
    container: IBoardContainerElement;
    canMutateContainer: boolean;
    laneActions: NonNullable<ReturnType<typeof resolveBoardContainerToolbarSwimlaneLaneActions>>;
}
export declare function resolveBoardSwimlaneLaneContext(accessor: IAccessor): IBoardSwimlaneLaneContext | null;
export declare const BoardSwimlaneLaneAddOperation: ICommand;
export declare const BoardSwimlaneLaneRemoveOperation: ICommand;
export declare const BoardSwimlaneLaneRemoveAndPromoteOperation: ICommand;
export declare const BoardSwimlaneLaneRemoveAndDeleteContentOperation: ICommand;
export declare const BoardSwimlaneLaneRemoveAndMovePreviousOperation: ICommand;
export declare const BoardSwimlaneLaneRemoveAndMoveNextOperation: ICommand;
export declare const BoardSwimlaneLaneRenameOperation: ICommand;
export declare const BoardSwimlaneLaneMovePreviousOperation: ICommand;
export declare const BoardSwimlaneLaneMoveNextOperation: ICommand;
export declare const BoardSwimlaneLaneCollapseOperation: ICommand;
export declare const BOARD_SWIMLANE_LANE_CONTEXT_MENU_OPERATIONS: ICommand<object, boolean>[];
