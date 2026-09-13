import type { IGalleryProjection } from '@univerjs/core';
import type { IBaseCanvasRenderLayer } from '../../render/base-view-render-controller';
import { CanvasBaseViewRenderController } from '../../render/base-view-render-controller';
export declare class GalleryRenderController extends CanvasBaseViewRenderController<IGalleryProjection> {
    constructor();
    protected buildRenderLayers(projection: IGalleryProjection): IBaseCanvasRenderLayer[];
}
