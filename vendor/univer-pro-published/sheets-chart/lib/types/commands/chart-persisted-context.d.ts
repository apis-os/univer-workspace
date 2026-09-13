import type { IChartContext } from '@univerjs-pro/engine-chart';
export type IChartPersistedContext = Pick<IChartContext, 'categoryIndexes' | 'multiLevelCategoryAxis' | 'seriesIndexes' | 'useDateAxis' | 'histogram'>;
export declare function replacePersistedChartContext(current: IChartContext, persisted: IChartPersistedContext): IChartContext;
