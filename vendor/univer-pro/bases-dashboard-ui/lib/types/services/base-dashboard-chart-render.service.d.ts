import type { ChartRuntimeStyle, IChartHostStyle, IChartModelBinding, IChartRenderInstance } from '@univerjs-pro/engine-chart';
import { ChartThemeService, IChartRenderModelManagerService } from '@univerjs-pro/engine-chart';
import { LocaleService } from '@univerjs/core';
export declare class BaseDashboardChartRenderService {
    private readonly _localeService;
    private readonly _chartThemeService;
    private readonly _renderModelManager;
    constructor(_localeService: LocaleService, _chartThemeService: ChartThemeService, _renderModelManager: IChartRenderModelManagerService);
    createDomChartInstance(): IChartRenderInstance;
    createRenderInput(runtime: IChartModelBinding): {
        config: NonNullable<IChartModelBinding['model']['config']>;
        style: ChartRuntimeStyle;
    };
    private _createContext;
}
export declare function applyDashboardChartHostStyle(host: HTMLElement, style: IChartHostStyle): void;
