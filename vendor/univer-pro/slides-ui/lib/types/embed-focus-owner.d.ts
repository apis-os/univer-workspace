import type { SlideModel } from '@univerjs-pro/slides';
import type { Observable } from 'rxjs';
import type { ISlideEmbedRuntimeSession } from './services/slide-embed-runtime.service';
import { Injector } from '@univerjs/core';
export interface IEmbeddedFocusOwner {
    hostUnitId: string;
    childUnitId: string;
}
export interface ISlideEmbedFocusOwnerService {
    focusOwner$: Observable<IEmbeddedFocusOwner | null>;
    getFocusOwner(): IEmbeddedFocusOwner | null;
    clearFocusOwner(embedId?: string): void;
}
export declare const ISlideEmbedFocusOwnerService: import("@wendellhu/redi").IdentifierDecorator<ISlideEmbedFocusOwnerService>;
export interface ISlideEmbedRuntimeFocusCoordinator {
    runtimeFocusChanged$: Observable<unknown>;
    hasHostPreservingChildFocusLeaseForHost(hostUnitId?: string): boolean;
}
export declare const ISlideEmbedRuntimeFocusCoordinator: import("@wendellhu/redi").IdentifierDecorator<ISlideEmbedRuntimeFocusCoordinator>;
export declare function shouldKeepSlideHostContentMounted(params: {
    slideUnitId?: string | null;
    focusedUnitId?: string | null;
    embedFocusOwner?: Pick<IEmbeddedFocusOwner, 'hostUnitId' | 'childUnitId'> | null;
    activeEmbedChildUnitIds?: readonly string[];
    activeSlideEditorUnitId?: string | null;
    hasHostPreservingChildFocusLease?: boolean;
}): boolean;
export declare function normalizeSlideFocusedUnitId(unitId: string | void | null | undefined): string | null;
export declare function useSlideHostContentMountedState(): {
    slideModel: SlideModel | undefined;
    shouldRenderHostContent: boolean;
};
export declare function resolveSlideHostUnitIdForEmbedFocus(params: {
    currentSlideUnitId?: string | null;
    focusedUnitId?: string | null;
    embedFocusOwner?: Pick<IEmbeddedFocusOwner, 'hostUnitId' | 'childUnitId'> | null;
    runtimeSessions?: readonly Pick<ISlideEmbedRuntimeSession, 'hostUnitId' | 'entry' | 'childType' | 'childUnitId'>[];
}): string | undefined;
export declare function getEmbedFocusOwnerObservable(service: ISlideEmbedFocusOwnerService | undefined): Observable<IEmbeddedFocusOwner | null> | null;
export declare function tryGetEmbedFocusOwnerService(injector: Injector): ISlideEmbedFocusOwnerService | undefined;
export declare function tryGetRuntimeFocusCoordinator(injector: Injector): ISlideEmbedRuntimeFocusCoordinator | undefined;
