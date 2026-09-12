import type { IMutationInfo, IOperation } from '@univerjs/core';
import type { IBoardPageElement } from '../../board.type';
import { IBoardElementService } from '../../services/board-element.service';
export interface IAddBoardElementsOperationParams {
    unitId: string;
    subUnitId: string;
    elements: IBoardPageElement[];
    insertIndex?: number;
    fitContainerId?: string;
    captureExistingElements?: boolean;
}
export interface ICreateAddBoardElementsMutationInfosOptions extends IAddBoardElementsOperationParams {
    elementData: ReturnType<IBoardElementService['getElementData']>;
    elementOrder: ReturnType<IBoardElementService['getElementOrder']>;
}
export interface ICreateAddBoardElementsMutationInfosResult {
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
}
export declare const AddBoardElementsOperation: IOperation<IAddBoardElementsOperationParams>;
export declare function createAddBoardElementsMutationInfos(options: ICreateAddBoardElementsMutationInfosOptions): ICreateAddBoardElementsMutationInfosResult | null;
