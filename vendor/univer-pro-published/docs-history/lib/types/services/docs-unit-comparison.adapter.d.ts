import type { IUnitComparisonAdapter, IUnitComparisonAdapterInput, IUnitComparisonAdapterResult } from '@univerjs-pro/edit-history';
import { UniverInstanceType } from '@univerjs/core';
/** Stable paragraph and structure adapter for Docs history and snapshot comparison. */
export declare class DocsUnitComparisonAdapter implements IUnitComparisonAdapter {
    readonly type = UniverInstanceType.UNIVER_DOC;
    compare(input: IUnitComparisonAdapterInput): IUnitComparisonAdapterResult;
}
