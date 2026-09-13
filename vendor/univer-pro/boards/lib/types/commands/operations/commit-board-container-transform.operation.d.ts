import type { IOperation } from '@univerjs/core';
import type { IBoardElementTransform } from '../../board.type';
export interface ICommitBoardContainerTransformOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
    transform: IBoardElementTransform;
    interaction: 'move' | 'resize';
}
export declare const CommitBoardContainerTransformOperation: IOperation<ICommitBoardContainerTransformOperationParams>;
