import type { ICellData, IDocumentData, IRange, Nullable, ObjectMatrix, ParseOptions, Styles, Worksheet } from '@univerjs/core';
import type { IChartSourceMultiRangeItem, ISheetChartSourceSingleRange, OptionDataValue } from '../models/types';
import { ChartSourceDataTypeEnum } from '@univerjs-pro/engine-chart';
import { numfmt } from '@univerjs/core';
type ChartSourcePatternInfoRecord = Record<string, ReturnType<typeof numfmt.getFormatInfo>>;
export interface IChartSourceCellEntry {
    value: OptionDataValue;
    label: string;
    sourceType: ChartSourceDataTypeEnum;
}
export declare const getStringFromDataStream: (data: IDocumentData) => string;
export declare function convertArrayLikeRangeInfoToMatrix(sourceRange: IRange, sheet: Worksheet, index: number, matrix: ObjectMatrix<OptionDataValue>, sourceTypeMatrix: ObjectMatrix<ChartSourceDataTypeEnum>, sourceLabelsMatrix: ObjectMatrix<string>, styles: Styles, numfmtOptions?: ParseOptions): void;
export declare function getCellSourceEntry(worksheet: Worksheet, row: number, column: number, styles: Styles, patternInfoRecord: ChartSourcePatternInfoRecord, numfmtOptions?: ParseOptions): IChartSourceCellEntry;
export declare function convertCellDataToSourceEntry(cellData: Nullable<ICellData>, styles: Styles, patternInfoRecord: ChartSourcePatternInfoRecord, sourceCellData?: Nullable<ICellData>, numfmtOptions?: ParseOptions): IChartSourceCellEntry;
/**
 * @description  this function is used to change the single range info to multi range info, we will split the single range to two range, one is the dimension range, the other is the value range
 * @param {ISheetChartSourceSingleRange} rangeInfo the single range info
 * @returns {IChartSourceMultiRangeItem} rangeInfo the multi range info
 */
export declare function changeSingleRangeInfoToMultiRangeInfo(rangeInfo: ISheetChartSourceSingleRange): IChartSourceMultiRangeItem[];
/**
 * get the multi range info can switch orient or not
 * @param {IChartSourceMultiRangeItem} rangeInfo the multi range info
 * @returns {boolean} return the multi range info can switch orient or not
 */
export declare function isMultiRangeCanSwitchOrient(rangeInfo: IChartSourceMultiRangeItem[]): boolean;
export {};
