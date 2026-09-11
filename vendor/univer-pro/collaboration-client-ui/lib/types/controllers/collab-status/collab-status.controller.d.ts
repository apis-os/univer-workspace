import { CollaborationController, CollaborationStatus } from '@univerjs-pro/collaboration-client';
import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { IUIPartsService, IUnitPresenceUIAdapterRegistry } from '@univerjs/ui';
import { BehaviorSubject } from 'rxjs';
/**
 * This controller is responsible for monitoring the collaboration status of the currently focused unit.
 */
export declare class DesktopCollaborationStatusDisplayController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _injector;
    private readonly _collaborationController;
    private readonly _uiPartsService;
    private readonly _presenceAdapterRegistry;
    protected readonly _status$: BehaviorSubject<CollaborationStatus>;
    private readonly _presenceStatusRegistrations;
    constructor(_univerInstanceService: IUniverInstanceService, _injector: Injector, _collaborationController: CollaborationController, _uiPartsService: IUIPartsService, _presenceAdapterRegistry: IUnitPresenceUIAdapterRegistry);
    dispose(): void;
    private _initStatusListener;
    protected _initStatusComponent(): void;
    private _initPresenceStatusComponents;
    private _syncPresenceStatusComponents;
    private _registerPresenceStatusComponent;
}
export declare function getCollaborationStatusUnitId(univerInstanceService: IUniverInstanceService): string | null;
