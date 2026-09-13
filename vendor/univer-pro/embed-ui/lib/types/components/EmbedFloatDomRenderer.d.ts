import type { Observable } from 'rxjs';
import type { EmbedFloatingStage, EmbedInteractionFlow, IEmbedChildContainerContext } from '../types/embed-ui';
import type { IEmbedFloatDomData } from './embed-float-dom-data';
export type IEmbedDocsCustomBlockLayout = {
    floatingMenuInsetTop: number;
    sheetLike: false;
} | {
    bleedLeft: number;
    bleedWidth: number;
    contentHeight: number;
    contentWidth: number;
    floatingMenuInsetTop: number;
    pageContentWidth: number;
    sheetLike: true;
    viewScale: number;
    visibleCanvasHeight?: number;
    viewportHeight: number;
};
export declare function EmbedFloatDomRenderer(props: {
    data?: IEmbedFloatDomData;
    docsCustomBlockLayout?: IEmbedDocsCustomBlockLayout;
    initialStage?: EmbedFloatingStage;
    interactionFlow?: EmbedInteractionFlow;
    hostFloatDomLayout$?: Observable<unknown>;
    onHostWheel?: (event: WheelEvent, context: IEmbedChildContainerContext) => boolean | void;
    onRuntimeStageEnter?: (stage: EmbedFloatingStage) => void;
    onRuntimeStageExit?: () => void;
    floatingChromeZIndex?: number;
    syncHostVerticalScroll?: boolean;
    enableStage1BodyDrag?: boolean;
    /**
     * Avoid mounting and measuring body-level floating chrome while the block
     * is inactive to keep viewport movement independent of the number of
     * float blocks.
     */
    deferInactiveFloatingChrome?: boolean;
    resolveHostWheelGestureRoot?: (container: HTMLElement) => HTMLElement | null | undefined;
    isExternalHostInteraction?: (event: PointerEvent) => boolean;
}): import("react").JSX.Element;
