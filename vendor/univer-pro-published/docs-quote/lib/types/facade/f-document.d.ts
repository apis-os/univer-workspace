import type { FDocumentParagraph } from '@univerjs/docs/facade';
import type { IDocsQuoteFindQuery, IDocsQuoteInsertFacadeOptions, IDocsQuoteInsertParagraphFacadeOptions } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentQuote } from './f-document-quote';
export interface IFDocumentQuoteMixinMixin {
    /**
     * Returns all quote block ranges in this document.
     * @returns {FDocumentQuote[]} An array of FDocumentQuote instances, or an empty array if no quote block ranges exist in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quotes = fDocument.getQuotes();
     * console.log(quotes);
     * ```
     */
    getQuotes(): FDocumentQuote[];
    /**
     * Returns a quote block range by its block id.
     * @param {string} blockId The quote block range id.
     * @returns {FDocumentQuote | null} The FDocumentQuote instance, or `null` if no quote block range with the id exists in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quote = fDocument.getQuote('block-id-123');
     * console.log(quote);
     * ```
     */
    getQuote(blockId: string): FDocumentQuote | null;
    /**
     * Returns the quote block range that contains a document data stream offset.
     * @param {number} offset The document data stream offset.
     * @returns {FDocumentQuote | null} The FDocumentQuote instance, or `null` if no quote block range contains the offset.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quote = fDocument.getQuoteAt(150);
     * console.log(quote);
     * ```
     */
    getQuoteAt(offset: number): FDocumentQuote | null;
    /**
     * Finds the first quote whose text contains the given string.
     * @param {string} text Text to search inside quote content.
     * @returns {FDocumentQuote | null} The first matching FDocumentQuote instance, or `null` if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quote = fDocument.findQuoteByText('Decision');
     * console.log(quote);
     * ```
     */
    findQuoteByText(text: string): FDocumentQuote | null;
    /**
     * Finds quotes by text or block id.
     * @param {string | IDocsQuoteFindQuery} query A plain text query or a structured quote query.
     * @returns {FDocumentQuote[]} An array of matching FDocumentQuote instances, or an empty array if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quotesWithText = fDocument.findQuotes('Decision');
     * const quotesWithId = fDocument.findQuotes({ blockId: 'block-id-123' });
     * console.log(quotesWithText, quotesWithId);
     * ```
     */
    findQuotes(query: string | IDocsQuoteFindQuery): FDocumentQuote[];
    /**
     * Inserts a quote around a paragraph element.
     * The paragraph wrapper is resolved by persisted `paragraphId` before the command runs, so facade edits
     * inserted before the paragraph do not require recalculating offsets.
     *
     * This API writes `keepLines` and `widowControl` to every inserted paragraph.
     * For multiple paragraphs it also writes `keepNext = TRUE` between adjacent
     * paragraphs and `keepNext = FALSE` on the final paragraph, so the quote does
     * not capture the following body paragraph. Callers do not need to add these
     * pagination styles manually.
     *
     * Traditional Docs apply the styles during physical pagination. A quote that
     * fits on a fresh page stays together; content taller than a fresh page remains
     * splittable. Modern and Unspecified Docs preserve the styles in the model but
     * do not apply them during physical pagination.
     *
     * @param {FDocumentParagraph} paragraph The paragraph to convert to a quote.
     * @param {IDocsQuoteInsertParagraphFacadeOptions} [options] Optional block id.
     * @returns {FDocumentQuote | null} The inserted FDocumentQuote instance, or `null` if the insert quote failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * if (!fDocument) {
     *   throw new Error('No active document');
     * }
     *
     * // Insert a quote around a paragraph.
     * const paragraph = fDocument.appendParagraph('Simplicity is prerequisite for reliability.');
     * const quote = fDocument.insertQuote(paragraph);
     * if (!quote) {
     *   throw new Error('Failed to insert the quote');
     * }
     * console.log({
     *   text: quote.getText(),
     *   wordPaginationApplied: fDocument.isTraditional(),
     * });
     * ```
     */
    insertQuote(paragraph: FDocumentParagraph, options?: IDocsQuoteInsertParagraphFacadeOptions): FDocumentQuote | null;
    /**
     * Inserts a quote around a document range, or inserts an empty quote when the range is collapsed.
     * Prefer the paragraph overload for agent-authored code.
     *
     * The same automatic pagination styles as the paragraph overload are written
     * for every paragraph in the range. Traditional Docs apply them; Modern and
     * Unspecified Docs preserve them in the model but ignore them during physical
     * pagination. Content taller than a fresh page remains splittable.
     *
     * @param {IDocsQuoteInsertFacadeOptions} [options] Optional block id and start/end offsets.
     * @returns {FDocumentQuote | null} The inserted FDocumentQuote instance, or `null` if the insert quote failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * if (!fDocument) {
     *   throw new Error('No active document');
     * }
     *
     * // Insert a quote around the text 'Decision' in a table cell.
     * const table = fDocument.findTableByText('Decision');
     * const range = table?.getCell(1, 0)?.getContentRange();
     * if (!range) {
     *   throw new Error('Decision table cell not found');
     * }
     * const quote = fDocument.insertQuote(range);
     * if (!quote) {
     *   throw new Error('Failed to insert the table-cell quote');
     * }
     * console.log(quote.getId());
     *
     * // Insert a quote around the text 'Quote' and the next paragraph.
     * const paragraph = fDocument.findParagraphByText('Quote');
     * if (paragraph) {
     *   const paragraphs = fDocument.getParagraphs();
     *   const { paragraphIndex, startOffset } = paragraph.getInfo();
     *   const finalParagraph = paragraphs[paragraphIndex + 1];
     *   if (!finalParagraph) {
     *     throw new Error('Expected a paragraph after the quote start');
     *   }
     *   const { endOffset } = finalParagraph.getInfo();
     *   const quote2 = fDocument.insertQuote({ startOffset, endOffset });
     *   if (!quote2) {
     *     throw new Error('Failed to insert the multi-paragraph quote');
     *   }
     *   console.log(quote2.getId());
     * }
     * ```
     */
    insertQuote(options?: IDocsQuoteInsertFacadeOptions): FDocumentQuote | null;
}
export declare class FDocumentQuoteMixin extends FDocument implements IFDocumentQuoteMixinMixin {
    getQuotes(): FDocumentQuote[];
    getQuote(blockId: string): FDocumentQuote | null;
    getQuoteAt(offset: number): FDocumentQuote | null;
    findQuoteByText(text: string): FDocumentQuote | null;
    findQuotes(query: string | IDocsQuoteFindQuery): FDocumentQuote[];
    insertQuote(paragraph: FDocumentParagraph, options?: IDocsQuoteInsertParagraphFacadeOptions): FDocumentQuote | null;
    insertQuote(options?: IDocsQuoteInsertFacadeOptions): FDocumentQuote | null;
    private _getBlockRanges;
    private _createFDocumentQuote;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentQuoteMixinMixin {
    }
}
