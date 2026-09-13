import type { ICommand } from '@univerjs/core';
export interface IUpdateBaseFieldDescriptionCommandParams {
    unitId: string;
    tableId: string;
    fieldId: string;
    description: string;
}
export declare const UpdateBaseFieldDescriptionCommand: ICommand<IUpdateBaseFieldDescriptionCommandParams>;
