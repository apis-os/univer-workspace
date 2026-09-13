import type { IShapePoint } from '../shape-type';
interface IPoint {
    x: number;
    y: number;
}
interface ITransformResult {
    rotation: 0 | 90 | 180 | 270;
    flipH: boolean;
    flipV: boolean;
    restorePoints: IShapePoint[];
}
export declare function resolveTransform(points: IPoint[]): ITransformResult;
export {};
