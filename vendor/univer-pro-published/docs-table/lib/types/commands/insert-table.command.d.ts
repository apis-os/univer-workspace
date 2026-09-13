import type { ICommand } from '@univerjs/core';
import type { IDocsTableInsertOptions } from '../common/insert-table';
export interface IDocsTableInsertTableCommandParams extends IDocsTableInsertOptions {
    unitId?: string;
    rows?: number;
    columns?: number;
}
export declare const DocsTableInsertTableCommand: ICommand<IDocsTableInsertTableCommandParams>;
