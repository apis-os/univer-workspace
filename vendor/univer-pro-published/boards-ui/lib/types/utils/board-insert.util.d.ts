import type { IBoardPageElement } from '@univerjs-pro/boards';
import type { IBoardPendingInsert } from '../services/board-ui-state.service';
export interface IBoardInsertPoint {
    x: number;
    y: number;
}
export interface IBoardInsertRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function resolveBoardContainerDragInsertRect(start: IBoardInsertPoint, end: IBoardInsertPoint): IBoardInsertRect;
export declare function resolveBoardPendingInsertDragRect(pendingInsert: IBoardPendingInsert, start: IBoardInsertPoint, end: IBoardInsertPoint): IBoardInsertRect | null;
export declare function createBoardElementFromPendingInsert(options: {
    pendingInsert: IBoardPendingInsert | null;
    point: IBoardInsertPoint;
    rect?: IBoardInsertRect | null;
}): IBoardPageElement | null;
export declare function resolveBoardPendingInsertPreviewRect(options: {
    pendingInsert: IBoardPendingInsert | null;
    point: IBoardInsertPoint;
    rect?: IBoardInsertRect | null;
}): IBoardInsertRect | null;
