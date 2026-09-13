import type { IDocumentBlockRange } from '@univerjs/core';
import type { IDocumentSkeletonLine } from '@univerjs/engine-render';
export interface ICalloutLineInput {
    layoutFragment?: object;
    skeletonLine?: IDocumentSkeletonLine;
    st: number;
    ed: number;
    left: number;
    top: number;
    width: number;
    visualLeft?: number;
    visualWidth?: number;
    clipLeft?: number;
    clipRight?: number;
    height: number;
    contentHeight?: number;
    marginBottom?: number;
    marginTop?: number;
    paddingBottom?: number;
    paddingTop?: number;
    pageIndex: number;
}
export interface ICalloutRect {
    blockId: string;
    clipLeft?: number;
    clipRight?: number;
    pageIndex: number;
    left: number;
    top: number;
    width: number;
    height: number;
    firstLineTop: number;
    triggerLine?: IDocumentSkeletonLine;
}
export declare function buildCalloutRects(blockRanges: IDocumentBlockRange[], lines: ICalloutLineInput[], padding: number, horizontalPadding?: number): ICalloutRect[];
