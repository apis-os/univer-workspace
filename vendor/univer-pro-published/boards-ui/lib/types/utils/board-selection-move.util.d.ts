import type { IBoardElementData } from '@univerjs-pro/boards';
export interface IBoardSelectionMoveDelta {
    x: number;
    y: number;
}
export interface IBoardElementSelectionMoveResult {
    elementId: string;
    element: IBoardElementData['element'];
    transform: IBoardElementData['transform'];
}
export interface IResolveBoardElementSelectionMoveOptions {
    selectedIds: string[];
    elementData: Record<string, IBoardElementData>;
    delta: IBoardSelectionMoveDelta;
}
export declare function resolveBoardElementSelectionMove(options: IResolveBoardElementSelectionMoveOptions): IBoardElementSelectionMoveResult[];
