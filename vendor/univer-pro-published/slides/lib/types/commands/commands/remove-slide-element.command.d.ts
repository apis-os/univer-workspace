import type { ICommand } from '@univerjs/core';
export interface IRemoveSlideElementCommandParams {
    unitId: string;
    subUnitId: string;
    drawingIds: string[];
}
export declare const RemoveSlideElementCommand: ICommand<IRemoveSlideElementCommandParams>;
