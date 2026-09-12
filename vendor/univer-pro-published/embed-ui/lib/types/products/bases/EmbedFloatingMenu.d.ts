import type { IBaseToolbarState } from '@univerjs-pro/bases-ui';
import type { IViewSnapshot } from '@univerjs/core';
import type { IEmbedFloatingMenuContribution } from '../../types/embed-ui';
export declare const BASE_EMBED_VIEW_PANEL_WIDTH = 208;
export declare function createBasesFloatingMenuContributions(): IEmbedFloatingMenuContribution[];
export declare function resolveBasesFloatingMenuStage(params: {
    embedId: string;
    activeEmbedId: string | null | undefined;
    stage: string | null | undefined;
    fullscreen?: boolean;
    usesDomFloatingStage: boolean;
    renderScopeActive: boolean;
}): 'inactive' | 'stage2';
export declare function shouldUseBaseFullscreenToolbar(fullscreen: boolean): boolean;
export declare function shouldUseBaseFullscreenViewTabs(fullscreen: boolean): boolean;
export declare function shouldShowBaseEmbedRemoveButton(fullscreen: boolean): boolean;
export declare function createBaseEmbedFloatingMenuBoundaryAttributes(embedId: string): Record<string, string>;
export declare function createBaseFloatingToolbarState(view: IViewSnapshot, undoRedoStatus?: {
    undos?: number;
    redos?: number;
}): IBaseToolbarState;
export declare function viewPanelStyle(anchor: DOMRect): {
    top: number;
    left: number;
    maxHeight: number;
};
