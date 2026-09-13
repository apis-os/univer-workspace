import { Disposable, ICommandService, IPermissionService, IUniverInstanceService } from '@univerjs/core';
export declare class BaseDashboardPermissionController extends Disposable {
    private readonly _permissionService;
    private readonly _instanceService;
    constructor(commandService: ICommandService, _permissionService: IPermissionService, _instanceService: IUniverInstanceService);
    private _check;
}
