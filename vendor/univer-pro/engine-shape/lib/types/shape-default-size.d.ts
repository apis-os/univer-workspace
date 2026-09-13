import { ShapeTypeEnum } from './shape-enum';
export declare const SHAPE_DEFAULT_INSERT_BASE_SIZE = 100;
export interface IShapeDefaultInsertSize {
    width: number;
    height: number;
}
export declare const SHAPE_DEFAULT_INSERT_SIZE: Record<ShapeTypeEnum, IShapeDefaultInsertSize>;
export declare function resolveShapeDefaultAspectRatio(shapeType: ShapeTypeEnum | string | null | undefined): number | undefined;
export declare function resolveShapeDefaultInsertSize(shapeType: ShapeTypeEnum | string | null | undefined, baseSize?: number): IShapeDefaultInsertSize | undefined;
