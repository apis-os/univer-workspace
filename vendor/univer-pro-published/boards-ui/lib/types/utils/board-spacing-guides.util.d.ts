import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardGuideCandidate } from './board-guide-candidates.util';
import type { IBoardSelectionRect } from './board-selection-geometry.util';
export type BoardSpacingGuideAxis = 'horizontal' | 'vertical';
export interface IBoardSpacingGuidePoint {
    x: number;
    y: number;
}
export interface IBoardSpacingGuide {
    axis: BoardSpacingGuideAxis;
    distance: number;
    sourceElementId: string;
    sourceId: string;
    start: IBoardSpacingGuidePoint;
    end: IBoardSpacingGuidePoint;
    label: IBoardSpacingGuidePoint;
}
export interface IResolveBoardElementSpacingGuidesOptions {
    activeRect: IBoardSelectionRect;
    activeIds: string[];
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
    maxDistance?: number;
    candidates?: readonly IBoardGuideCandidate[];
}
export declare function resolveBoardElementSpacingGuides(options: IResolveBoardElementSpacingGuidesOptions): IBoardSpacingGuide[];
