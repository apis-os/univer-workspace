import { HistorySessionService } from '@univerjs-pro/edit-history';
import { Disposable, IConfigService, IConfirmService, ILogService, Injector, LocaleService } from '@univerjs/core';
import { IMessageService, ISidebarService, IUIPartsService } from '@univerjs/ui';
import { HistoryUIService } from '../services/history-ui.service';
export declare class HistoryViewerController extends Disposable {
    private readonly _configService;
    private readonly _confirmService;
    private readonly _logService;
    private readonly _injector;
    private readonly _localeService;
    private readonly _historySessionService;
    private readonly _historyUIService;
    private readonly _messageService;
    private readonly _sidebarService;
    private readonly _uiPartsService;
    private _sidebarDisposable;
    private _restoring;
    private _restoreGeneration;
    private _viewerGeneration;
    private _closing;
    constructor(_configService: IConfigService, _confirmService: IConfirmService, _logService: ILogService, _injector: Injector, _localeService: LocaleService, _historySessionService: HistorySessionService, _historyUIService: HistoryUIService, _messageService: IMessageService, _sidebarService: ISidebarService, _uiPartsService: IUIPartsService);
    registerHeader(): void;
    open(): Promise<void>;
    restore(): Promise<void>;
    close(): void;
    private _getConfig;
}
