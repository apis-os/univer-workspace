import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import type { ISlideDrawing } from '@univerjs-pro/slides';
import { SlideChartModelService } from '@univerjs-pro/slides-chart';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SlideChartRenderModeService } from './slide-chart-render-mode.service';
export interface ISlideChartEditSession {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    chartId: string;
}
export declare class SlideChartEditSessionService extends Disposable {
    private readonly _slideDrawingService;
    private readonly _modelService;
    private readonly _renderModeService;
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private _activeSession;
    private readonly _activeSession$;
    readonly activeSession$: import("rxjs").Observable<ISlideChartEditSession | null>;
    private readonly _subscriptions;
    private _activeSlideSubscription;
    private _transformStartSubscription;
    constructor(_slideDrawingService: {
        getDrawingByParam(params: {
            unitId: string;
            subUnitId: string;
            drawingId: string;
        }): ISlideDrawing | null | undefined;
        remove$?: {
            subscribe(handler: (drawings: ISlideDrawing[]) => void): {
                unsubscribe(): void;
            };
        };
    }, _modelService: Pick<SlideChartModelService, 'ensureChartModel' | 'setActiveChartRuntime'> & {
        chartModelRemoved$?: {
            subscribe(handler: (runtime: IChartModelBinding) => void): {
                unsubscribe(): void;
            };
        };
    }, _renderModeService: SlideChartRenderModeService, _univerInstanceService: Pick<IUniverInstanceService, 'focused$' | 'getUnit'>, _renderManagerService: Pick<IRenderManagerService, 'getRenderUnitById'>);
    getActiveSession(): ISlideChartEditSession | null;
    open(session: ISlideChartEditSession): boolean;
    close(): void;
    isActive(chartId: string): boolean;
    dispose(): void;
    private _initLifecycleListeners;
    private _bindActiveSlideListener;
    private _bindTransformStartListener;
}
