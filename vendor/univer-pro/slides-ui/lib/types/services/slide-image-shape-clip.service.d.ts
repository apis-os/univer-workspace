import type { Nullable } from '@univerjs/core';
import type { IImageShapeClipService, IShapeClipBounds, UniverRenderingContext } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
/**
 * Slide-side shape clip service for image clipping by shape.
 * Keeps implementation in the same package and avoids extra delegate injection wiring.
 */
export declare class SlideImageShapeClipService extends Disposable implements IImageShapeClipService {
    private readonly _shapeModelCache;
    applyShapeClip(ctx: UniverRenderingContext, prstGeom: string, width: number, height: number, adjustValues?: Nullable<Record<string, number>>): IShapeClipBounds | false;
    dispose(): void;
}
