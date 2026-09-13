import type { SlideModel } from '@univerjs-pro/slides';
import type { ComponentType } from 'react';
import type { LocaleKey } from '../../locale/types';
import { Injector } from '@univerjs/core';
export declare const SLIDE_THUMBNAIL_OVERLAY_PART = "slides-ui.thumbnail-overlay";
export interface ISlideThumbnailOverlayProps {
    unitId: string;
    pageId: string;
    setActivePage: (pageId: string) => void;
}
export declare function getSlideFloatingPanelPortalContainer(): HTMLElement;
type TThumbnailContextMenuAction = 'cut' | 'copy' | 'paste' | 'addBelow' | 'delete';
interface IThumbnailContextMenuItem {
    action: TThumbnailContextMenuAction;
    localeKey: LocaleKey;
    Icon: ComponentType<{
        className?: string;
    }>;
    disabled: (state: {
        hasClipboard: boolean;
        slideCount: number;
    }) => boolean;
}
export declare const THUMBNAIL_CONTEXT_MENU_ITEMS: IThumbnailContextMenuItem[];
export declare function deactivateActiveEmbedPageBeforeSlidePageActivation(injector: Injector, slideModel: SlideModel, nextPageId?: string): void;
export declare function deactivateEmbedPageBeforeRegularPageActivation(injector: Injector, slideModel: SlideModel): void;
export declare function scheduleSlidePageActivation(slideModel: SlideModel, pageId: string): void;
/**
 * Left-sidebar thumbnail strip.
 *
 * Renders a numbered list of slide-page thumbnails.
 * Clicking a thumbnail activates that page.
 * The "+ Add slide" button opens a layout picker popover.
 */
export declare function SlideThumbnailBar(): import("react").JSX.Element | null;
export {};
