import type { FDocument } from '@univerjs/docs/facade';
import type { IDocsQuoteInfo, IDocsQuoteRange, IDocsQuoteStyle } from './types';
import { ICommandService, ThemeService } from '@univerjs/core';
/**
 * Facade object for a single docs quote block.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 *
 * const quotes = fDocument.getQuotes();
 * console.log(quotes);
 *
 * const quote = fDocument.findQuoteByText('Decision');
 * console.log(quote?.getText());
 * if (quote) {
 *   console.log(quote.getStyle());
 *   quote.setStyle({ lineColor: '#5B5FC7', textColor: '#242424' });
 *   console.log(quote.describe());
 * }
 * ```
 */
export declare class FDocumentQuote {
    private _document;
    private _blockId;
    private readonly _commandService;
    private readonly _themeService;
    private readonly _unitId;
    constructor(_document: FDocument, _blockId: string, _commandService: ICommandService, _themeService: ThemeService);
    /**
     * Returns the quote block id.
     * @returns {string} The quote block range id.
     * @example
     * const fDocument = univerAPI.getActiveDocument();
     * const quotes = fDocument.getQuotes();
     *
     * // Get the id of the first quote.
     * if (quotes.length > 0) {
     *   const quote = quotes[0];
     *   console.log(quote.getId());
     * }
     * ```
     */
    getId(): string;
    /**
     * Returns the quote block range in the document data stream.
     * @returns {IDocsQuoteRange | null} The quote range, or `null` if it no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quotes = fDocument.getQuotes();
     *
     * // Get the range of the first quote.
     * if (quotes.length > 0) {
     *   const quote = quotes[0];
     *   console.log(quote.getRange());
     * }
     * ```
     */
    getRange(): IDocsQuoteRange | null;
    /**
     * Returns plain text inside the quote.
     * @returns {string} The quote text with block tokens removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quote = fDocument.findQuoteByText('Decision');
     *
     * if (quote) {
     *   console.log(quote.getText());
     * }
     * ```
     */
    getText(): string;
    /**
     * Returns both user-editable Quote colors as one serializable object.
     * @returns {IDocsQuoteStyle} The current left-line color and first effective text color.
     * @example
     * ```ts
     * const quote = univerAPI.getActiveDocument()?.findQuoteByText('Decision');
     * if (!quote) {
     *   throw new Error('Quote not found');
     * }
     * console.log(JSON.stringify(quote.getStyle(), null, 2));
     * ```
     */
    getStyle(): IDocsQuoteStyle;
    /**
     * Returns an agent-friendly description of the quote.
     * @returns {IDocsQuoteInfo | null} The quote id, range, text, and style, or `null` if it no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quote = fDocument.findQuoteByText('Decision');
     *
     * if (quote) {
     *   console.log(quote.describe());
     * }
     * ```
     */
    describe(): IDocsQuoteInfo | null;
    /**
     * Updates one or both Quote colors as one command and one undo history entry.
     * Omitted colors retain their current values.
     * @param {Partial<IDocsQuoteStyle>} style The left-line color, text color, or both.
     * @returns {boolean} Whether the style command succeeded.
     * @example
     * ```ts
     * const quote = univerAPI.getActiveDocument()?.findQuoteByText('Decision');
     * if (!quote) {
     *   throw new Error('Quote not found');
     * }
     * const updated = quote.setStyle({
     *   lineColor: '#5B5FC7',
     *   textColor: '#242424',
     * });
     * console.log({ updated, style: quote.getStyle() });
     * ```
     */
    setStyle(style: Partial<IDocsQuoteStyle>): boolean;
    /** Sets the color of the Quote's left rule through the Quote style command. */
    setLineColor(lineColor: string): boolean;
    /** Applies one text color to all text in this Quote through the Quote style command. */
    setTextColor(textColor: string): boolean;
    /**
     * Unwraps this quote by removing only the quote block formatting.
     * @returns {boolean} Whether the quote block formatting was removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quote = fDocument.findQuoteByText('Decision');
     *
     * if (quote) {
     *   const success = quote.unwrap();
     *   console.log(success);
     * }
     * ```
     */
    unwrap(): boolean;
    /**
     * Removes this quote block and its content.
     * @returns {boolean} Whether the quote block was removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const quote = fDocument.findQuoteByText('Decision');
     *
     * if (quote) {
     *   const success = quote.remove();
     *   console.log(success);
     * }
     * ```
     */
    remove(): boolean;
    private _getBlockRange;
    private _updateStyle;
    private _getDocumentData;
    private _getStyle;
    private _getText;
}
