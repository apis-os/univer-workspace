import type { IPdfTextObject, PdfDocumentModel, PdfListPresetId } from '@univerjs-pro/pdfs';
import type { IPdfListItemInput, IPdfListItemSnapshot } from './types';
import { Injector } from '@univerjs/core';
import { FPdfPageElement } from './f-pdf-page-element';
/**
 * Facade for one story-backed semantic PDF list.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const list = page.insertList({
 *   text: 'First item',
 *   kind: univerAPI.Enum.PdfListKind.UNORDERED,
 *   preset: univerAPI.Enum.PdfListPresetId.UNORDERED_DISC,
 * });
 *
 * list
 *   .insertItem(1, { text: '第二项' })
 *   .insertItem(2, { text: '子项', level: 1 })
 *   .insertItem(3, { text: '第四项' });
 * console.log(list.getItems());
 * ```
 */
export declare class FPdfList extends FPdfPageElement<IPdfTextObject> {
    constructor(model: PdfDocumentModel, pageId: string, objectId: string, injector: Injector);
    /**
     * Return detached semantic list items in story order.
     *
     * @returns {readonly IPdfListItemSnapshot[]} The current list-item snapshots.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.getLists()[0];
     * console.log(list?.getItems());
     * ```
     */
    getItems(): readonly IPdfListItemSnapshot[];
    /**
     * Insert one semantic list item at a zero-based index.
     *
     * @param {number} index The insertion index.
     * @param {IPdfListItemInput} item The new item data.
     * @returns {this} This list Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.getLists()[0];
     * if (list) {
     *   list.insertItem(1, { text: 'Second item', level: 0 });
     * }
     * ```
     */
    insertItem(index: number, item: IPdfListItemInput): this;
    /**
     * Replace the body text of one stable list item.
     *
     * @param {string} itemId The stable item ID.
     * @param {string} text The replacement body text.
     * @returns {this} This list Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.getLists()[0];
     * const item = list?.getItems()[0];
     * if (list && item) {
     *   list.setItemText(item.id, 'Updated item');
     * }
     * ```
     */
    setItemText(itemId: string, text: string): this;
    /**
     * Remove one stable semantic list item.
     *
     * @param {string} itemId The stable item ID.
     * @returns {this} This list Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.getLists()[0];
     * const item = list?.getItems()[0];
     * if (list && item) {
     *   list.removeItem(item.id);
     * }
     * ```
     */
    removeItem(itemId: string): this;
    /**
     * Set the absolute zero-based nesting level of one item.
     * Increasing the level requires a preceding item at the parent level, so the first item can only use level 0.
     *
     * @param {string} itemId The stable item ID.
     * @param {number} level The nesting level from 0 through 8.
     * @returns {this} This list Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.getLists()[0];
     * if (list) {
     *   list.insertItem(1, { text: 'Child item' });
     *   list.changeItemLevel(list.getItems()[1].id, 1);
     * }
     * ```
     */
    changeItemLevel(itemId: string, level: number): this;
    /**
     * Replace this list's marker preset.
     *
     * @param {PdfListPresetId} preset The new list preset.
     * @returns {this} This list Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.getLists()[0];
     * if (list) {
     *   list.setPreset(univerAPI.Enum.PdfListPresetId.UNORDERED_SQUARE);
     * }
     * ```
     */
    setPreset(preset: PdfListPresetId): this;
    /**
     * Set the starting ordinal for level zero of an ordered list.
     * All built-in `ORDERED_*` presets support this operation; unordered lists do not.
     *
     * @param {number} startNumber The positive first ordinal.
     * @returns {this} This list Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.insertList({
     *   text: 'First item',
     *   kind: univerAPI.Enum.PdfListKind.ORDERED,
     *   preset: univerAPI.Enum.PdfListPresetId.ORDERED_NUMBER_ALPHA,
     * });
     *
     * list
     *   .insertItem(1, { text: '第二项' })
     *   .insertItem(2, { text: '子项', level: 1 })
     *   .insertItem(3, { text: '第四项' });
     * list.setStartNumber(3);
     * ```
     */
    setStartNumber(startNumber: number): this;
    private _resolveList;
    private _resolveItemRun;
    private _getTextStory;
    private _getBlockText;
    private _missingItem;
}
