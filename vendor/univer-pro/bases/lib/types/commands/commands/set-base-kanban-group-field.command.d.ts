import type { ICommand } from '@univerjs/core';
export interface ISetBaseKanbanGroupFieldCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    fieldId: string;
}
export declare const SetBaseKanbanGroupFieldCommand: ICommand<ISetBaseKanbanGroupFieldCommandParams>;
