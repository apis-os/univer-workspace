import type { IOperation } from '@univerjs/core';
import { IBoardElementService } from '../../services/board-element.service';
export interface IRemoveBoardElementsOperationParams {
    unitId: string;
    subUnitId: string;
    elementIds: string[];
}
export declare function collectBoardElementIdsForRemoveWithBoundConnectors(elementData: ReturnType<IBoardElementService['getElementData']>, elementOrder: readonly string[], elementIds: readonly string[]): string[];
export declare const RemoveBoardElementsOperation: IOperation<IRemoveBoardElementsOperationParams>;
