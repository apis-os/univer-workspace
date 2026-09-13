import type { ICollisionCandidate } from '../collision/engine';
import type { IWordCloudShapeProfile } from '../shape/shape-profile';
import type { IPreparedWordCloudWord, IWordCloudLayoutConfig, IWordCloudLayoutGrid, IWordCloudLayoutRuntime } from '../types/layout';
import type { IWordCloudPlacementContext } from './placement-types';
export interface IEnumerateCandidatePointsOptions {
    readonly grid: IWordCloudLayoutGrid;
    readonly shapeGrid: Uint8Array;
    readonly maxPoints: number;
    readonly stepCells?: number;
    readonly shapeProfile?: IWordCloudShapeProfile;
}
export declare function enumerateCandidatePoints(options: IEnumerateCandidatePointsOptions): ICollisionCandidate[];
export declare function createFineCandidatePoints(context: IWordCloudPlacementContext, primaryCandidatePoints: readonly ICollisionCandidate[]): ICollisionCandidate[];
export declare function shouldUseFinePixelCandidates(word: IPreparedWordCloudWord, config: IWordCloudLayoutConfig, runtime: IWordCloudLayoutRuntime): boolean;
export declare function getFineCandidateMultiplier(context: IWordCloudPlacementContext): number;
