import type { IDocumentBody, IDocumentData } from '@univerjs/core';
export interface IDocsColumnInsertOptions {
    documentData: IDocumentData;
    columnGroupId: string;
    columnIds: string[];
    offset: number;
    columnCount?: number;
    gap?: number;
}
export interface IDocsColumnInsertResult {
    nextDocumentData: IDocumentData;
    inserted: {
        columnGroupId: string;
        columnIds: string[];
    };
}
export declare function canInsertColumnGroup(documentData: IDocumentData, offset: number): boolean;
export declare function buildInsertColumnGroupActions(params: IDocsColumnInsertOptions): IDocsColumnInsertResult;
export declare function shouldCreateTrailingParagraphAfterColumnGroup(body: Pick<IDocumentBody, 'dataStream'>, insertOffset: number): boolean;
