import type { IUniverDataSet, IUniverDataSetCategorySpan } from '../../../types';
export interface IDataSetCategorySpanLookup {
    get(fieldIndex: number, itemIndex: number): IUniverDataSetCategorySpan | undefined;
}
export declare function createDataSetCategorySpanLookup(dataSet: IUniverDataSet, fieldIndexes: readonly number[], itemCount: number): IDataSetCategorySpanLookup;
export declare function getDataSetCategorySpan(dataSet: IUniverDataSet, fieldIndex: number, itemIndex: number): IUniverDataSetCategorySpan | undefined;
export declare function getEffectiveCategoryLabel(dataSet: IUniverDataSet, fieldIndex: number, itemIndex: number, categorySpanLookup?: IDataSetCategorySpanLookup): string;
