import { Disposable, IResourceManagerService } from '@univerjs/core';
export declare const SLIDE_FONT_PLUGIN_NAME = "SLIDE_FONT_PLUGIN";
export interface ISlideFontResource {
    fonts: unknown[];
    version: number;
}
/**
 * Keeps embedded PPTX font payloads attached to a slide unit across snapshot saves.
 * Font decoding/loading belongs to the render host; the slide model only preserves
 * this exchange resource losslessly for later export.
 */
export declare class SlideFontResourceController extends Disposable {
    private readonly _resources;
    constructor(resourceManagerService: IResourceManagerService);
}
