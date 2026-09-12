import type { ICommand } from '@univerjs/core';
import type { IBoardConnectorLabelStylePatch } from '../../board.type';
export interface ISetBoardConnectorLabelStyleCommandParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
    /** Stable label id. Omit it to update the primary label. */
    labelId?: string;
    style: IBoardConnectorLabelStylePatch;
}
export declare const SetBoardConnectorLabelStyleCommand: ICommand<ISetBoardConnectorLabelStyleCommandParams>;
