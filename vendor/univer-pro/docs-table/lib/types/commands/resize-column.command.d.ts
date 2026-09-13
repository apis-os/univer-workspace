import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableResizeColumnCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    column?: number;
    width: number;
}
export declare const DocsTableResizeColumnCommand: ICommand<IDocsTableResizeColumnCommandParams>;
