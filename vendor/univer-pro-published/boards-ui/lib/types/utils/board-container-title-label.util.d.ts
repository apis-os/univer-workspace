import type { IBoardContainerElement, IBoardElementData, IBoardRect } from '@univerjs-pro/boards';
import type { ThemeService } from '@univerjs/core';
import type { ICanvasColorService } from '@univerjs/engine-render';
export declare const BOARD_CONTAINER_TITLE_LABEL_HEIGHT = 24;
export declare const BOARD_CONTAINER_TITLE_LABEL_GAP = 8;
export declare const BOARD_CONTAINER_TITLE_LABEL_PADDING_X = 10;
export declare const BOARD_CONTAINER_TITLE_LABEL_PADDING_Y = 4;
export declare const BOARD_CONTAINER_TITLE_LABEL_TEXT = "rgba(31, 41, 55, 0.92)";
export declare const BOARD_CONTAINER_TITLE_LABEL_HIT_TEXT_WIDTH_FACTOR = 8;
export declare const BOARD_CONTAINER_TITLE_LABEL_DEFAULT_FONT_SIZE = 16;
/** Derived presentation only; never written into the board snapshot. */
export declare function resolveBoardContainerTitleColors(color?: string, themeService?: ThemeService, canvasColorService?: ICanvasColorService): {
    foreground: string;
    background: string;
};
export declare function resolveBoardGenericContainerTitleFontSize(element: IBoardElementData['element']): number;
export declare function resolveBoardGenericContainerTitleLabelHeight(element: IBoardElementData['element']): number;
export declare function isGenericBoardContainerElement(element: IBoardElementData['element']): element is IBoardContainerElement;
export declare function resolveBoardGenericContainerTitle(element: IBoardElementData['element']): string;
export declare function resolveBoardGenericContainerTitleLabelBounds(element: IBoardElementData['element'], bounds: Pick<IBoardRect, 'left' | 'top' | 'width'>, measuredTextWidth?: number): IBoardRect | null;
export declare function resolveBoardGenericContainerTitleLabelWorldBounds(elementData: Record<string, IBoardElementData>, elementId: string): IBoardRect | null;
export declare function containsBoardContainerTitleLabelPoint(bounds: IBoardRect | null, point: {
    x: number;
    y: number;
}): boolean;
