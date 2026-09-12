import type { IShapeFormulaLastValueGuard, IShapeHostAdapter, IShapeHostChange, IShapeRef, IShapeScope, IShapeSnapshot, IShapeUpdateInput } from '@univerjs-pro/engine-shape';
import type { IMutationInfo } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IBoardShapeCreateInput } from '../board.type';
import { ICommandService, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
import { IBoardElementService } from '../services/board-element.service';
/** Adapts Board Shape and Connector elements to the common Shape host contract. */
export declare class BoardShapeHostAdapter implements IShapeHostAdapter {
    private readonly _commandService;
    private readonly _boardElementService;
    private readonly _instanceService;
    readonly hostType = UniverInstanceType.UNIVER_BOARD;
    constructor(_commandService: ICommandService, _boardElementService: IBoardElementService, _instanceService: IUniverInstanceService);
    get shapeChanged$(): Observable<IShapeHostChange>;
    /** Returns one Board Shape or Connector as a detached common snapshot. */
    getShape(ref: IShapeRef): IShapeSnapshot | null;
    /** Lists Board Shapes and Connectors in Board element order. */
    listShapes(scope: IShapeScope): IShapeSnapshot[];
    listShapesInUnit(unitId: string): IShapeSnapshot[];
    /** Creates a Board Shape or Connector through the existing synchronous Board operation. */
    createShape(scope: IShapeScope, input: IBoardShapeCreateInput): IShapeSnapshot | null;
    /** Creates Shapes and Connectors through one atomic Board operation. */
    createShapes(scope: IShapeScope, inputs: IBoardShapeCreateInput[]): IShapeSnapshot[] | null;
    /** Applies a common Shape update through the existing synchronous Board operation. */
    updateShape(ref: IShapeRef, input: IShapeUpdateInput): boolean;
    createFormulaLastValueMutation(ref: IShapeRef, guard: IShapeFormulaLastValueGuard, lastValue: Parameters<NonNullable<IShapeHostAdapter['createFormulaLastValueMutation']>>[2]): IMutationInfo | null;
    /** Removes a Board Shape or Connector synchronously. */
    removeShape(ref: IShapeRef): boolean;
    /** Moves a Board Shape or Connector to the front. */
    bringToFront(ref: IShapeRef): boolean;
    /** Moves a Board Shape or Connector forward by one position. */
    bringForward(ref: IShapeRef): boolean;
    /** Moves a Board Shape or Connector backward by one position. */
    sendBackward(ref: IShapeRef): boolean;
    /** Moves a Board Shape or Connector to the back. */
    sendToBack(ref: IShapeRef): boolean;
    /** Moves a Board Shape or Connector to a zero-based element order index. */
    setZOrder(ref: IShapeRef, index: number): boolean;
    private _getElement;
    private _toSnapshot;
    private _connectorToSnapshot;
    private _getConnectorRoute;
    private _getEndpointPoint;
    private _createShapeElement;
    private _createBasicShape;
    private _createConnector;
    private _updateBasicShape;
    private _updateConnector;
    private _arrange;
}
