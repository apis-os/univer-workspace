import type { ISlideDrawing, SlideSceneTypeEnum } from '@univerjs-pro/slides';
import type { IDisposable, Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import { Registry } from '@univerjs/core';
export interface IRenderConvertContext {
    unitId: string;
    subUnitId: string;
    pageOffsetLeft: number;
    pageOffsetTop: number;
    orderIndex: number;
    sceneType?: SlideSceneTypeEnum;
    showPlaceholder?: boolean;
    animateFormulaPresentationOnCreate?: boolean;
    requestRender?: () => void;
}
export declare abstract class ObjectAdaptor {
    zIndex: number;
    check(_drawing: ISlideDrawing): boolean;
    abstract convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
}
export type SlideObjectAdaptorCtor = new (...args: never[]) => ObjectAdaptor;
/**
 * Legacy application-global registry for built-in and import-time adaptor contributions.
 * Instance-conditional contributions should use {@link SlideObjectAdaptorRegistryService}.
 */
export declare const SlideCanvasObjectProviderRegistry: Registry<SlideObjectAdaptorCtor>;
/**
 * Univer-instance scoped adaptor registry.
 *
 * Each service snapshots the application-global built-ins, while optional plugins register their
 * contributions on the current injector and dispose them with the plugin instance.
 */
export declare class SlideObjectAdaptorRegistryService {
    private readonly _baseAdaptors;
    private readonly _contributions;
    register(AdaptorCtor: SlideObjectAdaptorCtor): IDisposable;
    getData(): SlideObjectAdaptorCtor[];
}
