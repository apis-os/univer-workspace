import type { IBoardContainerElement, IBoardSwimlaneData } from '../board.type';
import type { IBoardElementData } from '../services/board-element.service';
import type { IBoardRect } from './board-container-transform.util';
export interface IBoardSwimlaneResolvedLane {
    lane: IBoardSwimlaneData['lanes'][number];
    bounds: IBoardRect;
}
export interface IBoardSwimlaneResolvedLaneRegion extends IBoardSwimlaneResolvedLane {
    headerBounds: IBoardRect | null;
    contentBounds: IBoardRect;
}
export interface IBoardSwimlaneFitRectResult {
    laneId: string;
    swimlane: IBoardSwimlaneData;
}
export declare function resolveBoardSwimlaneOrientation(orientation: unknown): IBoardSwimlaneData['orientation'];
export declare function hasBoardSwimlaneLaneChildren(elementData: Record<string, IBoardElementData>, containerId: string, laneId: string): boolean;
export declare function hasValidBoardSwimlaneData(swimlane: IBoardSwimlaneData): boolean;
export declare function normalizeBoardSwimlaneData(swimlane: IBoardSwimlaneData): IBoardSwimlaneData;
export declare function hasBoardSwimlaneLockedLaneMutation(currentSwimlane: IBoardSwimlaneData, nextSwimlane: IBoardSwimlaneData): boolean;
export declare function resolveBoardSwimlaneDataToFillBounds(container: IBoardContainerElement, outerBounds: IBoardRect): IBoardSwimlaneData | null;
export declare function resolveBoardSwimlaneLaneBounds(container: IBoardContainerElement, outerBounds: IBoardRect): IBoardSwimlaneResolvedLane[];
export declare function resolveBoardSwimlaneLaneBoundsInFilledBounds(container: IBoardContainerElement, outerBounds: IBoardRect): IBoardSwimlaneResolvedLane[];
export declare function resolveBoardSwimlaneLaneRegionsInFilledBounds(container: IBoardContainerElement, outerBounds: IBoardRect): IBoardSwimlaneResolvedLaneRegion[];
export declare function resolveBoardSwimlaneLaneRegions(container: IBoardContainerElement, outerBounds: IBoardRect): IBoardSwimlaneResolvedLaneRegion[];
export declare function resolveBoardSwimlaneLaneAtPoint(container: IBoardContainerElement, outerBounds: IBoardRect, point: {
    x: number;
    y: number;
}): IBoardSwimlaneResolvedLane | null;
export declare function resolveBoardSwimlaneLaneAtPointInFilledBounds(container: IBoardContainerElement, outerBounds: IBoardRect, point: {
    x: number;
    y: number;
}): IBoardSwimlaneResolvedLane | null;
export declare function resolveBoardSwimlaneContentLaneAtPoint(container: IBoardContainerElement, outerBounds: IBoardRect, point: {
    x: number;
    y: number;
}): IBoardSwimlaneResolvedLane | null;
export declare function resolveBoardSwimlaneContentLaneAtPointInFilledBounds(container: IBoardContainerElement, outerBounds: IBoardRect, point: {
    x: number;
    y: number;
}): IBoardSwimlaneResolvedLane | null;
export declare function resolveBoardSwimlaneLaneForRect(container: IBoardContainerElement, outerBounds: IBoardRect, rect: IBoardRect): IBoardSwimlaneResolvedLane | null;
export declare function resolveBoardSwimlaneLaneForRectInFilledBounds(container: IBoardContainerElement, outerBounds: IBoardRect, rect: IBoardRect): IBoardSwimlaneResolvedLane | null;
export declare function resolveBoardSwimlaneDataToFitRect(container: IBoardContainerElement, outerBounds: IBoardRect, rect: IBoardRect): IBoardSwimlaneFitRectResult | null;
