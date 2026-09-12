import type { SlideTableMovePosition } from '@univerjs-pro/slides-table';
import type { ICommand } from '@univerjs/core';
export interface IMoveBoardTableColumnsCommandParams {
    unitId: string;
    tableId: string;
    startColumn: number;
    endColumn: number;
    targetColumn: number;
    position: SlideTableMovePosition;
}
export declare const MoveBoardTableColumnsCommand: ICommand<IMoveBoardTableColumnsCommandParams>;
