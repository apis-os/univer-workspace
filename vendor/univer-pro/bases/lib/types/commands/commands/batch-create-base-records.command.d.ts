import type { ICommand, IRecordSnapshot } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface IBatchCreateBaseRecordsCommandParams {
    unitId: string;
    tableId: string;
    records: IRecordSnapshot[];
    source?: BaseEventSource;
}
export declare const BatchCreateBaseRecordsCommand: ICommand<IBatchCreateBaseRecordsCommandParams>;
