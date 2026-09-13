import type { ImageSourceType } from '@univerjs/core';
import type { IPdfDurableEditState } from '../editor/types';
import type { IPdfDocument, IPdfDocumentCoordinate, IPdfDocumentSource, IPdfOutlineItem, IPdfSize, PdfAssetId, PdfJsonValue, PdfObjectId, PdfObjectRef, PdfPageId, PdfSourceId } from '../types';
import type { PdfAssetStorageKind, PdfCapabilityAction, PdfCapabilityFallback, PdfCapabilityRequirement, PdfCapabilityScope, PdfCapabilitySupport } from './enums';
/** Stable schema identifier for persisted PDF Unit snapshots. */
export declare const PDF_UNIT_SCHEMA = "univer-pdf-unit";
/** Current PDF Unit snapshot schema version. */
export declare const PDF_UNIT_SCHEMA_VERSION = 1;
/** Immutable reference to the PDF artifact from which a Unit was imported. */
export interface IPdfSourceDocumentRef {
    /** Primary provenance source represented inside the PDF document model. */
    sourceId?: PdfSourceId;
    /** Asset id of the original PDF when the exchange/storage layer provides one. */
    assetId?: PdfAssetId;
    /** Content fingerprint used for audit and safe source reuse. */
    fingerprint?: string;
    /** Original user-facing filename. */
    fileName?: string;
    /** Native source artifacts are never rewritten by frontend editing. */
    immutable: true;
}
/** Durable provenance binding for bytes that remain inside the source PDF. */
export interface IPdfNativeResourceBinding {
    kind: PdfAssetStorageKind.NATIVE_PDF;
    sourceId: PdfSourceId;
    objectRef?: PdfObjectRef;
    streamRef?: PdfObjectRef;
    filters?: string[];
}
/** Durable binding to a Unit-scoped resource managed by Univer. */
export interface IPdfUniverserResourceBinding {
    kind: PdfAssetStorageKind.UNIVERSER_RESOURCE;
    /** UUID/source id consumed through the shared image/resource IO service. */
    source: string;
    /** Managed PDF image resources are persisted as shared Univer UUID sources. */
    imageSourceType: ImageSourceType.UUID;
    mimeType?: string;
    checksum?: string;
    byteLength?: number;
}
/** Disposable cache binding used only by render/resource providers at runtime. */
export interface IPdfDerivedCacheBinding {
    kind: PdfAssetStorageKind.DERIVED_CACHE;
    cacheKey: string;
    sourceAssetId?: PdfAssetId;
    mimeType?: string;
    expiresAt?: number;
}
/** Resource bindings allowed in a durable PDF Unit snapshot. */
export type PdfDurableResourceBinding = IPdfNativeResourceBinding | IPdfUniverserResourceBinding;
/** Effective capability decision for one PDF action and model scope. */
export interface IPdfCapabilityDecision {
    action: PdfCapabilityAction;
    support: PdfCapabilitySupport;
    fallback: PdfCapabilityFallback;
    reasonCode?: string;
    scope: PdfCapabilityScope;
    pageId?: PdfPageId;
    objectId?: PdfObjectId;
    assetId?: PdfAssetId;
    confidence?: number;
    requires?: PdfCapabilityRequirement[];
    metadata?: Record<string, PdfJsonValue>;
}
/** Import/runtime capability inventory attached to a PDF Unit. */
export interface IPdfCapabilityReport {
    decisions: IPdfCapabilityDecision[];
    generatedAt?: string;
    generator?: string;
    metadata?: Record<string, PdfJsonValue>;
}
/** Optional logical index used by future fragment-backed page/resource providers. */
export interface IPdfUnitFragmentIndex {
    pageFragmentIds?: Record<PdfPageId, string>;
    sharedFragmentIds?: string[];
    assetIndexResourceId?: string;
    documentShellResourceId?: string;
}
/** Directory entry kept in the small Unit shell before page content is loaded. */
export interface IPdfPageDirectoryEntry {
    pageId: PdfPageId;
    index: number;
    sourceId?: PdfSourceId;
    sourcePageIndex?: number;
    label?: string;
    size: IPdfSize;
    rotation: 0 | 90 | 180 | 270;
    blockId: string;
    thumbnailAssetId?: PdfAssetId;
}
/** Immutable index metadata for one persisted page block. */
export interface IPdfPageBlockIndexEntry {
    blockId: string;
    startPageIndex: number;
    endPageIndex: number;
    /** Original index range inside an appended immutable artifact. */
    artifactStartPageIndex?: number;
    artifactEndPageIndex?: number;
    pageIds: PdfPageId[];
    artifactPageIds?: PdfPageId[];
    byteLength: number;
    checksum?: string;
    oversized?: boolean;
}
/** Immutable index metadata for one shared PDF fragment. */
export interface IPdfSharedFragmentIndexEntry {
    fragmentId: string;
    byteLength: number;
    checksum?: string;
    role?: 'common-dictionaries' | 'assets';
}
/** Small document metadata loaded before any page block. */
export interface IPdfDocumentShell {
    id: string;
    title?: string;
    coordinate: IPdfDocumentCoordinate;
    source?: IPdfDocumentSource;
    sources: Record<PdfSourceId, IPdfDocumentSource>;
    pageDirectory: IPdfPageDirectoryEntry[];
    outlines?: IPdfOutlineItem[];
    pageBlocks: IPdfPageBlockIndexEntry[];
    sharedFragments: IPdfSharedFragmentIndexEntry[];
    requiredSharedFragments?: string[];
}
/** Artifact kinds persisted independently from the Unit shell. */
export type PdfFragmentArtifactKind = 'page-block' | 'shared-fragment' | 'search-block';
/** Protocol file binding for one independently fetched PDF fragment. */
export interface IPdfFragmentArtifactBinding {
    kind: PdfFragmentArtifactKind;
    fileId: string;
    mimeType?: string;
    byteLength?: number;
    checksum?: string;
}
/**
 * Persisted snapshot for a formal `UNIVER_PDF` Unit.
 *
 * Only the imported baseline and durable edit intent live here. Local editor
 * state and disposable rendering data are deliberately excluded.
 */
export interface IPdfUnitData {
    schema: typeof PDF_UNIT_SCHEMA;
    schemaVersion: typeof PDF_UNIT_SCHEMA_VERSION;
    /** Canonical identity shared by collaboration, storage, resources, and export. */
    id: string;
    /** Authoritative Unit revision. Revision numbering starts at one. */
    rev: number;
    name: string;
    sourceDocumentRef: IPdfSourceDocumentRef;
    /** Immutable imported baseline whose id is normalized to the Unit id. */
    document: IPdfDocument;
    /** Persisted page directory and immutable fragment indexes for block-backed Units. */
    documentShell?: IPdfDocumentShell;
    /** Sole durable location for accepted frontend editing intent. */
    editState: IPdfDurableEditState;
    resourceBindings?: Record<PdfAssetId, PdfDurableResourceBinding>;
    /** Runtime file bindings supplied by the snapshot protocol, excluded from originalMeta. */
    fragmentBindings?: Record<string, IPdfFragmentArtifactBinding>;
    capabilityReport?: IPdfCapabilityReport;
    fragmentIndex?: IPdfUnitFragmentIndex;
    metadata?: Record<string, PdfJsonValue>;
}
