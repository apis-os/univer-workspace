import type { IShapeCreateInput, IShapeFormulaLastValueGuard, IShapeHostAdapter, IShapeHostChangeStream, IShapeRef, IShapeScope, IShapeSnapshot, IShapeUpdateInput } from '@univerjs-pro/engine-shape';
import type { IMutationInfo } from '@univerjs/core';
import { ICommandService, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
import { SheetsShapeService } from '../services/sheet-shape-services';
export declare class SheetShapeHostAdapter implements IShapeHostAdapter {
    private readonly _commandService;
    private readonly _shapeService;
    private readonly _drawingService;
    private readonly _instanceService;
    readonly hostType = UniverInstanceType.UNIVER_SHEET;
    constructor(_commandService: ICommandService, _shapeService: SheetsShapeService, _drawingService: ISheetDrawingService, _instanceService: IUniverInstanceService);
    get shapeChanged$(): IShapeHostChangeStream;
    getShape(ref: IShapeRef): IShapeSnapshot | null;
    listShapes(scope: IShapeScope): IShapeSnapshot[];
    listShapesInUnit(unitId: string): IShapeSnapshot[];
    createShape(scope: IShapeScope, input: IShapeCreateInput): IShapeSnapshot | null;
    updateShape(ref: IShapeRef, input: IShapeUpdateInput): boolean;
    createFormulaLastValueMutation(ref: IShapeRef, guard: IShapeFormulaLastValueGuard, lastValue: Parameters<NonNullable<IShapeHostAdapter['createFormulaLastValueMutation']>>[2]): IMutationInfo | null;
    removeShape(ref: IShapeRef): boolean;
    bringToFront(ref: IShapeRef): boolean;
    bringForward(ref: IShapeRef): boolean;
    sendBackward(ref: IShapeRef): boolean;
    sendToBack(ref: IShapeRef): boolean;
    setZOrder(ref: IShapeRef, index: number): boolean;
    private _arrange;
}
