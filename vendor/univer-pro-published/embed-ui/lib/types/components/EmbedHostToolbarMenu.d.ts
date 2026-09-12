import { Injector } from '@univerjs/core';
export declare function EmbedHostToolbarMenu(): import("react").JSX.Element | null;
interface IEmbedFullscreenRuntimeParts {
    embedId: string;
    injector: Injector;
    sourceInjector: Injector;
    popupContainer: HTMLElement;
}
export declare function EmbedFullscreenPopupParts(props: IEmbedFullscreenRuntimeParts): import("react").JSX.Element;
export declare function EmbedFullscreenRightSidebarParts(props: IEmbedFullscreenRuntimeParts): import("react").JSX.Element;
export {};
