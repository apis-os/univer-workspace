import type { BooleanNumber, HorizontalAlign, IDisposable, IDocumentData, LocaleService } from '@univerjs/core';
import type { UniverRenderingContext } from '@univerjs/engine-render';
import type { Observable } from 'rxjs';
import { VerticalAlign, WrapStrategy } from '@univerjs/core';
import { Documents } from '@univerjs/engine-render';
/** Context supplied to optional extensions for embedded Board document rendering. */
export interface IBoardDocumentTextExtensionContext {
    documentData: IDocumentData;
    documents: Documents;
}
/** Factory for an optional embedded-document renderer such as LaTeX. */
export type BoardDocumentTextExtensionFactory = (context: IBoardDocumentTextExtensionContext) => void;
/** A loaded FontFaceSet can still precede the frame that invalidates its old measurements. */
export declare function areBoardDocumentFontMetricsReady(): boolean;
/** Uses the existing render frames to observe ready-promise replacement, including browsers without font load events. */
export declare function observeBoardDocumentFontMetrics(frames$: Observable<unknown>, onChange: (metricsChanged: boolean) => void): IDisposable;
/**
 * Registers an optional extension for Board's embedded document renderer.
 *
 * Feature packages call this once from an explicit integration entrypoint. Existing and future text render resources
 * receive the extension without introducing a dependency from Boards UI back to the feature package.
 */
export declare function registerBoardDocumentTextExtension(factory: BoardDocumentTextExtensionFactory): {
    dispose: () => void;
};
export interface IBoardDocumentTextRenderOptions {
    key: string;
    text?: string;
    documentData?: IDocumentData;
    left: number;
    top: number;
    width: number;
    height: number;
    localeService?: LocaleService;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    isHorizontal?: boolean;
    wrapStrategy?: WrapStrategy;
    shapeTextOpticalVerticalAlign?: BooleanNumber | boolean;
    clip?: boolean;
    onTextFillImageLoaded?: () => void;
}
export interface IBoardDocumentTextRenderResources {
    actualWidth: number;
    actualHeight: number;
    contentHeight: number;
    dispose: () => void;
    documents: Documents;
    contentVerticalOffset: number;
    minHeight: number;
    opticalVerticalOffset: number;
    width: number;
}
export interface IBoardDocumentTextRenderCache {
    signature?: string;
    resources?: IBoardDocumentTextRenderResources;
}
export declare function prepareBoardDocumentTextData(documentData: IDocumentData, options: Pick<IBoardDocumentTextRenderOptions, 'horizontalAlign' | 'isHorizontal' | 'verticalAlign' | 'wrapStrategy'> & {
    width: number;
    height: number;
}): IDocumentData;
export declare function createBoardDocumentTextRenderResources(options: IBoardDocumentTextRenderOptions & {
    documentData: IDocumentData;
}): IBoardDocumentTextRenderResources;
export declare function createBoardDocumentTextRenderSignature(options: IBoardDocumentTextRenderOptions, documentData: IDocumentData, localeService: LocaleService): string;
export declare function shouldClipBoardDocumentTextResources(options: Pick<IBoardDocumentTextRenderOptions, 'clip' | 'wrapStrategy'>, documentData: IDocumentData): boolean;
export declare function drawBoardDocumentTextResources(ctx: UniverRenderingContext, resources: IBoardDocumentTextRenderResources, left: number, top: number, clip: boolean): void;
export declare function disposeBoardDocumentTextRenderCache(cache?: IBoardDocumentTextRenderCache): void;
export declare function renderTextWithDocumentModel(ctx: UniverRenderingContext, options: IBoardDocumentTextRenderOptions, cache?: IBoardDocumentTextRenderCache): boolean;
