import type { ICommand } from '@univerjs/core';
import type { IDocsTableColumnTypeConfig, IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableSetColumnTypeCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    column?: number;
    config: IDocsTableColumnTypeConfig;
}
export declare const DocsTableSetColumnTypeCommand: ICommand<IDocsTableSetColumnTypeCommandParams>;
