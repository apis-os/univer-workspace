import type { IBaseViewport } from '@univerjs/core';
import type { IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import type { CanvasBaseViewRenderController } from './base-view-render-controller';
import { BaseObject } from '@univerjs/engine-render';
export interface IBaseCanvasRenderComponentOptions {
    width?: number;
    height?: number;
    clip?: boolean;
}
export declare class BaseCanvasRenderComponent extends BaseObject {
    private _controller;
    private _viewport;
    private readonly _clip;
    constructor(key: string, _controller: CanvasBaseViewRenderController, options?: IBaseCanvasRenderComponentOptions);
    setController(controller: CanvasBaseViewRenderController): void;
    getController(): CanvasBaseViewRenderController;
    setViewport(viewport: IBaseViewport | null): void;
    render(mainCtx: UniverRenderingContext, viewportInfo?: IViewportInfo): this;
    draw(ctx: UniverRenderingContext, _viewportInfo?: IViewportInfo): void;
}
