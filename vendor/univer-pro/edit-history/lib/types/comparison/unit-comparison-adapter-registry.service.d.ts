import type { IDisposable } from '@univerjs/core';
import type { IUnitComparisonAdapterInput, IUnitComparisonAdapterResult, UnitComparisonType } from './types';
import { Disposable } from '@univerjs/core';
/** Product-owned adapter that projects two materialized UnitData states into semantic differences. */
export interface IUnitComparisonAdapter {
    /** Univer Unit type handled by this adapter. */
    readonly type: UnitComparisonType;
    /** Produces a complete, unpaged semantic comparison for two materialized UnitData states. */
    compare(input: IUnitComparisonAdapterInput): IUnitComparisonAdapterResult;
}
/** Stores product-owned semantic comparison adapters by Univer unit type. */
export declare class UnitComparisonAdapterRegistryService extends Disposable {
    private readonly _adapters;
    /** Registers one adapter until the returned disposable is disposed. */
    register(adapter: IUnitComparisonAdapter): IDisposable;
    /** Returns the adapter registered for a Univer Unit type. */
    get(type: UnitComparisonType): IUnitComparisonAdapter | undefined;
    dispose(): void;
}
