import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { ICommand } from '@univerjs/core';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
interface IEnhanceParams {
    endArrow?: boolean;
    startArrow?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
}
export interface IMenuInsertShapeCommandParams {
    value: ShapeTypeEnum;
    enhanceParams?: IEnhanceParams;
    width?: number;
    height?: number;
    shapeId?: string;
    shapeData?: IShapeData;
    paragraphMenuPlacement?: 'target' | 'below';
}
export declare const MenuInsertShapeCommand: ICommand;
export {};
