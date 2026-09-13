import type { IDocumentBlockRange } from '@univerjs/core';
export interface ICodeLineInput {
    layoutFragment?: object;
    st: number;
    ed: number;
    left: number;
    top: number;
    width: number;
    visualLeft?: number;
    visualWidth?: number;
    clipLeft?: number;
    clipRight?: number;
    contentHeight?: number;
    height: number;
    marginBottom?: number;
    marginTop?: number;
    paddingBottom?: number;
    paddingTop?: number;
    pageIndex: number;
}
export interface ICodeRect {
    blockId: string;
    clipLeft?: number;
    clipRight?: number;
    height: number;
    left: number;
    pageIndex: number;
    top: number;
    width: number;
}
export declare function buildCodeRects(blockRanges: IDocumentBlockRange[], lines: ICodeLineInput[], paddingY: number, paddingX: number): ICodeRect[];
