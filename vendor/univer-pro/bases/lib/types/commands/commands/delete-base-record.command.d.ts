import type { ICommand } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface IDeleteBaseRecordCommandParams {
    unitId: string;
    tableId: string;
    recordId: string;
    source?: BaseEventSource;
}
export declare const DeleteBaseRecordCommand: ICommand<IDeleteBaseRecordCommandParams>;
