import type { IDocumentData, ITableCellMargin, JSONXActions, Nullable } from '@univerjs/core';
import type { IDocsTableCellRange } from './type';
export declare const DEFAULT_DOCS_TABLE_CELL_MARGIN: ITableCellMargin;
export interface ISetTableCellMarginMutationParams extends IDocsTableCellRange {
    documentData: IDocumentData;
    tableId: string;
    margin: Nullable<ITableCellMargin>;
}
export declare function buildSetTableCellMarginMutationActions(params: ISetTableCellMarginMutationParams): JSONXActions | null;
export declare function buildSetTableDefaultCellMarginMutationActions(documentData: IDocumentData, tableId: string, margin: Nullable<ITableCellMargin>): JSONXActions | null;
