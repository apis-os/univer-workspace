import type { IWordCloudBounds, IWordCloudClipMask, IWordCloudEncodedWord, IWordCloudLayoutMask, IWordCloudMaskGrid, IWordCloudTextMeasurer } from '../../types';
import type { ICollisionFootprint, WordCloudCollisionShape } from '../collision/engine';
import type { IPlacementSearchPolicy } from '../layout/search-plan';
export interface IWordCloudLayoutGrid {
    readonly width: number;
    readonly height: number;
    readonly cellSize: number;
    readonly cols: number;
    readonly rows: number;
    readonly data: Uint8Array;
}
export interface IWordCloudLayoutRuntime {
    readonly measurer: IWordCloudTextMeasurer;
    readonly mask?: IWordCloudLayoutMask;
    readonly maskGrid?: IWordCloudMaskGrid;
}
export interface IWordCloudLayoutConfig {
    readonly width: number;
    readonly height: number;
    readonly cellSize: number;
    readonly minFontSize: number;
    readonly padding: number;
    readonly maxCandidateChecks: number;
    readonly failureCacheLimit: number;
    readonly ringCount: number;
    readonly candidateStep: number;
    readonly drawOutOfBound: boolean;
    readonly seed: string;
    readonly seedHash: number;
    readonly collisionShape: WordCloudCollisionShape;
    readonly shapeSampleSize?: number;
    readonly shapeInsideRatio?: number;
    readonly shapePaddingRatio?: number;
    readonly placementSearchPolicy?: IPlacementSearchPolicy;
    readonly wordShrink?: {
        readonly initialRatio: number;
        readonly fontSizeLimitMin: number;
    };
}
export interface IPreparedWordCloudWord {
    readonly source: IWordCloudEncodedWord;
    readonly rank: number;
    readonly baseFontSize: number;
}
export interface IBoxFootprint {
    readonly key: string;
    readonly staticKey?: string;
    readonly width: number;
    readonly height: number;
    readonly rawWidth: number;
    readonly rawHeight: number;
    readonly angle: number;
    readonly halfWidth: number;
    readonly halfHeight: number;
    readonly aabbHalfWidth: number;
    readonly aabbHalfHeight: number;
    readonly axisX: readonly [number, number];
    readonly axisY: readonly [number, number];
    readonly rel: Int32Array;
    readonly minDc: number;
    readonly maxDc: number;
    readonly minDr: number;
    readonly maxDr: number;
    readonly corners: ReadonlyArray<readonly [number, number]>;
    readonly shapeSamplePoints: ReadonlyArray<readonly [number, number]>;
}
export interface IWordCloudPlacement {
    readonly word: IWordCloudEncodedWord;
    readonly phase: 1 | 2;
    readonly rank: number;
    readonly x: number;
    readonly y: number;
    readonly rawWidth: number;
    readonly rawHeight: number;
    readonly bounds: IWordCloudBounds;
    readonly clipBounds?: IWordCloudBounds;
    readonly clipMask?: IWordCloudClipMask;
    readonly footprint: ICollisionFootprint;
    readonly fontSize: number;
    readonly rotate: number;
}
