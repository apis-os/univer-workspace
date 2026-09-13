import type { IMutationInfo, IOperation } from '@univerjs/core';
import type { IBoardContainerElement, IBoardElementTransform, IBoardSwimlaneData } from '../../board.type';
import type { IBoardElementData } from '../../services/board-element.service';
export interface ISetBoardSwimlaneLanesOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
    swimlane: IBoardSwimlaneData;
    transform?: IBoardElementTransform;
}
export declare function createSwimlaneLaneChildUpdateMutations(unitId: string, subUnitId: string, elementData: Record<string, IBoardElementData>, currentElementData: IBoardElementData & {
    element: IBoardContainerElement;
}, nextElement: IBoardContainerElement): {
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
};
export declare const SetBoardSwimlaneLanesOperation: IOperation<ISetBoardSwimlaneLanesOperationParams>;
