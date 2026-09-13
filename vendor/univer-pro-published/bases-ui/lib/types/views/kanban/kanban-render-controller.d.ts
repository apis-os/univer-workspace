import type { IKanbanProjection } from '@univerjs/core';
import type { IBaseCanvasRenderLayer } from '../../render/base-view-render-controller';
import { CanvasBaseViewRenderController } from '../../render/base-view-render-controller';
export declare class KanbanRenderController extends CanvasBaseViewRenderController<IKanbanProjection> {
    constructor();
    protected buildRenderLayers(projection: IKanbanProjection): IBaseCanvasRenderLayer[];
}
