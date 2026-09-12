import { ChartModelService, SheetsChartService } from '@univerjs-pro/sheets-chart';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
export declare class ChartSheetChangeController extends Disposable {
    private _univerInstanceService;
    private readonly _sheetInterceptorService;
    private readonly _sheetDrawingService;
    private readonly _chartModelService;
    private readonly _sheetsChartService;
    constructor(_univerInstanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _sheetDrawingService: ISheetDrawingService, _chartModelService: ChartModelService, _sheetsChartService: SheetsChartService);
    private _initSheetChange;
}
