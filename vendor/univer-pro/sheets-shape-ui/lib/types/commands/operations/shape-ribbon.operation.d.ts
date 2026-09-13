import type { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ICommand } from '@univerjs/core';
interface IApplySheetsShapeQuickStyleOperationParams {
    value?: string;
    presetId?: string;
}
interface IUpdateSheetsShapeTypeOperationParams {
    value?: ShapeTypeEnum;
    shapeType?: ShapeTypeEnum;
}
export declare const ApplySheetsShapeQuickStyleOperation: ICommand<IApplySheetsShapeQuickStyleOperationParams>;
export declare const UpdateSheetsShapeTypeOperation: ICommand<IUpdateSheetsShapeTypeOperationParams>;
export {};
