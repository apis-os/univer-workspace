import { Disposable, ICommandService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { DocDrawingShapeRenderController } from './doc-shape-render.controller';
export declare class ShapeUpdateController extends Disposable {
    private readonly _commandService;
    private readonly _renderManagerService;
    private readonly _drawingManagerService;
    private readonly _docDrawingShapeRenderController;
    constructor(_commandService: ICommandService, _renderManagerService: IRenderManagerService, _drawingManagerService: IDrawingManagerService, _docDrawingShapeRenderController: DocDrawingShapeRenderController);
    private _initialize;
    private _insertShapes;
    private _updateShape;
    private _refreshShapeData;
    private _getSceneByUnitId;
}
