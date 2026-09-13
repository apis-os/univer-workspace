import type { IDocumentData } from '@univerjs/core';
import type { IDocsTableSelection } from './type';
export type DocsTableSelectionRemapOperation = {
    kind: 'insert-rows' | 'insert-columns' | 'delete-rows' | 'delete-columns';
    tableId: string;
    index: number;
    count: number;
} | {
    kind: 'delete-table';
    tableId: string;
};
export declare function remapDocsTableSelection(selection: IDocsTableSelection | null, documentData: IDocumentData, operation: DocsTableSelectionRemapOperation): IDocsTableSelection | null;
