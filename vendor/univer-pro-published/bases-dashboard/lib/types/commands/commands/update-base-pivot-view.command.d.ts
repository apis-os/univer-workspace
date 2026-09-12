import type { ICommand } from '@univerjs/core';
import type { IBasePivotViewConfig } from '../../types';
export interface IUpdateBasePivotViewCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    patch: Partial<IBasePivotViewConfig>;
}
export declare const UpdateBasePivotViewCommand: ICommand<IUpdateBasePivotViewCommandParams>;
