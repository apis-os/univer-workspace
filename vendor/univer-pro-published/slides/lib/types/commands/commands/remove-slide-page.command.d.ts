import type { ICommand } from '@univerjs/core';
export interface IRemoveSlidePageCommandParams {
    unitId: string;
    subUnitId: string;
}
export declare const RemoveSlidePageCommand: ICommand<IRemoveSlidePageCommandParams>;
