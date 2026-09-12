import type { IShapeSnapshot, IShapeUpdateInput } from '../services/shape-host-adapter.service';
import type { IConnectPointInfo, IShapePoint, IShapeRelation } from '../shape-type';
/** Resolves a Shape connection site into document coordinates. */
export declare function resolveShapeConnectionPoint(snapshot: IShapeSnapshot, connectionSiteIndex: number): IConnectPointInfo | null;
/** Resolves every Connector path point into document coordinates. */
export declare function resolveConnectorRoutePoints(snapshot: IShapeSnapshot): IShapePoint[];
/** Creates routing metadata for a free Connector endpoint. */
export declare function createFreeConnectorPointInfo(connectedPoint: IShapePoint, freePoint: IShapePoint): IConnectPointInfo;
/**
 * Builds one complete Connector update from resolved endpoint routing metadata.
 * The returned patch updates geometry, transform, relation, and Connector preset atomically.
 */
export declare function buildConnectorEndpointUpdate(snapshot: IShapeSnapshot, start: IConnectPointInfo, end: IConnectPointInfo, relation?: IShapeRelation): IShapeUpdateInput | null;
/** Builds one complete Connector update from document-coordinate route points. */
export declare function buildConnectorRoutePointsUpdate(snapshot: IShapeSnapshot, routePoints: IShapePoint[], relation?: IShapeRelation): IShapeUpdateInput | null;
