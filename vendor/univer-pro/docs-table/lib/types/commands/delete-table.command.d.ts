import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableDeleteTableCommandParams extends IDocsTableSegmentOptions {
    unitId: string;
    tableId: string;
}
export declare const DocsTableDeleteTableCommand: ICommand<IDocsTableDeleteTableCommandParams>;
