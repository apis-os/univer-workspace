import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ICommand, IRange } from '@univerjs/core';
import type { ISheetCommandSharedParams } from '@univerjs/sheets';
export interface IInsertSheetsShapeCommandParams extends ISheetCommandSharedParams {
    shapeType: ShapeTypeEnum;
    shapeName?: string;
    range?: IRange;
    position?: {
        x: number;
        y: number;
    };
    shapeId?: string;
    shapeData?: IShapeData;
    name?: string;
    description?: string;
    width?: number;
    height?: number;
    rotation?: number;
    flipX?: boolean;
    flipY?: boolean;
    visible?: boolean;
    selectable?: boolean;
}
export declare const InsertShapeCommand: ICommand;
