import type { IPivotTableValueFilter } from '@univerjs-pro/engine-pivot';
import type { IAccessor, ICommand } from '@univerjs/core';
import type { IPivotValueFilterFieldOption } from '../../views/components/PivotValueFilterDialog';
export interface IPivotValueFilterMenuContext {
    unitId: string;
    subUnitId: string;
    pivotTableId: string;
    targetFieldId: string;
    targetFieldName: string;
    valueFields: IPivotValueFilterFieldOption[];
    defaultValueFieldId?: string;
    currentFilter?: IPivotTableValueFilter;
}
export declare function getPivotValueFilterMenuContext(accessor: IAccessor): IPivotValueFilterMenuContext | undefined;
export declare const SetPivotValueFilterOperation: ICommand;
