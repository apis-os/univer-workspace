import type { ICommand, UniverInstanceType } from '@univerjs/core';
export interface IRestoreHistoryCommandParams {
    unitId: string;
    type: UniverInstanceType;
    revision: number;
}
export declare const RestoreHistoryCommand: ICommand<IRestoreHistoryCommandParams>;
