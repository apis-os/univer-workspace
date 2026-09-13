import type { IUniverDataSet } from '../../../types';
import type { IChartLocaleTexts } from '../../common/chart-locale-texts';
export declare enum CartesianPointValueIndex {
    X = 0,
    Y = 1,
    Size = 2,
    Label = 3
}
export interface ICartesianPointRecord {
    sourceIndex: number;
    x: number;
    y: number;
    label?: string;
    size?: number;
    group?: string;
}
export interface ICartesianPointData {
    isValid: boolean;
    xIndex: number;
    yIndex: number;
    xName: string;
    yName: string;
    labelName?: string;
    sizeName?: string;
    groupName?: string;
    records: ICartesianPointRecord[];
}
interface ICartesianPointRoleIndexes {
    xIndex: number;
    yIndex: number;
    labelIndex?: number;
    sizeIndex?: number;
    seriesIndex?: number;
    headers?: string[];
}
/** Builds normalized Cartesian point records consumed by coordinate-chart converters. */
export declare function buildCartesianPointData(dataSet: IUniverDataSet, roles: ICartesianPointRoleIndexes, localeTexts: IChartLocaleTexts, visitRecord?: (record: ICartesianPointRecord) => void): ICartesianPointData;
export {};
