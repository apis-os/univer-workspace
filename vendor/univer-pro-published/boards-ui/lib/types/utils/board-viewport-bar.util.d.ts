import type { IBoardViewportBarPadding } from '../config/config';
export interface IBoardViewportBarRect {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface IBoardViewportBarNavigationBounds {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface IResolvedBoardViewportBarPadding {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface IBoardViewportBarSafeArea {
    horizontalEnd?: number;
    horizontalStart?: number;
    verticalEnd?: number;
    verticalStart?: number;
}
export interface IBoardViewportBarAxisLayout {
    barRect: IBoardViewportBarRect;
    maxViewportStart: number;
    minViewportStart: number;
    travelLength: number;
    viewportStart: number;
}
export interface IBoardViewportBarLayout {
    horizontal: IBoardViewportBarAxisLayout | null;
    vertical: IBoardViewportBarAxisLayout | null;
}
export interface IResolveBoardViewportBarLayoutOptions {
    barSize: number;
    edgeOffset: number;
    horizontal: boolean;
    minBarLength: number;
    navigationBounds: IBoardViewportBarNavigationBounds;
    safeArea?: IBoardViewportBarSafeArea;
    vertical: boolean;
    viewport: IBoardViewportBarRect;
    viewportPixelSize: {
        height: number;
        width: number;
    };
}
export declare function resolveBoardViewportBarPadding(padding: number | IBoardViewportBarPadding | undefined): IResolvedBoardViewportBarPadding;
export declare function resolveBoardViewportBarNavigationBounds(contentBounds: IBoardViewportBarRect | null | undefined, viewport: IBoardViewportBarRect, padding: IResolvedBoardViewportBarPadding): IBoardViewportBarNavigationBounds;
export declare function expandBoardViewportBarNavigationBounds(current: IBoardViewportBarNavigationBounds, target: IBoardViewportBarNavigationBounds): IBoardViewportBarNavigationBounds;
export declare function resolveBoardViewportBarLayout(options: IResolveBoardViewportBarLayoutOptions): IBoardViewportBarLayout;
export declare function resolveBoardViewportStartFromBarDrag(layout: IBoardViewportBarAxisLayout, pointerDelta: number): number;
