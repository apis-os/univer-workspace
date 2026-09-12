import type { IDisposable } from '@univerjs/core';
import type { IEmbedChildContainerContext } from '../types/embed-ui';
import { UniverInstanceType } from '@univerjs/core';
export type EmbedSceneCanvasCaptureResult = string | HTMLCanvasElement | ImageBitmap;
export interface IEmbedSceneCanvasCaptureProvider {
    childType: UniverInstanceType;
    capture(context: IEmbedChildContainerContext): Promise<EmbedSceneCanvasCaptureResult | null | undefined> | EmbedSceneCanvasCaptureResult | null | undefined;
}
export declare class EmbedSceneCanvasCaptureService {
    private readonly _providers;
    private readonly _contextsByEmbedId;
    private readonly _contextsByHostAnchorId;
    private readonly _contextsByChildUnitId;
    register(provider: IEmbedSceneCanvasCaptureProvider): IDisposable;
    get(childType: UniverInstanceType): IEmbedSceneCanvasCaptureProvider | undefined;
    registerContext(context: IEmbedChildContainerContext): IDisposable;
    getContextByEmbedId(embedId: string): IEmbedChildContainerContext | undefined;
    getContextByHostAnchorId(hostAnchorId: string): IEmbedChildContainerContext | undefined;
    getContextByChildUnitId(childUnitId: string): IEmbedChildContainerContext | undefined;
    capture(context: IEmbedChildContainerContext): Promise<EmbedSceneCanvasCaptureResult | null | undefined>;
    captureByEmbedId(embedId: string): Promise<EmbedSceneCanvasCaptureResult | null | undefined>;
    captureByHostAnchorId(hostAnchorId: string): Promise<EmbedSceneCanvasCaptureResult | null | undefined>;
    captureByChildUnitId(childUnitId: string): Promise<EmbedSceneCanvasCaptureResult | null | undefined>;
}
export declare function captureEmbedContextSceneCanvas(context: IEmbedChildContainerContext): string | undefined;
interface IEmbedSceneScrollBar {
    enableHorizontal: boolean;
    enableVertical: boolean;
}
interface IEmbedScrollBarRender {
    scene?: IEmbedScrollBarScene;
}
interface IEmbedScrollBarScene {
    getViewports?: () => Array<{
        getScrollBar?: () => IEmbedSceneScrollBar | null | undefined | void;
    }>;
    getAllObjects?: () => IEmbedScrollBarSceneObject[];
    makeDirty?: (force?: boolean) => void;
    render?: () => void;
}
interface IEmbedScrollBarSceneObject {
    getSubScenes?: () => Map<string, IEmbedScrollBarScene>;
    hide?: () => void;
    oKey?: string;
    show?: () => void;
    visible?: boolean;
}
export declare function getEmbedContextSceneCanvas(context: IEmbedChildContainerContext, allowTainted?: boolean): HTMLCanvasElement | undefined;
export declare function hideEmbedContextScrollbars(context: IEmbedChildContainerContext): () => void;
export declare function hideEmbedRenderScrollbars(render: IEmbedScrollBarRender | null | undefined, roots?: readonly HTMLElement[]): () => void;
export declare function waitForEmbedPrintScrollbarsHidden(childType: UniverInstanceType): Promise<void>;
export {};
