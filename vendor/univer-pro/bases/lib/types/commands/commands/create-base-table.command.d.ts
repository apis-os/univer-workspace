import type { ICommand, ITableSnapshot } from '@univerjs/core';
export interface ICreateBaseTableCommandParams {
    unitId: string;
    table: ITableSnapshot;
    index?: number;
}
export declare const CreateBaseTableCommand: ICommand<ICreateBaseTableCommandParams>;
