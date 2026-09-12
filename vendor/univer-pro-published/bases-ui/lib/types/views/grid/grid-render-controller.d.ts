import type { IGridProjection } from '@univerjs/core';
import type { IBaseCanvasRenderLayer } from '../../render/base-view-render-controller';
import { CanvasBaseViewRenderController } from '../../render/base-view-render-controller';
export declare class GridRenderController extends CanvasBaseViewRenderController<IGridProjection> {
    constructor();
    protected buildRenderLayers(projection: IGridProjection): IBaseCanvasRenderLayer[];
}
