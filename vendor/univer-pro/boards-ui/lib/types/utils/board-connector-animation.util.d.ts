import type { IBoardConnectorAnimation, IBoardConnectorData, IBoardConnectorPoint } from '@univerjs-pro/boards';
import type { BoardConnectorPathCommand } from './board-connector-routing.util';
export interface IBoardConnectorAnimationPath {
    points: readonly IBoardConnectorPoint[];
    cumulativeLengths: readonly number[];
    length: number;
}
export interface IBoardConnectorAnimationPoint {
    point: IBoardConnectorPoint;
    tangent: IBoardConnectorPoint;
}
export declare const BOARD_CONNECTOR_FOCUS_HINT_DURATION = 1500;
/** Follow an unambiguous arrow away from the focused object, without overriding existing animation. */
export declare function resolveBoardConnectorFocusDirection(data: IBoardConnectorData, focusedId: string): 1 | -1 | null;
/** Three staggered particles, with no wrap at either endpoint. */
export declare function resolveBoardConnectorFocusParticles(elapsed: number, direction: 1 | -1): number[];
export declare function createBoardConnectorAnimationPath(options: {
    pathCommands: readonly BoardConnectorPathCommand[];
    routePoints: readonly IBoardConnectorPoint[];
    roundedCornerRadius?: number;
}): IBoardConnectorAnimationPath;
export declare function resolveBoardConnectorAnimationDistance(elapsedMs: number, animation: IBoardConnectorAnimation, pathLength: number, offset?: number): number;
export declare function resolveBoardConnectorAnimationPoint(path: IBoardConnectorAnimationPath, distance: number): IBoardConnectorAnimationPoint;
export declare function resolveBoardConnectorAnimationFrameInterval(animatedConnectorCount: number): number;
