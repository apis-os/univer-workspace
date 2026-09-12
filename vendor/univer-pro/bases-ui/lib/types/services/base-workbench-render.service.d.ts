import { IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IBaseCanvasRootResolverService } from './base-canvas-root-resolver.service';
export declare class BaseWorkbenchRenderService extends RxDisposable {
    private readonly _instanceService;
    private readonly _renderManagerService;
    private readonly _canvasRootResolverService;
    private readonly _pendingUnitIds;
    private readonly _mountedHosts;
    constructor(_instanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _canvasRootResolverService: IBaseCanvasRootResolverService);
    private _init;
    private _createRenderer;
    private _disposeRenderer;
    ensureRendererMounted(unitId: string): void;
    private _waitForCanvasHost;
    private _getCanvasHost;
    private _mountRendererToBaseHost;
}
