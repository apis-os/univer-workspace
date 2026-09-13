import type { BaseCellValue, FieldId, IBaseHierarchyProjection, IFieldSnapshot, IGridProjection, IProjectedRow, IRecordSnapshot, ITableSnapshot, RecordId } from '@univerjs/core';
import { BaseHierarchyInvalidReason } from '@univerjs/core';
/** Root plus four descendant levels. */
export declare const BASE_HIERARCHY_MAX_LEVELS = 5;
/** Virtual id used before a table creates its Parent RecordLink for the first time. */
export declare const BASE_HIERARCHY_PARENT_FIELD_ID = "__base_hierarchy_parent__";
/** Stable SDK-facing error codes. UI messages resolve these codes through i18n. */
export declare enum BaseHierarchyErrorCode {
    /** The Parent field is absent, targets another table, or allows multiple records. */
    InvalidField = "invalidField",
    /** The record being changed or its requested parent does not exist. */
    MissingRecord = "missingRecord",
    /** A record was assigned as its own parent. */
    SelfParent = "selfParent",
    /** The requested Parent edge would create a cycle. */
    Cycle = "cycle",
    /** Moving the record's subtree would exceed {@link BASE_HIERARCHY_MAX_LEVELS}. */
    MaxDepth = "maxDepth",
    /** Manual record reordering was requested while the active view has Sort rules. */
    SortedView = "sortedView"
}
/** Error thrown when a semantic hierarchy command rejects its complete operation. */
export declare class BaseHierarchyError extends Error {
    readonly code: BaseHierarchyErrorCode;
    constructor(code: BaseHierarchyErrorCode, message?: string);
}
/** Origin of an applied Base hierarchy change exposed through the Facade event API. */
export declare enum BaseEventSource {
    /** A built-in Base UI interaction initiated the command. */
    UI = "ui",
    /** A Facade API method initiated the command. */
    Facade = "facade",
    /** The mutation arrived through collaboration. */
    Remote = "remote",
    /** The local Undo stack replayed the inverse mutation. */
    Undo = "undo",
    /** The local Redo stack replayed the mutation. */
    Redo = "redo",
    /** An import pipeline applied a mutation carrying hierarchy metadata. */
    Import = "import"
}
/** Serializable semantic description carried with one atomic JSON1 mutation. */
export interface IBaseHierarchyChange {
    /** Table containing both the changed record and its Parent field. */
    tableId: string;
    /** Canonical same-table, single-value RecordLink field id. */
    fieldId: string;
    /** Record whose effective direct parent changed. */
    recordId: string;
    /** Effective parent before the atomic mutation, or `null` for a root. */
    oldParentRecordId: string | null;
    /** Effective parent after the atomic mutation, or `null` for a root. */
    parentRecordId: string | null;
}
export interface IBaseHierarchyRecordPatch {
    recordId: RecordId;
    values: Record<FieldId, BaseCellValue>;
}
/** Internal reusable relation index. It contains every record, before view filtering. */
export interface IBaseHierarchyIndex {
    fieldId: FieldId;
    parentByRecordId: Map<RecordId, RecordId | null>;
    childrenByParentId: Map<RecordId | null, RecordId[]>;
    depthByRecordId: Map<RecordId, number>;
    subtreeHeightByRecordId: Map<RecordId, number>;
    invalidReasonByRecordId: Map<RecordId, BaseHierarchyInvalidReason>;
    rootRecordIds: RecordId[];
    orderedRecordIds: RecordId[];
}
export declare function isBaseHierarchyField(table: ITableSnapshot, fieldId: FieldId | null | undefined): fieldId is FieldId;
export declare function getBaseHierarchyFieldId(table: ITableSnapshot): FieldId | null;
/** Resolve the actual Parent field or the deterministic virtual field used before first write. */
export declare function resolveBaseHierarchyFieldId(table: ITableSnapshot): FieldId;
/** Create the canonical Parent RecordLink materialized by the first hierarchy write. */
export declare function createBaseHierarchyParentField(table: ITableSnapshot, fieldId?: string, name?: string): IFieldSnapshot;
/** The one table-level Parent field participating in hierarchy validation. */
export declare function getActiveBaseHierarchyFieldIds(table: ITableSnapshot): FieldId[];
/**
 * Validate a multi-cell write against every active Grid or Kanban hierarchy.
 * The proposed table is evaluated as a whole, so a batch can detach an edge and
 * attach another edge atomically without being rejected because of patch order.
 */
export declare function validateBaseHierarchyRecordPatches(table: ITableSnapshot, patches: readonly IBaseHierarchyRecordPatch[]): IBaseHierarchyChange[];
/** Validate Parent values on records that will be inserted by one atomic command. */
export declare function validateBaseHierarchyRecordCreations(table: ITableSnapshot, records: readonly IRecordSnapshot[]): IBaseHierarchyChange[];
/** Parent edges that will be cleared when the supplied records are deleted. */
export declare function getBaseHierarchyDeletePromotions(table: ITableSnapshot, recordIds: readonly RecordId[]): IBaseHierarchyChange[];
/**
 * Build a deterministic forest from the stored Parent links.
 *
 * Invalid links remain untouched in record data. The effective forest cuts only
 * the invalid edge, so every client renders the same safe result without a
 * collaboration repair mutation.
 */
export declare function buildBaseHierarchyIndex(table: ITableSnapshot, fieldId: FieldId, orderedRecordIds?: readonly RecordId[]): IBaseHierarchyIndex;
/** Add context ancestors to filtered/search matches and emit a depth-first projection. */
export declare function projectBaseHierarchy(index: IBaseHierarchyIndex, rows: readonly IProjectedRow[], includedRecordIds?: ReadonlySet<RecordId>): {
    rows: IProjectedRow[];
    hierarchy: IBaseHierarchyProjection;
};
export declare function getVisibleBaseHierarchyRows(projection: IGridProjection, collapsedRecordIds?: ReadonlySet<RecordId>): IProjectedRow[];
/** Validate a proposed move without mutating the table. */
export declare function validateBaseHierarchyMove(index: IBaseHierarchyIndex, recordId: RecordId, parentRecordId: RecordId | null): {
    valid: true;
} | {
    valid: false;
    reason: BaseHierarchyInvalidReason;
};
