import type { IWordCloudEncodedWord, IWordCloudPlacedWord } from '../../types';
import type { IWordCloudShapeProfile } from '../shape/shape-profile';
import type { IPreparedWordCloudWord, IWordCloudLayoutConfig, IWordCloudLayoutGrid, IWordCloudLayoutRuntime } from '../types/layout';
import { layoutWords } from './place-word';
export interface IWordCloudLayoutPhasesResult {
    readonly prepared: IPreparedWordCloudWord[];
    readonly placedByKey: Map<string, IWordCloudPlacedWord>;
    readonly fillingWords: IWordCloudPlacedWord[];
    readonly stats: NonNullable<ReturnType<typeof layoutWords>['stats']>;
}
export declare function createInvisibleWordCloudWord(word: IWordCloudEncodedWord): IWordCloudPlacedWord;
export declare function layoutWordCloudPhases(words: readonly IWordCloudEncodedWord[], config: IWordCloudLayoutConfig, runtime: IWordCloudLayoutRuntime, grid: IWordCloudLayoutGrid, shapeGrid: Uint8Array, shapeProfile?: IWordCloudShapeProfile): IWordCloudLayoutPhasesResult;
