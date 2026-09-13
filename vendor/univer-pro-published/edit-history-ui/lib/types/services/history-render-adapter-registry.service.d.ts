import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IHistoryRenderAdapter } from '../types';
import { Disposable } from '@univerjs/core';
export declare class HistoryRenderAdapterRegistryService extends Disposable {
    private readonly _adapters;
    register(adapter: IHistoryRenderAdapter): IDisposable;
    get(type: UniverInstanceType): IHistoryRenderAdapter | undefined;
    dispose(): void;
}
