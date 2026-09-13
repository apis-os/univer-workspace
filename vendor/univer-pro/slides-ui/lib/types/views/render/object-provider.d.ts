import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from './adaptor';
import { Injector } from '@univerjs/core';
import { SlideObjectAdaptorRegistryService } from './adaptor';
import './adaptors';
export declare class ObjectProvider {
    private readonly _injector;
    private readonly _adaptorRegistry;
    private _adaptors;
    constructor(_injector: Injector, _adaptorRegistry: SlideObjectAdaptorRegistryService);
    convertToRenderObjects(drawingData: Record<string, ISlideDrawing>, drawingOrder: string[], baseContext: Omit<IRenderConvertContext, 'orderIndex'>): BaseObject[];
    private _executor;
    private _adaptorLoader;
}
