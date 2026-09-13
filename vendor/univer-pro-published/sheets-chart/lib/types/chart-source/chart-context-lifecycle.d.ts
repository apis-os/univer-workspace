import type { ChartTypeBits, IChartContext, IChartSnapshot, IUniverDataSet } from '@univerjs-pro/engine-chart';
import type { IInitialSheetChartMapping } from './initial-sheet-chart-source-inference';
type PersistedChartContext = NonNullable<IChartSnapshot['context']>;
export declare function applyPersistedChartContext(dataSet: IUniverDataSet, persistedContext: PersistedChartContext): IChartContext;
export declare function buildInitialChartContext(dataSet: IUniverDataSet, chartType: ChartTypeBits, mapping?: Pick<IInitialSheetChartMapping, 'categoryIndexes' | 'seriesIndexes'>, authoredContext?: PersistedChartContext): PersistedChartContext;
export declare function rebuildChartContextForSourceChange(dataSet: IUniverDataSet, chartType: ChartTypeBits, currentContext: IChartContext, mapping?: Pick<IInitialSheetChartMapping, 'categoryIndexes' | 'seriesIndexes'>): IChartContext;
export declare function reconcileChartContextForDataRefresh(dataSet: IUniverDataSet, chartType: ChartTypeBits, currentContext: IChartContext): IChartContext;
export {};
