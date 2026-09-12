import type { IWordCloudLayoutStats, IWordCloudPlacedWord } from '../../types';
import type { IPreparedWordCloudWord, IWordCloudPlacement } from '../types/layout';
import type { IWordCloudPlacementContext, IWordCloudTryPlaceResult } from './placement-types';
import type { PlacementSearchPlan } from './search-plan';
export declare function tryPlaceWord(context: IWordCloudPlacementContext, word: IPreparedWordCloudWord, phase: 1 | 2, rank: number, searchPlan?: Extract<PlacementSearchPlan, {
    action: 'process';
}>): IWordCloudTryPlaceResult;
export declare function placeWord(context: IWordCloudPlacementContext, word: IPreparedWordCloudWord, phase: 1 | 2, rank: number): IWordCloudPlacement | undefined;
export declare function layoutWords(words: readonly IPreparedWordCloudWord[], context: IWordCloudPlacementContext): {
    placedByKey: Map<string, IWordCloudPlacedWord>;
    stats: IWordCloudLayoutStats;
};
