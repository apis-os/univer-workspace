import type { ICommand } from '@univerjs/core';
export interface IRenameBaseTableCommandParams {
    unitId: string;
    tableId: string;
    name: string;
}
export declare const RenameBaseTableCommand: ICommand<IRenameBaseTableCommandParams>;
