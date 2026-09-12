import type { ICommand, IRecordSnapshot } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface ICreateBaseRecordCommandParams {
    unitId: string;
    tableId: string;
    record: IRecordSnapshot;
    source?: BaseEventSource;
}
export declare const CreateBaseRecordCommand: ICommand<ICreateBaseRecordCommandParams>;
