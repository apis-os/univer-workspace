export type WordCloudColorMode = 'fixed' | 'identity' | 'palette';
export type WordCloudLayoutMode = 'default' | 'fast' | 'grid' | 'ensureMapping' | 'ensureMappingEnlarge';
export type WordCloudScaleType = 'linear' | 'sqrt' | 'log';
export declare const SUPPORTED_WORD_CLOUD_SHAPES: readonly ["cloud", "rect", "circle", "cardioid", "heart", "diamond", "triangle-forward", "triangle", "pentagon", "star"];
export type WordCloudShape = typeof SUPPORTED_WORD_CLOUD_SHAPES[number];
export declare const DEFAULT_WORD_CLOUD_SHAPE: WordCloudShape;
export type WordCloudFontSizeRange = [number, number] | 'auto';
export declare function normalizeWordCloudShape(shape: unknown): WordCloudShape;
export interface IWordCloudProtocolSpec {
    data: IWordCloudDataSource;
    fields?: Partial<IWordCloudFieldMapping>;
    transforms?: IWordCloudDataTransform[];
    encoding?: IWordCloudEncoding;
    layout?: Partial<IWordCloudLayoutOptions>;
    mark?: IWordCloudTextMarkSpec;
    tooltip?: IWordCloudTooltipSpec;
}
export interface IWordCloudChartSpec extends IWordCloudProtocolSpec {
    type: 'wordcloud';
}
export interface IWordCloudEChartsSeriesDataItem extends Record<string, unknown> {
    name?: string;
    value?: unknown;
}
export type IWordCloudEChartsMaskSource = {
    type: 'shape';
    value: WordCloudShape | string;
} | {
    type: 'image';
    value: string;
};
export interface IWordCloudEChartsSeriesOption {
    type: 'wordCloud';
    /** Selected weight-measure name carried from the compact chart-model series. */
    name?: string;
    data?: IWordCloudEChartsSeriesDataItem[];
    left?: number | string;
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    width?: number | string;
    height?: number | string;
    colorBy?: 'series' | 'data';
    gridSize?: number;
    padding?: number;
    maskSource?: IWordCloudEChartsMaskSource;
    drawOutOfBound?: boolean;
    keepAspect?: boolean;
    fontSizeRange?: WordCloudFontSizeRange;
    collisionShape?: 'box' | 'glyph';
    rotations?: number[];
    randomSeed?: number;
    textStyle?: Record<string, unknown>;
    formatter?: string | ((params: Record<string, unknown>) => unknown);
    zoomToFit?: {
        shrink?: boolean;
        enlarge?: boolean;
        fontSizeLimitMin?: number;
        fontSizeLimitMax?: number;
        minShrinkRatio?: number;
    };
}
export interface IWordCloudDataSource {
    id?: string;
    values: Array<Record<string, unknown>>;
}
export interface IWordCloudFieldMapping {
    text: string;
    value: string;
    id?: string;
    group?: string;
    color?: string;
    tooltip?: string[];
}
export type IWordCloudDataTransform = {
    type: 'filterInvalid';
} | {
    type: 'limit';
    count: number;
};
export interface IWordCloudEncoding {
    fontSize?: {
        field?: string;
        scale?: WordCloudScaleType;
        range?: WordCloudFontSizeRange;
    };
    color?: {
        field?: string;
        mode?: WordCloudColorMode;
        palette?: string[];
        fixed?: string;
    };
    rotate?: {
        angles?: number[];
        ratio?: number;
        seed?: string | number;
    };
}
export interface IWordCloudTextMarkSpec {
    fontFamily?: string;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: string | number;
    padding?: number;
    opacity?: number;
    fill?: string;
    emphasis?: Partial<IWordCloudTextMarkSpec>;
}
export interface IWordCloudTooltipSpec {
    fields?: string[];
}
export interface IResolvedWordCloudSpec extends Omit<IWordCloudProtocolSpec, 'fields' | 'transforms' | 'encoding' | 'layout' | 'mark' | 'tooltip'> {
    fields: IWordCloudFieldMapping;
    transforms: IWordCloudDataTransform[];
    encoding: IWordCloudEncoding;
    layout: IWordCloudLayoutOptions;
    mark: IWordCloudTextMarkSpec;
    tooltip: IWordCloudTooltipSpec;
}
export interface INormalizedWordCloudDatum {
    key: string;
    datumIndex: number;
    text: string;
    value: number;
    raw: Record<string, unknown>;
    group?: string;
    colorValue?: unknown;
    tooltipValues?: Record<string, unknown>;
}
export interface IWordCloudTextMarkAttrs {
    fontSize: number;
    fill?: string;
    rotate: number;
    opacity: number;
    fontFamily: string;
    fontStyle: 'normal' | 'italic' | 'oblique';
    fontWeight: string | number;
    padding: number;
}
export interface IWordCloudEncodedWord {
    key: string;
    datumIndex: number;
    text: string;
    value: number;
    raw: Record<string, unknown>;
    mark: IWordCloudTextMarkAttrs;
    rotationAngles?: number[];
}
export interface IWordCloudLayoutOptions {
    width: number;
    height: number;
    mode: WordCloudLayoutMode;
    seed: string | number;
    drawOutOfBound: boolean;
    shrinkToFit: boolean;
    minFontSize: number;
    maxAttempts: number;
    spiralStep: number;
    gridSize: number;
    maskShape: IWordCloudMaskShapeSpec;
    shapeSampleSize?: number | null;
    shapeInsideRatio?: number | null;
    shapePaddingRatio?: number | null;
    textLayoutTimes: number;
    importantWordCount: number;
    fontSizeShrinkFactor: number;
    stepFactor: number;
    globalShrinkLimit: number;
    fontSizeEnlargeFactor: number;
    fillingTimes: number;
    fillingStep: number;
    fillingXStep?: number;
    fillingYStep?: number;
    fillingInitialFontSize?: number;
    fillingDeltaFontSize?: number;
    fillingInitialOpacity: number;
    fillingDeltaOpacity: number;
    fillingDeltaFontSizeFactor: number;
    fillingRatio: number;
    minFillFontSize: number;
    minInitFontSize: number;
    wordShrink?: {
        initialRatio: number;
        fontSizeLimitMin: number;
    };
}
export interface IWordCloudMeasureResult {
    width: number;
    height: number;
    actualBoundingBoxAscent?: number;
    actualBoundingBoxDescent?: number;
    actualBoundingBoxLeft?: number;
    actualBoundingBoxRight?: number;
}
export interface IWordCloudTextSprite {
    width: number;
    height: number;
    pixels: Uint8Array;
    occupied?: Int32Array;
    spans?: IWordCloudTextSpriteSpan[];
    anchorX?: number;
    anchorY?: number;
    offsetX?: number;
    offsetY?: number;
    alphaBBox?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    alphaPixelCount?: number;
    dpr?: number;
    textMetrics?: {
        width: number;
        actualBoundingBoxAscent?: number;
        actualBoundingBoxDescent?: number;
        actualBoundingBoxLeft?: number;
        actualBoundingBoxRight?: number;
    };
}
export interface IWordCloudTextSpriteSpan {
    y: number;
    x1: number;
    x2: number;
}
export interface IWordCloudTextMeasurer {
    measureText(word: IWordCloudEncodedWord): IWordCloudMeasureResult;
    rasterizeText?: (word: IWordCloudEncodedWord) => IWordCloudTextSprite;
}
export interface IWordCloudLayoutMask {
    isVisible(bounds: IWordCloudBounds): boolean;
}
export type IWordCloudMaskShapeSpec = {
    type: 'builtin';
    shape: WordCloudShape;
} | {
    type: 'text';
    text: string;
    hollow?: boolean;
    backgroundColor?: string;
    fill?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontVariant?: string;
} | {
    type: 'image';
    file: File | Blob;
    removeWhiteBorder?: boolean;
    threshold?: number;
    invert?: boolean;
} | {
    type: 'grid';
    grid: IWordCloudMaskGrid;
};
export interface IWordCloudMaskGrid {
    width: number;
    height: number;
    data: Uint8Array;
    sourceHash?: string;
    sourceType?: string;
}
export interface IWordCloudSegmentationRegion {
    label: number;
    area: number;
    center: [number, number];
    maxPoint: [number, number, number, number];
    maxR: number;
    ratio: number;
    boundary: Array<[number, number]>;
}
export interface IWordCloudSegmentationResult {
    labels: Int32Array;
    regions: IWordCloudSegmentationRegion[];
    shapeBounds: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        width: number;
        height: number;
    };
    shapeCenter: [number, number];
    shapeArea: number;
    shapeMaxR: number;
    shapeRatio: number;
}
export interface IWordCloudBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IWordCloudClipSpan {
    y: number;
    x1: number;
    x2: number;
}
export interface IWordCloudClipMask extends IWordCloudBounds {
    spans: IWordCloudClipSpan[];
    spanHeight?: number;
}
export interface IWordCloudPlacedWord extends IWordCloudEncodedWord {
    x: number;
    y: number;
    width: number;
    height: number;
    bounds: IWordCloudBounds;
    clipBounds?: IWordCloudBounds;
    clipMask?: IWordCloudClipMask;
    visible: boolean;
    isFillingWord?: boolean;
}
export interface IWordCloudLayoutStats {
    dataCount: number;
    placedCount: number;
    droppedCount: number;
    durationMs: number;
    maxFontSize: number;
    minPlacedFontSize: number;
    finalFontSizeScale: number;
    angleHistogram: Record<string, number>;
    rejectByBounds: number;
    rejectByCollision: number;
    rejectByShape: number;
    rejectByMaxAttempts: number;
    avgTryCount: number;
    maxTryCount: number;
    occupiedRatio: number;
    layoutWidth: number;
    layoutHeight: number;
}
export interface IWordCloudLayoutResult {
    width: number;
    height: number;
    words: IWordCloudPlacedWord[];
    fillingWords: IWordCloudPlacedWord[];
    stats?: IWordCloudLayoutStats;
}
