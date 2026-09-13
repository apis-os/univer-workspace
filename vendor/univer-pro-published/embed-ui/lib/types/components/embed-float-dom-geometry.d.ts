import type { IDisposable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { EmbedFloatingGeometryService } from '../services/embed-floating-geometry.service';
import type { EmbedFloatingStage, IEmbedChildContainerContext, IEmbedPassiveViewportProvider } from '../types/embed-ui';
interface IEmbedFloatDomRect {
    height: number;
    left: number;
    top: number;
    width: number;
}
export declare const MIN_DOCS_SHEET_LIKE_RUNTIME_INTERACTION_HEIGHT = 24;
export declare const MIN_EMBED_FLOATING_CHROME_CONTROLS_HEIGHT = 40;
export type EmbedVerticalScrollOwner = 'host' | 'child' | undefined;
interface IDocsEmbedVerticalScrollState {
    childOffset: number;
    clipBottom: number;
    visualOffset: number;
}
export interface IEmbedHostVerticalScrollSyncOptions {
    collapseViewportHeight?: number;
    collapseWithoutChildScroll?: boolean;
    container: HTMLElement;
    content: HTMLElement;
    contentHeight?: number;
    enabled?: boolean;
    getChildContext: () => IEmbedChildContainerContext | undefined;
    getProvider: (context: IEmbedChildContainerContext) => IEmbedPassiveViewportProvider | undefined;
    getStage: () => EmbedFloatingStage;
    hostLayout$?: Observable<unknown>;
    invalidate: () => void;
    offset: {
        current: number;
    };
    onHostWheel?: (event: WheelEvent, context: IEmbedChildContainerContext) => boolean | void;
    owner: {
        current: EmbedVerticalScrollOwner;
    };
    syncingChildFromHost: {
        current: boolean;
    };
    syncingHostFromChild: {
        current: boolean;
    };
    viewScale?: number;
    viewportHeight?: number;
}
export declare function registerEmbedHostVerticalScrollSync(options: IEmbedHostVerticalScrollSyncOptions): IDisposable;
export declare function canWriteDocsEmbedVerticalScroll(owner: EmbedVerticalScrollOwner, writer: Exclude<EmbedVerticalScrollOwner, undefined>): boolean;
export declare function resolveDocsEmbedHostScrollDelta(targetOffset: number, currentOffset: number, distanceToSticky: number): number;
export declare function resolveDocsEmbedVerticalScrollState(params: {
    collapseWithoutChildScroll?: boolean;
    contentHeight: number;
    hostOffset: number;
    stickyHeaderHeight: number;
    viewportHeight: number;
}): IDocsEmbedVerticalScrollState;
export declare function resolveDocsSheetLikeHorizontalMetrics(layout: {
    bleedLeft: number;
    bleedWidth: number;
    contentWidth: number;
}): {
    initialWidth: number;
    maxExpansion: number;
};
export declare function clampNumber(value: number, min: number, max: number): number;
export declare function resetEmbedChromeLayoutStyles(chrome: HTMLElement): void;
export declare function cacheEmbedFloatDomRect(container: HTMLElement, rect?: IEmbedFloatDomRect): void;
export declare function registerEmbedChromeLayout(options: {
    chrome: HTMLElement;
    container: HTMLElement;
    deferInactive?: boolean;
    docsSheetLikeLayout?: {
        contentWidth: number;
        pageContentWidth: number;
    };
    embedId?: string;
    geometryService: EmbedFloatingGeometryService;
    hostLayout$?: Observable<unknown>;
    stage: EmbedFloatingStage;
}): IDisposable;
export declare function isPointInsideFloatBlock(container: HTMLElement, event: MouseEvent): boolean;
export declare function syncRuntimeInteractionVisibility(container: HTMLElement, chrome: HTMLElement | undefined, visible: boolean, _stage: EmbedFloatingStage): void;
export declare function syncChromeControlsVisibility(chrome: HTMLElement | undefined, visible: boolean, stage: EmbedFloatingStage): void;
export declare function syncDocsSheetLikeChromePageArea(chrome: HTMLElement, chromeRect: DOMRect, pageRect: DOMRect): void;
export declare function resolveDocsSheetLikePageAreaRect(containerRect: DOMRect, layout?: {
    contentWidth: number;
    pageContentWidth: number;
}): DOMRect;
export declare function clearDocsSheetLikeChromePageArea(chrome: HTMLElement): void;
export declare function resolveChromeAnchorRect(container: HTMLElement): DOMRect;
export declare function isDocsSheetLikeChrome(container: HTMLElement): boolean;
export declare function isDocsCustomBlockChrome(container: HTMLElement): boolean;
export declare function invalidateGeometryAfterRuntimeScroll(geometryService: EmbedFloatingGeometryService, embedId: string | undefined, reason: 'child-scroll' | 'host-scroll' | 'wheel', framesRef: {
    current: number[];
}): void;
export declare function shouldSyncChromeRectForGlobalEvent(container: HTMLElement, event: Event | undefined, cachedRect: Partial<IEmbedFloatDomRect>): boolean;
export declare function isVerticalWheelOrScrollEvent(event: Event | undefined): boolean;
export {};
