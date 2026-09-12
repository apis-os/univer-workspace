import type { IDisposable } from '@univerjs/core';
export type EmbedFloatingGeometryInvalidationReason = 'host-scroll' | 'child-scroll' | 'resize' | 'stage-change' | 'wheel' | 'manual';
export interface IEmbedFloatingGeometryInvalidation {
    embedId?: string;
    reason: EmbedFloatingGeometryInvalidationReason;
}
export interface IEmbedFloatingGeometryRegistration {
    embedId: string;
    childUnitId?: string;
    root: HTMLElement;
    viewport?: HTMLElement | null;
    contentRoot?: HTMLElement | null;
}
export declare class EmbedFloatingGeometryService {
    private readonly _registrations;
    private readonly _geometryInvalidated$;
    readonly geometryInvalidated$: import("rxjs").Observable<IEmbedFloatingGeometryInvalidation>;
    register(registration: IEmbedFloatingGeometryRegistration): IDisposable;
    getRegistration(embedId: string): IEmbedFloatingGeometryRegistration | undefined;
    getRegistrationByChildUnitId(childUnitId: string): IEmbedFloatingGeometryRegistration | undefined;
    invalidate(invalidation: IEmbedFloatingGeometryInvalidation): void;
}
