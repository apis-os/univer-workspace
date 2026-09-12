import type { IDocumentBlockRange, IDocumentBody, IDocumentData } from '@univerjs/core';
import type { IDocsCodeActionBuildResult, IDocsCodeConfig, IDocsCodeMetadataResource } from './type';
export declare class InvalidInsertRangeError extends Error {
    constructor(message?: string);
}
export interface IInsertCodeActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCodeMetadataResource;
    blockId: string;
    startOffset?: number;
    endOffset?: number;
    insertionMode?: 'convert-paragraph' | 'insert-new';
    config?: Partial<IDocsCodeConfig>;
}
export interface IUpdateCodeActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCodeMetadataResource;
    blockId: string;
    config: Partial<IDocsCodeConfig>;
}
export interface IExitCodeActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCodeMetadataResource;
    blockId: string;
}
export interface IRemoveCodeActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCodeMetadataResource;
    blockId: string;
}
export interface ICancelEmptyCodeParagraphActionParams {
    documentData: IDocumentData;
    cursorOffset: number;
    paragraphStartIndex?: number;
}
export interface ICodeBoundaryDeleteParams {
    documentData: IDocumentData;
    cursorOffset: number;
    direction: 'left' | 'right';
}
export declare function buildInsertCodeActions(params: IInsertCodeActionParams): IDocsCodeActionBuildResult;
export declare function buildUpdateCodeActions(params: IUpdateCodeActionParams): IDocsCodeActionBuildResult;
export declare function buildExitCodeActions(params: IExitCodeActionParams): IDocsCodeActionBuildResult | null;
export declare function buildRemoveCodeActions(params: IRemoveCodeActionParams): IDocsCodeActionBuildResult | null;
export declare function buildCancelEmptyCodeParagraphActions(params: ICancelEmptyCodeParagraphActionParams): IDocsCodeActionBuildResult | null;
export declare function findCodeRangeAtOffset(body: IDocumentBody | undefined, offset: number): IDocumentBlockRange | undefined;
export declare function findCodeRangeById(body: IDocumentBody | undefined, blockId: string): IDocumentBlockRange | undefined;
export declare function isCodeBoundaryDelete(params: ICodeBoundaryDeleteParams): boolean;
