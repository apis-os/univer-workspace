import type { ICommand, TableRowHeightRule } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableResizeRowCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    row?: number;
    height: number;
    hRule?: TableRowHeightRule;
}
export declare const DocsTableResizeRowCommand: ICommand<IDocsTableResizeRowCommandParams>;
