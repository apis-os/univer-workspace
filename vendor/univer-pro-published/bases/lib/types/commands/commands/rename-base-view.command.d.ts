import type { ICommand } from '@univerjs/core';
export interface IRenameBaseViewCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    name: string;
}
export declare const RenameBaseViewCommand: ICommand<IRenameBaseViewCommandParams>;
