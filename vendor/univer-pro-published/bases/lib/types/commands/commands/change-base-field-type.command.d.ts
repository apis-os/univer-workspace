import type { ICommand, IFieldSnapshot } from '@univerjs/core';
export interface IChangeBaseFieldTypeCommandParams {
    unitId: string;
    tableId: string;
    fieldId: string;
    input: Pick<IFieldSnapshot, 'type' | 'config'>;
}
export declare const ChangeBaseFieldTypeCommand: ICommand<IChangeBaseFieldTypeCommandParams>;
