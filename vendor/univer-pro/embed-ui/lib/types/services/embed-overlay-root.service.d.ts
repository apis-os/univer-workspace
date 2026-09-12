import type { IDisposable } from '@univerjs/core';
export interface IEmbedOverlayRootRegistration {
    childUnitId: string;
    embedId?: string;
    hostAnchorId?: string;
    root: HTMLElement;
}
export declare class EmbedOverlayRootService {
    private readonly _rootsByChildUnitId;
    private readonly _rootsByEmbedId;
    private readonly _rootsByHostAnchorId;
    register(childUnitId: string, root: HTMLElement): IDisposable;
    register(registration: IEmbedOverlayRootRegistration): IDisposable;
    get(childUnitId: string): HTMLElement | null;
    getByEmbedId(embedId: string): HTMLElement | null;
    getByHostAnchorId(hostAnchorId: string): HTMLElement | null;
    contains(target: EventTarget | Node | null | undefined, query: {
        childUnitId?: string;
        embedId?: string;
        hostAnchorId?: string;
    }): boolean;
}
