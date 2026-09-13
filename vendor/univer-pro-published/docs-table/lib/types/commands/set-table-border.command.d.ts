import type { ICommand, ITableCellBorder } from '@univerjs/core';
import type { DocsTableBorderPreset } from '../common/border';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableSetTableBorderCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
    preset: DocsTableBorderPreset;
    border?: ITableCellBorder;
}
export declare const DocsTableSetTableBorderCommand: ICommand<IDocsTableSetTableBorderCommandParams>;
