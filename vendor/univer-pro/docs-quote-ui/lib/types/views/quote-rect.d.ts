import type { IDocumentBlockRange } from '@univerjs/core';
export interface IQuoteLineInput {
    layoutFragment?: object;
    st: number;
    ed: number;
    left: number;
    top: number;
    width: number;
    clipLeft?: number;
    clipRight?: number;
    height: number;
    marginBottom?: number;
    marginTop?: number;
    pageIndex: number;
}
export interface IQuoteRect {
    blockId: string;
    clipLeft?: number;
    clipRight?: number;
    pageIndex: number;
    lineX: number;
    left: number;
    width: number;
    top: number;
    height: number;
}
export declare function buildQuoteRects(blockRanges: IDocumentBlockRange[], lines: IQuoteLineInput[], paddingY: number, lineOffsetX: number): IQuoteRect[];
