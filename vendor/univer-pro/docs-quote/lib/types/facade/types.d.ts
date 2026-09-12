import type { DocumentBlockRangeType } from '@univerjs/core';
export interface IDocsQuoteInsertFacadeOptions {
    blockId?: string;
    startOffset?: number;
    endOffset?: number;
}
export type IDocsQuoteInsertParagraphFacadeOptions = Omit<IDocsQuoteInsertFacadeOptions, 'startOffset' | 'endOffset'>;
export interface IDocsQuoteFindQuery {
    blockId?: string;
    text?: string;
}
export interface IDocsQuoteCancelEmptyParagraphFacadeOptions {
    cursorOffset?: number;
    paragraphStartIndex?: number;
}
export interface IDocsQuoteRange {
    blockId: string;
    startIndex: number;
    endIndex: number;
}
/** Quote colors exposed as a compact read/write object for automation and agents. */
export interface IDocsQuoteStyle {
    lineColor: string;
    textColor: string;
}
export interface IDocsQuoteInfo extends IDocsQuoteRange {
    type: DocumentBlockRangeType.QUOTE;
    text: string;
    style: IDocsQuoteStyle;
}
