import type { IWordCloudBounds, IWordCloudEncodedWord } from '../../types';
import type { ICollisionCandidate, ICollisionEngine, ICollisionFootprint } from '../collision/engine';
import type { IWordCloudLayoutConfig, IWordCloudLayoutRuntime } from '../types/layout';
export declare function isCandidateInsideLayout(collisionEngine: ICollisionEngine, footprint: ICollisionFootprint, candidate: ICollisionCandidate, config: IWordCloudLayoutConfig): boolean;
export declare function runtimeMaskNeedsBounds(word: IWordCloudEncodedWord, runtime: IWordCloudLayoutRuntime, config: IWordCloudLayoutConfig): boolean;
export declare function isCandidateInsideRuntimeMask(word: IWordCloudEncodedWord, bounds: IWordCloudBounds, runtime: IWordCloudLayoutRuntime, config: IWordCloudLayoutConfig): boolean;
