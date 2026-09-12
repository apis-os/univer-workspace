import type { ICommand, IRecordSnapshot } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface ICreateBaseChildRecordCommandParams {
    unitId: string;
    tableId: string;
    /** Optional compatibility hint. The table-level Parent field is resolved automatically. */
    fieldId?: string;
    /** Localized name used only when this first child materializes the Parent field. */
    parentFieldName?: string;
    parentRecordId: string;
    record: IRecordSnapshot;
    source?: BaseEventSource;
}
/** Create a direct child with the Parent value embedded in the initial record snapshot. */
export declare const CreateBaseChildRecordCommand: ICommand<ICreateBaseChildRecordCommandParams>;
