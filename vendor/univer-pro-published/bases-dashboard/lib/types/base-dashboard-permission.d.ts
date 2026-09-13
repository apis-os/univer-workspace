import type { IPermissionService } from '@univerjs/core';
export declare function canEditBaseDashboard(permissionService: IPermissionService, unitId: string, dashboardId: string): boolean;
export declare function canEditBasePivotView(permissionService: IPermissionService, unitId: string, tableId: string, viewId: string): boolean;
