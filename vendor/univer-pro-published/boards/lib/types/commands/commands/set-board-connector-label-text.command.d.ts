import type { ICommand } from '@univerjs/core';
import type { IBoardConnectorLabel } from '../../board.type';
export interface ISetBoardConnectorLabelTextCommandParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
    /** Stable label id. Omit it to update or create the primary label. */
    labelId?: string;
    content: NonNullable<IBoardConnectorLabel['content']>;
}
export declare const SetBoardConnectorLabelTextCommand: ICommand<ISetBoardConnectorLabelTextCommandParams>;
