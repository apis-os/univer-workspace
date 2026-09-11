import type { IUnitComparisonAdapter, IUnitComparisonAdapterInput, IUnitComparisonAdapterResult } from '@univerjs-pro/edit-history';
import { UniverInstanceType } from '@univerjs/core';
/**
 * Semantic adapter for workbook structure, cells, formulas, styles, and feature resources.
 * History-assisted row/column items compact contiguous unstyled axes. Their location targets contain
 * `axis`, `start`, and `end` (zero-based, inclusive), so consumers can navigate the entire affected range.
 */
export declare class SheetsUnitComparisonAdapter implements IUnitComparisonAdapter {
    readonly type = UniverInstanceType.UNIVER_SHEET;
    compare(input: IUnitComparisonAdapterInput): IUnitComparisonAdapterResult;
}
