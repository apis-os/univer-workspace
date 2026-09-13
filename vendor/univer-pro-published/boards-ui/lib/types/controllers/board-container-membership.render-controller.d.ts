import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IBoardUIStateService } from '../services/board-ui-state.service';
export declare class BoardContainerMembershipRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _instanceSrv;
    private readonly _stateService;
    private readonly _boardElementService;
    private _membershipObject;
    private _spatialIndex;
    private _spatialIndexPageId;
    private _previewSource;
    private _isForceCaptureModifierActive;
    constructor(_renderContext: IRenderContext<UnitModel>, _instanceSrv: IUniverInstanceService, _stateService: IBoardUIStateService, _boardElementService: IBoardElementService);
    private _init;
    private _subscribeToElementChanges;
    private _subscribeToPendingInsert;
    private _subscribeToTransformer;
    private _syncPreview;
    private _syncPendingInsertPreview;
    private _clearPreview;
    private _subscribeToForceCaptureModifier;
    private _getSpatialIndex;
    private _disposeSpatialIndex;
}
