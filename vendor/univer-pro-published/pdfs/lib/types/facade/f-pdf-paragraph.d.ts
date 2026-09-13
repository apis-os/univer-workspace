import type { IPdfTextObject, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { IPdfParagraphBlockInput, IPdfParagraphBlockSnapshot, IPdfParagraphStyle } from './types';
import { Injector } from '@univerjs/core';
import { FPdfPageElement } from './f-pdf-page-element';
/**
 * Facade for one story-backed editable paragraph frame.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const paragraph = page.insertParagraph({
 *   text: 'First paragraph',
 *   fontSize: 24,
 * });
 * console.log(paragraph.getBlocks());
 *
 * paragraph.appendBlock({
 *   text: 'Second paragraph',
 *   textStyle: {
 *     fontSize: 18,
 *     bold: true,
 *   }
 * });
 *
 * const block = paragraph.getBlocks()[0];
 * paragraph
 *   .setBlockText(block.id, 'Updated first paragraph')
 *   .setBlockStyle(block.id, { align: 'center' });
 * ```
 */
export declare class FPdfParagraph extends FPdfPageElement<IPdfTextObject> {
    constructor(model: PdfDocumentModel, pageId: string, objectId: string, injector: Injector);
    /**
     * Return detached paragraph blocks in story order.
     *
     * @returns {readonly IPdfParagraphBlockSnapshot[]} The current block snapshots.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const paragraph = page.getParagraphs()[0];
     * console.log(paragraph?.getBlocks());
     * ```
     */
    getBlocks(): readonly IPdfParagraphBlockSnapshot[];
    /**
     * Insert one stable paragraph block at a zero-based index.
     *
     * @param {number} index The insertion index.
     * @param {IPdfParagraphBlockInput} block The new block data.
     * @returns {this} This paragraph Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const paragraph = page.getParagraphs()[0];
     * if (paragraph) {
     *   paragraph.insertBlock(0, {
     *     text: 'Inserted paragraph',
     *     textStyle: {
     *       fontSize: 20,
     *       italic: true,
     *     }
     *   });
     * }
     * ```
     */
    insertBlock(index: number, block: IPdfParagraphBlockInput): this;
    /**
     * Append one stable paragraph block.
     *
     * @param {IPdfParagraphBlockInput} block The new block data.
     * @returns {this} This paragraph Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const paragraph = page.getParagraphs()[0];
     * if (paragraph) {
     *   paragraph.appendBlock({
     *     text: 'Last paragraph',
     *     textStyle: {
     *       fontSize: 16,
     *       underline: true,
     *     }
     *   });
     * }
     * ```
     */
    appendBlock(block: IPdfParagraphBlockInput): this;
    /**
     * Replace the text in a generated paragraph block.
     *
     * @param {string} blockId The stable block ID.
     * @param {string} text The replacement text.
     * @returns {this} This paragraph Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const paragraph = page.getParagraphs()[0];
     * const block = paragraph?.getBlocks()[0];
     * if (paragraph && block) {
     *   paragraph.setBlockText(block.id, 'Updated paragraph');
     * }
     * ```
     */
    setBlockText(blockId: string, text: string): this;
    /**
     * Apply paragraph layout properties to one stable block.
     *
     * @param {string} blockId The stable block ID.
     * @param {IPdfParagraphStyle} style The paragraph style patch.
     * @returns {this} This paragraph Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const paragraph = page.getParagraphs()[0];
     * const block = paragraph?.getBlocks()[0];
     * if (paragraph && block) {
     *   paragraph.setBlockStyle(block.id, {
     *     align: 'center'
     *   });
     * }
     * ```
     */
    setBlockStyle(blockId: string, style: IPdfParagraphStyle): this;
    /**
     * Remove one stable paragraph block.
     *
     * @param {string} blockId The stable block ID.
     * @returns {this} This paragraph Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const paragraph = page.getParagraphs()[0];
     * const block = paragraph?.getBlocks()[0];
     * if (paragraph && block) {
     *   paragraph.removeBlock(block.id);
     * }
     * ```
     */
    removeBlock(blockId: string): this;
    private _resolveBlockRun;
    private _getTextStory;
    private _getBlockText;
}
