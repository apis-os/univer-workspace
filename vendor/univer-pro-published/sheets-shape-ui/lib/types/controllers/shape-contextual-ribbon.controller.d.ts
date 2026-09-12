import { ShapeFloatingToolbarService } from '@univerjs-pro/shape-editor-ui';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMenuManagerService, IRibbonService } from '@univerjs/ui';
export declare class SheetsShapeContextualRibbonController extends Disposable {
    private readonly _menuManagerService;
    private readonly _ribbonService;
    private readonly _drawingManagerService;
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _shapeFloatingToolbarService;
    private _visible;
    constructor(_menuManagerService: IMenuManagerService, _ribbonService: IRibbonService, _drawingManagerService: IDrawingManagerService, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _shapeFloatingToolbarService: ShapeFloatingToolbarService);
    dispose(): void;
    private _update;
    private _hide;
}
