import type { ICommand } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableSetTableBorderWidthCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
    width?: number;
    value?: number;
}
export declare const DocsTableSetTableBorderWidthCommand: ICommand<IDocsTableSetTableBorderWidthCommandParams>;
