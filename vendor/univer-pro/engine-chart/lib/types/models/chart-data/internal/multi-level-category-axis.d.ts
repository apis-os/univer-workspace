import type { IChartDataCategory, IUniverDataSet } from '../../../types';
interface INormalizeMultiLevelCategoryAxisInput {
    dataSet: IUniverDataSet;
    categoryIndexes: number[];
    headers?: string[];
}
export declare function normalizeMultiLevelCategoryAxis(input: INormalizeMultiLevelCategoryAxisInput): IChartDataCategory | undefined;
export {};
