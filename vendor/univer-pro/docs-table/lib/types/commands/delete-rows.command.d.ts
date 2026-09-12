import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableDeleteRowsCommandParams extends IDocsTableSegmentOptions {
    unitId: string;
    tableId: string;
    startRow: number;
    endRow: number;
}
export declare const DocsTableDeleteRowsCommand: ICommand<IDocsTableDeleteRowsCommandParams>;
