import type { IDocShapeDrawingParam } from '@univerjs-pro/docs-shape';
import type { IShapeFormulaIdentity } from '@univerjs-pro/shape-editor';
import type { Scene } from '@univerjs/engine-render';
import { DocsShapeService } from '@univerjs-pro/docs-shape';
import { ShapeFormulaService } from '@univerjs-pro/shape-editor';
import { BooleanNumber, Disposable, IImageIoService, IURLImageService, LocaleService, PositionedObjectLayoutType } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { ShapeTextEditingService } from '../services/shape-text-editing.service';
import { DrawingShape } from '../view-model/drawing-shape';
interface IDocDrawingLayerParam {
    behindDoc?: BooleanNumber;
    behindText?: boolean | BooleanNumber;
    layoutType?: PositionedObjectLayoutType;
}
export declare function getDocDrawingShapeRenderLayerIndex(param: IDocDrawingLayerParam): number;
export declare class DocDrawingShapeRenderController extends Disposable {
    private readonly _drawingManagerService;
    private readonly _docsShapeService;
    private readonly _localeService;
    private readonly _imageIoService;
    private readonly _urlImageService;
    private readonly _shapeTextEditingService;
    private readonly _shapeFormulaService;
    private readonly _formulaShapes;
    constructor(_drawingManagerService: IDrawingManagerService, _docsShapeService: DocsShapeService, _localeService: LocaleService, _imageIoService: IImageIoService, _urlImageService: IURLImageService, _shapeTextEditingService: ShapeTextEditingService, _shapeFormulaService: ShapeFormulaService);
    renderDrawingShape(drawingShapeParam: IDocShapeDrawingParam, scene: Scene): DrawingShape[] | undefined;
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
export {};
