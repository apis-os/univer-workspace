import type { IDocumentBlockRange, IDocumentBody, IDocumentData } from '@univerjs/core';
import type { IDocsCalloutConfig, IDocsCalloutMetadataResource } from './type';
export declare class InvalidInsertRangeError extends Error {
    constructor(message?: string);
}
export interface IInsertCalloutActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCalloutMetadataResource;
    blockId: string;
    startOffset?: number;
    endOffset?: number;
    insertionMode?: 'convert-paragraph' | 'insert-new';
    config?: Partial<IDocsCalloutConfig>;
}
export interface IUpdateCalloutActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCalloutMetadataResource;
    blockId: string;
    config: Partial<IDocsCalloutConfig>;
}
export interface IDeleteCalloutActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCalloutMetadataResource;
    blockId: string;
}
export interface IUnwrapCalloutActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCalloutMetadataResource;
    blockId: string;
}
export interface ICancelEmptyCalloutParagraphActionParams {
    documentData: IDocumentData;
    metadata?: IDocsCalloutMetadataResource;
    cursorOffset: number;
    paragraphStartIndex?: number;
}
export interface ICalloutBoundaryDeleteParams {
    documentData: IDocumentData;
    cursorOffset: number;
    direction: 'left' | 'right';
}
export interface IDocsCalloutActionBuildResult {
    nextDocumentData: IDocumentData;
    nextMetadata: IDocsCalloutMetadataResource;
    cursorOffset: number;
}
export declare function buildInsertCalloutActions(params: IInsertCalloutActionParams): IDocsCalloutActionBuildResult;
export declare function buildUpdateCalloutActions(params: IUpdateCalloutActionParams): IDocsCalloutActionBuildResult;
export declare function buildDeleteCalloutActions(params: IDeleteCalloutActionParams): IDocsCalloutActionBuildResult;
export declare function buildUnwrapCalloutActions(params: IUnwrapCalloutActionParams): IDocsCalloutActionBuildResult | null;
export declare function buildCancelEmptyCalloutParagraphActions(params: ICancelEmptyCalloutParagraphActionParams): IDocsCalloutActionBuildResult | null;
export declare function findCalloutRangeAtOffset(body: IDocumentBody | undefined, offset: number): IDocumentBlockRange | undefined;
export declare function isCalloutBoundaryDelete(params: ICalloutBoundaryDeleteParams): boolean;
