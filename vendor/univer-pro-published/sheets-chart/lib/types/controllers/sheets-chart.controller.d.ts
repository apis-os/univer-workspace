import { Disposable, ICommandService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { ChartModelService } from '../services/chart-model.service';
import { SheetsChartService } from '../services/sheets-chart.service';
export declare class SheetsChartController extends Disposable {
    private readonly _commandService;
    private readonly _sheetInterceptorService;
    private readonly _chartModelService;
    private readonly _sheetsChartService;
    constructor(_commandService: ICommandService, _sheetInterceptorService: SheetInterceptorService, _chartModelService: ChartModelService, _sheetsChartService: SheetsChartService);
    private _initCommands;
    private _initCommandInterceptor;
}
