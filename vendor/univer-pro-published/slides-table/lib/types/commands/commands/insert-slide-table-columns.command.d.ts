import type { ICommand } from '@univerjs/core';
export interface IInsertSlideTableColumnsCommandParams {
    unitId: string;
    subUnitId?: string;
    elementId?: string;
    tableId: string;
    columnIndex: number;
    count?: number;
    width?: number;
}
export declare const InsertSlideTableColumnsCommand: ICommand<IInsertSlideTableColumnsCommandParams>;
