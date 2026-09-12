import type { BoardModel } from '@univerjs-pro/boards';
import type { IAccessor, ICommand, IExecutionOptions } from '@univerjs/core';
import type { IBoardSelectionContext } from '../../services/board-element-state.service';
import type { BoardShortcutRuntimeService } from '../../services/board-shortcut-runtime.service';
import { Direction } from '@univerjs/core';
interface IBoardSelectionOperationContext {
    boardModel: BoardModel;
    runtime: BoardShortcutRuntimeService | null;
    selectionContext: IBoardSelectionContext;
    selectedIds: string[];
}
export interface IBoardNudgeSelectionOperationParams {
    direction: Direction;
    distance: number;
}
export declare const BoardCopySelectionOperation: ICommand;
export declare const BoardDeleteSelectionOperation: ICommand;
export declare const BoardCutSelectionOperation: ICommand;
export declare const BoardNudgeSelectionOperation: ICommand<IBoardNudgeSelectionOperationParams>;
export declare const BOARD_SELECTION_OPERATIONS: ICommand<object, boolean>[];
export declare function resolveBoardSelectionOperationContext(accessor: IAccessor, options?: IExecutionOptions): IBoardSelectionOperationContext | null;
export {};
