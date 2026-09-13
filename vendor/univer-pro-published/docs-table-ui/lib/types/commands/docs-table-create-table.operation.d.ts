import type { ICommand } from '@univerjs/core';
export interface IDocsTableCreateTableOperationParams {
    value?: string | number;
    rowCount?: number;
    colCount?: number;
}
export declare const DocsTableCreateTableOperation: ICommand<IDocsTableCreateTableOperationParams>;
