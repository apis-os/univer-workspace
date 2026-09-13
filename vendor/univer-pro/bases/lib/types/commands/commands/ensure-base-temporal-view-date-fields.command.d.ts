import type { ICommand } from '@univerjs/core';
export interface IEnsureBaseTemporalViewDateFieldsCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    ensureEndDateField?: boolean;
}
export declare const EnsureBaseTemporalViewDateFieldsCommand: ICommand<IEnsureBaseTemporalViewDateFieldsCommandParams>;
