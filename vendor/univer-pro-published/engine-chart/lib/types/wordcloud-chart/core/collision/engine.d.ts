import type { IWordCloudBounds, IWordCloudClipMask, IWordCloudEncodedWord, IWordCloudTextMeasurer, IWordCloudTextSprite } from '../../types';
import type { IWordCloudLayoutGrid } from '../types/layout';
export type WordCloudCollisionShape = 'box' | 'glyph';
export type WordCloudRejectReason = 'collision' | 'shape';
export interface ICollisionEngineStats {
    readonly spatialQueryCount: number;
    readonly avgNearbyBoxCount: number;
    readonly aabbRejectCount: number;
    readonly satTestCount: number;
    readonly satCollisionCount: number;
    readonly shapeSampleCheckCount?: number;
    readonly centerInsideRejectCount?: number;
    readonly centerBlockCacheHitCount?: number;
    readonly pixelCanPlaceCallCount?: number;
    readonly pixelCanPlaceRejectCount?: number;
    readonly pixelIsShapeBlockedCallCount?: number;
    readonly pixelSpriteCacheHit?: number;
    readonly pixelSpriteCacheMiss?: number;
}
export interface ICollisionTextStyle {
    readonly width: number;
    readonly height: number;
    readonly padding: number;
    readonly dpr?: number;
    readonly sprite?: IWordCloudTextSprite;
}
export interface ICollisionCandidate {
    readonly index: number;
    readonly row: number;
    readonly col: number;
    readonly x: number;
    readonly y: number;
}
export interface ICollisionFootprint {
    readonly key: string;
    readonly staticKey?: string;
    readonly width: number;
    readonly height: number;
    readonly rawWidth: number;
    readonly rawHeight: number;
    readonly angle: number;
}
export interface ICollisionShapeEngine<TFootprint extends ICollisionFootprint = ICollisionFootprint> {
    readonly collisionShape: WordCloudCollisionShape;
    readonly cacheCollisionFailures?: boolean;
    createFootprint(word: IWordCloudEncodedWord, style: ICollisionTextStyle, rotation: number): TFootprint;
    getBounds(footprint: TFootprint, candidate: ICollisionCandidate): IWordCloudBounds;
    canPossiblyPlace?(footprint: TFootprint): boolean;
    getPossibleRejectReason?(footprint: TFootprint): WordCloudRejectReason;
    isInsideLayout?(footprint: TFootprint, candidate: ICollisionCandidate, width: number, height: number): boolean;
    canPlace(footprint: TFootprint, candidate: ICollisionCandidate): boolean;
    canPlaceBounds?(footprint: TFootprint, bounds: IWordCloudBounds): boolean;
    isShapeBlocked?(footprint: TFootprint, candidate: ICollisionCandidate): boolean;
    getClipBounds?(footprint: TFootprint, candidate: ICollisionCandidate): IWordCloudBounds | undefined;
    getClipMask?(footprint: TFootprint, candidate: ICollisionCandidate): IWordCloudClipMask | undefined;
    getStats?(): ICollisionEngineStats;
    commit(footprint: TFootprint, candidate: ICollisionCandidate): void;
}
export type ICollisionEngine<TFootprint extends ICollisionFootprint = ICollisionFootprint> = ICollisionShapeEngine<TFootprint>;
export interface ICollisionEngineContext {
    readonly grid: IWordCloudLayoutGrid;
    readonly shapeGrid: Uint8Array;
    readonly measurer: IWordCloudTextMeasurer;
    readonly drawOutOfBound?: boolean;
}
export declare function normalizeCollisionShape(shape: unknown): WordCloudCollisionShape;
export declare function createCollisionShapeEngine(shape: WordCloudCollisionShape, context: ICollisionEngineContext): ICollisionShapeEngine;
