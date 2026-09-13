import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { Observable } from 'rxjs';
export declare const BASE_EMBED_INTERACTION_BOUNDARY_OWNER_ATTRIBUTE = "data-embed-interaction-boundary-owner";
export declare const BASE_EMBED_RUNTIME_FOCUS_ROLE_ATTRIBUTE = "data-embed-runtime-focus-role";
export declare const BASE_EMBED_FLOAT_DOM_ATTRIBUTE = "data-embed-float-dom";
export declare const BASE_EMBED_ID_ATTRIBUTE = "data-embed-id";
export declare const BASE_EMBED_HOST_UNIT_ID_ATTRIBUTE = "data-embed-host-unit-id";
export declare const BASE_EMBED_CHILD_UNIT_ID_ATTRIBUTE = "data-embed-child-unit-id";
export declare const BASE_EMBED_CHILD_TYPE_ATTRIBUTE = "data-embed-child-type";
export interface IBaseEmbedFloatingActivation {
    embedId?: string;
    hostUnitId?: string;
    childUnitId?: string;
    stage?: string | null;
}
export interface IBaseEmbedFloatingActiveService {
    readonly active$: Observable<IBaseEmbedFloatingActivation | null>;
    getActive(): IBaseEmbedFloatingActivation | null;
}
export declare const IBaseEmbedFloatingActiveService: import("@wendellhu/redi").IdentifierDecorator<IBaseEmbedFloatingActiveService>;
export interface IBaseEmbedFloatingGeometryService {
    readonly geometryInvalidated$: Observable<unknown>;
}
export declare const IBaseEmbedFloatingGeometryService: import("@wendellhu/redi").IdentifierDecorator<IBaseEmbedFloatingGeometryService>;
export interface IBaseEmbedRuntimeDomScope {
    embedId: string;
    hostUnitId?: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export interface IBaseEmbedRuntimeFocusLeaseOptions {
    embedId: string;
    role: 'child-editor';
    owner?: string;
    hostUnitId?: string;
    childUnitId?: string;
}
export interface IBaseEmbedRuntimeFocusCoordinator {
    acquireLease(options: IBaseEmbedRuntimeFocusLeaseOptions): IDisposable;
}
export declare const IBaseEmbedRuntimeFocusCoordinator: import("@wendellhu/redi").IdentifierDecorator<IBaseEmbedRuntimeFocusCoordinator>;
export declare function resolveBaseEmbedRuntimeDomScope(element: HTMLElement | null | undefined): IBaseEmbedRuntimeDomScope | undefined;
