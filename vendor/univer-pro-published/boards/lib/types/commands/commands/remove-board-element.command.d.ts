import type { ICommand } from '@univerjs/core';
export interface IRemoveBoardElementCommandParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
}
/** Removes one persisted Board element and its owned resources with undo/redo. */
export declare const RemoveBoardElementCommand: ICommand<IRemoveBoardElementCommandParams>;
