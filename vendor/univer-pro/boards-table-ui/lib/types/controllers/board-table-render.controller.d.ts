import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { SlideTableModelService, SlideTableResourceService } from '@univerjs-pro/slides-table';
import { IUniverInstanceService, RxDisposable } from '@univerjs/core';
export declare class BoardTableRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _instanceService;
    private readonly _boardElementService;
    private readonly _slideTableModelService;
    private readonly _slideTableResourceService;
    constructor(_renderContext: IRenderContext, _instanceService: IUniverInstanceService, _boardElementService: IBoardElementService, _slideTableModelService: SlideTableModelService, _slideTableResourceService: SlideTableResourceService);
    private _init;
    private _syncTableObjects;
    private _getBoardTableObject;
}
