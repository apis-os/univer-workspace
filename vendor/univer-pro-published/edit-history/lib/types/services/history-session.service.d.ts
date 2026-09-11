import type { IHistoryCreator, IHistoryListQuery, IHistoryMember, IHistorySessionDescriptor, IHistoryVersion } from '../types';
import { Disposable } from '@univerjs/core';
import { HistoryGatewayService } from './history-gateway.service';
export declare enum HistorySessionStatus {
    Idle = "idle",
    Opening = "opening",
    Ready = "ready",
    LoadingMore = "loading-more",
    Error = "error",
    Closing = "closing"
}
export declare class HistorySessionService extends Disposable {
    private readonly _gateway;
    private readonly _status$;
    readonly status$: import("rxjs").Observable<HistorySessionStatus>;
    private readonly _versions$;
    readonly versions$: import("rxjs").Observable<IHistoryVersion[]>;
    private readonly _currentVersion$;
    readonly currentVersion$: import("rxjs").Observable<IHistoryVersion | null>;
    private readonly _creators$;
    readonly creators$: import("rxjs").Observable<IHistoryCreator[]>;
    private readonly _members$;
    readonly members$: import("rxjs").Observable<Record<string, IHistoryMember>>;
    private readonly _error$;
    readonly error$: import("rxjs").Observable<Error | null>;
    private _descriptor;
    private _query;
    private _hasMore;
    private _lastLabel;
    private _sessionGeneration;
    private _listRequestGeneration;
    private readonly _versionDetails;
    private readonly _versionDetailRequests;
    constructor(_gateway: HistoryGatewayService);
    get descriptor(): IHistorySessionDescriptor | null;
    get currentVersion(): IHistoryVersion | null;
    get hasMore(): boolean;
    open(descriptor: IHistorySessionDescriptor, query?: IHistoryListQuery): Promise<void>;
    private _loadCreators;
    loadMore(): Promise<void>;
    loadVersionDetails(versionId: string): Promise<IHistoryVersion[]>;
    selectVersion(versionOrId: IHistoryVersion | string): IHistoryVersion;
    close(): void;
    dispose(): void;
}
