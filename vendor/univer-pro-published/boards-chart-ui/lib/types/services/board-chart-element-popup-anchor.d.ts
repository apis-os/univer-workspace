import type { IChartElementEvent } from '@univerjs-pro/engine-chart';
import type { IDisposable } from '@univerjs/core';
import type { IBoundRectNoAngle } from '@univerjs/engine-render';
import type { Observable } from 'rxjs';
export interface IBoardChartElementPopupAnchorObserver extends IDisposable {
    initialRect: IBoundRectNoAngle;
    anchorRect$: Observable<IBoundRectNoAngle>;
    visible: boolean;
}
export declare function createBoardChartElementPopupAnchorObserver(event: IChartElementEvent, onHidden: () => void): IBoardChartElementPopupAnchorObserver;
