import { Disposable } from '@univerjs/core';
import { DocPrintInterceptorService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { DocDrawingShapeRenderController } from './doc-shape-render.controller';
/** Adds visible document shapes to each isolated print scene. */
export declare class DocShapePrintingController extends Disposable {
    private readonly _docPrintInterceptorService;
    private readonly _drawingManagerService;
    private readonly _shapeRenderController;
    constructor(_docPrintInterceptorService: DocPrintInterceptorService, _drawingManagerService: IDrawingManagerService, _shapeRenderController: DocDrawingShapeRenderController);
    private _initPrinting;
}
