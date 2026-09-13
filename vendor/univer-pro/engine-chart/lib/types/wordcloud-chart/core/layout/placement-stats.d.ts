import type { IWordCloudLayoutStats, IWordCloudPlacedWord } from '../../types';
import type { IPreparedWordCloudWord, IWordCloudLayoutConfig } from '../types/layout';
import type { IWordCloudTryPlaceResult } from './placement-types';
export declare function createPlacementStats(): IWordCloudLayoutStats;
export declare function recordPlacementResult(stats: IWordCloudLayoutStats | undefined, result: IWordCloudTryPlaceResult): void;
export declare function recordSkippedPlacementResult(stats: IWordCloudLayoutStats | undefined, count?: number): void;
export declare function finalizePlacementStats(stats: IWordCloudLayoutStats, words: readonly IPreparedWordCloudWord[], placed: Iterable<IWordCloudPlacedWord>, config: IWordCloudLayoutConfig, durationMs: number): void;
