import { Disposable } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { SheetPrintInterceptorService } from '@univerjs/sheets-ui';
import { SheetDrawingShapeRenderController } from './sheet-shape-render.controller';
/** Adds visible sheet shapes to the isolated print scene and tracks their async fills. */
export declare class SheetShapePrintingController extends Disposable {
    private readonly _sheetPrintInterceptorService;
    private readonly _drawingManagerService;
    private readonly _shapeRenderController;
    constructor(_sheetPrintInterceptorService: SheetPrintInterceptorService, _drawingManagerService: IDrawingManagerService, _shapeRenderController: SheetDrawingShapeRenderController);
    private _initPrinting;
}
