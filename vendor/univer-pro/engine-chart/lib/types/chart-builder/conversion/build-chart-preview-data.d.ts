import type { ChartModel } from '../../models/chart-model/chart-model';
import type { IChartData, IUniverDataSet } from '../../types';
import type { ChartPendingConfig } from '../chart-types';
/** Builds fresh engine semantic data from the model plus an uncommitted Facade patch. */
export declare function buildChartPreviewData(model: ChartModel, pending: ChartPendingConfig, dataSet?: IUniverDataSet): IChartData;
