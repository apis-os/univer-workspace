import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IMutation } from '@univerjs/core';
export interface IInsertDocShapeMutationParams {
    unitId: string;
    shapeId: string;
    shapeType: ShapeTypeEnum;
    shapeData?: IShapeData;
}
export declare const InsertDocShapeMutation: IMutation<IInsertDocShapeMutationParams>;
