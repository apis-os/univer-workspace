import type { IOperation } from '@univerjs/core';
export interface IOpenSlideShapeFormatPanelOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
}
export interface ICloseSlideShapeFormatPanelOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
}
export declare const OpenSlideShapeFormatPanelOperation: IOperation<IOpenSlideShapeFormatPanelOperationParams>;
export declare const CloseSlideShapeFormatPanelOperation: IOperation<ICloseSlideShapeFormatPanelOperationParams>;
