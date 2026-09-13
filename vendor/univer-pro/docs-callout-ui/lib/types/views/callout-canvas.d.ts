import type { IDocsCalloutConfig } from '@univerjs-pro/docs-callout';
import type { UniverRenderingContext } from '@univerjs/engine-render';
import type { ICalloutRect } from './callout-rect';
export declare function drawCalloutBackground(ctx: UniverRenderingContext, rect: ICalloutRect, config: IDocsCalloutConfig): void;
export declare function drawCalloutBorder(ctx: UniverRenderingContext, rect: ICalloutRect, config: IDocsCalloutConfig): void;
export declare function withCalloutHorizontalClip<T>(ctx: UniverRenderingContext, rect: Pick<ICalloutRect, 'clipLeft' | 'clipRight'>, draw: () => T): T;
