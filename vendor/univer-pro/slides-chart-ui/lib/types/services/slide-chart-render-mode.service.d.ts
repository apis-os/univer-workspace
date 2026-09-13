import type { ISlideChartEditSession } from './slide-chart-edit-session.service';
import { ChartRenderMode } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
export interface ISlideChartRenderModeChange {
    chartId: string;
    mode: ChartRenderMode;
}
export declare class SlideChartRenderModeService extends Disposable {
    private _activeChartId;
    private readonly _modeChanged$;
    readonly modeChanged$: import("rxjs").Observable<ISlideChartRenderModeChange>;
    getRenderMode(chartId: string): ChartRenderMode;
    setActiveDomChart(session: ISlideChartEditSession | null): void;
    dispose(): void;
}
