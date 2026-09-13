import { CollaborationController, DataLoaderService, ILocalCacheService } from '@univerjs-pro/collaboration-client';
import { IURLService } from '@univerjs-pro/collaboration-client-ui';
import { ICommandService, IUniverInstanceService, LocaleService, RxDisposable } from '@univerjs/core';
import { IMenuManagerService, IMessageService } from '@univerjs/ui';
import { HistoryLoaderService } from '../services/history-loader.service';
export declare class HistoryLoaderController extends RxDisposable {
    private readonly _commandService;
    protected readonly _menuManagerService: IMenuManagerService;
    private readonly _historyManagerService;
    private readonly _localeService;
    private readonly _messageService;
    private readonly _collaborationController;
    private readonly _localCacheService;
    private readonly _dataLoaderService;
    private readonly _univerInstanceService;
    private readonly _urlService;
    private _revertAcknowledgementSubscription;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService, _historyManagerService: HistoryLoaderService, _localeService: LocaleService, _messageService: IMessageService, _collaborationController: CollaborationController, _localCacheService: ILocalCacheService, _dataLoaderService: DataLoaderService, _univerInstanceService: IUniverInstanceService, _urlService: IURLService);
    private _init;
    private _handleRevertAcknowledgement;
    private _clearRevertAcknowledgement;
    private _showRevertFailed;
    private _setupSubUnitSync;
    private _updateURLWithCurrentState;
    private _updateSubUnitFromURLParams;
}
