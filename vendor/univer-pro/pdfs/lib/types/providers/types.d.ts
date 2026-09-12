import type { IPdfAssetStore, IPdfAttachmentAsset, IPdfColorProfileAsset, IPdfFontAsset, IPdfFormXObjectAsset, IPdfImageAsset, IPdfPage, IPdfPatternAsset, IPdfShadingAsset, IPdfStreamAsset, PdfAssetId, PdfPageId } from '../types';
import type { IPdfDerivedCacheBinding, PdfDurableResourceBinding } from '../unit/types';
import type { IPdfPageBlockProvider } from './page-block-provider';
/** Union of every durable asset record stored by the PDF model. */
export type PdfAsset = IPdfFontAsset | IPdfImageAsset | IPdfFormXObjectAsset | IPdfColorProfileAsset | IPdfPatternAsset | IPdfShadingAsset | IPdfAttachmentAsset | IPdfStreamAsset;
/** Asynchronous page access boundary used by render and editor controllers. */
export interface IPdfPageProvider {
    getPage(pageId: PdfPageId): Promise<IPdfPage | undefined>;
    getPages(pageIds: readonly PdfPageId[]): Promise<IPdfPage[]>;
    getPageOrder(): Promise<PdfPageId[]>;
}
/** Asynchronous durable/runtime resource access boundary. */
export interface IPdfResourceProvider {
    getAsset(assetId: PdfAssetId): Promise<PdfAsset | undefined>;
    getBinding(assetId: PdfAssetId): Promise<PdfDurableResourceBinding | undefined>;
    getDerivedBinding(assetId: PdfAssetId): Promise<IPdfDerivedCacheBinding | undefined>;
}
/** Provider pair attached to one PDF Unit runtime. */
export interface IPdfDocumentProviders {
    pages: IPdfPageProvider;
    resources: IPdfResourceProvider;
    /** Optional fragment boundary used by shell-backed PDF Units. */
    blocks?: IPdfPageBlockProvider;
}
/** Constructor input shared by in-memory and future fragment resource providers. */
export interface IPdfResourceProviderSource {
    assets: IPdfAssetStore;
    bindings?: Record<PdfAssetId, PdfDurableResourceBinding>;
}
