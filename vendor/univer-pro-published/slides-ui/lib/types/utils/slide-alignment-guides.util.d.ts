import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { BaseObject, IAlignmentRect } from '@univerjs/engine-render';
export interface ISlideAlignmentCandidate {
    id: string;
    rect: IAlignmentRect;
    xAnchors?: readonly number[];
    yAnchors?: readonly number[];
    pageCenter?: boolean;
}
export interface ISlideAlignmentMatch {
    activeAnchor: number;
    activeAnchorIndex: number;
    axis: 'x' | 'y';
    candidate: ISlideAlignmentCandidate;
    delta: number;
    perpendicularGap: number;
    position: number;
    targetAnchorIndex: number;
}
export interface ISlideAlignmentMatches {
    x: ISlideAlignmentMatch | null;
    y: ISlideAlignmentMatch | null;
}
export declare function getSlideObjectAlignmentRect(object: BaseObject): IAlignmentRect | null;
export declare function unionSlideAlignmentRects(rects: readonly IAlignmentRect[]): IAlignmentRect | null;
export declare function createSlidePageCenterCandidates(pageRect: IAlignmentRect): ISlideAlignmentCandidate[];
export declare function isSlideAlignmentDrawing(drawing: ISlideDrawing): boolean;
export declare function intersectsSlideAlignmentRect(first: IAlignmentRect, second: IAlignmentRect): boolean;
export declare function resolveSlideAlignmentMatches(activeRect: IAlignmentRect, candidates: readonly ISlideAlignmentCandidate[], threshold: number, preferenceRange?: number): ISlideAlignmentMatches;
