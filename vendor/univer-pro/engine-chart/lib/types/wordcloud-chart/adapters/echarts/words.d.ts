import type { IWordCloudEncodedWord, WordCloudFontSizeRange } from '../../types';
import { createWordCloudFontSizeAccessor } from '../../core/layout/font-scale';
export interface IEChartsWordCloudSourceRecord {
    dataIndex: number;
    key: string;
    name: string;
    text: string;
    value: number;
    raw: Record<string, unknown>;
    explicitFontSize?: unknown;
    fontFamily: string;
    fontWeight: string | number;
    padding: number;
}
export interface IEChartsWordCloudWordsBuildOptions {
    fontSizeRange: WordCloudFontSizeRange;
    rotations: number[];
    randomSeed?: number | string;
}
export interface IEChartsWordCloudDesignWordsBuildOptions {
    fontSizeRange: WordCloudFontSizeRange;
}
export interface IEChartsWordCloudLayoutWordsBuildOptions {
    rotations: number[];
    randomSeed?: number | string;
}
export interface IEChartsWordCloudDesignWord {
    key: string;
    recordIndex: number;
    datumIndex: number;
    name: string;
    text: string;
    value: number;
    raw: Record<string, unknown>;
    designFontSize: number;
}
export interface IEChartsWordCloudDesignWordsBuildResult {
    words: IEChartsWordCloudDesignWord[];
    fontSizeInfo: ReturnType<typeof createWordCloudFontSizeAccessor>['meta'];
}
export declare function buildEChartsWordCloudWords(records: readonly IEChartsWordCloudSourceRecord[], options: IEChartsWordCloudWordsBuildOptions): {
    words: IWordCloudEncodedWord[];
    fontSizeInfo: ReturnType<typeof createWordCloudFontSizeAccessor>['meta'];
};
export declare function buildEChartsWordCloudDesignWords(records: readonly IEChartsWordCloudSourceRecord[], options: IEChartsWordCloudDesignWordsBuildOptions): IEChartsWordCloudDesignWordsBuildResult;
export declare function deriveEChartsWordCloudLayoutWords(designWords: readonly IEChartsWordCloudDesignWord[], records: readonly IEChartsWordCloudSourceRecord[], options: IEChartsWordCloudLayoutWordsBuildOptions): IWordCloudEncodedWord[];
export declare function createEChartsWordCloudDesignWordsCacheKey(records: readonly IEChartsWordCloudSourceRecord[], fontSizeRange: WordCloudFontSizeRange): string;
