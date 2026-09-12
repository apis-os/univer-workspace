export declare const BOARD_FLOATING_DRAWER_RIGHT = 20;
export declare const BOARD_FLOATING_DRAWER_GAP = 20;
export declare const BOARD_FLOATING_DRAWER_WIDTH = 388;
export declare const BOARD_FLOATING_DRAWER_MIN_WIDTH = 320;
export declare const BOARD_FLOATING_DRAWER_MAX_WIDTH = 420;
export declare const BOARD_FLOATING_DRAWER_Z_INDEX = 19;
export interface IBoardFloatingPanelReservedRect {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface IBoardFloatingPanelViewportRect {
    height: number;
    width: number;
}
export interface IBoardFloatingPanelLayoutInput {
    bottomControlRect?: IBoardFloatingPanelReservedRect | null;
    direction?: 'ltr' | 'rtl';
    leftToolbarRect?: IBoardFloatingPanelReservedRect | null;
    maxWidth?: number;
    minWidth?: number;
    preferredWidth?: number;
    topControlRect?: IBoardFloatingPanelReservedRect | null;
    viewportRect: IBoardFloatingPanelViewportRect;
}
export interface IBoardFloatingPanelLayout {
    bottom: number;
    right: number;
    top: number;
    width: number;
}
export declare function resolveBoardFloatingPanelLayout(input: IBoardFloatingPanelLayoutInput): IBoardFloatingPanelLayout;
