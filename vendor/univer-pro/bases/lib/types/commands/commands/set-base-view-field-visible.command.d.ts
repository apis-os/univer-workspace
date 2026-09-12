import type { ICommand } from '@univerjs/core';
export interface ISetBaseViewFieldVisibleCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    fieldId: string;
    visible: boolean;
}
export declare const SetBaseViewFieldVisibleCommand: ICommand<ISetBaseViewFieldVisibleCommandParams>;
