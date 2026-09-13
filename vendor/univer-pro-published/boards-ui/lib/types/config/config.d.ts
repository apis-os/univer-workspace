import type { BoardToolType, IBoardPageSize } from '@univerjs-pro/boards';
import type { IBoardShapePreset } from '../common/shape-presets';
import type { IBoardElementRenderAdapter } from '../render-adapters/board-element-render-adapter';
export declare const BOARDS_UI_PLUGIN_CONFIG_KEY = "boards-ui.config";
export declare const configSymbol: unique symbol;
/** Local interaction policy, independent of document permissions and saved data. */
export declare enum BoardInteractionMode {
    Editing = "editing",
    Viewing = "viewing"
}
export interface IBoardSettings {
    collaboratorCursorsVisible?: boolean;
    /** Interval in milliseconds between shared collaborator pointer samples. @default 100 */
    collaboratorCursorShareInterval?: number;
    gridVisible?: boolean;
    quickAddEnabled?: boolean;
    preciseSelection?: boolean;
    showDimensions?: boolean;
    showToolbar?: boolean;
    /** Show the mode dropdown directly in the top-right toolbar. @default true */
    modeSwitcherVisible?: boolean;
    viewportBarEnabled?: boolean;
}
export declare const DEFAULT_BOARD_COLLABORATOR_CURSOR_SHARE_INTERVAL = 100;
export declare const DEFAULT_BOARD_SETTINGS: Required<IBoardSettings>;
export declare function resolveBoardCollaboratorCursorShareInterval(value: unknown): number;
export type BoardToolbarToolConfig = boolean | {
    enabled?: boolean;
};
export interface IBoardInteractionConfig {
    alignmentGuideThreshold?: number;
    maxZoomRatio?: number;
    minElementSize?: number;
    minZoomRatio?: number;
    pendingInsertPreviewAlpha?: number;
    resizeHandleHitPadding?: number;
    resizeHandleSize?: number;
    spacingGuideMaxDistance?: number;
    trackpadPanEnabled?: boolean;
    wheelPanFactor?: number;
    wheelZoomFactor?: number;
    wheelZoomWithModifier?: boolean;
    zoomStep?: number;
    zoomWheelFactor?: number;
}
export interface IBoardGridConfig {
    gridSize?: number;
    lineColor?: string;
    majorGridSize?: number;
    majorLineColor?: string;
}
export interface IBoardTableInsertConfig {
    cellHeight?: number;
    cellWidth?: number;
    columns?: number;
    height?: number;
    minHeight?: number;
    minWidth?: number;
    rows?: number;
    width?: number;
}
export interface IBoardChartInsertConfig {
    height?: number;
    width?: number;
}
export interface IBoardImageInsertConfig {
    fallbackHeight?: number;
    fallbackWidth?: number;
    fitRatio?: number;
    minEdge?: number;
    minPositionOffset?: number;
}
export interface IBoardInsertConfig {
    chart?: IBoardChartInsertConfig;
    image?: IBoardImageInsertConfig;
    table?: IBoardTableInsertConfig;
}
export interface IBoardShapeConfig {
    commonCount?: number;
    presets?: readonly IBoardShapePreset[];
}
export interface IBoardStickyConfig {
    colors?: readonly string[];
}
export interface IBoardRenderSceneConfig {
    minSize?: IBoardPageSize;
}
export interface IBoardViewportBarPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
export interface IBoardViewportBarConfig {
    enabled?: boolean;
    horizontal?: boolean;
    padding?: number | IBoardViewportBarPadding;
    vertical?: boolean;
}
export interface IUniverBoardsUIConfig extends Omit<IBoardSettings, 'viewportBarEnabled'> {
    /** Initial local interaction mode; this does not grant or revoke permissions. */
    interactionMode?: BoardInteractionMode;
    additionalRenderAdapters?: readonly IBoardElementRenderAdapter[];
    grid?: IBoardGridConfig;
    insert?: IBoardInsertConfig;
    interaction?: IBoardInteractionConfig;
    renderAdapters?: readonly IBoardElementRenderAdapter[];
    shape?: IBoardShapeConfig;
    sticky?: IBoardStickyConfig;
    toolbar?: {
        tools?: Partial<Record<BoardToolType, BoardToolbarToolConfig>>;
    };
    viewportBar?: IBoardViewportBarConfig;
    scene?: IBoardRenderSceneConfig;
    workbench?: {
        content?: boolean;
        footer?: boolean;
        header?: boolean;
        headerMenu?: boolean;
        toolbar?: boolean;
    };
}
export declare const defaultPluginConfig: IUniverBoardsUIConfig;
export declare function resolveBoardRenderAdapters(config?: Pick<IUniverBoardsUIConfig, 'additionalRenderAdapters' | 'renderAdapters'>): readonly IBoardElementRenderAdapter[];
