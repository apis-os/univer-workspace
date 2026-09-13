import type { ICommand } from '@univerjs/core';
export interface ISetBaseViewFieldOrderCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    fieldId: string;
    target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    };
}
export declare const SetBaseViewFieldOrderCommand: ICommand<ISetBaseViewFieldOrderCommandParams>;
