import type { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ICommand } from '@univerjs/core';
interface IApplyDocsShapeQuickStyleOperationParams {
    value?: string;
    presetId?: string;
}
interface IUpdateDocsShapeTypeOperationParams {
    value?: ShapeTypeEnum;
    shapeType?: ShapeTypeEnum;
}
export declare const ApplyDocsShapeQuickStyleOperation: ICommand<IApplyDocsShapeQuickStyleOperationParams>;
export declare const UpdateDocsShapeTypeOperation: ICommand<IUpdateDocsShapeTypeOperationParams>;
export {};
