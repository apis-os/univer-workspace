import type { ICommand, IViewSnapshot } from '@univerjs/core';
export interface ICreateBaseViewCommandParams {
    unitId: string;
    tableId: string;
    view: IViewSnapshot;
    index?: number;
}
export declare const CreateBaseViewCommand: ICommand<ICreateBaseViewCommandParams>;
