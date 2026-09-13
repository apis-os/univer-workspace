import type { IChartDataSeries } from '@univerjs-pro/engine-chart';
import type { IRange, Workbook } from '@univerjs/core';
import type { IInitialSheetChartSourceResult } from '../chart-source/initial-sheet-chart-source-inference';
import type { IChartSourceMultiRangeItem, ISheetChartSourceRanges, ISheetChartSourceSingleRange } from '../models/types';
import type { ChartSourceDescription, ChartSourceSpec, IChartDiagnostic, IChartRangeSourceDescription } from './types';
import { ChartFacadeHostGroup, ChartSourceKind } from './types';
export interface ISheetChartSourceContext {
    unitId: string;
    subUnitId: string;
    workbook: Workbook;
    inferInitialChartSource?: (rangeInfo: ISheetChartSourceRanges) => IInitialSheetChartSourceResult;
    resolveAutoIsRowDirection?: (rangeInfo: ISheetChartSourceSingleRange) => boolean;
}
export interface IResolvedChartRangeSource {
    kind: ChartSourceKind.Range;
    range: IRange;
    sourceSheetName?: string;
    rangeInfo: ISheetChartSourceSingleRange;
    isRowDirection?: boolean;
}
export interface IResolvedChartMultiRangeSource {
    kind: ChartSourceKind.Ranges;
    ranges: IChartSourceMultiRangeItem[];
    isRowDirection: boolean;
}
export type ResolvedChartSource = IResolvedChartRangeSource | IResolvedChartMultiRangeSource;
export declare function resolveSourceSpec(source: ChartSourceSpec | undefined, context: ISheetChartSourceContext, diagnostics: IChartDiagnostic[], path?: ChartFacadeHostGroup): ResolvedChartSource | null;
/**
 * Reads source header entries so name-based series selectors can be resolved
 * before the insert command creates a chart model.
 */
export declare function resolveSourceSeries(source: ResolvedChartSource, context: ISheetChartSourceContext, categoryIndex?: number): IChartDataSeries[];
export declare function buildSourceDescription(source: ISheetChartSourceSingleRange, workbook?: Workbook): IChartRangeSourceDescription;
export declare function buildMultiRangeSourceDescription(source: IChartSourceMultiRangeItem[], workbook?: Workbook): ChartSourceDescription;
