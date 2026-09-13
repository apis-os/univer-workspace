import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export interface ISlideSidebarStateSnapshot {
    shapePanelOpen: boolean;
    backgroundPanelOpen: boolean;
    transitionPanelOpen: boolean;
    objectListPanelOpen: boolean;
}
export interface ISlideSidebarStateService {
    readonly state$: Observable<ISlideSidebarStateSnapshot>;
    readonly anyPanelOpen$: Observable<boolean>;
    getSnapshot(): ISlideSidebarStateSnapshot;
    setShapePanelOpen(open: boolean): void;
    setBackgroundPanelOpen(open: boolean): void;
    setTransitionPanelOpen(open: boolean): void;
    setObjectListPanelOpen(open: boolean): void;
}
export declare const ISlideSidebarStateService: import("@wendellhu/redi").IdentifierDecorator<ISlideSidebarStateService>;
export declare class SlideSidebarStateService extends Disposable implements ISlideSidebarStateService {
    private readonly _state$;
    readonly state$: Observable<ISlideSidebarStateSnapshot>;
    readonly anyPanelOpen$: Observable<boolean>;
    dispose(): void;
    getSnapshot(): ISlideSidebarStateSnapshot;
    setShapePanelOpen(open: boolean): void;
    setBackgroundPanelOpen(open: boolean): void;
    setTransitionPanelOpen(open: boolean): void;
    setObjectListPanelOpen(open: boolean): void;
    private _patch;
}
