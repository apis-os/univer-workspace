import type { IGanttProjection } from '@univerjs/core';
import type { IBaseCanvasRenderLayer } from '../../render/base-view-render-controller';
import { CanvasBaseViewRenderController } from '../../render/base-view-render-controller';
export declare class GanttRenderController extends CanvasBaseViewRenderController<IGanttProjection> {
    constructor();
    protected buildRenderLayers(projection: IGanttProjection): IBaseCanvasRenderLayer[];
}
