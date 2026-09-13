import type { IUnitComparisonAdapter, IUnitComparisonAdapterInput, IUnitComparisonAdapterResult } from '@univerjs-pro/edit-history';
import { UniverInstanceType } from '@univerjs/core';
/** Snapshot semantic adapter for Board pages, elements, theme, charts, and tables. */
export declare class BoardsUnitComparisonAdapter implements IUnitComparisonAdapter {
    readonly type = UniverInstanceType.UNIVER_BOARD;
    compare(input: IUnitComparisonAdapterInput): IUnitComparisonAdapterResult;
}
