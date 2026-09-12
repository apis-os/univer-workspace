import type { ICommand } from '@univerjs/core';
import type { IDocsTableCellRange, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTablePasteWithoutFormattingCommandParams extends Partial<IDocsTableCellRange>, IDocsTableSegmentOptions {
    tableId?: string;
    text: string;
}
export declare const DocsTablePasteWithoutFormattingCommand: ICommand<IDocsTablePasteWithoutFormattingCommandParams>;
