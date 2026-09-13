import type { PivotDateGroupFieldDateTypeEnum } from '@univerjs-pro/engine-pivot';
import type { IPivotDateGroupContext } from '@univerjs-pro/sheets-pivot';
import type { IAccessor, ICommand } from '@univerjs/core';
export interface ISetPivotDateGroupOperationParams {
    dateType: PivotDateGroupFieldDateTypeEnum;
}
export interface IPivotDateGroupMenuContext {
    unitId: string;
    subUnitId: string;
    pivotTableId: string;
    tableFieldId: string;
    row: number;
    col: number;
    dateGroupContext: IPivotDateGroupContext;
}
export declare const SetPivotDateGroupOperation: ICommand<ISetPivotDateGroupOperationParams>;
export declare function getPivotDateGroupMenuContext(accessor: IAccessor): IPivotDateGroupMenuContext | undefined;
