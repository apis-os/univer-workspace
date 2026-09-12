import type { WordCloudCollisionShape } from './core/collision/engine';
import type { WordCloudFontSizeRange, WordCloudShape } from './types';
export interface IWordCloudRenderConfig {
    initialShape?: WordCloudShape;
    collisionShape?: WordCloudCollisionShape;
    fontSizeRange?: WordCloudFontSizeRange;
    padding?: number;
    zoomToFit?: {
        shrink?: boolean;
        enlarge?: boolean;
        fontSizeLimitMin?: number;
        fontSizeLimitMax?: number;
        minShrinkRatio?: number;
    };
}
export interface IResolvedWordCloudRenderConfig {
    initialShape: WordCloudShape;
    collisionShape: WordCloudCollisionShape;
    fontSizeRange: WordCloudFontSizeRange;
    padding: number;
    zoomToFit: {
        shrink: boolean;
        enlarge: boolean;
        fontSizeLimitMin: number;
        fontSizeLimitMax?: number;
        minShrinkRatio: number;
    };
}
export declare const DEFAULT_WORD_CLOUD_RENDER_CONFIG: IResolvedWordCloudRenderConfig;
export declare const STATIC_CHART_WORD_CLOUD_RENDER_CONFIG: IWordCloudRenderConfig;
export declare function resolveWordCloudRenderConfig(config?: IWordCloudRenderConfig): IResolvedWordCloudRenderConfig;
