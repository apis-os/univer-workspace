import type { ICommand, IDocumentData, JSONXActions } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
import { DocsTableSelectionService } from '../services/docs-table-selection.service';
export interface IDocsTableSetTableBackgroundCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
    color?: string | null;
    value?: string | null;
}
export declare const DocsTableSetTableBackgroundCommand: ICommand<IDocsTableSetTableBackgroundCommandParams>;
export declare function getStableTableStyleSelection(selectionService: DocsTableSelectionService): import("@univerjs/core").Nullable<import("..").IDocsTableSelection>;
export declare function buildSetTableBackgroundMutationActions(documentData: IDocumentData, params: Partial<IDocsTableCellRange> & {
    tableId: string;
    value: string | null;
}): JSONXActions | null;
