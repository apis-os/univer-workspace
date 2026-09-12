import { BaseDashboardResourceService } from '@univerjs-pro/bases-dashboard';
import { IBaseDashboardUIExtensionRegistryService, IBaseViewUIRegistryService } from '@univerjs-pro/bases-ui';
import { Disposable, ICommandService, IPermissionService, LocaleService } from '@univerjs/core';
export declare class BaseDashboardUIController extends Disposable {
    constructor(dashboardRegistry: IBaseDashboardUIExtensionRegistryService, viewRegistry: IBaseViewUIRegistryService, resourceService: BaseDashboardResourceService, commandService: ICommandService, permissionService: IPermissionService, localeService: LocaleService);
}
