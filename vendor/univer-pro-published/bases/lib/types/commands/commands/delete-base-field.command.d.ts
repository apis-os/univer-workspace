import type { ICommand } from '@univerjs/core';
export interface IDeleteBaseFieldCommandParams {
    unitId: string;
    tableId: string;
    fieldId: string;
}
export declare const DeleteBaseFieldCommand: ICommand<IDeleteBaseFieldCommandParams>;
