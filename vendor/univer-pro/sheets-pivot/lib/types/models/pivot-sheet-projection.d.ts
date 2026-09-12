import type { PivotView } from '@univerjs-pro/engine-pivot';
import type { IRange } from '@univerjs/core';
import type { IPivotSheetProjection } from '../const/type';
export declare function createPivotSheetProjection(view: PivotView, startColumn: number, direction: 'ltr' | 'rtl'): IPivotSheetProjection;
export declare function mapPivotSheetColumn(projection: IPivotSheetProjection, column: number): number;
export declare function mapPivotSheetRange(projection: IPivotSheetProjection, range: IRange): IRange;
