import type { IChartSnapshot, IUniverDataSet } from '@univerjs-pro/engine-chart';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export interface IInferInitialChartContextOptions {
    chartType: ChartTypeBits;
    context?: NonNullable<IChartSnapshot['context']>;
}
export declare function inferInitialChartContext(dataSet: IUniverDataSet, options: IInferInitialChartContextOptions): NonNullable<IChartSnapshot['context']>;
