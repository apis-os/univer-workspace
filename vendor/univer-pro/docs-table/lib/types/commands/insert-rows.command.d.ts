import type { ICommand } from '@univerjs/core';
import type { DocsTableRowInsertPosition } from '../common/actions';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableInsertRowsCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    row?: number;
    count?: number;
    position: DocsTableRowInsertPosition;
}
export declare const DocsTableInsertRowsCommand: ICommand<IDocsTableInsertRowsCommandParams>;
