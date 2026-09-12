import type { ICommand } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableUnmergeCellsCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
}
export declare const DocsTableUnmergeCellsCommand: ICommand<IDocsTableUnmergeCellsCommandParams>;
