import type { ICommand } from '@univerjs/core';
export interface IRemoveBoardConnectorLabelCommandParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
    /** Stable label id. Omit it to remove the primary label. */
    labelId?: string;
}
export declare const RemoveBoardConnectorLabelCommand: ICommand<IRemoveBoardConnectorLabelCommandParams>;
