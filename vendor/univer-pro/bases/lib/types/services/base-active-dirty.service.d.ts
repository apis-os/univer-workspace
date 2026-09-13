import type { BaseCellValue, IBaseCellData } from '@univerjs/core';
export interface IBaseRangeValueDirtyParams {
    unitId: string;
    tableId: string;
    patches: Array<{
        row: number;
        col: number;
        value: BaseCellValue | IBaseCellData | null;
    }>;
}
export interface IBaseFormulaDirtyRange {
    unitId: string;
    sheetId: string;
    range: {
        startRow: number;
        endRow: number;
        startColumn: number;
        endColumn: number;
    };
}
export type BaseFormulaDirtySuperTableMap = Record<string, Record<string, string>>;
export declare function setBaseRangeValuesToDirtyRanges(params: IBaseRangeValueDirtyParams): IBaseFormulaDirtyRange[];
export declare function createBaseStructureDirtySuperTableMap(unitId: string, tableIds: string[]): BaseFormulaDirtySuperTableMap;
