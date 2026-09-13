import type { IChartImageExportOptions } from '@univerjs-pro/chart-ui';
import type { ChartElementEventHandler, ChartElementEventType, ChartRuntimeStyle, ChartStyle, IChartConfig, IChartHost, IChartHostRect, IChartInstance, IChartModelBinding, IChartRenderInstance } from '@univerjs-pro/engine-chart';
import type { IDisposable } from '@univerjs/core';
import { ChartRenderMode, ChartThemeService, IChartRenderModelManagerService } from '@univerjs-pro/engine-chart';
import { Disposable, LocaleService } from '@univerjs/core';
export interface ISlideChartRenderSpecResult {
    spec: Record<string, unknown>;
    chartConfig: IChartConfig;
    chartStyle: ChartRuntimeStyle;
    hostStyle: {
        fill?: string;
        stroke?: string;
        border?: {
            color?: string;
            width?: number;
        };
        radius?: number;
    };
}
export interface ISlideChartRenderInput {
    chartConfig: IChartConfig;
    chartStyle: ChartRuntimeStyle;
}
export declare class SlideChartRenderService extends Disposable {
    private readonly _localeService;
    private readonly _chartThemeService;
    private readonly _renderModelManager;
    private readonly _chartInstanceMap;
    private readonly _chartEventHandlers;
    private readonly _chartEventSubscriptions;
    private readonly _chartElementEditMode;
    private readonly _lastImageDataUrlMap;
    private readonly _lastRenderInputMap;
    constructor(_localeService: LocaleService, _chartThemeService: ChartThemeService, _renderModelManager: IChartRenderModelManagerService);
    createChartInstance(): IChartInstance;
    createChartInstance(mode: ChartRenderMode): IChartRenderInstance;
    render(runtime: IChartModelBinding, host: IChartHost): Promise<void>;
    renderDataUpdate(runtime: IChartModelBinding, host: IChartHost, duration: number): Promise<void>;
    setElementEditMode(chartId: string, enabled: boolean): void;
    on(chartId: string, type: ChartElementEventType, handler: ChartElementEventHandler): IDisposable;
    disposeChartInstance(chartId: string): void;
    exportImage(chartId: string, options?: IChartImageExportOptions): Promise<string | undefined>;
    createRenderInput(runtime: IChartModelBinding): ISlideChartRenderInput;
    createRenderSpec(runtime: IChartModelBinding, rect: IChartHostRect, chartInstance?: IChartInstance): ISlideChartRenderSpecResult;
    getHostStyle(chartStyle: ChartStyle): ISlideChartRenderSpecResult['hostStyle'];
    applyHostStyle(host: HTMLElement, hostStyle: ISlideChartRenderSpecResult['hostStyle']): void;
    private _getOrCreateChartRenderInstance;
    private _disposeChartRenderInstance;
    private _bindChartEventHandlers;
    private _bindChartEventHandler;
    private _disposeChartEventSubscription;
    private _disposeChartEventSubscriptions;
    private _createChartRenderInstanceContext;
    dispose(): void;
}
