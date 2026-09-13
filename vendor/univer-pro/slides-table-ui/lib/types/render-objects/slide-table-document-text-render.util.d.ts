import type { BooleanNumber, HorizontalAlign, IDocumentData, LocaleService, VerticalAlign } from '@univerjs/core';
import type { UniverRenderingContext } from '@univerjs/engine-render';
import type { ISlideTableDocumentRenderResources } from './slide-table-document-render-resources.util';
import { WrapStrategy } from '@univerjs/core';
export interface IRenderSlideTableDocumentTextOptions {
    /** Stable content revision supplied by table renderers to avoid serializing documentData on cache hits. */
    cacheKey?: number | string;
    clip?: boolean;
    documentData?: IDocumentData;
    height: number;
    horizontalAlign?: HorizontalAlign;
    isHorizontal?: boolean;
    key: string;
    left: number;
    localeService?: LocaleService;
    shapeTextOpticalVerticalAlign?: BooleanNumber | boolean;
    text?: string;
    top: number;
    verticalAlign?: VerticalAlign;
    viewportHeight?: number;
    width: number;
    wrapStrategy?: WrapStrategy;
}
export interface ISlideTableDocumentTextRenderCache {
    resources?: ISlideTableDocumentRenderResources;
    signature?: string;
}
export declare function disposeSlideTableDocumentTextRenderCache(cache?: ISlideTableDocumentTextRenderCache): void;
export declare function renderSlideTableTextWithDocumentModel(ctx: UniverRenderingContext, options: IRenderSlideTableDocumentTextOptions, cache?: ISlideTableDocumentTextRenderCache): boolean;
