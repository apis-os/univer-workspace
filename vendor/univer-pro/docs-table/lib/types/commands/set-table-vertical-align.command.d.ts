import type { ICommand, IDocumentData, JSONXActions, VerticalAlignmentType } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableSetTableVerticalAlignCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
    value: VerticalAlignmentType;
}
export declare const DocsTableSetTableVerticalAlignCommand: ICommand<IDocsTableSetTableVerticalAlignCommandParams>;
export declare function buildSetTableVerticalAlignMutationActions(documentData: IDocumentData, params: IDocsTableCellRange & {
    tableId: string;
    value: VerticalAlignmentType;
}): JSONXActions | null;
