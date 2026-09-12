import type { IOperation } from '@univerjs/core';
export interface IInsertBoardTableOperationParams {
    unitId: string;
    subUnitId: string;
    left: number;
    top: number;
    elementId?: string;
    laneId?: string;
    parentId?: string;
    rows?: number;
    columns?: number;
    width?: number;
    height?: number;
    diagramPreset?: string;
}
export declare const InsertBoardTableOperation: IOperation<IInsertBoardTableOperationParams>;
