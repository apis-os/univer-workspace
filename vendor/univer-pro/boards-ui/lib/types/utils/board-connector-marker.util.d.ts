import type { IBoardConnectorMarker, IBoardConnectorPoint } from '@univerjs-pro/boards';
import type { UniverRenderingContext } from '@univerjs/engine-render';
export declare const BOARD_CONNECTOR_DEFAULT_MARKER_SIZE = 12;
export declare const BOARD_CONNECTOR_DEFAULT_MARKER_COLOR = "#1f2937";
export declare const BOARD_CONNECTOR_ENDPOINT_VISUAL_GAP = 5;
export declare const BOARD_CONNECTOR_CROSS_MARKER_CENTER_FACTOR = 0.45;
export type BoardConnectorMarkerUnderlayPolicy = 'continue-to-tip' | 'stop-at-base';
export interface IBoardConnectorMarkerGeometry {
    size: number;
    tipOffset: number;
    strokeCutback: number;
    rearExtent: number;
    forwardExtent: number;
    lateralExtent: number;
    strokeOutset: number;
    underlayPolicy: BoardConnectorMarkerUnderlayPolicy;
}
export interface IBoardConnectorMarkerPaintBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function resolveBoardConnectorMarkerSize(marker: IBoardConnectorMarker, strokeWidth: number): number;
export declare function resolveBoardConnectorMarkerGeometry(marker: IBoardConnectorMarker | undefined, strokeWidth: number): IBoardConnectorMarkerGeometry;
export declare function resolveBoardConnectorMarkerPaintBounds(marker: IBoardConnectorMarker | undefined, point: IBoardConnectorPoint, tangent: IBoardConnectorPoint, strokeWidth: number): IBoardConnectorMarkerPaintBounds | null;
export declare function resolveBoardConnectorMarkerTerminalLength(marker: IBoardConnectorMarker | undefined, strokeWidth: number, endpointGap: number, cornerExit: number): number;
export declare function getBoardConnectorMarkerTrim(marker: IBoardConnectorMarker | undefined, strokeWidth: number): number;
export declare function hitTestBoardConnectorMarker(marker: IBoardConnectorMarker | undefined, point: IBoardConnectorPoint, markerPoint: IBoardConnectorPoint, tangent: IBoardConnectorPoint, style: {
    strokeWidth: number;
}): boolean;
export declare function drawBoardConnectorMarker(ctx: UniverRenderingContext, marker: IBoardConnectorMarker | undefined, point: IBoardConnectorPoint, tangent: IBoardConnectorPoint, style: {
    stroke: string;
    strokeWidth: number;
}): void;
