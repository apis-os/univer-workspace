import type { ShapeArrowSizeEnum, ShapeArrowTypeEnum } from '../shape-enum';
import type { IShapePoint, IShapeRelationItem } from '../shape-type';
import type { IConnectorShapeHostAdapter, IConnectorShapeSnapshot } from './connector-shape-host-adapter.service';
import type { IShapeRef } from './shape-host-adapter.service';
import { IShapeHostAdapterRegistry } from './shape-host-adapter.service';
/**
 * Host-neutral Connector service that resolves the owning host's common Shape
 * adapter from `IShapeHostAdapterRegistry` for every operation.
 */
export declare class ConnectorShapeHostAdapter implements IConnectorShapeHostAdapter {
    private readonly _shapeAdapterRegistry;
    constructor(_shapeAdapterRegistry: IShapeHostAdapterRegistry);
    /** Returns a resolved Connector snapshot. */
    getConnector(ref: IShapeRef): IConnectorShapeSnapshot | null;
    /** Binds the start endpoint to a target Shape connection site. */
    bindStart(ref: IShapeRef, target: IShapeRelationItem): boolean;
    /** Binds the end endpoint to a target Shape connection site. */
    bindEnd(ref: IShapeRef, target: IShapeRelationItem): boolean;
    /** Unbinds the start endpoint while preserving its current visual position. */
    unbindStart(ref: IShapeRef): boolean;
    /** Unbinds the end endpoint while preserving its current visual position. */
    unbindEnd(ref: IShapeRef): boolean;
    /** Sets a free start point and removes the existing start binding. */
    setStartPoint(ref: IShapeRef, point: IShapePoint): boolean;
    /** Sets a free end point and removes the existing end binding. */
    setEndPoint(ref: IShapeRef, point: IShapePoint): boolean;
    /** Replaces the intermediate route points in document coordinates. */
    setRoutePoints(ref: IShapeRef, points: IShapePoint[]): boolean;
    /** Sets the start arrowhead type and optional size. */
    setStartArrow(ref: IShapeRef, type: ShapeArrowTypeEnum, size?: ShapeArrowSizeEnum): boolean;
    /** Sets the end arrowhead type and optional size. */
    setEndArrow(ref: IShapeRef, type: ShapeArrowTypeEnum, size?: ShapeArrowSizeEnum): boolean;
    private _updateEndpoint;
    private _getConnectorSnapshot;
    private _resolveBinding;
    private _setArrow;
    private _getShapeAdapter;
    private _getConnectorShape;
    private _getArrow;
}
