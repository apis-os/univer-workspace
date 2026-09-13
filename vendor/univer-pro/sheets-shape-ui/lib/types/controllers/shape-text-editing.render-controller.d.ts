import type { Workbook } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { MobileShapeEditorService } from '@univerjs-pro/shape-editor-ui';
import { SheetsShapeService } from '@univerjs-pro/sheets-shape';
import { Disposable, IContextService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { ShapeTextEditingService } from '../services/shape-text-editing.service';
export type ShapeDoubleClickEditMode = 'desktop-text' | 'mobile-formula' | 'mobile-text';
export declare function resolveShapeDoubleClickEditMode(options: {
    formula: boolean;
    line: boolean;
    mobile: boolean;
}): ShapeDoubleClickEditMode | null;
export declare class ShapeTextEditingRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _shapeTextEditingService;
    private readonly _mobileShapeEditorService;
    private readonly _drawingManagerService;
    private readonly _contextService;
    private _sheetsShapeService;
    private _lastEditingShapeKey;
    constructor(_context: IRenderContext<Workbook>, _shapeTextEditingService: ShapeTextEditingService, _mobileShapeEditorService: MobileShapeEditorService, _drawingManagerService: IDrawingManagerService, _contextService: IContextService, _sheetsShapeService: SheetsShapeService);
    private _initEvents;
    private _initSelection;
    private _initEditingParams;
}
