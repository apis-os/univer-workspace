import type { BaseCellValue, IBaseCellData, ICommand, ITableSnapshot } from '@univerjs/core';
import { BaseEventSource } from '../../models/base-hierarchy';
export interface ISetBaseRangeValuesCommandParams {
    unitId: string;
    tableId: string;
    patches: Array<{
        row: number;
        col: number;
        value: BaseCellValue | IBaseCellData | null;
    } | {
        recordId: string;
        fieldId: string;
        value: BaseCellValue | IBaseCellData | null;
    }>;
    source?: BaseEventSource;
}
/** Resolve public row/column or record/field patches to their final record values. */
export declare function resolveBaseRangeHierarchyPatches(sourceTable: ITableSnapshot, patches: ISetBaseRangeValuesCommandParams['patches']): Array<{
    recordId: string;
    values: Record<string, BaseCellValue>;
}>;
export declare const SetBaseRangeValuesCommand: ICommand<ISetBaseRangeValuesCommandParams>;
