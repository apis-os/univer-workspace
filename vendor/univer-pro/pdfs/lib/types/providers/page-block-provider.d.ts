import type { Observable } from 'rxjs';
import type { IPdfAssetStore, IPdfDisplayList, IPdfNativePackage, IPdfPage, IPdfTextStory, PdfAssetId, PdfDisplayListId, PdfObject, PdfObjectId, PdfPageId, PdfTextStoryId } from '../types';
import type { IPdfCommonDictionaryStore } from './page-block-dictionaries';
import { Disposable } from '@univerjs/core';
export { PdfPageBlockError } from './page-block-error';
export type { PdfPageBlockErrorCode } from './page-block-error';
export interface IPdfPageDependencies {
    assetIds: PdfAssetId[];
    sharedFragmentIds?: string[];
}
export interface IPdfPageBlock {
    schema: 'univer-pdf-page-block';
    schemaVersion: 1;
    blockIndex: number;
    startPageIndex: number;
    endPageIndex: number;
    pages: IPdfPage[];
    objects: Record<PdfObjectId, PdfObject>;
    displayLists: Record<PdfDisplayListId, IPdfDisplayList>;
    textStories: Record<PdfTextStoryId, IPdfTextStory>;
    pageDependencies: Record<PdfPageId, IPdfPageDependencies>;
    oversized?: boolean;
}
export interface IPdfPageBlockMeta {
    blockId: string;
    blockIndex?: number;
    startPageIndex: number;
    endPageIndex: number;
    artifactStartPageIndex?: number;
    artifactEndPageIndex?: number;
    pageIds: PdfPageId[];
    artifactPageIds?: PdfPageId[];
    byteLength: number;
    checksum?: string;
    oversized?: boolean;
}
export interface IPdfSharedFragmentMeta {
    fragmentId: string;
    byteLength: number;
    checksum?: string;
}
export interface IPdfSharedFragment {
    schema: 'univer-pdf-shared-fragment';
    schemaVersion: 1 | 2;
    id: string;
    assets: IPdfAssetStore;
    native?: IPdfNativePackage;
    displayLists: Record<PdfDisplayListId, IPdfDisplayList>;
    objects: Record<PdfObjectId, PdfObject>;
    dictionaries?: IPdfCommonDictionaryStore;
}
export interface IPdfPageBlockLoader {
    loadBlock(blockId: string, signal: AbortSignal): Promise<Uint8Array>;
    parseBlock?(meta: IPdfPageBlockMeta, bytes: Uint8Array): Promise<IPdfPageBlock> | IPdfPageBlock;
    prepareBlock?(block: IPdfPageBlock, signal: AbortSignal): Promise<void>;
}
export interface IPdfPageBlockProvider {
    readonly cacheChanged$: Observable<IPdfPageBlockCacheEvent>;
    getBlock(blockId: string): Promise<IPdfPageBlock>;
    getBlockForPage(pageId: PdfPageId): Promise<IPdfPageBlock>;
    prefetch(blockIds: readonly string[]): void;
    release(blockId: string): void;
    dispose(): void;
}
export interface IPdfPageBlockCacheEvent {
    type: 'loaded' | 'evicted';
    blockId: string;
    block?: IPdfPageBlock;
}
export interface IPdfPageBlockProviderOptions {
    maxConcurrentRequests?: number;
    maxCachedBlocks?: number;
    maxCachedBytes?: number;
}
export interface IPdfPageBlockParseOptions {
    dictionaries?: IPdfCommonDictionaryStore;
    pageIndexOffset?: number;
    pageIdMap?: Readonly<Record<PdfPageId, PdfPageId>>;
}
export declare class PdfPageBlockProvider extends Disposable implements IPdfPageBlockProvider {
    private readonly _loader;
    private readonly _blockMetas;
    private readonly _pageFragmentIds;
    private readonly _maxConcurrentRequests;
    private readonly _maxCachedBlocks;
    private readonly _maxCachedBytes;
    private readonly _cache;
    private readonly _inflight;
    private readonly _queue;
    private readonly _activeControllers;
    private readonly _activePriorities;
    private readonly _supersededPrefetches;
    private readonly _cacheChanged$;
    private _cacheBytes;
    private _activeRequests;
    private _sequence;
    private _parseTail;
    readonly cacheChanged$: Observable<IPdfPageBlockCacheEvent>;
    constructor(blockMetas: readonly IPdfPageBlockMeta[], pageFragmentIds: Record<PdfPageId, string>, _loader: IPdfPageBlockLoader, options?: IPdfPageBlockProviderOptions);
    getBlock(blockId: string): Promise<IPdfPageBlock>;
    getBlockForPage(pageId: PdfPageId): Promise<IPdfPageBlock>;
    prefetch(blockIds: readonly string[]): void;
    release(blockId: string): void;
    dispose(): void;
    private _request;
    private _sortQueue;
    private _drain;
    private _load;
    private _parse;
    private _store;
    private _touch;
}
/** Validate and parse one independently stored shared fragment. */
export declare function parsePdfSharedFragment(meta: IPdfSharedFragmentMeta, bytes: Uint8Array): Promise<IPdfSharedFragment>;
export declare function parsePdfPageBlock(meta: IPdfPageBlockMeta, bytes: Uint8Array, options?: IPdfPageBlockParseOptions): IPdfPageBlock;
