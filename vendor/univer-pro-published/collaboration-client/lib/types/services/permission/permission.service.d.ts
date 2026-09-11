import { IAuthzIoService, Injector, IPermissionService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { CollaborationSessionService } from '../collaboration-session/collaboration-session.service';
import { CollaborationUIEventService } from '../collaboration-ui-event/collaboration-ui-event';
export declare class PermissionService extends RxDisposable {
    private _injector;
    private _univerInstanceService;
    private _permissionService;
    private _authzIoService;
    private _collaborationSessionService;
    private _collaborationUIEventService;
    constructor(_injector: Injector, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _authzIoService: IAuthzIoService, _collaborationSessionService: CollaborationSessionService, _collaborationUIEventService: CollaborationUIEventService);
    private _initCloseConn;
    private _initUnitPermissionChange;
    private _refreshUnitPermission;
    private _getUnitPermissionPoints;
    private _updateUnitPermissionPoint;
}
