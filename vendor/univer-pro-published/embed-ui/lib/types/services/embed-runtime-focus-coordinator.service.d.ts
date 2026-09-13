import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import { Subject } from 'rxjs';
export declare const EMBED_RUNTIME_FOCUS_ROLE_ATTRIBUTE = "data-embed-runtime-focus-role";
export type EmbedRuntimeFocusRole = 'runtime' | 'child-session' | 'child-editor' | 'child-popup' | 'floating-menu';
export type EmbedRuntimeSessionMode = 'host-passive' | 'child-keyboard' | 'child-fullscreen' | 'child-tab';
export interface IEmbedRuntimeFocusLeaseOptions {
    embedId: string;
    role: EmbedRuntimeFocusRole;
    owner?: string;
    sessionMode?: EmbedRuntimeSessionMode;
    hostUnitId?: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    associatedChildUnitIds?: string[];
}
export interface IEmbedRuntimeFocusElementRegistration {
    embedId: string;
    role: EmbedRuntimeFocusRole;
    element: HTMLElement;
}
export interface IEmbedRuntimeScopeRegistration {
    embedId: string;
    hostUnitId?: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    sessionMode?: EmbedRuntimeSessionMode;
}
export interface IEmbedRuntimeFocusLeaseQueryOptions {
    ignoreOwners?: string[];
}
export declare class EmbedRuntimeFocusCoordinator {
    private readonly _leases;
    private readonly _elements;
    private readonly _runtimeScopes;
    private _leaseSequence;
    readonly runtimeFocusChanged$: Subject<void>;
    readonly runtimeSessionChanged$: Subject<void>;
    acquireLease(options: IEmbedRuntimeFocusLeaseOptions): IDisposable;
    hasChildInteractionLease(embedId: string | undefined): boolean;
    hasBlockingChildFocusLease(embedId: string | undefined, options?: IEmbedRuntimeFocusLeaseQueryOptions): boolean;
    hasAnyChildInteractionLease(): boolean;
    hasAnyBlockingChildFocusLease(options?: IEmbedRuntimeFocusLeaseQueryOptions): boolean;
    hasHostPreservingChildFocusLease(embedId: string | undefined, options?: IEmbedRuntimeFocusLeaseQueryOptions): boolean;
    hasAnyHostPreservingChildFocusLease(options?: IEmbedRuntimeFocusLeaseQueryOptions): boolean;
    hasHostPreservingChildFocusLeaseForHost(hostUnitId: string | undefined, options?: IEmbedRuntimeFocusLeaseQueryOptions): boolean;
    isChildUnitInActiveSession(unitId: string | undefined): boolean;
    registerRuntimeScope(options: IEmbedRuntimeScopeRegistration): IDisposable;
    resolveRuntimeScopeByChildUnitId(childUnitId: string | undefined): IEmbedRuntimeScopeRegistration | undefined;
    resolveActiveChildSessionRuntimeScope(): IEmbedRuntimeScopeRegistration | undefined;
    isChildUnitRuntimeEvent(unitId: string | undefined, target: EventTarget | null | undefined, event?: Event): boolean;
    shouldSuppressHostInteraction(unitId: string | undefined, target?: EventTarget | null, event?: Event, options?: IEmbedRuntimeFocusLeaseQueryOptions): boolean;
    registerElement(options: IEmbedRuntimeFocusElementRegistration): IDisposable;
    listElements(embedId: string | undefined): HTMLElement[];
    containsElement(embedId: string | undefined, target: EventTarget | null | undefined, event?: Event): boolean;
    private _containsRegisteredElement;
    private _isBlockingLease;
    private _isHostPreservingLease;
    private _leaseAppliesToHostUnit;
    private _ownedRuntimeFocusAppliesToHost;
    private _leaseAppliesToChildUnit;
    private _ownedEmbedAppliesToChildUnit;
    private _isBlockingRole;
    private _getChildSessionPriority;
    private _resolveChildSessionMode;
    private _isOwnedBoundaryElement;
    private _getOwnedEmbedIdFromTarget;
    private _getOwnedEmbedIdFromEventPoint;
    private _getEventClientPoint;
    private _rectContainsPoint;
    private _getActiveOwnedRuntimeFocusInfo;
    private _isHTMLElement;
    private _isRuntimeFocusRole;
    private _getAnyActiveElement;
    private _getActiveElement;
    private _notifyRuntimeFocusChanged;
    private _notifyRuntimeSessionChanged;
}
