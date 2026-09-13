import type { IBaseSnapshot, IFieldSnapshot, ITableSnapshot, IViewSnapshot, JSONXActions } from '@univerjs/core';
interface ITemporalDateFieldPlan {
    changed: boolean;
    fields: IFieldSnapshot[];
    config: Record<string, unknown>;
    fieldOrder?: string[];
}
export declare function createBaseViewOp(snapshot: IBaseSnapshot, tableId: string, view: IViewSnapshot, index?: number): JSONXActions;
export declare function createTemporalDateFieldPlan(table: ITableSnapshot, view: IViewSnapshot, ensureEndDateField?: boolean): ITemporalDateFieldPlan;
export {};
