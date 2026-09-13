import type { ICommand } from '@univerjs/core';
export interface IRemoveSlideTableCommandParams {
    unitId: string;
    subUnitId: string;
    tableId: string;
    elementId: string;
}
export declare const RemoveSlideTableCommand: ICommand<IRemoveSlideTableCommandParams>;
