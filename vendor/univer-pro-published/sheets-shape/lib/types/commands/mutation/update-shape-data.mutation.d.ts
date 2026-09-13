import type { IShapeData, IShapeFormulaLastValueGuard, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IMutation } from '@univerjs/core';
import type { ISheetCommandSharedParams } from '@univerjs/sheets';
export interface IUpdateSheetsShapeDataMutationParams extends ISheetCommandSharedParams {
    shapeId: string;
    shapeType?: ShapeTypeEnum;
    shapeData?: IShapeData;
    replace?: boolean;
    formulaLastValueGuard?: IShapeFormulaLastValueGuard;
}
export declare const UpdateSheetsShapeDataMutation: IMutation<IUpdateSheetsShapeDataMutationParams>;
