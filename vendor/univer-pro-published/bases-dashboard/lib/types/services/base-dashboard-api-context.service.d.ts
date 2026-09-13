import { ICommandService, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { BaseDashboardResourceService } from './base-dashboard-resource.service';
export declare class BaseDashboardAPIContextService {
    readonly resourceService: BaseDashboardResourceService;
    readonly commandService: ICommandService;
    readonly permissionService: IPermissionService;
    readonly instanceService: IUniverInstanceService;
    constructor(resourceService: BaseDashboardResourceService, commandService: ICommandService, permissionService: IPermissionService, instanceService: IUniverInstanceService);
}
