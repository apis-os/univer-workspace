import type { IDocsCalloutConfig } from '@univerjs-pro/docs-callout';
import type { DashStyleType, DocumentBlockRangeType } from '@univerjs/core';
export interface IDocsCalloutInsertFacadeOptions {
    blockId?: string;
    startOffset?: number;
    endOffset?: number;
    config?: Partial<IDocsCalloutConfig>;
}
export type IDocsCalloutInsertParagraphFacadeOptions = Omit<IDocsCalloutInsertFacadeOptions, 'startOffset' | 'endOffset'>;
export interface IDocsCalloutFindQuery {
    blockId?: string;
    text?: string;
}
export interface IDocsCalloutRange {
    blockId: string;
    startIndex: number;
    endIndex: number;
}
/** Border properties that can be inspected or changed independently of callout layout metadata. */
export interface IDocsCalloutBorderStyle {
    color: string;
    /** Opacity from `0` (transparent) to `1` (opaque). */
    opacity: number;
    style: DashStyleType;
    width: number;
}
/** Visual properties commonly needed by automation and agents. */
export interface IDocsCalloutStyle {
    backgroundColor: string;
    border: IDocsCalloutBorderStyle;
    textColor: string;
}
export interface IDocsCalloutInfo extends IDocsCalloutRange {
    type: DocumentBlockRangeType.CALLOUT;
    text: string;
    config: IDocsCalloutConfig;
    style: IDocsCalloutStyle;
}
