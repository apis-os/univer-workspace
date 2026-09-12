import type { IOperation } from '@univerjs/core';
export interface IOpenSlideObjectListPanelOperationParams {
    unitId: string;
    subUnitId: string;
}
export interface ICloseSlideObjectListPanelOperationParams {
    unitId?: string;
    subUnitId?: string;
}
export declare const OpenSlideObjectListPanelOperation: IOperation<IOpenSlideObjectListPanelOperationParams>;
export declare const CloseSlideObjectListPanelOperation: IOperation<ICloseSlideObjectListPanelOperationParams>;
