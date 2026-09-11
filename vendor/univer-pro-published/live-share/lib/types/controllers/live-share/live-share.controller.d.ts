import type { CollaborationSession } from '@univerjs-pro/collaboration-client';
import type { Nullable } from '@univerjs/core';
import { CollaborationSessionService } from '@univerjs-pro/collaboration-client';
import { ICommandService, IConfigService, Injector, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { LiveShareService } from '../../services/live-share.service';
/**
 * This controller manage live share session.
 */
export declare class LiveShareController extends RxDisposable {
    private readonly _univerInstanceService;
    private readonly _injector;
    private readonly _collabSessionService;
    private readonly _entities;
    constructor(_univerInstanceService: IUniverInstanceService, _injector: Injector, _collabSessionService: CollaborationSessionService);
    getLiveShareCoordinator(unitID: string): Promise<LiveShareCoordinator>;
    getLiveShareCoordinatorSync(unitID: string): Nullable<LiveShareCoordinator>;
    private _init;
    private _startLiveShareCoordinator;
}
export declare enum LiveShareStatus {
    OFFLINE = "offline",
    IDLE = "idle",
    FOLLOWING = "following",
    NOT_FOLLOWING = "not-following",
    PRESENTING = "presenting"
}
export declare const SAME_OPERATION_SHARE_INTERVAL_KEY = "SAME_OPERATION_SHARE_INTERVAL";
/**
 * This coordinator subscribe to collaboration session and call `LiveShareFollowerController` or
 * `LiveSharePresenterController` to execute live share.
 */
export declare class LiveShareCoordinator extends RxDisposable {
    private readonly _unitID;
    private readonly _collabSession;
    private readonly _configService;
    private readonly _liveShareService;
    private readonly _commandService;
    private _status$;
    status$: import("rxjs").Observable<LiveShareStatus>;
    private get _status();
    private _init;
    private _commandDisposable;
    private _presenter;
    constructor(_unitID: string, _collabSession: CollaborationSession, _configService: IConfigService, _liveShareService: LiveShareService, _commandService: ICommandService);
    dispose(): void;
    getStatus(): LiveShareStatus;
    init(): void;
    tryStartPresenting(): void;
    stopPresenting(): void;
    startFollowing(): void;
    stopFollowing(): void;
    private _handleNewHost;
    private _fetchOperations;
    private _handleTerminate;
    private _handleNewChangeSets;
    private _startPresenting;
    private _stopPresenting;
    private _startFollowing;
    private _beIdle;
    private _stopFollowing;
    private _handleOperation;
    private _handleOffline;
    private _handleOnline;
}
