import type { ShapeArrowSizeEnum, ShapeArrowTypeEnum } from '../shape-enum';
import type { IShapePoint, IShapeRelationItem } from '../shape-type';
import type { IShapeRef } from './shape-host-adapter.service';
export interface IConnectorEndpoint {
    /** Resolved endpoint in the host's document coordinate system. */
    point: IShapePoint;
    /** Target Shape connection-site binding, or `null` for a free endpoint. */
    binding: IShapeRelationItem | null;
}
export interface IConnectorArrow {
    /** Arrowhead type. */
    type: ShapeArrowTypeEnum;
    /** Optional arrowhead size. */
    size?: ShapeArrowSizeEnum;
}
export interface IConnectorShapeSnapshot {
    /** Resolved start endpoint. */
    start: IConnectorEndpoint;
    /** Resolved end endpoint. */
    end: IConnectorEndpoint;
    /** Resolved Connector path in the host's document coordinate system. */
    routePoints: IShapePoint[];
    /** Start arrowhead, or `null` when none is configured. */
    startArrow: IConnectorArrow | null;
    /** End arrowhead, or `null` when none is configured. */
    endArrow: IConnectorArrow | null;
}
/**
 * Common service contract for Connector-specific Shape reads and mutations.
 * Mutations delegate persistence to the owning host's common Shape adapter.
 */
export interface IConnectorShapeHostAdapter {
    /** Returns the resolved Connector snapshot, or `null` when it does not exist. */
    getConnector(ref: IShapeRef): IConnectorShapeSnapshot | null;
    /** Binds the start endpoint to a target Shape connection site. */
    bindStart(ref: IShapeRef, target: IShapeRelationItem): boolean;
    /** Binds the end endpoint to a target Shape connection site. */
    bindEnd(ref: IShapeRef, target: IShapeRelationItem): boolean;
    /** Unbinds the start endpoint while preserving its current visual position. */
    unbindStart(ref: IShapeRef): boolean;
    /** Unbinds the end endpoint while preserving its current visual position. */
    unbindEnd(ref: IShapeRef): boolean;
    /** Sets a free start point and removes any existing start binding. */
    setStartPoint(ref: IShapeRef, point: IShapePoint): boolean;
    /** Sets a free end point and removes any existing end binding. */
    setEndPoint(ref: IShapeRef, point: IShapePoint): boolean;
    /** Replaces the explicit Connector route points. */
    setRoutePoints(ref: IShapeRef, points: IShapePoint[]): boolean;
    /** Sets the start arrowhead type and optional size. */
    setStartArrow(ref: IShapeRef, type: ShapeArrowTypeEnum, size?: ShapeArrowSizeEnum): boolean;
    /** Sets the end arrowhead type and optional size. */
    setEndArrow(ref: IShapeRef, type: ShapeArrowTypeEnum, size?: ShapeArrowSizeEnum): boolean;
}
/** Singleton Connector service backed by the registered common Shape adapters. */
export declare const IConnectorShapeHostAdapter: import("@wendellhu/redi").IdentifierDecorator<IConnectorShapeHostAdapter>;
