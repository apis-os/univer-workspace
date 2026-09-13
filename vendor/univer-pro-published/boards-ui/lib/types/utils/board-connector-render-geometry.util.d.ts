import type { IBoardConnectorData, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardConnectorMarkerAnchors } from './board-connector-marker-anchor.util';
import type { IBoardConnectorMarkerGeometry, IBoardConnectorMarkerPaintBounds } from './board-connector-marker.util';
import type { BoardConnectorPathCommand, IBoardConnectorRouteBounds } from './board-connector-routing.util';
export interface IBoardConnectorTerminalRenderGeometry {
    anchor: IBoardConnectorMarkerAnchors['start'];
    marker: IBoardConnectorMarkerGeometry;
    markerBounds: IBoardConnectorMarkerPaintBounds | null;
    endpointGap: number;
    strokeTrim: number;
    terminalSegmentLength: number;
    requiredTerminalLength: number;
}
export interface IBoardConnectorRenderGeometry {
    routePoints: readonly IBoardConnectorPoint[];
    pathCommands: readonly BoardConnectorPathCommand[];
    strokeRoutePoints: readonly IBoardConnectorPoint[];
    strokePathCommands: readonly BoardConnectorPathCommand[];
    start: IBoardConnectorTerminalRenderGeometry;
    end: IBoardConnectorTerminalRenderGeometry;
    strokePathLength: number;
    dashOffset: number;
    bounds: IBoardConnectorRouteBounds;
}
export interface IResolveBoardConnectorRenderGeometryOptions {
    connectorData: IBoardConnectorData;
    routePoints: readonly IBoardConnectorPoint[];
    pathCommands: readonly BoardConnectorPathCommand[];
    elementData?: Record<string, IBoardElementData>;
    fallbackBounds?: IBoardConnectorRouteBounds;
}
export declare function resolveBoardConnectorDashOffset(dash: readonly number[] | undefined, pathLength: number, hasStartMarker: boolean, hasEndMarker: boolean): number;
export declare function resolveBoardConnectorRenderGeometry(options: IResolveBoardConnectorRenderGeometryOptions): IBoardConnectorRenderGeometry | null;
