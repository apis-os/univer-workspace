import type { ISheetDrawingTransformExtension, ISheetDrawingTransformExtensionResult, ISheetDrawingTransformPlan } from '@univerjs/sheets-drawing';
import { Disposable } from '@univerjs/core';
import { SheetDrawingTransformPlanService } from '@univerjs/sheets-drawing';
import { SheetShapeHostAdapter } from '../adapters/sheet-shape-host.adapter';
import { SheetsShapeService } from './sheet-shape-services';
export declare class SheetShapeDrawingTransformExtension extends Disposable implements ISheetDrawingTransformExtension {
    private readonly _shapeService;
    private readonly _shapeAdapter;
    constructor(_shapeService: SheetsShapeService, _shapeAdapter: SheetShapeHostAdapter, transformPlanService: SheetDrawingTransformPlanService);
    transform(plan: ISheetDrawingTransformPlan): ISheetDrawingTransformExtensionResult;
    private _planDeletes;
    private _planConnector;
    private _resolveBinding;
    private _toSnapshot;
    private _applyUpdate;
}
