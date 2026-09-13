import type { ICommand } from '@univerjs/core';
export interface IMoveBaseFieldCommandParams {
    unitId: string;
    tableId: string;
    fieldId: string;
    target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    };
}
export declare const MoveBaseFieldCommand: ICommand<IMoveBaseFieldCommandParams>;
