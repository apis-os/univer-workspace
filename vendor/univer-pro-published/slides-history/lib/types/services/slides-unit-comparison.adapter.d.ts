import type { IUnitComparisonAdapter, IUnitComparisonAdapterInput, IUnitComparisonAdapterResult } from '@univerjs-pro/edit-history';
import { UniverInstanceType } from '@univerjs/core';
/** Snapshot semantic adapter for Slides history and cross-worktree comparison. */
export declare class SlidesUnitComparisonAdapter implements IUnitComparisonAdapter {
    readonly type = UniverInstanceType.UNIVER_SLIDE;
    compare(input: IUnitComparisonAdapterInput): IUnitComparisonAdapterResult;
}
