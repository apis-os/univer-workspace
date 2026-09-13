import type { ICommand } from '@univerjs/core';
export interface IRemoveBoardTableCommandParams {
    unitId: string;
    subUnitId: string;
    tableId: string;
    elementId: string;
}
export declare const RemoveBoardTableCommand: ICommand<IRemoveBoardTableCommandParams>;
