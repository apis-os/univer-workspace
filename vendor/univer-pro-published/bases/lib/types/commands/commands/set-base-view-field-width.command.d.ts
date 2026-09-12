import type { ICommand } from '@univerjs/core';
export interface ISetBaseViewFieldWidthCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    fieldId: string;
    width: number;
}
export declare const SetBaseViewFieldWidthCommand: ICommand<ISetBaseViewFieldWidthCommandParams>;
