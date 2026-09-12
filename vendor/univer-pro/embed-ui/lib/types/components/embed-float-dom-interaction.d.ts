import type { EmbedModelService, IEmbedDescriptor } from '@univerjs-pro/embed';
import type { IDisposable } from '@univerjs/core';
import type { ILayoutService } from '@univerjs/ui';
import type { EmbedActivationService } from '../services/embed-activation.service';
import type { EmbedFloatingActiveService } from '../services/embed-floating-active.service';
import type { EmbedInteractionBoundaryService } from '../services/embed-interaction-boundary.service';
import type { EmbedRuntimeFocusCoordinator, EmbedRuntimeFocusRole } from '../services/embed-runtime-focus-coordinator.service';
import type { EmbedFloatingStage, EmbedInteractionFlow } from '../types/embed-ui';
import type { EmbedVerticalScrollOwner } from './embed-float-dom-geometry';
import { UniverInstanceType } from '@univerjs/core';
export declare const EMBED_FLOAT_CHROME_CONTROL_SELECTOR = "[data-embed-floating-menu=\"true\"], [data-embed-floating-menu-popup=\"true\"], [data-embed-ribbon-override=\"true\"], [data-embed-float-fullscreen-button=\"true\"]";
export declare const EMBED_FLOAT_DRAG_HANDLE_POINTER_DOWN_EVENT = "univer:embed-float-drag-handle:pointerdown";
export interface IEmbedFloatDragHandlePointerDownDetail {
    button?: number;
    clientX: number;
    clientY: number;
    embedId: string;
    hostAnchorId: string;
    hostUnitId: string;
    pointerId?: number;
}
export declare function getRuntimeRootElements(...roots: Array<HTMLElement | null | undefined>): HTMLElement[];
export declare function registerEmbedFloatWheelBoundary(container: HTMLElement, chrome: HTMLElement | null, routeWheelToHost?: (event: WheelEvent) => boolean, hostAnchor?: HTMLElement | null, childType?: UniverInstanceType): () => void;
export declare function registerEmbedFullscreenButtonHover(container: HTMLElement, button: HTMLElement): () => void;
export declare function findRuntimeCanvas(roots: HTMLElement[], target?: EventTarget | null): HTMLCanvasElement | null;
export declare function shouldAutoFocusRuntimeCanvas(childType: UniverInstanceType | undefined, allowBase?: boolean): boolean;
export declare function isChildEditorOrPopupRuntimeElement(target: EventTarget | null): boolean;
export declare function getRuntimeFocusRole(target: EventTarget | null): EmbedRuntimeFocusRole | undefined;
export declare function registerEmbedStage2LayoutContainers(layoutService: Pick<ILayoutService, 'checkElementInCurrentContainers' | 'registerContainerElement'>, focusCoordinator: Pick<EmbedRuntimeFocusCoordinator, 'listElements' | 'runtimeFocusChanged$'>, embedId: string | undefined, container: HTMLElement | null, stage: EmbedFloatingStage): IDisposable | undefined;
export declare function shouldAcquireOwnedInteractionPointerLease(options: {
    stage: EmbedFloatingStage;
    target: EventTarget | null;
    liveRoot: HTMLElement;
    isOwnedChildInteraction: boolean;
}): boolean;
export declare function shouldPreserveFocusAfterOwnedPointerInteraction(options: {
    now: number;
    ownedPointerInteractionUntil: number;
}): boolean;
export declare function registerEmbedOutsideInteraction(options: {
    activationService: EmbedActivationService;
    chrome: HTMLElement | null;
    container: HTMLElement;
    embedId: string;
    externalHostInteractionUntil: {
        current: number;
    };
    floatingActiveService: EmbedFloatingActiveService;
    focusCoordinator: EmbedRuntimeFocusCoordinator;
    graceMs: number;
    hostUnitId?: string;
    interactionBoundaryService: EmbedInteractionBoundaryService;
    isExternalHostInteraction?: (event: PointerEvent) => boolean;
    ownedPointerInteractionUntil: {
        current: number;
    };
    runtimeFocusOwners: string[];
}): IDisposable;
export declare function registerEmbedActivationInteraction(options: {
    acquireStage2SessionLease: () => void;
    activationService: EmbedActivationService;
    data: {
        childType?: UniverInstanceType;
        childUnitId?: string;
        embedId: string;
        hostAnchorId: string;
        hostUnitId: string;
    };
    embedModelService: EmbedModelService;
    enableStage1BodyDrag?: boolean;
    floatingActiveService: EmbedFloatingActiveService;
    gate: HTMLElement;
    interactionFlow: EmbedInteractionFlow;
    popupRoot: HTMLElement | null;
    releaseStage2SessionLeaseIfActivationDoesNotStick: () => void;
}): IDisposable;
export declare function resolveEmbedActivationDescriptor(descriptor: IEmbedDescriptor | undefined, runtime: {
    childType?: UniverInstanceType;
    childUnitId?: string;
}): IEmbedDescriptor | undefined;
export declare function registerEmbedCanvasFocus(options: {
    acquireStage2SessionLease: () => void;
    activationService: EmbedActivationService;
    data: {
        childType?: UniverInstanceType;
        childUnitId?: string;
        embedId?: string;
        hostUnitId?: string;
    };
    embedModelService: EmbedModelService;
    floatingActiveService: EmbedFloatingActiveService;
    focusCoordinator: EmbedRuntimeFocusCoordinator;
    getRuntimeRoots: () => HTMLElement[];
    interactionFlow: EmbedInteractionFlow;
    liveRoot: HTMLElement;
    popupRoot: HTMLElement | null;
    releaseStage2SessionLeaseIfActivationDoesNotStick: () => void;
    runtimeFocusOwners: string[];
}): IDisposable;
export declare function registerEmbedPointerLease(options: {
    data: {
        childType?: UniverInstanceType;
        childUnitId?: string;
        embedId: string;
        hostUnitId?: string;
    };
    floatingActiveService: EmbedFloatingActiveService;
    focusCoordinator: EmbedRuntimeFocusCoordinator;
    graceMs: number;
    interactionBoundaryService: EmbedInteractionBoundaryService;
    liveRoot: HTMLElement;
    ownedPointerInteractionUntil: {
        current: number;
    };
    pointerLease: {
        current: IDisposable | undefined;
    };
    verticalScrollOwner: {
        current: EmbedVerticalScrollOwner;
    };
}): IDisposable;
export declare function isHostFocusSurface(target: HTMLElement): boolean;
export declare function blurRuntimeFocusIfOwnedByBlock(embedId: string | undefined, roots: HTMLElement[]): void;
export declare function registerEmbedProgrammaticFocusRestore(options: {
    ownerDocument: Document;
    restore: () => void;
    shouldRestore: (target: EventTarget | null) => boolean;
    timeoutMs?: number;
}): IDisposable;
