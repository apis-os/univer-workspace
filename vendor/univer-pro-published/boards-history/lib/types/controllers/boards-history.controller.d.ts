import { HistoryUnitAdapterRegistryService } from '@univerjs-pro/edit-history';
import { Disposable, IAuthzIoService, IUniverInstanceService } from '@univerjs/core';
export declare class BoardsHistoryController extends Disposable {
    private readonly _authzIoService;
    private readonly _univerInstanceService;
    constructor(registry: HistoryUnitAdapterRegistryService, _authzIoService: IAuthzIoService, _univerInstanceService: IUniverInstanceService);
    private _getBoard;
    private _hasPermission;
}
