import type { IUnitComparisonAdapter, IUnitComparisonAdapterInput, IUnitComparisonAdapterResult } from '@univerjs-pro/edit-history';
import { UniverInstanceType } from '@univerjs/core';
/** Compares Base raw table data; view rendering is intentionally outside the semantic contract. */
export declare class BasesUnitComparisonAdapter implements IUnitComparisonAdapter {
    readonly type = UniverInstanceType.UNIVER_BASE;
    compare(input: IUnitComparisonAdapterInput): IUnitComparisonAdapterResult;
}
