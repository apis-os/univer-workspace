import type { IOperation } from '@univerjs/core';
export type BoardElementOrderPlacement = 'front' | 'forward' | 'backward' | 'back';
interface IReorderBoardElementsOperationBaseParams {
    unitId: string;
    subUnitId: string;
    elementIds: string[];
}
export type IReorderBoardElementsOperationParams = IReorderBoardElementsOperationBaseParams & ({
    placement: BoardElementOrderPlacement;
    zOrder?: never;
} | {
    placement?: never;
    zOrder: number;
});
export declare const ReorderBoardElementsOperation: IOperation<IReorderBoardElementsOperationParams>;
export {};
