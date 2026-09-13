import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { Disposable } from '@univerjs/core';
import { SlideShapeHostAdapter } from '../adapters/slide-shape-host.adapter';
/** Registers the Slide Shape host adapter for the lifetime of the Slides plugin. */
export declare class SlideShapeController extends Disposable {
    private readonly _shapeHostAdapterRegistry;
    constructor(_shapeHostAdapterRegistry: IShapeHostAdapterRegistry, shapeHostAdapter: SlideShapeHostAdapter);
}
