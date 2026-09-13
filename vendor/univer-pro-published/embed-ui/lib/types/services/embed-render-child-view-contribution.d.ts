import type { EmbedLayout } from '@univerjs-pro/embed';
import type { DependencyIdentifier, IDisposable } from '@univerjs/core';
import type { IRenderManagerService } from '@univerjs/engine-render';
import type { Observable } from 'rxjs';
import type { IEmbedChildContainerContext, IEmbedChildViewContribution } from '../types/embed-ui';
import { Injector, UniverInstanceType } from '@univerjs/core';
export interface IEmbedRenderLike {
    isMainScene?: boolean;
    engine: {
        mount: (target: HTMLElement) => void;
        unmount?: () => void;
        resize: () => void;
        getCanvasElement?: () => HTMLCanvasElement | undefined;
        getCanvas?: () => {
            getCanvasEle?: () => HTMLCanvasElement | undefined;
        } | undefined;
    };
    activate?: () => void;
    components: {
        forEach: (callback: (component: {
            makeForceDirty?: (dirty: boolean) => void;
            makeDirty?: (dirty?: boolean) => void;
        }) => void) => void;
    };
    mainComponent?: {
        makeDirty?: (dirty?: boolean) => void;
    } | null | void;
    scene: {
        afterRender$?: Observable<unknown>;
        makeDirty: (dirty?: boolean) => void;
        requestRender?: () => Promise<unknown> | unknown;
        render?: () => void;
    };
    with?: <T>(dependency: DependencyIdentifier<T>) => T;
}
export interface ICreateEmbedRenderChildViewContributionOptions {
    childType: UniverInstanceType;
    supportedLayouts: readonly EmbedLayout[];
    renderManagerService: DependencyIdentifier<IRenderManagerService>;
}
export interface IMountEmbedRenderChildUnitOptions {
    activate?: boolean;
    scopedRenderInjector?: boolean;
    scopedInjector?: Injector;
}
export declare function createEmbedRenderChildViewContribution(options: ICreateEmbedRenderChildViewContributionOptions): IEmbedChildViewContribution;
export declare function mountEmbedRenderChildUnit(context: IEmbedChildContainerContext, renderManagerServiceIdentifier: DependencyIdentifier<IRenderManagerService>, target?: HTMLElement, options?: IMountEmbedRenderChildUnitOptions): IDisposable | undefined;
export declare function observeEmbedRenderTargetResize(render: IEmbedRenderLike, target: HTMLElement, options?: {
    activate?: boolean;
    idleMs?: number;
}): IDisposable;
export declare function ensureEmbedChildRender(renderManagerService: IRenderManagerService, childUnitId: string, renderParentInjector?: Injector): IEmbedRenderLike | undefined;
export declare function createEmbedChildRender(renderManagerService: IRenderManagerService, childUnitId: string, renderParentInjector?: Injector): IEmbedRenderLike | undefined;
export declare function refreshEmbedChildRender(render: IEmbedRenderLike, options?: {
    activate?: boolean;
}): void;
