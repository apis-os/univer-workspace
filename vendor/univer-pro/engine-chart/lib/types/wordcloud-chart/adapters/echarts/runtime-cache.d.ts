import type { IWordCloudEncodedWord } from '../../types';
import type { IEChartsWordCloudRenderLayout } from './layout';
import type { IEChartsWordCloudDesignWordsBuildResult } from './words';
export interface IWordCloudRuntimeContext {
    chartId?: string;
}
export interface IWordCloudFinalLayoutCachePayload {
    placed: IEChartsWordCloudRenderLayout[];
}
interface ICacheCounter {
    hit: number;
    miss: number;
}
export interface IWordCloudRuntimeCacheStats {
    designWords: ICacheCounter;
    layoutWords: ICacheCounter;
    finalLayout: ICacheCounter;
}
export declare function withWordCloudRuntimeContext<T>(context: IWordCloudRuntimeContext, fn: () => T): T;
export declare function getCurrentWordCloudRuntimeContext(): IWordCloudRuntimeContext | undefined;
export declare function getOrCreateCachedWordCloudDesignWords(chartId: string | undefined, key: string, factory: () => IEChartsWordCloudDesignWordsBuildResult): IEChartsWordCloudDesignWordsBuildResult;
export declare function getOrCreateCachedWordCloudLayoutWords(chartId: string | undefined, key: string, factory: () => IWordCloudEncodedWord[]): IWordCloudEncodedWord[];
export declare function getCachedWordCloudFinalLayout(chartId: string | undefined, key: string): IWordCloudFinalLayoutCachePayload | undefined;
export declare function setCachedWordCloudFinalLayout(chartId: string | undefined, key: string, value: IWordCloudFinalLayoutCachePayload): void;
export declare function clearWordCloudRuntimeCache(chartId: string): void;
export declare function clearAllWordCloudRuntimeCache(): void;
export declare function getWordCloudRuntimeCacheStats(chartId?: string): IWordCloudRuntimeCacheStats;
export declare function createStableWordCloudCacheKey(parts: readonly unknown[]): string;
export {};
