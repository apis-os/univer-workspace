import type { IOperation } from '@univerjs/core';
export interface IOpenSlideTransitionPanelOperationParams {
    unitId: string;
    subUnitId: string;
}
export interface ICloseSlideTransitionPanelOperationParams {
    unitId: string;
    subUnitId: string;
}
export declare const OpenSlideTransitionPanelOperation: IOperation<IOpenSlideTransitionPanelOperationParams>;
export declare const CloseSlideTransitionPanelOperation: IOperation<ICloseSlideTransitionPanelOperationParams>;
