import type { ChartRenderMode, ChartRuntimeStyle, ChartStyle, IChartConfig, IChartHostRect, IChartHostStyle, IChartInstance, IChartModelBinding, IChartRenderInstance } from '@univerjs-pro/engine-chart';
import { ChartThemeService, IChartRenderModelManagerService } from '@univerjs-pro/engine-chart';
import { Disposable, LocaleService } from '@univerjs/core';
export interface IDocChartRenderSpecResult {
    spec: Record<string, unknown>;
    chartConfig: IChartConfig;
    chartStyle: ChartRuntimeStyle;
    hostStyle: IChartHostStyle;
}
export interface IDocChartRenderInput {
    chartConfig: IChartConfig;
    chartStyle: ChartRuntimeStyle;
}
export declare class DocChartRenderService extends Disposable {
    private readonly _localeService;
    private readonly _chartThemeService;
    private readonly _renderModelManager;
    constructor(_localeService: LocaleService, _chartThemeService: ChartThemeService, _renderModelManager: IChartRenderModelManagerService);
    createChartInstance(): IChartInstance;
    createChartInstance(mode: ChartRenderMode): IChartRenderInstance;
    createRenderInput(runtime: IChartModelBinding): IDocChartRenderInput;
    createRenderSpec(runtime: IChartModelBinding, rect: IChartHostRect, chartInstance?: IChartInstance): IDocChartRenderSpecResult;
    getHostStyle(chartStyle: ChartStyle): IDocChartRenderSpecResult['hostStyle'];
    applyHostStyle(host: HTMLElement, hostStyle: IDocChartRenderSpecResult['hostStyle']): void;
    private _createChartRenderInstanceContext;
    dispose(): void;
}
