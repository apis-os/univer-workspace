import type { IShape3D, IShapeRect, IShapeScene3D } from '@univerjs-pro/engine-shape';
import { UniverRenderingContext } from '@univerjs/engine-render';
export interface IShapeText3DRenderCache {
    signature?: string;
    canvas?: HTMLCanvasElement;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
interface IShapeText3DRenderOptions {
    signature: string;
    scene3d?: IShapeScene3D;
    shape3d?: IShape3D;
    baseColor?: string;
    textRect: IShapeRect;
    drawFront: (ctx: UniverRenderingContext) => boolean;
    drawMask: (ctx: UniverRenderingContext) => boolean;
}
export declare function disposeShapeText3DRenderCache(cache?: IShapeText3DRenderCache): void;
export declare function renderShapeText3D(ctx: UniverRenderingContext, options: IShapeText3DRenderOptions, cache?: IShapeText3DRenderCache): boolean;
export {};
