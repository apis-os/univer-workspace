import type { IDocumentBlockRange, IDocumentBody, IDocumentData, JSONXActions } from '@univerjs/core';
import type { IDocsQuoteActionBuildResult } from './type';
export declare class InvalidInsertRangeError extends Error {
    constructor(message?: string);
}
export interface IInsertQuoteActionParams {
    documentData: IDocumentData;
    blockId: string;
    startOffset?: number;
    endOffset?: number;
    insertionMode?: 'convert-paragraph' | 'insert-new';
}
export interface IExitQuoteActionParams {
    documentData: IDocumentData;
    cursorOffset: number;
}
export interface IDocsQuoteMutationActionBuildResult {
    actions: JSONXActions;
    cursorOffset: number;
}
export interface IUnwrapQuoteActionParams {
    documentData: IDocumentData;
    blockId: string;
}
export interface IRemoveQuoteActionParams {
    documentData: IDocumentData;
    blockId: string;
}
export interface ICancelEmptyQuoteParagraphActionParams {
    documentData: IDocumentData;
    cursorOffset: number;
    paragraphStartIndex?: number;
}
export declare function buildInsertQuoteActions(params: IInsertQuoteActionParams): IDocsQuoteActionBuildResult;
export declare function buildExitQuoteActions(params: IExitQuoteActionParams): IDocsQuoteActionBuildResult | null;
export declare function buildExitQuoteMutationActions(params: IExitQuoteActionParams): IDocsQuoteMutationActionBuildResult | null;
export declare function buildUnwrapQuoteActions(params: IUnwrapQuoteActionParams): IDocsQuoteActionBuildResult | null;
export declare function buildRemoveQuoteActions(params: IRemoveQuoteActionParams): IDocsQuoteActionBuildResult | null;
export declare function buildCancelEmptyQuoteParagraphActions(params: ICancelEmptyQuoteParagraphActionParams): IDocsQuoteActionBuildResult | null;
export declare function findQuoteRangeAtOffset(body: IDocumentBody | undefined, offset: number): IDocumentBlockRange | undefined;
