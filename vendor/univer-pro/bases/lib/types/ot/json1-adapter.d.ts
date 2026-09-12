import type { IBaseInvalidation, IBaseSnapshot, IFieldSnapshot, IRecordSnapshot, ITableSnapshot, IViewSnapshot, JSONXActions } from '@univerjs/core';
export type BaseJson1Command = {
    type: 'createTable';
    table: ITableSnapshot;
    index?: number;
} | {
    type: 'renameTable';
    tableId: string;
    name: string;
} | {
    type: 'deleteTable';
    tableId: string;
} | {
    type: 'createField';
    tableId: string;
    field: IFieldSnapshot;
    index?: number;
} | {
    type: 'updateField';
    tableId: string;
    fieldId: string;
    patch: Partial<IFieldSnapshot>;
} | {
    type: 'deleteField';
    tableId: string;
    fieldId: string;
} | {
    type: 'createRecord';
    tableId: string;
    record: IRecordSnapshot;
} | {
    type: 'deleteRecord';
    tableId: string;
    recordId: string;
} | {
    type: 'updateRecordOrder';
    tableId: string;
    recordId: string;
    orderKey: string;
} | {
    type: 'updateCell';
    tableId: string;
    recordId: string;
    fieldId: string;
    value: unknown;
} | {
    type: 'setRecordValues';
    tableId: string;
    patches: Array<{
        recordId: string;
        values: Record<string, unknown>;
    }>;
} | {
    type: 'setRangeValues';
    tableId: string;
    patches: Array<{
        row: number;
        col: number;
        value: unknown;
    }>;
} | {
    type: 'createView';
    tableId: string;
    view: IViewSnapshot;
    index?: number;
} | {
    type: 'deleteView';
    tableId: string;
    viewId: string;
} | {
    type: 'updateViewConfig';
    tableId: string;
    viewId: string;
    patch: Record<string, unknown>;
};
export interface IBaseCollaborativeOp {
    unitId: string;
    unitType: 'base';
    rev: number;
    op: JSONXActions;
    meta?: {
        commandId: string;
        commandType: string;
        actorId: string;
        timestamp: number;
    };
}
export interface IBaseJson1Adapter {
    createOp(command: BaseJson1Command, snapshot: IBaseSnapshot): JSONXActions;
    applyOp(snapshot: IBaseSnapshot, op: JSONXActions): IBaseSnapshot;
    invertOp(snapshot: IBaseSnapshot, op: JSONXActions): JSONXActions;
    getAffectedRanges(op: JSONXActions): IBaseInvalidation[];
}
export declare class BaseJson1Adapter implements IBaseJson1Adapter {
    private readonly _factory;
    private readonly _applier;
    createOp(command: BaseJson1Command, snapshot: IBaseSnapshot): JSONXActions;
    createCollaborativeOp(input: Omit<IBaseCollaborativeOp, 'unitType'>): IBaseCollaborativeOp;
    applyOp(snapshot: IBaseSnapshot, op: JSONXActions): IBaseSnapshot;
    invertOp(snapshot: IBaseSnapshot, op: JSONXActions): JSONXActions;
    getAffectedRanges(op: JSONXActions): IBaseInvalidation[];
}
