import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ICommand } from '@univerjs/core';
export interface IUpdateDocShapeDataCommandParams {
    unitId: string;
    shapeId: string;
    shapeType?: ShapeTypeEnum;
    shapeData?: IShapeData;
    /** Replaces the complete Shape data instead of merging a patch. */
    replaceShapeData?: boolean;
    oldShapeJSON: {
        oldShapeData?: IShapeData;
        oldShapeType?: ShapeTypeEnum;
    };
}
export declare const UpdateDocShapeDataCommand: ICommand;
