import type { IBaseSnapshot, IRange, Workbook, Worksheet } from '@univerjs/core';
import type { IFormulaBindingHost } from '../config/config';
export declare function buildSheetFormulaBindingReference(options: {
    host: IFormulaBindingHost;
    range: IRange;
    workbook: Workbook;
    worksheet: Worksheet;
}): string;
export declare function buildBaseFormulaBindingReference(options: {
    fieldIds: string[];
    hostUnitId: string;
    snapshot: IBaseSnapshot;
    sourceUnitId: string;
    tableId: string;
}): string | null;
