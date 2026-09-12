import type { ICreateUnitOptions, IDisposable, UniverInstanceType } from '@univerjs/core';
import type { ResourceRefInput } from '../common/resource-ref';
export interface IReferencedUnitRuntimeRecord {
    /** Canonical ResourceRef string that produced this runtime unit. */
    ref: string;
    /** Runtime unit id returned by the provider and registered in Univer runtime. */
    unitId: string;
    /** Runtime unit type validated by the manager. */
    unitType: UniverInstanceType;
}
export interface IReferencedUnitEnsureOptions {
    /** Declared expected unit type. The manager rejects provider mismatch. */
    unitType?: UniverInstanceType;
    signal?: AbortSignal;
    /** Runtime unit creation options forwarded to providers that create units. */
    createOptions?: ICreateUnitOptions;
}
export interface IReferencedUnitUsageCount {
    /** Unit that depends on another unit's data. */
    fromUnitId: string;
    /** Unit that is depended on. */
    toUnitId: string;
    /** Aggregated live edge count between fromUnitId and toUnitId. */
    count: number;
}
export type IReferencedUnitDataValue = string | number | boolean | null;
export declare enum ReferencedUnitDataType {
    RANGE = "range",
    TABLE = "table"
}
export interface IReferencedUnitReadRangeDataResult {
    /** Data shape returned by this read. Current implementation supports range data. */
    type: ReferencedUnitDataType.RANGE;
    /** Stable worksheet identity resolved by the provider. */
    sheetId?: string;
    /** Worksheet name resolved by the provider. */
    sheetName?: string;
    /** Two-dimensional primitive values; a single cell is represented as 1 x 1. */
    values: IReferencedUnitDataValue[][];
}
export interface IReferencedUnitReadTableDataResult {
    type: ReferencedUnitDataType.TABLE;
    tableName: string;
    sheetName: string;
    sheetId: string;
    range: {
        startRow: number;
        endRow: number;
        startColumn: number;
        endColumn: number;
    };
    columns: string[];
    showHeader?: boolean;
    values: IReferencedUnitDataValue[][];
}
export type IReferencedUnitReadDataResult = IReferencedUnitReadRangeDataResult | IReferencedUnitReadTableDataResult;
export interface IReferencedUnitReadDataOptions {
    signal?: AbortSignal;
}
export declare enum ReferencedUnitErrorCode {
    ProviderMissing = "provider-missing",
    ProviderConflict = "provider-conflict",
    UnitTypeMismatch = "unit-type-mismatch",
    MissingDataSelector = "missing-data-selector"
}
export declare class ReferencedUnitError extends Error {
    readonly code: ReferencedUnitErrorCode;
    readonly details?: unknown;
    constructor(code: ReferencedUnitErrorCode, details?: unknown);
}
export declare const IReferencedUnitManagerService: import("@wendellhu/redi").IdentifierDecorator<IReferencedUnitManagerService>;
export interface IReferencedUnitManagerService {
    /**
     * Materialize the runtime unit described by `ref`.
     *
     * The manager owns provider selection, pending/result bookkeeping and unit
     * type validation. This method never binds an embed owner.
     */
    ensure(ref: ResourceRefInput, options?: IReferencedUnitEnsureOptions): Promise<IReferencedUnitRuntimeRecord>;
    /**
     * Read data selected by a ResourceRef.
     *
     * The manager normalizes `ref` and requires a data selector such as a range
     * part. This path never creates an embed owner or unit claim.
     */
    readData(ref: ResourceRefInput, options?: IReferencedUnitReadDataOptions): Promise<IReferencedUnitReadDataResult>;
    /**
     * Watch the selected data when its provider can publish local or remote changes.
     *
     * Providers without a change channel return `undefined`; callers can still
     * use `readData` and explicit refresh in that case.
     */
    watchData(ref: ResourceRefInput, onChange: () => void): IDisposable | undefined;
    /**
     * Register one unit-to-unit usage edge for GC facts.
     *
     * The returned disposable releases exactly this usage count once; repeated
     * dispose calls are no-op.
     */
    addUsage(fromUnitId: string, toUnitId: string, count?: number): IDisposable;
    /**
     * Clear manager runtime facts involving the given unit.
     */
    releaseUnit(unitId: string): void;
}
