import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableDistributeColumnsCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    startColumn?: number;
    endColumn?: number;
}
export declare const DocsTableDistributeColumnsCommand: ICommand<IDocsTableDistributeColumnsCommandParams>;
