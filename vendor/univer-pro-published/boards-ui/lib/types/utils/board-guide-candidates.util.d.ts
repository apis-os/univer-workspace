import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardSelectionRect } from './board-selection-geometry.util';
export interface IBoardGuideCandidate {
    elementId: string;
    rect: IBoardSelectionRect;
}
export interface ICreateBoardGuideCandidatesOptions {
    activeIds: readonly string[];
    bounds?: IBoardSelectionRect;
    elementData: Record<string, IBoardElementData>;
    elementOrder: readonly string[];
}
export declare function createBoardGuideCandidates(options: ICreateBoardGuideCandidatesOptions): IBoardGuideCandidate[];
