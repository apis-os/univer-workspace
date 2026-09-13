import type { IWordCloudEncodedWord } from '../../types';
import type { ICollisionEngine, ICollisionFootprint } from '../collision/engine';
import type { IPreparedWordCloudWord, IWordCloudLayoutConfig, IWordCloudLayoutRuntime } from '../types/layout';
export interface IResolvedPlacementWord {
    readonly word: IWordCloudEncodedWord;
    readonly footprint: ICollisionFootprint;
    readonly rawWidth: number;
    readonly rawHeight: number;
    readonly fontSize: number;
    readonly rotate: number;
}
export interface IPlacementWordSource {
    resolve(): IResolvedPlacementWord;
}
export interface IPlacementWordSourceContext {
    readonly config: IWordCloudLayoutConfig;
    readonly runtime: IWordCloudLayoutRuntime;
    readonly collisionEngine: ICollisionEngine;
}
export declare class PlacementWordManager {
    private readonly _sources;
    getWord(context: IPlacementWordSourceContext, word: IPreparedWordCloudWord): IPlacementWordSource;
}
