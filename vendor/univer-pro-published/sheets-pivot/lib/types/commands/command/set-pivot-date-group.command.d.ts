import type { PivotDateGroupFieldDateTypeEnum } from '@univerjs-pro/engine-pivot';
import type { ICommand } from '@univerjs/core';
export interface ISetPivotDateGroupCommandParams {
    unitId: string;
    subUnitId: string;
    pivotTableId: string;
    tableFieldId: string;
    dateType: PivotDateGroupFieldDateTypeEnum;
}
export declare const SetPivotDateGroupCommand: ICommand<ISetPivotDateGroupCommandParams>;
