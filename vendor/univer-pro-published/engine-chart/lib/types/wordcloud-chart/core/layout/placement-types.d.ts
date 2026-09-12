import type { IWordCloudLayoutStats } from '../../types';
import type { ICollisionCandidate, ICollisionEngine } from '../collision/engine';
import type { WordCloudFailureCache } from '../collision/failure-cache';
import type { IWordCloudShapeProfile } from '../shape/shape-profile';
import type { IWordCloudLayoutConfig, IWordCloudLayoutGrid, IWordCloudLayoutRuntime, IWordCloudPlacement } from '../types/layout';
import type { PlacementWordManager } from './placement-word-manager';
export interface IWordCloudPlacementContext {
    readonly config: IWordCloudLayoutConfig;
    readonly runtime: IWordCloudLayoutRuntime;
    readonly grid: IWordCloudLayoutGrid;
    readonly shapeGrid: Uint8Array;
    readonly shapeProfile?: IWordCloudShapeProfile;
    readonly collisionEngine: ICollisionEngine;
    readonly wordManager?: PlacementWordManager;
    readonly failureCache: WordCloudFailureCache;
    readonly candidatePoints?: readonly ICollisionCandidate[];
    readonly fineCandidatePoints?: readonly ICollisionCandidate[];
    readonly stats?: IWordCloudLayoutStats;
}
export interface IWordCloudTryPlaceResult {
    readonly placement?: IWordCloudPlacement;
    readonly candidate?: ICollisionCandidate;
    readonly tryCount: number;
    readonly rejectByBounds: number;
    readonly rejectByCollision: number;
    readonly rejectByShape: number;
    readonly exhausted: boolean;
}
