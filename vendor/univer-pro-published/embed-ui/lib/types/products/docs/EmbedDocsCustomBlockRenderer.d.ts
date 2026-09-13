import type { IEmbedFloatDomData } from '../../components/embed-float-dom-data';
import { IRenderManagerService } from '@univerjs/engine-render';
export interface IEmbedDocsCustomBlockRuntimeProps {
    customBlockRenderViewport?: {
        bleedLeft?: number;
        bleedWidth?: number;
        contentHeight?: number;
        contentWidth?: number;
        height?: number;
        pageContentWidth?: number;
        viewScale?: number;
        visibleCanvasHeight?: number;
        viewportHeight?: number;
    };
}
export declare function EmbedDocsCustomBlockRenderer(props: {
    data?: IEmbedFloatDomData;
} & IEmbedDocsCustomBlockRuntimeProps): import("react").JSX.Element;
export declare function applyDocsCustomBlockZoomVisualScale(root: HTMLElement, params: {
    fromScale: number;
    outerHeight: number;
    toScale: number;
}): void;
export declare function blurHostDocSelectionWhenEmbedRuntimeEntersStage(renderManagerService: IRenderManagerService, hostUnitId: string | undefined, stage: 'inactive' | 'stage1' | 'stage2'): void;
export declare function resolveDocsTableLikeCustomBlockRuntimeContentHeight(authoritativeContentHeight: number | undefined): number;
export declare function resolveDocsCustomBlockRuntimeViewportHeight(params: {
    contentHeight: number;
    viewportHeight?: number;
}): number;
export declare function resolveDocsTableLikeCustomBlockRuntimeLayoutWidth(params: {
    contentWidth?: number;
    pageContentWidth?: number;
}): number | undefined;
export declare function resolveDocsTableLikeCustomBlockRuntimeContentWidth(authoritativeContentWidth: number | undefined, measureFallback: () => number): number;
export declare function shouldSyncDocsTableLikeCustomBlockBleedOnScroll(root: HTMLElement, target: EventTarget | null): boolean;
