import type { BaseDataModel, IFieldSnapshot, IRecordSnapshot } from '@univerjs/core';
import { validateBaseHierarchyRecordCreations } from '../../models/base-hierarchy';
interface IPreparedBaseRecordCreations {
    records: IRecordSnapshot[];
    hierarchyFieldToMaterialize: IFieldSnapshot | null;
    hierarchyChanges: ReturnType<typeof validateBaseHierarchyRecordCreations>;
}
/**
 * Validate and normalize records before a create command builds its single JSON1 operation.
 *
 * The canonical Parent field is special only on its first write: the Facade may use the
 * deterministic id returned by `getHierarchyFieldId()` before the field exists. This
 * helper validates that virtual value with the same single-link rules as a materialized
 * Parent field, then returns the field definition that must be composed with the record
 * creation. Callers still own mutation execution and Undo/Redo registration.
 */
export declare function prepareBaseRecordCreations(base: BaseDataModel, tableId: string, records: readonly IRecordSnapshot[], parentFieldName?: string): IPreparedBaseRecordCreations | null;
export {};
