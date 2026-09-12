import type { OptionDataValue } from '../types';
import { ChartSourceDataTypeEnum } from '../enum';
export declare function getCategoryData(source: OptionDataValue[][], categoryIndex: number, sourceType?: ChartSourceDataTypeEnum[][]): {
    categoryData: Array<OptionDataValue | undefined>;
    isAllDateTime: boolean;
};
