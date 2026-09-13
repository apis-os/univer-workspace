import type { IPreparedUnitComparison, IUnitComparisonInput, IUnitComparisonResult } from './types';
import { UnitComparisonAdapterRegistryService } from './unit-comparison-adapter-registry.service';
/** DI-managed comparison entry used by Univer plugins and Facade APIs. */
export declare class UnitComparisonService {
    private readonly _adapterRegistry;
    constructor(_adapterRegistry: UnitComparisonAdapterRegistryService);
    /** Runs the registered product adapter and applies the optional query in one call. */
    compare(input: IUnitComparisonInput): IUnitComparisonResult;
    /** Runs the registered product adapter once over an owned copy. */
    prepare(input: Omit<IUnitComparisonInput, 'query'>): IPreparedUnitComparison;
    /** Filters and pages a prepared comparison without rerunning the product algorithm. */
    query(prepared: IPreparedUnitComparison, query?: IUnitComparisonInput['query']): IUnitComparisonResult;
}
