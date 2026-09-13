import type { DocumentDataModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocsShapeService } from '@univerjs-pro/docs-shape';
import { Disposable, IContextService } from '@univerjs/core';
import { DocLayoutInteractionService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { ShapeTextEditingService } from '../services/shape-text-editing.service';
import { DrawingShape } from '../view-model/drawing-shape';
export declare function findPickedTarget<T>(target: unknown, isMatch: (target: unknown) => target is T): T | null;
export declare function findDrawingShapeFromPickedTarget(target: unknown): DrawingShape | null;
export declare function canDirectlyEditDocsShapeText(shapeData: {
    formulaBinding?: unknown;
} | undefined): boolean;
export declare class ShapeTextEditingRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _shapeTextEditingService;
    private readonly _drawingManagerService;
    private readonly _contextService;
    private readonly _docLayoutInteractionService;
    private _docsShapeService;
    private _lastEditingShapeKey;
    private _layoutInteraction;
    constructor(_context: IRenderContext<DocumentDataModel>, _shapeTextEditingService: ShapeTextEditingService, _drawingManagerService: IDrawingManagerService, _contextService: IContextService, _docLayoutInteractionService: DocLayoutInteractionService, _docsShapeService: DocsShapeService);
    dispose(): void;
    private _initEvents;
    private _getFocusedShapeAtPoint;
    private _initSelection;
    private _initEditingParams;
    private _endLayoutInteraction;
}
