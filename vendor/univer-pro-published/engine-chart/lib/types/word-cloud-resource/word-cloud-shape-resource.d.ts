import type { IWordCloudEChartsMaskSource, WordCloudShape } from '../wordcloud-chart/types';
export declare const WORD_CLOUD_SHAPE_RESOURCE_KEYS: Partial<Record<WordCloudShape, string>>;
export declare function getWordCloudShapeImageSources(): string[];
export declare function resolveWordCloudShapeImageSource(shape: unknown): string | undefined;
export declare function resolveWordCloudShapeMaskSource(shape: unknown): IWordCloudEChartsMaskSource;
