import type { IOperation } from '@univerjs/core';
export interface IOpenSlidePageBackgroundFormatPanelOperationParams {
    unitId: string;
    subUnitId: string;
}
export interface ICloseSlidePageBackgroundFormatPanelOperationParams {
    unitId: string;
    subUnitId: string;
}
export declare const OpenSlidePageBackgroundFormatPanelOperation: IOperation<IOpenSlidePageBackgroundFormatPanelOperationParams>;
export declare const CloseSlidePageBackgroundFormatPanelOperation: IOperation<ICloseSlidePageBackgroundFormatPanelOperationParams>;
