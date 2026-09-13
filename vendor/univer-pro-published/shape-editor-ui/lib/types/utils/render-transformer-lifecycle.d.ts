import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IRender, IRenderManagerService } from '@univerjs/engine-render';
export type RenderTransformer = ReturnType<IRender['scene']['getTransformerByCreate']>;
export declare function bindRenderTransformerLifecycle(renderManagerService: IRenderManagerService, unitType: UniverInstanceType, bind: (transformer: RenderTransformer) => IDisposable): IDisposable;
