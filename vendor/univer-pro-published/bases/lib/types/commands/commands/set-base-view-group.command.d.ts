import type { ICommand, IGroupConfig } from '@univerjs/core';
export interface ISetBaseViewGroupCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    group: IGroupConfig[];
}
export declare const SetBaseViewGroupCommand: ICommand<ISetBaseViewGroupCommandParams>;
