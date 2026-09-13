import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IConfigService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IBoardUIStateService } from '../services/board-ui-state.service';
export declare class BoardGridRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _instanceSrv;
    private readonly _configService;
    private readonly _boardUIStateService;
    private _gridObject;
    constructor(_renderContext: IRenderContext<UnitModel>, _instanceSrv: IUniverInstanceService, _configService: IConfigService, _boardUIStateService: IBoardUIStateService);
    private _init;
    private _syncGridObject;
}
