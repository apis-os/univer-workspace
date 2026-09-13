import type { ISnapshotLoadingTimeoutState } from '../../views/components/SnapshotLoadingTimeout';
import { SnapshotLoadingService } from '@univerjs-pro/collaboration';
import { Disposable, Injector, LocaleService } from '@univerjs/core';
import { IMessageService, IUIPartsService } from '@univerjs/ui';
import { IURLService } from '../../services/url/url.service';
export declare class SnapshotLoadingController extends Disposable {
    private readonly _snapshotLoadingService;
    private readonly _messageService;
    private readonly _localeService;
    private readonly _injector;
    private readonly _urlService;
    private readonly _timeoutState$;
    private readonly _messageIds;
    private readonly _blockProgressWatches;
    private _latestStates;
    readonly timeoutState$: import("rxjs").Observable<ISnapshotLoadingTimeoutState | null>;
    constructor(_snapshotLoadingService: SnapshotLoadingService, _messageService: IMessageService, _localeService: LocaleService, _injector: Injector, uiPartsService: IUIPartsService, _urlService: IURLService);
    dispose(): void;
    private _updateMessage;
    private _watchBlockProgress;
    private _clearBlockProgressWatch;
    private _clearTimeoutState;
    private _isVisibleUnit;
}
