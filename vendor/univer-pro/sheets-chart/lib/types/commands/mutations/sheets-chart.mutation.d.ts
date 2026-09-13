import type { ChartTypeBits, IChartSnapshot } from '@univerjs-pro/engine-chart';
import type { IMutation, IRange } from '@univerjs/core';
import type { ISheetCommandSharedParams } from '@univerjs/sheets';
import type { IChartSourceMultiRangeItem, ISheetChartSourceRanges } from '../../models/types';
type IInsertSheetsChartMutationCommonParams = ISheetCommandSharedParams & Omit<IChartSnapshot, 'id' | 'chartType' | 'orient'> & {
    chartId: string;
    chartType: ChartTypeBits;
};
/**
 * Persisted source shape for insert-chart changesets. Keep `range` / `ranges` stable for replay compatibility;
 * historical Single payloads may omit source ownership, direction, and `headerRow`.
 */
export type IInsertSheetsChartMutationSource = {
    range: IRange;
    rangeUnitId: string;
    rangeSubUnitId: string;
    isRowDirection?: boolean;
    headerRow?: number;
} | {
    ranges: IChartSourceMultiRangeItem[];
};
export type IInsertSheetsChartMutationParams = IInsertSheetsChartMutationCommonParams & IInsertSheetsChartMutationSource;
/** Converts the internal chart source into the stable mutation shape without persisting `rangeInfo`. */
export declare function toInsertChartMutationSource(source: ISheetChartSourceRanges): IInsertSheetsChartMutationSource;
export interface IRemoveSheetsChartMutationParams extends ISheetCommandSharedParams {
    chartId: string;
}
export declare const InsertSheetsChartMutation: IMutation<IInsertSheetsChartMutationParams>;
export declare const RemoveSheetsChartMutation: IMutation<IRemoveSheetsChartMutationParams>;
export {};
