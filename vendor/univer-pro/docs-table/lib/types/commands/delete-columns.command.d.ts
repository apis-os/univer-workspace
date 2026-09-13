import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableDeleteColumnsCommandParams extends IDocsTableSegmentOptions {
    unitId: string;
    tableId: string;
    startColumn: number;
    endColumn: number;
}
export declare const DocsTableDeleteColumnsCommand: ICommand<IDocsTableDeleteColumnsCommandParams>;
