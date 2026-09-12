import type { ICommand, IRecordSnapshot } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface IDuplicateBaseRecordCommandParams {
    unitId: string;
    tableId: string;
    sourceRecordId: string;
    record: IRecordSnapshot;
    source?: BaseEventSource;
}
export declare const DuplicateBaseRecordCommand: ICommand<IDuplicateBaseRecordCommandParams>;
