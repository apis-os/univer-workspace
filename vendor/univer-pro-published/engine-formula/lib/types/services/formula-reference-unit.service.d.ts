import type { IRange } from '@univerjs/core';
/** Reference syntax produced by {@link buildFormulaReference} and `FFormula.buildReference()`. */
export declare enum FormulaReferenceType {
    /** A worksheet A1 range such as `Sheet1!A1:B10` or `'[Sales]Data'!A1:B10`. */
    SHEET_RANGE = "sheet-range",
    /** A Base structured reference such as `Orders[Amount]` or `[Sales]!Orders[Amount]`. */
    TABLE_COLUMN = "table-column"
}
/**
 * Explicit Unit identity supplied by the caller when serializing a formula reference.
 * Always use the stable Unit ID; never infer it from `formulaQualifier`.
 */
export interface IFormulaReferenceUnit {
    /**
     * Display name written into the formula qualifier. Supply the name only, without
     * surrounding brackets or quotes; the builder applies formula escaping.
     */
    formulaQualifier: string;
    /**
     * Stable Sheet or Base Unit ID. When it equals `hostUnitId`, the builder emits
     * a Host-local reference; otherwise it emits a cross-Unit qualifier.
     */
    unitId: string;
}
/** Sheet-range reference target accepted by {@link buildFormulaReference}. */
export interface IFormulaSheetRangeReferenceTarget {
    kind: FormulaReferenceType.SHEET_RANGE;
    /** Source worksheet name, without formula quotes. */
    sheetName: string;
    /** Zero-based inclusive source range. */
    range: IRange;
}
/** Base/structured-table reference target accepted by {@link buildFormulaReference}. */
export interface IFormulaTableColumnReferenceTarget {
    kind: FormulaReferenceType.TABLE_COLUMN;
    /** Source Base table name, without formula quotes. */
    tableName: string;
    /** First source field name. */
    columnName: string;
    /** Optional final column for a contiguous structured-reference range. */
    endColumnName?: string;
}
/** A Sheet range or Base structured-reference target serialized by {@link buildFormulaReference}. */
export type FormulaReferenceTarget = IFormulaSheetRangeReferenceTarget | IFormulaTableColumnReferenceTarget;
/**
 * Input used to serialize one formula reference fragment.
 *
 * `hostUnitId === unit.unitId` produces Host-local syntax. Different IDs produce
 * cross-Unit syntax using `unit.formulaQualifier`.
 */
export interface IBuildFormulaReferenceOptions {
    /** Stable ID of the Unit that will own the formula. */
    hostUnitId: string;
    /** Stable identity and public qualifier of the referenced Sheet or Base Unit. */
    unit: IFormulaReferenceUnit;
    /** Sheet range or structured-table column to serialize. */
    target: FormulaReferenceTarget;
}
/**
 * Purely serializes a Sheet-range or Base-table reference fragment.
 *
 * This low-level helper never persists a Host External Reference, loads a Unit, or
 * starts calculation. Use `univerAPI.getFormula().buildReference()` for normal
 * Facade authoring because that method also synchronizes cross-Unit bindings.
 * The returned fragment has no leading `=` and is intended to be embedded in a
 * complete formula.
 *
 * @example Serialize a Host-local Sheet range
 * ```ts
 * const reference = buildFormulaReference({
 *     hostUnitId: 'host-workbook',
 *     unit: {
 *         unitId: 'host-workbook',
 *         formulaQualifier: 'Host Workbook',
 *     },
 *     target: {
 *         kind: FormulaReferenceType.SHEET_RANGE,
 *         sheetName: 'Data',
 *         range: { startRow: 0, endRow: 9, startColumn: 1, endColumn: 1 },
 *     },
 * });
 * // reference === 'Data!B1:B10'
 * ```
 *
 * @example Serialize a cross-Unit Base column
 * ```ts
 * const reference = buildFormulaReference({
 *     hostUnitId: 'host-document',
 *     unit: {
 *         unitId: 'sales-base',
 *         formulaQualifier: 'Sales Base',
 *     },
 *     target: {
 *         kind: FormulaReferenceType.TABLE_COLUMN,
 *         tableName: 'Orders',
 *         columnName: 'Amount',
 *     },
 * });
 * // reference === '[Sales Base]!Orders[Amount]'
 * // The caller must persist the Host External Reference separately.
 * ```
 */
export declare function buildFormulaReference(options: IBuildFormulaReferenceOptions): string;
