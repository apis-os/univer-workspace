import { Disposable, ICommandService, IPermissionService, IUniverInstanceService } from '@univerjs/core';
export declare class BasePermissionController extends Disposable {
    private readonly _commandService;
    private readonly _permissionService;
    private readonly _instanceService;
    constructor(_commandService: ICommandService, _permissionService: IPermissionService, _instanceService: IUniverInstanceService);
    private _registerUnitPermissionPoints;
    private _check;
}
