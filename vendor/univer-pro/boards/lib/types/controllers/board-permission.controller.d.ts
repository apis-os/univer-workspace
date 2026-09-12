import { Disposable, ICommandService, IPermissionService, IUniverInstanceService } from '@univerjs/core';
export declare class BoardPermissionController extends Disposable {
    private readonly _commandService;
    private readonly _permissionService;
    private readonly _univerInstanceService;
    constructor(_commandService: ICommandService, _permissionService: IPermissionService, _univerInstanceService: IUniverInstanceService);
    private _registerUnitPermissionPoints;
    private _check;
}
