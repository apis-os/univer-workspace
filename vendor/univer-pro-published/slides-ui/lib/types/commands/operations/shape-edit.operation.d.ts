import type { IUpdateSlideImageClipShapeOperationParams, IUpdateSlideShapeDataOperationParams, IUpdateSlideShapeStyleOperationParams, IUpdateSlideShapeTransformOperationParams } from '@univerjs-pro/slides';
import type { ICommand } from '@univerjs/core';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
export interface IUpdateSlideShapeTypeOperationParams {
    unitId?: string;
    subUnitId?: string;
    drawingId?: string;
    shapeType?: ShapeTypeEnum;
    value?: ShapeTypeEnum;
}
/** General transform update that works for any drawing type (shapes AND images). */
export declare const UpdateSlideDrawingTransformOperation: ICommand<IUpdateSlideShapeTransformOperationParams>;
export declare const UpdateSlideShapeTransformOperation: ICommand<IUpdateSlideShapeTransformOperationParams>;
export declare const UpdateSlideShapeStyleOperation: ICommand<IUpdateSlideShapeStyleOperationParams>;
export declare const UpdateSlideShapeDataOperation: ICommand<IUpdateSlideShapeDataOperationParams>;
export declare const UpdateSlideShapeTypeOperation: ICommand<IUpdateSlideShapeTypeOperationParams>;
export declare const UpdateSlideImageClipShapeOperation: ICommand<IUpdateSlideImageClipShapeOperationParams>;
