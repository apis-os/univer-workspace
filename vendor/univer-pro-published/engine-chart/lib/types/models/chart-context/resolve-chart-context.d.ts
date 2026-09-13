import type { ChartTypeBits } from '../../enum';
import type { IChartContext, IUniverDataSet } from '../../types';
export declare function generateChartContext(dataSet: IUniverDataSet, context?: IChartContext, initializeSelection?: boolean): IChartContext;
/** Preserves a usable field selection and re-infers it when the latest data shape invalidates it. */
export declare function reconcileChartContext(dataSet: IUniverDataSet, context: IChartContext, chartType: ChartTypeBits): IChartContext;
