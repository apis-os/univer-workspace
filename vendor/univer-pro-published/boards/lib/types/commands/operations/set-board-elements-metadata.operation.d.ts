import type { IOperation } from '@univerjs/core';
export interface ISetBoardElementMetadataPatch {
    description?: string;
    locked?: boolean;
    name?: string;
    selectable?: boolean;
    visible?: boolean;
}
export interface ISetBoardElementsMetadataOperationItem {
    elementId: string;
    metadata: ISetBoardElementMetadataPatch;
}
export interface ISetBoardElementsMetadataOperationParams {
    unitId: string;
    subUnitId: string;
    updates: ISetBoardElementsMetadataOperationItem[];
}
export declare const SetBoardElementsMetadataOperation: IOperation<ISetBoardElementsMetadataOperationParams>;
