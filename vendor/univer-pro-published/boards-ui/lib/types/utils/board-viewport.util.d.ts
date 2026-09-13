export declare const BOARD_MIN_ZOOM_RATIO = 0.02;
export declare const BOARD_MAX_ZOOM_RATIO = 4;
export declare const BOARD_DEFAULT_ZOOM_RATIO = 1;
export declare const BOARD_VIEWPORT_FIT_PADDING = 96;
export interface IBoardViewportPoint {
    x: number;
    y: number;
}
export interface IBoardViewportTransform {
    zoomRatio: number;
    panOffset: IBoardViewportPoint;
}
export interface IBoardViewportRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IBoardViewportSize {
    width: number;
    height: number;
}
export interface IBoardViewportZoomConfig {
    maxZoomRatio?: number;
    minZoomRatio?: number;
}
export interface IResolveBoardViewportZoomAtPointOptions {
    viewport: IBoardViewportTransform;
    nextZoomRatio: number;
    viewportPoint: IBoardViewportPoint;
    zoom?: IBoardViewportZoomConfig;
}
export interface IResolveBoardViewportFitRectOptions {
    rect: IBoardViewportRect;
    viewportSize: IBoardViewportSize;
    padding?: number;
    zoom?: IBoardViewportZoomConfig;
}
export interface IResolveBoardViewportWorldRectOptions {
    viewport: IBoardViewportTransform;
    viewportSize: IBoardViewportSize;
    padding?: number;
}
export declare function clampBoardZoomRatio(zoomRatio: number, config?: IBoardViewportZoomConfig): number;
export declare function resolveBoardViewportZoomAtPoint(options: IResolveBoardViewportZoomAtPointOptions): IBoardViewportTransform;
export declare function resolveBoardViewportFitRect(options: IResolveBoardViewportFitRectOptions): IBoardViewportTransform;
export declare function resolveBoardViewportWorldRect(options: IResolveBoardViewportWorldRectOptions): IBoardViewportRect;
export declare function getBoardPointFromClient(element: HTMLElement, clientX: number, clientY: number, viewport: IBoardViewportTransform, zoom?: IBoardViewportZoomConfig): {
    x: number;
    y: number;
};
export declare function getBoardViewportPoint(boardPoint: IBoardViewportPoint, viewport: IBoardViewportTransform): IBoardViewportPoint;
/**
 * Maps the board world coordinate system onto the DOM overlay in one
 * compositor-friendly transform. Children of this layer keep their unscaled
 * board coordinates and dimensions.
 */
export declare function createBoardViewportWorldStyle(viewport: IBoardViewportTransform): {
    transform: string;
    transformOrigin: string;
};
