import type { ICommand } from '@univerjs/core';
import type { SlideTableMovePosition } from '../../common/layout';
export interface IMoveSlideTableRowsCommandParams {
    unitId: string;
    tableId: string;
    startRow: number;
    endRow: number;
    targetRow: number;
    position: SlideTableMovePosition;
}
export declare const MoveSlideTableRowsCommand: ICommand<IMoveSlideTableRowsCommandParams>;
