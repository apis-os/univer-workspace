import type { BaseCellValue, IBaseCellData, IBaseSnapshot, IFieldSnapshot, IFilterConfig, IGroupConfig, IRecordSnapshot, ISortConfig, ITableSnapshot, IViewSnapshot, JSONXActions, TableId } from '@univerjs/core';
export interface ICreateFieldOpInput {
    field: IFieldSnapshot;
    index?: number;
    viewIndexes?: Record<string, number>;
}
export interface ISetRecordValuesPatch {
    recordId: string;
    values: Record<string, BaseCellValue>;
    recordPatch?: Partial<Pick<IRecordSnapshot, 'updatedAt' | 'updatedBy'>>;
}
export interface ISetRangeValuesPatch {
    row: number;
    col: number;
    value: BaseCellValue | IBaseCellData | null;
}
export declare class BaseJson1OpFactory {
    setBaseName(snapshot: IBaseSnapshot, name: string): JSONXActions;
    renameFormulaUnitReferences(snapshot: IBaseSnapshot, oldName: string, newName: string): JSONXActions | undefined;
    createTable(snapshot: IBaseSnapshot, table: ITableSnapshot, index?: number): JSONXActions;
    renameTable(snapshot: IBaseSnapshot, tableId: TableId, name: string): JSONXActions;
    deleteTable(snapshot: IBaseSnapshot, tableId: TableId): JSONXActions;
    createRecord(snapshot: IBaseSnapshot, tableId: TableId, record: IRecordSnapshot): JSONXActions;
    createRecords(snapshot: IBaseSnapshot, tableId: TableId, records: IRecordSnapshot[]): JSONXActions;
    deleteRecord(snapshot: IBaseSnapshot, tableId: TableId, recordId: string): JSONXActions;
    deleteRecords(snapshot: IBaseSnapshot, tableId: TableId, recordIds: string[]): JSONXActions;
    createDeleteRecordsUndoOp(snapshot: IBaseSnapshot, deletedSnapshot: IBaseSnapshot, tableId: TableId, recordIds: string[]): JSONXActions;
    private _deleteRecordsBaseOp;
    duplicateRecord(snapshot: IBaseSnapshot, tableId: TableId, sourceRecordId: string, record: IRecordSnapshot): JSONXActions;
    updateRecordOrder(snapshot: IBaseSnapshot, tableId: TableId, recordId: string, orderKey: string): JSONXActions;
    updateCell(snapshot: IBaseSnapshot, tableId: TableId, recordId: string, fieldId: string, value: BaseCellValue): JSONXActions;
    setRecordValues(snapshot: IBaseSnapshot, tableId: TableId, patches: ISetRecordValuesPatch[]): JSONXActions;
    setRangeValues(snapshot: IBaseSnapshot, tableId: TableId, patches: ISetRangeValuesPatch[]): JSONXActions;
    createField(snapshot: IBaseSnapshot, tableId: TableId, input: ICreateFieldOpInput): JSONXActions;
    duplicateField(snapshot: IBaseSnapshot, tableId: TableId, sourceFieldId: string, input: ICreateFieldOpInput): JSONXActions;
    updateField(snapshot: IBaseSnapshot, tableId: TableId, fieldId: string, patch: Partial<IFieldSnapshot>): JSONXActions;
    changeFieldType(snapshot: IBaseSnapshot, tableId: TableId, fieldId: string, input: Pick<IFieldSnapshot, 'type' | 'config'>): JSONXActions;
    deleteField(snapshot: IBaseSnapshot, tableId: TableId, fieldId: string): JSONXActions;
    moveField(snapshot: IBaseSnapshot, tableId: TableId, fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): JSONXActions;
    createView(snapshot: IBaseSnapshot, tableId: TableId, view: IViewSnapshot, index?: number): JSONXActions;
    renameView(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, name: string): JSONXActions;
    deleteView(snapshot: IBaseSnapshot, tableId: TableId, viewId: string): JSONXActions;
    moveView(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, target: {
        beforeViewId?: string;
        afterViewId?: string;
    }): JSONXActions;
    updateViewConfig(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, patch: Record<string, unknown>): JSONXActions;
    setViewFilter(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, filter: IFilterConfig | null): JSONXActions;
    setViewSort(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, sort: ISortConfig[]): JSONXActions;
    setViewGroup(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, group: IGroupConfig[]): JSONXActions;
    setViewFieldVisible(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, fieldId: string, visible: boolean): JSONXActions;
    setViewFieldWidth(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, fieldId: string, width: number): JSONXActions;
    setViewFieldOrder(snapshot: IBaseSnapshot, tableId: TableId, viewId: string, fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): JSONXActions;
    private _setViewFieldSetting;
    private _createRecordOrderOp;
    private _materializeFormulaTableNames;
    private _setFormulaFieldCells;
    private _setAttachmentResources;
    private _deleteAttachmentResources;
    private _replaceOptional;
}
