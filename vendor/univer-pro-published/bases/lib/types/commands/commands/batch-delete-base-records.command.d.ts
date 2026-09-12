import type { ICommand } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface IBatchDeleteBaseRecordsCommandParams {
    unitId: string;
    tableId: string;
    recordIds: string[];
    source?: BaseEventSource;
}
export declare const BatchDeleteBaseRecordsCommand: ICommand<IBatchDeleteBaseRecordsCommandParams>;
