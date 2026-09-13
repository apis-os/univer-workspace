import type { ICalendarProjection } from '@univerjs/core';
import type { IBaseCanvasRenderLayer } from '../../render/base-view-render-controller';
import { CanvasBaseViewRenderController } from '../../render/base-view-render-controller';
export declare class CalendarRenderController extends CanvasBaseViewRenderController<ICalendarProjection> {
    constructor();
    protected buildRenderLayers(projection: ICalendarProjection): IBaseCanvasRenderLayer[];
}
