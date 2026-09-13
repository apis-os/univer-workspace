import type { ICommand, IFieldSnapshot } from '@univerjs/core';
export interface IUpdateBaseFieldCommandParams {
    unitId: string;
    tableId: string;
    fieldId: string;
    patch: Partial<IFieldSnapshot>;
}
export declare const UpdateBaseFieldCommand: ICommand<IUpdateBaseFieldCommandParams>;
