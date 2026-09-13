import type { BaseCellValue, ICommand } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface ISetBaseRecordValuesCommandParams {
    unitId: string;
    tableId: string;
    patches: Array<{
        recordId: string;
        values: Record<string, BaseCellValue>;
    }>;
    source?: BaseEventSource;
}
export declare const SetBaseRecordValuesCommand: ICommand<ISetBaseRecordValuesCommandParams>;
