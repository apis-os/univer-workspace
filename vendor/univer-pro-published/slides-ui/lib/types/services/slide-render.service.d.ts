import { IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
/**
 * Watches for slide units being added/removed and creates/destroys the
 * corresponding engine-render render unit for each.
 *
 * Mirrors the pattern of SheetRenderService / DocRenderService.
 */
export declare class SlideRenderService extends RxDisposable {
    private readonly _instanceSrv;
    private readonly _renderManagerService;
    constructor(_instanceSrv: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    private _init;
    private _createRenderer;
}
