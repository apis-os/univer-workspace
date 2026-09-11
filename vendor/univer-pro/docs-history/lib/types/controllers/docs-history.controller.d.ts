import { HistoryUnitAdapterRegistryService } from '@univerjs-pro/edit-history';
import { Disposable, IAuthzIoService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
export declare class DocsHistoryController extends Disposable {
    private readonly _authzIoService;
    private readonly _univerInstanceService;
    private readonly _selectionManagerService;
    constructor(registry: HistoryUnitAdapterRegistryService, _authzIoService: IAuthzIoService, _univerInstanceService: IUniverInstanceService, _selectionManagerService: DocSelectionManagerService);
    private _captureLocation;
    private _restoreLocation;
    private _getDocument;
    private _hasPermission;
}
