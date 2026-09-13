import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardGuideCandidate } from './board-guide-candidates.util';
import type { IBoardSelectionRect } from './board-selection-geometry.util';
export interface IBoardAlignmentGuide {
    position: number;
    sourceElementId: string;
    sourceId: string;
}
export interface IBoardAlignmentGuides {
    vertical: IBoardAlignmentGuide[];
    horizontal: IBoardAlignmentGuide[];
}
export interface IResolveBoardElementAlignmentGuidesOptions {
    activeRect: IBoardSelectionRect;
    activeIds: string[];
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
    threshold: number;
    candidates?: readonly IBoardGuideCandidate[];
}
export interface IBoardAlignmentSnap {
    delta: {
        x: number;
        y: number;
    };
    guides: IBoardAlignmentGuides;
}
export declare function resolveBoardElementAlignmentGuides(options: IResolveBoardElementAlignmentGuidesOptions): IBoardAlignmentGuides;
export declare function resolveBoardElementAlignmentSnap(options: IResolveBoardElementAlignmentGuidesOptions): IBoardAlignmentSnap;
