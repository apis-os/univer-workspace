import type { IMutationInfo, IOperation } from '@univerjs/core';
import type { IBoardElementData } from '../../services/board-element.service';
export interface IFitBoardContainerToContentOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
}
export interface IFitBoardContainerToContentMutationInfosOptions extends IFitBoardContainerToContentOperationParams {
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
}
export interface IFitBoardContainerToContentMutationInfos {
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
}
export declare const FitBoardContainerToContentOperation: IOperation<IFitBoardContainerToContentOperationParams>;
export declare function createFitBoardContainerToContentMutationInfos(options: IFitBoardContainerToContentMutationInfosOptions): IFitBoardContainerToContentMutationInfos | null;
