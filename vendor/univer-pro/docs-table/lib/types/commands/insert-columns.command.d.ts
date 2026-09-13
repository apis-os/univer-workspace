import type { ICommand } from '@univerjs/core';
import type { DocsTableColumnInsertPosition } from '../common/actions';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableInsertColumnsCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    column?: number;
    count?: number;
    position: DocsTableColumnInsertPosition;
}
export declare const DocsTableInsertColumnsCommand: ICommand<IDocsTableInsertColumnsCommandParams>;
