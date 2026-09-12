import { IBaseUIStateService } from '@univerjs-pro/bases-ui';
import { HistoryUnitAdapterRegistryService } from '@univerjs-pro/edit-history';
import { Disposable, IAuthzIoService, IUniverInstanceService } from '@univerjs/core';
export declare class BasesHistoryAdapterController extends Disposable {
    private readonly _authzIoService;
    private readonly _stateService;
    private readonly _univerInstanceService;
    constructor(registry: HistoryUnitAdapterRegistryService, _authzIoService: IAuthzIoService, _stateService: IBaseUIStateService, _univerInstanceService: IUniverInstanceService);
    private _captureLocation;
    private _restoreLocation;
    private _getBase;
    private _hasPermission;
}
