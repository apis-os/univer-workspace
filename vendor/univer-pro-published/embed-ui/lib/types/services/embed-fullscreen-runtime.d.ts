import type { EmbedLayout, IEmbedDescriptor } from '@univerjs-pro/embed';
import type { IDisposable, Injector } from '@univerjs/core';
import type { IEmbedChildContainerContext, IEmbedRenderScope } from '../types/embed-ui';
export declare function createFullscreenRenderScope(descriptor: IEmbedDescriptor, layout: EmbedLayout, roots: {
    viewport: HTMLElement;
    menuSlot: HTMLElement;
    popupSlot?: HTMLElement;
    footerSlot: HTMLElement;
}): IEmbedRenderScope;
export declare function registerFullscreenRuntimeOwnership(params: {
    injector: Injector;
    descriptor: IEmbedDescriptor;
    renderScope: IEmbedRenderScope;
    menuRoot: HTMLElement | null;
    menuSlot: HTMLElement;
    popupSlot: HTMLElement;
    sidebarSlot: HTMLElement;
    rightSidebarSlot: HTMLElement;
    footerSlot: HTMLElement;
}): IDisposable;
export declare function mountFullscreenWorkbenchMenus(params: {
    injector: Injector;
    descriptor: IEmbedDescriptor;
    childContext: IEmbedChildContainerContext;
    menuContainer: HTMLElement;
}): IDisposable | undefined;
