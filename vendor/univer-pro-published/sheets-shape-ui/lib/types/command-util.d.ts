import type { ICxnShapeData, IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ICommandService } from '@univerjs/core';
interface IOldShapeData {
    oldShapeData?: IShapeData;
    oldShapeType?: ShapeTypeEnum;
}
export declare function updateShapeData(commandService: ICommandService, unitId: string, subUnitId: string, shapeId: string, oldShapeJSON: IOldShapeData, shapeData?: IShapeData): Promise<boolean>;
export declare function updateLineShapeData(commandService: ICommandService, unitId: string, subUnitId: string, shapeId: string, oldShapeJSON: IOldShapeData, shapeData?: ICxnShapeData): Promise<boolean>;
export {};
