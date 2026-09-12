import type { IDocumentData, ITextStyle, LocaleService } from '@univerjs/core';
import type { ISlidePageElement, ISlideThemeData, SlidePlaceholderTextLevel } from '../slide.type';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export interface ISlidePlainTextToDocumentOptions {
    id?: string;
    textStyle?: ITextStyle;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    bullet?: {
        listId?: string;
        listType: string;
        nestingLevel?: number;
    };
}
/**
 * Canonicalize legacy line feeds before constructing a DocumentModel.
 *
 * This adapter only normalizes document control characters. It must stay independent of the
 * host element: font conversion, wrapping, baseline, alignment, and painting all belong to
 * DocumentModel. The bare-LF conversion is length-preserving so existing run and range offsets
 * remain valid.
 */
export declare function normalizeSlideDocumentDataStream(documentData: IDocumentData): IDocumentData;
export declare function plainTextToSlideDocumentData(text: string, options?: ISlidePlainTextToDocumentOptions): IDocumentData;
export declare function slideDocumentDataToPlainText(documentData: IDocumentData): string;
export declare function resolveSlideElementTextDocument(element: ISlidePageElement, options?: {
    themeData?: ISlideThemeData;
    placeholderLevel?: SlidePlaceholderTextLevel;
}): IDocumentData | null;
export declare function resolveSlideElementPlainText(element: ISlidePageElement, options?: {
    localeService?: LocaleService;
    themeData?: ISlideThemeData;
    placeholderLevel?: SlidePlaceholderTextLevel;
}): string;
export declare function applySlideElementTextDocument(element: ISlidePageElement, documentData: IDocumentData): ISlidePageElement | null;
export declare function applySlideElementPlainText(element: ISlidePageElement, text: string, options?: ISlidePlainTextToDocumentOptions): ISlidePageElement | null;
