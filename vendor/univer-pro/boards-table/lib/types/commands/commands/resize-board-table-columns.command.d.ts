import type { ICommand } from '@univerjs/core';
export interface IResizeBoardTableColumnsCommandParams {
    unitId: string;
    tableId: string;
    startColumn: number;
    endColumn: number;
    width: number;
}
export declare const ResizeBoardTableColumnsCommand: ICommand<IResizeBoardTableColumnsCommandParams>;
