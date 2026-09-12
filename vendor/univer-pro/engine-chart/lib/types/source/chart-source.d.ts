import type { IChartDataSource, IUniverDataSet } from '../types';
import { Disposable } from '@univerjs/core';
export declare const EMPTY_CHART_DATA_SET: IUniverDataSet;
export declare abstract class ChartDataSource extends Disposable implements IChartDataSource {
    private readonly _dataSet$;
    readonly data$: import("rxjs").Observable<IUniverDataSet>;
    getDataSet(): IUniverDataSet;
    protected publishDataSet(dataSet: IUniverDataSet): void;
    protected getEmptyDataSet(): IUniverDataSet;
    dispose(): void;
}
