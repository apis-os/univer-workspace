import type { IHistorySessionDescriptor, IHistoryVersion } from '@univerjs-pro/edit-history';
import { HistorySessionService } from '@univerjs-pro/edit-history';
import { Disposable } from '@univerjs/core';
import { HistoryRenderAdapterRegistryService } from './history-render-adapter-registry.service';
export declare class HistoryUIService extends Disposable {
    private readonly _session;
    private readonly _adapterRegistry;
    private readonly _loading$;
    readonly loading$: import("rxjs").Observable<boolean>;
    private _adapter;
    private _openGeneration;
    private _selectionGeneration;
    constructor(_session: HistorySessionService, _adapterRegistry: HistoryRenderAdapterRegistryService);
    open(descriptor: IHistorySessionDescriptor): Promise<void>;
    selectVersion(versionOrId: IHistoryVersion | string): Promise<void>;
    close(): void;
    dispose(): void;
}
