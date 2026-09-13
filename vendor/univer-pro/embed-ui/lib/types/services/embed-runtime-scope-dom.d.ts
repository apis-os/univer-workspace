import type { UniverInstanceType } from '@univerjs/core';
import { EMBED_CHILD_UNIT_ID_ATTRIBUTE } from '@univerjs/ui';
export declare const EMBED_FLOAT_DOM_ATTRIBUTE = "data-embed-float-dom";
export declare const EMBED_ID_ATTRIBUTE = "data-embed-id";
export declare const EMBED_HOST_UNIT_ID_ATTRIBUTE = "data-embed-host-unit-id";
export declare const EMBED_CHILD_TYPE_ATTRIBUTE = "data-embed-child-type";
export { EMBED_CHILD_UNIT_ID_ATTRIBUTE };
export interface IEmbedRuntimeDomScope {
    embedId: string;
    hostUnitId?: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export declare function resolveEmbedRuntimeDomScope(element: HTMLElement | null | undefined): IEmbedRuntimeDomScope | undefined;
export declare function resolveActiveEmbedRuntimeDomScope(ownerDocument?: Document): IEmbedRuntimeDomScope | undefined;
export declare function resolveEmbedFloatDomContainer(element: HTMLElement | null | undefined, embedId?: string): HTMLElement | undefined;
