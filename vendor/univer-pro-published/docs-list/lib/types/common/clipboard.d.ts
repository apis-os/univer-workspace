import type { IDocumentData } from '@univerjs/core';
import { ListGlyphType } from '@univerjs/core';
import { DocsListSelectionMode } from './type';
export interface IParsedHtmlListTextStyle {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    color?: string;
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: number;
}
export interface IParsedHtmlListItem {
    text: string;
    nestingLevel: number;
    ordered: boolean;
    glyphType: ListGlyphType;
    glyphSymbol?: string;
    startNumber?: number;
    textStyle?: IParsedHtmlListTextStyle;
}
export interface IParsedHtmlListClipboard {
    items: IParsedHtmlListItem[];
}
export interface IListClipboardParams {
    documentData: IDocumentData;
    paragraphStartIndex: number;
    mode?: DocsListSelectionMode;
}
export declare function parseHtmlListClipboard(html: string): IParsedHtmlListClipboard;
export declare function serializeListItemsAsHtml(items: IParsedHtmlListItem[]): string;
export declare function serializeListSelectionAsHtml(params: IListClipboardParams): string;
