import type { ICommand } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableCopySelectionCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
}
export declare const DocsTableCopySelectionCommand: ICommand<IDocsTableCopySelectionCommandParams>;
