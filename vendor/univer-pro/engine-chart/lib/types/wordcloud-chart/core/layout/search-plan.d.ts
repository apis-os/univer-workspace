import type { IWordCloudTryPlaceResult } from './placement-types';
export interface IPlacementSearchPolicy {
    readonly mandatoryFullSearchRank: number;
    readonly middleFullPrimaryRank: number;
    readonly stopTailRank: number;
    readonly minCandidateBudget: number;
    readonly recentWindowSize: number;
    readonly skipConsecutiveFailureCount: number;
    readonly stopConsecutiveFailureCount: number;
    readonly skipRecentPlacedCount: number;
    readonly stopRecentPlacedCount: number;
    readonly skipPressure: number;
    readonly stopPressure: number;
}
export declare const DEFAULT_PLACEMENT_SEARCH_POLICY: IPlacementSearchPolicy;
export declare enum PlacementSearchPlanAction {
    Process = "process",
    SkipWord = "skip-word",
    StopTail = "stop-tail"
}
export type PlacementSearchPlan = {
    readonly action: PlacementSearchPlanAction.Process;
    readonly primaryLimit: number;
    readonly fineLimit: number;
} | {
    readonly action: PlacementSearchPlanAction.SkipWord;
    readonly reason: string;
} | {
    readonly action: PlacementSearchPlanAction.StopTail;
    readonly reason: string;
};
export interface IPlacementSearchPlanInput {
    readonly rank: number;
    readonly primaryFullLimit: number;
    readonly fineFullLimit: number;
}
export declare class PlacementSearchPlanner {
    private readonly _layoutArea;
    private readonly _policy;
    private _placedBoundsArea;
    private _consecutiveFailureCount;
    private readonly _recentResults;
    constructor(_layoutArea: number, _policy?: IPlacementSearchPolicy);
    createPlan(input: IPlacementSearchPlanInput): PlacementSearchPlan;
    recordPlacementResult(result: IWordCloudTryPlaceResult): void;
    private recordProcessPlan;
    private getPressure;
    private getRecentSuccessRate;
    private getRecentPlacedCount;
    private recordRecentResult;
}
