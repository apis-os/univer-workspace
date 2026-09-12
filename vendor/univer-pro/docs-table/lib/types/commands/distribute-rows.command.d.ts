import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableDistributeRowsCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    startRow?: number;
    endRow?: number;
}
export declare const DocsTableDistributeRowsCommand: ICommand<IDocsTableDistributeRowsCommandParams>;
