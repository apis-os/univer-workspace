import { ChartModelService } from '@univerjs-pro/sheets-chart';
import { Disposable, ICommandService, LocaleService } from '@univerjs/core';
import { SheetPrintInterceptorService } from '@univerjs/sheets-ui';
import { ChartRenderService } from '../services/chart-render.service';
import { ISheetsChartUIService } from '../services/sheets-chart-ui.service';
export declare class ChartRenderController extends Disposable {
    private readonly _chartModelService;
    private readonly _chartRenderService;
    private readonly _localeService;
    private readonly _chartUIService;
    private readonly _commandService;
    private readonly _sheetPrintInterceptorService;
    private readonly _pendingMutationConfigRenders;
    private readonly _pendingDataUpdateChartIds;
    constructor(_chartModelService: ChartModelService, _chartRenderService: ChartRenderService, _localeService: LocaleService, _chartUIService: ISheetsChartUIService, _commandService: ICommandService, _sheetPrintInterceptorService: SheetPrintInterceptorService);
    private _initPrinting;
    private _init;
    private _listenChartUpdateMutations;
    private _renderAfterChartUpdateMutation;
    private _renderWhenConfigReady;
    private _renderChartModel;
}
