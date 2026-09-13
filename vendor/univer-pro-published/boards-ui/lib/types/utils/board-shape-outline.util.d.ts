import type { IBoardConnectorPoint } from '@univerjs-pro/boards';
import type { IBasicShapeData } from '@univerjs-pro/engine-shape';
export interface IBoardShapeOutlineBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IBoardShapeOutlineSegment {
    start: IBoardConnectorPoint;
    end: IBoardConnectorPoint;
}
export interface IBoardShapeNearestBoundaryPoint {
    outlineIndex?: number;
    segmentIndex: number;
    segmentT: number;
    boundaryRatio?: number;
    x: number;
    y: number;
    distance: number;
    normal: IBoardConnectorPoint;
}
export interface IBoardShapePathOutlineSegment extends IBoardShapeOutlineSegment {
    outlineIndex: number;
    segmentIndex: number;
    startLength: number;
    length: number;
    normal?: IBoardConnectorPoint;
}
export interface IBoardShapePathOutline {
    segments: IBoardShapePathOutlineSegment[];
    totalLength: number;
}
export interface IResolveBoardShapePathOutlineOptions {
    shapeType: string | undefined;
    bounds: IBoardShapeOutlineBounds;
    shapeData?: IBasicShapeData;
}
export interface IResolveBoardShapePathBoundaryPointOptions extends IResolveBoardShapePathOutlineOptions {
    outlineIndex?: number;
    segmentIndex: number;
    segmentT: number;
    boundaryRatio?: number;
}
export declare function normalizeBoardVector(vector: IBoardConnectorPoint): IBoardConnectorPoint;
export declare function clampBoardValue(value: number, min: number, max: number): number;
export declare function resolveBoardShapePathOutline(options: IResolveBoardShapePathOutlineOptions): IBoardShapePathOutline | null;
export declare function resolveBoardShapePolygonOutlineVertices(shapeType: string | undefined, bounds: IBoardShapeOutlineBounds): IBoardConnectorPoint[] | null;
export declare function resolveBoardPolygonBoundarySegment(vertices: readonly IBoardConnectorPoint[], segmentIndex: number): IBoardShapeOutlineSegment;
export declare function resolveBoardPointOnSegment(start: IBoardConnectorPoint, end: IBoardConnectorPoint, t: number): IBoardConnectorPoint;
export declare function resolveBoardClockwisePolygonSegmentNormal(start: IBoardConnectorPoint, end: IBoardConnectorPoint): IBoardConnectorPoint;
export declare function resolveNearestBoardPolygonBoundaryPoint(point: IBoardConnectorPoint, vertices: readonly IBoardConnectorPoint[]): IBoardShapeNearestBoundaryPoint | null;
export declare function resolveNearestBoardShapeBoundaryPoint(point: IBoardConnectorPoint, options: IResolveBoardShapePathOutlineOptions): IBoardShapeNearestBoundaryPoint | null;
export declare function resolveBoardShapeBoundaryPoint(options: IResolveBoardShapePathBoundaryPointOptions): IBoardShapeNearestBoundaryPoint | null;
