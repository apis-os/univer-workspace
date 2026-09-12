import type { IPdfAssetStore, PdfAssetId } from '../types';
import type { IPdfDerivedCacheBinding, PdfDurableResourceBinding } from '../unit/types';
import type { IPdfResourceProvider, PdfAsset } from './types';
/** In-memory resource adapter over the current typed asset buckets. */
export declare class InMemoryPdfResourceProvider implements IPdfResourceProvider {
    private readonly _assets;
    private readonly _durableBindings;
    private readonly _derivedBindings;
    constructor(assets: IPdfAssetStore, bindings?: Record<PdfAssetId, PdfDurableResourceBinding>);
    getAsset(assetId: PdfAssetId): Promise<PdfAsset | undefined>;
    getBinding(assetId: PdfAssetId): Promise<PdfDurableResourceBinding | undefined>;
    getDerivedBinding(assetId: PdfAssetId): Promise<IPdfDerivedCacheBinding | undefined>;
    /** Register a disposable render/decode artifact without mutating Unit data. */
    setDerivedBinding(assetId: PdfAssetId, binding: IPdfDerivedCacheBinding): void;
    /** Remove a disposable render/decode artifact. */
    deleteDerivedBinding(assetId: PdfAssetId): void;
    /** Return a copy of durable bindings suitable for diagnostics or snapshot updates. */
    getDurableBindings(): Record<PdfAssetId, PdfDurableResourceBinding>;
}
