import type { ICommand } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
import { DashStyleType } from '@univerjs/core';
export interface IDocsTableSetTableBorderStyleCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
    dashStyle?: DashStyleType | DocsTableBorderStyleValue;
    value?: DashStyleType | DocsTableBorderStyleValue;
}
type DocsTableBorderStyleValue = 'solid' | 'dot' | 'dash';
export declare const DocsTableSetTableBorderStyleCommand: ICommand<IDocsTableSetTableBorderStyleCommandParams>;
export {};
