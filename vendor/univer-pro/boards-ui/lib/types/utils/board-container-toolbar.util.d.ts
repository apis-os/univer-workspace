import type { IBoardContainerElement, IBoardElementData, IBoardSwimlaneData } from '@univerjs-pro/boards';
import type { IBoardFocusedSwimlaneLane } from '../services/board-element-state.service';
export interface IBoardContainerToolbarSwimlaneActionOptions {
    createId?: () => string;
    insertIndex?: number;
}
export interface IBoardContainerToolbarSwimlaneAction {
    containerId: string;
    addLane: IBoardSwimlaneData['lanes'][number];
    insertIndex: number;
}
export interface IBoardContainerToolbarSwimlaneLaneActionOptions {
    defaultToFirstLane?: boolean;
    elementData?: Record<string, IBoardElementData>;
}
export interface IBoardContainerToolbarSwimlaneLaneActions {
    containerId: string;
    laneId: string;
    title: string;
    index: number;
    laneCount: number;
    collapsed: boolean;
    locked: boolean;
    hasChildren: boolean;
    canAddAfter: boolean;
    canRemove: boolean;
    canRemoveAndPromote: boolean;
    canRemoveAndDeleteContent: boolean;
    canMovePrevious: boolean;
    canMoveNext: boolean;
    canRename: boolean;
    canToggleCollapsed: boolean;
    removeAndMovePreviousLaneId?: string;
    removeAndMoveNextLaneId?: string;
    canRemoveAndMovePrevious: boolean;
    canRemoveAndMoveNext: boolean;
}
export declare function canMoveSelectedElementsOutOfContainer(elementData: Record<string, IBoardElementData>, selectedIds: readonly string[]): boolean;
export declare function resolveBoardContainerToolbarSwimlaneAction(container: IBoardContainerElement | null | undefined, options?: IBoardContainerToolbarSwimlaneActionOptions): IBoardContainerToolbarSwimlaneAction | null;
export declare function resolveBoardContainerToolbarSwimlaneLaneActions(container: IBoardContainerElement | null | undefined, focusedLane: IBoardFocusedSwimlaneLane | null | undefined, options?: IBoardContainerToolbarSwimlaneLaneActionOptions): IBoardContainerToolbarSwimlaneLaneActions | null;
