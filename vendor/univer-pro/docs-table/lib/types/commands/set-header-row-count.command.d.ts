import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableSetHeaderRowCountCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    headerRowCount?: number;
    row?: number;
}
export declare const DocsTableSetHeaderRowCountCommand: ICommand<IDocsTableSetHeaderRowCountCommandParams>;
