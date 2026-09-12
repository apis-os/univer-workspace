import type { IStartEditingCellInput } from '../../services/base-editor.service';
import type { IOperation } from '@univerjs/core';
export interface IStartBaseEditingCellOperationParams extends IStartEditingCellInput {
    unitId?: string;
}
export interface IStopBaseEditingCellOperationParams {
    commit?: boolean;
}
export declare const StartBaseEditingCellOperation: IOperation<IStartBaseEditingCellOperationParams>;
export declare const StopBaseEditingCellOperation: IOperation<IStopBaseEditingCellOperationParams>;
