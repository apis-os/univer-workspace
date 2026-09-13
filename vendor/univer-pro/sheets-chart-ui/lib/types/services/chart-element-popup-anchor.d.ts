import type { IChartElementEvent } from '@univerjs-pro/engine-chart';
import type { IDisposable } from '@univerjs/core';
import type { IBoundRectNoAngle } from '@univerjs/engine-render';
import type { Observable } from 'rxjs';
export interface IChartElementPopupAnchorObserver extends IDisposable {
    initialRect: IBoundRectNoAngle;
    anchorRect$: Observable<IBoundRectNoAngle>;
    visible: boolean;
}
export declare function createChartElementPopupAnchorObserver(event: IChartElementEvent, update$: Observable<unknown> | undefined, onHidden: () => void): IChartElementPopupAnchorObserver;
