import type { ChartElementEventHandler, ChartElementEventType, ChartRenderMode, ChartRuntimeStyle, ChartStyle, IChartConfig, IChartHostRect, IChartInstance, IChartModelBinding, IChartRenderInstance } from '@univerjs-pro/engine-chart';
import type { IDisposable } from '@univerjs/core';
import { ChartThemeService, IChartRenderModelManagerService } from '@univerjs-pro/engine-chart';
import { Disposable, LocaleService } from '@univerjs/core';
export interface IBoardChartRenderSpecResult {
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
export interface IBoardChartRenderInput {
    chartConfig: IChartConfig;
    chartStyle: ChartRuntimeStyle;
}
export declare class BoardChartRenderService extends Disposable {
    private readonly _localeService;
    private readonly _chartThemeService;
    private readonly _renderModelManager;
    private readonly _chartInstanceMap;
    private readonly _chartElementEditMode;
    private readonly _chartEventHandlers;
    private readonly _chartEventSubscriptions;
    constructor(_localeService: LocaleService, _chartThemeService: ChartThemeService, _renderModelManager: IChartRenderModelManagerService);
    createChartInstance(): IChartInstance;
    createChartInstance(mode: ChartRenderMode): IChartRenderInstance;
    registerChartInstance(unitId: string, chartId: string, chartInstance: IChartRenderInstance): IDisposable;
    setElementEditMode(unitId: string, chartId: string, enabled: boolean): void;
    isElementEditModeActive(unitId: string, chartId: string): boolean;
    on(unitId: string, chartId: string, type: ChartElementEventType, handler: ChartElementEventHandler): IDisposable;
    createRenderInput(runtime: IChartModelBinding): IBoardChartRenderInput;
    createRenderSpec(runtime: IChartModelBinding, rect: IChartHostRect, chartInstance?: IChartInstance): IBoardChartRenderSpecResult;
    getHostStyle(chartStyle: ChartStyle): IBoardChartRenderSpecResult['hostStyle'];
    applyHostStyle(host: HTMLElement, hostStyle: IBoardChartRenderSpecResult['hostStyle']): void;
    private _createChartRenderInstanceContext;
    private _bindChartEventHandlers;
    private _bindChartEventHandler;
    private _disposeChartEventSubscription;
    private _disposeChartEventSubscriptions;
    private _getChartRuntimeKey;
    dispose(): void;
}
