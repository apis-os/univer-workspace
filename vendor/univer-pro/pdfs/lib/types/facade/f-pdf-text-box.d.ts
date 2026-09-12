import type { IPdfTextObject, IPdfTextRun, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { IPdfTextRange, IPdfTextStyle } from './types';
import { PdfTextAnchor } from '@univerjs-pro/pdfs';
import { Injector } from '@univerjs/core';
import { FPdfPageElement } from './f-pdf-page-element';
/**
 * Facade for a simple editable PDF text box.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const textBox = page.insertTextBox({
 *   text: 'Hello PDF',
 *   left: 36,
 *   top: 36
 * });
 * console.log(textBox?.getText());
 *
 * textBox
 *   .setText('Updated text')
 *   .setTextStyle(
 *     {
 *       bold: true
 *     },
 *     {
 *       start: 0,
 *       end: 5
 *     }
 *   )
 *   .setTextAnchor(univerAPI.Enum.PdfTextAnchor.MIDDLE);
 * console.log(textBox?.getText());
 * ```
 */
export declare class FPdfTextBox extends FPdfPageElement<IPdfTextObject> {
    constructor(model: PdfDocumentModel, pageId: string, objectId: string, injector: Injector);
    /**
     * Return the current materialized text.
     *
     * @returns {string} The complete text-box text.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.getTextBoxes()[0];
     * console.log(textBox?.getText());
     * ```
     */
    getText(): string;
    /**
     * Return detached text runs in visual order.
     *
     * @returns {readonly IPdfTextRun[]} Detached text-run snapshots.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.getTextBoxes()[0];
     * console.log(textBox?.getTextRuns());
     * ```
     */
    getTextRuns(): readonly IPdfTextRun[];
    /**
     * Replace the complete text while retaining compatible run styling.
     *
     * @param {string} text The replacement text.
     * @returns {this} This text-box Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.getTextBoxes()[0];
     * if (textBox) {
     *   textBox.setText('Updated text');
     * }
     * ```
     */
    setText(text: string): this;
    /**
     * Apply text styling to the whole box or one UTF-16 range.
     *
     * @param {IPdfTextStyle} style The text style patch.
     * @param {IPdfTextRange} [range] An optional UTF-16 range.
     * @returns {this} This text-box Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.getTextBoxes()[0];
     * if (textBox) {
     *   textBox.setTextStyle(
     *     {
     *       bold: true
     *     },
     *     {
     *       start: 0,
     *       end: 5
     *     }
     *   );
     * }
     * ```
     */
    setTextStyle(style: IPdfTextStyle, range?: IPdfTextRange): this;
    /**
     * Return the current vertical text anchor.
     *
     * @returns {PdfTextAnchor} The current text anchor.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.getTextBoxes()[0];
     * console.log(textBox?.getTextAnchor());
     * ```
     */
    getTextAnchor(): PdfTextAnchor;
    /**
     * Set the vertical text anchor.
     *
     * @param {PdfTextAnchor} anchor The new text anchor.
     * @returns {this} This text-box Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.getTextBoxes()[0];
     * if (textBox) {
     *   textBox.setTextAnchor(univerAPI.Enum.PdfTextAnchor.MIDDLE);
     * }
     * ```
     */
    setTextAnchor(anchor: PdfTextAnchor): this;
}
