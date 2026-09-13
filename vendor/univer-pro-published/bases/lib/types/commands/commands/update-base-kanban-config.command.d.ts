import type { ICommand } from '@univerjs/core';
export interface IUpdateBaseKanbanConfigCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    patch: Record<string, unknown>;
}
export declare const UpdateBaseKanbanConfigCommand: ICommand<IUpdateBaseKanbanConfigCommandParams>;
