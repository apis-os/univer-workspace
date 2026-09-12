import type { ICommand } from '@univerjs/core';
import type { IDocsTableSegmentOptions } from '../common/type';
export interface IDocsTableMoveTableCommandParams extends IDocsTableSegmentOptions {
    tableId?: string;
    deltaX?: number;
    deltaY?: number;
    targetOffset?: number;
}
export declare const DocsTableMoveTableCommand: ICommand<IDocsTableMoveTableCommandParams>;
