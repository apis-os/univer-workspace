import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ICommand } from '@univerjs/core';
import type { ISheetCommandSharedParams } from '@univerjs/sheets';
export interface ISetShapeDrawingDataCommandParams extends ISheetCommandSharedParams {
    shapeId: string;
    shapeType: ShapeTypeEnum;
    shapeData?: IShapeData;
    name?: string;
    description?: string;
    position: {
        x: number;
        y: number;
    };
    width: number;
    height: number;
    rotation?: number;
    flipX?: boolean;
    flipY?: boolean;
    visible: boolean;
    selectable: boolean;
}
export declare const SetShapeDrawingDataCommand: ICommand;
