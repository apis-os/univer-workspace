import { CollaborationSessionService } from '@univerjs-pro/collaboration-client';
import { Injector, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IUnitPresenceUIAdapterRegistry } from '@univerjs/ui';
export declare class UnitPresenceCollabCursorController extends RxDisposable {
    private readonly _univerInstanceService;
    private readonly _injector;
    private readonly _collabSessionService;
    private readonly _adapterRegistry;
    private _isDisposed;
    private readonly _entities;
    private readonly _pendingEntities;
    private readonly _adapterDisposables;
    constructor(_univerInstanceService: IUniverInstanceService, _injector: Injector, _collabSessionService: CollaborationSessionService, _adapterRegistry: IUnitPresenceUIAdapterRegistry);
    dispose(): void;
    private _init;
    private _syncAdapters;
    private _bindAdapter;
    private _startEntity;
    private _disposeEntity;
    private _disposeEntitiesForType;
}
