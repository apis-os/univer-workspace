import type { ICommand } from '@univerjs/core';
export interface IUpdateDocDrawingMetadataPatch {
    drawingId: string;
    name?: string;
    title?: string;
    description?: string;
    hidden?: boolean;
    visible?: boolean;
    selectable?: boolean;
}
export interface IUpdateDocDrawingMetadataCommandParams {
    unitId: string;
    patches: IUpdateDocDrawingMetadataPatch[];
}
export declare const UpdateDocDrawingMetadataCommand: ICommand<IUpdateDocDrawingMetadataCommandParams>;
