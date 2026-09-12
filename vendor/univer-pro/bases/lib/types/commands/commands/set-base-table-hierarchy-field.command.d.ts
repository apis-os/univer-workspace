import type { ICommand } from '@univerjs/core';
export interface ISetBaseTableHierarchyFieldCommandParams {
    unitId: string;
    tableId: string;
    /** Select the table's canonical Parent RecordLink, or clear its semantic role. */
    fieldId: string | null;
}
/** Set the table's one canonical Parent field as an atomic undoable operation. */
export declare const SetBaseTableHierarchyFieldCommand: ICommand<ISetBaseTableHierarchyFieldCommandParams>;
