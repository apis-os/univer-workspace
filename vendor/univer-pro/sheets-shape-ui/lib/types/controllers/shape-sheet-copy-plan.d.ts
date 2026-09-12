import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IDrawingParam } from '@univerjs/core';
export interface IShapeModelCopySource {
    shapeType: ShapeTypeEnum;
    shapeData: IShapeData;
}
export interface IShapeModelCopyPlanEntry {
    targetShapeId: string;
    source: IShapeModelCopySource;
}
export interface IShapeModelCopyPlanScope {
    unitId: string;
    sourceSubUnitId: string;
    targetSubUnitId: string;
}
export declare function createShapeModelCopyPlan(copyContext: Map<string, unknown> | undefined, shapes: readonly IDrawingParam[], scope: IShapeModelCopyPlanScope, getSource: (shape: IDrawingParam) => IShapeModelCopySource | undefined): IShapeModelCopyPlanEntry[];
