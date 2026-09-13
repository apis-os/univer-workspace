import { HistoryUnitAdapterRegistryService } from '@univerjs-pro/edit-history';
import { Disposable, IAuthzIoService, ICommandService, IUniverInstanceService } from '@univerjs/core';
export declare class SlidesHistoryController extends Disposable {
    private readonly _authzIoService;
    private readonly _commandService;
    private readonly _univerInstanceService;
    constructor(registry: HistoryUnitAdapterRegistryService, _authzIoService: IAuthzIoService, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService);
    private _restoreLocation;
    private _getSlide;
    private _hasPermission;
}
