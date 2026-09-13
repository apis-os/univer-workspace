import type { IBoardContainerElement } from '../board.type';
import type { IBoardRect } from './board-container-transform.util';
export interface IBoardContainerBounds {
    outerBounds: IBoardRect;
    headerBounds: IBoardRect | null;
    contentBounds: IBoardRect;
    expandedContentBounds: IBoardRect;
}
export declare function getBoardRectRight(rect: IBoardRect): number;
export declare function getBoardRectBottom(rect: IBoardRect): number;
export declare function expandBoardRect(rect: IBoardRect, padding: number): IBoardRect;
export declare function containsBoardRect(container: IBoardRect, child: IBoardRect): boolean;
export declare function intersectsBoardRect(first: IBoardRect, second: IBoardRect): boolean;
export declare function unionBoardRects(rects: readonly IBoardRect[]): IBoardRect | null;
export declare function resolveBoardContainerBounds(container: IBoardContainerElement, outerBounds: IBoardRect): IBoardContainerBounds;
export declare function resolveBoardContainerOuterBoundsForContent(container: IBoardContainerElement, currentOuterBounds: IBoardRect, requiredContentBounds: IBoardRect): IBoardRect;
