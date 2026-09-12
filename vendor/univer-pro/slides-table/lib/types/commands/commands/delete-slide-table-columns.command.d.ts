import type { ICommand } from '@univerjs/core';
export interface IDeleteSlideTableColumnsCommandParams {
    unitId: string;
    tableId: string;
    startColumn: number;
    endColumn: number;
}
export declare const DeleteSlideTableColumnsCommand: ICommand<IDeleteSlideTableColumnsCommandParams>;
