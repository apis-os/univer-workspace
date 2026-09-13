import type { IShapeData } from '@univerjs-pro/engine-shape';
export interface IShapeTextBoxResizeRect {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface IShapeTextBoxResizePolicyResult {
    rect: IShapeTextBoxResizeRect;
    shapeData: IShapeData;
}
export declare function resolveShapeTextBoxResizePolicy(options: {
    initialRect: IShapeTextBoxResizeRect;
    naturalCrossSize?: number;
    requestedRect: IShapeTextBoxResizeRect;
    shapeData: IShapeData;
}): IShapeTextBoxResizePolicyResult | null;
