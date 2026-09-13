import type { IWordCloudBounds, IWordCloudClipMask, IWordCloudEncodedWord, IWordCloudTextMeasurer } from '../../types';
import type { IWordCloudLayoutGrid } from '../types/layout';
import type { IPixelBitsetSprite } from './bitset-board';
import type { ICollisionCandidate, ICollisionEngine, ICollisionFootprint, ICollisionTextStyle } from './engine';
interface IPixelSpan {
    readonly y: number;
    readonly x0: number;
    readonly x1: number;
}
export interface IPixelFootprint extends ICollisionFootprint {
    readonly anchorX: number;
    readonly anchorY: number;
    readonly pixels: Uint8Array;
    readonly sprite: IPixelBitsetSprite;
    readonly rowSpans: readonly IPixelSpan[];
}
export declare class GlyphShapeEngine implements ICollisionEngine<IPixelFootprint> {
    private readonly _grid;
    private readonly _shapeGrid;
    private readonly _measurer;
    private readonly _cacheLimit;
    private readonly _clipToShape;
    readonly collisionShape: "glyph";
    readonly cacheCollisionFailures = false;
    private readonly _spriteCache;
    private readonly _board;
    private readonly _shapeBoard;
    private _lastClip;
    constructor(_grid: IWordCloudLayoutGrid, _shapeGrid: Uint8Array, _measurer: IWordCloudTextMeasurer, _cacheLimit?: number, _clipToShape?: boolean);
    createFootprint(word: IWordCloudEncodedWord, style: ICollisionTextStyle, rotation: number): IPixelFootprint;
    getBounds(footprint: IPixelFootprint, candidate: ICollisionCandidate): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    canPossiblyPlace(footprint: IPixelFootprint): boolean;
    getPossibleRejectReason(footprint: IPixelFootprint): 'shape' | 'collision';
    isInsideLayout(footprint: IPixelFootprint, candidate: ICollisionCandidate, width: number, height: number): boolean;
    canPlace(footprint: IPixelFootprint, candidate: ICollisionCandidate): boolean;
    canPlaceBounds(footprint: IPixelFootprint, bounds: IWordCloudBounds): boolean;
    isShapeBlocked(footprint: IPixelFootprint, candidate: ICollisionCandidate): boolean;
    getClipBounds(footprint: IPixelFootprint, candidate: ICollisionCandidate): IWordCloudBounds | undefined;
    getClipMask(footprint: IPixelFootprint, candidate: ICollisionCandidate): IWordCloudClipMask | undefined;
    private canPlaceAt;
    commit(footprint: IPixelFootprint, candidate: ICollisionCandidate): void;
    private getClippedPlacement;
}
export {};
