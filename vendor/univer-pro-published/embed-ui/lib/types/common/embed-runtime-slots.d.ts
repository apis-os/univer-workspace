import type { IDisposable } from '@univerjs/core';
export declare const EMBED_CONTENT_ROOT_ATTRIBUTE = "data-embed-content-root";
export declare const EMBED_CANVAS_ROOT_ATTRIBUTE = "data-embed-canvas-root";
export declare const EMBED_OVERLAY_ROOT_ATTRIBUTE = "data-embed-overlay-root";
export declare const EMBED_POPUP_ROOT_ATTRIBUTE = "data-embed-popup-root";
export declare const EMBED_MENU_SLOT_ATTRIBUTE = "data-embed-menu-slot";
export declare const EMBED_FOOTER_SLOT_ATTRIBUTE = "data-embed-footer-slot";
export declare function findEmbedRuntimeSlot(root: HTMLElement, attribute: string): HTMLElement | undefined;
export declare function ensureEmbedDefaultRuntimeSlots(root: HTMLElement): IDisposable;
