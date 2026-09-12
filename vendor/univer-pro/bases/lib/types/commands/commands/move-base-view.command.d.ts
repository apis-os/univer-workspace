import type { ICommand } from '@univerjs/core';
export interface IMoveBaseViewCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    target: {
        beforeViewId?: string;
        afterViewId?: string;
    };
}
export declare const MoveBaseViewCommand: ICommand<IMoveBaseViewCommandParams>;
