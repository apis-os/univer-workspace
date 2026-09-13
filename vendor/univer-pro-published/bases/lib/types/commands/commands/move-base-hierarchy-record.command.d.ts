import type { ICommand } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface IMoveBaseHierarchyRecordCommandParams {
    unitId: string;
    tableId: string;
    /** Optional compatibility hint. The table-level Parent field is resolved automatically. */
    fieldId?: string;
    /** Localized name used only when this move materializes the Parent field. */
    parentFieldName?: string;
    recordId: string;
    parentRecordId: string | null;
    /** Optional table-level manual order used when the view has no explicit Sort. */
    orderKey?: string;
    source?: BaseEventSource;
}
/** Move a record and its implicit subtree as one JSON1 operation and one Undo entry. */
export declare const MoveBaseHierarchyRecordCommand: ICommand<IMoveBaseHierarchyRecordCommandParams>;
