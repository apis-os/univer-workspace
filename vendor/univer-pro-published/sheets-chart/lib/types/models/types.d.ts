import type { ChartTypeBits, IChartConfig, IChartData, IChartDataSource, IUniverDataSet, OptionDataValue } from '@univerjs-pro/engine-chart';
import type { IRange } from '@univerjs/core';
import type { Observable } from 'rxjs';
export interface IDimensionDefinition {
    type?: 'number' | 'ordinal' | 'time' | 'float' | 'int';
    name?: string;
    displayName?: string;
}
export type DimensionDefinitionLoose = IDimensionDefinition['name'] | IDimensionDefinition;
export type { IUniverDataSet, OptionDataValue };
export interface IChartSourceRangeItem {
    range: IRange;
    subUnitId: string;
    unitId: string;
}
export interface IChartSourceMultiRangeItem {
    header?: IChartSourceRangeItem;
    range: IChartSourceRangeItem;
}
/**
 * @description
 * the chart source range maybe a single range or a multi ranges
 * if the range is a single range, it is a IUnitRangeNameWithSubUnitId
 * if the range is a multi ranges, it is a array of IChartSourceMultiRangeItem, which is a tuple of two IUnitRangeName
 * one is the dimension range, the other is the value range
 */
export type ISheetChartSourceRanges = ISheetChartSourceSingleRange | IChartSourceMultiRangeItem[];
export interface ISheetChartSourceSnapshot {
    revision: number;
    rangeRevision: number;
    rangeInfo: ISheetChartSourceRanges;
    dataSet: IUniverDataSet;
    isRowDirection: boolean;
    canSwitchOrient: boolean;
}
export interface ISheetChartSourceSingleRange {
    rangeInfo: IChartSourceRangeItem;
    isRowDirection?: boolean;
    headerRow?: number;
}
export interface ISheetChartDataSource extends IChartDataSource {
    /** Canonical coherent runtime source state. Revision counters are never persisted. */
    readonly snapshot$: Observable<ISheetChartSourceSnapshot>;
    /**
     * can switch the orient of the data, only single range or multi range all range has same value length can switch
     */
    readonly canSwitchOrient$: Observable<boolean>;
    readonly isRowDirection$: Observable<boolean>;
    get isRowDirection(): boolean;
    /**
     * the range info of the chart source
     */
    readonly rangeInfo$: Observable<ISheetChartSourceRanges>;
    canSwitchOrient(): boolean;
    dispose(): void;
    getRangeInfo(): ISheetChartSourceRanges;
}
export interface IChartConfigConverter {
    canConvert(type: ChartTypeBits): boolean;
    convert(type: ChartTypeBits, data: IChartData): IChartConfig;
}
