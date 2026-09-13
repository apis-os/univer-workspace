import type { PivotView } from '@univerjs-pro/engine-pivot';
import type { Nullable } from '@univerjs/core';
import type { IPivotCellPositionInfo, IPivotRangesInfo, IPivotTableCellData } from '../const/type';
import { DateSystem, ObjectMatrix } from '@univerjs/core';
export interface IViewTranslateCtx {
    view: Nullable<PivotView>;
    pivotTableId: string;
    isEmpty: boolean;
    targetCellInfo: IPivotCellPositionInfo;
    textInfo: Record<string, string>;
    direction?: 'ltr' | 'rtl';
    dateSystem?: DateSystem;
}
interface IViewTranslateResult {
    matrix: ObjectMatrix<Nullable<IPivotTableCellData>>;
    rangesCache: IPivotRangesInfo;
}
export declare const adjustViewForCalcEngine: (ctx: IViewTranslateCtx) => IViewTranslateResult;
export {};
