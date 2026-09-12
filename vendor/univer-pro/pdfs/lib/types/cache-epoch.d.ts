import type { IPdfDocument } from './types';
/**
 * Shared invalidation token for page-scoped derived data.
 *
 * Page projections compare documentIdentity + pageRevision. Rendered pixels
 * additionally compare resourceRevision because late image/font resolution does
 * not change the structural page projection.
 */
export interface IPdfPageCacheEpoch {
    readonly documentIdentity: number;
    readonly pageRevision: number;
    readonly resourceRevision: number;
}
export declare function createPdfPageCacheEpoch(document: IPdfDocument, pageRevision?: number, resourceRevision?: number): IPdfPageCacheEpoch;
export declare function serializePdfPageCacheEpoch(epoch: IPdfPageCacheEpoch): string;
export declare function isSamePdfPageProjectionEpoch(left: IPdfPageCacheEpoch, right: IPdfPageCacheEpoch): boolean;
