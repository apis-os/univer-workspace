import type { ICommand } from '@univerjs/core';
export interface IUpdateBaseRecordOrderCommandParams {
    unitId: string;
    tableId: string;
    recordId: string;
    orderKey: string;
}
export declare const UpdateBaseRecordOrderCommand: ICommand<IUpdateBaseRecordOrderCommandParams>;
