import type { BaseCellValue, BaseDataModel, IFieldSnapshot, IFilterConfig, IGroupConfig, IRecordSnapshot, ISortConfig, ITableSnapshot, IViewSnapshot, JSONXActions } from '@univerjs/core';
import { BaseFieldRegistryService } from './base-field-registry.service';
import { IBasePermissionService } from './base-permission.service';
export interface IBaseCommandRuntimeContext {
    now?: () => number;
    getCurrentUserId?: () => string | null | undefined;
    getCurrentUser?: () => {
        userID: string;
        name: string;
        avatar?: string;
    } | null | undefined;
}
export interface IBaseCommandService {
    createUpdateCellOp(base: BaseDataModel, tableId: string, recordId: string, fieldId: string, value: BaseCellValue): JSONXActions;
    createSetRecordValuesOp(base: BaseDataModel, tableId: string, patches: Array<{
        recordId: string;
        values: Record<string, BaseCellValue>;
    }>): JSONXActions;
    createCreateRecordOp(base: BaseDataModel, tableId: string, record: IRecordSnapshot): JSONXActions;
    createBatchCreateRecordsOp(base: BaseDataModel, tableId: string, records: IRecordSnapshot[]): JSONXActions;
    createCreateFieldOp(base: BaseDataModel, tableId: string, field: IFieldSnapshot, index?: number, viewIndexes?: Record<string, number>): JSONXActions;
    createTable(base: BaseDataModel, table: ITableSnapshot, index?: number): void;
    renameTable(base: BaseDataModel, tableId: string, name: string): void;
    deleteTable(base: BaseDataModel, tableId: string): void;
    updateCell(base: BaseDataModel, tableId: string, recordId: string, fieldId: string, value: BaseCellValue): void;
    setRecordValues(base: BaseDataModel, tableId: string, patches: Array<{
        recordId: string;
        values: Record<string, BaseCellValue>;
    }>): void;
    createRecord(base: BaseDataModel, tableId: string, record: IRecordSnapshot): void;
    deleteRecord(base: BaseDataModel, tableId: string, recordId: string): void;
    duplicateRecord(base: BaseDataModel, tableId: string, sourceRecordId: string, record: IRecordSnapshot): void;
    updateRecordOrder(base: BaseDataModel, tableId: string, recordId: string, orderKey: string): void;
    createField(base: BaseDataModel, tableId: string, field: IFieldSnapshot, index?: number, viewIndexes?: Record<string, number>): void;
    updateField(base: BaseDataModel, tableId: string, fieldId: string, patch: Partial<IFieldSnapshot>): void;
    changeFieldType(base: BaseDataModel, tableId: string, fieldId: string, input: Pick<IFieldSnapshot, 'type' | 'config'>): void;
    deleteField(base: BaseDataModel, tableId: string, fieldId: string): void;
    moveField(base: BaseDataModel, tableId: string, fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): void;
    createView(base: BaseDataModel, tableId: string, view: IViewSnapshot, index?: number): void;
    renameView(base: BaseDataModel, tableId: string, viewId: string, name: string): void;
    deleteView(base: BaseDataModel, tableId: string, viewId: string): void;
    moveView(base: BaseDataModel, tableId: string, viewId: string, target: {
        beforeViewId?: string;
        afterViewId?: string;
    }): void;
    updateViewConfig(base: BaseDataModel, tableId: string, viewId: string, patch: Record<string, unknown>): void;
    setViewFilter(base: BaseDataModel, tableId: string, viewId: string, filter: IFilterConfig | null): void;
    setViewSort(base: BaseDataModel, tableId: string, viewId: string, sort: ISortConfig[]): void;
    setViewGroup(base: BaseDataModel, tableId: string, viewId: string, group: IGroupConfig[]): void;
    setViewFieldVisible(base: BaseDataModel, tableId: string, viewId: string, fieldId: string, visible: boolean): void;
    setViewFieldWidth(base: BaseDataModel, tableId: string, viewId: string, fieldId: string, width: number): void;
    setViewFieldOrder(base: BaseDataModel, tableId: string, viewId: string, fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): void;
}
export declare const IBaseCommandService: import("@wendellhu/redi").IdentifierDecorator<IBaseCommandService>;
export declare class BaseCommandService implements IBaseCommandService {
    private readonly _permissionService;
    private readonly _fieldRegistry;
    private readonly _runtimeContext;
    private readonly _factory;
    private readonly _applier;
    constructor(_permissionService: IBasePermissionService, _fieldRegistry?: BaseFieldRegistryService, _runtimeContext?: IBaseCommandRuntimeContext);
    createTable(base: BaseDataModel, table: ITableSnapshot, index?: number): void;
    renameTable(base: BaseDataModel, tableId: string, name: string): void;
    deleteTable(base: BaseDataModel, tableId: string): void;
    updateCell(base: BaseDataModel, tableId: string, recordId: string, fieldId: string, value: BaseCellValue): void;
    setRecordValues(base: BaseDataModel, tableId: string, patches: Array<{
        recordId: string;
        values: Record<string, BaseCellValue>;
    }>): void;
    createRecord(base: BaseDataModel, tableId: string, record: IRecordSnapshot): void;
    createUpdateCellOp(base: BaseDataModel, tableId: string, recordId: string, fieldId: string, value: BaseCellValue): JSONXActions;
    createSetRecordValuesOp(base: BaseDataModel, tableId: string, patches: Array<{
        recordId: string;
        values: Record<string, BaseCellValue>;
    }>): JSONXActions;
    createCreateRecordOp(base: BaseDataModel, tableId: string, record: IRecordSnapshot): JSONXActions;
    createBatchCreateRecordsOp(base: BaseDataModel, tableId: string, records: IRecordSnapshot[]): JSONXActions;
    createCreateFieldOp(base: BaseDataModel, tableId: string, field: IFieldSnapshot, index?: number, viewIndexes?: Record<string, number>): JSONXActions;
    deleteRecord(base: BaseDataModel, tableId: string, recordId: string): void;
    duplicateRecord(base: BaseDataModel, tableId: string, sourceRecordId: string, record: IRecordSnapshot): void;
    updateRecordOrder(base: BaseDataModel, tableId: string, recordId: string, orderKey: string): void;
    createField(base: BaseDataModel, tableId: string, field: IFieldSnapshot, index?: number, viewIndexes?: Record<string, number>): void;
    updateField(base: BaseDataModel, tableId: string, fieldId: string, patch: Partial<IFieldSnapshot>): void;
    changeFieldType(base: BaseDataModel, tableId: string, fieldId: string, input: Pick<IFieldSnapshot, 'type' | 'config'>): void;
    deleteField(base: BaseDataModel, tableId: string, fieldId: string): void;
    moveField(base: BaseDataModel, tableId: string, fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): void;
    createView(base: BaseDataModel, tableId: string, view: IViewSnapshot, index?: number): void;
    renameView(base: BaseDataModel, tableId: string, viewId: string, name: string): void;
    deleteView(base: BaseDataModel, tableId: string, viewId: string): void;
    moveView(base: BaseDataModel, tableId: string, viewId: string, target: {
        beforeViewId?: string;
        afterViewId?: string;
    }): void;
    updateViewConfig(base: BaseDataModel, tableId: string, viewId: string, patch: Record<string, unknown>): void;
    setViewFilter(base: BaseDataModel, tableId: string, viewId: string, filter: IFilterConfig | null): void;
    setViewSort(base: BaseDataModel, tableId: string, viewId: string, sort: ISortConfig[]): void;
    setViewGroup(base: BaseDataModel, tableId: string, viewId: string, group: IGroupConfig[]): void;
    setViewFieldVisible(base: BaseDataModel, tableId: string, viewId: string, fieldId: string, visible: boolean): void;
    setViewFieldWidth(base: BaseDataModel, tableId: string, viewId: string, fieldId: string, width: number): void;
    setViewFieldOrder(base: BaseDataModel, tableId: string, viewId: string, fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): void;
    private _apply;
    private _createRecordWithDefaults;
    private _withModifiedSystemValues;
    private _createSystemFieldValuePatches;
    private _getSystemFieldValue;
    private _createNumberingAllocators;
    private _createNumberingAllocator;
    private _createNumberingFieldValuePatches;
    private _getOrderedRecords;
    private _isNonEmptyCellValue;
    private _getCurrentUserId;
    private _normalizeCellValue;
    private _assertFieldDefinition;
}
