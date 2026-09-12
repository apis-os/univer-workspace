import type { IShapeFormulaLastValueGuard, IShapeHostAdapter, IShapeHostChangeStream, IShapeRef, IShapeScope, IShapeSnapshot, IShapeUpdateInput } from '@univerjs-pro/engine-shape';
import type { IMutationInfo } from '@univerjs/core';
import type { IDocDrawingAdapter, IDocDrawingRemoveMutationInfoParams } from '@univerjs/docs-drawing';
import type { IDocShapeCreateInput } from '../common/types';
import { IConnectorShapeHostAdapter } from '@univerjs-pro/engine-shape';
import { ICommandService, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
import { DocsShapeService } from '../services/doc-shape.service';
/** Adapts document Shape resources and drawings to the common Shape host contract. */
export declare class DocShapeHostAdapter implements IShapeHostAdapter, IDocDrawingAdapter {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _shapeService;
    private readonly _connectorShapeHostAdapter;
    readonly hostType = UniverInstanceType.UNIVER_DOC;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _shapeService: DocsShapeService, _connectorShapeHostAdapter: IConnectorShapeHostAdapter);
    get shapeChanged$(): IShapeHostChangeStream;
    getShape(ref: IShapeRef): IShapeSnapshot | null;
    listShapes(scope: IShapeScope): IShapeSnapshot[];
    listShapesInUnit(unitId: string): IShapeSnapshot[];
    createShape(scope: IShapeScope, input: IDocShapeCreateInput): IShapeSnapshot | null;
    updateShape(ref: IShapeRef, input: IShapeUpdateInput): boolean;
    createFormulaLastValueMutation(ref: IShapeRef, guard: IShapeFormulaLastValueGuard, lastValue: Parameters<NonNullable<IShapeHostAdapter['createFormulaLastValueMutation']>>[2]): IMutationInfo | null;
    removeShape(ref: IShapeRef): boolean;
    bringToFront(ref: IShapeRef): boolean;
    bringForward(ref: IShapeRef): boolean;
    sendBackward(ref: IShapeRef): boolean;
    sendToBack(ref: IShapeRef): boolean;
    setZOrder(ref: IShapeRef, index: number): boolean;
    /** Re-routes every Connector bound to a basic Shape after its Docs transform changes. */
    refreshConnectedConnectors(ref: IShapeRef): boolean;
    getRemoveDrawingMutationInfos(params: IDocDrawingRemoveMutationInfoParams): {
        redoMutations: {
            id: string;
            params: {
                unitId: string;
                shapeId: string;
            };
        }[];
        undoMutations: {
            id: string;
            params: {
                unitId: string;
                shapeId: string;
                shapeType: import("@univerjs-pro/engine-shape").ShapeTypeEnum;
                shapeData: import("@univerjs-pro/engine-shape").IShapeData | undefined;
            };
        }[];
    } | null;
    private _getDocument;
    private _getDrawing;
    private _supportsTransformUpdate;
    private _buildTransformUpdates;
    private _arrange;
    private _getTextRange;
}
