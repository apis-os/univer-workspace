import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IEmbedChildContainerContext, IEmbedFloatPreviewEntry, IEmbedFloatPreviewProvider, IEmbedFloatPreviewRenderRequest } from '../types/embed-ui';
import { Subject } from 'rxjs';
export declare class EmbedFloatPreviewService {
    readonly previewUpdated$: Subject<IEmbedFloatPreviewEntry<unknown>>;
    private readonly _providers;
    private readonly _entriesByEmbedId;
    private readonly _entriesByKey;
    private readonly _queue;
    private _rendering;
    private _activeDrain;
    registerProvider(provider: IEmbedFloatPreviewProvider<any>): IDisposable;
    getProvider(childType: UniverInstanceType): IEmbedFloatPreviewProvider<any> | undefined;
    getPreview(embedId: string): IEmbedFloatPreviewEntry | undefined;
    requestPreview<TViewState = unknown>(request: IEmbedFloatPreviewRenderRequest<TViewState>): IEmbedFloatPreviewEntry<TViewState>;
    collectViewState<TViewState = unknown>(context: IEmbedChildContainerContext): Promise<TViewState | undefined>;
    restoreViewState<TViewState = unknown>(context: IEmbedChildContainerContext, viewState: TViewState | undefined): Promise<void>;
    updateViewState<TViewState = unknown>(embedId: string, viewState: TViewState): void;
    markStale(embedId: string, reason?: string): void;
    invalidate(embedId: string): void;
    getCacheKey(request: IEmbedFloatPreviewRenderRequest): string;
    flushForTests(): Promise<void>;
    dispose(): void;
    private _drainQueue;
    private _runQueue;
    private _renderOne;
    private _findPreviousReadyEntry;
    private _setRenderFailure;
}
