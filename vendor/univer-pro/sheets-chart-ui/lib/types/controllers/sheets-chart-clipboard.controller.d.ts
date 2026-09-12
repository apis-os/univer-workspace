import { ChartModelService, SheetsChartService } from '@univerjs-pro/sheets-chart';
import { Disposable } from '@univerjs/core';
import { SheetSkeletonService } from '@univerjs/sheets';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
import { ISheetClipboardService } from '@univerjs/sheets-ui';
export declare class SheetsChartClipboardController extends Disposable {
    private readonly _sheetSkeletonService;
    private _sheetClipboardService;
    private readonly _sheetDrawingService;
    private readonly _chartModelService;
    private readonly _sheetsChartService;
    private _copyInfo;
    constructor(_sheetSkeletonService: SheetSkeletonService, _sheetClipboardService: ISheetClipboardService, _sheetDrawingService: ISheetDrawingService, _chartModelService: ChartModelService, _sheetsChartService: SheetsChartService);
    private get _focusedDrawings();
    private _initCopyPaste;
    private _createCopyInfoByRange;
    private _generatePasteMutations;
    private _generateCutPasteMutations;
    private _generateCopyPasteMutations;
    private _updateTransform;
}
