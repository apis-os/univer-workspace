import type { IChartSnapshot } from '@univerjs-pro/engine-chart';
import type { IChartSourceMultiRangeItem, ISheetChartSourceSingleRange } from '@univerjs-pro/sheets-chart';
import type { IDrawingParam } from '@univerjs/core';
export interface IChartModelCopySource extends Pick<IChartSnapshot, 'chartType' | 'context' | 'style' | 'dataAggregation'> {
    rangeInfo: ISheetChartSourceSingleRange | IChartSourceMultiRangeItem[];
}
export interface IChartModelCopyPlanEntry {
    targetChartId: string;
    source: IChartModelCopySource;
}
export interface IChartModelCopyPlanScope {
    unitId: string;
    sourceSubUnitId: string;
    targetSubUnitId: string;
}
export declare function createChartModelCopyPlan(copyContext: Map<string, unknown> | undefined, charts: readonly IDrawingParam[], scope: IChartModelCopyPlanScope, getSource: (chart: IDrawingParam) => IChartModelCopySource | undefined): IChartModelCopyPlanEntry[];
