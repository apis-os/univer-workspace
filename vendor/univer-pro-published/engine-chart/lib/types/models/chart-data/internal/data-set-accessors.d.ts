import type { DimensionDefinitionLoose, IUniverDataSet, OptionDataValue } from '../../../types';
export declare function getRawDataValue(dataSet: IUniverDataSet, fieldIndex: number, itemIndex: number): OptionDataValue;
export declare function getDataValue(dataSet: IUniverDataSet, fieldIndex: number, itemIndex: number): OptionDataValue;
export declare function getDataLabel(dataSet: IUniverDataSet, fieldIndex: number, itemIndex: number): string;
export declare function getDimensionLabel(value: DimensionDefinitionLoose | undefined): string;
export declare function getDataSetItemCount(dataSet: IUniverDataSet, fieldIndex: number, categoryIndex?: number): number;
export declare function getDataSetRowCount(dataSet: IUniverDataSet): number;
