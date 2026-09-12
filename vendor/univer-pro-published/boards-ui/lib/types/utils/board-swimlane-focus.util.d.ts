import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardFocusedSwimlaneLane, IBoardFocusedSwimlaneLaneTarget, IBoardFocusedSwimlaneTitleTarget } from '../services/board-element-state.service';
export declare function isBoardFocusedSwimlaneLaneTarget(focus: IBoardFocusedSwimlaneLane | null | undefined): focus is IBoardFocusedSwimlaneLaneTarget;
export declare function isBoardFocusedSwimlaneTitleTarget(focus: IBoardFocusedSwimlaneLane | null | undefined): focus is IBoardFocusedSwimlaneTitleTarget;
export interface IResolveBoardFocusedSwimlaneLaneAtPointOptions {
    elementData: Record<string, IBoardElementData>;
    containerId: string;
    point: {
        x: number;
        y: number;
    };
}
export declare function resolveBoardFocusedSwimlaneLaneAtPoint(options: IResolveBoardFocusedSwimlaneLaneAtPointOptions): IBoardFocusedSwimlaneLane | null;
