import type { HistoryChangeKind } from '@univerjs-pro/edit-history';
import type { BaseSelection, IRecordSnapshot } from '@univerjs/core';
export interface IBaseHistoryLocation {
    tableId?: string;
    viewId?: string;
    selection?: BaseSelection | null;
}
export interface IBaseHistoryChange {
    id: string;
    kind: HistoryChangeKind;
    label: string;
    memberId: string;
    tableId?: string;
    viewId?: string;
    recordId?: string;
    recordIndex?: number;
    removedRecord?: IRecordSnapshot;
    fieldId?: string;
    fieldIndex?: number;
}
