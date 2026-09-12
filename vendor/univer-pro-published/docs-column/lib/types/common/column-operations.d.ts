import type { IDocumentData } from '@univerjs/core';
export interface IDocsColumnResizeOptions {
    documentData: IDocumentData;
    columnGroupId: string;
    widthRatios: number[];
}
export interface IDocsColumnResizeResult {
    nextDocumentData: IDocumentData;
}
export interface IDocsColumnInsertColumnOptions {
    documentData: IDocumentData;
    columnGroupId: string;
    targetColumnId: string;
    position: 'left' | 'right';
    columnId: string;
}
export interface IDocsColumnInsertColumnResult {
    nextDocumentData: IDocumentData;
    inserted: {
        columnGroupId: string;
        columnId: string;
        column: number;
    };
}
export interface IDocsColumnDeleteColumnOptions {
    documentData: IDocumentData;
    columnGroupId: string;
    columnId: string;
}
export interface IDocsColumnDeleteColumnResult {
    nextDocumentData: IDocumentData;
    deleted: {
        columnGroupId: string;
        columnId: string;
        column: number;
    };
}
export interface IDocsColumnDeleteGroupOptions {
    documentData: IDocumentData;
    columnGroupId: string;
}
export interface IDocsColumnDeleteGroupResult {
    nextDocumentData: IDocumentData;
    deleted: {
        columnGroupId: string;
        startOffset: number;
        endOffset: number;
    };
}
export declare function buildResizeColumnGroupActions(params: IDocsColumnResizeOptions): IDocsColumnResizeResult;
export declare function buildInsertColumnActions(params: IDocsColumnInsertColumnOptions): IDocsColumnInsertColumnResult;
export declare function buildDeleteColumnActions(params: IDocsColumnDeleteColumnOptions): IDocsColumnDeleteColumnResult;
export declare function buildDeleteColumnGroupActions(params: IDocsColumnDeleteGroupOptions): IDocsColumnDeleteGroupResult;
