import type { IChartContext, IChartSnapshotContext, IUniverDataSet, OptionDataValue } from '../../types';
import { ChartSourceDataTypeEnum } from '../../enum';
export interface IChartFieldSelection {
    categoryIndexes: number[];
    seriesIndexes: number[];
}
type ChartContextWithHistoricalCategoryIndex = Partial<IChartContext> & {
    categoryIndex?: unknown;
};
export declare function countChartFieldTypes(field: Array<OptionDataValue | undefined>, sourceTypes?: Array<ChartSourceDataTypeEnum | undefined>): {
    numbers: number;
    strings: number;
    total: number;
};
export declare function classifyChartFields(dataSet: Pick<IUniverDataSet, 'source' | 'sourceType' | 'categorySpans'>): IChartFieldSelection;
export declare function resolveChartFieldSelectionContext(dataSet: IUniverDataSet, context: IChartContext, initializeSelection?: boolean): IChartContext;
/** The single compatibility boundary for the historical scalar snapshot field. */
export declare function normalizeChartSnapshotContext(context: IChartSnapshotContext): IChartContext;
/** Decodes the only supported historical field while preserving every canonical context field. */
export declare function decodeHistoricalCategoryIndex(context: ChartContextWithHistoricalCategoryIndex): Partial<IChartContext>;
export {};
