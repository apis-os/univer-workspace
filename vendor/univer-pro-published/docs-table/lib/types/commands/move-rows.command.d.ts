import type { ICommand } from '@univerjs/core';
import type { DocsTableRowInsertPosition } from '../common/actions';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableMoveRowsCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    fromRow?: number;
    toRow: number;
    count?: number;
    position: DocsTableRowInsertPosition;
}
export declare const DocsTableMoveRowsCommand: ICommand<IDocsTableMoveRowsCommandParams>;
