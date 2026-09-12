import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableInsertTitleRowCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
}
export declare const DocsTableInsertTitleRowCommand: ICommand<IDocsTableInsertTitleRowCommandParams>;
