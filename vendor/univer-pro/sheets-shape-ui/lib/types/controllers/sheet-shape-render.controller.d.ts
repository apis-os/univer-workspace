import type { IShapeFormulaIdentity } from '@univerjs-pro/shape-editor';
import type { IDrawingShapeData } from '@univerjs-pro/sheets-shape';
import type { Scene } from '@univerjs/engine-render';
import { ShapeFormulaService } from '@univerjs-pro/shape-editor';
import { SheetsShapeService } from '@univerjs-pro/sheets-shape';
import { Disposable, IImageIoService, IURLImageService, LocaleService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { DrawingShape } from '../view-model/drawing-shape';
export declare class SheetDrawingShapeRenderController extends Disposable {
    private readonly _drawingManagerService;
    private readonly _sheetsShapeService;
    private readonly _localeService;
    private readonly _imageIoService;
    private readonly _urlImageService;
    private readonly _shapeFormulaService;
    private readonly _formulaShapes;
    constructor(_drawingManagerService: IDrawingManagerService, _sheetsShapeService: SheetsShapeService, _localeService: LocaleService, _imageIoService: IImageIoService, _urlImageService: IURLImageService, _shapeFormulaService: ShapeFormulaService);
    /** The optional collector lets print callers wait for asynchronous picture fills. */
    renderDrawingShape(drawingShapeParam: IDrawingShapeData, scene: Scene, options?: {
        resourceCollector?: {
            add: (resource: Promise<unknown>) => void;
        };
    }): DrawingShape[] | undefined;
    private _formulaKey;
    refreshFormulaPresentation(shape: DrawingShape, identity: IShapeFormulaIdentity): void;
    refreshShapeFillImage(shape: DrawingShape): void;
    /**
     * If the shape has PictureFill, resolve the image (from cache or network) and
     * inject it into the DrawingShape so that _draw() can pass it to renderOption.
     */
    private _loadShapePictureFill;
    private _loadAndSetImage;
}
