import type { IAccessor, ICommand } from '@univerjs/core';
import type { TTableBorderStylePatch } from '../common/border';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableSetTableBorderColorCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
    color?: string | null;
    value?: string | null;
}
export declare const DocsTableSetTableBorderColorCommand: ICommand<IDocsTableSetTableBorderColorCommandParams>;
export declare function updateTableBorder(accessor: IAccessor, params: (Partial<IDocsTableCellRange> & IDocsTableSegmentOptions & {
    tableId?: string;
}) | undefined, border: TTableBorderStylePatch): Promise<boolean>;
