import type { IDocumentData, JSONXActions } from '@univerjs/core';
export interface ISetTableCellTextActionParams {
    documentData: IDocumentData;
    tableId: string;
    row: number;
    column: number;
    text: string;
}
export interface ISetTableCellTextActionResult {
    nextDocumentData: IDocumentData;
}
export interface ITableTextReplacement {
    endOffset: number;
    startOffset: number;
    text: string;
}
export declare function buildSetTableCellTextMutationActions(params: ISetTableCellTextActionParams, bodyPath?: string[]): JSONXActions | null;
export declare function buildTableTextReplacementMutationActions(documentData: IDocumentData, replacements: ITableTextReplacement[], bodyPath?: string[]): JSONXActions | null;
export declare function buildSetTableCellTextActions(params: ISetTableCellTextActionParams): ISetTableCellTextActionResult;
