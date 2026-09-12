import type { WordCloudCollisionShape } from '../../core/collision/engine';
import type { IWordCloudBounds, IWordCloudClipMask, IWordCloudEncodedWord, IWordCloudLayoutResult, IWordCloudLayoutStats, IWordCloudMaskGrid, IWordCloudTextMeasurer, WordCloudShape } from '../../types';
export interface IEChartsWordCloudLayoutConfig {
    width: number;
    height: number;
    cellSize: number;
    padding: number;
    shape: WordCloudShape | string | undefined;
    rotations: number[];
    randomSeed: number;
    collisionShape: WordCloudCollisionShape;
    maskImage?: HTMLImageElement | HTMLCanvasElement | null;
    drawOutOfBound: boolean;
    shapeSampleSize?: number | null;
    shapeInsideRatio?: number | null;
    shapePaddingRatio?: number | null;
    shapeFit?: 'contain' | 'cover' | 'stretch' | 'fill';
    shapeMaskMode?: 'auto' | 'alpha' | 'luminance';
    shapeAlphaThreshold?: number | null;
    shapeLuminanceThreshold?: number | null;
    shapeInvert?: boolean;
    zoomToFitShrink: boolean;
    zoomToFitEnlarge: boolean;
    zoomToFitFontSizeLimitMin: number;
    zoomToFitFontSizeLimitMax?: number;
    zoomToFitMinShrinkRatio?: number;
}
export interface IEChartsWordCloudRenderLayout {
    dataIndex: number;
    text: string;
    name: string;
    value: number;
    cx: number;
    cy: number;
    width: number;
    height: number;
    rawWidth: number;
    rawHeight: number;
    fontSize: number;
    fontFamily: string;
    fontWeight: string | number;
    rotate: number;
    corners: Array<{
        x: number;
        y: number;
    }>;
    clipBounds?: IWordCloudBounds;
    clipMask?: IWordCloudClipMask;
    phase: 1 | 2;
}
export interface IEChartsWordCloudLayoutResult {
    placed: IEChartsWordCloudRenderLayout[];
    skipped: IWordCloudEncodedWord[];
    phase2PlacedCount: number;
    gridCells: number;
    usedCells: number;
    footprintCacheSize: number;
    failureCacheStats: {
        size: number;
        hit: number;
        miss: number;
    };
    zoomRatio: number;
    enlargeRatio: number;
    bounds?: IEChartsWordCloudLayoutBounds | null;
    stats?: IWordCloudLayoutStats;
}
export interface IEChartsWordCloudLayoutBounds {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
    cx: number;
    cy: number;
}
export declare function layoutEChartsWordsWithZoomToFit(words: readonly IWordCloudEncodedWord[], config: IEChartsWordCloudLayoutConfig, measurer: IWordCloudTextMeasurer): IEChartsWordCloudLayoutResult;
export declare function convertCoreLayoutToEChartsLayout(result: IWordCloudLayoutResult): IEChartsWordCloudLayoutResult;
export declare function buildWordCloudLayoutStats(layout: IEChartsWordCloudLayoutResult): IEChartsWordCloudLayoutResult;
export declare function createEChartsMaskGrid(maskImage: HTMLImageElement | HTMLCanvasElement | null | undefined, width: number, height: number, options: Pick<IEChartsWordCloudLayoutConfig, 'shapeFit' | 'shapeMaskMode' | 'shapeAlphaThreshold' | 'shapeLuminanceThreshold' | 'shapeInvert'>): IWordCloudMaskGrid | undefined;
export declare function estimateGlobalZoomRatio(words: readonly IWordCloudEncodedWord[], config: IEChartsWordCloudLayoutConfig, maskGrid?: IWordCloudMaskGrid): number;
