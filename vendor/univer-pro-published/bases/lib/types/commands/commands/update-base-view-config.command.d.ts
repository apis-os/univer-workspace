import type { ICommand } from '@univerjs/core';
export interface IUpdateBaseViewConfigCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    patch: Record<string, unknown>;
}
export declare const UpdateBaseViewConfigCommand: ICommand<IUpdateBaseViewConfigCommandParams>;
