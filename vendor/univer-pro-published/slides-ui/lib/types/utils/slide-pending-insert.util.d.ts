import type { IBasicShapeData, ICxnShapeData, ShapeTextWrapType } from '@univerjs-pro/engine-shape';
import type { ISlideInsertShapeOptions, ISlideInsertTextBoxOptions } from '@univerjs-pro/slides';
export interface ISlideInsertPoint {
    x: number;
    y: number;
}
export interface ISlideInsertRect {
    left: number;
    top: number;
    width: number;
    height: number;
    rotation?: number;
    flipX?: boolean;
    flipY?: boolean;
}
export interface ISlideInsertPageSize {
    width: number;
    height: number;
}
export type ISlidePendingInsert = {
    type: 'shape';
    options: ISlideInsertShapeOptions;
} | {
    type: 'text';
    options: ISlideInsertTextBoxOptions;
};
export declare function createSlideInsertShapeData(options: ISlideInsertShapeOptions & Pick<ISlideInsertTextBoxOptions, 'fontSize'> & {
    textWrap?: ShapeTextWrapType;
}): IBasicShapeData;
export declare function createSlideInsertConnectorData(options: ISlideInsertShapeOptions): ICxnShapeData;
export declare function resolveSlidePendingInsertDefaultRect(pendingInsert: ISlidePendingInsert, point: ISlideInsertPoint): ISlideInsertRect;
export declare function resolveSlidePendingInsertDragRect(pendingInsert: ISlidePendingInsert, start: ISlideInsertPoint, end: ISlideInsertPoint): ISlideInsertRect;
