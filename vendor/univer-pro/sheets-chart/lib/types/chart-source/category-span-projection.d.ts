import type { IUniverDataSetCategorySpan } from '@univerjs-pro/engine-chart';
import type { IRange } from '@univerjs/core';
export interface IProjectSheetCategorySpansOptions {
    mergeRanges: readonly IRange[];
    worksheetRows: readonly number[];
    worksheetColumns: readonly number[];
    transpose: boolean;
    fieldIndexOffset?: number;
}
export declare function projectSheetCategorySpans(options: IProjectSheetCategorySpansOptions): IUniverDataSetCategorySpan[];
