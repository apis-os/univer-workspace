import type { IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import type { ISlidePlaceholderRenderProps } from './base-placeholder-object';
import { SlidePlaceholderBaseObject } from './base-placeholder-object';
/**
 * Placeholder object for title/body/text style placeholders.
 */
export declare class SlidePlaceholderTextObject extends SlidePlaceholderBaseObject {
    constructor(key: string, props: ISlidePlaceholderRenderProps);
    _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
}
