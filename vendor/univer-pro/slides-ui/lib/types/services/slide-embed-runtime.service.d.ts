import type { IDisposable, Injector, UniverInstanceType } from '@univerjs/core';
export interface ISlideEmbedPageListMountParams {
    hostElement: HTMLElement;
    hostUnitId: string;
    embedId: string;
    hostAnchorId: string;
    childUnitId: string;
    childType: UniverInstanceType;
}
export interface ISlideEmbedFloatingObjectMountParams {
    hostElement: HTMLElement;
    hostUnitId: string;
    embedId: string;
    hostAnchorId: string;
    childUnitId: string;
    childType: UniverInstanceType;
}
export interface ISlideEmbedPresentationMountParams {
    hostElement: HTMLElement;
    hostUnitId: string;
    slideId: string;
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    entry: 'slides-floating-object' | 'slides-page-list-block';
    width: number;
    height: number;
    dpr: number;
}
export interface ISlideEmbedRuntimeSession {
    embedId: string;
    hostUnitId: string;
    entry: string;
    childType?: UniverInstanceType;
    childUnitId?: string;
}
export interface ISlideEmbedPreviewCaptureOptions {
    hostUnitId: string;
    embedId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    width: number;
    height: number;
    dpr: number;
}
export interface ISlideEmbedRuntimeService {
    mountPageList(params: ISlideEmbedPageListMountParams): IDisposable | undefined;
    mountFloatingObject(params: ISlideEmbedFloatingObjectMountParams): IDisposable | undefined;
    clearAndUnmount(embedId: string): void;
    unmountFloatingSessions(hostUnitId: string): void;
    listSessions(): ISlideEmbedRuntimeSession[];
    capturePreviewByHostAnchorId(hostAnchorId: string, options?: ISlideEmbedPreviewCaptureOptions): Promise<string | undefined>;
    /**
     * Optional so standalone Slides does not depend on EmbedUI. The EmbedUI
     * contribution supplies the real presentation runtime when installed.
     */
    mountPresentationEmbed?(params: ISlideEmbedPresentationMountParams): IDisposable | undefined;
}
export declare const ISlideEmbedRuntimeService: import("@wendellhu/redi").IdentifierDecorator<ISlideEmbedRuntimeService>;
export declare function tryGetSlideEmbedRuntimeService(injector: Injector): ISlideEmbedRuntimeService | undefined;
