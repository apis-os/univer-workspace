import type { ILabelViewHeaderMapItem, IPivotTableSnapshot, IPivotViewInfo, PivotTable, PivotView } from '@univerjs-pro/engine-pivot';
import type { IAccessor, IMutationInfo, Injector, IObjectArrayPrimitiveType, IRange, Nullable } from '@univerjs/core';
import type { ISetRangeValuesMutationParams } from '@univerjs/sheets';
import type { IGetPivotDataLocalMutationParams, IPivotCellPositionInfo, IPivotPanelDataInfo, IPivotRangesInfo, IPivotRenderCache, IPivotTableCellData, IPivotTableConfig } from './const/type';
import { PivotDateGroupFieldDateTypeEnum, PivotSubtotalTypeEnum, PivotTableFiledAreaEnum } from '@univerjs-pro/engine-pivot';
import { DateSystem, ObjectMatrix } from '@univerjs/core';
import { SheetsPivotDataSourceModel } from './models/sheets-pivot-data-source-model';
export declare const generateDefaultEmptyCache: (textOptions: {
    filter: string;
    row: string;
    column: string;
    values: string;
}, startCell: {
    row: number;
    col: number;
}, direction?: "ltr" | "rtl") => {
    matrixCache: ObjectMatrix<IPivotTableCellData>;
    rangesCache: IPivotRangesInfo;
};
/**
 * - Get the auto display name of the value field.
 * @description - which may use prefix text like excel
 * - the prefix text is create by subtotal type
 * @param {string} baseName the name without prefix text
 * @param {PivotSubtotalTypeEnum} subtotalType the type of subtotal to be displayed for this value field.
 * @returns {string} the auto display name of the value field.
 */
export declare function getAutoDisplayName(this: SheetsPivotDataSourceModel, baseName: string, subtotalType: PivotSubtotalTypeEnum): string;
export declare function getPivotCellInfo(row: number, col: number, cellInfo: Nullable<IPivotTableCellData>, pivotTable: PivotTable, pivotItemRenderCache: IPivotRenderCache): {
    filterId: string | undefined;
    info: Nullable<IPivotViewInfo>;
    data: Nullable<IPivotTableCellData>;
    headerInfo: Nullable<ILabelViewHeaderMapItem>;
} | undefined;
export interface IPivotSheetCellContext {
    area: keyof IPivotRangesInfo;
    info: Nullable<IPivotViewInfo>;
    rowInfo: Nullable<IPivotViewInfo>;
    columnInfo: Nullable<IPivotViewInfo>;
    data: Nullable<IPivotTableCellData>;
    headerInfo: Nullable<ILabelViewHeaderMapItem>;
    tableFieldId: string | undefined;
}
export interface IPivotValueFilterTarget {
    axis: PivotTableFiledAreaEnum.Row | PivotTableFiledAreaEnum.Column;
    targetFieldId: string;
    defaultValueFieldId?: string;
}
export declare function resolvePivotSheetCell(row: number, col: number, cellInfo: Nullable<IPivotTableCellData>, pivotItemRenderCache: IPivotRenderCache): IPivotSheetCellContext | undefined;
export declare function resolvePivotValueFieldId(context: IPivotSheetCellContext, valueFieldIds: string[]): string | undefined;
export declare function resolvePivotValueFilterTarget(context: IPivotSheetCellContext, fieldsConfig: IPivotTableSnapshot): IPivotValueFilterTarget | undefined;
export declare function getPivotTableInfo(pivotTable: PivotTable, pivotTableId: string, config: IPivotTableConfig): IPivotPanelDataInfo;
export declare function flattenObject(inject: Injector, obj: {
    [key: string]: any;
}, parentKey?: string, result?: {
    [key: string]: any;
}): {
    [key: string]: any;
};
export declare const unionPivotViewRange: (rangeInfo: IPivotRangesInfo | undefined) => IRange[];
export declare function getPivotDrillDownData(injector: Injector, params: IGetPivotDataLocalMutationParams): {
    indexes: number[];
    range: IRange;
    sourceUnitId: string;
    sourceSubUnitId: string;
    formatMap: Record<string, string>;
} | undefined;
export declare function canUsePivot(ls?: string, pbk?: string): boolean;
export declare function getPivotInfoByLicense(defaultPivotCount: number, ls?: string, pbk?: string): {
    count: number;
    timeValid: boolean;
};
export declare function generateSetRangeValueMutations(injector: Injector, unitId: string, subUnitId: string, ranges: IRange[]): {
    setRangeValueUndoMutation: {
        id: string;
        params: ISetRangeValuesMutationParams;
    };
    setRangeValueRedoMutation: {
        id: string;
        params: ISetRangeValuesMutationParams;
    };
    shouldClear: boolean;
};
export declare function getEmptyPivotRanges(cellInfo: IPivotCellPositionInfo, direction?: 'ltr' | 'rtl'): {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
}[];
export declare function getPivotAppliedRanges(cellInfo: IPivotCellPositionInfo, view: PivotView, isEmpty: boolean, direction: 'ltr' | 'rtl'): IRange[];
export declare function getPivotRowColCount(view: PivotView, startCell: {
    row: number;
    col: number;
}, isEmpty: boolean): {
    rowCount: number;
    colCount: number;
};
export declare function getInsertRowColMutations(accessor: IAccessor, view: PivotView, cellInfo: IPivotCellPositionInfo, isEmpty: boolean): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
export declare function getPivotAutoFitColumnWidthMap(view: PivotView, startColumn: number, direction: 'ltr' | 'rtl', textInfo: Record<string, string>, measureText: (text: string) => number, valueFieldIds?: string[], dateSystem?: DateSystem): IObjectArrayPrimitiveType<number>;
export declare function setConfigToPivotTable(pivotTable: PivotTable, config: IPivotTableSnapshot): void;
export declare function resetPivotTable(pivotTable: PivotTable, area?: PivotTableFiledAreaEnum | undefined): void;
export declare function findCommonDateType(maxExcelDate: number, minExcelDate: number): PivotDateGroupFieldDateTypeEnum;
export declare function setPivotDateSystem(dateSystem: DateSystem | undefined): void;
export declare function getDateGroupName(injector: Injector, dateType: PivotDateGroupFieldDateTypeEnum): string;
