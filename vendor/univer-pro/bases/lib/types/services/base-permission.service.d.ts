import { Disposable, IPermissionService, IUniverInstanceService } from '@univerjs/core';
export interface IBaseTablePermission {
    edit?: boolean;
    createField?: boolean;
    createRecord?: boolean;
    delete?: boolean;
    manageView?: boolean;
}
export interface IBaseFieldPermission {
    edit?: boolean;
    delete?: boolean;
    editCell?: boolean;
}
export interface IBaseRecordPermission {
    edit?: boolean;
    delete?: boolean;
    editCell?: boolean;
}
export interface IBaseViewPermission {
    edit?: boolean;
}
export interface IBasePermissionService {
    canCreateTable(baseId: string): boolean;
    canEditTable(tableId: string): boolean;
    canDeleteTable(tableId: string): boolean;
    canCreateField(tableId: string): boolean;
    canEditField(tableId: string, fieldId: string): boolean;
    canDeleteField(tableId: string, fieldId: string): boolean;
    canCreateRecord(tableId: string): boolean;
    canEditRecord(tableId: string, recordId: string): boolean;
    canDeleteRecord(tableId: string, recordId: string): boolean;
    canEditCell(tableId: string, recordId: string, fieldId: string): boolean;
    canManageView(tableId: string, viewId: string): boolean;
    setBasePermission(baseId: string, permission: {
        edit?: boolean;
        createTable?: boolean;
    }): void;
    setTablePermission(tableId: string, permission: IBaseTablePermission): void;
    setFieldPermission(tableId: string, fieldId: string, permission: IBaseFieldPermission): void;
    setRecordPermission(tableId: string, recordId: string, permission: IBaseRecordPermission): void;
    setViewPermission(tableId: string, viewId: string, permission: IBaseViewPermission): void;
    clearBasePermission(baseId: string): void;
    clearTablePermission(tableId: string): void;
    clearFieldPermission(tableId: string, fieldId: string): void;
    clearRecordPermission(tableId: string, recordId: string): void;
    clearViewPermission(tableId: string, viewId: string): void;
    getSnapshot(): IBasePermissionSnapshot;
}
export declare const IBasePermissionService: import("@wendellhu/redi").IdentifierDecorator<IBasePermissionService>;
export interface IBasePermissionSnapshot {
    bases: Record<string, {
        edit?: boolean;
        createTable?: boolean;
    }>;
    tables: Record<string, IBaseTablePermission>;
    fields: Record<string, IBaseFieldPermission>;
    records: Record<string, IBaseRecordPermission>;
    views: Record<string, IBaseViewPermission>;
}
export declare class BasePermissionService extends Disposable implements IBasePermissionService {
    private readonly _permissionService;
    private readonly _instanceService;
    private readonly _basePermissions;
    private readonly _tablePermissions;
    private readonly _fieldPermissions;
    private readonly _recordPermissions;
    private readonly _viewPermissions;
    private readonly _tableBaseIds;
    constructor(_permissionService: IPermissionService, _instanceService: IUniverInstanceService);
    canCreateTable(baseId: string): boolean;
    canEditTable(tableId: string): boolean;
    canDeleteTable(tableId: string): boolean;
    canCreateField(tableId: string): boolean;
    canEditField(tableId: string, fieldId: string): boolean;
    canDeleteField(tableId: string, fieldId: string): boolean;
    canCreateRecord(tableId: string): boolean;
    canEditRecord(tableId: string, recordId: string): boolean;
    canDeleteRecord(tableId: string, recordId: string): boolean;
    canEditCell(tableId: string, recordId: string, fieldId: string): boolean;
    canManageView(tableId: string, viewId: string): boolean;
    setBasePermission(baseId: string, permission: {
        edit?: boolean;
        createTable?: boolean;
    }): void;
    setTablePermission(tableId: string, permission: IBaseTablePermission): void;
    setFieldPermission(tableId: string, fieldId: string, permission: IBaseFieldPermission): void;
    setRecordPermission(tableId: string, recordId: string, permission: IBaseRecordPermission): void;
    setViewPermission(tableId: string, viewId: string, permission: IBaseViewPermission): void;
    clearBasePermission(baseId: string): void;
    clearTablePermission(tableId: string): void;
    clearFieldPermission(tableId: string, fieldId: string): void;
    clearRecordPermission(tableId: string, recordId: string): void;
    clearViewPermission(tableId: string, viewId: string): void;
    getSnapshot(): IBasePermissionSnapshot;
    private _canEditTable;
    private _canEdit;
    private _setObjectEdit;
    private _clearObjectEdit;
    private _resolveBaseId;
    private _rememberTable;
    private _clearUnit;
}
