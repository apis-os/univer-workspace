import type { IShapeData, IShapeFormulaLastValueGuard, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IMutation } from '@univerjs/core';
export interface IUpdateDocShapeDataMutationParams {
    unitId: string;
    shapeId: string;
    shapeType?: ShapeTypeEnum;
    shapeData?: IShapeData;
    replaceShapeData?: boolean;
    formulaLastValueGuard?: IShapeFormulaLastValueGuard;
}
export declare const UpdateDocShapeDataMutation: IMutation<IUpdateDocShapeDataMutationParams>;
