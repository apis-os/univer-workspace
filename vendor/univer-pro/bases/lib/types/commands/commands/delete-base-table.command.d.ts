import type { ICommand } from '@univerjs/core';
export interface IDeleteBaseTableCommandParams {
    unitId: string;
    tableId: string;
}
export declare const DeleteBaseTableCommand: ICommand<IDeleteBaseTableCommandParams>;
