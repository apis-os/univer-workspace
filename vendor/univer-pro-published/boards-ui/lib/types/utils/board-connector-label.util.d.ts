import type { IBoardConnectorData, IBoardConnectorLabel, IBoardConnectorPoint } from '@univerjs-pro/boards';
import type { BoardConnectorPathCommand, IResolveBoardConnectorRoutePointsOptions } from './board-connector-routing.util';
import { HorizontalAlign } from '@univerjs/core';
export declare const BOARD_CONNECTOR_LABEL_DEFAULT_WIDTH = 96;
export declare const BOARD_CONNECTOR_LABEL_DEFAULT_HEIGHT = 28;
export declare const BOARD_CONNECTOR_LABEL_DEFAULT_PATH_RATIO = 0.5;
export declare const BOARD_CONNECTOR_LABEL_TEXT_PADDING_X = 6;
export declare const BOARD_CONNECTOR_LABEL_TEXT_PADDING_Y = 3;
export interface IBoardConnectorLabelRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function resolveBoardConnectorLabelBounds(rect: IBoardConnectorLabelRect, angle: number): IBoardConnectorLabelRect;
export declare function sampleBoardConnectorPathCommands(commands: readonly BoardConnectorPathCommand[]): IBoardConnectorPoint[];
export declare function resolveBoardConnectorLabelPathPoints(connectorData: IBoardConnectorData, options?: IResolveBoardConnectorRoutePointsOptions): IBoardConnectorPoint[];
/** Tests the oriented boxes, not their larger axis-aligned envelopes. Edge contact is not overlap. */
export declare function doBoardConnectorLabelRectsOverlap(first: IBoardConnectorLabelRect, firstAngle: number, second: IBoardConnectorLabelRect, secondAngle: number): boolean;
export declare function resolveBoardConnectorLabelHorizontalAlign(label: IBoardConnectorLabel): HorizontalAlign;
export declare function resolveBoardConnectorLabelRect(points: readonly IBoardConnectorPoint[], label: IBoardConnectorLabel | undefined, measuredSize?: {
    width: number;
    height: number;
}): IBoardConnectorLabelRect;
/** True when the endpoint inset and label extent cannot be honored before the path midpoint clamp. */
export declare function isBoardConnectorLabelEndpointConstrained(points: readonly IBoardConnectorPoint[], label: IBoardConnectorLabel, measuredSize: {
    width: number;
    height: number;
}): boolean;
export declare function resolveBoardConnectorLabelAngle(points: readonly IBoardConnectorPoint[], label: IBoardConnectorLabel, measuredSize?: {
    width: number;
    height: number;
}): number;
/** Preserves the requested center using the same directed tangent as painting and text orientation. */
export declare function resolveBoardConnectorLabelCenterUpdate(points: readonly IBoardConnectorPoint[], label: IBoardConnectorLabel, point: IBoardConnectorPoint, measuredSize?: {
    width: number;
    height: number;
}): IBoardConnectorLabel;
export declare function resolveBoardConnectorLabelDragUpdate(points: readonly IBoardConnectorPoint[], label: IBoardConnectorLabel, point: IBoardConnectorPoint, snapToRoute?: boolean, measuredSize?: {
    width: number;
    height: number;
}): IBoardConnectorLabel;
export declare function resolveBoardConnectorLabelSnapUpdate(points: readonly IBoardConnectorPoint[], label: IBoardConnectorLabel, measuredSize?: {
    width: number;
    height: number;
}): IBoardConnectorLabel;
