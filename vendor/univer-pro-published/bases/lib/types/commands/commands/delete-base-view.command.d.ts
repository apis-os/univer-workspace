import type { ICommand } from '@univerjs/core';
export interface IDeleteBaseViewCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
}
export declare const DeleteBaseViewCommand: ICommand<IDeleteBaseViewCommandParams>;
