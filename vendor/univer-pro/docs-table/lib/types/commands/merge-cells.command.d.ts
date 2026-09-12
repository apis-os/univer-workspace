import type { ICommand } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableMergeCellsCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
}
export declare const DocsTableMergeCellsCommand: ICommand<IDocsTableMergeCellsCommandParams>;
