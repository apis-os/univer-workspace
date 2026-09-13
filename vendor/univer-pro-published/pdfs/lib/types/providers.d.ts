import type { IPdfDocumentProviders } from './providers/types';
import type { IPdfUnitData } from './unit/types';
export { InMemoryPdfPageProvider } from './providers/in-memory-page-provider';
export { InMemoryPdfResourceProvider } from './providers/in-memory-resource-provider';
export { expandPdfCompactPageBlock, } from './providers/page-block-dictionaries';
export type { IPdfCommonDictionaryStore, } from './providers/page-block-dictionaries';
export { parsePdfPageBlock, parsePdfSharedFragment, PdfPageBlockError, PdfPageBlockProvider, } from './providers/page-block-provider';
export type { IPdfPageBlock, IPdfPageBlockCacheEvent, IPdfPageBlockLoader, IPdfPageBlockMeta, IPdfPageBlockParseOptions, IPdfPageBlockProvider, IPdfPageBlockProviderOptions, IPdfPageDependencies, IPdfSharedFragment, IPdfSharedFragmentMeta, PdfPageBlockErrorCode, } from './providers/page-block-provider';
export type { IPdfDocumentProviders, IPdfPageProvider, IPdfResourceProvider, IPdfResourceProviderSource, PdfAsset, } from './providers/types';
/** Create default providers for a fully materialized v1 PDF Unit snapshot. */
export declare function createInMemoryPdfDocumentProviders(unit: IPdfUnitData): IPdfDocumentProviders;
