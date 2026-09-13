import type { ICommand } from '@univerjs/core';
import type { DocsTableColumnInsertPosition } from '../common/actions';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableMoveColumnsCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    fromColumn?: number;
    toColumn: number;
    count?: number;
    position: DocsTableColumnInsertPosition;
}
export declare const DocsTableMoveColumnsCommand: ICommand<IDocsTableMoveColumnsCommandParams>;
