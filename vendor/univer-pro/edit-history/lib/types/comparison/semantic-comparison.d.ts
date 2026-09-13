import type { IUnitComparisonItem, IUnitComparisonLeafChange, IUnitComparisonScope, UnitComparisonEntityType } from './types';
import { UnitComparisonChangeKind } from './types';
/**
 * Aligns unique stable identities without changing either side's native order.
 * Moved identities may occupy two one-sided rows; swapping inputs mirrors the same rows.
 * Runs in O((N + M) log(N + M)) time and linear space, without a quadratic LCS matrix.
 */
export declare function alignComparisonIdentities(left: readonly string[], right: readonly string[]): Array<{
    readonly leftIndex: number | null;
    readonly rightIndex: number | null;
}>;
/** One product-owned entity projected into the common stable-ID comparison algorithm. */
export interface ISemanticComparisonEntry {
    /** Stable identifier used to align the same semantic entity on both sides. */
    readonly stableId: string;
    /** Zero-based position within the entity's product-owned collection. */
    readonly position: number;
    /** Optional human-readable name copied from product data. */
    readonly displayName?: string;
    /** Optional product-native identifier used for navigation when it differs from `stableId`. */
    readonly nativeStableId?: string;
    /** Serializable product value compared at leaf level. */
    readonly value: unknown;
}
/** Complete left and right collections passed to the common stable-ID comparison algorithm. */
export interface ISemanticComparisonCollectionInput {
    /** Product-neutral category emitted for every changed entity in this collection. */
    readonly entityType: UnitComparisonEntityType;
    /** Stable identifier of the containing worksheet, page, table, or other parent entity. */
    readonly parentStableId?: string;
    /** Ordered entities from the left materialized UnitData state. */
    readonly left: readonly ISemanticComparisonEntry[];
    /** Ordered entities from the right materialized UnitData state. */
    readonly right: readonly ISemanticComparisonEntry[];
}
/** Builds symmetric stable-ID items for a product adapter. */
export declare function buildSemanticComparisonItems(input: ISemanticComparisonCollectionInput): IUnitComparisonItem[];
/** Produces normalized, bounded leaf changes without leaking product UI strings. */
export declare function buildSemanticLeafChanges(before: unknown, after: unknown, kind?: UnitComparisonChangeKind): IUnitComparisonLeafChange[];
/** Preserves explicit product order and canonically orders dictionary-only entries. */
export declare function recordComparisonEntries(value: unknown, order: unknown, project?: (entry: unknown) => unknown): ISemanticComparisonEntry[];
/**
 * Builds changed product-view scopes from the same stable entries used by a product comparison adapter.
 * Scope ordering preserves the right state and inserts deleted left-only scopes next to their surviving anchors.
 */
export declare function buildUnitComparisonScopes(input: {
    /** Scope root entity category, such as worksheet, slide, table, or Board page. */
    readonly entityType: UnitComparisonEntityType;
    /** Complete semantic items emitted by the product adapter. */
    readonly items: readonly IUnitComparisonItem[];
    /** Ordered scope entries from the left materialized state. */
    readonly left: readonly ISemanticComparisonEntry[];
    /** Ordered scope entries from the right materialized state. */
    readonly right: readonly ISemanticComparisonEntry[];
}): IUnitComparisonScope[];
/**
 * Assigns every changed item reachable from a product view to that view and builds its scope summary.
 * Optional reference entries cover product resources that are linked indirectly, for example
 * slide -> chart element -> chart -> chart data source.
 */
export declare function buildScopedUnitComparison(input: {
    /** Scope root entity category, such as worksheet, slide, table, or Board page. */
    readonly entityType: UnitComparisonEntityType;
    /** Complete semantic items emitted by the product adapter. */
    readonly items: readonly IUnitComparisonItem[];
    /** Ordered scope entries from the left materialized state. */
    readonly left: readonly ISemanticComparisonEntry[];
    /** Ordered scope entries from the right materialized state. */
    readonly right: readonly ISemanticComparisonEntry[];
    /** Optional complete scope values used only to resolve linked product resources. */
    readonly references?: {
        readonly left: readonly ISemanticComparisonEntry[];
        readonly right: readonly ISemanticComparisonEntry[];
    };
}): {
    readonly items: IUnitComparisonItem[];
    readonly scopes: IUnitComparisonScope[];
};
/** Converts an ID-bearing array into stable comparison entries. */
export declare function arrayComparisonEntries(value: unknown, idKey: string, project?: (entry: unknown) => unknown): ISemanticComparisonEntry[];
/** Reads a plugin resource collection from serialized UnitData. */
export declare function resourceComparisonEntries(snapshot: unknown, pluginName: string, collectionKey?: string): ISemanticComparisonEntry[];
/** Narrows a non-array object to a string-keyed record for snapshot traversal. */
export declare function asRecord(value: unknown): Record<string, unknown> | undefined;
/** Creates an immutable projection that omits product metadata not owned by the compared entity. */
export declare function withoutComparisonKeys(...keys: readonly string[]): (value: unknown) => unknown;
/** Serializes JSON-like data with deterministic object-key ordering for equality and stable IDs. */
export declare function stableJson(value: unknown): string;
