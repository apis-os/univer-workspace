import type { ICommand } from '@univerjs/core';
import type { IUpdateSlideTablePatch } from '../../services/slide-table-resource.service';
export interface IUpdateSlideTableCommandParams {
    unitId: string;
    tableId: string;
    patch: IUpdateSlideTablePatch;
}
export declare const UpdateSlideTableCommand: ICommand<IUpdateSlideTableCommandParams>;
