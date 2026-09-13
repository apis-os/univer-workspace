import type { ICommand } from '@univerjs/core';
export interface IOpenSlideInsertTextBoxOperationParams {
    value?: 'horizontal' | 'vertical';
    text?: string;
    fontSize?: number;
    fitToContent?: boolean;
}
export interface IOpenSlideInsertShapeOperationParams {
    value: string | number;
}
export interface IInsertSlideSmartArtOperationParams {
    value: string;
}
export interface IOpenSlideSmartArtImageOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    presentationShapeId: string;
}
export declare const InsertSlideSmartArtOperation: ICommand<IInsertSlideSmartArtOperationParams>;
export declare const OpenSlideInsertTextBoxOperation: ICommand<IOpenSlideInsertTextBoxOperationParams>;
export declare const OpenSlideInsertShapeOperation: ICommand<IOpenSlideInsertShapeOperationParams>;
export declare const CancelSlidePendingInsertOperation: ICommand;
export declare const OpenSlideInsertImageOperation: ICommand;
export declare const OpenSlideSmartArtImageOperation: ICommand<IOpenSlideSmartArtImageOperationParams>;
export declare const OpenSlideInsertChartDialogOperation: ICommand;
