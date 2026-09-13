import type { ICommand } from '@univerjs/core';
import type { DocsTableSortDirection } from '../common/sort';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableSortTableCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    column?: number;
    direction: DocsTableSortDirection;
}
export declare const DocsTableSortTableCommand: ICommand<IDocsTableSortTableCommandParams>;
