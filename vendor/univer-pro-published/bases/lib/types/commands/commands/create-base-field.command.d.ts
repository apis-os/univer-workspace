import type { ICommand, IFieldSnapshot } from '@univerjs/core';
export interface ICreateBaseFieldCommandParams {
    unitId: string;
    tableId: string;
    field: IFieldSnapshot;
    index?: number;
    viewIndexes?: Record<string, number>;
}
export declare const CreateBaseFieldCommand: ICommand<ICreateBaseFieldCommandParams>;
