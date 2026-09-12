import type { IPdfDocument, IPdfPage, PdfPageId } from '../types';
import type { IPdfPageProvider } from './types';
/** In-memory provider that adapts the current monolithic PDF document JSON. */
export declare class InMemoryPdfPageProvider implements IPdfPageProvider {
    private readonly _pages;
    private readonly _pageOrder;
    constructor(document: Pick<IPdfDocument, 'pages'>);
    getPage(pageId: PdfPageId): Promise<IPdfPage | undefined>;
    getPages(pageIds: readonly PdfPageId[]): Promise<IPdfPage[]>;
    getPageOrder(): Promise<PdfPageId[]>;
}
