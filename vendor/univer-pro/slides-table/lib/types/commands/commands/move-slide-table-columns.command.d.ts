import type { ICommand } from '@univerjs/core';
import type { SlideTableMovePosition } from '../../common/layout';
export interface IMoveSlideTableColumnsCommandParams {
    unitId: string;
    tableId: string;
    startColumn: number;
    endColumn: number;
    targetColumn: number;
    position: SlideTableMovePosition;
}
export declare const MoveSlideTableColumnsCommand: ICommand<IMoveSlideTableColumnsCommandParams>;
