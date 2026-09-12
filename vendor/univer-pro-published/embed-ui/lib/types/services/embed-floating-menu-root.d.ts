import type { IEmbedFloatingMenuMountContext } from '../types/embed-ui';
export declare function resolveEmbedFloatingMenuRoot(context: Pick<IEmbedFloatingMenuMountContext, 'embedId' | 'renderScope' | 'runtimeScope'>): HTMLElement;
export declare function createEmbedFloatingMenuContainer(context: IEmbedFloatingMenuMountContext): {
    menu: HTMLDivElement;
    menuRoot: HTMLElement;
    portalContainer: HTMLElement;
};
export declare function installMissingClickFallback(menu: HTMLElement): void;
