import type { BaseCellValue, ICommand } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface IUpdateBaseCellCommandParams {
    unitId: string;
    tableId: string;
    recordId: string;
    fieldId: string;
    value: BaseCellValue;
    source?: BaseEventSource;
}
export declare const UpdateBaseCellCommand: ICommand<IUpdateBaseCellCommandParams>;
