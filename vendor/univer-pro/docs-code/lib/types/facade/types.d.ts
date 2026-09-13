import type { IDocsCodeConfig } from '@univerjs-pro/docs-code';
import type { DocumentBlockRangeType } from '@univerjs/core';
export interface IDocsCodeInsertFacadeOptions {
    blockId?: string;
    startOffset?: number;
    endOffset?: number;
    config?: Partial<IDocsCodeConfig>;
}
export type IDocsCodeInsertParagraphFacadeOptions = Omit<IDocsCodeInsertFacadeOptions, 'startOffset' | 'endOffset'>;
export interface IDocsCodeUpdateFacadeOptions {
    config: Partial<IDocsCodeConfig>;
}
export interface IDocsCodeFindQuery {
    blockId?: string;
    text?: string;
}
export interface IDocsCodeRange {
    blockId: string;
    startIndex: number;
    endIndex: number;
}
export interface IDocsCodeInfo extends IDocsCodeRange {
    config?: IDocsCodeConfig;
    type: DocumentBlockRangeType.CODE;
    text: string;
}
