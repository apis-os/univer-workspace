import type { ICommand } from '@univerjs/core';
import type { ColumnPosition } from '../common/column-types';
export interface IResizeDocColumnGroupCommandParams {
    unitId?: string;
    columnGroupId: string;
    widthRatios: number[];
}
export interface IAddDocColumnCommandParams {
    unitId?: string;
    columnGroupId: string;
    targetColumnId: string;
    position: ColumnPosition;
    columnId?: string;
}
export interface IDeleteDocColumnCommandParams {
    unitId?: string;
    columnGroupId: string;
    columnId: string;
}
export interface IDeleteDocColumnGroupCommandParams {
    unitId?: string;
    columnGroupId: string;
}
export interface INormalizeDocColumnGroupCommandParams {
    unitId?: string;
}
export declare const ResizeDocColumnGroupCommand: ICommand<IResizeDocColumnGroupCommandParams>;
export declare const AddDocColumnCommand: ICommand<IAddDocColumnCommandParams>;
export declare const DeleteDocColumnCommand: ICommand<IDeleteDocColumnCommandParams>;
export declare const DeleteDocColumnGroupCommand: ICommand<IDeleteDocColumnGroupCommandParams>;
export declare const NormalizeDocColumnGroupCommand: ICommand<INormalizeDocColumnGroupCommandParams>;
